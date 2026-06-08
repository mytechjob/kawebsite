import { Globe, FileText, HelpCircle, Brain, Mails, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pain = { icon: LucideIcon; source: string; problem: string };

const PAINS: Pain[] = [
  { icon: Globe, source: "Website pages", problem: "Customers still can't find answers" },
  { icon: FileText, source: "PDFs & documents", problem: "Nobody reads them" },
  { icon: HelpCircle, source: "Static FAQs", problem: "Limited and quickly outdated" },
  { icon: Brain, source: "Employee knowledge", problem: "Locked in people's heads, not available 24/7" },
  { icon: Mails, source: "Emails & support tickets", problem: "The same questions, repeated every day" },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">The problem</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">
            Your team is wasting time answering repetitive questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Most businesses already have the answers — they're just trapped where customers and staff can't reach them.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border bg-background shadow-sm overflow-hidden">
          <div className="grid grid-cols-[1fr_1.3fr] bg-muted/40 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <div className="px-5 py-3.5 md:px-6">Knowledge source</div>
            <div className="px-5 py-3.5 md:px-6 border-l">The problem</div>
          </div>
          {PAINS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.source} className="grid grid-cols-[1fr_1.3fr] border-t">
                <div className="px-5 py-4 md:px-6 flex items-center gap-3 font-medium">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span>{p.source}</span>
                </div>
                <div className="px-5 py-4 md:px-6 border-l flex items-center text-muted-foreground">{p.problem}</div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-[15px] font-medium">
            <span className="font-bold">The result:</span> slower response times, missed leads, frustrated customers,
            and higher support costs.
          </p>
        </div>
      </div>
    </section>
  );
}
