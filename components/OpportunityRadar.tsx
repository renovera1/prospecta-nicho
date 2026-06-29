import Image from "next/image";

const signals = [
  "Empresas abertas nos últimos 60 dias",
  "Campinas + região",
  "CNAE 7319",
  "ME e EPP",
  "Perfil: contratação de marketing",
];

export function OpportunityRadar() {
  return (
    <div className="opportunity-radar" aria-label="Radar de oportunidades comerciais com exemplos fictícios">
      <Image className="radar-shield" src="/assets/brand/shield-icon-light.svg" alt="" width={210} height={245} aria-hidden="true" />
      <span className="radar-status">Exemplo ilustrativo</span>
      <div className="radar-map">
        <span className="radar-pulse" />
        <span className="radar-sweep" />
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
        <div><b>Ateliê Luma</b><span>Campinas - nova empresa</span></div>
        <div><b>Clínica Norte</b><span>Jundiaí - perfil ideal</span></div>
        <div><b>Vértice Mídia</b><span>Sorocaba - em expansão</span></div>
      </div>
    </div>
  );
}
