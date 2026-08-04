import Link from "next/link";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import type { Solution } from "@/data/solutions";
import { SIGNUP_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";

export function SolutionPageBody({ solution, basePath = "/solutions" }: { solution: Solution; basePath?: string }) {
  const Icon = solution.icon;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Solutions", path: `${basePath}/${solution.slug}` }, { name: solution.name, path: `${basePath}/${solution.slug}` }]),
          faqSchema(solution.faqs),
        ]}
      />
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 border-b bg-muted/20">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5"><Icon className="w-4 h-4" /> {solution.eyebrow}</div>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-5">{solution.headline}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{solution.subhead}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={SIGNUP_URL}><Button size="lg" className="h-12 px-8 w-full sm:w-auto">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <Link href="/business#demo"><Button variant="outline" size="lg" className="h-12 px-8 w-full sm:w-auto">See it in action</Button></Link>
            </div>
          </div>
          <div className="bg-background border rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 bg-primary text-primary-foreground flex items-center gap-3"><div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">KA</div><div><div className="font-bold text-sm">{solution.name} Agent</div><div className="text-xs opacity-80">Online • answers instantly</div></div></div>
            <div className="p-5 space-y-4 bg-muted/10">
              {solution.sampleChat.map((m, i) => (<div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}><div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-line ${m.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-background border rounded-tl-none"}`}>{m.text}</div></div>))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16"><div className="container mx-auto px-4 max-w-3xl text-center"><p className="text-xl leading-relaxed text-foreground/80">{solution.intro}</p></div></section>
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold font-display text-center mb-10">The challenges you're facing</h2><div className="grid sm:grid-cols-2 gap-4">{solution.challenges.map((c) => (<div key={c} className="flex items-start gap-3 p-5 bg-background rounded-xl border"><X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" /><span className="text-foreground/80">{c}</span></div>))}</div></div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14"><span className="text-sm font-semibold uppercase tracking-wider text-primary">The solution</span><h2 className="text-3xl md:text-4xl font-bold font-display mt-2">How Knowledge Agents help {solution.name.toLowerCase()} teams</h2></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">{solution.capabilities.map((cap) => (<div key={cap.title} className="p-6 bg-background rounded-xl border"><div className="flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-primary" /><h3 className="text-lg font-bold">{cap.title}</h3></div><p className="text-muted-foreground">{cap.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div><span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary"><Sparkles className="w-4 h-4" /> Actions it can take</span><h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-6">Resolutions, not just replies</h2><ul className="space-y-3">{solution.actions.map((a) => (<li key={a} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></span><span className="text-foreground/80">{a}</span></li>))}</ul></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 content-start">{solution.results.map((r) => (<div key={r.label} className="p-6 bg-background rounded-xl border text-center lg:text-left lg:flex lg:items-baseline lg:gap-3"><div className="text-3xl font-bold font-display text-primary">{r.value}</div><div className="text-muted-foreground">{r.label}</div></div>))}</div>
        </div>
      </section>
      <FAQ faqs={solution.faqs} heading={`${solution.name} FAQ`} className="py-24" />
      <CTA title={`Ready to transform your ${solution.name.toLowerCase()}?`} subtitle="Build your first Knowledge Agent and see results in minutes — preview everything before you go live." />
    </>
  );
}
