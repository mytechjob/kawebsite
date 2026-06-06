import { PageLayout } from "@/components/layout/page-layout";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import { absoluteUrl, SIGNUP_URL } from "@/lib/site";
import type { Faq } from "@/data/content";
import { ArrowRight, MessageSquare, Sparkles, BookOpen, LayoutTemplate } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Knowledge Agent? The Complete Guide (2026)",
  description: "A Knowledge Agent is an AI assistant trained on your content that answers customer questions 24/7 and takes real actions like booking, ticketing, and lead capture. Learn how they work, how they differ from chatbots, and how to build one.",
  keywords: ["what is a knowledge agent", "knowledge agent definition", "AI knowledge agent", "knowledge agent vs chatbot", "AI agent for customer service", "how do knowledge agents work"],
};

const FAQS: Faq[] = [
  { q: "What is a Knowledge Agent in simple terms?", a: "A Knowledge Agent is an AI assistant you create by training it on your own content — like your help center, documents, and FAQs. It answers customer questions in natural language 24/7 and can take real actions such as booking meetings, creating support tickets, checking orders, and capturing leads. You deploy it as a chat widget on your website or as a standalone chat page with its own URL." },
  { q: "How is a Knowledge Agent different from a chatbot?", a: "Traditional chatbots follow scripted decision trees and can only handle pre-programmed questions. A Knowledge Agent understands natural language, grounds its answers in your real content using Retrieval-Augmented Generation (RAG) with citations, and can take actions by securely calling your tools and APIs — not just reply with text." },
  { q: "Do I need technical skills to build a Knowledge Agent?", a: "No. Building one is no-code: you upload content or crawl a website, customize the look and behavior, and embed it. Developers can optionally use the API and custom actions for advanced builds." },
  { q: "What can a Knowledge Agent be trained on?", a: "PDF, DOCX, TXT, and Markdown files, pasted text, entire websites and help centers via crawling, sitemaps, and tools like Notion. You can combine multiple sources into one agent and re-crawl on a schedule to stay current." },
  { q: "Where can I use a Knowledge Agent?", a: "Embed it as a chat widget on any website with one script tag, publish it as a standalone chat page to share via link or QR code, or integrate it into your product through the API." },
];

function TocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">{children}</a>;
}

export default function WhatIsKnowledgeAgentPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "What is a Knowledge Agent?", path: "/what-is-a-knowledge-agent" }]), faqSchema(FAQS), { "@context": "https://schema.org", "@type": "DefinedTerm", name: "Knowledge Agent", description: "An AI assistant trained on an organization's own content that answers customer questions 24/7 and takes real actions such as booking meetings, creating tickets, checking orders, and capturing leads.", inDefinedTermSet: absoluteUrl("/what-is-a-knowledge-agent") }]} />
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Complete guide</span>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mt-2 mb-6">What is a Knowledge Agent?</h1>
          <div className="p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 mb-10">
            <p className="text-lg leading-relaxed">A <strong>Knowledge Agent</strong> is an AI assistant you build by training it on your own content — your documents, website, help center, and FAQs. Unlike a basic chatbot, it answers customer questions in natural language <strong>24/7</strong> and can <strong>take real actions</strong> on the customer's behalf, such as booking meetings, creating support tickets, checking order status, and capturing leads. You can deploy it as a chat widget on your website or as a standalone, shareable chat page.</p>
          </div>
          <div className="mb-10 p-5 rounded-xl border bg-muted/20">
            <div className="font-bold mb-2 text-sm uppercase tracking-wide text-muted-foreground">On this page</div>
            <TocLink href="#how-they-work">How Knowledge Agents work</TocLink>
            <TocLink href="#two-forms">The two forms: widget and chat page</TocLink>
            <TocLink href="#answer-and-act">Answering questions and taking action</TocLink>
            <TocLink href="#vs-chatbot">Knowledge Agent vs. traditional chatbot</TocLink>
            <TocLink href="#use-cases">Common use cases</TocLink>
            <TocLink href="#how-to-build">How to build one</TocLink>
            <TocLink href="#benefits">Key benefits</TocLink>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <h2 id="how-they-work" className="text-2xl md:text-3xl font-bold font-display text-foreground pt-6 scroll-mt-28">How Knowledge Agents work</h2>
            <p>Knowledge Agents are powered by large language models (LLMs) combined with a technique called <strong>Retrieval-Augmented Generation (RAG)</strong>. When you add content, it's split into chunks and indexed. When a customer asks a question, the agent retrieves the most relevant passages from <em>your</em> content and uses an LLM to compose an accurate, grounded answer — with citations back to the source.</p>
            <p>This is why a Knowledge Agent can answer specific questions about <em>your</em> products, policies, and pricing, where a generic AI assistant cannot. To go deeper, read <Link href="/blog/rag-explained-for-business" className="text-primary font-medium hover:underline">RAG explained for business</Link>.</p>
            <h2 id="two-forms" className="text-2xl md:text-3xl font-bold font-display text-foreground pt-6 scroll-mt-28">The two forms: chat widget and chat page</h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              <div className="p-5 rounded-xl border bg-background"><LayoutTemplate className="w-6 h-6 text-primary mb-2" /><h3 className="font-bold text-foreground text-base mb-1">Chat widget</h3><p className="text-base">An embeddable chat bubble that lives on any website, added with a single script tag.</p></div>
              <div className="p-5 rounded-xl border bg-background"><MessageSquare className="w-6 h-6 text-primary mb-2" /><h3 className="font-bold text-foreground text-base mb-1">Chat page</h3><p className="text-base">A standalone, shareable page with its own URL — no website required. Perfect for links, QR codes, and bios.</p></div>
            </div>
            <h2 id="answer-and-act" className="text-2xl md:text-3xl font-bold font-display text-foreground pt-6 scroll-mt-28">Answering questions <em>and</em> taking action</h2>
            <p>The defining feature of a Knowledge Agent is that it does more than answer. Through <strong>agentic actions</strong>, it can call your tools to complete tasks: book an appointment, create or update a ticket, look up an order, start a return, qualify a lead, or trigger a custom workflow — all with guardrails you control. Learn more in <Link href="/blog/agentic-ai-actions-explained" className="text-primary font-medium hover:underline">agentic AI actions explained</Link>.</p>
            <h2 id="vs-chatbot" className="text-2xl md:text-3xl font-bold font-display text-foreground pt-6 scroll-mt-28">Knowledge Agent vs. traditional chatbot</h2>
            <p>A traditional chatbot follows rigid, pre-scripted decision trees and breaks the moment a customer phrases something unexpectedly. A Knowledge Agent understands natural language, answers from your real content with citations, supports 80+ languages, and takes action. See the full breakdown on our <Link href="/compare" className="text-primary font-medium hover:underline">Knowledge Agents vs. chatbots</Link> page.</p>
            <h2 id="use-cases" className="text-2xl md:text-3xl font-bold font-display text-foreground pt-6 scroll-mt-28">Common use cases</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><Link href="/solutions/customer-support" className="text-primary font-medium hover:underline">Customer support</Link> — deflect tickets and resolve issues 24/7.</li>
              <li><Link href="/solutions/ecommerce" className="text-primary font-medium hover:underline">E-commerce</Link> — product guidance, order tracking, and returns.</li>
              <li><Link href="/solutions/saas" className="text-primary font-medium hover:underline">SaaS</Link> — onboarding and technical answers inside your app.</li>
              <li><Link href="/solutions/healthcare" className="text-primary font-medium hover:underline">Healthcare</Link>, <Link href="/solutions/real-estate" className="text-primary font-medium hover:underline">real estate</Link>, and <Link href="/solutions/education" className="text-primary font-medium hover:underline">education</Link> — and many more.</li>
            </ul>
            <h2 id="how-to-build" className="text-2xl md:text-3xl font-bold font-display text-foreground pt-6 scroll-mt-28">How to build a Knowledge Agent</h2>
            <p>Building one takes about five minutes and no code: add your content (upload files or crawl a URL), shape its tone and guardrails, enable the actions you want, then embed it or publish a chat page. Follow the full walkthrough in <Link href="/blog/how-to-build-an-ai-chatbot-trained-on-your-data" className="text-primary font-medium hover:underline">how to build an AI chatbot trained on your data</Link>.</p>
            <h2 id="benefits" className="text-2xl md:text-3xl font-bold font-display text-foreground pt-6 scroll-mt-28">Key benefits</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>24/7 instant answers</strong> in 80+ languages, with no wait times.</li>
              <li><strong>Lower support costs</strong> by deflecting 60-80% of repetitive questions.</li>
              <li><strong>Real resolutions</strong> through actions, not just deflection.</li>
              <li><strong>More leads and sales</strong> from always-on, helpful conversations.</li>
              <li><strong>Accurate and on-brand</strong>, grounded in your content with citations.</li>
            </ul>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 not-prose">
            <Link href={SIGNUP_URL}><Button size="lg" className="h-12 px-8 w-full sm:w-auto">Build your Knowledge Agent <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <Link href="/features"><Button variant="outline" size="lg" className="h-12 px-8 w-full sm:w-auto">Explore features</Button></Link>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} heading="Knowledge Agent FAQ" className="py-20 bg-muted/30 border-t" />
      <CTA />
    </PageLayout>
  );
}
