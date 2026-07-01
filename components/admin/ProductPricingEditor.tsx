"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { adminProducts } from "@/lib/content-studio";

type ProductRow = (typeof adminProducts)[number];

export function ProductPricingEditor({ mode = "products" }: { mode?: "products" | "prices" }) {
  const [selected, setSelected] = useState<ProductRow | null>(adminProducts[0] || null);
  const [drawer, setDrawer] = useState<"product" | "price">(mode === "prices" ? "price" : "product");
  const drawerTitle = drawer === "price" ? "Alterar preço" : "Editar produto";
  const status = useMemo(() => (selected?.status === "ativo" ? "Pronto para novas compras" : "Fora do catálogo público"), [selected]);

  return (
    <div className="admin-products-layout">
      <div className="admin-panel admin-products-table">
        <div className="studio-toolbar">
          <button className="button button--primary" type="button" onClick={() => setDrawer("product")}>Criar produto</button>
          <button className="button button--secondary" type="button" onClick={() => setDrawer("price")}>Alterar preço</button>
        </div>
        <div className="admin-table">
          {adminProducts.map((product) => (
            <button
              className="admin-product-row"
              data-active={selected?.slug === product.slug}
              key={product.slug}
              type="button"
              onClick={() => setSelected(product)}
            >
              <Image src={product.image} alt="" width={42} height={42} />
              <strong>{product.name}</strong>
              <span>{product.slug}</span>
              <span>{product.status}</span>
              <span>{product.price}</span>
              <span>{product.badge}</span>
              <span>{product.cta}</span>
              <span>{product.checkout}</span>
              <span>#{product.order}</span>
              <span>{product.featured ? "Destaque" : "Catálogo"}</span>
              <span>{product.updatedAt}</span>
            </button>
          ))}
        </div>
      </div>
      <aside className="admin-drawer" aria-label={drawerTitle}>
        <span className="badge">{drawerTitle}</span>
        <h2 className="h3">{selected?.name || "Produto"}</h2>
        <p>{status}</p>
        {drawer === "price" ? (
          <form className="admin-form">
            <label>Produto<input value={selected?.name || ""} readOnly /></label>
            <label>Preço atual<input value={selected?.price || ""} readOnly /></label>
            <label>Novo preço<input placeholder="R$ 197,00" /></label>
            <label>Preço promocional opcional<input placeholder="Opcional" /></label>
            <label>Data de início<input type="date" /></label>
            <label>Data de término<input type="date" /></label>
            <label>Justificativa interna<textarea placeholder="Motivo comercial da alteração" /></label>
            <label>Status<select defaultValue="ativo"><option>ativo</option><option>rascunho</option><option>pausado</option><option>arquivado</option></select></label>
          </form>
        ) : (
          <form className="admin-form">
            <label>Nome<input value={selected?.name || ""} readOnly /></label>
            <label>Descrição<textarea defaultValue={selected?.description || ""} /></label>
            <label>Badge<input defaultValue={selected?.badge || ""} /></label>
            <label>CTA<input defaultValue={selected?.cta || ""} /></label>
            <label>Link checkout<input defaultValue={selected?.checkout || ""} /></label>
            <label>Ordem<input defaultValue={selected?.order || 1} type="number" /></label>
          </form>
        )}
        <div className="studio-toolbar">
          <button className="button button--primary" type="button">Salvar rascunho</button>
          <button className="button button--teal" type="button">Publicar alteração</button>
          {selected ? <Link className="button button--secondary" href={`/produtos/${selected.slug}`}>Visualizar produto</Link> : null}
        </div>
        <p className="muted">Publicação registra auditoria, histórico de preço e revalida catálogo, produto e checkout configurado.</p>
      </aside>
    </div>
  );
}
