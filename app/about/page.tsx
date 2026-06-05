import { PageLayout, PageHero } from "@/components/layout/page-layout";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { Target, Heart, Zap, ShieldCheck, Users, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Knowledge Agents | Our Mission",
  description: "Knowledge Agents is on a mission to make every business able to answer questions and take action for customers instantly. Learn about our story, mission, and values.",
  keywords: ["about knowledge agents", "AI customer support company", "knowledge agents mission"],
};

const values = [
  { icon: Target, title: "Customer obsession", text: "Every feature starts with a real customer problem. We measure success by the outcomes our users create." },
  { icon: Zap, title: "Simplicity wins", text: "Powerful shouldn't mean complicated. We obsess over making advanced AI feel effortless and no-code." },
  { icon: ShieldCheck, title: "Trust by default", text: "Security and privacy aren't add-ons. We protect customer data and never train foundation models on it." },
  { icon: Heart, title: "Helpfulness, automated", text: "We believe great service should be available to everyone, 24/7 — not rationed by business hours." },
  { icon: Sparkles, title: "Ship and improve", text: "We move fast, listen closely, and improve relentlessly based on how agents perform in the real world." },
  { icon: Users, title: "Better together", text: "AI works best alongside people. We design agents that elevate human teams, not replace them." },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero eyebrow="About us" title="We help every business answer and act, instantly" description="Knowledge Agents was founded on a simple belief: great customer experiences shouldn't require a huge team or a big budget — they should be one upload away." />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>When we started {SITE.name} in {SITE.foundedYear}, AI chatbots were everywhere — and almost all of them were frustrating. They followed rigid scripts, misunderstood simple questions, and, worst of all, could only ever say things. They couldn't <em>do</em> anything.</p>
          <p>Meanwhile, every business we talked to had the same problem: their teams spent countless hours answering the same questions and handling the same routine requests, while customers waited. The knowledge to help already existed — in help centers, documents, and policies — it just wasn't accessible at the moment people needed it.</p>
          <p>So we built {SITE.name}: a platform where anyone can turn their content into an AI agent that not only answers accurately, but takes real action — booking, ticketing, looking up orders, capturing leads. No code, no data science, no months of setup. Just upload your knowledge, connect your tools, and go live in minutes.</p>
          <p>Today, Knowledge Agents power millions of helpful conversations every month for teams across support, e-commerce, healthcare, education, and more. And we're just getting started.</p>
        </div>
      </section>
      <Stats />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14"><span className="text-sm font-semibold uppercase tracking-wider text-primary">Our values</span><h2 className="text-3xl md:text-4xl font-bold font-display mt-2">What guides us</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => { const Icon = v.icon; return (<div key={v.title} className="p-6 bg-background rounded-xl border"><div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div><h3 className="text-lg font-bold mb-2">{v.title}</h3><p className="text-muted-foreground">{v.text}</p></div>); })}
          </div>
        </div>
      </section>
      <CTA title="Join us on the journey" subtitle="Whether you're building your first agent or scaling to millions of conversations, we'd love to help." primaryLabel="Start free" secondaryLabel="Get in touch" secondaryHref="/contact" />
    </PageLayout>
  );
}
