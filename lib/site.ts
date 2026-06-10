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
  { value: "< 2s", label: "average response time", sub: "instant answers, day or night" },
  { value: "99.9%", label: "uptime", sub: "reliable, always-on infrastructure" },
  { value: "4.8/5", label: "answer satisfaction", sub: "rated helpful by end users" },
  { value: "< 5 min", label: "to go live", sub: "from first upload to embedded agent" },
] as const;

export type NavItem = { label: string; href: string; description?: string };

export const MAIN_NAV: { label: string; href?: string; items?: NavItem[] }[] = [
  {
    label: "Product",
    items: [
      { label: "The Knowledge Suite", href: "/launch", description: "Knowledge Bar, Bubble & Page — three ways to deploy" },
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

/** Where sign-up / "try for free" CTAs send people so they can start using the product right away. */
export const SIGNUP_URL = "https://kagents.net/signup";

/** Where the Enterprise / "talk to us" CTA sends people — the Google appointment scheduling page. */
export const SCHEDULE_URL = "https://calendar.app.google/4dDonNoV9np8WuweA";

/** Single source of truth for plans — used by pricing section, page, and JSON-LD. */
export type Plan = {
  name: string;
  price: string;
  priceValue: number;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
  highlightFeature?: string;
  /** Render the description as the focal copy and skip the checkbox feature list (used for the Full Service plan). */
  hideFeatures?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Hobby",
    price: "$0",
    priceValue: 0,
    period: "/mo",
    description: "Try the platform and ship your first AI employee for free.",
    highlightFeature: "Best for trying things out",
    features: [
      "10 customer conversations / mo",
      "1 Knowledge Agent",
      "Training allowed on 1 file",
      "Website chat widget & chat page",
      "Lead capture forms",
      "Community support",
    ],
    cta: "Get started",
    href: SIGNUP_URL,
  },
  {
    name: "Starter",
    price: "$49",
    priceValue: 49,
    period: "/mo",
    description: "For small websites and solo founders launching their first AI employee.",
    highlightFeature: "Best for getting started",
    features: [
      "100 customer conversations / mo",
      "10 Knowledge Agents",
      "Train on files & website content",
      "Website chat widget & chat page",
      "Lead capture forms",
      "Email support",
    ],
    cta: "Get started",
    href: SIGNUP_URL,
  },
  {
    name: "Professional",
    price: "$149",
    priceValue: 149,
    period: "/mo",
    description: "For growing businesses that want agents to support customers and take action.",
    highlightFeature: "Most popular",
    popular: true,
    features: [
      "500 customer conversations / mo",
      "Unlimited Knowledge Agents",
      "Everything in Starter",
      "Advanced actions & integrations",
      "Human handoff & live takeover",
      "Conversation analytics & gap insights",
      "Priority support",
    ],
    cta: "Get started",
    href: SIGNUP_URL,
  },
  {
    name: "Business",
    price: "$399",
    priceValue: 399,
    period: "/mo",
    description: "For multi-agent teams running customer-facing and internal agents at scale.",
    highlightFeature: "Best for teams",
    features: [
      "1,500 customer conversations / mo",
      "Unlimited Knowledge Agents",
      "Everything in Professional",
      "Custom actions (your APIs)",
      "White-label & custom domains",
      "Onboarding & solution engineering",
    ],
    cta: "Get started",
    href: SIGNUP_URL,
  },
  {
    name: "Full Service Plans",
    price: "Custom",
    priceValue: 0,
    description: "Want us to set everything up for you, or need an Enterprise plan? Schedule time to speak with us.",
    highlightFeature: "Best for scale & security",
    features: [],
    hideFeatures: true,
    cta: "Schedule Time",
    href: SCHEDULE_URL,
  },
];
