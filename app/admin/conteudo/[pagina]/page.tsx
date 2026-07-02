import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { ContentStudioEditor } from "@/components/admin/ContentStudioEditor";
import { editablePages } from "@/lib/content-studio";

export const metadata: Metadata = { title: "Página editável", robots: { index: false, follow: false } };

export function generateStaticParams() {
  return editablePages.map((page) => ({ pagina: page.slug }));
}

export default async function AdminContentPageBySlug({ params }: { params: Promise<{ pagina: string }> }) {
  const { pagina } = await params;
  return (
    <AdminShell title={`Editar página: ${pagina}`} eyebrow="Content Studio">
      <ContentStudioEditor pageSlug={pagina} />
    </AdminShell>
  );
}
