import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/site";
import { ArrowRight, Check, MessageSquare, PenLine, Inbox, FileEdit, Workflow, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "AI Support Platform — Context, Agents & Copilots",
  description: "Connect account context, AI agents, human copilots, and revenue-signal routing in one AI-native customer support platform for growing B2B companies.",
  path: "/platform",
  keywords: ["AI support platform", "customer support copilot", "account context AI", "B2B support automation", "AI customer service agents"],
});

const CONTEXT_ITEMS = [
  { k: "CRM", v: "Account stage, owner, ARR, and renewal date pulled in on every conversation." },
  { k: "Billing", v: "Plan, seat count, invoices, and plan-limit status so entitlement questions answer themselves." },
  { k: "Usage", v: "Product telemetry reveals what the customer actually did before they wrote in." },
  { k: "History", v: "Past tickets and your knowledge base ground every answer in your own words." },
];

const CONTEXT_PANEL = [
  { k: "Stage", v: "Customer · renews in 21 days" },
  { k: "ARR", v: "$42,000" },
  { k: "Plan", v: "Growth · 34 / 40 seats used" },
  { k: "Usage", v: "Logins ↓ 38% over 30 days" },
];

const CARDS = [
  { icon: Check, title: "Confidence-gated resolution", description: "The AI agent loads full account context and only resolves a conversation when it has high confidence in a complete, correct answer." },
  { icon: PenLine, title: "Cited drafts for your team", description: "When a conversation needs a human, the copilot writes a complete, tone-matched draft with sources cited inline — edit and send in seconds." },
  { icon: Inbox, title: "One shared inbox", description: "Email, chat, in-app, Slack Connect, and WhatsApp in a single queue — same automations, same SLAs, same agent reading every message." },
  { icon: FileEdit, title: "Article creation from resolutions", description: "Every resolved conversation can become a knowledge-base article automatically, so your docs improve as the agent works." },
  { icon: Workflow, title: "Actions, not just answers", description: "The agent can take real actions — update a subscription, apply a credit, trigger a workflow — instead of only deflecting FAQs." },
  { icon: ShieldCheck, title: "Grounded in your data", description: "Answers are grounded in your knowledge base and ticket history — never invented — so you can trust what customers are told." },
];

const INTEGRATIONS = [
  { title: "CRM & deals", value: "HubSpot · Attio · Salesforce" },
  { title: "Billing", value: "Stripe · Chargebee" },
  { title: "Product analytics", value: "PostHog · Amplitude" },
  { title: "Conversations", value: "Slack · Gong · WhatsApp" },
  { title: "Knowledge base", value: "Your docs, help center, past tickets" },
  { title: "Channels", value: "Email · Live chat · In-app · Slack Connect" },
];

export default function NewPlatformPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Platform", path: "/platform" }])} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">◆ The platform</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">One system: context, agents, and copilots.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The context layer, the AI agent, and the human copilot are one connected platform — every reply, human or AI, starts with the full account picture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL}><Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href="/compare"><Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">See how it compares</Button></Link>
          </div>
        </div>
      </section>

      {/* CONTEXT LAYER */}
      <section className="py-24 bg-muted/30 border-b">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The context layer</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">Full account context, before the first reply.</h2>
            <p className="text-lg text-muted-foreground mb-6">The context layer syncs everything that makes a B2B ticket resolvable — so the agent isn't guessing from the message text alone.</p>
            <ul className="space-y-4">
              {CONTEXT_ITEMS.map((item) => (
                <li key={item.k} className="flex gap-4">
                  <span className="shrink-0 w-20 text-xs font-mono font-semibold text-primary pt-0.5">{item.k}</span>
                  <span className="text-sm text-foreground/80">{item.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card shadow-lg p-6">
            <div className="text-sm font-semibold mb-4">Context assembled · Kestrel Labs</div>
            <ul className="space-y-3">
              {CONTEXT_PANEL.map((item) => (
                <li key={item.k} className="flex justify-between items-center text-sm border-b last:border-0 pb-3 last:pb-0">
                  <span className="text-xs font-mono font-semibold text-muted-foreground">{item.k}</span>
                  <span className="font-medium">{item.v}</span>
                </li>
              ))}
              <li className="flex justify-between items-center text-sm pt-1">
                <span className="text-xs font-mono font-semibold text-muted-foreground">Signal</span>
                <span className="rounded-full bg-destructive/10 text-destructive text-xs font-semibold px-2.5 py-1">Churn risk</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AGENT + COPILOT */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Agents & copilots</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Resolve autonomously — or draft for a human.</h2>
            <p className="text-muted-foreground text-lg">The agent works the frontline; the copilot works beside your team. Correctness over speed, every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="p-6 bg-background rounded-xl border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-lg font-bold mb-1.5">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Integrations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Connect the stack that resolves B2B tickets.</h2>
            <p className="text-muted-foreground text-lg">The context layer trains on the tools you already run — knowledge base, CRM, billing, product analytics, and revenue intelligence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((i) => (
              <div key={i.title} className="p-6 bg-background rounded-xl border">
                <h3 className="text-lg font-bold mb-1.5">{i.title}</h3>
                <p className="text-muted-foreground text-sm font-mono">{i.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">Integration names are representative of the categories the context layer connects — swap in your finalized partner list.</p>
        </div>
      </section>

      <CTA
        title="See full-context resolution in action."
        subtitle="Connect your knowledge base and watch the agent resolve with the whole account picture — free to start."
        primaryLabel="Create your AI agent"
        secondaryLabel="Explore revenue intelligence"
        secondaryHref="/revenue-intelligence"
        bullets={["No code required", "Live in minutes", "Cancel anytime"]}
      />
    </>
  );
}
