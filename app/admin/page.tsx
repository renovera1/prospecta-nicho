import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminStatusCards } from "@/components/admin/AdminStatusCards";
import { adminRoles, contentHealth } from "@/lib/content-studio";

const checks = [
  { label: "Supabase", value: process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY ? "Configurado" : "Pendente", note: "Banco, Auth e RLS para conteúdo." },
  { label: "Pagamentos", value: process.env.MERCADO_PAGO_ACCESS_TOKEN || process.env.ASAAS_API_KEY ? "Configurado" : "Pendente", note: "Checkout real depende de credenciais." },
  { label: "WhatsApp", value: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? "Configurado" : "Fallback ativo", note: "Sem número, CTAs seguem para contato." },
  { label: "Preview", value: process.env.NEXT_PUBLIC_DEPLOY_ENV === "preview" ? "Preview" : "Produção", note: "Banner e robots seguem o ambiente." },
];

export const metadata: Metadata = {
  title: "Content Studio",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <AdminShell title="Operação protegida da ProspectaNicho" eyebrow="Área administrativa">
      <p className="lead">
        Painel para governar conteúdo, produtos, CTAs, SEO, menus, FAQ, mídias, leads, pedidos e publicações sem editar
        arquivos manualmente.
      </p>
      <AdminStatusCards items={[...checks, ...contentHealth]} />
      <div className="admin-panel">
        <h2 className="h3">Perfis e permissões</h2>
        <div className="admin-table">
          {adminRoles.map((item) => (
            <div className="admin-table-row" key={item.role}>
              <strong>{item.label}</strong>
              <span>{item.permissions}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
