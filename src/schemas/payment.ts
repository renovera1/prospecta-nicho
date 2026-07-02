import { z } from "zod";

export const createPreferenceSchema = z.object({
  productSlug: z.string().min(2).max(120),
  customerName: z.string().min(2).max(120).optional(),
  customerEmail: z.string().email().max(180).optional(),
  orderId: z.string().max(120).optional(),
  idempotencyKey: z.string().max(160).optional(),
});

export type CreatePreferenceInput = z.infer<typeof createPreferenceSchema>;
