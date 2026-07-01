import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { AppShell } from "@/components/AppShell";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ProspectaNicho | Bases B2B segmentadas",
    template: "%s | ProspectaNicho",
  },
  description: site.description,
  icons: {
    icon: "/assets/brand/favicon.png",
    apple: "/assets/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "ProspectaNicho",
    description: site.description,
    type: "website",
    url: site.url,
    images: ["/assets/brand/og-image.png"],
  },
  robots: process.env.NEXT_PUBLIC_DEPLOY_ENV === "preview" ? { index: false, follow: false } : undefined,
  twitter: {
    card: "summary_large_image",
    title: "ProspectaNicho",
    description: site.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: site.email }],
    logo: `${site.url}/assets/brand/logo-horizontal.png`,
  };

  return (
    <html lang="pt-BR" className={`${manrope.variable} ${sora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
