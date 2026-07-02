import { expect, test } from "@playwright/test";

test("home não renderiza links públicos proibidos", async ({ page }) => {
  await page.goto("/");
  const forbidden = /renovera|github\.io|localhost|127\.0\.0\.1|:3000|:3001|javascript:/i;
  const values = await page.locator("a[href], img[src], source[srcset]").evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute("href") || node.getAttribute("src") || node.getAttribute("srcset") || ""),
  );

  for (const value of values) {
    expect(value, `link/src proibido: ${value}`).not.toMatch(forbidden);
    expect(value, "href/src vazio").not.toBe("");
  }
});
