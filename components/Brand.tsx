import { BrandLogo } from "@/components/BrandLogo";

type Props = {
  variant?: "dark" | "light";
};

export function Brand({ variant = "dark" }: Props) {
  return <BrandLogo variant={variant} size={variant === "light" ? "footer" : "header"} />;
}
