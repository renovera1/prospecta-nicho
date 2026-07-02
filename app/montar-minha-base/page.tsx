import type { Metadata } from "next";
import { Suspense } from "react";
import { BaseBuilderSearchClient } from "@/components/editor/BaseBuilderSearchClient";

export const metadata: Metadata = {
  title: "Monte sua base",
  description: "Transforme seu público ideal em um recorte comercial claro para prospecção B2B.",
};

export default function MontarMinhaBasePage() {
  return (
    <Suspense fallback={null}>
      <BaseBuilderSearchClient />
    </Suspense>
  );
}
