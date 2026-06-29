import type { BaseBuilderData } from "@/types/editor";

const fallbackRows = [
  ["Clinica A***", "Saude e estetica", "Campinas", "ME", "05/2026", "Perfil ideal"],
  ["Loja B***", "Comercio", "Jundiai", "EPP", "04/2026", "Nova empresa"],
  ["Servico C***", "Servicos B2B", "Sorocaba", "ME", "06/2026", "Prioridade"],
];

export function LeadPreview({ data }: { data: BaseBuilderData }) {
  const city = data.city || "Regiao definida";
  const segment = data.segment || data.audience || "Segmento definido";

  const rows = fallbackRows.map((row, index) => {
    if (index === 0) return ["Empresa A***", segment, city, data.companySize[0] || "ME", "Periodo filtrado", "Perfil ideal"];
    return row;
  });

  return (
    <div className="editor-preview" aria-label="Previa ilustrativa de entrega">
      <div className="sheet-head">
        <span>Previa de entrega</span>
        <strong>Dados ficticios e mascarados</strong>
      </div>
      <div className="preview-grid">
        {["Empresa", "Segmento", "Cidade", "Porte", "Abertura", "Status"].map((head) => (
          <strong key={head}>{head}</strong>
        ))}
        {rows.flatMap((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <span className={cellIndex === 5 ? "is-highlighted" : ""} key={`${rowIndex}-${cellIndex}`}>
              {cell}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
