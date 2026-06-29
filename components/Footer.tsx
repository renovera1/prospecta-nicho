import Link from "next/link";
import { Brand } from "@/components/Brand";
import { products, site, solutions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand variant="light" />
          <p>{site.institutional}</p>
          <p>A ProspectaNicho transforma critérios comerciais em recortes de empresas prontos para prospecção.</p>
        </div>
        <div>
          <h3>Bases</h3>
          {products.slice(0, 4).map((product) => (
            <p key={product.slug}>
              <Link href={`/produtos/${product.slug}`}>{product.shortName}</Link>
            </p>
          ))}
        </div>
        <div>
          <h3>Para quem é</h3>
          {solutions.slice(0, 4).map((solution) => (
            <p key={solution.slug}>
              <Link href={`/solucoes/${solution.slug}`}>{solution.slug.replaceAll("-", " ")}</Link>
            </p>
          ))}
        </div>
        <div>
          <h3>Legal</h3>
          <p><Link href="/politica-de-privacidade">Política de Privacidade</Link></p>
          <p><Link href="/termos-de-uso">Termos de Uso</Link></p>
          <p><Link href="/politica-de-cookies">Política de Cookies</Link></p>
          <p><Link href="/contato">Contato</Link></p>
        </div>
      </div>
      <div className="container">
        <p style={{ marginTop: 32, color: "rgba(255,255,255,.62)" }}>
          © {new Date().getFullYear()} ProspectaNicho. Dados e campos variam conforme disponibilidade, fontes públicas e escopo contratado.
        </p>
      </div>
    </footer>
  );
}
