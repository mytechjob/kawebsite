import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Actions } from "@/components/sections/actions";
import { DemoSection } from "@/components/sections/demo";
import { Stats } from "@/components/sections/stats";
import { UseCases } from "@/components/sections/use-cases";
import { InternalExternal } from "@/components/sections/internal-external";
import { Integrations } from "@/components/sections/integrations";
import { Testimonials } from "@/components/sections/testimonials";
import { RiskReversal } from "@/components/sections/risk-reversal";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, faqSchema, howToSchema } from "@/lib/metadata";
import { HOME_FAQS, HOW_IT_WORKS } from "@/data/content";
import { allKeywords } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `AI Agents for Business & Enterprise | Answer & Take Action`,
  description: "Turn your business knowledge into a 24/7 AI employee. Build no-code AI chatbots and chat pages trained on your content that answer customer questions, capture leads, and take real action — book meetings, create tickets, and check orders.",
  keywords: allKeywords("core", "support", "agentic"),
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  return (
    <PageLayout>
      <JsonLd data={[faqSchema(HOME_FAQS), howToSchema({ name: "How to build a Knowledge Agent", description: "Build an AI agent trained on your content that answers questions and takes action, in three no-code steps.", steps: HOW_IT_WORKS.map((s) => ({ name: s.title.replace(/^\d+\.\s*/, ""), text: s.description })) })]} />
      <Hero />
      <Logos />
      <Problem />
      <Features limit={8} />
      <HowItWorks />
      <Actions />
      <DemoSection />
      <Stats />
      <UseCases />
      <InternalExternal />
      <Integrations />
      <Testimonials />
      <RiskReversal />
      <FAQ subheading="Everything you need to know about building AI agents with Knowledge Agents." />
      <CTA title="Your business already has the knowledge. Now give it a voice." subtitle="Create an AI agent that answers questions, supports customers, and captures leads around the clock." primaryLabel="Hire your AI employee" secondaryLabel="Book a demo" secondaryHref="/contact" />
    </PageLayout>
  );
}
