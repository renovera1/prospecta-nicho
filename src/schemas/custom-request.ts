import { z } from "zod";

export const quickRequestPeriodOptions = [
  "últimos 30 dias",
  "últimos 60 dias",
  "últimos 90 dias",
  "últimos 6 meses",
  "sem filtro de abertura",
] as const;

export const customRequestSchema = z.object({
  segment: z.string().min(2).max(80),
  location: z.string().min(2).max(160),
  state: z.string().max(2).optional(),
  period: z.enum(quickRequestPeriodOptions),
  name: z.string().min(2).max(120),
  whatsapp: z.string().min(8).max(32),
  quantity: z.string().max(80).optional(),
  company: z.string().max(160).optional(),
  email: z.string().email().optional().or(z.literal("")),
  notes: z.string().max(900).optional(),
  source: z.string().max(80).optional(),
  consent: z.literal(true),
  idempotencyKey: z.string().max(140).optional(),
  companySite: z.string().max(0).optional(),
  turnstileToken: z.string().optional(),
});

export type CustomRequestInput = z.infer<typeof customRequestSchema>;
