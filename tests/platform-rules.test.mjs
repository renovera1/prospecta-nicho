import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import test from "node:test";
import { buildWhatsAppUrl } from "../lib/whatsapp.ts";
import { productCatalog } from "../lib/products.ts";

test("metadata default nao usa localhost", () => {
  const source = readFileSync("lib/site.ts", "utf8");
  const fallbackLine = source.split("\n").find((line) => line.includes("url: process.env.NEXT_PUBLIC_SITE_URL"));
  assert.ok(fallbackLine);
  assert.equal(fallbackLine.includes("localhost"), false);
  assert.equal(fallbackLine.includes("127.0.0.1"), false);
  assert.equal(fallbackLine.includes(":3000"), false);
  assert.equal(fallbackLine.includes(":3001"), false);
});

test("whatsapp usa wa.me quando numero esta configurado", () => {
  const previous = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = "5519999999999";
  const url = buildWhatsAppUrl("Ola");
  assert.match(url, /^https:\/\/wa\.me\/5519999999999\?text=/);
  if (previous === undefined) delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  else process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = previous;
});

test("catalogo nao promete campos pessoais proibidos", () => {
  const fields = productCatalog.flatMap((product) => product.defaultFields).join(" ").toLowerCase();
  assert.equal(fields.includes("cpf"), false);
  assert.equal(fields.includes("sócio"), false);
  assert.equal(fields.includes("telefone particular"), false);
});
