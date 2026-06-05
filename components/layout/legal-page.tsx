import { PageLayout } from "@/components/layout/page-layout";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {updated}</p>
        <p className="text-lg text-foreground/80 leading-relaxed mb-10">{intro}</p>
        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold font-display mb-3">{i + 1}. {section.heading}</h2>
              <div className="space-y-3 text-foreground/80 leading-relaxed">
                {section.body.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 p-5 rounded-xl border bg-muted/20 text-sm text-muted-foreground">
          This document is provided as a general template and does not constitute legal advice. Please have your own counsel review and adapt it to your jurisdiction and business before relying on it.
        </div>
      </div>
    </PageLayout>
  );
}
