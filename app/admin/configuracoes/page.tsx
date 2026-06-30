import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Configurações", robots: { index: false, follow: false } };

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Configurações do site" eyebrow="Site settings">
      <div className="admin-form">
        <label>Nome do site<input value={site.name} readOnly /></label>
        <label>URL pública<input value={site.url} readOnly /></label>
        <label>E-mail comercial<input value={site.email} readOnly /></label>
        <label>WhatsApp<input value={site.whatsapp || "Número não configurado"} readOnly /></label>
      </div>
    </AdminShell>
  );
}
