import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { SIGNUP_URL, SCHEDULE_URL, allKeywords } from "@/lib/site";
import { REVENUE_SIGNALS, REVENUE_PHILOSOPHY } from "@/data/ainative";
import { ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Intelligence | Churn, Upsell & Competitor Signals",
  description:
    "Every support conversation is scanned in real time for churn language, upsell opportunity, and competitor mentions — routed to the right team the same day it happens.",
  keywords: allKeywords("support"),
  alternates: { canonical: "/ainative/revenue-intelligence" },
};

export default function AinativeRevenuePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI-Native Platform", path: "/ainative" }, { name: "Revenue Intelligence", path: "/ainative/revenue-intelligence" }])} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Revenue Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">Every conversation is a revenue signal</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Support conversations are full of signal about who's about to churn, who's ready to expand, and where you're losing to a competitor. Most platforms let it go unread. This one routes it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {REVENUE_SIGNALS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="p-6 bg-background rounded-xl border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h2 className="text-lg font-bold mb-1.5">{s.name}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.description}</p>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wide">{s.routesTo}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-display font-semibold leading-snug text-foreground/90 mb-8">{REVENUE_PHILOSOPHY.quote}</p>
          <Link href="/ainative/pricing"><Button variant="outline" size="lg" className="h-12 px-8">See outcome-based pricing <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
        </div>
      </section>

      <CTA
        title="Stop letting revenue signal go unread"
        subtitle="Connect your support channels and start routing churn, upsell, and competitor signals the same day they happen."
        primaryLabel="Start free"
        primaryHref={SIGNUP_URL}
        secondaryLabel="Talk to us"
        secondaryHref={SCHEDULE_URL}
      />
    </>
  );
}
