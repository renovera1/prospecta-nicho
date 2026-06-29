import type { Metadata } from "next";
import { LegacyFrame } from "@/components/LegacyFrame";

export const metadata: Metadata = {
  title: "REN 1.059/2023 | Renovera",
};

export default function BlogNovaRegulamentacaoPage() {
  return (
    <LegacyFrame
      src="/assets/renovera-legado/pages/blog-nova-regulamentacao.html"
      title="Renovera - REN 1.059/2023"
    />
  );
}
