import { FEATURES } from "@/data/content";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturesProps {
  limit?: number;
  showCta?: boolean;
  heading?: string;
  subheading?: string;
}

export function Features({
  limit,
  showCta = true,
  heading = "Everything you need to build powerful AI agents",
  subheading = "Train on your content, take real actions, and deploy anywhere — all without writing code.",
}: FeaturesProps) {
  const items = limit ? FEATURES.slice(0, limit) : FEATURES;

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Platform</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">{heading}</h2>
          <p className="text-muted-foreground text-lg">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 bg-background rounded-xl border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {showCta && limit && (
          <div className="text-center mt-12">
            <Link href="/features">
              <Button variant="outline" size="lg">
                Explore all features <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
