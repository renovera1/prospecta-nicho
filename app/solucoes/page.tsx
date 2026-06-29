import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Soluções de bases B2B para agências, contabilidades, energia solar, ERP, maquininhas e consultorias.",
};

export default function SolutionsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Soluções" title="Recortes para quem vende para empresas" />
        <div className="card-grid">
          {solutions.map((solution) => (
            <Link className="card" href={`/solucoes/${solution.slug}`} key={solution.slug}>
              <solution.icon size={26} />
              <h2 className="h3">{solution.title}</h2>
              <p className="muted">{solution.pain}</p>
              <span className="badge">Ver solução <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
