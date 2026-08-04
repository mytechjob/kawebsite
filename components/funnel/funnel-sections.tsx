"use client";

import { motion } from "framer-motion";
import { ArrowDown, Check, ShieldCheck } from "lucide-react";
import { LEAKS, FUNNEL_STEPS, VALUE_STACK } from "@/data/funnel";
import { STATS, SCHEDULE_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FunnelButton, trackFunnelEvent } from "./funnel-cta-button";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

/* ------------------------------------------------------------------ */
/*  Problem agitation — the three revenue leaks                        */
/* ------------------------------------------------------------------ */

export function FunnelProblem() {
  return (
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">The problem</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4">
            Your website is leaking revenue in three places
          </h2>
          <p className="text-muted-foreground text-lg">
            You worked hard to get people to your site. Then they show up with a question — and
            here's what happens next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {LEAKS.map((leak, i) => {
            const Icon = leak.icon;
            return (
              <motion.div
                key={leak.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-7 rounded-2xl border bg-background shadow-sm flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-destructive/80">
                    {leak.stat}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{leak.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{leak.description}</p>
                <div className="mt-5 pt-4 border-t flex items-center gap-2 text-sm">
                  <ArrowDown className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Plugged by</span>
                  <span className="font-bold text-primary">{leak.fixedBy}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-lg mt-12 max-w-2xl mx-auto"
        >
          The fix isn't more content or more staff.{" "}
          <strong className="font-semibold">
            It's making everything you already know instantly answerable.
          </strong>
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works — three steps to live                                 */
/* ------------------------------------------------------------------ */

export function FunnelSteps() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4">
            From your content to live AI in three steps
          </h2>
          <p className="text-muted-foreground text-lg">
            No code. No prompts to engineer. No AI expertise. If you can upload a file, you can
            launch a Knowledge Agent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {FUNNEL_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center px-4"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Step {i + 1}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
          <FunnelButton location="steps" label="Get Started" />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Proof strip — headline metrics                                     */
/* ------------------------------------------------------------------ */

export function FunnelStats() {
  return (
    <section className="py-14 border-y bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {STATS.map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className="text-3xl md:text-4xl font-bold font-display text-primary">{s.value}</div>
              <div className="text-sm font-semibold mt-1">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  The offer — value stack + plan anchor + risk reversal              */
/* ------------------------------------------------------------------ */

const TEAM_FEATURES = [
  "Unlimited Knowledge Agents across your sites and teams",
  "Advanced actions & integrations — connect your own tools and APIs",
  "Human handoff & live takeover with full context",
  "Conversation analytics & content-gap insights",
  "White-label, custom domains & custom branding",
  "Priority support, onboarding & solution engineering",
];

export function FunnelOffer() {
  return (
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">The offer</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4">
            Everything you get the moment you start
          </h2>
          <p className="text-muted-foreground text-lg">
            One platform. All three surfaces. Priced by conversations — never confusing AI credits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Value stack */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border bg-background shadow-sm"
          >
            <h3 className="font-bold text-xl mb-6">Start today and you get:</h3>
            <ul className="space-y-4">
              {VALUE_STACK.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <FunnelButton location="offer_free" label="Get Started" />
            </div>
          </motion.div>

          {/* Plan anchor */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="p-8 rounded-2xl border-2 border-primary bg-primary/5 shadow-lg flex flex-col"
          >
            <div className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide mb-5">
              Most popular
            </div>
            <h3 className="font-bold text-2xl mb-3">For Teams &amp; Businesses</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Everything growing teams need to support customers, capture leads, and take action at
              scale — with plans that grow with you.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {TEAM_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <FunnelButton location="offer_pro" label="Get Started" className="w-full" />
              <Link
                href={SCHEDULE_URL}
                onClick={() => trackFunnelEvent("funnel_cta_click", "offer_schedule")}
                className="block"
              >
                <Button variant="outline" size="lg" className="w-full h-12 text-base">
                  Want us to build it for you? Book a call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Risk reversal */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl border bg-background shadow-sm flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <p className="text-sm leading-relaxed">
            <strong className="font-semibold">Zero-risk start.</strong> Your 14-day trial needs no
            credit card. Plans have no long-term contract — upgrade, downgrade, or cancel anytime
            from your dashboard. Your data is encrypted and never used to train foundation models.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
