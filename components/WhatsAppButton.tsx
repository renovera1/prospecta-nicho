import { createWhatsAppLink, defaultWhatsAppMessage } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const href = createWhatsAppLink(defaultWhatsAppMessage);

  if (!href) return null;

  return (
    <a
      className="button button--teal whatsapp"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a ProspectaNicho no WhatsApp"
      data-tooltip="Falar sobre meu p?blico"
    >
      <svg aria-hidden="true" width="25" height="25" viewBox="0 0 32 32" role="img">
        <path
          fill="currentColor"
          d="M16.02 3.2A12.68 12.68 0 0 0 5.1 22.34L3.2 29l6.82-1.79A12.68 12.68 0 1 0 16.02 3.2Zm0 2.22a10.46 10.46 0 0 1 8.89 15.96 10.46 10.46 0 0 1-13.9 3.7l-.49-.25-4.05 1.06 1.08-3.94-.29-.51A10.46 10.46 0 0 1 16.02 5.42Zm-4.3 5.66c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.5 4 6.17 5.45 3.05 1.2 3.67.96 4.33.9.66-.06 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.96-1.8-2.14-2.01-2.5-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.61-.81-.62h-.7Z"
        />
      </svg>
    </a>
  );
}
