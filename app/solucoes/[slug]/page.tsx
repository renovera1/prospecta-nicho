import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, getSolution, isExternalHref, site, solutions, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return { title: solution.title, description: solution.pain };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const products = solution.recommended.map(getProduct).filter(Boolean);
  const whatsappHref = waLink(`Olá, quero uma base para ${solution.slug.replaceAll("-", " ")}.`);
  const contactHref = whatsappHref || "/produtos/base-personalizada";
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais filtros posso usar?",
        acceptedAnswer: { "@type": "Answer", text: solution.filters.join(", ") },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Solução por segmento</p>
          <h1 className="h1">{solution.title}</h1>
          <p className="lead">{solution.pain}</p>
          <div className="btn-row">
            <ButtonLink href="/produtos/base-personalizada">Solicitar base personalizada</ButtonLink>
            <ButtonLink href={contactHref} variant="teal" external={isExternalHref(contactHref)}>
              {site.whatsapp ? "Falar no WhatsApp" : "Montar meu recorte"}
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <h2 className="h2">Exemplos de filtros</h2>
          <div className="fields-table" style={{ marginTop: 24 }}>
            {solution.filters.map((filter) => <div className="field-chip" key={filter}>{filter}</div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: 24 }}>Produtos recomendados</h2>
          <div className="card-grid">
            {products.map((product) => product ? <ProductCard key={product.slug} product={product} /> : null)}
          </div>
        </div>
      </section>
    </>
  );
}
