import { USE_CASE_CARDS } from "@/data/content";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function UseCases() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">
            Built for every team that talks to customers
          </h2>
          <p className="text-muted-foreground text-lg">
            From support and e-commerce to healthcare and education — see how Knowledge Agents work
            for your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASE_CARDS.map((uc) => {
            const Icon = uc.icon;
            return (
              <Link key={uc.slug} href={`/solutions/${uc.slug}`} className="group block h-full p-6 bg-background rounded-xl border hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">{uc.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{uc.tagline}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
