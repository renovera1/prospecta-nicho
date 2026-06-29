import type { MetadataRoute } from "next";
import { products, site, solutions } from "@/lib/site";

const staticRoutes = [
  "",
  "/montar-minha-base",
  "/produtos",
  "/amostra",
  "/como-funciona",
  "/solucoes",
  "/campos-da-base",
  "/faq",
  "/sobre",
  "/contato",
  "/insights",
  "/blog",
  "/blog-direitos-concessionaria.html",
  "/blog-nova-regulamentacao.html",
  "/blog-6-duvidas.html",
  "/blog-aterramento.html",
  "/politica-de-privacidade",
  "/termos-de-uso",
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
