import type { Metadata } from "next";
import { LegacyFrame } from "@/components/LegacyFrame";

export const metadata: Metadata = {
  title: "Sobre | Renovera",
  description: "Pagina institucional legada da Renovera.",
};

export default function SobrePage() {
  return <LegacyFrame src="/assets/renovera-legado/pages/sobre.html" title="Renovera - Sobre" />;
}
