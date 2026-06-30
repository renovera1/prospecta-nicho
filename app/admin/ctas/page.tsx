import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "CTAs", robots: { index: false, follow: false } };

export default function AdminCtasPage() {
  return (
    <AdminShell title="CTAs" eyebrow="Destinos validados">
      <div className="admin-panel">
        <p>CTAs aceitam rota interna, checkout, WhatsApp, âncora, formulário ou link externo HTTPS.</p>
        <div className="admin-table">
          {Object.values(routes).slice(0, 12).map((route) => (
            <div className="admin-table-row" key={route}>
              <strong>{route}</strong>
              <span>Destino interno válido</span>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
