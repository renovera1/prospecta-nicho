import Image from "next/image";
import { HomeSampleForm } from "@/components/HomeSampleForm";

export function SampleConversionSection() {
  return (
    <section className="section sample-section" id="amostra">
      <Image className="sample-shield" src="/assets/brand/shield-icon.svg" alt="" width={360} height={420} aria-hidden="true" />
      <div className="container sample-grid">
        <div>
          <p className="eyebrow">Amostra gratuita</p>
          <h2 className="h2">Veja a qualidade antes de decidir.</h2>
          <p className="lead">
            Receba ate 10 empresas de amostra e avalie o formato da base antes de comprar.
          </p>
          <HomeSampleForm />
        </div>
        <div className="mini-sheet">
          <span className="badge">Amostra demonstrativa</span>
          <div className="mini-row head"><span>Empresa</span><span>Cidade</span><span>Status</span></div>
          <div className="mini-row"><span>Clinica A***</span><span>Campinas</span><span>Nova empresa</span></div>
          <div className="mini-row active"><span>Loja B***</span><span>Jundiai</span><span>Perfil ideal</span></div>
          <div className="mini-row"><span>Servico C***</span><span>Sorocaba</span><span>Prioridade</span></div>
          <div className="sample-seals">
            <span>Campos organizados para prospeccao</span>
            <span>Dados ficticios para visualizacao</span>
          </div>
        </div>
      </div>
    </section>
  );
}
