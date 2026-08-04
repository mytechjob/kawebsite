import { SITE } from "./site";
import type { JsonLd } from "@/lib/jsonld";
import type { Metadata } from "next";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const socialTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: SITE.name,
      title: socialTitle,
      description,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: `${title} — ${SITE.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitter,
      title: socialTitle,
      description,
      images: [SITE.ogImage],
    },
  };
}

/**
 * Server component that renders JSON-LD structured data into the <head>.
 */
export function JsonLd({ data }: { data: JsonLd | JsonLd[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Structured-data factories (schema.org / JSON-LD)                  */
/* ------------------------------------------------------------------ */

const absoluteUrl = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

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
  /** Optional named author. Omit to attribute the article to the organization. */
  author?: string;
  datePublished: string;
  dateModified?: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  image: a.image ? absoluteUrl(a.image) : absoluteUrl(SITE.ogImage),
  author: a.author
    ? { "@type": "Person", name: a.author }
    : { "@type": "Organization", name: SITE.name, url: SITE.url },
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
    offerCount: "5",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1240",
  },
});
