import type { Metadata } from "next";

const checks = [
  ["Supabase", Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)],
  ["Resend", Boolean(process.env.RESEND_API_KEY)],
  ["Mercado Pago", Boolean(process.env.MERCADO_PAGO_ACCESS_TOKEN)],
  ["Asaas", Boolean(process.env.ASAAS_API_KEY)],
  ["ClickHouse", Boolean(process.env.CLICKHOUSE_URL && process.env.CLICKHOUSE_USERNAME && process.env.CLICKHOUSE_PASSWORD)],
  ["R2/S3", Boolean(process.env.R2_BUCKET && process.env.R2_ACCESS_KEY_ID && process.env.R2_SECRET_ACCESS_KEY)],
  ["Redis/Fila", Boolean(process.env.REDIS_URL)],
  ["Admin API Token", Boolean(process.env.ADMIN_API_TOKEN)],
];

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Área administrativa</p>
        <h1 className="h1">Operação protegida da ProspectaNicho.</h1>
        <p className="lead">
          Esta tela não expõe dados comerciais. O painel completo depende de Supabase Auth, perfis administrativos e
          RLS configurados no ambiente de produção.
        </p>
        <div className="card-grid" style={{ marginTop: 28 }}>
          {checks.map(([label, ok]) => (
            <article className="card" key={label as string}>
              <span className="badge">{ok ? "Configurado" : "Pendente"}</span>
              <h2 className="h3" style={{ marginTop: 12 }}>{label}</h2>
              <p className="muted">
                {ok
                  ? "Variáveis mínimas presentes no ambiente."
                  : "Configure as variáveis correspondentes antes de operar dados reais."}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
