import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema, faqSchema, howToSchema } from "@/lib/metadata";
import { SIGNUP_URL, SCHEDULE_URL, allKeywords, AINATIVE_NAV } from "@/lib/site";
import { PILLARS, AINATIVE_HOW_IT_WORKS, AINATIVE_FAQS, REVENUE_PHILOSOPHY } from "@/data/ainative";
import { ArrowRight, Check, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI-Native B2B Support Platform",
  description:
    "Knowledge Agents is the AI-native B2B support platform: an omnichannel inbox, an AI agent with full account context, and revenue-signal routing that turns support into a revenue engine — not just a cost center.",
  keywords: allKeywords("core", "support", "agentic"),
  alternates: { canonical: "/ainative" },
};

const exploreCards = AINATIVE_NAV.slice(1);

export default function AinativePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI-Native Platform", path: "/ainative" }]),
          faqSchema(AINATIVE_FAQS),
          howToSchema({
            name: "How the AI-native support platform works",
            description: "From unifying channels to routing revenue signals — how Knowledge Agents' AI-native B2B support platform works end to end.",
            steps: AINATIVE_HOW_IT_WORKS.map((s) => ({ name: s.title.replace(/^\d+\.\s*/, ""), text: s.description })),
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            The AI-Native B2B Support Platform
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Turn support into your <span className="text-primary">revenue engine</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            One AI-native platform unifies every support channel, resolves conversations with full account context,
            and routes churn and upsell signals to the right team — the same day they happen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL}>
              <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                Start free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href={SCHEDULE_URL}>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">
                Talk to us
              </Button>
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Free to start", "Full account context", "Outcome pricing available"].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-display font-semibold leading-snug text-foreground/90">
            {REVENUE_PHILOSOPHY.quote}
          </p>
        </div>
      </section>

      {/* Six pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why AI-native</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Built differently, on purpose</h2>
            <p className="text-muted-foreground text-lg">Six things that change when the whole platform is designed for AI from day one.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 bg-background rounded-xl border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-lg font-bold mb-1.5">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">From first message to revenue signal</h2>
            <p className="text-muted-foreground text-lg">Six steps, one connected system — no separate tools to stitch together.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AINATIVE_HOW_IT_WORKS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="p-6 bg-background rounded-xl border">
                  <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4 shadow-md shadow-primary/20"><Icon className="w-5 h-5" /></div>
                  <h3 className="text-base font-bold mb-1.5">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Stats />

      {/* Explore the platform */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Explore</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Everything in the AI-native platform</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((c) => (
              <Link key={c.href} href={c.href} className="group block h-full p-6 bg-background rounded-xl border hover:border-primary/50 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold mb-1.5">{c.label}</h3>
                <p className="text-muted-foreground text-sm mb-4">{c.description}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ faqs={AINATIVE_FAQS} heading="AI-native platform FAQ" subheading="Everything you need to know about the AI-native positioning." />

      <CTA
        title="Ready to turn support into revenue?"
        subtitle="Connect your knowledge base and start resolving conversations with full account context — free to start."
        primaryLabel="Start free"
        secondaryLabel="Talk to us"
        secondaryHref={SCHEDULE_URL}
      />
    </>
  );
}
