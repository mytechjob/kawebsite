import { useEffect } from "react";
import { SITE, absoluteUrl } from "./site";

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  /** Canonical path beginning with "/", e.g. "/pricing". */
  path?: string;
  image?: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Manages document head for a route: title, description, canonical, Open Graph,
 * Twitter cards, and JSON-LD structured data. JSON-LD blocks tagged with
 * data-seo are cleaned up on unmount so they never stack across navigations.
 */
export function SEO({
  title,
  description,
  path = "/",
  image,
  type = "website",
  keywords,
  noindex = false,
  jsonLd,
  publishedTime,
  modifiedTime,
  author,
}: SEOProps) {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const url = absoluteUrl(path);
  const img = image ? (image.startsWith("http") ? image : absoluteUrl(image)) : absoluteUrl(SITE.ogImage);
  const blocks: JsonLd[] = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const jsonLdString = JSON.stringify(blocks);
  const keywordString = keywords?.join(", ") ?? "";

  useEffect(() => {
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    if (keywordString) upsertMeta("name", "keywords", keywordString);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("name", "author", author ?? SITE.name);

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Open Graph
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:locale", "en_US");

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", SITE.twitter);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", img);

    // Article metadata
    if (publishedTime) upsertMeta("property", "article:published_time", publishedTime);
    if (modifiedTime) upsertMeta("property", "article:modified_time", modifiedTime);
    if (type === "article" && author) upsertMeta("property", "article:author", author);

    // JSON-LD structured data
    const scripts: HTMLScriptElement[] = [];
    blocks.forEach((block) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "true");
      script.text = JSON.stringify(block);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [
    fullTitle,
    description,
    url,
    img,
    type,
    keywordString,
    noindex,
    author,
    publishedTime,
    modifiedTime,
    jsonLdString,
  ]);

  return null;
}

/* ------------------------------------------------------------------ */
/*  Structured-data factories (schema.org / JSON-LD)                  */
/* ------------------------------------------------------------------ */

export const organizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: absoluteUrl("/favicon.png"),
  description: SITE.description,
  foundingDate: String(SITE.foundedYear),
  email: SITE.email,
  sameAs: [SITE.social.twitter, SITE.social.github, SITE.social.linkedin],
});

export const websiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
});

export const softwareApplicationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE.description,
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "399",
    priceCurrency: "USD",
    offerCount: "4",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1240",
    bestRating: "5",
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (a: {
  title: string;
  description: string;
  path: string;
  image?: string;
  author: string;
  datePublished: string;
  dateModified?: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  image: a.image ? absoluteUrl(a.image) : absoluteUrl(SITE.ogImage),
  author: { "@type": "Person", name: a.author },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.png") },
  },
  datePublished: a.datePublished,
  dateModified: a.dateModified ?? a.datePublished,
  mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(a.path) },
});

export const howToSchema = (h: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: h.name,
  description: h.description,
  step: h.steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});

export const productSchema = (p: {
  name: string;
  description: string;
  lowPrice: string;
  highPrice: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: p.name,
  description: p.description,
  brand: { "@type": "Brand", name: SITE.name },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: p.lowPrice,
    highPrice: p.highPrice,
    offerCount: "4",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1240",
  },
});
