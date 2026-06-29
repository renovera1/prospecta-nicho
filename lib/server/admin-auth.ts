import { NextResponse } from "next/server";

export function requireAdmin(request: Request) {
  const expected = process.env.ADMIN_API_TOKEN;
  if (!expected) {
    return NextResponse.json({ ok: false, message: "ADMIN_API_TOKEN não configurado." }, { status: 503 });
  }

  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (token !== expected) {
    return NextResponse.json({ ok: false, message: "Não autorizado." }, { status: 401 });
  }

  return null;
}

export function integrationStatus() {
  return {
    clickhouse: Boolean(process.env.CLICKHOUSE_URL && process.env.CLICKHOUSE_USERNAME && process.env.CLICKHOUSE_PASSWORD),
    r2: Boolean(process.env.R2_BUCKET && process.env.R2_ACCESS_KEY_ID && process.env.R2_SECRET_ACCESS_KEY),
    redis: Boolean(process.env.REDIS_URL),
    supabase: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
  };
}
