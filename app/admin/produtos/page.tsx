import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductPricingEditor } from "@/components/admin/ProductPricingEditor";

export const metadata: Metadata = { title: "Produtos", robots: { index: false, follow: false } };

export default function AdminProductsPage() {
  return (
    <AdminShell title="Produtos e preços" eyebrow="Catálogo">
      <ProductPricingEditor />
    </AdminShell>
  );
}
