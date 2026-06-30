import type { Metadata } from "next";
import { BaseBuilder } from "@/components/editor/BaseBuilder";

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Monte sua base",
  description: "Transforme seu p?blico ideal em um recorte comercial claro para prospec??o B2B.",
};

export default async function MontarMinhaBasePage({ searchParams }: Props) {
  const params = await searchParams;
  const query = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (typeof value === "string") query.set(key, value);
  });

  return <BaseBuilder initialSearch={query.toString()} />;
}
