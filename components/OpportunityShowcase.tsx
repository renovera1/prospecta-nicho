import { assetPath } from "@/lib/asset-path";

const examples = [
  {
    company: "Empresa A***",
    city: "Campinas",
    signal: "Aberta há 64 dias",
  },
  {
    company: "Empresa B***",
    city: "Valinhos",
    signal: "ME com presença digital em formação",
  },
];

export function OpportunityShowcase() {
  return (
    <div className="opportunity-showcase" aria-label="Exemplo ilustrativo de base personalizada ProspectaNicho">
      <div className="opportunity-showcase__media">
        <picture>
          <source media="(max-width: 680px)" srcSet={assetPath("/assets/images/opportunity-showcase-mobile.webp")} />
          <img
            src={assetPath("/assets/images/opportunity-showcase.webp")}
            alt="Profissionais analisando uma planilha comercial com gráficos e sinais de prospecção"
          />
        </picture>
        <span>Exemplo ilustrativo</span>
      </div>
      <div className="opportunity-showcase__panel">
        <p className="eyebrow eyebrow--dark">Base personalizada</p>
        <h2 className="h3">Agências em Campinas</h2>
        <dl>
          <div>
            <dt>Período</dt>
            <dd>Últimos 90 dias</dd>
          </div>
          <div>
            <dt>Porte</dt>
            <dd>ME e EPP</dd>
          </div>
        </dl>
        <div className="opportunity-showcase__examples" aria-label="Exemplos fictícios de linhas de entrega">
          {examples.map((example) => (
            <article key={example.company}>
              <strong>{example.company}</strong>
              <span>{example.city}</span>
              <small>{example.signal}</small>
            </article>
          ))}
        </div>
        <p className="opportunity-showcase__note">Dados mascarados. A entrega real depende de disponibilidade e escopo aprovado.</p>
      </div>
    </div>
  );
}
