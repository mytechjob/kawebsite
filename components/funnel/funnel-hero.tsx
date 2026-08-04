"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { FunnelButton } from "./funnel-cta-button";

const ROTATING = ["website", "web app", "help center", "product docs", "business"];
const TRUST = ["No code required", "14-day free trial — no credit card", "Live in about 5 minutes"];

/**
 * Funnel hero: one promise, one CTA. The rotating word makes the core
 * claim — "turn any ___ into an AI application" — feel personal to every
 * visitor segment that lands here.
 */
export function FunnelHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Introducing the Knowledge Suite · Bar — Bubble — Page
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
        >
          Turn your{" "}
          <span className="relative inline-block text-primary align-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING[index]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {ROTATING[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br className="hidden sm:block" /> into an AI application
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          The <strong className="text-foreground font-semibold">Knowledge Suite</strong> puts an AI
          agent trained on <em>your</em> business everywhere your customers are — an answer bar on
          your site, a virtual agent in the corner, and a living page your team builds together.
          It answers, captures leads, and takes action. 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <FunnelButton location="hero" />
          <a
            href="#suite"
            className="text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            See the suite in action ↓
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" /> {t}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span className="flex text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </span>
          <span>
            <strong className="text-foreground">4.8/5</strong> answer satisfaction across thousands
            of customer conversations
          </span>
        </motion.div>
      </div>
    </section>
  );
}
