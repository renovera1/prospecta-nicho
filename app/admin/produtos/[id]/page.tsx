import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductPricingEditor } from "@/components/admin/ProductPricingEditor";
import { adminProducts } from "@/lib/content-studio";

export const metadata: Metadata = { title: "Produto administrativo", robots: { index: false, follow: false } };

export function generateStaticParams() {
  return adminProducts.map((product) => ({ id: product.slug }));
}

export default async function AdminProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <AdminShell title={`Produto: ${id}`} eyebrow="Edição de produto">
      <ProductPricingEditor />
    </AdminShell>
  );
}
