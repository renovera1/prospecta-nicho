export type TrackingEvent =
  | "hero_build_base_click"
  | "hero_sample_click"
  | "editor_started"
  | "editor_step_completed"
  | "editor_submitted"
  | "sample_form_started"
  | "sample_form_submitted"
  | "product_viewed"
  | "product_checkout_clicked"
  | "whatsapp_clicked"
  | "faq_opened";

export function trackEvent(event: TrackingEvent, payload?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_ID) return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", event, payload || {});
}
