import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { SIGNUP_URL, allKeywords } from "@/lib/site";
import { AINATIVE_PRODUCT_FEATURES } from "@/data/ainative";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Resolutions, Drafts & Support Intelligence",
  description:
    "Resolutions, Drafts, an omnichannel support platform, automatic article creation, and real-time support intelligence — the product behind the AI-native platform.",
  keywords: allKeywords("core", "support"),
  alternates: { canonical: "/ainative/product" },
};

export default function AinativeProductPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI-Native Platform", path: "/ainative" }, { name: "Product", path: "/ainative/product" }])} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Product</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">What your team actually uses day to day</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Five capabilities that turn the platform into daily workflow — for the AI agent, your support team, and everyone who reads the dashboard.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {AINATIVE_PRODUCT_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.name} className="p-6 bg-background rounded-xl border hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h2 className="text-lg font-bold mb-1.5">{f.name}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
            <div className="p-6 rounded-xl border border-dashed flex flex-col items-start justify-center bg-muted/20">
              <h2 className="text-lg font-bold mb-1.5">Curious how it's built?</h2>
              <p className="text-muted-foreground text-sm mb-4">See the context layer, agent, and copilot that power every feature above.</p>
              <Link href="/ainative/platform" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">See the platform <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Every resolution feeds revenue intelligence</h2>
          <p className="text-muted-foreground text-lg mb-8">Resolutions and drafts aren't just support metrics — every conversation is also scanned for churn risk, upsell opportunity, and competitor mentions.</p>
          <Link href="/ainative/revenue-intelligence"><Button variant="outline" size="lg" className="h-12 px-8">See revenue intelligence <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
        </div>
      </section>

      <CTA
        title="Give your team a full inbox, not another tool"
        subtitle="Resolutions, drafts, and analytics — live in one place, free to start."
        primaryLabel="Start free"
        primaryHref={SIGNUP_URL}
      />
    </>
  );
}
