import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bullets?: string[];
}

export function CTA({
  title = "Ready to build your Knowledge Agent?",
  subtitle = "Join thousands of teams using Knowledge Agents to answer questions and take action for their customers — 24/7.",
  primaryLabel = "Schedule Demo",
  primaryHref = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1tEk3D-k8vjST9p-FTVrrSsa3PF-Dcawmc19Q-mUj6nrvW128yo1sDiw4_9nYb-Wi1hzvRVSLj",
  secondaryLabel = "See pricing",
  secondaryHref = "/pricing",
  bullets = ["Free plan forever", "Live in 5 minutes", "Cancel anytime"],
}: CTAProps) {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground px-6 py-16 md:px-16 md:py-20 text-center shadow-xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-5">{title}</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {isExternal(primaryHref) ? (
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base w-full sm:w-auto bg-background text-foreground hover:bg-background/90"
                  >
                    {primaryLabel} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              ) : (
                <Link href={primaryHref}>
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base w-full sm:w-auto bg-background text-foreground hover:bg-background/90"
                  >
                    {primaryLabel} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              )}
              <Link href={secondaryHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base w-full sm:w-auto border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {secondaryLabel}
                </Button>
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm opacity-90">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
