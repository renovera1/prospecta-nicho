const columns = ["Empresa", "Segmento", "Cidade", "CNAE", "Porte", "Abertura", "Site", "Contato empresarial", "Status"];

const rows = [
  ["Clínica A***", "Saúde", "Campinas", "8630-5/03", "ME", "05/2026", "site", "contato@", "Nova empresa"],
  ["Nexo S***", "Energia solar", "Ribeirão Preto", "4321-5/00", "EPP", "04/2026", "site", "comercial@", "Perfil ideal"],
  ["Alpha F***", "Alimentação", "Jundiaí", "5611-2/01", "ME", "06/2026", "site", "atendimento@", "Prioridade"],
  ["Vértice E***", "Sistemas", "Sorocaba", "6201-5/01", "EPP", "03/2026", "site", "contato@", "Em expansão"],
];

export function LeadDeliveryPreview() {
  return (
    <div className="delivery-preview" aria-label="Prévia profissional de entrega de base B2B">
      <div className="delivery-body">
        <div className="delivery-toolbar">
          <strong>ProspectaNicho / Entrega</strong>
          <span>Campos visíveis</span>
          <span>Ativas</span>
          <span>ME e EPP</span>
          <span>90 dias</span>
          <span>Excel</span>
          <span>CSV</span>
          <span>Filtros salvos</span>
          <span>Exemplo ilustrativo</span>
        </div>
        <div className="delivery-row" aria-hidden="true">
          {columns.map((column) => <strong key={column}>{column}</strong>)}
        </div>
        {rows.map((row) => (
          <div className="delivery-row" key={row.join("-")}>
            {row.map((cell, index) => (
              index === 8 ? <span className="status-pill" key={cell}>{cell}</span> : <span key={`${cell}-${index}`}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
      <p className="delivery-note">
        Exemplo ilustrativo. Campos entregues variam conforme produto, disponibilidade, origem e escopo contratado.
      </p>
    </div>
  );
}
