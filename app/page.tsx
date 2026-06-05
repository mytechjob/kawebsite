import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Actions } from "@/components/sections/actions";
import { DemoSection } from "@/components/sections/demo";
import { Stats } from "@/components/sections/stats";
import { UseCases } from "@/components/sections/use-cases";
import { Integrations } from "@/components/sections/integrations";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, faqSchema, howToSchema } from "@/lib/metadata";
import { HOME_FAQS, HOW_IT_WORKS } from "@/data/content";
import { allKeywords, SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Build AI Agents That Answer & Take Action`,
  description: "Build no-code AI chatbots and chat pages trained on your content. Knowledge Agents answer customer questions 24/7 and take real actions — book meetings, create tickets, check orders, and capture leads. Start free, no credit card.",
  keywords: allKeywords("core", "support", "agentic"),
};

export default function Home() {
  return (
    <PageLayout>
      <JsonLd data={[faqSchema(HOME_FAQS), howToSchema({ name: "How to build a Knowledge Agent", description: "Build an AI agent trained on your content that answers questions and takes action, in three no-code steps.", steps: HOW_IT_WORKS.map((s) => ({ name: s.title.replace(/^\d+\.\s*/, ""), text: s.description })) })]} />
      <Hero />
      <Logos />
      <Features limit={8} />
      <HowItWorks />
      <Actions />
      <DemoSection />
      <Stats />
      <UseCases />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ subheading="Everything you need to know about building AI agents with Knowledge Agents." />
      <CTA />
    </PageLayout>
  );
}
