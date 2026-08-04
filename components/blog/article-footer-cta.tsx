import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_GLOBALS } from "@/data/blog-globals";

/**
 * Promo block shown under every article body. Content is driven entirely by
 * data/blog-globals.ts, so changing the copy or links there updates every
 * article at once.
 */
export function ArticleFooterCta() {
  const cta = BLOG_GLOBALS.footerCta;
  if (!cta.enabled) return null;

  return (
    <aside className="mt-14 p-8 rounded-2xl border bg-primary/5 border-primary/20">
      <h2 className="text-xl md:text-2xl font-bold font-display mb-2">{cta.heading}</h2>
      <p className="text-foreground/80 mb-6">{cta.body}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href={cta.primary.href}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {cta.primary.label} <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href={cta.secondary.href}
          className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-semibold hover:bg-muted/50 transition-colors"
        >
          {cta.secondary.label}
        </Link>
      </div>
    </aside>
  );
}
