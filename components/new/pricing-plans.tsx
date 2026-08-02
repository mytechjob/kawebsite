"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

/** Month-to-month costs 15% more than the same plan billed annually. */
const MONTHLY_MARKUP = 1.15;

export type Plan = {
  label: string;
  /** Monthly-equivalent price when billed annually. `null` for custom/Enterprise pricing. */
  annualPrice: number | null;
  /** Display string used instead of a number (e.g. "Custom"). */
  customPrice?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

type Billing = "annual" | "monthly";

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export function PricingPlans({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<Billing>("annual");

  return (
    <>
      {/* Billing toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-1 rounded-full border bg-muted/40 p-1">
          {(["monthly", "annual"] as const).map((option) => {
            const active = billing === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                aria-pressed={active}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {option === "monthly" ? "Monthly" : "Annual"}
                {option === "annual" && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                    Save 15%
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
        {plans.map((plan) => {
          const isPaid = plan.annualPrice !== null && plan.annualPrice > 0;
          const displayPrice =
            plan.annualPrice === null
              ? plan.customPrice ?? "Custom"
              : fmt(billing === "annual" ? plan.annualPrice : plan.annualPrice * MONTHLY_MARKUP);

          return (
            <div
              key={plan.label}
              className={`p-7 rounded-2xl border flex flex-col ${plan.featured ? "bg-primary text-primary-foreground border-primary shadow-xl md:-translate-y-2" : "bg-background"}`}
            >
              <span className={`text-xs font-bold uppercase tracking-wide ${plan.featured ? "text-primary-foreground/80" : "text-primary"}`}>{plan.label}</span>
              <div className="mt-3">
                <span className="text-3xl font-bold font-display">{displayPrice}</span>
                {plan.annualPrice !== null && (
                  <span className={`text-sm ml-1 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/ month</span>
                )}
              </div>
              <div className={`mb-1 h-5 text-xs ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {isPaid && billing === "annual" ? "billed annually" : null}
              </div>
              <p className={`text-sm mb-5 ${plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{plan.description}</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.href}>
                <Button className="w-full" variant={plan.featured ? "secondary" : "outline"}>
                  {plan.cta}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
