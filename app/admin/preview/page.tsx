import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { ContentStudioEditor } from "@/components/admin/ContentStudioEditor";

export const metadata: Metadata = { title: "Preview de rascunho", robots: { index: false, follow: false } };

export default function AdminPreviewPage() {
  return (
    <AdminShell title="Preview de rascunho" eyebrow="Noindex, nofollow">
      <ContentStudioEditor pageSlug="home" />
    </AdminShell>
  );
}
