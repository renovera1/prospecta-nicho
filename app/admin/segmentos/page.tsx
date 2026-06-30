import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { solutions } from "@/lib/site";

export const metadata: Metadata = { title: "Segmentos", robots: { index: false, follow: false } };

export default function AdminSegmentsPage() {
  return (
    <AdminShell title="Segmentos" eyebrow="Presets comerciais">
      <div className="admin-table">
        {solutions.map((segment) => (
          <div className="admin-table-row" key={segment.slug}>
            <strong>{segment.title}</strong>
            <span>{segment.recommended.join(", ")}</span>
            <span>Visível</span>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
