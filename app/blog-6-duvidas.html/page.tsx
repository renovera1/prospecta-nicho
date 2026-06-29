import type { Metadata } from "next";
import { LegacyFrame } from "@/components/LegacyFrame";

export const metadata: Metadata = {
  title: "6 duvidas sobre geracao distribuida | Renovera",
};

export default function BlogSeisDuvidasPage() {
  return (
    <LegacyFrame
      src="/assets/renovera-legado/pages/blog-6-duvidas.html"
      title="Renovera - 6 duvidas sobre geracao distribuida"
    />
  );
}
