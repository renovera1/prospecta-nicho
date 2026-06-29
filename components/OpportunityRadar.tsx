import Image from "next/image";

const signals = [
  "Empresas abertas nos ultimos 60 dias",
  "Campinas + regiao",
  "CNAE 7319",
  "ME e EPP",
  "Perfil: contratacao de marketing",
];

export function OpportunityRadar() {
  return (
    <div className="opportunity-radar" aria-label="Radar de oportunidades comerciais com exemplos ficticios">
      <Image className="radar-shield" src="/assets/brand/shield-icon-light.svg" alt="" width={210} height={245} aria-hidden="true" />
      <div className="radar-map">
        <span className="radar-pulse" />
        <span className="radar-dot dot-a" />
        <span className="radar-dot dot-b" />
        <span className="radar-dot dot-c" />
        <span className="radar-dot dot-d" />
        <span className="radar-line line-a" />
        <span className="radar-line line-b" />
      </div>
      <div className="radar-panel">
        <strong>Sinais ilustrativos</strong>
        {signals.map((signal) => <span key={signal}>{signal}</span>)}
      </div>
      <div className="radar-list">
        <div><b>Atelie Luma</b><span>Campinas - nova empresa</span></div>
        <div><b>Clinica Norte</b><span>Jundiai - perfil ideal</span></div>
        <div><b>Vertice Midia</b><span>Sorocaba - em expansao</span></div>
      </div>
    </div>
  );
}
