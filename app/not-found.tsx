import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Página não encontrada.</h1>
        <p className="lead">O endereço pode ter mudado ou a página ainda não existe.</p>
        <ButtonLink href="/">Voltar ao início</ButtonLink>
      </div>
    </section>
  );
}
