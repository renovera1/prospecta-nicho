import { BarChart3, Building2, DatabaseZap, Gift, Megaphone, type LucideIcon } from "lucide-react";

type ProductVisualProps = {
  slug: string;
};

const productIcons: Record<string, LucideIcon> = {
  "empresas-recem-abertas": Building2,
  "agencias-marketing": Megaphone,
  contabilidades: BarChart3,
  "base-personalizada": DatabaseZap,
  "amostra-gratuita": Gift,
};

export function ProductVisual({ slug }: ProductVisualProps) {
  const Icon = productIcons[slug] || DatabaseZap;
  return (
    <span className="product-visual" aria-hidden="true">
      <Icon size={22} strokeWidth={2.2} />
    </span>
  );
}
