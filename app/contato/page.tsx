import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a ProspectaNicho sobre bases B2B, pedidos, pagamento, parcerias ou privacidade.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Contato</p>
          <h1 className="h1">Fale sobre o público que você quer alcançar.</h1>
          <p className="lead">
            Conte qual é sua operação comercial e a ProspectaNicho orienta o melhor formato de base para seu objetivo.
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container split-section">
          <ContactForm />
          <div className="card">
            <p className="eyebrow">Quando usar este canal</p>
            <h2 className="h2">Suporte, pedidos e privacidade.</h2>
            <p className="lead">
              Use o contato para dúvidas comerciais, suporte de pedido, pagamento, parcerias, solicitações fora do editor
              ou temas de privacidade e supressão.
            </p>
            <div className="value-list">
              <span>Critérios definidos antes da entrega</span>
              <span>Campos confirmados conforme disponibilidade</span>
              <span>Formato preparado para rotina comercial</span>
              <span>Suporte humano para validar o recorte</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
