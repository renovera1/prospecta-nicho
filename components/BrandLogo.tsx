import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "header" | "footer" | "symbol" | "compact";
  priority?: boolean;
  linked?: boolean;
};

const logoByVariant = {
  header: "/assets/brand/logo-horizontal.png",
  footer: "/assets/brand/logo-horizontal-dark-bg.png",
  compact: "/assets/brand/logo-horizontal.png",
  symbol: "/assets/brand/logo-symbol.png",
};

const imageSizeByVariant = {
  header: { width: 1375, height: 264, sizes: "(max-width: 720px) 178px, 250px" },
  footer: { width: 1455, height: 344, sizes: "230px" },
  compact: { width: 1375, height: 264, sizes: "178px" },
  symbol: { width: 295, height: 305, sizes: "44px" },
};

export function BrandLogo({ variant = "header", priority = variant === "header", linked = true }: BrandLogoProps) {
  const src = logoByVariant[variant];
  const size = imageSizeByVariant[variant];
  const image = (
    <Image
      src={src}
      alt="ProspectaNicho"
      width={size.width}
      height={size.height}
      priority={priority}
      sizes={size.sizes}
    />
  );

  if (!linked) return <span className={`brand brand--${variant}`}>{image}</span>;

  return (
    <Link className={`brand brand--${variant}`} href="/" aria-label="ProspectaNicho início">
      {image}
    </Link>
  );
}
