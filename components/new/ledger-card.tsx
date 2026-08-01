const ROWS = [
  {
    tag: "Upsell",
    tagClass: "bg-primary/10 text-primary",
    msg: `"Can we add 12 more seats this month?"`,
    meta: "Northwind · billing synced",
    amt: "+$18,400",
    amtClass: "text-primary",
    who: "→ AE · Dana",
  },
  {
    tag: "Churn",
    tagClass: "bg-destructive/10 text-destructive",
    msg: `"Evaluating alternatives before renewal."`,
    meta: "Kestrel Labs · renews in 21d",
    amt: "$42,000",
    amtClass: "text-destructive",
    who: "→ CSM · Priya",
  },
  {
    tag: "Feature",
    tagClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    msg: `"Does the API support bulk export yet?"`,
    meta: "Tandem · logged to roadmap",
    amt: "3rd ask",
    amtClass: "text-foreground",
    who: "→ Product",
  },
  {
    tag: "Competitor",
    tagClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    msg: `"Your rival quoted us 20% less."`,
    meta: "Volt Inc · flagged",
    amt: "$29,500",
    amtClass: "text-destructive",
    who: "→ CSM · Priya",
  },
];

export function LedgerCard() {
  return (
    <div className="rounded-2xl border bg-card shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b bg-muted/30">
        <span className="text-sm font-semibold">Live signal ledger · today</span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Routing
        </span>
      </div>
      <div className="divide-y">
        {ROWS.map((row) => (
          <div key={row.tag} className="flex items-center gap-3 px-5 py-3.5">
            <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${row.tagClass}`}>{row.tag}</span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm truncate">{row.msg}</span>
              <span className="block text-xs text-muted-foreground">{row.meta}</span>
            </span>
            <span className="shrink-0 text-right">
              <span className={`block text-sm font-semibold ${row.amtClass}`}>{row.amt}</span>
              <span className="block text-xs text-muted-foreground">{row.who}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-5 py-3.5 bg-muted/30 text-xs text-muted-foreground border-t">
        <span>Resolved autonomously today · <strong className="text-foreground">238</strong></span>
        <span>Pipeline surfaced · <strong className="text-foreground">$89,900</strong></span>
      </div>
    </div>
  );
}
