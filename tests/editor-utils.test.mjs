import { strict as assert } from "node:assert";
import test from "node:test";
import { builderSchema } from "../lib/editor-schema.ts";
import {
  createBuilderWhatsAppMessage,
  recommendProduct,
  serializePublicFilters,
} from "../lib/editor-utils.ts";

const baseData = {
  audience: "Agencias de marketing",
  goal: "Preparar campanha",
  segment: "Comercio e servicos",
  state: "SP",
  city: "Campinas",
  openedPeriod: "ultimos 60 dias",
  companySize: ["ME", "EPP"],
  registrationStatus: "ativa",
  capitalRange: "sem preferencia",
  branchType: "qualquer",
  baseFields: ["CNPJ", "Razao social"],
  extraFields: ["Site"],
  quantityRange: "101 a 500",
  deliveryFormat: "Excel",
  name: "Lucas",
  email: "lucas@example.com",
  whatsapp: "19999999999",
  consent: true,
};

test("recomenda produto a partir do recorte", () => {
  assert.equal(recommendProduct(baseData), "Base para Agencias");
  assert.equal(recommendProduct({ ...baseData, audience: "Contabilidades" }), "Base para Contabilidades");
});

test("serializa apenas filtros publicos", () => {
  const query = serializePublicFilters(baseData);
  assert.match(query, /audience=/);
  assert.doesNotMatch(query, /email=/);
  assert.doesNotMatch(query, /whatsapp=/);
  assert.doesNotMatch(query, /name=/);
});

test("gera mensagem de WhatsApp com campos do recorte", () => {
  const message = createBuilderWhatsAppMessage(baseData);
  assert.match(message, /Preparar campanha/);
  assert.match(message, /Comercio e servicos/);
  assert.match(message, /Campinas\/SP/);
});

test("valida payload completo do editor", () => {
  const parsed = builderSchema.safeParse(baseData);
  assert.equal(parsed.success, true);
});
