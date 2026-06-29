import { site } from "@/lib/site";

export const defaultWhatsAppMessage =
  "Ola, conheci a ProspectaNicho e gostaria de entender qual base faz mais sentido para minha operacao.";

export function getWhatsAppNumber() {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || site.whatsapp || "").replace(/\D/g, "");
}

export function createWhatsAppLink(message = defaultWhatsAppMessage) {
  const number = getWhatsAppNumber();
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
