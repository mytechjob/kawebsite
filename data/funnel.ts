import type { LucideIcon } from "lucide-react";
import {
  Search,
  MessageCircle,
  FileText,
  SearchX,
  MoonStar,
  FolderX,
  Upload,
  LayoutTemplate,
  Rocket,
} from "lucide-react";
import type { Faq } from "@/data/content";

/* ------------------------------------------------------------------ */
/*  Copy for the home-page sales funnel — single source of truth.      */
/* ------------------------------------------------------------------ */

export type SuiteProduct = {
  id: "bar" | "bubble" | "page";
  icon: LucideIcon;
  name: string;
  /** Short label used on the showcase tabs. */
  tab: string;
  tagline: string;
  description: string;
  bullets: string[];
  /** One-line outcome statement shown under the mockup. */
  outcome: string;
};

export const SUITE_PRODUCTS: SuiteProduct[] = [
  {
    id: "bar",
    icon: Search,
    name: "Knowledge Bar",
    tab: "Bar",
    tagline: "Turn any website or app into an AI application",
    description:
      "Drop one line of code into any website or application and it gains an intelligent answer bar. Visitors stop hunting through menus and just ask — and get instant, cited answers drawn from your own content.",
    bullets: [
      "Works on any site or app — WordPress, Shopify, Webflow, or fully custom",
      "Answers are grounded in your content with citations, not guesses",
      "Suggested prompts steer visitors toward demos, sign-ups, and purchases",
      "Visitors get answers in under 2 seconds, day or night",
    ],
    outcome: "Visitors who ask, stay. Visitors who search and fail, leave.",
  },
  {
    id: "bubble",
    icon: MessageCircle,
    name: "Knowledge Bubble",
    tab: "Bubble",
    tagline: "Virtual agents your visitors can actually talk to",
    description:
      "A friendly virtual agent lives in the corner of your site, ready around the clock. It answers in your customer's language, captures leads, books meetings, opens tickets — and hands off to a human with full context when it matters.",
    bullets: [
      "A branded avatar that talks like you — not a generic bot",
      "Takes real action: books meetings, creates tickets, checks orders",
      "Captures and qualifies leads while you sleep",
      "Escalates to your team with the full conversation attached",
    ],
    outcome: "Every 2 AM question becomes a captured lead, not a lost customer.",
  },
  {
    id: "page",
    icon: FileText,
    name: "Knowledge Page",
    tab: "Page",
    tagline: "Where your team's knowledge becomes a product",
    description:
      "Your team collaborates on content in one living workspace — then publishes it as a standalone, shareable AI page with its own URL. No website required. Share it in a link, a QR code, or an email signature.",
    bullets: [
      "Teams draft, review, and refine content together in one place",
      "Publish as an interactive AI page customers can question directly",
      "Share anywhere with a URL or QR code — no website needed",
      "Update once and every answer everywhere stays current",
    ],
    outcome: "One source of truth your team maintains — and your customers can talk to.",
  },
];

export type Leak = {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
  fixedBy: string;
};

/** Problem-agitation section: the three places a website leaks revenue. */
export const LEAKS: Leak[] = [
  {
    icon: SearchX,
    stat: "Leak #1",
    title: "Visitors search, don't find, and leave",
    description:
      "Most visitors won't dig through your menus or docs to find an answer. They bounce — and almost none of them ever come back.",
    fixedBy: "Knowledge Bar",
  },
  {
    icon: MoonStar,
    stat: "Leak #2",
    title: "Questions arrive at 2 AM. Nobody answers.",
    description:
      "Buyers research after hours. Every unanswered question overnight is a hot lead going cold — usually straight to a competitor who replied first.",
    fixedBy: "Knowledge Bubble",
  },
  {
    icon: FolderX,
    stat: "Leak #3",
    title: "Your knowledge lives in 14 different places",
    description:
      "Docs in one tool, FAQs in another, tribal knowledge in someone's head. Customers get inconsistent answers and your team repeats themselves all day.",
    fixedBy: "Knowledge Page",
  },
];

export type FunnelStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    icon: Upload,
    title: "Feed it your knowledge",
    description:
      "Upload documents or point us at your website. Your agent trains on your real content in seconds — no code, no AI expertise.",
  },
  {
    icon: LayoutTemplate,
    title: "Pick your surface",
    description:
      "Launch a Knowledge Bar, a Knowledge Bubble, a Knowledge Page — or all three. One brain, trained once, everywhere your customers are.",
  },
  {
    icon: Rocket,
    title: "Go live and watch it convert",
    description:
      "Embed with one snippet and go live in minutes. Watch conversations, captured leads, and booked meetings roll in — with analytics on every answer.",
  },
];

/** What you get the moment you start — the value stack on the offer section. */
export const VALUE_STACK = [
  "An AI agent trained on your own content — live in about 5 minutes",
  "All three surfaces: Knowledge Bar, Bubble, and Page",
  "Real actions: book meetings, create tickets, capture and route leads",
  "Answers in 80+ languages, grounded in your sources with citations",
  "Conversation analytics that show you exactly what customers want",
  "Free plan to start — no credit card, cancel anytime",
];

/** Objection-handling FAQs specific to the funnel. */
export const FUNNEL_FAQS: Faq[] = [
  {
    q: "Do I need all three products?",
    a: "No — they share one brain. You train your Knowledge Agent once on your content, then deploy it as a Bar, a Bubble, a Page, or all three. Most teams start with one surface and turn on the others when they see the conversations coming in. Every plan includes access to all three.",
  },
  {
    q: "Will it work on my website or app?",
    a: "Yes. The Knowledge Bar and Knowledge Bubble install with a single script tag and work on WordPress, Shopify, Webflow, Wix, and fully custom sites or web apps. The Knowledge Page doesn't need a website at all — it's a standalone URL you can share anywhere.",
  },
  {
    q: "How long does it really take to launch?",
    a: "Most people go live in under five minutes: upload a document or paste your website URL, the agent trains in seconds, then you copy one snippet onto your site or publish your page. No developers required.",
  },
  {
    q: "What if it gives customers a wrong answer?",
    a: "Answers are grounded in your own content using Retrieval-Augmented Generation and include citations, so the agent answers from your sources rather than improvising. When it isn't confident, it can capture the question and hand off to a human instead of guessing — you control that behavior.",
  },
  {
    q: "How much does it cost?",
    a: "You can start completely free, with no credit card required. Paid plans scale with your usage rather than your headcount — you're never charged per seat, and there are no confusing AI credits to track. See the pricing page for current plans and rates. Upgrade, downgrade, or cancel anytime.",
  },
  {
    q: "What happens right after I sign up?",
    a: "You'll add your first knowledge source (a file or your website URL), watch your agent train in seconds, and test it in a live preview. From there you launch your Bar, Bubble, or Page with one click. If you'd rather have us set everything up for you, book a call and we'll do it together.",
  },
];
