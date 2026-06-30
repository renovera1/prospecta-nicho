import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Pedidos", robots: { index: false, follow: false } };

export default function AdminOrdersPage() {
  return (
    <AdminShell title="Pedidos" eyebrow="Pagamentos">
      <div className="admin-panel">
        <p>Pedidos preservam preço histórico; alterações de produto afetam apenas compras futuras.</p>
        <span className="badge">Mercado Pago / Asaas</span>
      </div>
    </AdminShell>
  );
}
