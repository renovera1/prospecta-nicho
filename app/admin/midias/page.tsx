import type { Metadata } from "next";
import Image from "next/image";
import { AdminShell } from "@/components/admin/AdminShell";
import { mediaAssets } from "@/lib/content-studio";

export const metadata: Metadata = { title: "Mídias", robots: { index: false, follow: false } };

export default function AdminMediaPage() {
  return (
    <AdminShell title="Mídias e marca" eyebrow="Assets">
      <div className="admin-media-grid">
        {mediaAssets.map((asset) => (
          <article className="admin-panel" key={asset.path}>
            <Image src={asset.path} alt={asset.name} width={240} height={96} style={{ objectFit: "contain" }} />
            <h2 className="h3">{asset.name}</h2>
            <p>{asset.path}</p>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
