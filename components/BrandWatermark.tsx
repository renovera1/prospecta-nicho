import Image from "next/image";

type Props = {
  tone?: "dark" | "light";
};

export function BrandWatermark({ tone = "dark" }: Props) {
  return (
    <Image
      className={`brand-watermark brand-watermark--${tone}`}
      src="/assets/brand/logo-symbol.png"
      alt=""
      width={295}
      height={305}
      aria-hidden="true"
    />
  );
}
