import { CalendarDays, Map, MonitorSmartphone, ScrollText, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import type { Product } from "@/lib/site";
import { isExternalHref, productHref, productPrimaryHref } from "@/lib/site";

const visualIcons = {
  "empresas-recem-abertas": CalendarDays,
  "agencias-marketing": MonitorSmartphone,
  contabilidades: ScrollText,
  "base-personalizada": SlidersHorizontal,
};

const copyBySlug: Record<string, { title: string; promise: string; audience: string; delivery: string; cta: string }> = {
  "empresas-recem-abertas": {
    title: "Empresas recem-abertas",
    promise: "Entre na conversa quando a empresa ainda esta definindo fornecedores, presenca e operacao.",
    audience: "Agencias, contabilidades, ERP, certificado digital e comunicacao visual.",
    delivery: "Planilha organizada para Excel ou Google Sheets.",
    cta: "Escolher esta base",
  },
  "agencias-marketing": {
    title: "Base para agencias",
    promise: "Encontre empresas com potencial para site, trafego, social media, branding e presenca digital.",
    audience: "Agencias, social medias, web designers e consultores de marketing.",
    delivery: "Recorte pronto para abordagem consultiva.",
    cta: "Escolher esta base",
  },
  contabilidades: {
    title: "Base para contabilidades",
    promise: "Mapeie empresas novas e segmentos com demanda por rotina contabil e fiscal.",
    audience: "Escritorios contabeis, BPO financeiro e certificado digital.",
    delivery: "Planilha com criterios comerciais e cadastrais.",
    cta: "Escolher esta base",
  },
  "base-personalizada": {
    title: "Base personalizada",
    promise: "Defina nicho, cidade, porte, periodo e campos desejados para uma validacao de escopo.",
    audience: "Operacoes B2B com publico especifico ou territorio definido.",
    delivery: "Recorte validado antes da confirmacao final.",
    cta: "Montar meu recorte",
  },
};

export function ProductSignalCard({ product }: { product: Product }) {
  const Icon = visualIcons[product.slug as keyof typeof visualIcons] || Map;
  const href = product.slug === "base-personalizada" ? "/montar-minha-base" : productPrimaryHref(product);
  const copy = copyBySlug[product.slug] || {
    title: product.shortName,
    promise: product.description,
    audience: product.audience.join(", "),
    delivery: "Planilha organizada para rotina comercial.",
    cta: product.homeCta || "Escolher esta base",
  };

  return (
    <article className="product-signal-card">
      <div className="product-visual">
        <Image src="/assets/brand/shield-icon-light.svg" alt="" width={118} height={138} aria-hidden="true" />
        <Icon size={42} />
        <span className="radar-pulse small" />
      </div>
      <span className="badge">{product.badge}</span>
      <h3 className="h3">{copy.title}</h3>
      <p>{copy.promise}</p>
      <p className="muted"><strong>Indicado para:</strong> {copy.audience}</p>
      <strong className="price">{product.price}</strong>
      <p className="muted">{copy.delivery}</p>
      <ButtonLink href={href} variant="primary" external={isExternalHref(href)}>
        {copy.cta}
      </ButtonLink>
      <Link className="secondary-link" href={productHref(product)}>
        Ver campos e detalhes
      </Link>
    </article>
  );
}
