"use client";

import { MessageCircle } from "lucide-react";
import { createBuilderWhatsAppMessage, summarizeBuilder } from "@/lib/editor-utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import type { BaseBuilderData } from "@/types/editor";

export function EditorSuccess({ data }: { data: BaseBuilderData }) {
  const href = createWhatsAppLink(createBuilderWhatsAppMessage(data));

  return (
    <section className="section editor-success">
      <div className="container">
        <div className="success-panel">
          <span className="badge">Solicitacao enviada</span>
          <h1 className="h2">Seu recorte foi enviado para validacao.</h1>
          <p className="lead">{summarizeBuilder(data)}</p>
          <p>
            A disponibilidade de filtros e campos sera confirmada antes da entrega. Se quiser acelerar o atendimento,
            abra a conversa no WhatsApp com o resumo preenchido.
          </p>
          {href ? (
            <a className="button button--teal" href={href} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Falar sobre meu recorte no WhatsApp
            </a>
          ) : (
            <p className="muted">Configure NEXT_PUBLIC_WHATSAPP_NUMBER para habilitar o WhatsApp direto.</p>
          )}
        </div>
      </div>
    </section>
  );
}
