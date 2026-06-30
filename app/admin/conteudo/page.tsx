import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { ContentStudioEditor } from "@/components/admin/ContentStudioEditor";

export const metadata: Metadata = { title: "Conteúdo", robots: { index: false, follow: false } };

export default function AdminContentPage() {
  return (
    <AdminShell title="Editor de conteúdo" eyebrow="Content Studio">
      <ContentStudioEditor pageSlug="home" />
    </AdminShell>
  );
}
