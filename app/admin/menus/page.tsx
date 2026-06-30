import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { publicRoutes } from "@/lib/routes";

export const metadata: Metadata = { title: "Menus", robots: { index: false, follow: false } };

export default function AdminMenusPage() {
  return (
    <AdminShell title="Menus" eyebrow="Navegação">
      <div className="admin-table">
        {publicRoutes.slice(0, 14).map((route, index) => (
          <div className="admin-table-row" key={route}>
            <strong>{route}</strong>
            <span>Ordem {index + 1}</span>
            <span>Desktop e mobile</span>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
