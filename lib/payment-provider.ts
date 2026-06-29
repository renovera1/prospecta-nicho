export type CreatePreferenceInput = {
  productSlug: string;
  customerName?: string;
  customerEmail?: string;
  amount: number;
};

export type CreatePreferenceOutput = {
  checkoutUrl: string;
  providerPreferenceId: string;
};

export interface PaymentProvider {
  createPreference(input: CreatePreferenceInput): Promise<CreatePreferenceOutput>;
  verifyWebhookSignature(payload: string, signature: string): Promise<boolean>;
}
