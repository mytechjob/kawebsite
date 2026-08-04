"use client";

import { useMemo, useState } from "react";

/* Modelled on the Scale plan — the tier most teams comparing volume land on. */
const INCLUDED = 12_000;
const OVERAGE_RATE_PER_1K = 25;
const BASE_PRICE = 299;

const fmt = (n: number) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;

export function TicketEstimator() {
  const [messages, setMessages] = useState(18_000);

  const { over, overCost, total } = useMemo(() => {
    const over = Math.max(0, messages - INCLUDED);
    const overCost = (over / 1000) * OVERAGE_RATE_PER_1K;
    return { over, overCost, total: BASE_PRICE + overCost };
  }, [messages]);

  return (
    <div className="rounded-2xl border bg-card shadow-lg p-6 max-w-xl mx-auto">
      <label htmlFor="tix" className="flex justify-between items-baseline text-sm text-muted-foreground">
        <span>Monthly messages</span>
        <span className="font-mono text-lg font-semibold text-foreground">{messages.toLocaleString("en-US")}</span>
      </label>
      <input
        id="tix"
        type="range"
        min={0}
        max={100_000}
        step={1000}
        value={messages}
        onChange={(e) => setMessages(Number(e.target.value))}
        className="w-full my-3.5 accent-primary"
      />
      <div className="flex justify-between font-mono text-xs text-muted-foreground">
        <span>0</span>
        <span>100,000</span>
      </div>
      <div className="grid grid-cols-3 gap-3.5 mt-6 text-center">
        <div>
          <div className="font-mono text-xl font-semibold">{fmt(BASE_PRICE)}</div>
          <div className="text-xs text-muted-foreground mt-1">Scale base (12,000 incl.)</div>
        </div>
        <div>
          <div className="font-mono text-xl font-semibold text-primary">{fmt(overCost)}</div>
          <div className="text-xs text-muted-foreground mt-1">{over.toLocaleString("en-US")} extra × $25/1,000</div>
        </div>
        <div>
          <div className="font-mono text-2xl font-bold">{fmt(total)}</div>
          <div className="text-xs text-muted-foreground mt-1">Est. monthly total</div>
        </div>
      </div>
    </div>
  );
}
