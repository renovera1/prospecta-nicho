import { NextResponse } from "next/server";
import { assertProductionEnv } from "@/src/config/env";

export const dynamic = "force-static";

function configured(...keys: string[]) {
  return keys.every((key) => Boolean(process.env[key]));
}

export async function GET() {
  const envValidation = assertProductionEnv();
  const checks = {
    supabase: configured("SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"),
    redis: configured("UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"),
    payments: Boolean(process.env.MERCADO_PAGO_ACCESS_TOKEN || process.env.ASAAS_API_KEY),
    email: configured("RESEND_API_KEY"),
    storage: Boolean(
      process.env.SUPABASE_URL ||
        configured("R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET_NAME"),
    ),
    turnstile: configured("TURNSTILE_SECRET_KEY"),
    sentry: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN),
    siteUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL),
  };

  const required = ["supabase", "email", "siteUrl"] as const;
  const ok = required.every((key) => checks[key]) && envValidation.ok;

  return NextResponse.json(
    {
      ok,
      environment: process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_DEPLOY_ENV || "local",
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || null,
      checks,
      env: {
        ok: envValidation.ok,
        issues: envValidation.issues,
      },
      generatedAt: new Date().toISOString(),
    },
    { status: ok ? 200 : 503 },
  );
}
