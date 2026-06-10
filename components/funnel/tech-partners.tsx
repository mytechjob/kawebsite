/**
 * Technology-partner strip — credibility through the AI ecosystem the
 * platform is built on. Logo marks are self-hosted in /public/logos
 * (uniform slate tone) so there's no runtime dependency on a logo CDN.
 */

type Partner = {
  company: string;
  product: string;
  logo: string;
};

const PARTNERS: Partner[] = [
  { company: "Anthropic", product: "Claude", logo: "/logos/anthropic.svg" },
  { company: "Google", product: "Gemini", logo: "/logos/gemini.svg" },
  { company: "OpenAI", product: "ChatGPT", logo: "/logos/openai.svg" },
  { company: "Microsoft", product: "Azure AI", logo: "/logos/microsoft.svg" },
];

export function TechPartners() {
  return (
    <section className="py-12 border-y bg-muted/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Built on the world&apos;s leading AI platforms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
          {PARTNERS.map((p) => (
            <div
              key={p.company}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={p.logo} alt={`${p.company} logo`} className="w-7 h-7" loading="lazy" />
              <div className="leading-tight">
                <div className="font-display font-bold text-foreground/80">{p.company}</div>
                <div className="text-xs text-muted-foreground">{p.product}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Your agent runs on the best models from across the ecosystem — every question is routed
          to the right one for quality and cost, automatically.
        </p>
      </div>
    </section>
  );
}
