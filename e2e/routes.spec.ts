import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/solicitar-planilha?segment=agencias&source=e2e",
  "/montar-minha-base",
  "/produtos",
  "/produtos/amostra-gratuita",
  "/para-quem-e",
  "/faq",
  "/contato",
];

test.describe("rotas públicas", () => {
  for (const route of publicRoutes) {
    test(`carrega ${route}`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator("body")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("Application error");
    });
  }
});

test("rotas legadas redirecionam para a home", async ({ page }) => {
  await page.goto("/blog");
  await expect(page).toHaveURL(/\/$/);
});
