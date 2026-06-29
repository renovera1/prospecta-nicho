import type { Metadata } from "next";
import { LegacyFrame } from "@/components/LegacyFrame";

export const metadata: Metadata = {
  title: "Blog | Renovera",
  description: "Blog legado da Renovera.",
};

export default function BlogPage() {
  return <LegacyFrame src="/assets/renovera-legado/pages/insights.html" title="Renovera - Blog" />;
}
