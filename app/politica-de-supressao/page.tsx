import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Supressão",
  description: "Como solicitar revisão, oposição ou remoção de registros em bases da ProspectaNicho.",
};

export default function PoliticaDeSupressaoPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Privacidade</p>
        <h1 className="h1">Política de Supressão</h1>
        <div className="legal-card">
          <h2>Solicitação de revisão</h2>
          <p>
            A ProspectaNicho mantém lista de supressão para registrar pedidos de revisão, oposição ou remoção
            relacionados a bases entregues. As solicitações devem ser feitas pelo canal de contato, com informações
            suficientes para identificar o registro empresarial.
          </p>
          <h2>Minimização</h2>
          <p>
            Exportações comerciais padrão não devem incluir CPF, sócios, contatos particulares, dados sensíveis ou
            informações de pessoa física. Casos de MEI e empresário individual exigem revisão adicional de privacidade.
          </p>
          <h2>Auditoria</h2>
          <p>
            Pedidos, exportações, downloads e solicitações de supressão devem ser registrados para controle operacional
            e rastreabilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
