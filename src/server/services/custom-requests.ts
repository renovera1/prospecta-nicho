import type { CustomRequestInput } from "@/src/schemas/custom-request";
import { sanitizePhone, sanitizeText } from "@/lib/server/security";
import { getSegmentById } from "@/lib/segments";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { createAuditLog, createLead, sendEmail } from "@/src/server/repositories/lead-repository";

type CachedResponse = {
  expiresAt: number;
  body: Record<string, unknown>;
};

const globalCache = globalThis as typeof globalThis & {
  __prospectaQuickRequestCache?: Map<string, CachedResponse>;
};

const idempotencyCache = globalCache.__prospectaQuickRequestCache ?? new Map<string, CachedResponse>();
globalCache.__prospectaQuickRequestCache = idempotencyCache;

function cleanExpiredCache() {
  const now = Date.now();
  for (const [key, value] of idempotencyCache.entries()) {
    if (value.expiresAt <= now) idempotencyCache.delete(key);
  }
}

function getIdempotencyKey(data: CustomRequestInput) {
  const explicit = sanitizeText(data.idempotencyKey, 140);
  if (explicit) return explicit;
  return [data.segment, data.location, data.period, sanitizePhone(data.whatsapp)].join(":").toLowerCase();
}

export async function submitCustomRequest(data: CustomRequestInput) {
  cleanExpiredCache();
  const idempotencyKey = getIdempotencyKey(data);
  const cached = idempotencyCache.get(idempotencyKey);
  if (cached) return { ...cached.body, idempotent: true };

  const segment = getSegmentById(data.segment);
  const createdAt = new Date().toISOString();
  const email = sanitizeText(data.email, 180) || null;
  const payload = {
    source: sanitizeText(data.source, 80) || "quick-planilha",
    segmentSlug: segment.id,
    segment: segment.label,
    niche: segment.label,
    city: sanitizeText(data.location, 160),
    location: sanitizeText(data.location, 160),
    state: sanitizeText(data.state, 2).toUpperCase(),
    openedPeriod: data.period,
    requestedQuantity: sanitizeText(data.quantity, 80),
    name: sanitizeText(data.name, 120),
    company: sanitizeText(data.company, 160),
    email,
    whatsapp: sanitizePhone(data.whatsapp),
    notes: sanitizeText(data.notes, 900),
    consent: true,
    status: "analysis",
    idempotencyKey,
    createdAt,
  };

  const requestRecord = await createLead("custom_requests", payload);
  const leadRecord = await createLead("leads", {
    source: "quick-planilha",
    name: payload.name,
    company: payload.company,
    email,
    whatsapp: payload.whatsapp,
    status: "new",
    consent: true,
    notes: `${payload.segment} | ${payload.location} | ${payload.openedPeriod}`,
    createdAt,
  });
  const internalEmail = await sendEmail("custom_request_internal", payload);
  const confirmationEmail = await sendEmail("custom_request_confirmation", payload);
  await createAuditLog("custom_request_submitted", {
    id: requestRecord.id,
    leadId: leadRecord.id,
    source: payload.source,
    segment: payload.segment,
  });

  const whatsappMessage =
    `Olá, solicitei uma planilha no site da ProspectaNicho.\n` +
    `Segmento: ${payload.segment}\n` +
    `Região: ${payload.location}${payload.state ? `/${payload.state}` : ""}\n` +
    `Período: ${payload.openedPeriod}\n` +
    `Nome: ${payload.name}`;
  const responseBody = {
    ok: true,
    id: requestRecord.id,
    leadId: leadRecord.id,
    status: "analysis",
    message: "Solicitação recebida. Vamos validar filtros, disponibilidade e escopo antes de qualquer cobrança.",
    summary: {
      segment: payload.segment,
      location: payload.location,
      state: payload.state,
      period: payload.openedPeriod,
      quantity: payload.requestedQuantity,
    },
    whatsappUrl: createWhatsAppLink(whatsappMessage),
    integrations: {
      supabase: requestRecord.configured,
      resendInternal: internalEmail.configured,
      resendConfirmation: confirmationEmail.configured,
    },
  };

  idempotencyCache.set(idempotencyKey, { body: responseBody, expiresAt: Date.now() + 10 * 60_000 });
  return responseBody;
}
