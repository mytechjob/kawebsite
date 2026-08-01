import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { LedgerCard } from "@/components/new/ledger-card";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/site";
import { ArrowRight, Rocket, DollarSign, LineChart, Sparkles, Eye, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI-Native B2B Support Platform",
  description:
    "One AI-native platform resolves conversations with full account context, then routes churn, upsell, and product signals to the person who can act — the same day.",
  alternates: { canonical: "/new" },
};

const PILLARS = [
  {
    icon: Rocket,
    title: "Start with a free trial",
    description:
      "Explore the full platform on a 14-day free trial — every channel, every seat, every agent. No credit card to see real resolutions on your own docs first.",
  },
  {
    icon: DollarSign,
    title: "Simple ticket pricing",
    description:
      "$300/month includes up to 500 support tickets. Above that it's just $0.50 per ticket — never per seat or per message. One number your finance team can plan around.",
  },
  {
    icon: LineChart,
    title: "Dollar-tracked ROI",
    description:
      "Resolution rate, churn prevented, and upsell pipeline created roll up into a single revenue-impact number your CFO will understand.",
  },
  {
    icon: Sparkles,
    title: "AI-native, not bolted on",
    description:
      "Context, resolution, and routing are one system — built from the ground up for the AI era, not retrofitted onto a 2007 ticketing model.",
  },
  {
    icon: Eye,
    title: "Full account context",
    description:
      "Every conversation is enriched with CRM stage, billing status, and product usage before the agent — human or AI — ever replies.",
  },
  {
    icon: Building2,
    title: "Built for B2B",
    description:
      "Designed for growing B2B teams doing $1M–$50M ARR, with the integrations, routing, and roadmap consumer-support tools were never built to handle.",
  },
];

const STEPS = [
  { idx: "STEP 01", title: "Unify every channel", description: "Email, chat, in-app, Slack Connect, and WhatsApp thread into one inbox with one set of shared automations." },
  { idx: "STEP 02", title: "Load the context layer", description: "Knowledge base, ticket history, CRM stage, billing status, and product usage sync before any reply." },
  { idx: "STEP 03", title: "Resolve, or draft", description: "The agent resolves only when confident; otherwise it writes a complete, cited draft for a human to send." },
  { idx: "STEP 04", title: "Scan for signals", description: "Every conversation is read for churn language, upsell asks, competitor mentions, and feature gaps." },
  { idx: "STEP 05", title: "Attribute to a dollar", description: "Each signal is tied to the account, its ARR, and its renewal date — not just a ticket count." },
  { idx: "STEP 06", title: "Route the same day", description: "Churn → CSM, upsell → AE, feature → product. The right brief lands before the customer escalates." },
];

const SIGNALS = [
  { tag: "● Churn risk", color: "text-destructive", title: "Caught before renewal", description: "Cancellation language and quiet disengagement, flagged with the account's renewal date attached.", route: "CSM" },
  { tag: "● Upsell", color: "text-primary", title: "Expansion, surfaced", description: `Seat requests, plan-limit hits, and "can we add…" asks, attributed to live pipeline value.`, route: "Account Exec" },
  { tag: "● Feature gap", color: "text-amber-600 dark:text-amber-400", title: "Roadmap, from real demand", description: "Feature requests counted and de-duplicated so product hears the loudest asks, not the last one.", route: "Product" },
  { tag: "● Competitor", color: "text-violet-600 dark:text-violet-400", title: "Named before you lose", description: "Competitor mentions and price comparisons pulled out the moment they appear in a thread.", route: "CSM" },
];

const QUOTES = [
  { quote: "We pointed Knowledge Agents at our help center and it was live before our next standup. Customers get answers in seconds, and our team finally focuses on the conversations that need a human.", who: "Placeholder Name", role: "CEO, Example B2B Co." },
  { quote: "Setup took an afternoon. The agent answers in the customer's language and hands off to a human with full context when it needs to. It's the most responsive support we've ever offered.", who: "Placeholder Name", role: "Founder, Example SaaS" },
  { quote: "The accuracy is what sold us — answers are grounded in our own docs, so we trust what it tells customers. Satisfaction on our AI chats has been excellent from day one.", who: "Placeholder Name", role: "President, Example Cloud" },
];

const STAT_BAND = [
  { value: "<2s", label: "Average response, day or night" },
  { value: "99.9%", label: "Uptime, always-on" },
  { value: "4.8/5", label: "Answer satisfaction" },
  { value: "<5min", label: "From upload to live agent" },
];

export default function NewHomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "New", path: "/new" }])} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Support → Revenue</span>
            <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-display font-bold tracking-tight mt-3 mb-6 leading-[1.08]">
              Every support reply is a <em className="not-italic text-primary">line item</em> on your revenue.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              One AI-native platform resolves conversations with full account context — then routes the churn, upsell, and product signals inside them to the person who can act, the same day they happen.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href={SIGNUP_URL}>
                <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">Start free trial <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
              <Link href="/new/revenue-intelligence#roi">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">See the ROI math</Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><i className="w-1.5 h-1.5 rounded-full bg-primary" /> 14-day free trial, no card</span>
              <span className="flex items-center gap-1.5"><i className="w-1.5 h-1.5 rounded-full bg-primary" /> Then $300/mo · 500 tickets included</span>
            </div>
          </div>

          <LedgerCard />
        </div>
      </section>

      {/* STAT BAND */}
      <div className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STAT_BAND.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold font-display mb-1">{s.value}</div>
              <div className="text-sm opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY AI-NATIVE */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why AI-native</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Built differently, on purpose.</h2>
            <p className="text-muted-foreground text-lg">Six things that change when the whole platform is designed for AI from day one — not a legacy ticket queue with a chatbot glued on top.</p>
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

      {/* HOW IT WORKS */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">From first message to routed revenue signal.</h2>
            <p className="text-muted-foreground text-lg">Six steps, one connected system — no separate tools to stitch together.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.title} className="p-6 bg-background rounded-xl border">
                <div className="text-xs font-mono font-semibold tracking-widest text-primary mb-3">{step.idx}</div>
                <h3 className="text-base font-bold mb-1.5">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNALS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Revenue intelligence</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Four signals. Four colors. One routing rule each.</h2>
            <p className="text-muted-foreground text-lg">The same semantic palette runs through the inbox, the ledger, and every dashboard — so a glance tells you what needs a human.</p>
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

      {/* QUOTES */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Customer stories</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Loved by support, sales, and success teams.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUOTES.map((q) => (
              <div key={q.who + q.role} className="p-6 bg-background rounded-xl border flex flex-col">
                <div className="text-amber-500 text-sm mb-3">★★★★★</div>
                <p className="text-sm text-foreground/80 leading-relaxed flex-1 mb-4">&ldquo;{q.quote}&rdquo;</p>
                <div className="text-sm"><b>{q.who}</b> <span className="text-muted-foreground">{q.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Turn support into your revenue engine."
        subtitle="Connect your knowledge base and start resolving conversations with full account context — free to start, live in minutes."
        primaryLabel="Start free trial"
        secondaryLabel="Explore the platform"
        secondaryHref="/new/platform"
        bullets={["Free 14-day trial", "No code required", "Cancel anytime"]}
      />
    </>
  );
}
