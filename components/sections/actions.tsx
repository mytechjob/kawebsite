import { ACTIONS } from "@/data/content";
import { Sparkles } from "lucide-react";

interface ActionsProps {
  limit?: number;
}

export function Actions({ limit }: ActionsProps) {
  const items = limit ? ACTIONS.slice(0, limit) : ACTIONS;
  return (
    <section id="actions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary"><Sparkles className="w-4 h-4" /> Agentic actions</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Not just answers — your agent gets the job done</h2>
          <p className="text-muted-foreground text-lg">A Knowledge Agent doesn't just explain what to do. Connect your tools and it takes real action on the customer's behalf — securely, with guardrails you control.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((action) => {
            const Icon = action.icon;
            return (
              <div key={action.title} className="p-6 bg-background rounded-xl border hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                  <h3 className="text-lg font-bold leading-tight">{action.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{action.description}</p>
                <div className="text-sm bg-muted/50 border rounded-lg p-3 text-foreground/80 italic">{action.example}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
