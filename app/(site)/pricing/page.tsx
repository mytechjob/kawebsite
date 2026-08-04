import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { PricingPlans, type Plan } from "@/components/new/pricing-plans";
import { JsonLd, breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/metadata";
import { SIGNUP_URL, SCHEDULE_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Customer Support AI Pricing",
  description: "Message-based plans for AI-powered customer support with unlimited seats on every tier — Starter, Growth, and Scale for self-serve teams, plus Fully Managed and custom Enterprise options.",
  path: "/pricing",
  keywords: ["AI customer support pricing", "AI help desk pricing", "message based support pricing", "customer service AI plans"],
});

/**
 * Prices are the annual-contract rate; the monthly toggle adds 15%.
 * Tiers differentiate on five axes that map to how a support team actually
 * grows: message volume, channel coverage, depth of account context, how much
 * revenue intelligence is switched on, and how much of the work we do for you.
 * Every plan includes unlimited seats — you're never charged per head.
 */
const PLANS: Plan[] = [
  {
    label: "Starter",
    annualPrice: 79,
    description: "Put a real AI agent in front of customers on the channels you already run.",
    features: [
      "2,000 messages/mo included",
      "Chat & email channels",
      "Train on files, website & help center",
      "Confidence-gated AI resolution",
      "Unlimited seats",
      "Conversation analytics",
      "Email support",
      "14-day free trial",
    ],
    cta: "Get Started",
    href: SIGNUP_URL,
  },
  {
    label: "Growth · most popular",
    annualPrice: 149,
    description: "Add full account context and start catching the revenue signals inside your conversations.",
    featuresLabel: "Everything in Starter, plus:",
    features: [
      "5,000 messages/mo included",
      "Every channel — in-app, Slack & WhatsApp",
      "Full account context (CRM, billing & usage)",
      "AI copilot drafts for your team",
      "Churn & upsell signal detection",
      "Automatic article creation from resolutions",
      "Priority email support",
    ],
    cta: "Get Started",
    href: SIGNUP_URL,
    featured: true,
  },
  {
    label: "Scale",
    annualPrice: 299,
    description: "For teams routing revenue signals across departments and running agents on their own systems.",
    featuresLabel: "Everything in Growth, plus:",
    features: [
      "12,000 messages/mo included",
      "Voice channel",
      "Custom actions on your own APIs",
      "Full signal routing to CSM, AE & product",
      "Dollar-tracked ROI reporting",
      "White-label & custom domain",
      "SSO / SAML & audit logs",
      "Priority support, 4-hour response",
    ],
    cta: "Get Started",
    href: SIGNUP_URL,
  },
  {
    label: "Fully Managed",
    annualPrice: 2500,
    description: "We run it for you. Our team builds, tunes, and maintains your agents so your people never touch the tooling.",
    featuresLabel: "Everything in Scale, plus:",
    features: [
      "50,000 messages/mo included",
      "Dedicated success manager",
      "We build, tune & maintain your agents",
      "Monthly knowledge-base curation & gap closure",
      "Custom integration engineering",
      "Quarterly business reviews with ROI reporting",
      "Uptime SLA & priority incident response",
    ],
    cta: "Book a call",
    href: SCHEDULE_URL,
  },
  {
    label: "Enterprise",
    annualPrice: null,
    customPrice: "Custom",
    description: "For high-volume and regulated teams that need bespoke terms, security review, and their own infrastructure.",
    featuresLabel: "Everything in Fully Managed, plus:",
    features: [
      "Volume message pricing",
      "Security review, DPA & custom data retention",
      "Multi-workspace & multi-brand management",
      "Dedicated infrastructure options",
      "Custom contract & procurement support",
    ],
    cta: "Book an appointment",
    href: SCHEDULE_URL,
    wide: true,
  },
];

const ENTERPRISE_ITEMS = [
  { k: "Volume", v: "Lower per-message rates as your monthly volume grows." },
  { k: "Security", v: "SSO/SAML, DPA, and a full security review." },
  { k: "SLA", v: "Uptime guarantees, priority support, dedicated CSM." },
];

const FAQS = [
  { q: "Can I try it before paying?", a: "Yes. Every plan starts with a 14-day free trial of the full platform — no credit card required. You'll see real resolutions on your own knowledge base before you're charged anything." },
  { q: "Which plan should I start on?", a: "Starter suits teams putting an AI agent on chat and email for the first time. Move to Growth when you want replies enriched with CRM and billing context and want churn and upsell signals surfaced. Choose Scale when you're routing those signals to CSMs and account execs and running actions against your own APIs." },
  { q: "What counts as a message?", a: "A message is any single message sent as part of a support conversation, whether from the AI or your team. A typical support conversation runs about 20 messages, so a 2,000-message plan covers roughly 100 full conversations a month." },
  { q: "What happens if I go over my plan's included messages?", a: "You're billed per 1,000 additional messages beyond your plan's allotment, at the rate listed on your plan — the rate drops as you move up tiers. Nothing stops working and no conversation is ever cut off mid-thread." },
  { q: "What does Fully Managed actually include?", a: "Our team does the work: we build and tune your agents, curate your knowledge base every month and close the gaps we find, engineer your custom integrations, and review results with you quarterly. You get a dedicated success manager and an uptime SLA. It's for teams that want the outcome without staffing the tooling." },
  { q: "Am I charged per seat?", a: "Never. Every plan includes unlimited seats, so bringing your whole support, success, and sales teams into the platform costs nothing extra. You're billed on message volume alone." },
  { q: "What's the difference between annual and monthly billing?", a: "The prices on the cards are the rate on an annual contract. Paying month-to-month instead adds 15% — use the toggle above the plans to compare the two." },
  { q: "Can I cancel anytime?", a: "Monthly plans are month-to-month with no long-term commitment — cancel whenever you like. Annual plans run for the twelve-month term you prepaid." },
];

export default function NewPricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]), faqSchema(FAQS)]} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">◆ Simple, message-based pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">Plans that scale with your message volume.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Every plan includes unlimited seats, so bringing your whole support, success, and sales teams in costs nothing extra. You&apos;re billed on the messages your customers actually send — never on how many people you hire — so your costs track the value you&apos;re getting instead of the size of your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL}><Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href={SCHEDULE_URL}><Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">Book an Enterprise call</Button></Link>
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
        title="Get started today."
        subtitle="Connect your knowledge base and see real resolutions on your own content — 14 days free, no credit card. Pick a plan only once you've seen it work."
        primaryLabel="Get Started"
        secondaryLabel="Talk to sales"
        secondaryHref={SCHEDULE_URL}
        bullets={["14-day free trial", "No credit card required", "Cancel anytime"]}
      />
    </>
  );
}
