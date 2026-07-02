export type SegmentCard = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export const segmentCards: SegmentCard[] = [
  {
    id: "agencias",
    label: "Agências",
    title: "Agências",
    description: "Encontre empresas que estão estruturando presença digital.",
  },
  {
    id: "contabilidades",
    label: "Contabilidades",
    title: "Contabilidades",
    description: "Aproxime-se de empresas recém-abertas antes da concorrência.",
  },
  {
    id: "energia-solar",
    label: "Energia solar",
    title: "Energia solar",
    description: "Priorize regiões e perfis com maior potencial comercial.",
  },
  {
    id: "erp-e-sistemas",
    label: "ERP e sistemas",
    title: "ERP e sistemas",
    description: "Ache empresas com rotina operacional e necessidade de organização.",
  },
  {
    id: "maquininhas",
    label: "Maquininhas",
    title: "Maquininhas",
    description: "Prospecte negócios que vendem presencialmente ou estão começando.",
  },
  {
    id: "comunicacao-visual",
    label: "Comunicação visual",
    title: "Comunicação visual",
    description: "Chegue quando a empresa precisa de fachada, marca e materiais.",
  },
  {
    id: "consultorias",
    label: "Consultorias",
    title: "Consultorias",
    description: "Filtre empresas por momento, porte e atividade econômica.",
  },
  {
    id: "certificado-digital",
    label: "Certificado digital",
    title: "Certificado digital",
    description: "Encontre empresas com demanda operacional inicial.",
  },
  {
    id: "seguros-empresariais",
    label: "Seguros empresariais",
    title: "Seguros empresariais",
    description: "Mapeie negócios que precisam proteger sua operação.",
  },
  {
    id: "seguranca-do-trabalho",
    label: "Segurança do trabalho",
    title: "Segurança do trabalho",
    description: "Foque em segmentos com exigências e riscos operacionais.",
  },
];

export function getSegmentById(value?: string | null) {
  if (!value) return segmentCards[0];
  const normalized = value.toLowerCase().trim();
  return (
    segmentCards.find((segment) => segment.id === normalized) ||
    segmentCards.find((segment) => segment.label.toLowerCase() === normalized) ||
    segmentCards[0]
  );
}

export function buildQuickRequestHref(segmentId: string, source = "segment-card") {
  const params = new URLSearchParams({ segment: segmentId, source });
  return `/solicitar-planilha?${params.toString()}`;
}
