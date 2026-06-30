import { readFileSync } from "node:fs";
import { join } from "node:path";

const forbidden = [/localhost/i, /127\.0\.0\.1/i, /:3000\b/i, /:3001\b/i];
const files = ["app/layout.tsx", "app/sitemap.ts", "app/robots.ts", "lib/site.ts", "lib/site-url.ts"];
const failures = [];

for (const file of files) {
  const text = readFileSync(join(process.cwd(), file), "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(text) && file !== "lib/site-url.ts") failures.push(`${file}: ${pattern}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Metadata check: OK");
