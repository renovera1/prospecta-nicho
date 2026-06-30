const rows = [
  ["Studio Clara", "Est?tica", "Campinas", "9602-5/02", "ME", "05/2026", "site", "Nova empresa"],
  ["Nexo Solar", "Energia", "Ribeirao", "4321-5/00", "EPP", "04/2026", "comercial@", "Perfil ideal"],
  ["Alpha Food", "Alimenta??o", "Jundiai", "5611-2/01", "ME", "06/2026", "site", "Prioridade"],
  ["Vertice ERP", "Sistemas", "Sorocaba", "6201-5/01", "EPP", "03/2026", "contato@", "Em expansao"],
];

const heads = ["Empresa", "Segmento", "Cidade", "CNAE", "Porte", "Abertura", "Contato empresarial", "Status"];

export function LeadPreviewSheet() {
  return (
    <div className="lead-preview-sheet">
      <div className="sheet-head">
        <span>ProspectaNicho / Oportunidades</span>
        <strong>Base pronta para acao</strong>
      </div>
      <div className="sheet-grid">
        {heads.map((head) => <strong title={head} key={head}>{head}</strong>)}
        {rows.flatMap((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <span className={cellIndex === 7 || rowIndex === 0 ? "is-highlighted" : ""} key={`${rowIndex}-${cellIndex}`}>{cell}</span>
          )),
        )}
      </div>
    </div>
  );
}
