export type ProductDefinition = {
  slug: string;
  title: string;
  shortDescription: string;
  commercialPromise: string;
  recommendedFor: string;
  price: string;
  currency: "BRL";
  deliveryFormat: string;
  defaultFilters: string[];
  defaultFields: string[];
  maxQuantity?: number;
  estimatedDelivery: string;
  checkoutLinkEnvKey?: string;
  fallbackWhatsappMessage: string;
  privacyRules: string[];
  badge: string;
};

export const productCatalog: ProductDefinition[] = [
  {
    slug: "empresas-recem-abertas",
    title: "Empresas recém-abertas",
    shortDescription: "Empresas abertas recentemente, organizadas por cidade, CNAE, porte e situação cadastral.",
    commercialPromise: "Entre na conversa quando a empresa ainda está definindo fornecedores, presença e operação.",
    recommendedFor: "Agências, contabilidades, ERP, certificado digital e comunicação visual.",
    price: "R$ 147,00",
    currency: "BRL",
    deliveryFormat: "Planilha organizada para Excel ou Google Sheets.",
    defaultFilters: ["Data de abertura", "Cidade", "UF", "CNAE", "Porte", "Situação ativa"],
    defaultFields: ["CNPJ", "Razão social", "Nome fantasia", "CNAE", "Cidade", "Estado", "Porte", "Data de abertura"],
    maxQuantity: 1000,
    estimatedDelivery: "Entrega conforme escopo confirmado após pagamento.",
    checkoutLinkEnvKey: "NEXT_PUBLIC_MP_LINK_EMPRESAS_RECEM_ABERTAS",
    fallbackWhatsappMessage: "Olá, quero escolher a base de empresas recém-abertas da ProspectaNicho.",
    privacyRules: ["Não inclui CPF, sócios ou contatos particulares.", "Campos adicionais variam por disponibilidade."],
    badge: "MAIS PROCURADA",
  },
  {
    slug: "agencias-marketing",
    title: "Base para agências",
    shortDescription: "Recortes para agências que vendem site, tráfego, social media, branding e presença digital.",
    commercialPromise: "Encontre empresas com potencial para site, tráfego, social media, branding e presença digital.",
    recommendedFor: "Agências, social medias, web designers e consultores de marketing.",
    price: "R$ 197,00",
    currency: "BRL",
    deliveryFormat: "Planilha pronta para rotina comercial consultiva.",
    defaultFilters: ["Comércio e serviços", "Cidade", "Porte", "CNAE", "Momento de abertura"],
    defaultFields: ["CNPJ", "Razão social", "Nome fantasia", "Cidade", "CNAE", "Porte", "Data de abertura"],
    maxQuantity: 1000,
    estimatedDelivery: "Entrega conforme escopo confirmado após pagamento.",
    checkoutLinkEnvKey: "NEXT_PUBLIC_MP_LINK_AGENCIAS_MARKETING",
    fallbackWhatsappMessage: "Olá, quero entender a base para agências da ProspectaNicho.",
    privacyRules: ["Não promete contato pessoal.", "Indicadores comerciais dependem de validação de origem."],
    badge: "PARA AGÊNCIAS",
  },
  {
    slug: "contabilidades",
    title: "Base para contabilidades",
    shortDescription: "Empresas novas e segmentos comerciais organizados para prospecção contábil.",
    commercialPromise: "Aproxime-se de empresas recém-abertas antes da concorrência.",
    recommendedFor: "Contabilidades, BPO financeiro, certificado digital e serviços empresariais.",
    price: "R$ 197,00",
    currency: "BRL",
    deliveryFormat: "Planilha com critérios comerciais e cadastrais.",
    defaultFilters: ["Empresas abertas recentemente", "ME e EPP", "Comércio e serviços", "Região definida"],
    defaultFields: ["CNPJ", "Razão social", "Nome fantasia", "Cidade", "Estado", "Porte", "Situação cadastral"],
    maxQuantity: 1000,
    estimatedDelivery: "Entrega conforme escopo confirmado após pagamento.",
    checkoutLinkEnvKey: "NEXT_PUBLIC_MP_LINK_CONTABILIDADES",
    fallbackWhatsappMessage: "Olá, quero entender a base para contabilidades da ProspectaNicho.",
    privacyRules: ["MEI e empresário individual exigem atenção de minimização.", "Não inclui quadro societário."],
    badge: "PARA CONTABILIDADES",
  },
  {
    slug: "base-personalizada",
    title: "Base personalizada",
    shortDescription: "Recorte sob demanda para nicho, região, período, porte e campos desejados.",
    commercialPromise: "Defina cidade, nicho, porte, período e quantidade. Nós estruturamos o recorte para sua operação.",
    recommendedFor: "Operações B2B que precisam de público específico, filtros próprios ou território definido.",
    price: "A partir de R$ 497,00",
    currency: "BRL",
    deliveryFormat: "Excel, CSV, Google Sheets ou importação em CRM quando aplicável.",
    defaultFilters: ["Nicho", "Cidade", "UF", "CNAE", "Porte", "Período", "Campos desejados"],
    defaultFields: ["CNPJ", "Razão social", "Nome fantasia", "CNAE", "Cidade", "Estado", "Porte"],
    estimatedDelivery: "Prazo definido após validação do recorte.",
    checkoutLinkEnvKey: "NEXT_PUBLIC_MP_LINK_BASE_PERSONALIZADA",
    fallbackWhatsappMessage: "Olá, quero montar uma base personalizada na ProspectaNicho.",
    privacyRules: ["Exige validação antes de cobrança.", "Não libera exportação sem aprovação interna."],
    badge: "RECORTE EXCLUSIVO",
  },
];

export function getCatalogProduct(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}
