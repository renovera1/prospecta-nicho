import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandWatermark } from "@/components/BrandWatermark";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HomeBaseBuilderTeaser } from "@/components/HomeBaseBuilderTeaser";
import { LeadDeliveryPreview } from "@/components/LeadDeliveryPreview";
import { OpportunityRadar } from "@/components/OpportunityRadar";
import { ProductSignalCard } from "@/components/ProductSignalCard";
import { SampleConversionSection } from "@/components/SampleConversionSection";
import { createWhatsAppLink, defaultWhatsAppMessage } from "@/lib/whatsapp";
import { homeFaq, isExternalHref, products } from "@/lib/site";

const impactCards = [
  "Público definido antes da busca",
  "Estrutura pronta para rotina comercial",
  "Campos confirmados conforme disponibilidade",
  "Suporte humano para validar o recorte",
];

const segments = [
  ["Agências", "Encontre empresas que estão estruturando presença digital."],
  ["Contabilidades", "Aproxime-se de empresas recém-abertas antes da concorrência."],
  ["Energia solar", "Priorize regiões e perfis com maior potencial comercial."],
  ["ERP e sistemas", "Ache empresas com rotina operacional e necessidade de organização."],
  ["Maquininhas", "Prospecte negócios que vendem presencialmente ou estão começando."],
  ["Comunicação visual", "Chegue quando a empresa precisa de fachada, marca e materiais."],
  ["Consultorias", "Filtre empresas por momento, porte e atividade econômica."],
  ["Certificado digital", "Encontre empresas com demanda operacional inicial."],
  ["Seguros empresariais", "Mapeie negócios que precisam proteger sua operação."],
  ["Segurança do trabalho", "Foque em segmentos com exigências e riscos operacionais."],
];

export default function HomePage() {
  const mainProducts = products.filter((product) => product.slug !== "amostra-gratuita").slice(0, 4);
  const whatsappHref = createWhatsAppLink(defaultWhatsAppMessage);

  return (
    <>
      <section className="hero hero--premium">
        <BrandWatermark tone="light" />
        <div className="container-wide hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--dark">INTELIGÊNCIA COMERCIAL PARA QUEM PRECISA CRESCER</p>
            <h1 className="h1">Encontre empresas com o perfil certo para sua próxima venda.</h1>
            <p className="lead">
              Defina nicho, cidade, porte, CNAE e momento de abertura. A ProspectaNicho organiza seu recorte comercial
              para você prospectar com mais contexto.
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
              Sem assinatura obrigatória. Sem lista genérica. Recortes construídos para sua operação.
            </p>
          </div>
          <OpportunityRadar />
        </div>
      </section>

      <HomeBaseBuilderTeaser />

      <section className="section section--light">
        <div className="container-wide split-section">
          <LeadDeliveryPreview />
          <div>
            <p className="eyebrow">DEMONSTRAÇÃO DA ENTREGA</p>
            <h2 className="h2">Veja como sua base chega para a equipe comercial.</h2>
            <p className="lead">
              A entrega prioriza campos úteis para abordagem: empresa, segmento, cidade, CNAE, porte, abertura, site,
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="section-kicker">
            <p className="eyebrow">Bases comerciais</p>
            <h2 className="h2">Escolha o gatilho comercial da sua próxima venda.</h2>
            <p className="lead">
              Bases prontas para começar agora ou recortes personalizados quando seu público exige filtros mais
              específicos.
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
        <div className="container-wide">
          <div className="section-kicker">
            <p className="eyebrow eyebrow--dark">Para quem é</p>
            <h2 className="h2">Uma base melhor começa com um público melhor definido.</h2>
          </div>
          <div className="segment-labels">
            {segments.map(([label, text]) => (
              <Link href={`/montar-minha-base?segment=${encodeURIComponent(label)}`} key={label} aria-label={`${label}: ${text}`}>
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
        <div className="container-wide faq-short">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="h2">Antes de começar, você talvez queira saber.</h2>
            <ButtonLink href="/faq" variant="secondary">
              Ver todas as d?vidas
            </ButtonLink>
          </div>
          <FAQAccordion items={homeFaq.slice(0, 5)} />
        </div>
      </section>

      <section className="section final-cta">
        <BrandWatermark tone="light" />
        <div className="container-reading">
          <h2 className="h2">Menos tempo procurando. Mais tempo falando com empresas que fazem sentido.</h2>
          <p className="lead">
            Transforme seu público ideal em uma base pronta para prospecção, com critérios claros e validação humana.
          </p>
          <div className="btn-row">
            <ButtonLink href="/montar-minha-base" variant="teal">
              Montar minha base
            </ButtonLink>
            {whatsappHref ? (
              <ButtonLink href={whatsappHref} variant="secondary" external={isExternalHref(whatsappHref)}>
                <MessageCircle size={18} />
                Falar sobre meu público
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
