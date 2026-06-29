"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function HomeBaseBuilderTeaser() {
  const router = useRouter();
  const [segment, setSegment] = useState("Agencias de marketing");
  const [city, setCity] = useState("Campinas");
  const [period, setPeriod] = useState("ultimos 60 dias");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({
      audience: segment,
      segment,
      city,
      openedPeriod: period,
    });
    router.push(`/montar-minha-base?${params.toString()}`);
  }

  return (
    <section className="section section--light builder-teaser-section">
      <div className="container split-section">
        <div>
          <p className="eyebrow">MONTE SEU RECORTE</p>
          <h2 className="h2">Seu publico nao cabe em uma lista generica.</h2>
          <p className="lead">
            Escolha segmento, regiao, momento da empresa e formato de entrega. Em poucos passos, voce cria uma
            solicitacao comercial muito mais clara.
          </p>
          <form className="builder-mini-form" onSubmit={submit}>
            <label>
              Para quem voce quer vender?
              <select value={segment} onChange={(event) => setSegment(event.target.value)}>
                <option>Agencias de marketing</option>
                <option>Contabilidades</option>
                <option>Energia solar</option>
                <option>ERP e sistemas</option>
                <option>Consultoria B2B</option>
                <option>Outro</option>
              </select>
            </label>
            <label>
              Em qual cidade ou regiao?
              <input value={city} onChange={(event) => setCity(event.target.value)} />
            </label>
            <label>
              Empresas abertas ha quanto tempo?
              <select value={period} onChange={(event) => setPeriod(event.target.value)}>
                <option>ultimos 30 dias</option>
                <option>ultimos 60 dias</option>
                <option>ultimos 90 dias</option>
                <option>ultimos 6 meses</option>
                <option>sem filtro de abertura</option>
              </select>
            </label>
            <button className="button button--primary" type="submit">
              Continuar montando minha base
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
        <div className="teaser-radar-panel">
          <span className="badge">Recorte em construcao</span>
          <h3 className="h3">{segment} em {city || "regiao definida"}</h3>
          <div className="teaser-map" aria-hidden="true">
            <span className="radar-pulse" />
            <span className="radar-dot dot-a" />
            <span className="radar-dot dot-b" />
            <span className="radar-line line-a" />
          </div>
          <div className="signal-chips">
            <span>{segment}</span>
            <span>{city || "Regiao"}</span>
            <span>ME e EPP</span>
            <span>{period}</span>
            <span>Excel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
