import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminFaq } from "@/lib/content-studio";

export const metadata: Metadata = { title: "FAQ", robots: { index: false, follow: false } };

export default function AdminFaqPage() {
  return (
    <AdminShell title="FAQ editável" eyebrow="Conteúdo estruturado">
      <div className="admin-panel">
        <div className="admin-table">
          {adminFaq.map((item) => (
            <div className="admin-table-row" key={item.question}>
              <strong>{item.question}</strong>
              <span>{item.category}</span>
              <span>{item.visible ? "Visível" : "Oculto"}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
