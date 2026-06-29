import type { Metadata } from "next";
import { LegacyFrame } from "@/components/LegacyFrame";

export const metadata: Metadata = {
  title: "Aterramento e equipotencializacao | Renovera",
};

export default function BlogAterramentoPage() {
  return (
    <LegacyFrame
      src="/assets/renovera-legado/pages/blog-aterramento.html"
      title="Renovera - Aterramento e equipotencializacao"
    />
  );
}
