import { routes } from "@/lib/routes";
import { createWhatsAppLink } from "@/lib/whatsapp";

export type CtaKind = "internal" | "checkout" | "whatsapp" | "anchor" | "form" | "external";

export type CtaDefinition = {
  kind: CtaKind;
  label: string;
  destination: string;
  message?: string;
};

const localUrlPattern = /localhost|127\.0\.0\.1|:3000|:3001/i;
const validInternalRoutes = new Set<string>(Object.values(routes));

export function validateCta(cta: CtaDefinition) {
  const errors: string[] = [];
  const destination = cta.destination.trim();

  if (!cta.label.trim()) errors.push("O rótulo do CTA é obrigatório.");
  if (cta.label.length > 42) errors.push("O rótulo do CTA deve ter no máximo 42 caracteres.");
  if (!destination) errors.push("O destino do CTA é obrigatório.");
  if (/^javascript:/i.test(destination)) errors.push("CTA não pode usar javascript:.");
  if (localUrlPattern.test(destination)) errors.push("CTA não pode usar URL local.");

  if (cta.kind === "internal" && !validInternalRoutes.has(destination)) {
    errors.push("Destino interno não está na lista de rotas válidas.");
  }
  if (cta.kind === "anchor" && !destination.startsWith("#")) {
    errors.push("Âncora deve começar com #.");
  }
  if (cta.kind === "external" && !/^https:\/\//i.test(destination)) {
    errors.push("Links externos devem usar HTTPS.");
  }

  return { ok: errors.length === 0, errors };
}

export function resolveCtaHref(cta: CtaDefinition) {
  const validation = validateCta(cta);
  if (!validation.ok) return "";
  if (cta.kind === "whatsapp") return createWhatsAppLink(cta.message || cta.label) || "/contato";
  if (cta.kind === "checkout") return cta.destination;
  return cta.destination;
}
