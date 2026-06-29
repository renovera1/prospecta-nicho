import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Dados Empresariais",
};

export default function AvisoDeDadosEmpresariaisPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Dados empresariais</p>
        <h1 className="h1">Aviso de Dados Empresariais</h1>
        <div className="legal-card">
          <p>
            A ProspectaNicho trabalha com recortes empresariais e critérios comerciais. Campos adicionais como telefone,
            e-mail, site e indicadores dependem de origem, escopo e disponibilidade, sem garantia universal.
          </p>
          <p>
            O comprador é responsável pelo uso lícito, proporcional e não abusivo das informações recebidas. É vedado
            usar a base para spam, fraude, assédio, discriminação ou qualquer finalidade ilícita.
          </p>
        </div>
      </div>
    </section>
  );
}
