import { ButtonLink } from "@/components/ButtonLink";

const copy = {
  success: ["Pagamento recebido", "Seu pedido foi registrado. A próxima etapa é confirmar escopo e entrega."],
  pending: ["Pagamento pendente", "A confirmação ainda não chegou. Você pode acompanhar pelo checkout ou falar no WhatsApp."],
  error: ["Pagamento não concluído", "Tente novamente ou fale com a ProspectaNicho para receber orientação."],
};

export function CheckoutStatus({ status }: { status: "success" | "pending" | "error" }) {
  const [title, text] = copy[status];
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">{title}</h1>
        <p className="lead">{text}</p>
        <ButtonLink href="/contato">Falar com atendimento</ButtonLink>
      </div>
    </section>
  );
}
