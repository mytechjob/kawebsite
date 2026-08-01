import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import { allKeywords } from "@/lib/site";
import { COMPARE_FAQS } from "@/data/ainative";
import { Check, X, Minus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native vs. Legacy Support Platforms",
  description:
    "How an AI-native B2B support platform compares to a legacy ticketing platform with AI bolted on, and to a narrow point-solution AI chatbot.",
  keywords: allKeywords("core", "support"),
  alternates: { canonical: "/ainative/compare" },
};

type Mark = "yes" | "no" | "partial";
const rows: { label: string; values: [Mark | string, Mark | string, Mark | string] }[] = [
  { label: "Designed around AI from day one", values: ["yes", "no", "partial"] },
  { label: "Full account context before every reply", values: ["yes", "no", "no"] },
  { label: "Confidence-gated autonomous resolution", values: ["yes", "partial", "partial"] },
  { label: "Omnichannel inbox, one queue", values: ["yes", "yes", "no"] },
  { label: "Revenue signal detection & routing", values: ["yes", "no", "no"] },
  { label: "Automatic article creation from resolutions", values: ["yes", "no", "no"] },
  { label: "Outcome-based pricing available", values: ["yes", "no", "no"] },
  { label: "Time to see resolution impact", values: ["Weeks", "Months", "Weeks"] },
  { label: "Cost as conversation volume grows", values: ["Aligned to outcomes", "Scales with seats", "Scales with usage"] },
];

const columns = ["AI-native platform", "Legacy platform + AI bolt-on", "Point-solution AI chatbot"];

export default function AinativeComparePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI-Native Platform", path: "/ainative" }, { name: "Compare", path: "/ainative/compare" }]), faqSchema(COMPARE_FAQS)]} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Comparison</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">AI-native vs. legacy support platforms</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Not every platform that mentions "AI" was built for it. Here's how an AI-native platform compares to a legacy ticketing system with AI features added on, and to a narrow point-solution chatbot.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left p-4 w-2/5"></th>
                  {columns.map((c, i) => (
                    <th key={c} className={`p-4 text-center font-bold rounded-t-xl ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <td className="p-4 text-sm font-medium border-t">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={`p-4 text-center border-t ${i === 0 ? "bg-primary/5" : ""}`}>
                        {v === "yes" ? <Check className={`w-5 h-5 mx-auto ${i === 0 ? "text-primary" : "text-foreground/60"}`} />
                          : v === "no" ? <X className="w-5 h-5 mx-auto text-destructive/70" />
                          : v === "partial" ? <Minus className="w-5 h-5 mx-auto text-amber-500" />
                          : <span className="text-sm font-medium">{v}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Full support</span>
            <span className="flex items-center gap-1.5"><Minus className="w-4 h-4 text-amber-500" /> Partial / limited</span>
            <span className="flex items-center gap-1.5"><X className="w-4 h-4 text-destructive/70" /> Not supported</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-display mb-3">Why legacy platforms fall short</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">Legacy ticketing platforms were designed around a queue-and-agent model built well before generative AI existed. Adding an AI reply-suggestion feature on top doesn't give it account context, revenue-signal routing, or confidence-gated resolution — those require the underlying architecture to be built for AI, not retrofitted.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display mb-3">Why point-solution chatbots only solve part of it</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">A narrow AI chatbot can deflect FAQs quickly, but it typically operates without CRM or billing context, can't take real actions like updating a subscription, and has no way to route churn or upsell signals to the teams that need them.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display mb-3">What "AI-native" actually changes</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">The context layer, the AI agent, the human copilot, and revenue-signal routing are one connected system. Every reply — human or AI — starts with the full account picture, and every conversation feeds intelligence back into the business, not just the support queue.</p>
          </div>
        </div>
      </section>

      <FAQ faqs={COMPARE_FAQS} heading="Comparison FAQ" />

      <CTA title="See the AI-native difference for yourself" subtitle="Connect your knowledge base and watch full-context resolution in action — free to start." />
    </>
  );
}
