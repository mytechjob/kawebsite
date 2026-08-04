import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { TicketEstimator } from "@/components/new/ticket-estimator";
import { PricingPlans, type Plan } from "@/components/new/pricing-plans";
import { JsonLd, breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/metadata";
import { SIGNUP_URL, SCHEDULE_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Customer Support AI Pricing",
  description: "Compare Knowledge Agents plans for AI-powered customer support, from a free Hobby plan to message-based Starter, Professional, and Growth plans, plus custom Enterprise options.",
  path: "/new/pricing",
  keywords: ["AI customer support pricing", "AI help desk pricing", "message based support pricing", "customer service AI plans"],
});

/** Prices below are the monthly-equivalent rate when billed annually; the toggle adds 15% for month-to-month. */
const PLANS: Plan[] = [
  {
    label: "Hobby",
    annualPrice: 0,
    description: "Try the platform for free, no credit card. See real resolutions on your own knowledge base before you pay a cent.",
    features: ["200 messages/mo included", "14-day free trial", "Full context layer & every channel", "Community support"],
    cta: "Start free",
    href: SIGNUP_URL,
  },
  {
    label: "Starter",
    annualPrice: 35,
    description: "Includes 700 messages every month — a low-cost way to put a real AI agent in front of customers.",
    features: ["700 messages/mo included", "14-day free trial", "Every channel, small teams", "Community support"],
    cta: "Start free trial",
    href: SIGNUP_URL,
  },
  {
    label: "Professional",
    annualPrice: 99,
    description: "Includes 2,000 messages every month.",
    features: ["2,000 messages/mo included", "14-day free trial", "Every channel, growing teams", "Core revenue-signal routing"],
    cta: "Start free trial",
    href: SIGNUP_URL,
  },
  {
    label: "Growth · most popular",
    annualPrice: 300,
    description: "Includes up to 10,000 messages every month. Above that, it's just $25 per 1,000 additional messages — never per seat.",
    features: ["10,000 messages/mo included", "Unlimited seats, every channel", "Full revenue intelligence & ROI reporting"],
    cta: "Start free trial",
    href: SIGNUP_URL,
    featured: true,
  },
  {
    label: "Enterprise",
    annualPrice: null,
    customPrice: "Custom",
    description: "For high-volume teams that need volume message rates, security review, and a guaranteed SLA.",
    features: ["Volume message pricing", "SSO / SAML & security review", "Uptime SLA & priority support", "Dedicated success manager"],
    cta: "Book an appointment",
    href: SCHEDULE_URL,
  },
];

const ENTERPRISE_ITEMS = [
  { k: "Volume", v: "Lower per-message rates as your monthly volume grows." },
  { k: "Security", v: "SSO/SAML, DPA, and a full security review." },
  { k: "SLA", v: "Uptime guarantees, priority support, dedicated CSM." },
];

const FAQS = [
  { q: "Is there a free plan?", a: "Yes — Hobby is free forever, no credit card required, for up to 200 messages a month. Upgrade to Starter, Professional, or Growth whenever you outgrow it." },
  { q: "What's included in the $300 Growth plan?", a: "Up to 10,000 messages per month, unlimited seats, every channel, the full context layer, and complete revenue intelligence with ROI reporting. It's one flat price — you're never charged per seat." },
  { q: "What counts as a message?", a: "A message is any single message sent as part of a support conversation, whether from the AI or your team. A typical support conversation runs about 20 messages, so your plan's message allotment covers roughly that many full conversations." },
  { q: "What happens if I go over my plan's included messages?", a: "Overage is billed per 1,000 additional messages beyond your plan's included allotment — $50 on Starter, $37.50 on Professional, $25 on Growth. Use the estimator above to see a typical monthly total for Growth's volume." },
  { q: "Do you offer Enterprise pricing?", a: "Yes. High-volume teams get lower per-message rates plus SSO/SAML, a security review, an uptime SLA, and a dedicated success manager. Book an appointment and we'll build a plan around your volume." },
  { q: "What's the difference between annual and monthly billing?", a: "Annual plans are billed once for the year at the rates shown by default. Month-to-month billing costs 15% more per month for the same plan — use the toggle above the plans to compare." },
  { q: "Can I cancel anytime?", a: "Monthly plans are month-to-month with no long-term commitment — cancel whenever you like. Annual plans run for the twelve-month term you prepaid." },
];

export default function NewPricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "New", path: "/new" }, { name: "Pricing", path: "/new/pricing" }]), faqSchema(FAQS)]} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">◆ Simple, message-based pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">Plans that scale with your message volume.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Start free on Hobby — up to 200 messages a month, no credit card. Need more room? Billed annually, Starter is <b className="text-foreground">$35/month for 700 messages</b>, Professional is <b className="text-foreground">$99/month for 2,000 messages</b>, and Growth is <b className="text-foreground">$300/month for 10,000 messages</b>. Prefer month-to-month? Add 15%. Bigger volume? We have Enterprise plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL}><Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">Start for free <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href={SCHEDULE_URL}><Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">Book an Discovery call</Button></Link>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-4">
          <PricingPlans plans={PLANS} />
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">A message is a single message sent within a support conversation. Overage is billed only on messages beyond each plan&apos;s included allotment.</p>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Estimate your bill</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">What will you actually pay?</h2>
            <p className="text-muted-foreground text-lg">Drag to your expected monthly message volume. The first 10,000 are included in the $300 Growth base.</p>
          </div>
          <TicketEstimator />
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-md mx-auto">Estimate only. Enterprise volume rates reduce the per-message cost above high message counts.</p>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section id="enterprise" className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Enterprise</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">Let&apos;s build a plan for your volume.</h2>
            <p className="text-lg text-muted-foreground mb-6">Book a 30-minute call and we&apos;ll scope volume message pricing, security requirements, and an SLA for your team. Pick a time that works — we&apos;ll send a calendar invite.</p>
            <ul className="space-y-4">
              {ENTERPRISE_ITEMS.map((item) => (
                <li key={item.k} className="flex gap-4">
                  <span className="shrink-0 w-20 text-xs font-mono font-semibold text-primary pt-0.5">{item.k}</span>
                  <span className="text-sm text-foreground/80">{item.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card shadow-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-1">Book an appointment</h3>
            <p className="text-sm text-muted-foreground mb-6">30 minutes · with our solutions team</p>
            <Link href={SCHEDULE_URL}>
              <Button size="lg" className="w-full h-12">Book an appointment <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <FAQ faqs={FAQS} heading="Pricing FAQ" subheading="The questions buyers actually ask." />

      <CTA
        title="Start free today."
        subtitle="Connect your knowledge base and see real resolutions on Hobby — free forever, no credit card. Upgrade whenever you're ready."
        primaryLabel="Start for free"
        secondaryLabel="Talk to sales"
        secondaryHref={SCHEDULE_URL}
        bullets={["No credit card required", "Cancel anytime"]}
      />
    </>
  );
}
