const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
