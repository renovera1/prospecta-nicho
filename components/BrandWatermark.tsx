import Image from "next/image";

type Props = {
  tone?: "dark" | "light";
};

export function BrandWatermark({ tone = "dark" }: Props) {
  const src = tone === "light" ? "/assets/brand/shield-icon-light.svg" : "/assets/brand/shield-icon.svg";
  return <Image className="brand-watermark" src={src} alt="" width={360} height={420} aria-hidden="true" />;
}
