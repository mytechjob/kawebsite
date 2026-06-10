"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/site";
import { trackFunnelEvent } from "./funnel-cta-button";

/**
 * Minimal funnel header: logo home-link and a single CTA. No nav menu —
 * a funnel page should give visitors exactly one decision to make.
 * Includes a scroll-progress bar to pull readers down the page.
 */
export function FunnelHeader() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b shadow-sm" : ""
      }`}
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left"
      />
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <img src="/KA-logo.png" alt="Knowledge Agents logo" className="h-12 sm:h-14 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-sm text-muted-foreground">
            Free plan · No credit card · Live in minutes
          </span>
          <Link href={SIGNUP_URL} onClick={() => trackFunnelEvent("funnel_cta_click", "header")}>
            <Button className="font-semibold">Start free</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

/** Slim funnel footer — legal links only, no leaky navigation. */
export function FunnelFooter() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Knowledge Agents, Inc.</span>
        <div className="flex items-center gap-6">
          <Link href="/business" className="hover:text-primary transition-colors">For business & enterprise</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
