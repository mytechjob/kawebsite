"use client";

import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SIGNUP_URL } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a GA4 event for funnel analytics (no-op if gtag isn't loaded). */
export function trackFunnelEvent(action: string, location: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, { funnel: "launch", location });
  }
}

interface FunnelButtonProps extends Omit<ButtonProps, "asChild"> {
  /** Where on the page this CTA lives — reported to analytics. */
  location: string;
  href?: string;
  label?: string;
  showArrow?: boolean;
}

/** Primary funnel CTA — every click is tracked with its page location. */
export function FunnelButton({
  location,
  href = SIGNUP_URL,
  label = "Start free — launch in 5 minutes",
  showArrow = true,
  ...buttonProps
}: FunnelButtonProps) {
  return (
    <Link href={href} onClick={() => trackFunnelEvent("funnel_cta_click", location)}>
      <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto" {...buttonProps}>
        {label} {showArrow && <ArrowRight className="ml-1 w-4 h-4" />}
      </Button>
    </Link>
  );
}
