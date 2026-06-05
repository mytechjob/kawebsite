/**
 * Central site configuration — single source of truth for branding, SEO,
 * navigation, and structured-data defaults. Change the domain in one place.
 */

export const SITE = {
  name: "Knowledge Agents",
  legalName: "Knowledge Agents, Inc.",
  /** Canonical production origin (no trailing slash). */
  url: "https://www.knowledgeagents.com",
  domain: "knowledgeagents.com",
  tagline: "Build AI agents that answer questions and take action",
  description:
    "Knowledge Agents is the no-code platform to build AI chatbots and chat pages trained on your content. Answer customer questions 24/7 and take real actions — book meetings, create tickets, check orders, and capture leads.",
  /** Default social-share image served from /public. */
  ogImage: "/opengraph.jpg",
  twitter: "@knowledgeagents",
  email: "hello@knowledgeagents.com",
  supportEmail: "support@knowledgeagents.com",
  foundedYear: 2023,
  social: {
    twitter: "https://twitter.com/knowledgeagents",
    github: "https://github.com/knowledgeagents",
    linkedin: "https://www.linkedin.com/company/knowledgeagents",
  },
} as const;

/** Absolute URL helper for canonicals and structured data. */
export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * SEO + GEO keyword universe. Grouped so individual pages can compose the
 * relevant clusters. GEO = Generative Engine Optimization (ranking inside
 * AI answer engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews).
 */
export const KEYWORDS = {
  core: [
    "knowledge agent",
    "AI knowledge agent",
    "AI chatbot builder",
    "custom AI chatbot",
    "AI agent for customer service",
    "chatbot trained on your data",
    "no-code AI agent",
    "conversational AI platform",
  ],
  support: [
    "AI customer support agent",
    "customer support automation",
    "automate customer service with AI",
    "AI help desk",
    "reduce support tickets with AI",
    "24/7 customer support AI",
    "self-service support AI",
    "AI ticket deflection",
  ],
  agentic: [
    "AI agent that takes actions",
    "agentic AI customer support",
    "AI agent book appointments",
    "AI agent create support ticket",
    "AI agent check order status",
    "action-taking chatbot",
    "AI workflow automation chatbot",
  ],
  build: [
    "train chatbot on PDF",
    "train chatbot on website",
    "embed AI chatbot on website",
    "GPT chatbot for business",
    "AI chatbot from documentation",
    "build a chatbot without code",
    "website chatbot widget",
    "AI chat page",
  ],
  geo: [
    "what is a knowledge agent",
    "best AI chatbot for customer support 2026",
    "AI chatbot vs live chat",
    "RAG chatbot for business",
    "retrieval augmented generation customer support",
    "generative engine optimization for support",
  ],
} as const;

export const allKeywords = (...groups: (keyof typeof KEYWORDS)[]) =>
  Array.from(
    new Set(
      (groups.length ? groups : (Object.keys(KEYWORDS) as (keyof typeof KEYWORDS)[]))
        .flatMap((g) => KEYWORDS[g]),
    ),
  );

/** Headline metrics reused across hero, stats, and structured data. */
export const STATS = [
  { value: "12M+", label: "questions answered", sub: "across customer chats every month" },
  { value: "73%", label: "average ticket deflection", sub: "fewer tickets reaching human agents" },
  { value: "4.8/5", label: "answer satisfaction", sub: "rated helpful by end users" },
  { value: "< 5 min", label: "to go live", sub: "from first upload to embedded agent" },
] as const;

export type NavItem = { label: string; href: string; description?: string };

export const MAIN_NAV: { label: string; href?: string; items?: NavItem[] }[] = [
  {
    label: "Product",
    items: [
      { label: "Features", href: "/features", description: "Everything in the platform" },
      { label: "How it works", href: "/#how-it-works", description: "From content to live agent in 3 steps" },
      { label: "Actions & integrations", href: "/features#actions", description: "Let agents do work, not just talk" },
      { label: "Live demo", href: "/#demo", description: "Chat with an agent right now" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Customer support", href: "/solutions/customer-support", description: "Deflect tickets, resolve faster" },
      { label: "E-commerce", href: "/solutions/ecommerce", description: "Guide shoppers and recover carts" },
      { label: "SaaS & software", href: "/solutions/saas", description: "Onboard users and cut churn" },
      { label: "Healthcare", href: "/solutions/healthcare", description: "Answer patient questions securely" },
      { label: "Real estate", href: "/solutions/real-estate", description: "Qualify and book viewings 24/7" },
      { label: "Education", href: "/solutions/education", description: "Support students around the clock" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog", description: "Guides, playbooks, and product news" },
      { label: "What is a Knowledge Agent?", href: "/what-is-a-knowledge-agent", description: "The complete guide" },
      { label: "Knowledge Agents vs. chatbots", href: "/compare", description: "How we're different" },
      { label: "About us", href: "/about", description: "Our mission and team" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

/** Single source of truth for plans — used by pricing section, page, and JSON-LD. */
export type Plan = {
  name: string;
  price: string;
  priceValue: number;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlightFeature?: string;
};

export const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    priceValue: 0,
    description: "Test the platform and ship your first agent.",
    highlightFeature: "Best for trying things out",
    features: [
      "1 Knowledge Agent",
      "100 message credits / mo",
      "400K training characters",
      "Embed on unlimited websites",
      "Lead capture forms",
      "Community support",
    ],
    cta: "Start free",
  },
  {
    name: "Hobby",
    price: "$19",
    priceValue: 19,
    period: "/mo",
    description: "For creators, freelancers, and small sites.",
    highlightFeature: "Most popular for individuals",
    popular: true,
    features: [
      "5 Knowledge Agents",
      "2,000 message credits / mo",
      "11M training characters",
      "Website crawling & file uploads",
      "API access",
      "Basic actions (lead capture, email)",
      "Remove branding (add-on)",
    ],
    cta: "Start free trial",
  },
  {
    name: "Standard",
    price: "$99",
    priceValue: 99,
    period: "/mo",
    description: "For growing support and success teams.",
    highlightFeature: "Best for growing teams",
    features: [
      "10 Knowledge Agents",
      "10,000 message credits / mo",
      "Unlimited training characters",
      "3 team members",
      "Advanced actions & integrations",
      "Human handoff & live takeover",
      "Analytics & conversation insights",
      "GPT-4o, Claude, and Gemini models",
    ],
    cta: "Start free trial",
  },
  {
    name: "Unlimited",
    price: "$399",
    priceValue: 399,
    period: "/mo",
    description: "For agencies, platforms, and high volume.",
    highlightFeature: "Best for scale & agencies",
    features: [
      "40 Knowledge Agents",
      "40,000 message credits / mo",
      "White-label & custom domains",
      "Unlimited team members",
      "Custom actions & private integrations",
      "SSO, audit logs & roles",
      "Priority support & SLA",
      "Onboarding & solution engineering",
    ],
    cta: "Talk to sales",
  },
];
