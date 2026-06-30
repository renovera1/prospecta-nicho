import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "light" | "dark";
  size?: "header" | "footer" | "compact";
  linked?: boolean;
};

export function BrandLogo({ variant = "dark", size = "header", linked = true }: BrandLogoProps) {
  const src = variant === "light" ? "/assets/brand/logo-selected-dark.png" : "/assets/brand/logo-selected.png";
  const image = (
    <Image
      src={src}
      alt="ProspectaNicho"
      width={760}
      height={180}
      priority={size === "header"}
      sizes={size === "compact" ? "150px" : size === "footer" ? "250px" : "250px"}
    />
  );

  if (!linked) return <span className={`brand brand--${variant} brand--${size}`}>{image}</span>;

  return (
    <Link className={`brand brand--${variant} brand--${size}`} href="/" aria-label="ProspectaNicho início">
      {image}
    </Link>
  );
}
