import { INTEGRATIONS } from "@/data/content";
import { Plug } from "lucide-react";

export function Integrations() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            <Plug className="w-4 h-4" /> Integrations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">
            Connect the tools you already use
          </h2>
          <p className="text-muted-foreground text-lg">
            Trigger actions and sync data across your stack. If it has an API, your agent can use it —
            or automate anything with Zapier.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center gap-3 p-4 bg-background rounded-xl border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center font-bold text-sm text-foreground/70 flex-shrink-0">
                {integration.name.slice(0, 2)}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate">{integration.name}</div>
                <div className="text-xs text-muted-foreground truncate">{integration.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
