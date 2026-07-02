export const isStaticExport =
  process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" || process.env.GITHUB_PAGES === "true";
