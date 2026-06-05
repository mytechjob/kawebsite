export type JsonLd = Record<string, unknown>;

export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.knowledgeagents.com";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
