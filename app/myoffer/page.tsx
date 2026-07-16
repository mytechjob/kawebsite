import type { Metadata } from "next";
import Link from "next/link";
import { FunnelHeader, FunnelFooter } from "@/components/funnel/funnel-header";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Clock,
  MessageSquare,
  PanelTop,
  Star,
  Upload,
  Zap,
  FileText,
} from "lucide-react";
import { allKeywords, SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Turn Your Knowledge Into an AI Agent That Answers 24/7 | Knowledge Agents",
  description:
    "Knowledge Agents turns your website, documents, and expertise into an AI agent that answers questions, captures leads, and takes action 24/7 — grounded in what you actually know. Try it free.",
  keywords: allKeywords("core", "support", "build", "agentic"),
  alternates: { canonical: "/myoffer" },
};

const steps = [
  {
    icon: Upload,
    title: "Point it at your website, or upload your documents.",
    text: "Bring your site, help center, PDFs, and FAQs — no rebuild required.",
  },
  {
    icon: FileText,
    title: "Your agent trains on your actual content.",
    text: "Answers and citations included, grounded in what you've actually written.",
  },
  {
    icon: Zap,
    title: "Go live wherever your customers already are.",
    text: "Deploy as a Knowledge Bar, Bubble, or Page. Most businesses are live in about 5 minutes.",
  },
];

const suite = [
  {
    icon: PanelTop,
    name: "Knowledge Bar",
    text: "Sits on your website, answers questions the moment someone has them.",
  },
  {
    icon: MessageSquare,
    name: "Knowledge Bubble",
    text: "A conversational assistant for support, live where your customers already are.",
  },
  {
    icon: ArrowRight,
    name: "Knowledge Page",
    text: "A shareable, living version of your knowledge you can send anywhere, not just embed.",
  },
];

const proofStats = [
  { icon: Zap, value: "~5 min", label: "content upload to embedded agent" },
  { icon: Star, value: "4.8/5", label: "answer satisfaction across thousands of conversations" },
  { icon: Clock, value: "< 2s", label: "answers, day or night" },
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

const faqs = [
  {
    q: "What if it gives customers a wrong answer?",
    a: "It answers from your content, not the open internet. If something isn't covered in your docs, it says so instead of guessing. You control what it knows.",
  },
  {
    q: "Will this work on my website?",
    a: "Yes. Point it at your existing site or upload documents directly. No rebuild required.",
  },
  {
    q: "How long does it really take to launch?",
    a: "About 5 minutes for most businesses, from content upload to a live agent.",
  },
  {
    q: "Do I need all three products?",
    a: "No. Start with one surface — Bar, Bubble, or Page — and add the others when it makes sense.",
  },
  {
    q: "How much does it cost once we get more conversations?",
    a: "Start free, no credit card. Paid plans scale with you as conversation volume and team needs grow.",
  },
];

function OfferCTA({ location }: { location: string }) {
  return (
    <Link href={SIGNUP_URL} data-cta={location}>
      <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
        Try it free <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </Link>
  );
}

export default function MyOfferPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FunnelHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10" />
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
              Your knowledge is an asset. <br className="hidden sm:block" />
              <span className="text-primary">Right now, it&rsquo;s stuck answering nobody.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              <strong className="text-foreground font-semibold">Knowledge Agents</strong> turns your website,
              documents, and expertise into an AI agent that answers questions, captures leads, and takes
              action, 24/7 — grounded in what you actually know.
            </p>
            <div className="flex justify-center">
              <OfferCTA location="hero" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">No credit card, live in about 5 minutes.</p>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-24 border-t">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The problem</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
              Right now, people are leaving your website with questions you could&rsquo;ve answered.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              They ask the same five questions your team answers by hand every week. They land after hours and
              get nothing. They dig through your menus and your docs and give up before they find what they
              need. You don&rsquo;t even find out what they wanted to know, because they never told you. They
              just left.
            </p>
          </div>
        </section>

        {/* WHY THIS KEEPS HAPPENING */}
        <section className="py-24 bg-muted/30 border-y">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why this keeps happening
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
              Your knowledge isn&rsquo;t the problem. Where it lives is.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You already know the answers. They&rsquo;re in your head, your website, your documents, your FAQs,
              your last hundred calls. The problem is none of that is built to answer back. A static page
              can&rsquo;t have a conversation. A contact form can&rsquo;t respond at 11pm. The knowledge is
              real. It&rsquo;s just not available when someone actually needs it.
            </p>
          </div>
        </section>

        {/* THE SHIFT */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The shift</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
              Give your customers the same answer you&rsquo;d give them yourself.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Knowledge Agents trains an AI agent directly on your content — your website, your documents, your
              FAQs — so it can answer the way you would, not the way a generic chatbot guesses. Every answer is
              grounded in what you&rsquo;ve actually written. If the answer isn&rsquo;t in your content, the
              agent says so instead of making one up.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">
                From your content to a live agent in three steps
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="p-8 bg-background rounded-2xl border shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </span>
                      <span className="text-sm font-bold text-primary">Step {i + 1}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* THE KNOWLEDGE SUITE */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                The Knowledge Suite
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">
                One agent, trained once, works across all three
              </h2>
              <p className="text-lg text-muted-foreground">
                Start with one. Add the others when you&rsquo;re ready.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {suite.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="p-8 bg-background rounded-2xl border text-center">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="py-24 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {proofStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="p-6 bg-background rounded-2xl border text-center">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold font-display mb-1">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                );
              })}
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

        {/* FAQ */}
        <FAQ
          faqs={faqs}
          heading="Before you go, the questions everyone asks"
          subheading="Straight answers to what people want to know before they start."
          className="py-24"
        />

        {/* WHO THIS IS FOR */}
        <section className="py-24 bg-muted/30 border-y">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Who this is for
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">
                Made for people who already have knowledge worth sharing
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-background rounded-2xl border">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> This is for you
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You already have real expertise: a website, documents, FAQs, a team that answers the same
                  questions on repeat. You&rsquo;re not looking for more static content. You want that knowledge
                  to answer back.
                </p>
              </div>
              <div className="p-8 bg-background rounded-2xl border">
                <h3 className="font-bold text-lg mb-3 text-muted-foreground">This isn&rsquo;t for you if</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You don&rsquo;t have any content to start from, or you&rsquo;re looking for something that
                  fully replaces human judgment on sensitive calls without a human in the loop. Everyone else:
                  just get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <CTA
          title="Try Knowledge Agents free"
          subtitle="Turn your website, documents, and expertise into an AI agent that answers questions and takes action — grounded in what you actually know."
          primaryLabel="Try it free"
          bullets={["No credit card", "Live in about 5 minutes", "Grounded in your own content"]}
        />
      </main>
      <FunnelFooter />
    </div>
  );
}
