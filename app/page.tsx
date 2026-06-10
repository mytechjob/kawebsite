import type { Metadata } from "next";
import { FunnelHeader, FunnelFooter } from "@/components/funnel/funnel-header";
import { FunnelHero } from "@/components/funnel/funnel-hero";
import { FunnelProblem, FunnelSteps, FunnelStats, FunnelOffer } from "@/components/funnel/funnel-sections";
import { ProductShowcase } from "@/components/funnel/product-showcase";
import { TechPartners } from "@/components/funnel/tech-partners";
import { StickyCTA } from "@/components/funnel/sticky-cta";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, faqSchema, productSchema } from "@/lib/metadata";
import { FUNNEL_FAQS } from "@/data/funnel";
import { allKeywords, SCHEDULE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Knowledge Suite — Bar, Bubble & Page | Launch Your AI Agent Free",
  description:
    "Meet the Knowledge Suite: the Knowledge Bar turns any website or app into an AI application, the Knowledge Bubble puts a virtual agent on your site, and the Knowledge Page lets your team collaborate on content customers can talk to. Start free — live in 5 minutes.",
  keywords: allKeywords("core", "build", "agentic"),
  alternates: { canonical: "/" },
};

/**
 * Home page — the sales funnel for the Knowledge Suite.
 * Intentionally distraction-free: minimal header, no nav menu, one decision.
 * Flow: hook → problem → product reveal → how it works → proof → offer →
 * objections → final ask, with a sticky CTA following the reader down.
 * The full business/enterprise marketing site lives at /business.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <JsonLd
        data={[
          faqSchema(FUNNEL_FAQS),
          productSchema({
            name: "The Knowledge Suite (Knowledge Bar, Knowledge Bubble, Knowledge Page)",
            description:
              "Three ways to deploy an AI agent trained on your business: an answer bar for any website or app, a virtual agent your visitors talk to, and a collaborative AI page your team publishes.",
            lowPrice: "0",
            highPrice: "399",
          }),
        ]}
      />
      <FunnelHeader />
      <main className="flex-1">
        <FunnelHero />
        <TechPartners />
        <FunnelProblem />
        <ProductShowcase />
        <FunnelSteps />
        <FunnelStats />
        <Testimonials />
        <FunnelOffer />
        <FAQ
          faqs={FUNNEL_FAQS}
          heading="You're probably wondering…"
          subheading="Straight answers to the questions everyone asks before they launch."
          className="py-24"
        />
        <CTA
          title="The next visitor with a question is already on your site"
          subtitle="Give them an answer — and give yourself a lead. Train your first Knowledge Agent on your content and launch your Bar, Bubble, or Page in minutes."
          primaryLabel="Start free — launch in 5 minutes"
          secondaryLabel="Book a 1:1 walkthrough"
          secondaryHref={SCHEDULE_URL}
          bullets={["Free plan, no credit card", "All three surfaces included", "Cancel anytime"]}
        />
      </main>
      <FunnelFooter />
      <StickyCTA />
    </div>
  );
}
