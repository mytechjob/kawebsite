"use client";

import { useState } from "react";

type Signal = {
  key: string;
  tab: string;
  message: string;
  agent: string;
  label: string;
  title: string;
  account: string;
  value: string;
  owner: string;
};

const SIGNALS: Signal[] = [
  {
    key: "upsell",
    tab: "Upsell",
    message: "We need 12 more seats this month without changing our workflow.",
    agent:
      "Yes. I found your current plan and billing cycle. I have prepared the exact upgrade path and notified your account executive.",
    label: "Revenue signal detected",
    title: "Expansion intent",
    account: "Northwind",
    value: "+$18,400",
    owner: "AE · Dana",
  },
  {
    key: "churn",
    tab: "Churn",
    message: "We are evaluating alternatives before our renewal next month.",
    agent:
      "I have documented the issues you raised, provided the available resolution path, and alerted your customer success manager with the full thread.",
    label: "Retention signal detected",
    title: "Renewal risk",
    account: "Kestrel Labs",
    value: "$42,000",
    owner: "CSM · Priya",
  },
  {
    key: "feature",
    tab: "Feature",
    message: "Bulk export is still missing. This is blocking our reporting workflow.",
    agent:
      "Bulk export is not available in your current version. I shared the documented workaround and added this request to the existing product signal.",
    label: "Product signal detected",
    title: "Repeated feature gap",
    account: "Tandem",
    value: "3 requests",
    owner: "Product · Lee",
  },
  {
    key: "competitor",
    tab: "Competitor",
    message: "Your competitor quoted us 20 percent less for a similar package.",
    agent:
      "I have captured the comparison, summarized the scope differences, and routed the account context to your customer success manager.",
    label: "Competitive signal detected",
    title: "Active price pressure",
    account: "Volt Inc.",
    value: "$29,500",
    owner: "CSM · Priya",
  },
];

export function SignalConsole() {
  const [active, setActive] = useState(0);
  const signal = SIGNALS[active];

  return (
    <div
      className="rounded-2xl border bg-background overflow-hidden shadow-lg"
      aria-label="Interactive signal routing demo"
    >
      <div className="flex items-center justify-between px-5 py-3 border-b text-xs uppercase tracking-widest text-muted-foreground">
        <span>Signal ledger</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          Live demo
        </span>
      </div>

      <div role="tablist" aria-label="Signal types" className="grid grid-cols-2 sm:grid-cols-4 border-b">
        {SIGNALS.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`px-3 py-3.5 text-sm font-medium border-r last:border-r-0 transition-colors ${
              i === active
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.35fr_.65fr]">
        <div key={signal.key} className="p-6 flex flex-col justify-between gap-8 min-h-[22rem]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Customer message
            </span>
            <p className="mt-2 max-w-lg p-4 rounded-r-2xl rounded-bl-2xl border bg-muted/30 leading-relaxed">
              {signal.message}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Agent response
            </span>
            <p className="mt-2 text-foreground/80 leading-relaxed">{signal.agent}</p>
          </div>
        </div>

        <aside className="p-6 bg-foreground text-background flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {signal.label}
            </span>
            <h3 className="mt-1 text-2xl font-bold font-display">{signal.title}</h3>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="opacity-60">Account</dt>
              <dd className="font-semibold">{signal.account}</dd>
            </div>
            <div>
              <dt className="opacity-60">Value</dt>
              <dd className="font-semibold">{signal.value}</dd>
            </div>
            <div>
              <dt className="opacity-60">Route</dt>
              <dd className="font-semibold">{signal.owner}</dd>
            </div>
            <div>
              <dt className="opacity-60">Timing</dt>
              <dd className="font-semibold">Today</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
