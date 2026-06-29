import type { Metadata } from "next";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Pedido",
  robots: { index: false, follow: false },
};

export default async function PedidoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const whatsapp = createWhatsAppLink(`Olá, quero falar sobre o pedido ${id} da ProspectaNicho.`);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Pedido</p>
        <h1 className="h1">Acompanhamento do pedido {id}</h1>
        <div className="legal-card">
          <p>
            A área de pedidos fica disponível após autenticação e integração com Supabase, pagamentos e exportações.
            Nenhum arquivo é liberado sem confirmação de pagamento ou aprovação interna.
          </p>
          <p>Status atual: aguardando configuração das integrações de produção.</p>
          {whatsapp ? (
            <a className="button button--teal" href={whatsapp} target="_blank" rel="noreferrer">
              Falar sobre meu público
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
