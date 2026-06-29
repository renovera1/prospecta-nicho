import Image from "next/image";
import { HomeSampleForm } from "@/components/HomeSampleForm";

export function SampleConversionSection() {
  return (
    <section className="section sample-section" id="amostra">
      <Image className="sample-shield" src="/assets/brand/shield-icon.svg" alt="" width={360} height={420} aria-hidden="true" />
      <div className="container-wide sample-grid">
        <div className="sample-copy">
          <p className="eyebrow">Amostra gratuita</p>
          <h2 className="h2">Veja a qualidade antes de decidir.</h2>
          <p className="lead">
            Receba até 10 empresas de amostra e avalie o formato da base antes de comprar.
          </p>
          <HomeSampleForm />
        </div>
        <div className="mini-sheet sample-preview">
          <span className="badge">Amostra demonstrativa</span>
          <div className="mini-row head"><span>Empresa</span><span>Cidade</span><span>Status</span></div>
          <div className="mini-row"><span>Clínica A***</span><span>Campinas</span><span>Nova empresa</span></div>
          <div className="mini-row active"><span>Loja B***</span><span>Jundiaí</span><span>Perfil ideal</span></div>
          <div className="mini-row"><span>Serviço C***</span><span>Sorocaba</span><span>Prioridade</span></div>
          <div className="sample-seals">
            <span>Campos organizados para prospecção</span>
            <span>Dados fictícios para visualização</span>
          </div>
        </div>
      </div>
    </section>
  );
}
