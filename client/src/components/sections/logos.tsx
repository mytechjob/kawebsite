const companies = ["ACME Corp", "GlobalTech", "Nebula AI", "Starlight", "Vertex", "Loft & Co."];

export function Logos() {
  return (
    <div className="py-10 border-y bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          Trusted by innovative teams in support, sales, and e-commerce
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60">
          {companies.map((c) => (
            <span key={c} className="text-lg md:text-xl font-bold font-display text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
