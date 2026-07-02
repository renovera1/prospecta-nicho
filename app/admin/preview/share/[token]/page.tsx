import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Preview compartilhado", robots: { index: false, follow: false } };

export function generateStaticParams() {
  return [{ token: "demo" }];
}

export default async function SharedPreviewPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return (
    <AdminShell title="Preview compartilhado" eyebrow="Link temporário">
      <div className="admin-panel">
        <span className="badge">Somente leitura</span>
        <p>Token recebido: {token.slice(0, 8)}...</p>
        <p>Este modo é noindex, não executa checkout real, não envia e-mails e deve usar dados mascarados.</p>
      </div>
    </AdminShell>
  );
}
