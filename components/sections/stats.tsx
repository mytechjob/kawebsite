import { STATS } from "@/lib/site";

export function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold font-display mb-1">{stat.value}</div>
              <div className="font-semibold capitalize">{stat.label}</div>
              <div className="text-sm opacity-80 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
