export const defaultWhatsAppMessage =
  "Ola, conheci a ProspectaNicho e gostaria de entender qual base faz mais sentido para minha opera??o.";

export function getWhatsAppNumber() {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
}

export function createWhatsAppLink(message = defaultWhatsAppMessage) {
  const number = getWhatsAppNumber();
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppUrl(message: string) {
  return createWhatsAppLink(message);
}
