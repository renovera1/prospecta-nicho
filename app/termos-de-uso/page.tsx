import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container legal-card">
        <h1 className="h2">Termos de Uso</h1>
        <p>As bases são entregues conforme critérios contratados. Campos, volume e disponibilidade podem variar de acordo com fontes públicas, escopo e viabilidade técnica.</p>
        <h2>Uso permitido</h2>
        <p>O comprador deve usar a base de forma legítima, proporcional, identificada e compatível com a legislação aplicável, incluindo regras de proteção de dados e comunicação comercial.</p>
        <h2>Uso proibido</h2>
        <p>É proibido usar a base para fraude, spam abusivo, assédio, revenda não autorizada, enriquecimento ilícito, violação de direitos de terceiros ou tratamento de dados sensíveis.</p>
        <h2>Dados e limitações</h2>
        <p>A ProspectaNicho não promete dados pessoais privados, dados sensíveis, informações sigilosas, contatos inexistentes ou resultados comerciais garantidos.</p>
        <h2>Pedidos personalizados</h2>
        <p>Pedidos sob demanda exigem alinhamento de escopo, prazo, campos desejados, quantidade e critérios de entrega.</p>
        <h2>Suporte</h2>
        <p>Dúvidas, solicitações e suporte podem ser enviados para {site.email}.</p>
      </div>
    </section>
  );
}
