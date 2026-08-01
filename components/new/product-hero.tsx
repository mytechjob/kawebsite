import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InboxMockup } from "@/components/new/inbox-mockup";
import { SIGNUP_URL } from "@/lib/site";
import { ArrowRight, Inbox, Sparkles, CircleDollarSign } from "lucide-react";

const FEATURES = [
  { icon: Inbox, title: "All-in-one", subtitle: "Omnichannel inbox" },
  { icon: Sparkles, title: "Intelligent Answers", subtitle: "Grounded in full account context" },
  { icon: CircleDollarSign, title: "Drive metrics", subtitle: "Pay for results, not seats" },
];

export function NewProductHero() {
  return (
    <section className="relative pt-10 md:pt-14">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-primary/10 via-primary/5 to-background px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-14 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-primary/10 rounded-full blur-3xl -z-10" />

          <Link
            href="/new/platform"
            className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm hover:shadow transition-shadow mb-8"
          >
            Customer support that improves revenue and enhances customer satisfaction
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-2 leading-[1.1]">
            Turbo charge your{" "}
            <span className="relative inline-block">
              customer experience
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-primary/40 rounded-full" />
            </span>
            .
          </h1>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-display font-bold tracking-tight mb-10 leading-[1.1] text-foreground/90">
            Purpose built to support your customers and your team.
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-center gap-3 rounded-full border bg-background/80 backdrop-blur px-4 py-2.5 shadow-sm text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-none">{f.title}</span>
                    <span className="block text-xs text-muted-foreground mt-1">{f.subtitle}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <Link href={SIGNUP_URL}>
            <Button size="lg" className="h-14 px-10 rounded-full text-base shadow-lg shadow-primary/20">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            <b className="text-foreground">14-day free trial</b> — Every channel &amp; seat — No card required
          </p>

          <div className="mt-14 md:mt-16 overflow-x-auto">
            <InboxMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
