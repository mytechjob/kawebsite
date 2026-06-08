import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { PLANS } from "@/lib/site";

export function Pricing({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Simple pricing. No confusing AI credits.</h2>
            <p className="text-muted-foreground text-lg">Pick a plan that fits your business and upgrade as you grow. No hidden fees, cancel anytime.</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`relative p-8 rounded-2xl border flex flex-col ${plan.popular ? "border-primary shadow-lg bg-primary/5" : "bg-background shadow-sm"}`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most popular</div>}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1"><span className="text-4xl font-bold">{plan.price}</span>{plan.period && <span className="text-muted-foreground">{plan.period}</span>}</div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (<li key={feature} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>{feature}</span></li>))}
              </ul>
              <Link href={plan.href}><Button className="w-full" variant={plan.popular ? "default" : "outline"}>{plan.cta}</Button></Link>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">All plans include unlimited knowledge uploads, lead capture, and 80+ languages. <span className="text-foreground font-medium">Cancel anytime — no long-term contract.</span></p>
      </div>
    </section>
  );
}
