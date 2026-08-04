"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

/** Card prices are the annual-contract rate; paying month-to-month adds 15%. */
const MONTHLY_MARKUP = 1.15;

export type Plan = {
  label: string;
  /** Monthly-equivalent price on an annual contract. `null` for custom/Enterprise pricing. */
  annualPrice: number | null;
  /** Display string used instead of a number (e.g. "Custom"). */
  customPrice?: string;
  description: string;
  features: string[];
  /** Rendered above the feature list, e.g. "Everything in Growth, plus:". */
  featuresLabel?: string;
  cta: string;
  href: string;
  featured?: boolean;
  /** Renders as a full-width horizontal band beneath the main plan grid. */
  wide?: boolean;
};

type Billing = "annual" | "monthly";

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

const priceFor = (plan: Plan, billing: Billing) =>
  plan.annualPrice === null
    ? plan.customPrice ?? "Custom"
    : fmt(billing === "annual" ? plan.annualPrice : plan.annualPrice * MONTHLY_MARKUP);

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const isPaid = plan.annualPrice !== null && plan.annualPrice > 0;

  return (
    <div
      className={`p-7 rounded-2xl border flex flex-col ${
        plan.featured ? "bg-primary text-primary-foreground border-primary shadow-xl lg:-translate-y-2" : "bg-background"
      }`}
    >
      <span className={`text-xs font-bold uppercase tracking-wide ${plan.featured ? "text-primary-foreground/80" : "text-primary"}`}>
        {plan.label}
      </span>
      <div className="mt-3">
        <span className="text-3xl font-bold font-display">{priceFor(plan, billing)}</span>
        {plan.annualPrice !== null && (
          <span className={`text-sm ml-1 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/ month</span>
        )}
      </div>
      <div className={`mb-1 h-5 text-xs ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {isPaid ? (billing === "annual" ? "billed annually" : "billed monthly") : null}
      </div>
      <p className={`text-sm mb-5 ${plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{plan.description}</p>
      {plan.featuresLabel && (
        <p className={`text-xs font-semibold mb-3 ${plan.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}>
          {plan.featuresLabel}
        </p>
      )}
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
}

function WidePlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  return (
    <div className="rounded-2xl border bg-background p-7">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">{plan.label}</span>
            <span className="text-2xl font-bold font-display">{priceFor(plan, billing)}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 max-w-3xl">{plan.description}</p>
          {plan.featuresLabel && <p className="text-xs font-semibold mt-4 text-foreground/80">{plan.featuresLabel}</p>}
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-56">
          <Link href={plan.href}>
            <Button className="w-full" variant="outline">{plan.cta}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PricingPlans({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<Billing>("annual");

  const cards = plans.filter((p) => !p.wide);
  const wide = plans.filter((p) => p.wide);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
        {cards.map((plan) => (
          <PlanCard key={plan.label} plan={plan} billing={billing} />
        ))}
      </div>

      {wide.length > 0 && (
        <div className="mt-6 max-w-7xl mx-auto space-y-6">
          {wide.map((plan) => (
            <WidePlanCard key={plan.label} plan={plan} billing={billing} />
          ))}
        </div>
      )}
    </>
  );
}
