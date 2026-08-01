"use client";

import { useMemo, useState } from "react";

const INCLUDED = 500;
const OVERAGE_RATE = 0.5;
const BASE_PRICE = 300;

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

export function TicketEstimator() {
  const [tickets, setTickets] = useState(750);

  const { over, overCost, total } = useMemo(() => {
    const over = Math.max(0, tickets - INCLUDED);
    const overCost = over * OVERAGE_RATE;
    return { over, overCost, total: BASE_PRICE + overCost };
  }, [tickets]);

  return (
    <div className="rounded-2xl border bg-card shadow-lg p-6 max-w-xl mx-auto">
      <label htmlFor="tix" className="flex justify-between items-baseline text-sm text-muted-foreground">
        <span>Monthly tickets</span>
        <span className="font-mono text-lg font-semibold text-foreground">{tickets.toLocaleString("en-US")}</span>
      </label>
      <input
        id="tix"
        type="range"
        min={0}
        max={5000}
        step={50}
        value={tickets}
        onChange={(e) => setTickets(Number(e.target.value))}
        className="w-full my-3.5 accent-primary"
      />
      <div className="flex justify-between font-mono text-xs text-muted-foreground">
        <span>0</span>
        <span>5,000</span>
      </div>
      <div className="grid grid-cols-3 gap-3.5 mt-6 text-center">
        <div>
          <div className="font-mono text-xl font-semibold">{fmt(BASE_PRICE)}</div>
          <div className="text-xs text-muted-foreground mt-1">Base (500 incl.)</div>
        </div>
        <div>
          <div className="font-mono text-xl font-semibold text-primary">{fmt(overCost)}</div>
          <div className="text-xs text-muted-foreground mt-1">{over.toLocaleString("en-US")} extra × $0.50</div>
        </div>
        <div>
          <div className="font-mono text-2xl font-bold">{fmt(total)}</div>
          <div className="text-xs text-muted-foreground mt-1">Est. monthly total</div>
        </div>
      </div>
    </div>
  );
}
