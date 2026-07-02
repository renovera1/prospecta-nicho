import { permanentRedirect } from "next/navigation";
import { solutions } from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export default function SolucaoPage() {
  permanentRedirect("/para-quem-e");
}
