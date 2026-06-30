import Link from "next/link";
import { contentStudioNav } from "@/lib/content-studio";

export function AdminShell({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section className="admin-shell">
      <aside className="admin-sidebar" aria-label="Navegação administrativa">
        <strong>Content Studio</strong>
        <nav>
          {contentStudioNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="admin-main">
        <p className="eyebrow">{eyebrow || "ProspectaNicho Admin"}</p>
        <h1 className="h2">{title}</h1>
        {children}
      </main>
    </section>
  );
}
