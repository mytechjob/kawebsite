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

/** Sub-navigation for the /ainative AI-Native B2B Support Platform section. */
export const AINATIVE_NAV: NavItem[] = [
  { label: "Overview", href: "/ainative", description: "The AI-native B2B support platform" },
  { label: "Platform", href: "/ainative/platform", description: "Context layer, agents & copilots" },
  { label: "Product", href: "/ainative/product", description: "Resolutions, drafts & support intelligence" },
  { label: "Revenue Intelligence", href: "/ainative/revenue-intelligence", description: "Churn, upsell & competitor signals" },
  { label: "Pricing", href: "/ainative/pricing", description: "Free platform. Pay only for outcomes." },
  { label: "Compare", href: "/ainative/compare", description: "vs. legacy ticketing platforms" },
];

/** Solutions-by-vertical links, shown as a dropdown in the main site nav. */
export const SOLUTIONS_NAV: NavItem[] = [
  { label: "Customer support", href: "/solutions/customer-support", description: "Deflect tickets, resolve faster" },
  { label: "E-commerce", href: "/solutions/ecommerce", description: "Guide shoppers and recover carts" },
  { label: "SaaS & software", href: "/solutions/saas", description: "Onboard users and cut churn" },
  { label: "Healthcare", href: "/solutions/healthcare", description: "Answer patient questions securely" },
  { label: "Real estate", href: "/solutions/real-estate", description: "Qualify and book viewings 24/7" },
  { label: "Education", href: "/solutions/education", description: "Support students around the clock" },
  { label: "Insurance", href: "/solutions/insurance", description: "Policy, billing & claims status, answered instantly" },
];

export type NewNavEntry = { label: string; href?: string; description?: string; items?: NavItem[] };

/** Primary navigation for the main marketing site (the `(site)` route group). */
export const NEW_NAV: NewNavEntry[] = [
  { label: "Home", href: "/", description: "Support → Revenue" },
  { label: "Platform", href: "/platform", description: "Context layer, agents & copilots" },
  { label: "Revenue Intelligence", href: "/revenue-intelligence", description: "Churn, upsell & competitor signals" },
  { label: "Pricing", href: "/pricing", description: "Plans that scale with your message volume" },
  { label: "Compare", href: "/compare", description: "vs. legacy ticketing platforms" },
  { label: "Solutions", items: SOLUTIONS_NAV },
];

export const MAIN_NAV: { label: string; href?: string; items?: NavItem[] }[] = [
  {
    label: "AI-Native Platform",
    items: AINATIVE_NAV,
  },
  {
    label: "Product",
    items: [
      { label: "The Knowledge Suite", href: "/knowledgebar", description: "Knowledge Bar, Bubble & Page — three ways to deploy" },
      { label: "For business & enterprise", href: "/business", description: "The full platform tour for teams" },
      { label: "Features", href: "/features", description: "Everything in the platform" },
      { label: "How it works", href: "/business#how-it-works", description: "From content to live agent in 3 steps" },
      { label: "Actions & integrations", href: "/features#actions", description: "Let agents do work, not just talk" },
      { label: "Live demo", href: "/business#demo", description: "Chat with an agent right now" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog", description: "Guides, playbooks, and product news" },
      { label: "What is a Knowledge Agent?", href: "/what-is-a-knowledge-agent", description: "The complete guide" },
      { label: "Knowledge Agents vs. chatbots", href: "/knowledgebar/compare", description: "How we're different" },
      { label: "About us", href: "/about", description: "Our mission and team" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

/** Where sign-up / "try for free" CTAs send people so they can start using the product right away. */
export const SIGNUP_URL = "https://app.knowledgeagents.com/v2/signup";

/** Where "sign in" links send existing customers. */
export const SIGNIN_URL = "https://app.knowledgeagents.com/v2/signin";

/** Where the Enterprise / "talk to us" CTA sends people — the Google appointment scheduling page. */
export const SCHEDULE_URL = "https://calendar.app.google/4dDonNoV9np8WuweA";

/*
 * The legacy per-seat PLANS array lived here and rendered on /business and the
 * old pricing page. Prices are now published in exactly one place — the plan
 * cards in app/(site)/pricing/page.tsx — so plans can be revised without
 * hunting for stale copies across the site.
 */
