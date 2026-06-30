import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
};

export function Brand({ variant = "dark" }: Props) {
  const src = variant === "light" ? "/assets/brand/logo-selected-dark.png" : "/assets/brand/logo-selected.png";

  return (
    <Link className={`brand brand--${variant}`} href="/" aria-label="ProspectaNicho início">
      <Image src={src} alt="ProspectaNicho" width={760} height={180} priority />
    </Link>
  );
}
