import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = { title: "Como funciona" };

const steps = [
  "Escolha uma base pronta ou informe seus critérios.",
  "Confirme o recorte, volume, campos possíveis e prazo.",
  "Realize o pagamento ou avance pelo atendimento comercial.",
  "Receba a planilha organizada para sua operação.",
  "Inicie a prospecção com uso responsável e adequado.",
];

export default function HowItWorksPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Processo" title="Como funciona" text="O fluxo foi desenhado para transformar critérios comerciais em uma base objetiva, sem promessas irreais." />
        <div className="process">
          {steps.map((step) => <article className="card" key={step}><h2 className="h3">{step}</h2></article>)}
        </div>
      </div>
    </section>
  );
}
