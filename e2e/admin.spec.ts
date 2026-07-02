import { expect, test } from "@playwright/test";

test("admin de produtos expõe tabela e drawer", async ({ page }) => {
  await page.goto("/admin/produtos");
  await expect(page.getByRole("heading", { name: /Produtos/i })).toBeVisible();
  await expect(page.locator(".admin-product-row").first()).toBeVisible();
  await expect(page.locator(".admin-drawer")).toBeVisible();
});

test("admin de preços expõe campos de alteração e auditoria", async ({ page }) => {
  await page.goto("/admin/precos");
  await expect(page.getByRole("heading", { name: /preços/i })).toBeVisible();
  await expect(page.locator(".admin-drawer")).toContainText(/preço|histórico|auditoria/i);
});
