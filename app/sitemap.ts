import type { MetadataRoute } from "next";
import { publicRoutes } from "@/lib/routes";
import { products, site } from "@/lib/site";

export const dynamic = "force-static";

const extraRoutes = ["/amostra", "/termos-de-entrega", "/aviso-de-dados-empresariais"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...publicRoutes.map((route) => ({ url: `${site.url}${route === "/" ? "" : route}`, lastModified: now })),
    ...extraRoutes.map((route) => ({ url: `${site.url}${route}`, lastModified: now })),
    ...products.map((product) => ({ url: `${site.url}/produtos/${product.slug}`, lastModified: now })),
  ];
}
