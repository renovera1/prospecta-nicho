"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const audiences = [
  "Agências",
  "Contabilidades",
  "Energia solar",
  "ERP e sistemas",
  "Maquininhas",
  "Comunicação visual",
  "Consultorias",
  "Outro",
];

const periods = [
  "últimos 30 dias",
  "últimos 60 dias",
  "últimos 90 dias",
  "últimos 6 meses",
  "sem filtro de abertura",
];

export function HomeBaseBuilderTeaser() {
  const router = useRouter();
  const [segment, setSegment] = useState("Agências");
  const [city, setCity] = useState("");
  const [period, setPeriod] = useState("últimos 90 dias");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (segment) {
      params.set("audience", segment);
      params.set("segment", segment);
    }
    if (city.trim()) params.set("city", city.trim());
    if (period) params.set("openedPeriod", period);
    router.push(`/montar-minha-base?${params.toString()}`);
  }

  return (
    <section className="section section--light builder-teaser-section">
      <div className="container-wide split-section">
        <div>
          <p className="eyebrow">MONTE SEU RECORTE</p>
          <h2 className="h2">Seu público não cabe em uma lista genérica.</h2>
          <p className="lead">
            Escolha segmento, região, momento da empresa e formato de entrega. Em poucos passos, você cria uma
            solicitação comercial muito mais clara.
          </p>
          <form className="builder-mini-form" onSubmit={submit}>
            <div className="teaser-choice-group">
              <span>Para quem você quer vender?</span>
              <div className="chip-grid" role="listbox" aria-label="Público desejado">
                {audiences.map((option) => (
                  <button
                    className="choice-chip"
                    data-active={segment === option}
                    type="button"
                    key={option}
                    onClick={() => setSegment(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <label className="floating-field">
              <span>Em qual cidade ou região?</span>
              <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Digite uma cidade, região ou UF"
              />
            </label>
            <div className="teaser-choice-group">
              <span>Empresas abertas há quanto tempo?</span>
              <div className="chip-grid" role="listbox" aria-label="Período de abertura">
                {periods.map((option) => (
                  <button
                    className="choice-chip"
                    data-active={period === option}
                    type="button"
                    key={option}
                    onClick={() => setPeriod(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <button className="button button--primary" type="submit">
              Continuar montando minha base
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
        <div className="teaser-radar-panel">
          <span className="badge">Seu recorte em construção</span>
          <h3 className="h3">{segment} {city ? `em ${city}` : "com região a definir"}</h3>
          <div className="teaser-map" aria-hidden="true">
            <span className="radar-pulse" />
            <span className="radar-dot dot-a" />
            <span className="radar-dot dot-b" />
            <span className="radar-line line-a" />
          </div>
          <div className="signal-chips">
            <span>{segment}</span>
            <span>{city || "Cidade ou região"}</span>
            <span>ME e EPP</span>
            <span>{period}</span>
            <span>Excel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
