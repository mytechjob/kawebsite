import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  DollarSign,
  LineChart,
  Sparkles,
  Database,
  Building2,
  Inbox,
  Bot,
  PenLine,
  Eye,
  Layers,
  FileEdit,
  TrendingDown,
  TrendingUp,
  Radar,
  Gauge,
  Route,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

/** Six pillars of the AI-native positioning — shown on the /ainative hub page. */
export type Pillar = { icon: LucideIcon; title: string; description: string };

export const PILLARS: Pillar[] = [
  {
    icon: Rocket,
    title: "Free to start",
    description:
      "The full platform — every channel, every seat, unlimited agents — is free to start on. You're never blocked from trying AI-native support because of a seat count.",
  },
  {
    icon: DollarSign,
    title: "Outcome-based pricing available",
    description:
      "Pay for results, not attempts. Our outcome-based track charges for resolutions, churn saves, and upsells the AI actually delivers — not per seat or per message.",
  },
  {
    icon: LineChart,
    title: "Dollar-tracked ROI",
    description:
      "Resolution rate, churn prevented, and upsell pipeline created are tracked automatically and rolled up into a single revenue-impact number your CFO will understand.",
  },
  {
    icon: Sparkles,
    title: "AI-native, not bolted on",
    description:
      "Built from the ground up for the AI era — context, resolution, and routing are one system, not a legacy ticket queue with a chatbot glued on top.",
  },
  {
    icon: Database,
    title: "Full account context",
    description:
      "Every conversation is enriched with CRM stage, billing status, and product usage before the agent — human or AI — ever replies.",
  },
  {
    icon: Building2,
    title: "Built for B2B",
    description:
      "Designed for growing B2B teams, with the integrations, routing, and roadmap that consumer-support tools were never built to handle.",
  },
];

/** Six-step how-it-works flow for the AI-native platform. */
export type AinativeStep = { icon: LucideIcon; title: string; description: string };

export const AINATIVE_HOW_IT_WORKS: AinativeStep[] = [
  {
    icon: Inbox,
    title: "1. Unify every channel",
    description: "Email, chat, in-app, Slack Connect, and WhatsApp thread into one shared inbox with shared automations — no more switching tabs.",
  },
  {
    icon: Database,
    title: "2. Connect your context layer",
    description: "Sync your knowledge base, ticket history, CRM, billing, and product usage so every reply starts with the full picture.",
  },
  {
    icon: Bot,
    title: "3. Resolve with confidence",
    description: "The AI agent loads full account context and only resolves when it's confident — correctness over speed, every time.",
  },
  {
    icon: PenLine,
    title: "4. Draft for your team",
    description: "When a conversation needs a human, the agent writes a complete, cited draft — your team edits and sends instead of starting cold.",
  },
  {
    icon: Radar,
    title: "5. Detect revenue signals",
    description: "Every conversation is scanned in real time for churn language, upsell requests, competitor mentions, and feature gaps.",
  },
  {
    icon: Route,
    title: "6. Route intelligently",
    description: "Signals route the same day to the right team — CS for churn risk, sales for upsell, product for feature requests.",
  },
];

/** The platform, layer by layer — /ainative/platform. */
export type PlatformLayer = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const PLATFORM_LAYERS: PlatformLayer[] = [
  {
    icon: Database,
    name: "The Context Layer",
    tagline: "Everything about an account, in one place",
    description:
      "Before any conversation is answered, the context layer unifies your knowledge base, ticket history, CRM, billing, and product usage into a single account view — so no reply, human or AI, ever starts from zero.",
    bullets: [
      "Syncs help center & docs automatically",
      "Pulls CRM stage and billing history",
      "Tracks product usage and engagement signals",
      "Keeps context current without manual updates",
    ],
  },
  {
    icon: Inbox,
    name: "Omnichannel Inbox",
    tagline: "Every channel, one queue",
    description:
      "Email, live chat, in-app messaging, Slack Connect, and WhatsApp all land in one shared inbox with shared assignment rules and automations — so your team stops re-learning workflows per channel.",
    bullets: [
      "Shared views and assignment rules",
      "One customer timeline across every channel",
      "Works alongside your existing help desk",
      "No per-channel setup or duplicate configuration",
    ],
  },
  {
    icon: Layers,
    name: "AI Knowledge Base",
    tagline: "A living source of truth",
    description:
      "Your help center, docs, and internal macros become a knowledge base the AI agent and your team can search and cite together — flagged for gaps and kept current instead of quietly going stale.",
    bullets: [
      "Auto-organizes docs, macros, and FAQs",
      "Flags outdated or missing articles",
      "Every AI answer cites its source",
      "One source of truth for humans and AI alike",
    ],
  },
  {
    icon: Bot,
    name: "Knowledge Agent",
    tagline: "The AI agent that resolves, not just replies",
    description:
      "Our AI agent loads the full account context before responding, and only resolves a conversation when it's confident in the answer — prioritizing correctness over speed, and escalating instead of guessing.",
    bullets: [
      "Full account context before every reply",
      "Confidence-gated autonomous resolution",
      "Takes real actions, not just answers",
      "Escalates with full context when unsure",
    ],
  },
  {
    icon: PenLine,
    name: "Agent Copilot",
    tagline: "The AI assistant for your human team",
    description:
      "For conversations that need a person, the copilot writes a complete draft with sources cited inline — your team reviews and sends instead of composing a reply from scratch.",
    bullets: [
      "Full draft, not just a suggestion",
      "Citations linked to source documents",
      "Adapts to your team's tone over time",
      "Cuts first-response time significantly",
    ],
  },
  {
    icon: Eye,
    name: "Account Intelligence",
    tagline: "Know who you're talking to",
    description:
      "Every conversation is enriched with plan, billing status, CRM stage, and usage trend, so agents — human and AI — always know the account's health before they type a word.",
    bullets: [
      "CRM, billing, and usage in one view",
      "Health score per account",
      "Context surfaced automatically, not looked up",
      "Powers smarter routing and prioritization",
    ],
  },
];

/** Product capabilities — /ainative/product. */
export type AinativeFeature = { icon: LucideIcon; name: string; description: string };

export const AINATIVE_PRODUCT_FEATURES: AinativeFeature[] = [
  {
    icon: CheckCircle2,
    name: "Resolutions",
    description:
      "Fully autonomous, confidence-gated resolution across every channel. The agent only closes a conversation when it's sure — and hands off with full context when it's not.",
  },
  {
    icon: PenLine,
    name: "Drafts",
    description:
      "For tickets that need a human, the AI writes a complete reply with account context and sources cited inline. Your team edits and sends, instead of typing from scratch.",
  },
  {
    icon: Inbox,
    name: "Support Platform",
    description:
      "One inbox for every channel — email, chat, in-app, Slack Connect, and WhatsApp — with shared views, assignment rules, and automations built in.",
  },
  {
    icon: FileEdit,
    name: "Article Creation",
    description:
      "Resolved conversations are automatically turned into new help-center articles, closing knowledge gaps without a dedicated writer on the team.",
  },
  {
    icon: LineChart,
    name: "Support Intelligence",
    description:
      "Real-time analytics on resolution rate, deflection, topic gaps, and team performance — so you know exactly where the AI is winning and where it needs more context.",
  },
];

/** Revenue signals — /ainative/revenue-intelligence. */
export type RevenueSignal = { icon: LucideIcon; name: string; description: string; routesTo: string };

export const REVENUE_SIGNALS: RevenueSignal[] = [
  {
    icon: TrendingDown,
    name: "Churn Detection",
    description:
      "Every conversation is scanned for churn language — \"cancel,\" \"switching to,\" \"not worth it anymore\" — the moment it's typed, not after the ticket closes.",
    routesTo: "Routes same-day to the account's CSM",
  },
  {
    icon: TrendingUp,
    name: "Upsell Signals",
    description:
      "Plan-limit hits, feature requests beyond the current tier, and expansion language are flagged automatically instead of getting lost in a resolved ticket.",
    routesTo: "Routes same-day to the account owner",
  },
  {
    icon: Radar,
    name: "Competitor Mentions",
    description:
      "When customers name-drop an alternative, you find out immediately — not months later in a churn post-mortem — so you can respond while it still matters.",
    routesTo: "Routes to CS leadership & product marketing",
  },
  {
    icon: Gauge,
    name: "Revenue Center",
    description:
      "One dashboard ties support activity to dollars: resolution rate, churn prevented, and upsell pipeline created, tracked automatically across every conversation.",
    routesTo: "Rolls up into a single ROI number for leadership",
  },
];

export const REVENUE_PHILOSOPHY = {
  quote:
    "Support was never supposed to be a cost center. It's the front row of every customer relationship you have — the AI-native platform just makes that value visible.",
};

/** Outcome types for the /ainative/pricing narrative. */
export type Outcome = { icon: LucideIcon; name: string; youPayWhen: string; youDontPayFor: string };

export const OUTCOMES: Outcome[] = [
  {
    icon: CheckCircle2,
    name: "Resolution",
    youPayWhen: "The AI agent fully resolves a conversation with no human involved.",
    youDontPayFor: "Drafts, escalations, or conversations a person ultimately handles.",
  },
  {
    icon: HeartHandshake,
    name: "Save",
    youPayWhen: "A churn signal is caught, routed, and the account is retained.",
    youDontPayFor: "Signals that are flagged but don't result in a retained account.",
  },
  {
    icon: TrendingUp,
    name: "Upsell",
    youPayWhen: "An expansion opportunity the AI surfaced actually closes.",
    youDontPayFor: "Every upsell flag — only the ones that convert into revenue.",
  },
];

export type Faq = { q: string; a: string };

export const AINATIVE_FAQS: Faq[] = [
  {
    q: "What does \"AI-native\" mean, exactly?",
    a: "It means the context layer, the AI agent, the human copilot, and the revenue-signal routing were designed together as one system from the start — not a legacy ticketing queue with a chatbot added on top. Every layer shares the same account context.",
  },
  {
    q: "How is this different from Knowledge Agents' standard plans?",
    a: "Our standard plans (see /pricing) are flat monthly tiers built around the Knowledge Suite — chat widgets and chat pages for any business. The AI-native platform described here is our B2B support positioning: an omnichannel inbox, account-context AI agent, and revenue-signal routing, with an outcome-based pricing track available alongside our standard plans.",
  },
  {
    q: "What counts as a resolution versus a draft?",
    a: "A resolution is a conversation the AI agent closes entirely on its own, with no human edit or send. A draft is a complete AI-written reply that a teammate reviews and sends — the agent still does the writing, but a human stays in the loop.",
  },
  {
    q: "Do we have to replace our existing help desk?",
    a: "No. The omnichannel inbox and context layer are designed to sit alongside your existing tools — CRM, billing, and help-desk data sync in rather than requiring a rip-and-replace migration.",
  },
  {
    q: "Is our data used to train foundation models?",
    a: "No. Your content and conversations are used only to power your own agents. We never train third-party foundation models on customer data.",
  },
  {
    q: "How fast can a B2B team go live on this?",
    a: "Most teams connect their knowledge base and CRM and see the AI agent handling its first conversations within days, not months — the context layer is built to sync from your existing tools rather than requiring a data migration project.",
  },
];

export const PRICING_FAQS: Faq[] = [
  {
    q: "Is the platform really free, or is that a bait-and-switch?",
    a: "The platform — every channel, unlimited seats, the full inbox — is free to use. You only pay under the outcome-based track when the AI delivers a defined result: a resolution, a churn save, or a closed upsell. If the AI doesn't deliver, you don't pay for that conversation.",
  },
  {
    q: "How is pricing calculated?",
    a: "Outcome-based pricing is scoped to your team's volume and mix of resolutions, saves, and upsells. Because it depends on your workspace's outcome volume, we price it directly with you rather than publishing a one-size-fits-all rate card — talk to us for a quote.",
  },
  {
    q: "Can we use flat monthly pricing instead?",
    a: "Yes. Our standard per-seat plans on /pricing remain available if you'd rather budget with a predictable flat monthly fee instead of outcome-based billing. You can start on either track.",
  },
  {
    q: "What stops the AI from resolving things badly just to hit outcome counts?",
    a: "The agent is confidence-gated: it only marks a conversation resolved when it's confident in the answer, and escalates otherwise. Support Intelligence tracks resolution quality alongside volume, so outcome counts never come at the expense of accuracy.",
  },
  {
    q: "Is this pricing model available today?",
    a: "Outcome-based pricing is rolling out for AI-native B2B teams. Reach out and we'll walk you through availability and a quote for your workspace.",
  },
];

export const COMPARE_FAQS: Faq[] = [
  {
    q: "What's the difference between \"AI-native\" and a legacy platform with AI features?",
    a: "Legacy platforms were built around a ticketing model from before AI existed, then had a chatbot or AI reply-suggestion feature added later. An AI-native platform is designed around the AI agent and account context from day one — routing, knowledge, and resolution are one connected system, not separate features bolted together.",
  },
  {
    q: "Isn't a point-solution AI chatbot simpler to set up?",
    a: "A narrow chatbot can be quick to deploy for FAQ deflection, but it typically can't see CRM or billing context, doesn't route revenue signals, and can't take real actions like updating a subscription. It solves one slice of support, not the full account relationship.",
  },
  {
    q: "Will switching from our current platform mean starting over?",
    a: "No. The context layer is built to sync from your existing knowledge base, CRM, and ticket history, so most teams migrate their content and history rather than rebuilding it from scratch.",
  },
];
