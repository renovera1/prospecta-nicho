import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Login administrativo", robots: { index: false, follow: false } };

export default function AdminLoginPage() {
  return (
    <AdminShell title="Login administrativo" eyebrow="Supabase Auth">
      <div className="admin-panel">
        <p>
          A autenticação deve ser feita com Supabase Auth em produção. Esta tela mantém o fluxo separado da área pública e
          evita qualquer exposição de service role no frontend.
        </p>
        <form className="admin-form">
          <label>
            E-mail
            <input type="email" placeholder="admin@prospectanicho.com.br" />
          </label>
          <label>
            Senha
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="button button--primary" type="button">Entrar</button>
        </form>
      </div>
    </AdminShell>
  );
}
