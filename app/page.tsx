import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandWatermark } from "@/components/BrandWatermark";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HomeBaseBuilderTeaser } from "@/components/HomeBaseBuilderTeaser";
import { LeadPreviewSheet } from "@/components/LeadPreviewSheet";
import { OpportunityRadar } from "@/components/OpportunityRadar";
import { ProductSignalCard } from "@/components/ProductSignalCard";
import { SampleConversionSection } from "@/components/SampleConversionSection";
import { createWhatsAppLink, defaultWhatsAppMessage } from "@/lib/whatsapp";
import { homeFaq, isExternalHref, products } from "@/lib/site";

const impactCards = [
  "Publico definido antes da busca",
  "Empresas organizadas para prospeccao",
  "Menos tempo procurando",
  "Mais contexto para vender",
];

const segments = [
  ["Agencias", "Encontre empresas no momento de estruturar presenca digital."],
  ["Contabilidades", "Aproxime-se de empresas recem-abertas antes da concorrencia."],
  ["Energia solar", "Priorize regioes e perfis com maior potencial comercial."],
  ["ERP e sistemas", "Ache empresas com rotina operacional e necessidade de organizacao."],
  ["Maquininhas", "Prospecte negocios que vendem presencialmente ou estao comecando."],
  ["Comunicacao visual", "Chegue quando a empresa precisa de fachada, marca e materiais."],
  ["Consultorias", "Filtre empresas por momento, porte e atividade economica."],
  ["Certificado digital", "Encontre empresas com demanda operacional inicial."],
  ["Seguros empresariais", "Mapeie negocios que precisam proteger sua operacao."],
  ["Seguranca do trabalho", "Foque em segmentos com exigencias e riscos operacionais."],
];

const transparency = [
  "Criterios definidos antes da entrega",
  "Campos confirmados conforme disponibilidade",
  "Formato preparado para rotina comercial",
  "Suporte humano para validar o recorte",
];

export default function HomePage() {
  const mainProducts = products.filter((product) => product.slug !== "amostra-gratuita").slice(0, 4);
  const whatsappHref = createWhatsAppLink(defaultWhatsAppMessage);

  return (
    <>
      <section className="hero hero--premium">
        <BrandWatermark tone="light" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--dark">INTELIGENCIA COMERCIAL PARA QUEM PRECISA CRESCER</p>
            <h1 className="h1">Encontre empresas no momento em que sua oferta faz mais sentido.</h1>
            <p className="lead">
              Defina nicho, cidade, porte, CNAE e momento de abertura. A ProspectaNicho transforma seus criterios em
              uma base organizada para prospeccao.
            </p>
            <div className="btn-row">
              <ButtonLink href="/montar-minha-base" variant="teal">
                Montar minha base
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="/produtos/amostra-gratuita" variant="secondary">
                Receber 10 empresas de amostra
              </ButtonLink>
            </div>
            <p className="hero-microcopy">
              Sem assinatura obrigatoria. Sem lista generica. Recortes construidos para sua operacao.
            </p>
          </div>
          <OpportunityRadar />
        </div>
      </section>

      <HomeBaseBuilderTeaser />

      <section className="section section--light">
        <div className="container split-section">
          <LeadPreviewSheet />
          <div>
            <p className="eyebrow">DEMONSTRACAO DA ENTREGA</p>
            <h2 className="h2">Veja como sua base chega para a equipe comercial.</h2>
            <p className="lead">
              A entrega prioriza campos uteis para abordagem: empresa, segmento, cidade, CNAE, porte, abertura, site,
              contato empresarial e status comercial ilustrativo.
            </p>
            <div className="impact-stack">
              {impactCards.map((item) => (
                <span key={item}>
                  <BadgeCheck size={18} />
                  {item}
                </span>
              ))}
            </div>
            <p className="muted">
              Exemplo ilustrativo. Campos entregues variam conforme produto, origem e escopo contratado.
            </p>
            <div className="signal-chips" style={{ marginTop: 18 }}>
              {transparency.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">Bases comerciais</p>
            <h2 className="h2">Escolha o gatilho comercial da sua proxima venda.</h2>
            <p className="lead">
              Bases prontas para comecar agora ou recortes personalizados quando seu publico exige filtros mais
              especificos.
            </p>
          </div>
          <div className="product-signal-grid">
            {mainProducts.map((product) => (
              <ProductSignalCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band segment-band">
        <BrandWatermark tone="light" />
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow eyebrow--dark">Para quem e</p>
            <h2 className="h2">Para quem precisa transformar prospeccao em rotina comercial.</h2>
          </div>
          <div className="segment-labels">
            {segments.map(([label, text]) => (
              <Link href="/montar-minha-base" key={label} aria-label={`${label}: ${text}`}>
                <strong>{label}</strong>
                <span>{text}</span>
              </Link>
            ))}
          </div>
          <ButtonLink href="/montar-minha-base" variant="teal">
            Montar meu recorte
          </ButtonLink>
        </div>
      </section>

      <SampleConversionSection />

      <section className="section section--light">
        <div className="container faq-short">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="h2">Antes de comecar, voce talvez queira saber.</h2>
            <ButtonLink href="/faq" variant="secondary">
              Ver todas as duvidas
            </ButtonLink>
          </div>
          <FAQAccordion items={homeFaq.slice(0, 5)} />
        </div>
      </section>

      <section className="section final-cta">
        <BrandWatermark tone="light" />
        <div className="container">
          <h2 className="h2">Menos tempo procurando. Mais tempo falando com empresas que fazem sentido.</h2>
          <p className="lead">
            Transforme seu publico ideal em uma base pronta para prospeccao, com criterios claros e validacao humana.
          </p>
          <div className="btn-row">
            <ButtonLink href="/montar-minha-base" variant="teal">
              Montar minha base
            </ButtonLink>
            {whatsappHref ? (
              <ButtonLink href={whatsappHref} variant="secondary" external={isExternalHref(whatsappHref)}>
                <MessageCircle size={18} />
                Falar sobre meu publico
              </ButtonLink>
            ) : (
              <ButtonLink href="/produtos" variant="secondary">
                Ver bases a partir de R$ 147
              </ButtonLink>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
