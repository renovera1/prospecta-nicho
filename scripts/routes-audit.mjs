import { spawn } from "node:child_process";

const node = process.execPath;
const port = process.env.ROUTE_AUDIT_PORT || "3210";
const baseUrl = `http://127.0.0.1:${port}`;

const okRoutes = [
  "/",
  "/produtos",
  "/produtos/empresas-recem-abertas",
  "/produtos/agencias-marketing",
  "/produtos/contabilidades",
  "/produtos/base-personalizada",
  "/produtos/amostra-gratuita",
  "/montar-minha-base",
  "/para-quem-e",
  "/como-funciona",
  "/campos-da-base",
  "/faq",
  "/contato",
  "/sobre",
  "/politica-de-privacidade",
  "/politica-de-supressao",
  "/politica-de-cookies",
  "/termos-de-uso",
  "/compra/sucesso",
  "/compra/pendente",
  "/compra/erro",
  "/admin",
];

const redirects = ["/blog", "/conteudos", "/solucoes", "/solucoes/agencias-de-marketing", "/blog-6-duvidas.html"];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let i = 0; i < 30; i += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}
    await wait(1000);
  }
  throw new Error("Servidor de auditoria não iniciou a tempo.");
}

function localUrlFound(value) {
  return /localhost|127\.0\.0\.1|:3000|:3001/i.test(value);
}

function collectLinks(html) {
  return [...html.matchAll(/\s(?:href|src)=["']([^"']*)["']/gi)].map((match) => match[1]);
}

const server = spawn(node, ["node_modules/next/dist/bin/next", "start", "-p", port], {
  cwd: process.cwd(),
  stdio: "ignore",
  env: { ...process.env, PORT: port },
});

try {
  await waitForServer();
  const failures = [];

  for (const route of okRoutes) {
    const response = await fetch(`${baseUrl}${route}`, { redirect: "manual" });
    if (response.status !== 200) failures.push(`${route}: status ${response.status}`);
    const html = await response.text();
    for (const link of collectLinks(html)) {
      if (!link || link === "#") failures.push(`${route}: href/src vazio ou placeholder`);
      if (localUrlFound(link)) failures.push(`${route}: URL local encontrada em ${link}`);
    }
  }

  for (const route of redirects) {
    const response = await fetch(`${baseUrl}${route}`, { redirect: "manual" });
    if (![301, 308].includes(response.status)) failures.push(`${route}: redirect esperado, status ${response.status}`);
  }

  if (failures.length) {
    console.error(failures.join("\n"));
    process.exitCode = 1;
  } else {
    console.log("Route audit: OK");
  }
} finally {
  server.kill();
}
