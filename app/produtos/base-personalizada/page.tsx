import type { Metadata } from "next";
import { LeadForm } from "@/components/Forms";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Base Personalizada",
  description: "Solicite uma base B2B sob demanda com nicho, cidade, CNAE, porte, datas e campos desejados.",
};

export default function CustomBasePage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Sob demanda"
          title="Solicite uma Base Personalizada"
          text="Informe nicho, região, datas, porte, quantidade aproximada e objetivo comercial. A equipe confirma escopo, viabilidade e prazo antes da entrega."
        />
        <LeadForm mode="custom" />
      </div>
    </section>
  );
}
