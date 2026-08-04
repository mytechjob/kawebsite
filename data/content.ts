import type { LucideIcon } from "lucide-react";
import {
  Upload,
  Globe,
  Zap,
  MessagesSquare,
  Palette,
  Lock,
  BarChart3,
  Code2,
  CalendarCheck,
  Ticket,
  PackageSearch,
  UserPlus,
  RefreshCw,
  ArrowRightLeft,
  Languages,
  ShieldCheck,
  Sparkles,
  Plug,
  FileText,
  LayoutTemplate,
  Headphones,
  ShoppingCart,
  Stethoscope,
  Home as HomeIcon,
  GraduationCap,
  Building2,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Platform capabilities — shown on home + features page. */
export const FEATURES: Feature[] = [
  {
    icon: Upload,
    title: "Train on your own content",
    description:
      "Upload PDF, DOCX, TXT, and Markdown, or paste text directly. Your agent learns from your real documentation in seconds — no engineering required.",
  },
  {
    icon: Globe,
    title: "Crawl any website",
    description:
      "Point us at a URL and we crawl your docs, help center, or entire site. Re-crawl on a schedule so answers never go stale.",
  },
  {
    icon: Sparkles,
    title: "Grounded, cited answers",
    description:
      "Retrieval-Augmented Generation (RAG) keeps responses anchored to your sources with citations, so customers get accurate answers — not hallucinations.",
  },
  {
    icon: LayoutTemplate,
    title: "Chat widget or chat page",
    description:
      "Embed a chat bubble on any site with one script tag, or publish a standalone, shareable chat page with its own URL — no website needed.",
  },
  {
    icon: Palette,
    title: "Match your brand",
    description:
      "Customize colors, logo, avatar, tone of voice, and welcome messages. Your agent looks and sounds like you, not a generic bot.",
  },
  {
    icon: UserPlus,
    title: "Capture & qualify leads",
    description:
      "Collect names, emails, and intent before or during a conversation, then sync new leads straight to your CRM or inbox.",
  },
  {
    icon: BarChart3,
    title: "Conversation analytics",
    description:
      "See what customers ask, where answers fall short, and which topics drive deflection. Turn gaps into new content with one click.",
  },
  {
    icon: ArrowRightLeft,
    title: "Seamless human handoff",
    description:
      "When a conversation needs a person, agents escalate with full context to live chat, email, or your help desk — no repeating themselves.",
  },
  {
    icon: Languages,
    title: "Multilingual support",
    description:
      "Train once and answer in your customer's language automatically. Knowledge Agents detect and respond in your customers' languages out of the box.",
  },
  {
    icon: Code2,
    title: "Embed anywhere or use the API",
    description:
      "Drop in a snippet, install on Webflow, WordPress, Shopify, and more, or build fully custom experiences with our REST API.",
  },
  {
    icon: Lock,
    title: "Secure & private by default",
    description:
      "Encryption in transit and at rest, granular access controls, and a strict policy: we never train foundation models on your data.",
  },
  {
    icon: Zap,
    title: "Best models, auto-selected",
    description:
      "Run on GPT-4o, Claude, or Gemini. We route each query to the right model for quality and cost — and you can pin a model anytime.",
  },
];

export type AgentAction = {
  icon: LucideIcon;
  title: string;
  description: string;
  example: string;
};

/** Agentic actions — the differentiator: agents do work, not just answer. */
export const ACTIONS: AgentAction[] = [
  {
    icon: CalendarCheck,
    title: "Book meetings & appointments",
    description:
      "Agents check real-time availability and schedule directly into your calendar or booking tool.",
    example: "“Book me a 30-minute demo Thursday afternoon.” → Confirmed and on the calendar.",
  },
  {
    icon: Ticket,
    title: "Create & update tickets",
    description:
      "When an issue needs follow-up, the agent opens a ticket in your help desk with full context and priority.",
    example: "“My order arrived damaged.” → Ticket created in Zendesk, photos attached.",
  },
  {
    icon: PackageSearch,
    title: "Look up order status",
    description:
      "Agents query your store or backend to return live order, shipping, and account details — securely.",
    example: "“Where's order #10482?” → Out for delivery, arriving tomorrow.",
  },
  {
    icon: RefreshCw,
    title: "Process returns & changes",
    description:
      "Initiate returns, cancellations, plan changes, or refunds by calling your APIs with guardrails you define.",
    example: "“I'd like to return these shoes.” → Return label emailed instantly.",
  },
  {
    icon: UserPlus,
    title: "Qualify & route leads",
    description:
      "Ask qualifying questions, score intent, and push hot leads to sales or the right team automatically.",
    example: "Captures budget & timeline → routes enterprise leads to AE in Slack.",
  },
  {
    icon: Plug,
    title: "Run custom workflows",
    description:
      "Connect any API or tool. If it has an endpoint, your agent can trigger it with the right permissions.",
    example: "“Upgrade my plan.” → Stripe subscription updated, receipt sent.",
  },
];

export type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** 3-step how-it-works. */
export const HOW_IT_WORKS: Step[] = [
  {
    icon: Upload,
    title: "1. Add your knowledge",
    description:
      "Upload documents, paste text, or drop in a URL to crawl your website and help center. Your agent is trained in seconds with no code.",
  },
  {
    icon: Plug,
    title: "2. Connect actions",
    description:
      "Toggle on lead capture, booking, and handoff, or connect your tools so the agent can take real actions — not just answer questions.",
  },
  {
    icon: MessagesSquare,
    title: "3. Embed & go live",
    description:
      "Add a chat widget to your site with one snippet, or share a standalone chat page. Watch analytics and improve answers over time.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  metric: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We pointed Knowledge Agents at our help center and it was live before our next standup. Customers get answers in seconds now, and our team finally gets to focus on the conversations that actually need a human.",
    name: "Jimmy B.",
    role: "CEO",
    company: "AI Momentum Partners",
    initials: "JB",
    metric: "Answers in seconds",
  },
  {
    quote:
      "Setup took an afternoon. The agent answers in the customer's language and hands off to a human with full context when it needs to. It's the most responsive support we've ever offered.",
    name: "Kirk R.",
    role: "Founder",
    company: "Job Agents",
    initials: "KR",
    metric: "Live in an afternoon",
  },
  {
    quote:
      "The accuracy is what sold us — answers are grounded in our own docs, so we trust what it tells customers. Satisfaction on our AI chats has been excellent right out of the gate.",
    name: "AJ",
    role: "President",
    company: "FastBase",
    initials: "AJ",
    metric: "4.8/5 chat satisfaction",
  },
];

export type Integration = { name: string; category: string };

export const INTEGRATIONS: Integration[] = [
  { name: "Slack", category: "Notifications" },
  { name: "Zendesk", category: "Help desk" },
  { name: "Intercom", category: "Help desk" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Stripe", category: "Payments" },
  { name: "Calendly", category: "Scheduling" },
  { name: "Notion", category: "Knowledge" },
  { name: "WordPress", category: "Website" },
  { name: "Webflow", category: "Website" },
  { name: "Zapier", category: "Automation" },
];

export type Faq = { q: string; a: string };

/** Home / general FAQs — also rendered as FAQPage JSON-LD. */
export const HOME_FAQS: Faq[] = [
  {
    q: "What is a Knowledge Agent?",
    a: "A Knowledge Agent is an AI assistant you build by training it on your own content — documents, websites, help centers, and FAQs. Unlike a basic chatbot, it answers customer questions 24/7 and can take real actions like booking meetings, creating tickets, checking orders, and capturing leads. You can deploy it as a chat widget on your website or as a standalone, shareable chat page.",
  },
  {
    q: "How long does it take to build an AI agent?",
    a: "Most people go live in under five minutes. You upload a document or paste a website URL, the agent trains in seconds, then you embed it with a single snippet or publish a chat page. No coding or AI expertise is required.",
  },
  {
    q: "What can I train my Knowledge Agent on?",
    a: "You can train on PDF, DOCX, TXT, and Markdown files, pasted text, entire websites and help centers via crawling, sitemaps, and tools like Notion. You can mix multiple sources, and re-crawl on a schedule so answers stay current.",
  },
  {
    q: "How is this different from a regular chatbot?",
    a: "Traditional chatbots follow rigid decision trees and can only answer scripted questions. Knowledge Agents understand natural language, ground answers in your real content with citations, and — most importantly — take actions on the customer's behalf by securely calling your tools and APIs.",
  },
  {
    q: "Will it make up answers (hallucinate)?",
    a: "Knowledge Agents use Retrieval-Augmented Generation (RAG), which retrieves the most relevant passages from your content before answering, and cites sources. You can also configure fallback behavior — for example, capturing the question and handing off to a human when the agent isn't confident.",
  },
  {
    q: "Is my data secure and private?",
    a: "Yes. Data is encrypted in transit and at rest, access is controlled per workspace, and we never use your data to train foundation models. Enterprise plans add SSO, audit logs, and custom data-retention controls.",
  },
  {
    q: "Do I need a website to use a Knowledge Agent?",
    a: "No. You can publish a standalone chat page with its own URL that you share in a link, QR code, email signature, or social bio. If you do have a website, you can also embed the chat widget with one line of code.",
  },
  {
    q: "Which AI models does it use?",
    a: "Knowledge Agents run on leading models including GPT-4o, Claude, and Gemini. We route each query to the best model for quality and cost, and on higher plans you can pin a specific model.",
  },
];

export const PRICING_FAQS: Faq[] = [
  {
    q: "How does pricing work — are there confusing AI credits?",
    a: "No. You pick a plan based on the message volume you need each month, with a free tier to start and custom volume available on Enterprise. There are no per-message credits to track or top up. See the pricing page for current plans and rates.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Hobby plan is free forever and includes 10 customer conversations a month so you can build your agent, upload your content, and see it working before you upgrade. There's no long-term contract, and you can cancel anytime.",
  },
  {
    q: "Which plan is right for me?",
    a: "Hobby is great for testing the platform for free. Starter suits a single website or solo founder. Professional fits growing businesses that want agents to take action, hand off to humans, and surface analytics. Business is for teams running multiple customer-facing and internal agents. Enterprise adds SSO, custom data controls, and a dedicated SLA.",
  },
  {
    q: "Can I change or cancel my plan anytime?",
    a: "Absolutely. You can upgrade, downgrade, or cancel at any time from your dashboard. Upgrades take effect immediately and downgrades apply at the next billing cycle.",
  },
  {
    q: "Do you offer discounts?",
    a: "We offer discounts for nonprofits, educational institutions, and early-stage startups, as well as annual billing on every paid plan. Contact sales to learn more.",
  },
  {
    q: "Can I use my own model API key?",
    a: "On Business and Enterprise plans you can bring your own OpenAI, Anthropic, or Google API key — you pay the model provider directly while we handle everything else.",
  },
];

export type UseCaseCard = {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
};

/** Industry cards on the home page; full content lives in data/solutions.ts. */
export const USE_CASE_CARDS: UseCaseCard[] = [
  { slug: "customer-support", icon: Headphones, name: "Customer support", tagline: "Deflect tickets and resolve issues 24/7." },
  { slug: "ecommerce", icon: ShoppingCart, name: "E-commerce", tagline: "Guide shoppers, track orders, recover carts." },
  { slug: "saas", icon: Code2, name: "SaaS & software", tagline: "Onboard users and cut support load." },
  { slug: "healthcare", icon: Stethoscope, name: "Healthcare", tagline: "Answer patient questions and book visits." },
  { slug: "real-estate", icon: HomeIcon, name: "Real estate", tagline: "Qualify leads and schedule viewings." },
  { slug: "education", icon: GraduationCap, name: "Education", tagline: "Support students and applicants anytime." },
];

/** Misc icons re-exported for convenience in pages. */
export const ICONS = {
  FileText,
  ShieldCheck,
  Building2,
  Sparkles,
  Zap,
};
