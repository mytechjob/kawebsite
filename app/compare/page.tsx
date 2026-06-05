import { PageLayout, PageHero } from "@/components/layout/page-layout";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import type { Faq } from "@/data/content";
import { Check, X, Minus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Agents vs. Chatbots vs. Live Chat (2026 Comparison)",
  description: "Compare Knowledge Agents to traditional rule-based chatbots and human-only live chat. See how AI agents that take action differ on capabilities, cost, setup, and scale.",
  keywords: ["knowledge agent vs chatbot", "AI agent vs chatbot", "AI chatbot vs live chat", "best AI customer support tool", "chatbot comparison"],
};

type Mark = "yes" | "no" | "partial";
const rows: { label: string; values: [Mark | string, Mark | string, Mark | string] }[] = [
  { label: "Understands natural language", values: ["yes", "partial", "yes"] },
  { label: "Answers from your content (with citations)", values: ["yes", "no", "partial"] },
  { label: "Available 24/7", values: ["yes", "yes", "no"] },
  { label: "Takes actions (book, ticket, order, return)", values: ["yes", "partial", "yes"] },
  { label: "Scales to unlimited conversations", values: ["yes", "yes", "no"] },
  { label: "Multilingual (80+ languages)", values: ["yes", "partial", "partial"] },
  { label: "Time to set up", values: ["Minutes", "Weeks", "Hiring & training"] },
  { label: "Cost to scale", values: ["Low", "Low", "High"] },
  { label: "Improves from analytics", values: ["yes", "no", "partial"] },
  { label: "Human handoff with full context", values: ["yes", "no", "n/a"] },
];

const columns = ["Knowledge Agent", "Rule-based chatbot", "Live chat (humans only)"];

const FAQS: Faq[] = [
  { q: "What's the difference between a Knowledge Agent and a chatbot?", a: "A rule-based chatbot follows fixed decision trees and can only answer pre-scripted questions, breaking when users phrase things unexpectedly. A Knowledge Agent uses AI to understand natural language, answers from your real content with citations via RAG, supports 80+ languages, and can take actions like booking meetings or creating tickets." },
  { q: "Is a Knowledge Agent better than live chat?", a: "They're complementary. A Knowledge Agent handles the high volume of repetitive questions instantly and around the clock, while live agents focus on complex, high-empathy cases. The agent hands off to a human with full context when needed, so customers get the best of both." },
  { q: "Will an AI agent replace my support team?", a: "No — it amplifies them. By deflecting 60-80% of routine questions and completing common requests, it frees your team to focus on the conversations that genuinely need human judgment, often improving both satisfaction and morale." },
  { q: "Can I switch from my existing chatbot easily?", a: "Yes. Because a Knowledge Agent trains on your existing content (help center, docs, FAQs) in minutes, most teams migrate quickly and see better answers immediately, without rebuilding decision trees." },
];

function MarkCell({ value, highlight }: { value: Mark | string; highlight?: boolean }) {
  if (value === "yes") return <Check className={`w-5 h-5 mx-auto ${highlight ? "text-primary" : "text-foreground/60"}`} />;
  if (value === "no") return <X className="w-5 h-5 mx-auto text-destructive/70" />;
  if (value === "partial") return <Minus className="w-5 h-5 mx-auto text-amber-500" />;
  if (value === "n/a") return <span className="text-xs text-muted-foreground">N/A</span>;
  return <span className="text-sm font-medium">{value}</span>;
}

export default function ComparePage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Compare", path: "/compare" }]), faqSchema(FAQS)]} />
      <PageHero eyebrow="Comparison" title="Knowledge Agents vs. chatbots vs. live chat" description='Not all "chatbots" are the same. Here&apos;s how an AI Knowledge Agent that takes action compares to a traditional rule-based chatbot and to human-only live chat.' />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0">
              <thead><tr><th className="text-left p-4 w-2/5"></th>{columns.map((c, i) => (<th key={c} className={`p-4 text-center font-bold rounded-t-xl ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{c}</th>))}</tr></thead>
              <tbody>{rows.map((row) => (<tr key={row.label}><td className="p-4 text-sm font-medium border-t">{row.label}</td>{row.values.map((v, i) => (<td key={i} className={`p-4 text-center border-t ${i === 0 ? "bg-primary/5" : ""}`}><MarkCell value={v} highlight={i === 0} /></td>))}</tr>))}</tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Full support</span>
            <span className="flex items-center gap-1.5"><Minus className="w-4 h-4 text-amber-500" /> Partial / limited</span>
            <span className="flex items-center gap-1.5"><X className="w-4 h-4 text-destructive/70" /> Not supported</span>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div><h2 className="text-2xl font-bold font-display mb-3">Why rule-based chatbots fall short</h2><p className="text-lg text-foreground/80 leading-relaxed">Classic chatbots rely on hard-coded flows and keyword matching. They take weeks to build, break when customers go off-script, and can't answer anything you didn't anticipate. Every new question means another branch to maintain. The result is the frustrating "I didn't understand that" loop customers have learned to dread.</p></div>
          <div><h2 className="text-2xl font-bold font-display mb-3">Why live chat alone doesn't scale</h2><p className="text-lg text-foreground/80 leading-relaxed">Human agents are essential for complex, sensitive conversations — but staffing them 24/7 across every timezone and language is expensive, and queues grow during spikes. Most of what fills those queues is repetitive and already documented.</p></div>
          <div><h2 className="text-2xl font-bold font-display mb-3">The best of both with a Knowledge Agent</h2><p className="text-lg text-foreground/80 leading-relaxed">A Knowledge Agent resolves the repetitive 60-80% instantly and accurately, takes action to complete common requests, and hands off to your team with full context when human judgment is needed. You cut costs and wait times <em>and</em> raise satisfaction — without choosing between automation and a human touch.</p></div>
        </div>
      </section>
      <FAQ faqs={FAQS} heading="Comparison FAQ" className="py-20" />
      <CTA title="See the difference for yourself" subtitle="Build a Knowledge Agent on your own content in minutes and watch it outperform your old chatbot — free to start." />
    </PageLayout>
  );
}
