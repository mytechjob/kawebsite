import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { TicketEstimator } from "@/components/new/ticket-estimator";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import { SIGNUP_URL, SCHEDULE_URL } from "@/lib/site";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Free Hobby plan, plus Professional & Growth",
  description: "Hobby is free for up to 10 tickets/month. Professional is $99/mo for 100 tickets, Growth is $300/mo for 500 tickets. Enterprise plans available — book an appointment.",
  alternates: { canonical: "/new/pricing" },
};

const PLANS = [
  {
    label: "Hobby",
    price: "$0",
    priceSuffix: "/ month",
    description: "Try the platform for free, no credit card. See real resolutions on your own knowledge base before you pay a cent.",
    features: ["10 tickets/mo included", "Full context layer & every channel", "Community support"],
    cta: "Start free",
    href: SIGNUP_URL,
    featured: false,
  },
  {
    label: "Professional",
    price: "$99",
    priceSuffix: "/ month",
    description: "Includes 100 support tickets every month. Above that, it's just $0.75 per additional ticket.",
    features: ["100 tickets/mo included", "$0.75 per additional ticket", "Every channel, growing teams", "Core revenue-signal routing"],
    cta: "Get started",
    href: SIGNUP_URL,
    featured: false,
  },
  {
    label: "Growth · most popular",
    price: "$300",
    priceSuffix: "/ month",
    description: "Includes up to 500 support tickets every month. Above that, it's just $0.50 per ticket — never per seat.",
    features: ["500 tickets/mo included", "$0.50 per additional ticket", "Unlimited seats, every channel", "Full revenue intelligence & ROI reporting"],
    cta: "Start free trial",
    href: SIGNUP_URL,
    featured: true,
  },
  {
    label: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    description: "For high-volume teams that need volume ticket rates, security review, and a guaranteed SLA.",
    features: ["Volume ticket pricing", "SSO / SAML & security review", "Uptime SLA & priority support", "Dedicated success manager"],
    cta: "Book an appointment",
    href: SCHEDULE_URL,
    featured: false,
  },
];

const ENTERPRISE_ITEMS = [
  { k: "Volume", v: "Lower per-ticket rates as your monthly volume grows." },
  { k: "Security", v: "SSO/SAML, DPA, and a full security review." },
  { k: "SLA", v: "Uptime guarantees, priority support, dedicated CSM." },
];

const FAQS = [
  { q: "Is there a free plan?", a: "Yes — Hobby is free forever, no credit card required, for up to 10 support tickets a month. Upgrade to Professional or Growth whenever you outgrow it." },
  { q: "What's included in the $300 Growth plan?", a: "Up to 500 support tickets per month, unlimited seats, every channel, the full context layer, and complete revenue intelligence with ROI reporting. It's one flat price — you're never charged per seat." },
  { q: "What counts as a ticket?", a: "A ticket is a single support conversation handled in a billing month, whether the AI resolves it autonomously or your team finishes it. Follow-up messages within the same conversation don't count as new tickets." },
  { q: "What happens if I go over my plan's included tickets?", a: "Overage is billed per ticket beyond your plan's included allotment — $0.75 on Professional, $0.50 on Growth. Use the estimator above to see a typical monthly total for Growth's volume." },
  { q: "Do you offer Enterprise pricing?", a: "Yes. High-volume teams get lower per-ticket rates plus SSO/SAML, a security review, an uptime SLA, and a dedicated success manager. Book an appointment and we'll build a plan around your volume." },
  { q: "Can I cancel anytime?", a: "Yes — every paid plan is month-to-month with no long-term contract. Cancel whenever you like." },
];

export default function NewPricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "New", path: "/new" }, { name: "Pricing", path: "/new/pricing" }]), faqSchema(FAQS)]} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">◆ Simple, ticket-based pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">Plans that scale with your ticket volume.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Start free on Hobby — up to 10 tickets a month, no credit card. Need more room? Professional is <b className="text-foreground">$99/month for 100 tickets</b>, and Growth is <b className="text-foreground">$300/month for 500 tickets</b>. Bigger volume? We have Enterprise plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL}><Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">Start for free <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href={SCHEDULE_URL}><Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">Book an Enterprise call</Button></Link>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.label}
                className={`p-7 rounded-2xl border flex flex-col ${plan.featured ? "bg-primary text-primary-foreground border-primary shadow-xl md:-translate-y-2" : "bg-background"}`}
              >
                <span className={`text-xs font-bold uppercase tracking-wide ${plan.featured ? "text-primary-foreground/80" : "text-primary"}`}>{plan.label}</span>
                <div className="mt-3 mb-1">
                  <span className="text-3xl font-bold font-display">{plan.price}</span>
                  {plan.priceSuffix && <span className={`text-sm ml-1 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{plan.priceSuffix}</span>}
                </div>
                <p className={`text-sm mb-5 ${plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{plan.description}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}>
                  <Button
                    className="w-full"
                    variant={plan.featured ? "secondary" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">A ticket is a single support conversation handled in a billing month. Overage is billed only on tickets beyond each plan&apos;s included allotment.</p>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Estimate your bill</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">What will you actually pay?</h2>
            <p className="text-muted-foreground text-lg">Drag to your expected monthly ticket volume. The first 500 are included in the $300 base.</p>
          </div>
          <TicketEstimator />
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-md mx-auto">Estimate only. Enterprise volume rates reduce the per-ticket cost above high ticket counts.</p>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section id="enterprise" className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Enterprise</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">Let&apos;s build a plan for your volume.</h2>
            <p className="text-lg text-muted-foreground mb-6">Book a 30-minute call and we&apos;ll scope volume ticket pricing, security requirements, and an SLA for your team. Pick a time that works — we&apos;ll send a calendar invite.</p>
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
