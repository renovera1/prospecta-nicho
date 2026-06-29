import type { MetadataRoute } from "next";
import { products, site, solutions } from "@/lib/site";

const staticRoutes = [
  "",
  "/montar-minha-base",
  "/produtos",
  "/amostra",
  "/para-quem-e",
  "/como-funciona",
  "/solucoes",
  "/campos-da-base",
  "/faq",
  "/sobre",
  "/contato",
  "/politica-de-privacidade",
  "/politica-de-supressao",
  "/termos-de-uso",
  "/termos-de-entrega",
  "/aviso-de-dados-empresariais",
  "/politica-de-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({ url: `${site.url}${route}`, lastModified: now })),
    ...products.map((product) => ({ url: `${site.url}/produtos/${product.slug}`, lastModified: now })),
    ...solutions.map((solution) => ({ url: `${site.url}/solucoes/${solution.slug}`, lastModified: now })),
  ];
}
