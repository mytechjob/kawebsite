import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { LedgerCard } from "@/components/new/ledger-card";
import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/metadata";
import { SIGNUP_URL, SCHEDULE_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Customer Revenue Intelligence — Churn & Upsell Signals",
  description: "Detect churn risk, upsell opportunities, competitor mentions, and product gaps in customer conversations, then attribute and route every signal.",
  path: "/revenue-intelligence",
  keywords: ["customer revenue intelligence", "churn risk detection", "upsell signals", "customer conversation intelligence", "B2B revenue signals"],
});

const SIGNALS = [
  { tag: "● Churn risk", color: "text-destructive", title: "Caught before renewal", description: "Cancellation language, price pushback, and quiet disengagement — flagged with the renewal date and ARR attached.", route: "CSM" },
  { tag: "● Upsell", color: "text-primary", title: "Expansion, surfaced", description: `Seat requests, plan-limit hits, and "can we add…" asks, attributed to live pipeline value the moment they appear.`, route: "Account Exec" },
  { tag: "● Feature gap", color: "text-amber-600 dark:text-amber-400", title: "Roadmap, from real demand", description: "Feature requests counted and de-duplicated per account, so product hears the loudest asks — not just the last one.", route: "Product" },
  { tag: "● Competitor", color: "text-violet-600 dark:text-violet-400", title: "Named before you lose", description: "Competitor mentions and price comparisons pulled out and attributed to the account and its renewal window.", route: "CSM" },
];

const FLOW_ITEMS = [
  { k: "Detect", v: "Real-time scan of every message across every channel." },
  { k: "Attribute", v: "Linked to account, ARR, owner, and renewal date." },
  { k: "Route", v: "Delivered same-day to CSM, AE, or product." },
];

const ROI_STATS = [
  { value: "32%", label: "Conversations resolved autonomously", color: "text-primary" },
  { value: "$126k", label: "Churn ARR retained per quarter", color: "text-destructive" },
  { value: "$340k", label: "Upsell pipeline surfaced", color: "text-amber-600 dark:text-amber-400" },
  { value: "Month 3", label: "Typical payback period", color: "text-foreground" },
];

export default function NewRevenueIntelligencePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Revenue Intelligence", path: "/revenue-intelligence" }])} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">◆ Revenue intelligence</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">The revenue signals are already in your inbox.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Every conversation is scanned in real time for churn, upsell, competitor, and feature signals — attributed to a dollar and routed to the person who can act, the same day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL}><Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">Start free trial <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href="#roi"><Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">See the ROI math</Button></Link>
          </div>
        </div>
      </section>

      {/* SIGNALS DETAIL */}
      <section className="py-24 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The four signals</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Four signals. Four colors. One routing rule each.</h2>
            <p className="text-muted-foreground text-lg">Consistent semantic colors run from the inbox through every dashboard, so what needs a human reads at a glance.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGNALS.map((s) => (
              <div key={s.title} className="p-6 bg-background rounded-xl border flex flex-col">
                <span className={`text-xs font-bold uppercase tracking-wide mb-3 ${s.color}`}>{s.tag}</span>
                <h3 className="text-base font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{s.description}</p>
                <div className="text-xs text-muted-foreground">routes to <b className="text-foreground">{s.route}</b></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEDGER SHOWCASE */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Same day, not next quarter</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">Every signal, attributed and routed.</h2>
            <p className="text-lg text-muted-foreground mb-6">Signals don&apos;t sit in a report. Each one is tied to the account, its ARR, and its renewal date, then delivered to the right inbox with the context already attached — before the customer escalates.</p>
            <ul className="space-y-4">
              {FLOW_ITEMS.map((item) => (
                <li key={item.k} className="flex gap-4">
                  <span className="shrink-0 w-20 text-xs font-mono font-semibold text-primary pt-0.5">{item.k}</span>
                  <span className="text-sm text-foreground/80">{item.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <LedgerCard />
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The math your CFO will sign off on</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Dollar-tracked ROI, in one number.</h2>
            <p className="text-muted-foreground text-lg">Resolution rate, churn prevented, and upsell pipeline created roll up automatically — a support platform that funds itself.</p>
          </div>
          <div className="rounded-2xl border bg-card overflow-hidden grid grid-cols-2 lg:grid-cols-4 divide-y divide-x-0 lg:divide-y-0 lg:divide-x">
            {ROI_STATS.map((s) => (
              <div key={s.label} className="p-8 text-center">
                <div className={`text-4xl font-bold font-display mb-1 ${s.color}`}>{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto">Figures are illustrative placeholders for the ROI model — replace with your measured benchmark ranges before launch.</p>
        </div>
      </section>

      <CTA
        title="Turn every conversation into a revenue signal."
        subtitle="Connect your knowledge base and start catching churn, upsell, and competitor signals the day they happen — free to start."
        primaryLabel="Start free trial"
        secondaryLabel="Talk to us"
        secondaryHref={SCHEDULE_URL}
        bullets={["No code required", "Live in minutes", "Cancel anytime"]}
      />
    </>
  );
}
