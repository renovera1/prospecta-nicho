import Link from "next/link";
import { Brand } from "@/components/Brand";
import { products, site } from "@/lib/site";

export function Footer() {
  const audienceLinks = ["Agências", "Contabilidades", "Energia solar"];

  return (
    <footer className="footer">
      <div className="container-wide footer-grid">
        <div>
          <Brand variant="light" />
          <p>{site.institutional}</p>
          <p>A ProspectaNicho transforma critérios comerciais em recortes de empresas prontos para prospecção.</p>
        </div>
        <div>
          <h3>Bases</h3>
          {products.slice(0, 4).map((product) => (
            <p key={product.slug}>
              <Link href={product.slug === "base-personalizada" ? "/montar-minha-base" : `/produtos/${product.slug}`}>
                {product.shortName}
              </Link>
            </p>
          ))}
        </div>
        <div>
          <h3>Para quem é</h3>
          <p><Link href="/para-quem-e">Visão geral</Link></p>
          {audienceLinks.map((label) => (
            <p key={label}><Link href={`/montar-minha-base?segment=${encodeURIComponent(label)}`}>{label}</Link></p>
          ))}
        </div>
        <div>
          <h3>Suporte e legal</h3>
          <p><Link href="/contato">Contato</Link></p>
          <p><Link href="/politica-de-privacidade">Política de Privacidade</Link></p>
          <p><Link href="/politica-de-supressao">Política de Supressão</Link></p>
          <p><Link href="/termos-de-uso">Termos de Uso</Link></p>
          <p><Link href="/politica-de-cookies">Política de Cookies</Link></p>
        </div>
      </div>
      <div className="container-wide">
        <p style={{ marginTop: 32, color: "rgba(255,255,255,.62)" }}>
          © {new Date().getFullYear()} ProspectaNicho. Dados e campos variam conforme disponibilidade, fontes públicas e escopo contratado.
        </p>
      </div>
    </footer>
  );
}
