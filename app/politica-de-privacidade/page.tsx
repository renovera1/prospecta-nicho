import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container legal-card">
        <h1 className="h2">Política de Privacidade</h1>
        <p>A ProspectaNicho coleta dados informados em formulários, como nome, empresa, e-mail, WhatsApp, nicho desejado, região e objetivo comercial.</p>
        <h2>Finalidade</h2>
        <p>Usamos esses dados para responder solicitações, enviar amostras, montar propostas, registrar pedidos e melhorar o atendimento comercial.</p>
        <h2>Compartilhamento</h2>
        <p>Dados podem ser tratados por provedores necessários à operação, como hospedagem, e-mail, automação, CRM, pagamentos e banco de dados, sempre conforme configuração do serviço.</p>
        <h2>Direitos do titular</h2>
        <p>Você pode solicitar confirmação de tratamento, correção, exclusão, oposição ou informações pelo canal {site.email}.</p>
        <h2>Cookies</h2>
        <p>Cookies necessários mantêm preferências essenciais. Métricas somente devem ser carregadas conforme consentimento e configuração do proprietário.</p>
        <h2>Retenção e segurança</h2>
        <p>Os registros são mantidos pelo tempo necessário ao atendimento, obrigações legais e prevenção de abuso. Nenhuma chave privada deve ser exposta no frontend.</p>
      </div>
    </section>
  );
}
