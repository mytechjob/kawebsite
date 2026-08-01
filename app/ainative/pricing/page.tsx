import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import { SCHEDULE_URL, allKeywords } from "@/lib/site";
import { OUTCOMES, PRICING_FAQS } from "@/data/ainative";
import { ArrowRight, Check, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outcome-Based Pricing | Free Platform, Pay For Results",
  description:
    "A free AI-native support platform with an outcome-based pricing track: pay only for resolutions, churn saves, and upsells the AI actually delivers — not per seat.",
  keywords: allKeywords("support"),
  alternates: { canonical: "/ainative/pricing" },
};

const compareRows = [
  { label: "Cost to add a teammate", legacy: "Another seat license", outcome: "Free — unlimited seats" },
  { label: "Cost when the AI resolves nothing", legacy: "Same monthly bill", outcome: "$0 for that conversation" },
  { label: "Incentive alignment", legacy: "Pay whether or not it works", outcome: "Pay only when it works" },
  { label: "Cost as headcount grows", legacy: "Scales with seats", outcome: "Scales with results" },
];

export default function AinativePricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI-Native Platform", path: "/ainative" }, { name: "Pricing", path: "/ainative/pricing" }]), faqSchema(PRICING_FAQS)]} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">New · Rolling out to AI-native teams</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-5">Free platform. Pay only for outcomes.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Unlimited seats, every channel, the full inbox — free to use. The outcome-based track charges only when the AI delivers a defined result: a resolution, a churn save, or a closed upsell.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SCHEDULE_URL}><Button size="lg" className="h-12 px-8 w-full sm:w-auto">Get a quote <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href="/pricing"><Button size="lg" variant="outline" className="h-12 px-8 w-full sm:w-auto">See standard per-seat plans</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">Three things you pay for. Nothing else.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {OUTCOMES.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.name} className="p-6 bg-background rounded-2xl border flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold mb-4">{o.name}</h3>
                  <div className="flex items-start gap-2.5 mb-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80"><span className="font-semibold">You pay when:</span> {o.youPayWhen}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Not billed:</span> {o.youDontPayFor}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
            Rates are scoped to your workspace's outcome volume rather than a published rate card — <Link href={SCHEDULE_URL} className="text-primary font-medium hover:underline">talk to us</Link> for a quote.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-center mb-10">Outcome-based vs. traditional per-seat pricing</h2>
          <div className="rounded-2xl border bg-background overflow-hidden">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-muted/40 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <div className="px-5 py-3.5">&nbsp;</div>
              <div className="px-5 py-3.5 border-l">Per-seat pricing</div>
              <div className="px-5 py-3.5 border-l bg-primary/10 text-primary">Outcome-based</div>
            </div>
            {compareRows.map((row) => (
              <div key={row.label} className="grid grid-cols-[1.2fr_1fr_1fr] border-t text-sm">
                <div className="px-5 py-4 font-medium">{row.label}</div>
                <div className="px-5 py-4 border-l text-muted-foreground">{row.legacy}</div>
                <div className="px-5 py-4 border-l bg-primary/5 font-medium">{row.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={PRICING_FAQS} heading="Outcome pricing FAQ" />

      <CTA
        title="Talk to us about outcome-based pricing"
        subtitle="We'll walk through your support volume and put together a quote scoped to your workspace."
        primaryLabel="Get a quote"
        primaryHref={SCHEDULE_URL}
        secondaryLabel="See standard plans"
        secondaryHref="/pricing"
      />
    </>
  );
}
