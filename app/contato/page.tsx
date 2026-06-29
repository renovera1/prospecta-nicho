import type { Metadata } from "next";
import { LegacyFrame } from "@/components/LegacyFrame";

export const metadata: Metadata = {
  title: "Contato | Renovera",
  description: "Pagina de contato legada da Renovera.",
};

export default function ContatoPage() {
  return <LegacyFrame src="/assets/renovera-legado/pages/contato.html" title="Renovera - Contato" />;
}
