import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Building2 } from "lucide-react";
import Link from "next/link";
import { SIGNUP_URL } from "@/lib/site";

const chips = [
  "Help desk & IT tickets",
  "Employee onboarding",
  "HR & policy questions",
  "SOPs & playbooks",
  "Internal tooling FAQs",
];

const external = [
  "Answer product & service questions instantly",
  "Capture leads around the clock",
  "Deflect repetitive support tickets",
];

const internal = [
  { label: "Manage help desk & IT tickets", detail: "let an agent triage, answer, and route internal requests" },
  { label: "Onboard new employees", detail: "deliver instructions, policies, and setup steps on demand" },
  { label: "Answer HR & policy questions", detail: "PTO, benefits, and process queries, instantly" },
  { label: "Surface SOPs & playbooks", detail: "turn scattered docs into one searchable assistant" },
];

export function InternalExternal() {
  return (
    <section id="internal" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Not just for customers</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">
            The same platform powers your team, too
          </h2>
          <p className="text-muted-foreground text-lg">
            Point your agents inward. Knowledge Agents isn't only a customer support layer — it's a shared brain for
            everything your employees need to know and do.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {chips.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full border bg-background text-sm text-muted-foreground">
              {c}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl border bg-background shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6">
              <Users className="w-4 h-4" /> Facing your customers
            </div>
            <ul className="space-y-4">
              {external.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary mb-6">
              <Building2 className="w-4 h-4" /> Facing your team
            </div>
            <ul className="space-y-4">
              {internal.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold">{item.label}</strong>{" "}
                    <span className="text-muted-foreground">— {item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={SIGNUP_URL}>
            <Button size="lg" className="h-12 px-8">
              Deploy an internal agent <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
