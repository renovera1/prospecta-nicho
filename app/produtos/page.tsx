import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Catálogo de bases B2B segmentadas por nicho, cidade, CNAE, porte e data de abertura.",
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Catálogo"
          title="Bases para diferentes operações comerciais"
          text="Produtos prontos, amostra gratuita e base personalizada sob demanda. Quando links de pagamento não estiverem configurados, o CTA direciona para atendimento no WhatsApp."
        />
        <div className="card-grid">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </section>
  );
}
