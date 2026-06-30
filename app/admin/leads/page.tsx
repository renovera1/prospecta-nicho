import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Leads", robots: { index: false, follow: false } };

export default function AdminLeadsPage() {
  return (
    <AdminShell title="Leads e amostras" eyebrow="Operação">
      <div className="admin-panel">
        <p>Área para acompanhar contatos, solicitações de amostra, bases personalizadas e exportações.</p>
        <span className="badge">Dados reais exigem Supabase configurado</span>
      </div>
    </AdminShell>
  );
}
