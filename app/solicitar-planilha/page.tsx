import type { Metadata } from "next";
import { Suspense } from "react";
import { QuickPlanilhaRequestForm } from "@/app/solicitar-planilha/QuickPlanilhaRequestForm";

export const metadata: Metadata = {
  title: "Solicitar planilha",
  description: "Solicite rapidamente uma base B2B segmentada para validação da ProspectaNicho.",
};

export default function SolicitarPlanilhaPage() {
  return (
    <Suspense fallback={null}>
      <QuickPlanilhaRequestForm />
    </Suspense>
  );
}
