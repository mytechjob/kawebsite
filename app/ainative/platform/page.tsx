import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { SIGNUP_URL, allKeywords } from "@/lib/site";
import { PLATFORM_LAYERS } from "@/data/ainative";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI-Native Platform | Context Layer, Agent & Copilot",
  description:
    "See how Knowledge Agents' AI-native platform fits together: the context layer, omnichannel inbox, AI knowledge base, Knowledge Agent, Agent Copilot, and account intelligence.",
  keywords: allKeywords("core", "agentic"),
  alternates: { canonical: "/ainative/platform" },
};

export default function AinativePlatformPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI-Native Platform", path: "/ainative" }, { name: "Platform", path: "/ainative/platform" }])} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Platform</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">Six layers, one connected system</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Every layer of the AI-native platform shares the same account context — from the knowledge base to the agent that resolves conversations to the copilot that drafts for your team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {PLATFORM_LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <div key={layer.name} id={layer.name.toLowerCase().replace(/\s+/g, "-")} className="grid md:grid-cols-5 gap-6 md:gap-10 p-6 md:p-8 bg-background rounded-2xl border scroll-mt-32">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5" /></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Layer {i + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold font-display mb-1.5">{layer.name}</h2>
                  <p className="text-primary font-medium text-sm mb-3">{layer.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                </div>
                <div className="md:col-span-3 grid sm:grid-cols-2 gap-3 content-start">
                  {layer.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5 p-4 bg-muted/30 rounded-lg border">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">See it applied to product & revenue</h2>
          <p className="text-muted-foreground text-lg mb-8">The platform powers two things directly: the day-to-day product your team uses, and the revenue signals it surfaces along the way.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/ainative/product"><Button variant="outline" size="lg" className="h-12 px-8 w-full sm:w-auto">See the product <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href="/ainative/revenue-intelligence"><Button variant="outline" size="lg" className="h-12 px-8 w-full sm:w-auto">See revenue intelligence <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      <CTA
        title="Connect your context layer today"
        subtitle="Sync your knowledge base, CRM, and ticket history — most teams see the AI agent handling conversations within days."
        primaryLabel="Start free"
        primaryHref={SIGNUP_URL}
      />
    </>
  );
}
