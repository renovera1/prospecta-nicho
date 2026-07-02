import { NextResponse } from "next/server";
import { getSiteUrl } from "@/lib/site-url";

const buckets = new Map<string, { count: number; resetAt: number }>();

export function sanitizeText(value: unknown, maxLength = 1000) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function sanitizePhone(value: unknown) {
  return sanitizeText(value, 32).replace(/[^\d+()\-\s]/g, "");
}

export function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

export function rateLimit(request: Request, key: string, limit = 8, windowMs = 60_000) {
  const id = `${key}:${getClientIp(request)}`;
  const now = Date.now();
  const current = buckets.get(id);

  if (!current || current.resetAt < now) {
    buckets.set(id, { count: 1, resetAt: now + windowMs });
    return null;
  }

  current.count += 1;
  if (current.count > limit) {
    return NextResponse.json({ ok: false, message: "Muitas tentativas. Aguarde alguns minutos e tente novamente." }, { status: 429 });
  }

  return null;
}

export async function parseJsonBody(request: Request, maxBytes = 16_384) {
  const text = await request.text();
  if (new TextEncoder().encode(text).length > maxBytes) {
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: "Payload muito grande." }, { status: 413 }),
    };
  }

  try {
    return { ok: true as const, body: JSON.parse(text || "{}") as Record<string, unknown> };
  } catch {
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: "JSON inválido." }, { status: 400 }),
    };
  }
}

export function requireTrustedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return null;

  try {
    const originUrl = new URL(origin);
    const host = request.headers.get("host");
    const siteUrl = new URL(getSiteUrl());
    const sameHost = host && originUrl.host === host;
    const sameSite = originUrl.host === siteUrl.host;

    if (sameHost || sameSite) return null;
  } catch {
    return NextResponse.json({ ok: false, message: "Origem inválida." }, { status: 403 });
  }

  return NextResponse.json({ ok: false, message: "Origem não autorizada." }, { status: 403 });
}

export function hasHoneypot(body: Record<string, unknown>) {
  return Boolean(sanitizeText(body.companySite || body.website || body.url));
}

export async function verifyTurnstileIfConfigured(request: Request, token?: string) {
  if (!process.env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const formData = new FormData();
  formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", getClientIp(request));

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });
    const result = (await response.json()) as { success?: boolean };
    return Boolean(result.success);
  } catch {
    return false;
  }
}
