import { Code2, Settings2, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Reassurance = { icon: LucideIcon; title: string; description: string };

const ITEMS: Reassurance[] = [
  { icon: Code2, title: "No engineering team", description: "Built for business owners, not developers." },
  { icon: Settings2, title: "No complicated setup", description: "Upload, customize, and launch in minutes." },
  { icon: ShieldCheck, title: "No AI expertise required", description: "Preview everything before it goes live." },
];

export function RiskReversal() {
  return (
    <section id="risk" className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">No risk</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Try it without the tech headache</h2>
          <p className="text-muted-foreground text-lg">
            Upload your content, customize your agent, and see it working before you deploy it publicly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center p-8 rounded-2xl border bg-background shadow-sm">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
