import type { LucideIcon } from "lucide-react";

type ProductVisualProps = {
  icon: LucideIcon;
  variant: "calendar" | "marketing" | "accounting" | "custom";
  watermark?: boolean;
};

export function ProductVisual({ icon: Icon, variant, watermark = true }: ProductVisualProps) {
  return (
    <span className="product-visual" data-variant={variant} data-watermark={watermark} aria-hidden="true">
      <Icon size={22} strokeWidth={2.2} />
    </span>
  );
}
