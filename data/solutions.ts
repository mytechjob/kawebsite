import type { LucideIcon } from "lucide-react";
import {
  Headphones,
  ShoppingCart,
  Code2,
  Stethoscope,
  Home as HomeIcon,
  GraduationCap,
} from "lucide-react";

export type Solution = {
  slug: string;
  name: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  headline: string;
  subhead: string;
  intro: string;
  challenges: string[];
  capabilities: { title: string; description: string }[];
  actions: string[];
  results: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  sampleChat: { role: "user" | "agent"; text: string }[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "customer-support",
    name: "Customer Support",
    icon: Headphones,
    metaTitle: "AI Customer Support Agent | Deflect Tickets 24/7",
    metaDescription:
      "Automate customer support with an AI agent trained on your help center. Deflect tickets, answer questions instantly, and hand off to humans with full context. Start free.",
    keywords: [
      "AI customer support agent",
      "customer support automation",
      "AI ticket deflection",
      "reduce support tickets with AI",
      "24/7 customer support AI",
      "AI help desk",
    ],
    eyebrow: "For support teams",
    headline: "Resolve more tickets without growing your team",
    subhead:
      "Train a Knowledge Agent on your help center and policies. It answers customer questions instantly, takes action on common requests, and escalates to a human with full context when needed.",
    intro:
      "Support volume grows faster than headcount. Most tickets are repetitive — password resets, order status, how-to questions — yet they consume your team's day and keep customers waiting. A Knowledge Agent handles those instantly and around the clock, so your humans focus on the conversations that truly need them.",
    challenges: [
      "Repetitive tier-1 questions overwhelm the queue and slow response times.",
      "Customers expect instant answers, but staffing 24/7 is expensive.",
      "Knowledge lives in scattered docs that are hard for customers to search.",
      "Handoffs lose context, forcing customers to repeat themselves.",
    ],
    capabilities: [
      {
        title: "Instant, accurate answers",
        description:
          "Trained on your help center, policies, and macros, the agent answers in seconds with citations — not canned, off-topic replies.",
      },
      {
        title: "Smart ticket deflection",
        description:
          "Resolve common questions before they ever become tickets, and watch which topics deflect best in analytics.",
      },
      {
        title: "Context-rich human handoff",
        description:
          "When escalation is needed, the agent passes the full transcript and a summary to your help desk or live chat.",
      },
      {
        title: "Always-on, every language",
        description:
          "Coverage at 2 a.m. and on holidays, answering in your customers' languages without extra staffing.",
      },
    ],
    actions: [
      "Check order or account status from your backend",
      "Create or update a ticket in Zendesk or Intercom",
      "Reset or send password and account links",
      "Collect details and escalate to a live agent",
    ],
    results: [
      { value: "73%", label: "average ticket deflection" },
      { value: "< 10s", label: "median answer time" },
      { value: "24/7", label: "coverage, no overtime" },
    ],
    faqs: [
      {
        q: "Can an AI agent really reduce my support tickets?",
        a: "Yes. Because most inbound tickets are repetitive and already answered somewhere in your documentation, a Knowledge Agent trained on that content typically deflects 60–80% of tier-1 questions automatically, freeing your team for complex cases.",
      },
      {
        q: "What happens when the AI can't answer?",
        a: "You decide the fallback. The agent can capture the customer's question and email, create a ticket, or hand off to a live agent with the full conversation and a summary so nothing is lost and the customer never repeats themselves.",
      },
      {
        q: "Does it integrate with my help desk?",
        a: "Yes. Knowledge Agents connect with Zendesk, Intercom, and other help desks to create tickets, look up data, and escalate, and you can connect any other tool via the API.",
      },
    ],
    sampleChat: [
      { role: "user", text: "I was charged twice for my subscription this month." },
      {
        role: "agent",
        text: "I'm sorry about that! I can see two charges on May 3. I've refunded the duplicate ($29.00) — it'll appear in 5–7 days. I've also emailed you a receipt and opened ticket #4821 so our team can confirm. Anything else?",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    metaTitle: "AI Chatbot for E-commerce | Order Status, Returns & Sales",
    metaDescription:
      "An AI shopping assistant that answers product questions, tracks orders, processes returns, and recovers carts 24/7. Train it on your catalog and policies in minutes.",
    keywords: [
      "AI chatbot for ecommerce",
      "ecommerce AI shopping assistant",
      "order status chatbot",
      "AI returns automation",
      "recover abandoned carts AI",
      "Shopify AI chatbot",
    ],
    eyebrow: "For online stores",
    headline: "Turn questions into orders, around the clock",
    subhead:
      "A Knowledge Agent answers sizing, shipping, and product questions, tracks orders, and processes returns — guiding shoppers to checkout and reducing the questions that stall a sale.",
    intro:
      "Online shoppers buy when their questions get answered fast. Will it fit? When will it arrive? Can I return it? Leave those unanswered and carts get abandoned. A Knowledge Agent acts like your best sales associate on every page — recommending products, answering policy questions, and handling post-purchase requests automatically.",
    challenges: [
      "Pre-purchase questions go unanswered after hours, costing sales.",
      "“Where is my order?” requests flood support during peak season.",
      "Manual returns and exchanges eat into already-thin margins.",
      "Shoppers abandon carts when they can't get a quick, confident answer.",
    ],
    capabilities: [
      {
        title: "Product guidance that converts",
        description:
          "Recommend the right product, compare options, and answer sizing or compatibility questions from your catalog and reviews.",
      },
      {
        title: "Live order tracking",
        description:
          "Shoppers ask “where's my order?” and get a real, up-to-the-minute answer pulled securely from your store.",
      },
      {
        title: "Self-serve returns & exchanges",
        description:
          "Initiate returns, email labels, and process exchanges within the rules you set — no agent required.",
      },
      {
        title: "Cart recovery",
        description:
          "Proactively answer the objection holding up checkout, and capture emails to follow up on abandoned carts.",
      },
    ],
    actions: [
      "Look up live order and shipping status",
      "Start a return and email a prepaid label",
      "Apply a discount code or recommend products",
      "Capture email to recover an abandoned cart",
    ],
    results: [
      { value: "22%", label: "fewer abandoned carts" },
      { value: "35%", label: "of WISMO questions self-served" },
      { value: "24/7", label: "shopping assistance" },
    ],
    faqs: [
      {
        q: "Can the agent tell customers where their order is?",
        a: "Yes. Connect your store (such as Shopify) and the agent securely looks up live order and shipping status, so customers get an instant, accurate answer instead of opening a ticket.",
      },
      {
        q: "Will it work with my Shopify or custom store?",
        a: "Knowledge Agents embed on Shopify, WooCommerce, BigCommerce, custom storefronts, and more with one snippet, and connect to your backend via integrations or the API for order and returns actions.",
      },
      {
        q: "Can it actually process a return?",
        a: "Yes, within guardrails you define. The agent can validate eligibility, start the return, and email a prepaid label automatically, or route edge cases to a human.",
      },
    ],
    sampleChat: [
      { role: "user", text: "Will the linen shirt shrink if I machine wash it?" },
      {
        role: "agent",
        text: "Great question! The linen shirt is pre-washed, so it won't shrink in a cold machine wash on gentle — just avoid the dryer. It runs slightly relaxed, so if you're between sizes, size down. Want me to add your size to the cart?",
      },
    ],
  },
  {
    slug: "saas",
    name: "SaaS & Software",
    icon: Code2,
    metaTitle: "AI Support Agent for SaaS | Onboard Users & Cut Churn",
    metaDescription:
      "Give your SaaS users instant, accurate answers from your docs and changelog. A Knowledge Agent onboards users, deflects support, and reduces churn — embedded in your app.",
    keywords: [
      "AI support for SaaS",
      "AI agent for software documentation",
      "reduce churn with AI support",
      "in-app AI assistant",
      "developer docs chatbot",
      "AI onboarding assistant",
    ],
    eyebrow: "For software & SaaS",
    headline: "Answers in your app, the moment users need them",
    subhead:
      "Train a Knowledge Agent on your docs, API reference, and changelog. It onboards new users, answers technical questions with code, and deflects support — right inside your product.",
    intro:
      "In SaaS, time-to-value decides whether a trial converts and whether a customer stays. When users get stuck, they don't file a ticket — they churn. A Knowledge Agent embedded in your product turns your documentation into instant, conversational help, guiding users to success without waiting on your team.",
    challenges: [
      "New users stall during onboarding and never reach their “aha” moment.",
      "Technical questions require engineers, pulling them off the roadmap.",
      "Docs are thorough but hard to search, so users give up.",
      "Support load scales linearly with customer growth.",
    ],
    capabilities: [
      {
        title: "Onboarding that sticks",
        description:
          "Walk users through setup step by step, answer “how do I…” questions, and point to the exact doc or video.",
      },
      {
        title: "Technical answers with code",
        description:
          "Trained on your API reference, the agent returns accurate snippets and configuration help, with citations to your docs.",
      },
      {
        title: "Deflect without disappointing",
        description:
          "Resolve the long tail of product questions instantly, and escalate genuine bugs to your team with full context.",
      },
      {
        title: "Always current",
        description:
          "Re-crawl docs and changelog automatically so answers reflect your latest release, not last quarter's.",
      },
    ],
    actions: [
      "Create a bug report or feature request in your tracker",
      "Trigger account actions like plan upgrades via API",
      "Book an onboarding or success call",
      "Send relevant docs, guides, and code samples",
    ],
    results: [
      { value: "40%", label: "faster time-to-value" },
      { value: "65%", label: "of how-to tickets deflected" },
      { value: "↓ churn", label: "from faster resolutions" },
    ],
    faqs: [
      {
        q: "Can it answer technical and API questions accurately?",
        a: "Yes. Train the agent on your API reference and docs, and it returns grounded answers with code snippets and citations. Retrieval keeps responses tied to your actual documentation rather than guesses.",
      },
      {
        q: "Can I embed it inside my web app, not just my marketing site?",
        a: "Absolutely. Embed the widget in your authenticated app, pass user context, and even gate certain actions to signed-in users via the API.",
      },
      {
        q: "How does it stay up to date with new releases?",
        a: "Set your docs and changelog to re-crawl on a schedule. The agent automatically learns new content, so answers reflect your latest version.",
      },
    ],
    sampleChat: [
      { role: "user", text: "How do I authenticate with your API in Node?" },
      {
        role: "agent",
        text: "Use a bearer token in the Authorization header. In Node:\n\nconst res = await fetch('https://api.example.com/v1/agents', { headers: { Authorization: `Bearer ${process.env.API_KEY}` } });\n\nYou can generate a key in Settings → API. Want the docs link or a Python example?",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    metaTitle: "AI Patient Support Agent | Answer Questions & Book Visits",
    metaDescription:
      "Help patients get answers and book appointments with an AI agent trained on your clinic's information. Reduce phone volume and improve access — securely and 24/7.",
    keywords: [
      "AI patient support",
      "healthcare AI chatbot",
      "medical practice AI assistant",
      "patient scheduling AI",
      "reduce phone calls clinic AI",
      "HIPAA-aware AI chatbot",
    ],
    eyebrow: "For clinics & providers",
    headline: "Answer patient questions and book visits, 24/7",
    subhead:
      "A Knowledge Agent trained on your services, hours, insurance, and prep instructions handles routine patient questions and scheduling — reducing phone volume and improving access.",
    intro:
      "Front-desk teams spend their day answering the same questions — hours, location, insurance accepted, appointment prep — and patients wait on hold for answers that already exist on your site. A Knowledge Agent gives patients instant, accurate information and lets them book or request appointments any time, so staff can focus on care.",
    challenges: [
      "Phone lines stay busy with routine, repetitive questions.",
      "Patients want after-hours answers and self-service scheduling.",
      "Pre-visit instructions get missed, causing no-shows and delays.",
      "Sensitive information demands careful, privacy-aware handling.",
    ],
    capabilities: [
      {
        title: "Routine questions, answered instantly",
        description:
          "Hours, locations, services, insurance, and visit prep — answered accurately from your approved content.",
      },
      {
        title: "Self-service scheduling",
        description:
          "Patients book, reschedule, or request appointments directly, syncing to your scheduling system.",
      },
      {
        title: "Fewer no-shows",
        description:
          "Deliver clear prep instructions and confirmations so patients arrive ready.",
      },
      {
        title: "Privacy-aware by design",
        description:
          "Configurable guardrails keep the agent on-topic, encourage appropriate escalation, and avoid clinical advice.",
      },
    ],
    actions: [
      "Book, reschedule, or request an appointment",
      "Collect patient intake details securely",
      "Send visit prep and location instructions",
      "Route urgent matters to staff immediately",
    ],
    results: [
      { value: "50%", label: "fewer routine calls" },
      { value: "24/7", label: "patient self-service" },
      { value: "↓ no-shows", label: "with clear prep & reminders" },
    ],
    faqs: [
      {
        q: "Is it appropriate for healthcare and patient data?",
        a: "Knowledge Agents are designed for administrative and informational support — hours, services, scheduling, and prep — with guardrails that avoid clinical advice and encourage escalation. We provide encryption, access controls, and configurable data retention; contact us about compliance requirements for your organization.",
      },
      {
        q: "Can patients book appointments through it?",
        a: "Yes. Connect your scheduling system and patients can book, reschedule, or request appointments in natural language, any time of day.",
      },
      {
        q: "Will it give medical advice?",
        a: "No. You configure the agent to stay within administrative and informational topics and to direct clinical or urgent questions to your staff or appropriate care channels.",
      },
    ],
    sampleChat: [
      { role: "user", text: "Do you take Blue Cross and what should I bring to my first visit?" },
      {
        role: "agent",
        text: "Yes, we accept Blue Cross PPO and HMO plans. For your first visit, please bring a photo ID, your insurance card, and a list of current medications, and arrive 15 minutes early to complete intake. Would you like me to book your appointment now?",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: HomeIcon,
    metaTitle: "AI Agent for Real Estate | Qualify Leads & Book Viewings 24/7",
    metaDescription:
      "Capture and qualify property leads, answer listing questions, and book viewings automatically with an AI agent — so you never miss an inquiry, day or night.",
    keywords: [
      "AI agent for real estate",
      "real estate lead qualification AI",
      "property chatbot",
      "book viewings AI",
      "real estate lead generation chatbot",
      "24/7 real estate assistant",
    ],
    eyebrow: "For agents & brokerages",
    headline: "Never miss a lead, never miss a showing",
    subhead:
      "A Knowledge Agent answers listing questions, qualifies buyers and renters, and books viewings into your calendar — capturing every inquiry while you're with clients.",
    intro:
      "In real estate, speed wins. The first agent to respond usually gets the deal, but you can't answer every inquiry instantly while showing homes and closing deals. A Knowledge Agent responds in seconds on your website and listings, qualifies the lead, and books the viewing — so opportunities never slip away.",
    challenges: [
      "Leads arrive at all hours and go cold without a fast response.",
      "Repetitive questions about price, location, and availability eat time.",
      "Qualifying buyers and renters manually is slow and inconsistent.",
      "Scheduling viewings back-and-forth loses momentum.",
    ],
    capabilities: [
      {
        title: "Instant listing answers",
        description:
          "Price, square footage, availability, schools, HOA, pet policy — answered from your listings in seconds.",
      },
      {
        title: "Automatic lead qualification",
        description:
          "Ask budget, timeline, financing, and must-haves, then score and route hot leads to the right agent.",
      },
      {
        title: "Self-service viewings",
        description:
          "Buyers book showings directly into your calendar, with confirmations and reminders.",
      },
      {
        title: "Capture every inquiry",
        description:
          "Collect contact details on every conversation and sync straight to your CRM.",
      },
    ],
    actions: [
      "Qualify a lead with budget and timeline",
      "Book a property viewing in your calendar",
      "Send listing details, photos, and brochures",
      "Create a contact in your CRM and alert the agent",
    ],
    results: [
      { value: "5x", label: "faster lead response" },
      { value: "24/7", label: "inquiry capture" },
      { value: "↑ booked", label: "viewings from web traffic" },
    ],
    faqs: [
      {
        q: "Can it qualify leads automatically?",
        a: "Yes. The agent asks the qualifying questions you define — budget, timeline, financing, location, must-haves — scores the lead, and routes high-intent prospects to the right agent with a summary.",
      },
      {
        q: "Can it book viewings into my calendar?",
        a: "Yes. Connect your scheduling tool and prospects can book showings directly, with automatic confirmations and reminders to reduce no-shows.",
      },
      {
        q: "Where can I put the agent?",
        a: "Embed it on your website and individual listing pages, or share a standalone chat page link in your social bio, email signature, or property ads.",
      },
    ],
    sampleChat: [
      { role: "user", text: "Is the 3-bed on Maple still available and can I see it this weekend?" },
      {
        role: "agent",
        text: "Yes, 142 Maple Ave (3 bed / 2 bath, $529k) is available! It has Saturday slots at 11am and 2pm. Quick question so I can match you with the right agent: what's your budget range and timeline? I can lock in the 11am for you right now.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    metaTitle: "AI Assistant for Education | Support Students & Applicants 24/7",
    metaDescription:
      "Answer student, parent, and applicant questions instantly with an AI agent trained on your programs, policies, and FAQs. Reduce email volume and improve access around the clock.",
    keywords: [
      "AI assistant for education",
      "student support chatbot",
      "university AI chatbot",
      "admissions AI assistant",
      "AI for schools",
      "24/7 student support AI",
    ],
    eyebrow: "For schools & institutions",
    headline: "Support every student question, day or night",
    subhead:
      "A Knowledge Agent trained on your courses, policies, deadlines, and FAQs answers students, parents, and applicants instantly — reducing email and admin load.",
    intro:
      "Students and applicants have questions at midnight before a deadline, not during office hours. Admissions and student-services teams field the same questions every cycle — deadlines, requirements, financial aid, course details. A Knowledge Agent answers them all instantly and accurately, improving access while freeing staff for the conversations that matter.",
    challenges: [
      "Repetitive questions about deadlines, requirements, and policies pile up.",
      "Applicants and students expect 24/7 answers, especially near deadlines.",
      "Information is spread across PDFs, course catalogs, and web pages.",
      "Seasonal spikes overwhelm admissions and student-services staff.",
    ],
    capabilities: [
      {
        title: "Answers from your real policies",
        description:
          "Deadlines, requirements, tuition, course details, and FAQs — answered accurately with citations to your sources.",
      },
      {
        title: "Admissions & enrollment support",
        description:
          "Guide applicants through requirements and steps, and capture inquiries for follow-up.",
      },
      {
        title: "Always-on access",
        description:
          "Round-the-clock help in students' own languages for a diverse, global student body.",
      },
      {
        title: "Lighten the staff load",
        description:
          "Deflect routine questions so advisors and staff can focus on high-touch support.",
      },
    ],
    actions: [
      "Capture an applicant inquiry and details",
      "Book a campus tour or advising session",
      "Send program guides, forms, and deadlines",
      "Route specialized questions to the right department",
    ],
    results: [
      { value: "60%", label: "of FAQs self-served" },
      { value: "24/7", label: "multilingual support" },
      { value: "↓ email", label: "to admissions & advising" },
    ],
    faqs: [
      {
        q: "What can students and applicants ask it?",
        a: "Anything covered by your content — application requirements and deadlines, tuition and aid, course and program details, campus policies, IT and login help, and more. Answers are grounded in your real documents with citations.",
      },
      {
        q: "Can it help during admissions season spikes?",
        a: "Yes. Because it scales infinitely, the agent handles surges around deadlines without extra staffing, capturing inquiries and routing complex cases to your team.",
      },
      {
        q: "Does it support multiple languages?",
        a: "Yes. It detects and responds in your customers' languages automatically, which is ideal for international applicants and diverse student populations.",
      },
    ],
    sampleChat: [
      { role: "user", text: "What's the deadline for fall transfer applications and what do I need?" },
      {
        role: "agent",
        text: "The fall transfer deadline is March 1. You'll need: official transcripts from all institutions, a personal statement, and one letter of recommendation. A minimum 2.5 GPA is required for most programs. Would you like me to email the checklist and book a 15-minute advising call?",
      },
    ],
  },
];

export const getSolution = (slug: string) => SOLUTIONS.find((s) => s.slug === slug);
