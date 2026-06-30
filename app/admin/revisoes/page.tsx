import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Revisões", robots: { index: false, follow: false } };

export default function AdminRevisionsPage() {
  return (
    <AdminShell title="Revisões e rollback" eyebrow="Histórico">
      <div className="admin-panel">
        <p>Publicações registram snapshot, autor, ação, data, entidade alterada e rotas revalidadas.</p>
        <button className="button button--secondary" type="button">Restaurar versão selecionada</button>
      </div>
    </AdminShell>
  );
}
