import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "SEO", robots: { index: false, follow: false } };

export default function AdminSeoPage() {
  return (
    <AdminShell title="SEO e metadados" eyebrow="Busca e compartilhamento">
      <div className="admin-panel">
        <p><strong>Título padrão:</strong> ProspectaNicho | Bases B2B segmentadas</p>
        <p><strong>Descrição:</strong> {site.description}</p>
        <p><strong>Canonical:</strong> {site.url}</p>
        <p><strong>Open Graph:</strong> /assets/brand/og-image.png</p>
      </div>
    </AdminShell>
  );
}
