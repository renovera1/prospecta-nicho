import { readFileSync } from "node:fs";
import { join } from "node:path";

const files = [
  "app",
  "components",
  "lib",
  "docs",
];

const badPatterns = [
  /d\?vidas/i,
  /p\?blico/i,
  /prospec\?\?o/i,
  /regi\?o/i,
  /rec\?m/i,
  /est\?tica/i,
  /sa[úu]de e est\?tica/i,
  /aproximad\?/i,
];
const failures = [];

async function* walk(dir) {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    if (entry.isFile() && /\.(ts|tsx|md|css)$/.test(entry.name)) yield path;
  }
}

for (const root of files) {
  for await (const file of walk(join(process.cwd(), root))) {
    const text = readFileSync(file, "utf8");
    for (const pattern of badPatterns) {
      if (pattern.test(text)) failures.push(file.replace(process.cwd(), "."));
    }
  }
}

if (failures.length) {
  console.error([...new Set(failures)].join("\n"));
  process.exit(1);
}

console.log("Content check: OK");
