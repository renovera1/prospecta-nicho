"use client";

import { useEffect, useState } from "react";

const key = "prospectanicho-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(key));
  }, []);

  if (!visible) return null;

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(key, value);
    setVisible(false);
  }

  return (
    <div className="cookie" role="dialog" aria-label="Preferências de cookies">
      <p className="muted" style={{ margin: 0 }}>
        Usamos cookies necessários e, se autorizado, métricas de navegação para melhorar a experiência.
      </p>
      <div className="btn-row">
        <button className="button button--secondary" type="button" onClick={() => choose("declined")}>
          Recusar
        </button>
        <button className="button button--primary" type="button" onClick={() => choose("accepted")}>
          Aceitar
        </button>
      </div>
    </div>
  );
}
