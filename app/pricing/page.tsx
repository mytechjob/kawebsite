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
  title: "Pricing | Knowledge Agents — Hobby, Starter, Professional, Business & Full Service",
  description: "Start free with the Hobby plan, then scale with Starter ($49/mo), Professional ($149/mo), or Business ($399/mo) — or talk to us for a custom Enterprise plan. Simple per-conversation pricing with no confusing AI credits.",
  keywords: [...allKeywords("core"), "AI chatbot pricing", "AI agent pricing", "SaaS AI chatbot pricing", "free AI chatbot"],
};

const comparison: { label: string; values: (string | boolean)[] }[] = [
  { label: "Customer conversations / mo", values: ["10", "100", "500", "1,500", "Custom"] },
  { label: "Knowledge Agents", values: ["1", "10", "Unlimited", "Unlimited", "Unlimited"] },
  { label: "Train on files & website content", values: ["1 file", true, true, true, true] },
  { label: "Embed on unlimited websites", values: [true, true, true, true, true] },
  { label: "Lead capture forms", values: [true, true, true, true, true] },
  { label: "Advanced actions & integrations", values: [false, false, true, true, true] },
  { label: "Human handoff & live takeover", values: [false, false, true, true, true] },
  { label: "Conversation analytics", values: [false, false, true, true, true] },
  { label: "API access", values: [false, false, true, true, true] },
  { label: "Custom actions (your APIs)", values: [false, false, false, true, true] },
  { label: "White-label & custom domain", values: [false, false, false, true, true] },
  { label: "SSO, audit logs & roles", values: [false, false, false, false, true] },
  { label: "Support", values: ["Community", "Email", "Priority", "Priority + onboarding", "Dedicated + SLA"] },
];

const planNames = ["Hobby", "Starter", "Professional", "Business", "Full Service Plans"];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (value === false) return <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]), productSchema({ name: "Knowledge Agents", description: "No-code AI agent platform that answers questions and takes action, trained on your content.", lowPrice: "0", highPrice: "399" }), faqSchema(PRICING_FAQS)]} />
      <PageHero eyebrow="Pricing" title="Pricing that scales with you" description="Start free, then pay by the conversation — no confusing AI credits. Every plan includes unlimited knowledge uploads and lead capture. Cancel anytime." />
      <PricingSection showHeader={false} />
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center mb-10">Compare every plan</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-separate border-spacing-0">
              <thead><tr><th className="text-left p-4 font-semibold text-muted-foreground w-1/3">Feature</th>{planNames.map((name) => (<th key={name} className="p-4 text-center font-bold">{name}</th>))}</tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={row.label} className={i % 2 === 0 ? "bg-background" : ""}><td className="p-4 text-sm font-medium border-t">{row.label}</td>{row.values.map((v, j) => (<td key={j} className="p-4 text-center border-t"><Cell value={v} /></td>))}</tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ faqs={PRICING_FAQS} heading="Pricing FAQ" subheading="Common questions about plans, credits, and billing." className="py-24" />
      <CTA title="Hire your AI employee today" subtitle="Ship your first AI agent in minutes, see it working before you go live, and upgrade as your business grows." primaryLabel="Create your AI agent" bullets={["No code required", "Live in minutes", "Cancel anytime"]} secondaryLabel="Talk to sales" secondaryHref="/contact" />
    </PageLayout>
  );
}
