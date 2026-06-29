import {
  BarChart3,
  Building2,
  Calculator,
  CreditCard,
  FileSpreadsheet,
  Megaphone,
  PanelsTopLeft,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  SlidersHorizontal,
  SunMedium,
  Target,
} from "lucide-react";

export const site = {
  name: "ProspectaNicho",
  institutional: "Empresas no momento certo para a venda certa.",
  campaign: "Chegue antes da concorrência.",
  tagline: "Inteligência comercial pronta para ação.",
  description:
    "A ProspectaNicho transforma critérios comerciais em recortes de empresas prontos para prospecção.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: process.env.CONTACT_EMAIL || "contato@prospectanicho.com.br",
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  price: string;
  badge?: string;
  homeTitle?: string;
  homeText?: string;
  homeCta?: string;
  audience: string[];
  includes: string[];
  faq: { question: string; answer: string }[];
  paymentEnv?: string;
};

export const products: Product[] = [
  {
    slug: "empresas-recem-abertas",
    name: "Base B2B - Empresas Recém-Abertas",
    shortName: "Empresas Recém-Abertas",
    homeTitle: "Empresas recém-abertas",
    homeText: "Chegue quando a empresa ainda está estruturando fornecedores, presença e operação.",
    homeCta: "Escolher esta base",
    description:
      "Planilha com empresas abertas recentemente, filtradas por cidade, setor, CNAE, porte e situação cadastral.",
    price: "R$ 147,00",
    badge: "MAIS PROCURADA",
    paymentEnv: "NEXT_PUBLIC_MP_LINK_EMPRESAS_RECEM_ABERTAS",
    audience: ["Agências", "Contabilidades", "Certificado digital", "ERP", "Comunicação visual"],
    includes: ["CNPJ", "Razão social", "Nome fantasia", "CNAE", "Cidade", "UF", "Data de abertura", "Porte", "Situação cadastral"],
    faq: [
      {
        question: "Posso escolher a cidade?",
        answer: "Sim. O recorte pode ser feito por cidade, estado e, quando fizer sentido, por região ou bairro.",
      },
      {
        question: "A base inclui contatos pessoais?",
        answer: "Não prometemos contatos pessoais, dados sensíveis ou informações privadas. Os campos variam conforme fontes públicas e escopo contratado.",
      },
    ],
  },
  {
    slug: "agencias-marketing",
    name: "Base para Agências de Marketing",
    shortName: "Agências de Marketing",
    homeTitle: "Empresas com potencial digital",
    homeText: "Recortes para agências que vendem site, tráfego pago, branding e presença digital.",
    homeCta: "Ver base para agências",
    description:
      "Leads de empresas com perfil para contratação de site, tráfego pago, social media, identidade visual e presença digital.",
    price: "R$ 197,00",
    badge: "PARA AGÊNCIAS",
    paymentEnv: "NEXT_PUBLIC_MP_LINK_AGENCIAS_MARKETING",
    audience: ["Agências de marketing", "Social media", "Tráfego pago", "Web design", "Branding"],
    includes: ["Segmento", "Cidade", "Data de abertura", "Porte", "CNAE", "Perfil comercial", "Campos públicos disponíveis"],
    faq: [
      {
        question: "Vocês identificam empresas sem site?",
        answer: "Esse filtro pode ser solicitado quando fizer parte do escopo e houver fonte verificável para validação.",
      },
      {
        question: "A base já vem pronta para abordagem?",
        answer: "A entrega é organizada para prospecção e pode incluir observações de prioridade conforme o produto contratado.",
      },
    ],
  },
  {
    slug: "contabilidades",
    name: "Base para Contabilidades",
    shortName: "Contabilidades",
    homeTitle: "Novas empresas para sua carteira",
    homeText: "Empresas recém-abertas organizadas para acelerar a prospecção contábil.",
    homeCta: "Ver base para contabilidades",
    description:
      "Empresas recém-abertas por cidade e atividade econômica, organizadas para prospecção contábil.",
    price: "R$ 197,00",
    badge: "PARA CONTABILIDADES",
    paymentEnv: "NEXT_PUBLIC_MP_LINK_CONTABILIDADES",
    audience: ["Escritórios contábeis", "BPO financeiro", "Consultorias fiscais", "Certificado digital"],
    includes: ["Empresas novas", "CNAE", "Porte", "Cidade", "Situação ativa", "Matriz ou filial", "Dados empresariais públicos"],
    faq: [
      {
        question: "Serve para captar MEI?",
        answer: "Pode servir, desde que o escopo seja definido com cuidado para minimizar dados pessoais desnecessários.",
      },
      {
        question: "Qual o prazo?",
        answer: "Bases prontas podem ser entregues mais rapidamente. Recortes sob demanda dependem do volume e critérios.",
      },
    ],
  },
  {
    slug: "base-personalizada",
    name: "Base Personalizada Sob Demanda",
    shortName: "Base Personalizada",
    homeTitle: "Monte seu público ideal",
    homeText: "Defina cidade, nicho, porte, período e quantidade. Nós estruturamos sua base.",
    homeCta: "Montar meu recorte",
    description:
      "Você informa nicho, cidade, estado, período de abertura, porte e quantidade desejada. A ProspectaNicho monta a planilha conforme os critérios definidos.",
    price: "A partir de R$ 497,00",
    badge: "RECORTE EXCLUSIVO",
    paymentEnv: "NEXT_PUBLIC_MP_LINK_BASE_PERSONALIZADA",
    audience: ["Empresas B2B", "SDRs", "Vendedores consultivos", "Operações comerciais"],
    includes: ["Critérios personalizados", "Recorte por região", "Recorte por CNAE", "Quantidade definida", "Campos desejados", "Alinhamento de escopo"],
    faq: [
      {
        question: "Posso pedir qualquer nicho?",
        answer: "Você pode solicitar o nicho. Antes da entrega, validamos viabilidade, fontes e campos possíveis.",
      },
      {
        question: "O preço muda?",
        answer: "Sim. O valor depende de volume, complexidade, filtros e campos solicitados.",
      },
    ],
  },
  {
    slug: "amostra-gratuita",
    name: "Amostra Gratuita",
    shortName: "Amostra Gratuita",
    description: "Envio de amostra com até 10 empresas para validação do formato da base.",
    price: "Gratuito",
    badge: "SEM CARTÃO",
    audience: ["Novos clientes", "Agências", "Contabilidades", "Empresas B2B"],
    includes: ["Até 10 empresas", "Formato da planilha", "Campos disponíveis", "Exemplo de recorte"],
    faq: [
      {
        question: "A amostra é personalizada?",
        answer: "A amostra considera o nicho e região informados, conforme disponibilidade.",
      },
      {
        question: "Tem compromisso de compra?",
        answer: "Não. A amostra existe para validar o padrão de organização antes da contratação.",
      },
    ],
  },
];

export const solutions = [
  {
    slug: "agencias-de-marketing",
    title: "Leads para agências que querem prospectar empresas com potencial digital.",
    icon: Megaphone,
    pain: "Agências precisam abrir conversas com negócios que tenham demanda clara por presença digital, site, tráfego, conteúdo ou marca.",
    filters: ["Empresas recém-abertas", "Comércio local", "Clínicas", "Restaurantes", "E-commerces", "Cidades específicas"],
    recommended: ["agencias-marketing", "empresas-recem-abertas", "base-personalizada"],
  },
  {
    slug: "contabilidades",
    title: "Empresas novas e segmentos certos para prospecção contábil.",
    icon: Calculator,
    pain: "Escritórios contábeis ganham velocidade quando encontram empresas em fase de abertura, regularização ou estruturação.",
    filters: ["Data de abertura", "Porte", "Simples ou MEI quando aplicável", "Cidade", "CNAE", "Situação ativa"],
    recommended: ["contabilidades", "empresas-recem-abertas"],
  },
  {
    slug: "energia-solar",
    title: "Bases para empresas de energia solar prospectarem com mais foco.",
    icon: SunMedium,
    pain: "Operações solares precisam priorizar empresas com perfil regional e atividade econômica compatível com consumo relevante.",
    filters: ["Comércios", "Pequenas indústrias", "Produtores rurais", "Cidade", "Porte", "Segmento"],
    recommended: ["base-personalizada", "empresas-recem-abertas"],
  },
  {
    slug: "erp-e-sistemas",
    title: "Listas segmentadas para ERP, sistemas e automação comercial.",
    icon: PanelsTopLeft,
    pain: "Softwares vendem melhor quando abordam empresas com rotina operacional, fiscal, estoque, atendimento ou vendas recorrentes.",
    filters: ["Varejo", "Distribuidoras", "Serviços", "E-commerce", "CNAE", "Porte"],
    recommended: ["base-personalizada", "empresas-recem-abertas"],
  },
  {
    slug: "maquininhas-e-meios-de-pagamento",
    title: "Leads para maquininhas e meios de pagamento por cidade e atividade.",
    icon: CreditCard,
    pain: "Empresas de pagamento precisam encontrar negócios que recebem clientes, vendem presencialmente ou estão começando operação.",
    filters: ["Comércio", "Alimentação", "Estética", "Oficinas", "Varejo", "Empresas novas"],
    recommended: ["empresas-recem-abertas", "base-personalizada"],
  },
  {
    slug: "consultorias-b2b",
    title: "Bases para consultorias B2B encontrarem empresas com dor operacional.",
    icon: SearchCheck,
    pain: "Consultorias precisam de recortes que revelem contexto comercial, porte, localização e momento provável da empresa.",
    filters: ["Porte", "CNAE", "Cidade", "Segmento", "Tempo de abertura", "Perfil comercial"],
    recommended: ["base-personalizada", "empresas-recem-abertas"],
  },
];

export const dataFields = [
  "Razão social",
  "Nome fantasia",
  "CNPJ",
  "CNAE principal",
  "CNAEs secundários",
  "Segmento",
  "Cidade",
  "Estado",
  "Bairro",
  "CEP",
  "Data de abertura",
  "Porte",
  "Situação cadastral",
  "Capital social, quando aplicável",
  "Telefone empresarial, quando disponível",
  "E-mail empresarial, quando disponível",
  "Site, quando disponível",
  "Redes e outros campos conforme escopo",
];

export const homeFaq = [
  {
    question: "Em qual formato recebo a base?",
    answer: "A entrega é feita em planilha organizada, pronta para uso em Excel, Google Sheets ou importação em ferramentas comerciais.",
  },
  {
    question: "Posso escolher cidade e segmento?",
    answer: "Sim. Os recortes podem considerar nicho, cidade, estado, CNAE, porte, data de abertura e situação cadastral.",
  },
  {
    question: "Como funciona a amostra gratuita?",
    answer: "Você informa nicho e região, recebe até 10 empresas demonstrativas e valida o formato antes de comprar.",
  },
  {
    question: "A base pode ser personalizada?",
    answer: "Sim. A base sob demanda é indicada quando você precisa de critérios específicos ou um recorte que não esteja no catálogo.",
  },
  {
    question: "Qual é o prazo estimado de entrega?",
    answer: "O prazo depende do produto, volume e critérios. A confirmação acontece após alinhamento do escopo.",
  },
];

export const trustItems = [
  { label: "Segmentação por nicho", icon: Target },
  { label: "Recorte por cidade e estado", icon: SlidersHorizontal },
  { label: "Empresas recém-abertas", icon: Building2 },
  { label: "Bases personalizadas", icon: BarChart3 },
  { label: "Entrega em planilha", icon: FileSpreadsheet },
];

export const guardrails = [
  { title: "Sem promessas absolutas", text: "O site evita termos como 100% legal, dados exclusivos ou garantias de resultado." },
  { title: "Minimização de dados", text: "A oferta prioriza dados empresariais públicos e campos necessários ao escopo." },
  { title: "Uso responsável", text: "Termos e páginas legais deixam claro que o comprador responde pelo uso adequado da base." },
  { title: "Canal de privacidade", text: "A estrutura prevê solicitação de remoção, oposição e atendimento aos direitos do titular." },
];

export const blogPosts = [
  "Como encontrar empresas recém-abertas para prospectar",
  "Como segmentar uma base B2B por CNAE",
  "O que é perfil de cliente ideal",
  "Como uma agência pode encontrar novos clientes",
  "Como contabilidades podem prospectar novas empresas",
  "Como organizar uma lista de empresas para vendas B2B",
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function waLink(message: string) {
  if (!site.whatsapp) return "";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function productPaymentLink(product: Product) {
  if (!product.paymentEnv) return "";
  return process.env[product.paymentEnv] || "";
}

export function productHref(product: Product) {
  if (product.slug === "amostra-gratuita") return "/produtos/amostra-gratuita";
  if (product.slug === "base-personalizada") return "/produtos/base-personalizada";
  return `/produtos/${product.slug}`;
}

export function productPrimaryHref(product: Product) {
  if (product.slug === "base-personalizada") return "/montar-minha-base";
  const payment = productPaymentLink(product);
  if (payment) return payment;
  const whatsapp = waLink(`Olá, conheci a ProspectaNicho e quero entender a base ${product.shortName}.`);
  if (whatsapp) return whatsapp;
  return productHref(product);
}

export const confidenceSections = [
  {
    icon: ShieldCheck,
    title: "Governança desde a oferta",
    text: "Páginas legais, consentimento em formulários e comunicação clara sobre variação de campos e disponibilidade.",
  },
  {
    icon: PhoneCall,
    title: "Venda assistida por WhatsApp",
    text: "CTAs com mensagens prontas ajudam a qualificar o pedido antes da compra ou da base personalizada.",
  },
  {
    icon: SearchCheck,
    title: "Critérios antes de volume",
    text: "A proposta valoriza recortes comerciais úteis, não listas genéricas de CNPJ sem contexto.",
  },
];
