import { PageLayout, PageHero } from "@/components/layout/page-layout";
import { Features } from "@/components/sections/features";
import { Actions } from "@/components/sections/actions";
import { Integrations } from "@/components/sections/integrations";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { allKeywords } from "@/lib/site";
import { Check, Upload, Globe, FileText, StickyNote, Code2, LayoutTemplate, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | AI Agents That Answer & Take Action",
  description: "Explore Knowledge Agents features: train on any content, take real actions, deploy as a widget or chat page, analytics, multilingual support, human handoff, and enterprise-grade security.",
  keywords: allKeywords("build", "agentic", "core"),
};

const trainingSources = [
  { icon: FileText, label: "PDF, DOCX, TXT & Markdown files" },
  { icon: Globe, label: "Website & help-center crawling" },
  { icon: StickyNote, label: "Pasted text, FAQs & notes" },
  { icon: Upload, label: "Notion, sitemaps & bulk import" },
];

const deployOptions = [
  { icon: LayoutTemplate, title: "Website widget", text: "One script tag adds a chat bubble to any site — Webflow, WordPress, Shopify, or custom." },
  { icon: Globe, title: "Standalone chat page", text: "Publish a shareable page with its own URL. Drop it in a link, QR code, or email signature." },
  { icon: Code2, title: "REST API", text: "Build fully custom experiences and embed agents inside your authenticated product." },
];

export default function FeaturesPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Features", path: "/features" }])} />
      <PageHero eyebrow="Platform" title="Everything you need to build agents that get work done" description="Knowledge Agents combine accurate, grounded answers with real action-taking — so your customers get resolutions, not just replies. No code required." />
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Train in seconds</span>
            <h2 className="text-3xl font-bold font-display mt-2 mb-4">Bring your knowledge from anywhere</h2>
            <p className="text-muted-foreground text-lg mb-6">Upload files, paste text, or point us at a URL. Your agent is trained in seconds and uses Retrieval-Augmented Generation to keep every answer grounded in your content — with citations. Schedule re-crawls so answers never go stale.</p>
            <ul className="space-y-3">
              {trainingSources.map((s) => { const Icon = s.icon; return (<li key={s.label} className="flex items-center gap-3"><span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-primary" /></span><span className="font-medium">{s.label}</span></li>); })}
            </ul>
          </div>
          <div className="bg-muted/30 border rounded-2xl p-6 shadow-sm">
            <div className="space-y-3">
              {["Help_Center.pdf", "yoursite.com/docs", "Returns_Policy.docx", "Product FAQ (pasted)"].map((src, i) => (<div key={src} className="flex items-center justify-between p-3 bg-background rounded-lg border"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</div><span className="text-sm font-medium">{src}</span></div><span className="text-xs text-green-600 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Trained</span></div>))}
            </div>
          </div>
        </div>
      </section>
      <Features showCta={false} />
      <Actions />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14"><span className="text-sm font-semibold uppercase tracking-wider text-primary">Deploy anywhere</span><h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Three ways to put your agent to work</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {deployOptions.map((opt) => { const Icon = opt.icon; return (<div key={opt.title} className="p-8 bg-background rounded-2xl border text-center"><div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-bold mb-2">{opt.title}</h3><p className="text-muted-foreground">{opt.text}</p></div>); })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">Secure & private by default</h2>
          <p className="text-muted-foreground text-lg">Data is encrypted in transit and at rest, scoped per workspace, and never used to train foundation models. Enterprise plans add SSO, audit logs, role-based access, and custom data-retention controls.</p>
        </div>
      </section>
      <Integrations />
      <HowItWorks />
      <CTA />
    </PageLayout>
  );
}
