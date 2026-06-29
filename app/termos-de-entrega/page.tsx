import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Entrega",
};

export default function TermosDeEntregaPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Entrega</p>
        <h1 className="h1">Termos de Entrega</h1>
        <div className="legal-card">
          <p>
            A entrega depende do produto contratado, filtros solicitados, volume, disponibilidade dos campos e
            confirmação de pagamento ou aprovação interna. O link de download, quando aplicável, deve ter validade
            limitada e registro de acesso.
          </p>
          <p>
            A aba Leia-me das exportações deve informar data de geração, snapshot utilizado, filtros aplicados,
            quantidade entregue, campos incluídos, aviso de disponibilidade, uso responsável e canal de supressão.
          </p>
        </div>
      </div>
    </section>
  );
}
