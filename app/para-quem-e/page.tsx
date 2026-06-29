import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Para quem é",
  description: "Veja como diferentes operações B2B usam recortes comerciais da ProspectaNicho.",
};

export default function ParaQuemEPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Para quem é</p>
          <h1 className="h1">Recortes comerciais para operações B2B que precisam vender com foco.</h1>
          <p className="lead">
            Agências, contabilidades, energia solar, ERP, meios de pagamento e consultorias usam critérios diferentes.
            A ProspectaNicho ajuda a transformar esses critérios em uma base clara para prospecção.
          </p>
          <div className="btn-row">
            <ButtonLink href="/montar-minha-base" variant="primary">Montar minha base</ButtonLink>
            <ButtonLink href="/produtos/amostra-gratuita" variant="secondary">Receber 10 empresas de amostra</ButtonLink>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container card-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article className="card" key={solution.slug}>
                <Icon size={28} />
                <h2 className="h3">{solution.title}</h2>
                <p className="muted">{solution.pain}</p>
                <ButtonLink href={`/solucoes/${solution.slug}`} variant="secondary">Ver campos e detalhes</ButtonLink>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
