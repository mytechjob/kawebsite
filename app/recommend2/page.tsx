import { PageLayout } from "@/components/layout/page-layout";
import { SignalConsole } from "@/components/recommend/signal-console";
import { SIGNUP_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Support becomes signal",
  description:
    "Knowledge Agents unifies customer support, company knowledge, and revenue intelligence in one AI-native platform.",
  path: "/recommend2",
  keywords: [
    "AI-native customer intelligence",
    "revenue intelligence support",
    "churn and upsell detection",
    "customer support platform",
  ],
});

const PROOF_POINTS = [
  "Account-aware answers",
  "Human-ready escalation",
  "Churn and upsell detection",
  "Same-day signal routing",
];

const MARQUEE = [
  "Every conversation carries intent",
  "Every signal has an owner",
  "Every reply can protect revenue",
];

const SIGNAL_EXAMPLES = [
  { kind: "Upsell", detail: "“We need 12 more seats this month.”", value: "+$18.4k" },
  { kind: "Churn", detail: "“Evaluating alternatives.”", value: "$42k" },
  { kind: "Feature gap", detail: "Third request for bulk export.", value: "3×" },
  { kind: "Competitor", detail: "Price comparison detected.", value: "$29.5k" },
];

const STEPS = [
  {
    num: "01",
    kicker: "Connect",
    title: "Every channel enters one inbox.",
    body: "Chat, email, voice, tickets, portal, Slack Connect, and WhatsApp share context and automation.",
    placeholder: "Placeholder: unified inbox visual",
  },
  {
    num: "02",
    kicker: "Understand",
    title: "Every answer starts with the account.",
    body: "Knowledge, ticket history, CRM stage, billing status, and product usage arrive before the reply.",
    placeholder: "Placeholder: customer context visual",
  },
  {
    num: "03",
    kicker: "Resolve",
    title: "Confidence decides the handoff.",
    body: "The agent resolves when grounded. Otherwise it prepares a complete, cited draft for a human.",
    placeholder: "Placeholder: cited answer visual",
  },
  {
    num: "04",
    kicker: "Detect",
    title: "Commercial language becomes structured data.",
    body: "Churn, expansion, competitor mentions, and feature gaps are extracted from the thread.",
    placeholder: "Placeholder: signal extraction visual",
  },
  {
    num: "05",
    kicker: "Route",
    title: "The right owner gets the brief.",
    body: "Customer success, sales, and product receive the signal with account value and timing attached.",
    placeholder: "Placeholder: routing map visual",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm font-semibold uppercase tracking-wider text-primary">{children}</span>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-dashed grid place-items-center text-xs uppercase tracking-widest text-muted-foreground min-h-32 ${className}`}
    >
      {label}
    </div>
  );
}

export default function Recommend2Page() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/20 pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            AI-native customer intelligence
          </span>
          <h1 className="mt-4 max-w-4xl text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.05]">
            Support becomes <span className="text-primary">signal.</span>
          </h1>
          <div className="mt-10 pt-8 border-t grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              One platform for chat, email, voice, tickets, customer knowledge, and the revenue
              hiding inside every conversation.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {PROOF_POINTS.map((p) => (
                <span key={p} className="border-t pt-2.5 text-muted-foreground">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee. Keyframes are scoped here so the page stays self-contained. */}
      <style>{`
        @keyframes recommend2-marquee { to { transform: translateX(-50%); } }
        .recommend2-marquee-track { animation: recommend2-marquee 23s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .recommend2-marquee-track { animation: none; }
        }
      `}</style>
      <div className="overflow-hidden border-b bg-primary text-primary-foreground" aria-hidden="true">
        <div className="recommend2-marquee-track flex w-max py-2.5 text-xs font-bold uppercase tracking-wider">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="pr-10">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Tension */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1.25fr_.75fr] gap-12 lg:gap-16 items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              The cost of disconnected support
            </span>
            <h2 className="mt-4 max-w-[14ch] text-4xl md:text-6xl font-bold font-display tracking-tight leading-[1.05]">
              The answer gets sent. The <span className="text-primary">signal gets lost.</span>
            </h2>
            <p className="mt-8 max-w-lg opacity-70 leading-relaxed">
              Customer intent appears first in support. It rarely reaches the team that can act on
              it. The system below changes the handoff.
            </p>
          </div>
          <div aria-label="Examples of revenue signals">
            {SIGNAL_EXAMPLES.map((s) => (
              <div
                key={s.kind}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 border-t border-background/25"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <div>
                  <div className="text-sm font-semibold">{s.kind}</div>
                  <div className="text-sm opacity-60">{s.detail}</div>
                </div>
                <strong className="text-xl font-display font-bold">{s.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resolution + console */}
      <section id="system" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.35fr_.65fr] gap-8 items-end mb-12">
            <div>
              <Eyebrow>The connected layer</Eyebrow>
              <h2 className="mt-4 max-w-[15ch] text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight">
                Resolve the issue. Route what it means.
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Knowledge Agents answers with full customer context, detects commercial intent, ties it
              to account value, and sends a concise brief to the right owner.
            </p>
          </div>
          <SignalConsole />
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-20 md:py-28 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Eyebrow>One connected motion</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold font-display tracking-tight">
              From message to action.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <article
                key={step.num}
                className="flex flex-col justify-between gap-6 p-6 rounded-2xl border bg-background hover:shadow-lg transition-shadow"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {step.num} / {step.kicker}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold font-display leading-snug">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
                <Placeholder label={step.placeholder} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-20 md:py-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_1fr_1.2fr] gap-10 lg:gap-12 items-end">
          <div className="border-t pt-6">
            <strong className="block text-6xl md:text-7xl font-bold font-display leading-none">
              &lt;10s
            </strong>
            <span className="block mt-4 max-w-60 text-sm text-muted-foreground">
              Average response, day or night
            </span>
          </div>
          <div className="border-t pt-6">
            <strong className="block text-6xl md:text-7xl font-bold font-display leading-none">
              238
            </strong>
            <span className="block mt-4 max-w-60 text-sm text-muted-foreground">
              Conversations resolved autonomously in a sample day
            </span>
          </div>
          <figure className="p-8 rounded-2xl border bg-muted/30">
            <blockquote className="text-2xl md:text-3xl font-display font-bold leading-snug">
              “Customers get answers in seconds. Our team focuses on the conversations that need a
              human.”
            </blockquote>
            <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              Jimmy B. · AI Momentum Partners
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Finale */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="max-w-[12ch] text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.02]">
            Make support compound.
          </h2>
          <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="max-w-xl text-lg opacity-90 leading-relaxed">
                Connect your knowledge. Resolve with context. Surface the signals that change
                retention and growth.
              </p>
              <Placeholder
                label="Placeholder: customer logo row"
                className="mt-6 max-w-xs min-h-16 border-primary-foreground/40 text-primary-foreground/70"
              />
            </div>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-8 py-4 font-semibold text-foreground hover:opacity-90 transition-opacity w-fit"
            >
              Build your agent free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
