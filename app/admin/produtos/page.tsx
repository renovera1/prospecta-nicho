import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminProducts } from "@/lib/content-studio";

export const metadata: Metadata = { title: "Produtos", robots: { index: false, follow: false } };

export default function AdminProductsPage() {
  return (
    <AdminShell title="Produtos e preços" eyebrow="Catálogo">
      <div className="admin-panel">
        <div className="studio-toolbar">
          <button className="button button--primary" type="button">Criar produto</button>
          <button className="button button--secondary" type="button">Duplicar selecionado</button>
        </div>
        <div className="admin-table">
          {adminProducts.map((product) => (
            <div className="admin-table-row" key={product.slug}>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
              <span>{product.badge}</span>
              <span>{product.status}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
