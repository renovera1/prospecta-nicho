export type PaymentProviderName = "mercado-pago" | "asaas";

export type CreatePreferenceInput = {
  productSlug: string;
  customerName?: string;
  customerEmail?: string;
  amount: number;
  orderId?: string;
};

export type CreatePreferenceOutput = {
  checkoutUrl: string;
  providerPreferenceId: string;
  provider: PaymentProviderName;
};

export interface PaymentProvider {
  name: PaymentProviderName;
  createPreference(input: CreatePreferenceInput): Promise<CreatePreferenceOutput>;
  verifyWebhookSignature(payload: string, signature: string): Promise<boolean>;
}

export function getConfiguredPaymentProvider() {
  if (process.env.MERCADO_PAGO_ACCESS_TOKEN) return "mercado-pago" as const;
  if (process.env.ASAAS_API_KEY) return "asaas" as const;
  return null;
}
