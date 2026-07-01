import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductPricingEditor } from "@/components/admin/ProductPricingEditor";

export const metadata: Metadata = { title: "Preços", robots: { index: false, follow: false } };

export default function AdminPricesPage() {
  return (
    <AdminShell title="Editor rápido de preços" eyebrow="Histórico e auditoria">
      <ProductPricingEditor mode="prices" />
    </AdminShell>
  );
}
