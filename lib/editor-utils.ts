import type { BaseBuilderData, ProductRecommendation, SegmentPreset } from "@/types/editor";

const publicFilterKeys = [
  "audience",
  "goal",
  "segment",
  "keyword",
  "primaryCnae",
  "state",
  "city",
  "region",
  "openedPeriod",
  "quantityRange",
  "deliveryFormat",
] as const;

export function applyPreset(data: BaseBuilderData, preset: SegmentPreset): BaseBuilderData {
  return {
    ...data,
    audience: preset.audience,
    segment: preset.segment,
    goal: preset.goal,
    openedPeriod: preset.openedPeriod,
    companySize: preset.companySize,
  };
}

export function summarizeBuilder(data: BaseBuilderData) {
  const size = data.companySize.length ? `porte ${data.companySize.join(" e ")}` : "porte a definir";
  const city = data.city || data.region || "região definida";
  return `${data.segment || data.audience} em ${city}, ${data.openedPeriod}, ${size}.`;
}

export function recommendProduct(data: Pick<BaseBuilderData, "audience" | "openedPeriod" | "segment">): ProductRecommendation {
  const audience = `${data.audience} ${data.segment}`.toLowerCase();
  if (audience.includes("contabilidade")) return "Base para Contabilidades";
  if (audience.includes("agência") || audience.includes("agencia") || audience.includes("marketing")) return "Base para Agências";
  if (data.openedPeriod.includes("30") || data.openedPeriod.includes("60") || data.openedPeriod.includes("90")) {
    return "Base Empresas Recém-Abertas";
  }
  return "Base Personalizada";
}

export function estimateInvestment(recommendation: ProductRecommendation) {
  if (recommendation === "Base Empresas Recém-Abertas") return "R$ 147,00";
  if (recommendation === "Base para Agências") return "R$ 197,00";
  if (recommendation === "Base para Contabilidades") return "R$ 197,00";
  return "A partir de R$ 497,00";
}

export function serializePublicFilters(data: BaseBuilderData) {
  const params = new URLSearchParams();
  publicFilterKeys.forEach((key) => {
    const value = data[key];
    if (typeof value === "string" && value.trim()) params.set(key, value.trim());
  });
  if (data.companySize.length) params.set("companySize", data.companySize.join(","));
  return params.toString();
}

export function restorePublicFilters(search: string, fallback: BaseBuilderData): BaseBuilderData {
  const params = new URLSearchParams(search);
  const restored = { ...fallback };
  publicFilterKeys.forEach((key) => {
    const value = params.get(key);
    if (value) restored[key] = value;
  });
  const sizes = params.get("companySize");
  if (sizes) restored.companySize = sizes.split(",").filter(Boolean);
  return restored;
}

export function createBuilderWhatsAppMessage(data: BaseBuilderData) {
  return [
    "Olá, montei um recorte no site da ProspectaNicho e gostaria de validar a disponibilidade.",
    `Meu objetivo é: ${data.goal || "a definir"}.`,
    `Segmento: ${data.segment || data.audience || "a definir"}.`,
    `Região: ${[data.city, data.state].filter(Boolean).join("/") || data.region || "a definir"}.`,
    `Porte: ${data.companySize.join(", ") || "a definir"}.`,
    `Período: ${data.openedPeriod || "a definir"}.`,
    `Quantidade: ${data.quantityRange || "a definir"}.`,
  ].join(" ");
}
