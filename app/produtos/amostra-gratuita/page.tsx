import type { Metadata } from "next";
import { LeadForm } from "@/components/Forms";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Amostra Gratuita",
  description: "Solicite uma amostra com até 10 empresas para avaliar o formato da base B2B.",
};

export default function FreeSamplePage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Amostra gratuita"
          title="Teste o formato da base antes de comprar."
          text="Solicite uma amostra com até 10 empresas para avaliar a organização e o padrão de entrega."
        />
        <LeadForm mode="sample" />
      </div>
    </section>
  );
}
