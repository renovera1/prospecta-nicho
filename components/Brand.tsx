import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
};

export function Brand({ variant = "dark" }: Props) {
  const src = variant === "light" ? "/assets/brand/logo-horizontal-light.svg" : "/assets/brand/logo-horizontal.svg";

  return (
    <Link className="brand" href="/" aria-label="ProspectaNicho inicio">
      <Image src={src} alt="ProspectaNicho" width={310} height={78} priority />
    </Link>
  );
}
