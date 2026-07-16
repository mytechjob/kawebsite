import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, ShieldCheck, Star, Zap } from "lucide-react";
import { allKeywords, SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your Knowledge Is an Asset — Put It to Work | Knowledge Agents",
  description:
    "Knowledge Agents turns your website, documents, and expertise into an AI agent that answers questions, captures leads, and works 24/7 — in your voice. Try the Knowledge Bar free.",
  keywords: allKeywords("core", "support", "build"),
  alternates: { canonical: "/myhome" },
};

const proofPoints = [
  { icon: Zap, label: "Live in ~5 minutes" },
  { icon: ShieldCheck, label: "Grounded in your own content, not generic AI guessing" },
  { icon: Star, label: "4.8/5 answer satisfaction" },
  { icon: Clock, label: "Answers in under 2 seconds, day or night" },
];

const testimonials = [
  {
    quote:
      "We pointed Knowledge Agents at our help center and it was live before our next standup. Customers get answers in seconds now, and our team finally gets to focus on the conversations that actually need a human.",
    name: "Jimmy B.",
    role: "CEO",
    company: "AI Momentum Partners",
    initials: "JB",
  },
  {
    quote:
      "Setup took an afternoon. The agent answers in the customer's language and hands off to a human with full context when it needs to. It's the most responsive support we've ever offered.",
    name: "Kirk R.",
    role: "Founder",
    company: "Job Agents",
    initials: "KR",
  },
  {
    quote:
      "The accuracy is what sold us. Answers are grounded in our own docs, so we trust what it tells customers. Satisfaction on our AI chats has been excellent right out of the gate.",
    name: "AJ",
    role: "President",
    company: "FastBase",
    initials: "AJ",
  },
];

export default function MyHomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            Your knowledge is an asset. <br className="hidden sm:block" />
            <span className="text-primary">Right now, it&rsquo;s stuck.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            <strong className="text-foreground font-semibold">Knowledge Agents</strong> turns your website,
            documents, and expertise into an AI agent that answers questions, captures leads, and works 24/7 —
            in your voice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL}>
              <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                Try the Knowledge Bar free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">No credit card, live in about 5 minutes.</p>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
            {proofPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{p.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">The problem</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
            Every day, someone leaves your site with a question you could&rsquo;ve answered.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your expertise doesn&rsquo;t live on one page. It&rsquo;s in your head, your documents, your FAQs,
            your last hundred sales calls. Right now, a visitor lands on your site with a real question,
            can&rsquo;t find the answer, and leaves. You never even know they were there.
          </p>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">The shift</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
            What if your website could answer like you do?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Knowledge Agents trains an AI agent on your actual content — your site, your docs, your FAQs — and
            puts it to work answering questions, capturing leads, and taking action, 24 hours a day. Not a
            generic chatbot guessing at answers. An agent grounded in what you actually know. Every answer comes
            from your content, not the internet. If it&rsquo;s not in your docs, the agent says so instead of
            guessing.
          </p>
        </div>
      </section>

      {/* THE PROOF */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The proof</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">
              Teams launch in an afternoon — and never look back
            </h2>
            <div className="flex items-center justify-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-muted-foreground text-sm font-medium">4.8/5 average answer rating</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="p-8 bg-background rounded-2xl border shadow-sm flex flex-col">
                <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Try the Knowledge Bar free"
        subtitle="Turn your website, documents, and expertise into an AI agent that answers questions and captures leads — in your voice, around the clock."
        primaryLabel="Try the Knowledge Bar free"
        bullets={["No credit card", "Live in about 5 minutes", "Grounded in your own content"]}
      />
    </PageLayout>
  );
}
