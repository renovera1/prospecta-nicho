import { ArrowRight, MessageCircle, ShoppingCart } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import type { Product } from "@/lib/site";
import { isExternalHref, productHref, productPaymentLink, productPrimaryHref, site } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const payment = productPaymentLink(product);
  const buyHref = productPrimaryHref(product);
  const buyExternal = isExternalHref(buyHref);
  const actionLabel = payment ? "Escolher esta base" : site.whatsapp ? "Falar sobre meu público" : "Ver o que vem na base";

  return (
    <article className="card product-card">
      <div>
        {product.badge ? <span className="badge">{product.badge}</span> : null}
        <h3 className="h3" style={{ marginTop: 14 }}>{product.name}</h3>
        <p className="muted">{product.description}</p>
      </div>
      <div>
        <div className="price">{product.price}</div>
        <div className="btn-row" style={{ marginTop: 16 }}>
          <ButtonLink href={buyHref} variant={payment ? "primary" : "teal"} external={buyExternal}>
            {payment ? <ShoppingCart size={18} /> : <MessageCircle size={18} />}
            {actionLabel}
          </ButtonLink>
          <ButtonLink href={productHref(product)} variant="secondary">
            Ver o que vem na base
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
