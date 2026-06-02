import { TESTIMONIALS } from "@/data/content";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Customer stories</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">
            Loved by support, sales, and success teams
          </h2>
          <div className="flex items-center justify-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-muted-foreground text-sm font-medium">
              4.8/5 average from 1,200+ teams
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="p-8 bg-background rounded-2xl border shadow-sm flex flex-col"
            >
              <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                {t.metric}
              </div>
              <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6 flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {t.role}, {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
