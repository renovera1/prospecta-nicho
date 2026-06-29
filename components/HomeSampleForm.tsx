"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { isExternalHref, site } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function HomeSampleForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  function markStarted() {
    if (!started) {
      setStarted(true);
      trackEvent("sample_form_started");
    }
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/free-sample-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        company: form.get("company") || undefined,
        whatsapp: form.get("whatsapp"),
        niche: form.get("niche"),
        city: form.get("city"),
        consent: true,
        source: "home-short-sample",
      }),
    });

    if (!response.ok) {
      setError("Nao foi possivel enviar agora. Confira os campos e tente novamente.");
      return;
    }

    trackEvent("sample_form_submitted");
    setSent(true);
  }

  if (sent) {
    const href = createWhatsAppLink("Ola, solicitei uma amostra gratuita pelo site e quero confirmar meu nicho/regiao.");
    const finalHref = href || "/produtos";
    const external = isExternalHref(finalHref);
    return (
      <div className="sample-success">
        <strong>Pedido de amostra recebido.</strong>
        <p>
          {site.whatsapp
            ? "Abra o WhatsApp para acelerar o envio e confirmar o melhor recorte."
            : "Recebemos sua solicitacao. Configure o WhatsApp real para atendimento direto."}
        </p>
        <a
          className="button button--primary"
          href={finalHref}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {site.whatsapp ? "Falar sobre meu publico" : "Ver bases a partir de R$ 147"}
        </a>
      </div>
    );
  }

  return (
    <form className="sample-form" onSubmit={submit} onFocus={markStarted}>
      <label>
        Nome
        <input name="name" required minLength={2} />
      </label>
      <label>
        WhatsApp
        <input name="whatsapp" required minLength={8} />
      </label>
      <label>
        Nicho desejado
        <input name="niche" required minLength={2} />
      </label>
      <label>
        Cidade ou regiao
        <input name="city" required minLength={2} />
      </label>
      <label>
        Empresa opcional
        <input name="company" />
      </label>
      {error ? <span className="error">{error}</span> : null}
      <button className="button button--primary" type="submit">
        <Send size={18} />
        Receber minha amostra
      </button>
      <p>Sem cartao. Sem compromisso. Voce valida o formato antes de contratar uma base.</p>
    </form>
  );
}
