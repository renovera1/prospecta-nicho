import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductPricingEditor } from "@/components/admin/ProductPricingEditor";

export const metadata: Metadata = { title: "Produto administrativo", robots: { index: false, follow: false } };

export default async function AdminProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <AdminShell title={`Produto: ${id}`} eyebrow="Edição de produto">
      <ProductPricingEditor />
    </AdminShell>
  );
}
