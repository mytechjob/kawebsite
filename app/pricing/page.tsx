import { PageLayout, PageHero } from "@/components/layout/page-layout";
import { Pricing as PricingSection } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Testimonials } from "@/components/sections/testimonials";
import { JsonLd, breadcrumbSchema, faqSchema, productSchema } from "@/lib/metadata";
import { PRICING_FAQS } from "@/data/content";
import { allKeywords } from "@/lib/site";
import { Check, Minus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Knowledge Agents — Plans From Free to Enterprise",
  description: "Simple, transparent pricing for AI agents. Start free with no credit card, then scale from $19/mo. Compare Free, Hobby, Standard, and Unlimited plans.",
  keywords: [...allKeywords("core"), "AI chatbot pricing", "AI agent pricing", "free AI chatbot"],
};

const comparison: { label: string; values: (string | boolean)[] }[] = [
  { label: "Knowledge Agents", values: ["1", "5", "10", "40"] },
  { label: "Message credits / month", values: ["100", "2,000", "10,000", "40,000"] },
  { label: "Training characters", values: ["400K", "11M", "Unlimited", "Unlimited"] },
  { label: "Team members", values: ["1", "1", "3", "Unlimited"] },
  { label: "File uploads & website crawling", values: [true, true, true, true] },
  { label: "Lead capture forms", values: [true, true, true, true] },
  { label: "Basic actions (email, lead capture)", values: [false, true, true, true] },
  { label: "Advanced actions & integrations", values: [false, false, true, true] },
  { label: "Custom actions (your APIs)", values: [false, false, false, true] },
  { label: "Human handoff & live takeover", values: [false, false, true, true] },
  { label: "Conversation analytics", values: [false, false, true, true] },
  { label: "API access", values: [false, true, true, true] },
  { label: "Remove \"Powered by\" branding", values: [false, "Add-on", true, true] },
  { label: "White-label & custom domain", values: [false, false, false, true] },
  { label: "SSO, audit logs & roles", values: [false, false, false, true] },
  { label: "Support", values: ["Community", "Email", "Priority", "Priority + SLA"] },
];

const planNames = ["Free", "Hobby", "Standard", "Unlimited"];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (value === false) return <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]), productSchema({ name: "Knowledge Agents", description: "No-code AI agent platform that answers questions and takes action, trained on your content.", lowPrice: "0", highPrice: "399" }), faqSchema(PRICING_FAQS)]} />
      <PageHero eyebrow="Pricing" title="Pricing that scales with you" description="Start free and upgrade only when you're ready. Every plan includes unlimited embeds, lead capture, and 80+ languages. No credit card required to begin." />
      <PricingSection showHeader={false} />
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center mb-10">Compare every plan</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0">
              <thead><tr><th className="text-left p-4 font-semibold text-muted-foreground w-1/3">Feature</th>{planNames.map((name) => (<th key={name} className="p-4 text-center font-bold">{name}</th>))}</tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={row.label} className={i % 2 === 0 ? "bg-background" : ""}><td className="p-4 text-sm font-medium border-t">{row.label}</td>{row.values.map((v, j) => (<td key={j} className="p-4 text-center border-t"><Cell value={v} /></td>))}</tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ faqs={PRICING_FAQS} heading="Pricing FAQ" subheading="Common questions about plans, credits, and billing." className="py-24" />
      <CTA title="Try Knowledge Agents free today" subtitle="Ship your first AI agent in minutes. No credit card, no risk — upgrade only when it's working for you." secondaryLabel="Talk to sales" secondaryHref="/contact" />
    </PageLayout>
  );
}
