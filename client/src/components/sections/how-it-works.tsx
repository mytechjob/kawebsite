import { HOW_IT_WORKS } from "@/data/content";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">
            From your content to a live agent in three steps
          </h2>
          <p className="text-muted-foreground text-lg">
            No code, no AI expertise, no long onboarding. Most teams launch in under five minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-border -z-10" />

          {HOW_IT_WORKS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Link href="/login">
            <Button size="lg" className="h-12 px-8">
              Start building free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
