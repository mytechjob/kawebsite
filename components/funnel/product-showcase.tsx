"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Search, Sparkles, FileText, CornerDownLeft } from "lucide-react";
import { SUITE_PRODUCTS, type SuiteProduct } from "@/data/funnel";
import { FunnelButton } from "./funnel-cta-button";

const ROTATE_MS = 9000;

/* ------------------------------------------------------------------ */
/*  Shared mockup chrome                                               */
/* ------------------------------------------------------------------ */

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-background shadow-2xl overflow-hidden">
      <div className="h-10 bg-muted/50 border-b flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
        <div className="ml-3 flex-1 max-w-[240px] h-6 rounded-md bg-background border text-[11px] text-muted-foreground flex items-center px-3 truncate">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

/** Dimmed skeleton content standing in for "your website". */
function SiteSkeleton() {
  return (
    <div className="space-y-3 opacity-40">
      <div className="h-5 w-1/3 rounded bg-muted" />
      <div className="h-3 w-full rounded bg-muted" />
      <div className="h-3 w-5/6 rounded bg-muted" />
      <div className="grid grid-cols-3 gap-3 pt-2">
        <div className="h-16 rounded-lg bg-muted" />
        <div className="h-16 rounded-lg bg-muted" />
        <div className="h-16 rounded-lg bg-muted" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Knowledge Bar mockup — a typewriter asks, the bar answers          */
/* ------------------------------------------------------------------ */

const BAR_QA = [
  {
    q: "Do you integrate with Shopify?",
    a: "Yes — connect Shopify in one click to answer order, shipping, and product questions automatically.",
    sources: ["integrations.pdf", "help/shopify"],
  },
  {
    q: "How do I upgrade my plan?",
    a: "Head to Settings → Billing and pick a plan. Upgrades apply instantly — want me to take you there?",
    sources: ["billing-guide", "pricing"],
  },
];

function BarMockup() {
  const [qaIndex, setQaIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const qa = BAR_QA[qaIndex];
    let i = 0;
    setTyped("");
    setShowAnswer(false);
    const typeId = setInterval(() => {
      i += 1;
      setTyped(qa.q.slice(0, i));
      if (i >= qa.q.length) {
        clearInterval(typeId);
        setTimeout(() => setShowAnswer(true), 400);
      }
    }, 45);
    const nextId = setTimeout(() => setQaIndex((n) => (n + 1) % BAR_QA.length), 7000);
    return () => {
      clearInterval(typeId);
      clearTimeout(nextId);
    };
  }, [qaIndex]);

  return (
    <BrowserFrame url="yoursite.com">
      <div className="relative p-5 min-h-[340px] bg-gradient-to-b from-background to-muted/20">
        <SiteSkeleton />
        {/* The Knowledge Bar overlay */}
        <div className="absolute inset-x-5 top-24 sm:inset-x-10">
          <div className="rounded-xl border-2 border-primary/40 bg-background shadow-xl">
            <div className="flex items-center gap-3 px-4 py-3 border-b">
              <Search className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm flex-1 text-left truncate">
                {typed}
                <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle animate-pulse" />
              </span>
              <kbd className="hidden sm:flex items-center gap-1 text-[10px] text-muted-foreground border rounded px-1.5 py-0.5">
                <CornerDownLeft className="w-3 h-3" /> Ask
              </kbd>
            </div>
            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-left">
                    <div className="flex items-center gap-1.5 text-primary text-xs font-semibold mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> Answer from your knowledge
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">{BAR_QA[qaIndex].a}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {BAR_QA[qaIndex].sources.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          <FileText className="w-3 h-3" /> {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ------------------------------------------------------------------ */
/*  Knowledge Bubble mockup — a virtual agent that takes action        */
/* ------------------------------------------------------------------ */

function AgentAvatar({ size = "w-8 h-8" }: { size?: string }) {
  return (
    <div
      className={`${size} rounded-full bg-gradient-to-br from-primary to-fuchsia-500 flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0`}
    >
      KA
    </div>
  );
}

function BubbleMockup() {
  return (
    <BrowserFrame url="yoursite.com/pricing">
      <div className="relative p-5 min-h-[340px] bg-gradient-to-b from-background to-muted/20">
        <SiteSkeleton />
        {/* Chat panel pinned to the corner, like the real widget */}
        <div className="absolute right-4 bottom-4 left-4 sm:left-auto sm:w-[290px] rounded-xl border bg-background shadow-xl flex flex-col overflow-hidden">
          <div className="p-3 border-b flex items-center gap-2.5">
            <AgentAvatar />
            <div className="text-left">
              <div className="font-bold text-xs">Maya · Virtual Agent</div>
              <div className="text-[10px] text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online — replies instantly
              </div>
            </div>
          </div>
          <div className="p-3 space-y-2.5 text-xs text-left">
            <div className="flex gap-2 flex-row-reverse">
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-l-lg rounded-br-lg max-w-[85%]">
                Can I see a demo this week?
              </div>
            </div>
            <div className="flex gap-2">
              <AgentAvatar size="w-6 h-6" />
              <div className="bg-primary/10 px-3 py-2 rounded-r-lg rounded-bl-lg max-w-[85%]">
                Of course! I have Thursday 2:00 PM or Friday 10:00 AM. Which works for you?
              </div>
            </div>
            <div className="flex gap-2 flex-row-reverse">
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-l-lg rounded-br-lg max-w-[85%]">
                Thursday at 2.
              </div>
            </div>
            <div className="flex gap-2">
              <AgentAvatar size="w-6 h-6" />
              <div className="bg-green-500/10 border border-green-500/20 px-3 py-2 rounded-r-lg rounded-bl-lg max-w-[85%]">
                <span className="flex items-center gap-1 font-semibold text-green-600 mb-0.5">
                  <Sparkles className="w-3 h-3" /> Action completed
                </span>
                Booked! Invite sent to your email. 🎉
              </div>
            </div>
          </div>
          <div className="p-2.5 border-t">
            <div className="h-8 bg-muted/50 rounded-full w-full flex items-center px-3 text-[11px] text-muted-foreground">
              Ask me anything…
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ------------------------------------------------------------------ */
/*  Knowledge Page mockup — team collaboration that ships              */
/* ------------------------------------------------------------------ */

const COLLABORATORS = [
  { initials: "SJ", color: "bg-sky-500" },
  { initials: "MO", color: "bg-emerald-500" },
  { initials: "AR", color: "bg-amber-500" },
];

function PageMockup() {
  return (
    <BrowserFrame url="kagents.net/p/getting-started">
      <div className="p-5 min-h-[340px] bg-gradient-to-b from-background to-muted/20 text-left">
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2">
            {COLLABORATORS.map((c) => (
              <div
                key={c.initials}
                className={`w-7 h-7 rounded-full ${c.color} text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-background`}
              >
                {c.initials}
              </div>
            ))}
            <div className="w-7 h-7 rounded-full bg-muted text-muted-foreground text-[10px] font-bold flex items-center justify-center ring-2 ring-background">
              +4
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-600 bg-green-500/10 border border-green-500/20 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Published & answerable
          </span>
        </div>

        <h4 className="font-display font-bold text-lg mb-2">Getting Started Guide</h4>
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-muted" />
          <div className="h-3 w-11/12 rounded bg-muted" />
          <div className="relative h-3 w-3/4 rounded bg-primary/15 ring-1 ring-primary/30">
            {/* Live collaborator cursor */}
            <div className="absolute -right-1 -top-4 flex items-center gap-1">
              <span className="text-[10px] font-bold text-white bg-emerald-500 rounded px-1.5 py-0.5">
                Mo is editing…
              </span>
            </div>
          </div>
          <div className="h-3 w-5/6 rounded bg-muted" />
        </div>

        {/* Inline comment thread */}
        <div className="mt-4 rounded-lg border bg-background shadow-sm p-3 max-w-[320px]">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-sky-500 text-white text-[9px] font-bold flex items-center justify-center">
              SJ
            </div>
            <span className="text-[11px] font-semibold">Sara</span>
            <span className="text-[10px] text-muted-foreground">2m ago</span>
          </div>
          <p className="text-[11px] text-muted-foreground">
            Added the new refund policy — agent answers update everywhere instantly ✅
          </p>
        </div>

        {/* Visitors can question the page */}
        <div className="mt-4 rounded-lg border-2 border-primary/30 bg-primary/5 p-3 flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-primary shrink-0" />
          <span className="text-[12px] text-foreground/80">
            Visitors ask this page anything — <em>“What's the refund window?”</em> → answered from
            the latest version.
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ------------------------------------------------------------------ */
/*  Showcase section                                                   */
/* ------------------------------------------------------------------ */

const MOCKUPS: Record<SuiteProduct["id"], () => React.ReactNode> = {
  bar: BarMockup,
  bubble: BubbleMockup,
  page: PageMockup,
};

export function ProductShowcase() {
  const [activeId, setActiveId] = useState<SuiteProduct["id"]>("bar");
  const [paused, setPaused] = useState(false);

  // Auto-rotate through products until the visitor takes over.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveId((current) => {
        const i = SUITE_PRODUCTS.findIndex((p) => p.id === current);
        return SUITE_PRODUCTS[(i + 1) % SUITE_PRODUCTS.length].id;
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const active = SUITE_PRODUCTS.find((p) => p.id === activeId)!;
  const Mockup = MOCKUPS[active.id];

  return (
    <section id="suite" className="py-20 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Knowledge Suite
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4">
            One brain. Three surfaces. <span className="text-primary">Zero missed customers.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Train your Knowledge Agent once on your own content, then deploy it everywhere your
            customers are. Every plan includes all three.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {SUITE_PRODUCTS.map((p) => {
            const Icon = p.icon;
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActiveId(p.id);
                  setPaused(true);
                }}
                className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                Knowledge {p.tab}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
          >
            <div className="text-left order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-1.5">{active.name}</h3>
              <p className="text-primary font-semibold mb-4">{active.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{active.description}</p>
              <ul className="space-y-3 mb-6">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground/80 border-l-2 border-primary pl-3 mb-6 italic">
                {active.outcome}
              </p>
              <FunnelButton
                location={`showcase_${active.id}`}
                label={`Launch your ${active.name}`}
              />
            </div>
            <div className="order-1 lg:order-2">
              <Mockup />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
