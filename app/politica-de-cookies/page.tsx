import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de Cookies" };

export default function CookiesPage() {
  return (
    <section className="section">
      <div className="container legal-card">
        <h1 className="h2">Política de Cookies</h1>
        <p>Cookies necessários podem ser usados para funcionamento do site e registro de preferências de consentimento.</p>
        <h2>Cookies de métricas</h2>
        <p>Google Analytics ou ferramenta equivalente deve ser ativada somente quando a variável de ambiente estiver configurada e respeitando preferências de consentimento.</p>
        <h2>Preferências</h2>
        <p>O banner permite aceitar ou recusar cookies não essenciais. A preferência é guardada localmente no navegador.</p>
      </div>
    </section>
  );
}
