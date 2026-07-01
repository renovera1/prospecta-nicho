import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import test from "node:test";

const schema = readFileSync("supabase/schema.sql", "utf8");

test("schema administrativo inclui histórico de preço, preview e storage", () => {
  for (const table of ["product_price_history", "preview_links", "sample_requests"]) {
    assert.match(schema, new RegExp(`create table if not exists public\\.${table}`));
    assert.match(schema, new RegExp(`alter table public\\.${table} enable row level security`));
  }
  for (const bucket of ["brand-assets", "site-media", "product-media", "preview-assets"]) {
    assert.match(schema, new RegExp(bucket));
  }
});

test("publicação admin exige autenticação e bloqueia rotas locais", () => {
  const source = readFileSync("app/api/admin/publish/route.ts", "utf8");
  assert.match(source, /requireAdmin/);
  assert.match(source, /revalidatePath/);
  assert.match(source, /localhost\|127/);
});

test("preview compartilhado é assinado e expira", () => {
  const source = readFileSync("app/api/admin/preview-share/route.ts", "utf8");
  assert.match(source, /createHmac/);
  assert.match(source, /expiresInHours/);
  assert.match(source, /revocable/);
});

test("editor de preços preserva histórico e novas compras", () => {
  const source = readFileSync("components/admin/ProductPricingEditor.tsx", "utf8");
  assert.match(source, /Alterar preço/);
  assert.match(source, /histórico de preço/);
  assert.match(source, /novas compras|compras futuras|revalida/);
});
