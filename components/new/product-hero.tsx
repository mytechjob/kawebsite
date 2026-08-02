import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/site";
import { ArrowRight, Headphones, Building2, TrendingUp } from "lucide-react";

const FEATURES = [
  { icon: Headphones, title: "Unified Support", subtitle: "Chat, email, voice, tickets, and portal" },
  { icon: Building2, title: "Account-Aware Answers", subtitle: "Grounded in customer and company context" },
  { icon: TrendingUp, title: "Revenue Opportunities", subtitle: "Identify risks, expansion, and upsell signals" },
];

export function NewProductHero() {
  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-primary/10 via-primary/5 to-background px-4 pt-10 pb-0 text-center shadow-sm sm:px-6 md:px-10 md:pt-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-primary/10 rounded-full blur-3xl -z-10" />

          <h1 className="mx-auto max-w-5xl text-4xl font-display font-bold tracking-tight leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            Customer support that gets smarter with every conversation.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bring chat, email, voice, help desk, and customer knowledge together in one intelligent platform that resolves issues and identifies opportunities.
          </p>

          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex min-h-16 items-center gap-3 rounded-2xl border bg-background/80 px-4 py-3 text-left shadow-sm backdrop-blur sm:rounded-full">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-none">{feature.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{feature.subtitle}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex justify-center">
            <Link href={SIGNUP_URL} className="w-full sm:w-auto">
              <Button size="lg" className="h-12 w-full rounded-full px-8 text-base shadow-lg shadow-primary/20 sm:w-auto">
                Start Free <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
            <span className="font-semibold text-foreground">Launch special:</span> free human onboarding included (a $750 value). No credit card required.
          </p>

          <div className="mt-7">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Built for growing B2B companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2" aria-label="Knowledge Agents customers">
              {["AI Momentum Partners", "FastBase", "Job Agents"].map((customer) => (
                <span key={customer} className="text-sm font-semibold font-display text-foreground/55 sm:text-base">{customer}</span>
              ))}
            </div>
          </div>

          <div className="relative mt-7 overflow-hidden rounded-t-2xl border border-b-0 bg-background shadow-2xl">
            <img
              src="/screenshot-customer-inbox.png"
              alt="The Knowledge Agents customer inbox: conversations grouped by status, with an AI agent answering a question about authentication and a human takeover option."
              className="block w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
