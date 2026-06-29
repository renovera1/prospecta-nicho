import type { Metadata } from "next";
import { LegacyFrame } from "@/components/LegacyFrame";

export const metadata: Metadata = {
  title: "Direitos junto a concessionaria | Renovera",
};

export default function BlogDireitosConcessionariaPage() {
  return (
    <LegacyFrame
      src="/assets/renovera-legado/pages/blog-direitos-concessionaria.html"
      title="Renovera - Direitos junto a concessionaria"
    />
  );
}
