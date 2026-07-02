const productionUrl = "https://prospectanicho.com.br";
const blockedPublicHosts = /localhost|127\.0\.0\.1|:3000|:3001|github\.io|renovera-projetos-eletricos|renovera1/i;
const allowGitHubPages = process.env.NEXT_PUBLIC_ALLOW_GITHUB_PAGES === "true" || process.env.GITHUB_PAGES === "true";

function cleanBaseUrl(value: string) {
  return value.replace(/\/+$/, "");
}

export function isPreviewEnvironment() {
  return process.env.NEXT_PUBLIC_DEPLOY_ENV === "preview" || process.env.VERCEL_ENV === "preview";
}

export function getSiteUrl() {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    productionUrl;
  if (blockedPublicHosts.test(configured) && !allowGitHubPages) return productionUrl;
  const normalized = configured.startsWith("http") ? configured : `https://${configured}`;
  return cleanBaseUrl(normalized);
}

export function getAbsoluteUrl(path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${cleanPath}`;
}
