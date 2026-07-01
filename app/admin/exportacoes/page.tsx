import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Exportações", robots: { index: false, follow: false } };

export default function AdminExportsPage() {
  return (
    <AdminShell title="Exportações" eyebrow="Arquivos temporários">
      <div className="admin-panel">
        <p>Exports exigem pedido aprovado, links temporários e armazenamento fora do GitHub.</p>
        <div className="admin-table">
          <div className="admin-table-row">
            <strong>exports</strong>
            <span>R2/S3</span>
            <span>Links assinados</span>
            <span>Expiração obrigatória</span>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
