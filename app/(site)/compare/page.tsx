import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/site";
import { Check, X, Minus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare — AI-Native vs. Legacy Support Platforms",
  description: "How an AI-native platform compares to a legacy ticketing system with AI bolted on, and to a narrow point-solution chatbot.",
  alternates: { canonical: "/new/compare" },
};

type Mark = "yes" | "no" | "partial";
const columns = ["AI-native platform", "Legacy + AI bolt-on", "Point-solution chatbot"];
const rows: { label: string; values: [Mark | string, Mark | string, Mark | string] }[] = [
  { label: "Designed around AI from day one", values: ["yes", "no", "partial"] },
  { label: "Full account context before every reply", values: ["yes", "partial", "no"] },
  { label: "Confidence-gated autonomous resolution", values: ["yes", "no", "partial"] },
  { label: "Omnichannel inbox, one queue", values: ["yes", "partial", "no"] },
  { label: "Revenue signal detection & routing", values: ["yes", "no", "no"] },
  { label: "Automatic article creation from resolutions", values: ["yes", "no", "partial"] },
  { label: "Predictable ticket-based pricing", values: ["yes", "Per-seat", "Per-usage"] },
  { label: "Time to see resolution impact", values: ["Weeks", "Months", "Weeks"] },
  { label: "Cost as conversation volume grows", values: ["$300/mo + $0.50/ticket", "Scales with seats", "Scales with usage"] },
];

const FAQS = [
  { q: `What's the difference between "AI-native" and a legacy platform with AI features?`, a: "An AI-native platform is one system where the context layer, the AI agent, the human copilot, and revenue-signal routing are built together. A legacy platform bolts an AI feature onto a ticket queue that was never designed to load account context or route revenue signals." },
  { q: "Isn't a point-solution AI chatbot simpler to set up?", a: "It can be — for FAQ deflection. But it stops at answers. Without CRM, billing, and product context it can't resolve real B2B tickets, take actions, or surface the churn and upsell signals that make support a revenue engine." },
  { q: "Will switching from our current platform mean starting over?", a: "No. You connect your existing knowledge base, ticket history, and integrations, and the context layer trains on them. Most teams are live in an afternoon without ripping anything out." },
];

export default function NewComparePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "New", path: "/new" }, { name: "Compare", path: "/new/compare" }]), faqSchema(FAQS)]} />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">◆ Comparison</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">AI-native vs. legacy support platforms.</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Not every platform that mentions &ldquo;AI&rdquo; was built for it. Here&apos;s how an AI-native platform compares to a legacy ticketing system with AI added on, and to a narrow point-solution chatbot.
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
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-6 bg-background rounded-2xl border">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Legacy + AI bolt-on</span>
            <h3 className="text-lg font-bold mt-3 mb-2">Why legacy platforms fall short</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Legacy ticketing was designed around a queue-and-agent model built well before generative AI. Adding a reply-suggestion feature on top doesn&apos;t give it account context, revenue-signal routing, or confidence-gated resolution — those require the underlying architecture to be built for AI, not retrofitted.</p>
          </div>
          <div className="p-6 bg-background rounded-2xl border">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Point-solution chatbot</span>
            <h3 className="text-lg font-bold mt-3 mb-2">Why a chatbot only solves part of it</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">A narrow chatbot can deflect FAQs quickly, but it typically operates without CRM or billing context, can&apos;t take real actions like updating a subscription, and has no way to route churn or upsell signals to the teams that need them.</p>
          </div>
        </div>
      </section>

      <FAQ faqs={FAQS} heading="Comparison FAQ" subheading="Common questions." />

      <CTA
        title="See the AI-native difference for yourself."
        subtitle="Connect your knowledge base and watch full-context resolution in action — free to start."
        primaryLabel="Create your AI agent"
        secondaryLabel="See pricing"
        secondaryHref="/new/pricing"
        bullets={["No code required", "Live in minutes", "Cancel anytime"]}
      />
    </>
  );
}
