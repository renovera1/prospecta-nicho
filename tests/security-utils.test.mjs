import { strict as assert } from "node:assert";
import test from "node:test";
import { serializeJsonLd } from "../lib/structured-data.ts";
import { assertProductionEnv, getMissingProductionEnv } from "../src/config/env.ts";
import { maskValue, redactPayload } from "../src/lib/security/logger.ts";
import { customRequestSchema } from "../src/schemas/custom-request.ts";

test("env de produção lista variáveis obrigatórias ausentes", () => {
  const missing = getMissingProductionEnv({ NODE_ENV: "production" });
  assert.ok(missing.includes("NEXT_PUBLIC_SITE_URL"));
  assert.ok(missing.includes("SUPABASE_SERVICE_ROLE_KEY"));
});

test("env de export estático não exige backend", () => {
  const result = assertProductionEnv({
    NODE_ENV: "production",
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_STATIC_EXPORT: "true",
  });
  assert.equal(result.ok, true);
});

test("logger mascara dados sensíveis antes de logar", () => {
  const payload = redactPayload({
    email: "cliente@empresa.com",
    whatsapp: "5511999999999",
    nested: { token: "abcdef123456" },
    status: "ok",
  });
  assert.equal(payload.status, "ok");
  assert.notEqual(payload.email, "cliente@empresa.com");
  assert.notEqual(payload.whatsapp, "5511999999999");
  assert.notEqual(payload.nested.token, "abcdef123456");
  assert.equal(maskValue("abcd"), "***");
});

test("schema de solicitação rápida exige consentimento e período válido", () => {
  const result = customRequestSchema.safeParse({
    segment: "agencias",
    location: "Campinas",
    period: "últimos 90 dias",
    name: "Cliente",
    whatsapp: "(19) 99999-9999",
    consent: true,
  });
  assert.equal(result.success, true);

  const invalid = customRequestSchema.safeParse({
    segment: "agencias",
    location: "Campinas",
    period: "qualquer",
    name: "Cliente",
    whatsapp: "(19) 99999-9999",
    consent: false,
  });
  assert.equal(invalid.success, false);
});

test("serializeJsonLd escapa fechamento de script", () => {
  const serialized = serializeJsonLd({ name: "</script><script>alert(1)</script>" });
  assert.ok(!serialized.includes("</script>"));
  assert.ok(serialized.includes("\\u003c/script>"));
});
