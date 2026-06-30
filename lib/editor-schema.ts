import { z } from "zod";

export const objectiveOptions = [
  "Agencias de marketing",
  "Contabilidades",
  "Energia solar",
  "ERP e sistemas",
  "Maquininhas",
  "Comunica??o visual",
  "Consultoria B2B",
  "Certificado digital",
  "Seguros empresariais",
  "Segurança do trabalho",
  "Outro",
] as const;

export const goalOptions = [
  "Encontrar novas empresas",
  "Abrir uma nova região",
  "Alimentar CRM",
  "Preparar campanha",
  "Prospecção via WhatsApp",
  "Prospecção por e-mail",
  "Criar carteira comercial",
  "Outro",
] as const;

export const openedPeriodOptions = [
  "últimos 30 dias",
  "últimos 60 dias",
  "últimos 90 dias",
  "últimos 6 meses",
  "periodo personalizado",
  "sem filtro de abertura",
] as const;

export const companySizeOptions = ["MEI", "ME", "EPP", "Médio porte", "Grande porte", "Qualquer porte"] as const;

export const baseFieldOptions = [
  "CNPJ",
  "Razão social",
  "Nome fantasia",
  "CNAE",
  "Cidade",
  "Estado",
  "Endereço comercial",
  "Porte",
  "Data de abertura",
  "Situação cadastral",
] as const;

export const extraFieldOptions = [
  "Telefone empresarial",
  "E-mail empresarial",
  "Site",
  "Redes empresariais",
  "Capital social",
  "CNAEs secundários",
  "Indicadores de perfil comercial",
] as const;

export const builderSchema = z.object({
  audience: z.string().min(2, "Escolha para quem voc? quer vender."),
  customAudience: z.string().optional(),
  goal: z.string().min(2, "Escolha um objetivo comercial."),
  customGoal: z.string().optional(),
  segment: z.string().min(2, "Informe o segmento."),
  keyword: z.string().optional(),
  primaryCnae: z.string().optional(),
  secondaryCnaes: z.string().optional(),
  segmentNotes: z.string().optional(),
  state: z.string().min(2, "Informe o estado."),
  city: z.string().min(2, "Informe a cidade ou região principal."),
  region: z.string().optional(),
  district: z.string().optional(),
  cepStart: z.string().optional(),
  cepEnd: z.string().optional(),
  openedPeriod: z.string().min(2, "Escolha o periodo de abertura."),
  customPeriod: z.string().optional(),
  companySize: z.array(z.string()).min(1, "Escolha ao menos um porte."),
  registrationStatus: z.string().min(2),
  capitalRange: z.string().min(2),
  customCapital: z.string().optional(),
  branchType: z.string().min(2),
  baseFields: z.array(z.string()).min(1, "Escolha ao menos um campo base."),
  extraFields: z.array(z.string()),
  quantityRange: z.string().min(2, "Escolha a faixa de quantidade."),
  deliveryFormat: z.string().min(2, "Escolha o formato de entrega."),
  deliveryNotes: z.string().optional(),
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail valido."),
  whatsapp: z.string().min(8, "Informe seu WhatsApp."),
  company: z.string().optional(),
  consent: z.boolean().refine((value) => value, "Confirme que leu os termos."),
  companySite: z.string().max(0).optional(),
  source: z.string().optional(),
  turnstileToken: z.string().optional(),
});

export type BuilderSchemaInput = z.infer<typeof builderSchema>;
