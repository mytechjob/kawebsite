"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { SIGNUP_URL } from "@/lib/site";
import { trackFunnelEvent } from "./funnel-cta-button";

/**
 * Sticky bottom CTA bar that slides in once the visitor has scrolled past
 * the hero — keeps the next step one tap away on long funnel pages.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-40 border-t bg-background/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base truncate">
                Launch your first Knowledge Agent today.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                Train it on your content and go live in about 5 minutes — no credit card.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link href={SIGNUP_URL} onClick={() => trackFunnelEvent("funnel_cta_click", "sticky_bar")}>
                <Button className="font-semibold">
                  Get Started <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
              <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
