"use client";

import { usePathname } from "next/navigation";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const legacyRoutes = new Set([
  "/sobre",
  "/insights",
  "/blog-direitos-concessionaria.html",
  "/blog-nova-regulamentacao.html",
  "/blog-6-duvidas.html",
  "/blog-aterramento.html",
]);

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  if (legacyRoutes.has(pathname)) {
    return <div className="shell shell--legacy">{children}</div>;
  }

  return (
    <div className="shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
