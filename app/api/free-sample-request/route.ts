import { NextResponse } from "next/server";
import { z } from "zod";
import { persistLead, sendTransactionalEmail, writeAuditLog } from "@/lib/server/integrations";
import { hasHoneypot, rateLimit, sanitizePhone, sanitizeText, verifyTurnstileIfConfigured } from "@/lib/server/security";

const sampleRequestSchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().max(160).optional(),
  whatsapp: z.string().min(8).max(32),
  niche: z.string().min(2).max(160),
  city: z.string().min(2).max(160),
  email: z.string().email().optional(),
  goal: z.string().optional(),
  consent: z.boolean().optional(),
  source: z.string().optional(),
  companySite: z.string().optional(),
  turnstileToken: z.string().optional(),
});

export async function POST(request: Request) {
  const limited = rateLimit(request, "sample", 5, 60_000);
  if (limited) return limited;

  const raw = (await request.json()) as Record<string, unknown>;
  if (hasHoneypot(raw)) return NextResponse.json({ ok: true, message: "Amostra solicitada." });

  const parsed = sampleRequestSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Dados inválidos." }, { status: 400 });
  }

  const turnstileOk = await verifyTurnstileIfConfigured(request, parsed.data.turnstileToken);
  if (!turnstileOk) {
    return NextResponse.json({ ok: false, message: "Falha na verificação de segurança." }, { status: 403 });
  }

  const payload = {
    source: parsed.data.source || "sample-request",
    name: sanitizeText(parsed.data.name, 120),
    company: sanitizeText(parsed.data.company, 160),
    whatsapp: sanitizePhone(parsed.data.whatsapp),
    niche: sanitizeText(parsed.data.niche, 160),
    city: sanitizeText(parsed.data.city, 160),
    email: sanitizeText(parsed.data.email, 180),
    maskedSampleOnly: true,
    createdAt: new Date().toISOString(),
  };

  const persistence = await persistLead("leads", payload);
  const internalEmail = await sendTransactionalEmail("sample_internal", payload);
  const confirmationEmail = await sendTransactionalEmail("sample_confirmation", payload);
  await writeAuditLog("sample_requested", { whatsapp: payload.whatsapp, niche: payload.niche });

  return NextResponse.json({
    ok: true,
    id: persistence.id,
    message: "Amostra solicitada. A amostra demonstra estrutura e não entrega uma base comercial completa.",
    integrations: {
      supabase: persistence.configured,
      resendInternal: internalEmail.configured,
      resendConfirmation: confirmationEmail.configured,
    },
  });
}
