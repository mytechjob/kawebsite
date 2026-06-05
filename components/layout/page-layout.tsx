import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4 text-center max-w-3xl">
        {eyebrow && <span className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>}
        <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-5">{title}</h1>
        {description && <p className="text-lg md:text-xl text-muted-foreground">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
