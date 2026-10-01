/**
 * Helper to ensure assets (images, SVGs, icons) have the correct path
 * both in local development (/) and on GitHub Pages (/efycazlanding/).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
