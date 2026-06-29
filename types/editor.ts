export type BuilderStep =
  | "objective"
  | "segment"
  | "region"
  | "profile"
  | "fields"
  | "delivery";

export type BaseBuilderData = {
  audience: string;
  customAudience?: string;
  goal: string;
  customGoal?: string;
  segment: string;
  keyword?: string;
  primaryCnae?: string;
  secondaryCnaes?: string;
  segmentNotes?: string;
  state: string;
  city: string;
  region?: string;
  district?: string;
  cepStart?: string;
  cepEnd?: string;
  openedPeriod: string;
  customPeriod?: string;
  companySize: string[];
  registrationStatus: string;
  capitalRange: string;
  customCapital?: string;
  branchType: string;
  baseFields: string[];
  extraFields: string[];
  quantityRange: string;
  deliveryFormat: string;
  deliveryNotes?: string;
  name: string;
  email: string;
  whatsapp: string;
  company?: string;
  consent: boolean;
  companySite?: string;
  source?: string;
  turnstileToken?: string;
};

export type ProductRecommendation =
  | "Base Empresas Recem-Abertas"
  | "Base para Agencias"
  | "Base para Contabilidades"
  | "Base Personalizada";

export type SegmentPreset = {
  id: string;
  title: string;
  description: string;
  audience: string;
  segment: string;
  goal: string;
  openedPeriod: string;
  companySize: string[];
  cues: string[];
};
