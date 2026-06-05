/**
 * Blog content. Articles are authored as typed content blocks and rendered by
 * components/blog/article-renderer.tsx. Inline **bold**, `code`, and [links](/path)
 * are supported by the renderer.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "faq"; items: { q: string; a: string }[] };

export type Author = { name: string; role: string; initials: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateDisplay: string;
  category: string;
  readTime: string;
  author: Author;
  image: string;
  keywords: string[];
  tags: string[];
  content: Block[];
  faqs?: { q: string; a: string }[];
};

const AUTHORS = {
  jordan: { name: "Jordan Reyes", role: "Head of Product", initials: "JR" },
  sasha: { name: "Sasha Lindqvist", role: "Customer Success Lead", initials: "SL" },
  amir: { name: "Amir Haddad", role: "Founding Engineer", initials: "AH" },
  nina: { name: "Nina Park", role: "Content & SEO", initials: "NP" },
} satisfies Record<string, Author>;

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-build-an-ai-chatbot-trained-on-your-data",
    title: "How to Build an AI Chatbot Trained on Your Own Data (2026 Guide)",
    excerpt:
      "A step-by-step, no-code guide to building an AI chatbot trained on your documents and website — and turning it into an agent that takes real actions.",
    date: "2026-05-20",
    dateDisplay: "May 20, 2026",
    category: "Tutorial",
    readTime: "9 min read",
    author: AUTHORS.jordan,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200",
    keywords: [
      "how to build an AI chatbot trained on your data",
      "train chatbot on PDF",
      "train chatbot on website",
      "no-code AI chatbot",
      "custom AI chatbot",
    ],
    tags: ["Tutorial", "Getting started", "No-code"],
    content: [
      {
        type: "p",
        text: "An AI chatbot is only as useful as what it knows. A generic assistant can chat about the weather, but it can't tell *your* customer whether your return window is 14 or 30 days. The fix is to train a chatbot on your own data — your documents, help center, and website — so every answer is grounded in your real content. This guide walks through exactly how to do that, with no code, and how to take it one step further into an **agent that takes action**.",
      },
      {
        type: "callout",
        title: "What you'll build",
        text: "A Knowledge Agent trained on your content that answers customer questions 24/7 with citations, captures leads, and can perform actions like booking meetings or creating tickets — embedded on your site or shared as a chat page.",
      },
      { type: "h2", text: "What does 'trained on your data' actually mean?" },
      {
        type: "p",
        text: "When people say a chatbot is *trained* on their data, they rarely mean fine-tuning a model from scratch. The modern, practical approach is **Retrieval-Augmented Generation (RAG)**: your content is split into chunks, converted into embeddings, and stored in a vector index. At question time, the system retrieves the most relevant chunks and gives them to a large language model, which writes an answer grounded in *your* text — and cites it.",
      },
      {
        type: "p",
        text: "The benefit: answers stay accurate and current, you can update content instantly, and the model is far less likely to make things up. For a deeper look, see our explainer on [RAG for business](/blog/rag-explained-for-business).",
      },
      { type: "h2", text: "Step 1: Gather your best content" },
      {
        type: "p",
        text: "Your agent will be as good as the source material you give it. Start with the content that already answers your most common questions:",
      },
      {
        type: "ul",
        items: [
          "Help center and FAQ pages",
          "Product documentation and user guides (PDF, DOCX, Markdown)",
          "Policy pages: shipping, returns, billing, privacy",
          "Your website's key pages (pricing, features, about)",
          "Internal macros or canned support replies",
        ],
      },
      {
        type: "p",
        text: "Quality beats quantity. Ten clear, accurate pages produce better answers than a thousand outdated ones. Remove duplicates and obviously stale content before you start.",
      },
      { type: "h2", text: "Step 2: Add your sources (no code)" },
      {
        type: "p",
        text: "With a platform like [Knowledge Agents](/), training is a matter of adding sources, not writing code:",
      },
      {
        type: "ol",
        items: [
          "Upload files — drag in PDFs, Word docs, text, or Markdown.",
          "Crawl your website — paste a URL and let it ingest your docs or help center automatically.",
          "Paste text — drop in FAQs or notes directly.",
          "Connect tools — import from sources like Notion or a sitemap.",
        ],
      },
      {
        type: "p",
        text: "Within seconds the content is processed and your agent can answer from it. Set websites to re-crawl on a schedule so answers never go stale.",
      },
      { type: "h2", text: "Step 3: Shape the personality and guardrails" },
      {
        type: "p",
        text: "Next, decide how your agent should behave. A few settings make a big difference:",
      },
      {
        type: "ul",
        items: [
          "**Tone & persona** — friendly and casual, or formal and precise. Give it a name and avatar.",
          "**Scope** — instruct it to answer only from your content and to say when it doesn't know.",
          "**Fallbacks** — when unsure, capture the question and email, or hand off to a human.",
          "**Welcome message & suggested questions** — guide users toward what the agent does best.",
        ],
      },
      {
        type: "quote",
        text: "The single biggest quality lever is telling the agent to ground answers in your content and to escalate gracefully when it isn't confident. That one instruction prevents most bad experiences.",
        cite: "Knowledge Agents support team",
      },
      { type: "h2", text: "Step 4: Turn it into an agent that takes action" },
      {
        type: "p",
        text: "Answering questions is table stakes. The real leap is letting your agent *do things*. Depending on your tools, you can enable actions such as:",
      },
      {
        type: "ul",
        items: [
          "Booking a meeting or appointment on your calendar",
          "Creating or updating a ticket in your help desk",
          "Looking up live order or account status",
          "Capturing and routing a qualified lead to your CRM",
          "Triggering a custom workflow through your API",
        ],
      },
      {
        type: "p",
        text: "This is what separates a Knowledge Agent from a basic chatbot. Learn more in [Agentic AI actions explained](/blog/agentic-ai-actions-explained).",
      },
      { type: "h2", text: "Step 5: Test, then embed everywhere" },
      {
        type: "p",
        text: "Before launch, ask your agent the ten questions you hear most. Check that answers are accurate, cite the right pages, and escalate when they should. Then deploy:",
      },
      {
        type: "ul",
        items: [
          "**Website widget** — paste one script tag to add a chat bubble to any site.",
          "**Chat page** — publish a standalone page with its own URL to share in links, emails, and QR codes.",
          "**API** — build fully custom experiences inside your product.",
        ],
      },
      { type: "h2", text: "Step 6: Improve with analytics" },
      {
        type: "p",
        text: "Launch is the start, not the finish. Review conversations weekly to see what customers ask, where the agent struggled, and which topics deflect the most tickets. Each gap is a prompt to add or clarify a piece of content. Over a few weeks, resolution rates climb steadily.",
      },
      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "Do I need to know how to code?",
            a: "No. Modern platforms let you upload content, configure behavior, and embed the agent without writing any code. Developers can optionally use the API for custom builds.",
          },
          {
            q: "How long does it take?",
            a: "Most people have a working agent in under five minutes — upload a doc or crawl a URL, tweak the welcome message, and embed it.",
          },
          {
            q: "Will it make up answers?",
            a: "When grounded with RAG and instructed to answer only from your content, hallucinations are rare. Configure a fallback to capture the question or hand off to a human when the agent isn't confident.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How do I build an AI chatbot trained on my own data?",
        a: "Gather your best content (help center, docs, policies, website), add it to a no-code platform by uploading files or crawling your site, configure tone and guardrails, optionally enable actions like booking and ticket creation, then embed the agent on your website or share it as a chat page. With Knowledge Agents this takes about five minutes.",
      },
      {
        q: "What file types can I train an AI chatbot on?",
        a: "Common formats include PDF, DOCX, TXT, and Markdown, plus pasted text and crawled web pages. You can combine multiple sources into a single agent.",
      },
    ],
  },

  {
    slug: "ai-customer-support-automation-playbook",
    title: "The AI Customer Support Automation Playbook for 2026",
    excerpt:
      "A practical playbook for automating customer support with AI — what to automate first, how to measure deflection, and how to keep customers happy.",
    date: "2026-05-12",
    dateDisplay: "May 12, 2026",
    category: "Guide",
    readTime: "10 min read",
    author: AUTHORS.sasha,
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=1200",
    keywords: [
      "AI customer support automation",
      "customer support automation",
      "AI ticket deflection",
      "automate customer service with AI",
      "AI help desk",
    ],
    tags: ["Customer support", "Automation", "Playbook"],
    content: [
      {
        type: "p",
        text: "Customer expectations have outrun traditional support. People want instant answers, at any hour, in their language — and they'll churn if they don't get them. AI support automation closes that gap, but only if you roll it out deliberately. This playbook covers what to automate first, how to measure success, and how to keep quality high.",
      },
      { type: "h2", text: "Why automate support now" },
      {
        type: "p",
        text: "Three forces make 2026 the year to act: customer patience is at an all-time low, support costs scale linearly with growth, and AI agents have crossed the quality threshold where they resolve real issues, not just route them. The result is a rare win-win — faster service for customers and lower cost per ticket for you.",
      },
      {
        type: "callout",
        title: "The 80/20 of support",
        text: "In most businesses, a small number of question types make up the majority of tickets — order status, returns, password help, how-tos, hours, and pricing. Automate those first and you deflect the bulk of volume with minimal risk.",
      },
      { type: "h2", text: "Step 1: Find your top automatable questions" },
      {
        type: "p",
        text: "Export the last 90 days of tickets and cluster them by topic. You're looking for questions that are high-volume, repetitive, and already answered in your documentation. These are perfect first candidates because the agent has a clear source of truth and the stakes are low.",
      },
      {
        type: "ul",
        items: [
          "High volume + documented answer = automate now",
          "High volume + no documented answer = write the doc, then automate",
          "Low volume + high complexity = keep with humans (for now)",
        ],
      },
      { type: "h2", text: "Step 2: Train an agent on your source of truth" },
      {
        type: "p",
        text: "Point a Knowledge Agent at your help center, policy pages, and macros. Because answers are grounded in your real content with citations, customers get accurate responses instead of generic fluff. See our [step-by-step build guide](/blog/how-to-build-an-ai-chatbot-trained-on-your-data) for the mechanics.",
      },
      { type: "h2", text: "Step 3: Move from answers to actions" },
      {
        type: "p",
        text: "Deflection doubles when the agent can *resolve* rather than just *explain*. Instead of telling a customer how to track an order, the agent looks it up. Instead of describing your return process, it starts the return and emails a label. Prioritize actions that map to your highest-volume tickets:",
      },
      {
        type: "ol",
        items: [
          "Order/account status lookups",
          "Returns, cancellations, and plan changes",
          "Appointment booking and rescheduling",
          "Ticket creation and human handoff with context",
        ],
      },
      { type: "h2", text: "Step 4: Design graceful escalation" },
      {
        type: "p",
        text: "Automation isn't about removing humans — it's about saving them for the moments that need judgment and empathy. Set clear rules for when the agent should hand off, and make sure it passes the full transcript and a summary so the customer never repeats themselves.",
      },
      {
        type: "quote",
        text: "The goal isn't to deflect every ticket. It's to deflect the boring ones perfectly and route the hard ones instantly — so your team spends its energy where it matters.",
        cite: "Sasha Lindqvist, Customer Success Lead",
      },
      { type: "h2", text: "Step 5: Measure what matters" },
      {
        type: "p",
        text: "Track these metrics from day one so you can prove ROI and spot gaps:",
      },
      {
        type: "ul",
        items: [
          "**Deflection rate** — share of conversations resolved without a human.",
          "**Resolution quality** — thumbs up/down and CSAT on AI chats.",
          "**Time to first response** — should drop to seconds.",
          "**Escalation rate & reasons** — reveals content and action gaps.",
          "**Cost per resolution** — the bottom-line story for leadership.",
        ],
      },
      { type: "h2", text: "Step 6: Close the loop weekly" },
      {
        type: "p",
        text: "The teams that win treat their agent like a product. Each week, review low-rated conversations and unanswered questions, then add or improve content and actions. A 60% deflection rate at launch routinely climbs past 75% within a quarter using this habit alone. For a deeper dive on the numbers, read [how to reduce support tickets with AI](/blog/reduce-support-tickets-with-ai).",
      },
      { type: "h2", text: "Common pitfalls to avoid" },
      {
        type: "ul",
        items: [
          "Automating everything on day one instead of starting with the safe 80%.",
          "No escalation path, so stuck customers get frustrated.",
          "Letting content go stale — schedule re-crawls and reviews.",
          "Hiding the bot — be upfront that it's AI, and make handoff easy.",
        ],
      },
      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "Will customers be annoyed by an AI agent?",
            a: "Not when it's fast, accurate, and offers an easy path to a human. Most customers prefer an instant correct answer at midnight over waiting hours for a person.",
          },
          {
            q: "How much can we realistically deflect?",
            a: "Teams commonly see 60–80% deflection of tier-1 questions once the agent is trained on good content and can take actions, though it varies by industry and content quality.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What should I automate first in customer support?",
        a: "Start with high-volume, repetitive questions that are already answered in your documentation — order status, returns, password help, how-tos, hours, and pricing. These deflect the most volume at the lowest risk.",
      },
      {
        q: "How do you measure AI support success?",
        a: "Track deflection rate, resolution quality (CSAT and thumbs up/down on AI chats), time to first response, escalation rate and reasons, and cost per resolution.",
      },
    ],
  },

  {
    slug: "agentic-ai-actions-explained",
    title: "Agentic AI Actions Explained: When Chatbots Start Doing the Work",
    excerpt:
      "Agentic AI doesn't just answer — it acts. Here's what AI actions are, how they work safely, and why they're the future of customer experience.",
    date: "2026-05-04",
    dateDisplay: "May 4, 2026",
    category: "Explainer",
    readTime: "8 min read",
    author: AUTHORS.amir,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    keywords: [
      "agentic AI",
      "AI agent that takes actions",
      "AI actions",
      "action-taking chatbot",
      "AI workflow automation",
    ],
    tags: ["Agentic AI", "Actions", "Product"],
    content: [
      {
        type: "p",
        text: "For years, chatbots could only talk. They answered questions, suggested links, and — at best — handed you off to a human. **Agentic AI** changes the verb from *answer* to *do*. An agentic Knowledge Agent can book the meeting, process the return, update the subscription, and create the ticket — completing the task instead of describing it.",
      },
      { type: "h2", text: "What is an AI action?" },
      {
        type: "p",
        text: "An **action** is a capability that lets an AI agent change something in the real world by calling an external tool or API. Where a normal answer produces text, an action produces an outcome: a calendar event created, an order refunded, a lead written to your CRM.",
      },
      {
        type: "callout",
        title: "Answer vs. action",
        text: "Answer: “You can return items within 30 days; here's how.” Action: “I've started your return and emailed a prepaid label — done!” Same question, very different customer experience.",
      },
      { type: "h2", text: "How AI actions work under the hood" },
      {
        type: "p",
        text: "Modern agents use **tool calling**. You describe the tools available — say, a `createTicket` function or a `getOrderStatus` endpoint — along with the inputs each needs. When a user's request matches, the model decides to call the tool, fills in the parameters from the conversation, and the platform executes the call and returns the result. The agent then confirms the outcome in natural language.",
      },
      {
        type: "ol",
        items: [
          "User expresses intent: “I want to return these shoes.”",
          "The agent recognizes it maps to the `startReturn` action.",
          "It gathers required details (order number, item, reason).",
          "The platform calls your API with guardrails and permissions.",
          "The agent confirms: “Done — your label is on the way.”",
        ],
      },
      { type: "h2", text: "Why actions matter for customer experience" },
      {
        type: "p",
        text: "Actions collapse the distance between a question and a resolution. The payoff is concrete:",
      },
      {
        type: "ul",
        items: [
          "**Higher deflection** — issues are resolved, not just explained.",
          "**Faster outcomes** — seconds instead of an email thread.",
          "**24/7 capability** — work gets done when your team is offline.",
          "**Revenue impact** — booked meetings, recovered carts, completed upgrades.",
        ],
      },
      {
        type: "quote",
        text: "The moment your agent can take action, it stops being a deflection tool and becomes a member of the team that never sleeps.",
        cite: "Amir Haddad, Founding Engineer",
      },
      { type: "h2", text: "Doing actions safely" },
      {
        type: "p",
        text: "Letting AI act demands guardrails. Good platforms build in several layers:",
      },
      {
        type: "ul",
        items: [
          "**Scoped permissions** — the agent can only call the tools you enable.",
          "**Input validation** — parameters are checked before execution.",
          "**Confirmation steps** — sensitive actions ask the user to confirm.",
          "**Limits & policies** — e.g., refunds only under a threshold, then escalate.",
          "**Audit logs** — every action is recorded for review.",
        ],
      },
      { type: "h2", text: "Examples of high-value actions" },
      {
        type: "ul",
        items: [
          "Book, reschedule, or cancel appointments",
          "Create and update support tickets",
          "Look up order, shipment, and account status",
          "Start returns, exchanges, and refunds",
          "Qualify and route leads to sales",
          "Trigger any custom workflow via API",
        ],
      },
      {
        type: "p",
        text: "Want to see what this looks like across industries? Explore our [solutions](/solutions/customer-support) or learn the bigger picture in [What is a Knowledge Agent?](/what-is-a-knowledge-agent).",
      },
      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "Is it safe to let AI take actions?",
            a: "Yes, when actions are scoped to tools you approve, validated before execution, gated by confirmation and limits for sensitive operations, and fully logged. You stay in control of what the agent is allowed to do.",
          },
          {
            q: "Do I need engineers to set up actions?",
            a: "Common actions like lead capture, booking, and handoff are no-code toggles. Custom actions that call your own APIs are straightforward for a developer to add, and reusable afterward.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is an agentic AI action?",
        a: "An AI action is a capability that lets an AI agent change something in the real world by calling an external tool or API — for example booking a meeting, creating a ticket, looking up an order, or processing a return — rather than only producing a text answer.",
      },
      {
        q: "How do AI agents take actions safely?",
        a: "Through scoped permissions (only approved tools), input validation, confirmation steps for sensitive operations, policy limits, and full audit logging, so the business stays in control of what the agent can do.",
      },
    ],
  },

  {
    slug: "reduce-support-tickets-with-ai",
    title: "How to Reduce Support Tickets With AI (Without Hurting CSAT)",
    excerpt:
      "A data-backed look at how AI agents cut ticket volume — the typical deflection range, what drives it, and how to protect customer satisfaction.",
    date: "2026-04-25",
    dateDisplay: "Apr 25, 2026",
    category: "Playbook",
    readTime: "7 min read",
    author: AUTHORS.sasha,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    keywords: [
      "reduce support tickets with AI",
      "AI ticket deflection",
      "lower support volume",
      "customer support AI",
      "deflection rate",
    ],
    tags: ["Customer support", "Metrics", "Deflection"],
    content: [
      {
        type: "p",
        text: "Every deflected ticket is time your team gets back and a customer who got help instantly. But deflection done badly — burying the contact button, trapping people with an unhelpful bot — tanks satisfaction. Here's how to cut ticket volume *and* keep customers happy.",
      },
      { type: "h2", text: "What deflection rate can you expect?" },
      {
        type: "p",
        text: "Results vary by industry and content quality, but a well-built Knowledge Agent commonly deflects **60–80%** of tier-1 questions. The variables that move that number most are how good your documentation is, whether the agent can take actions, and how diligently you close gaps after launch.",
      },
      {
        type: "callout",
        title: "Quick math",
        text: "If you handle 4,000 tickets a month and deflect 70%, that's 2,800 conversations resolved instantly — and roughly the workload of several full-time agents handed back to your team for higher-value work.",
      },
      { type: "h2", text: "The four levers of deflection" },
      { type: "h3", text: "1. Content coverage" },
      {
        type: "p",
        text: "The agent can only answer what your content covers. Audit your top 50 questions and make sure each has a clear, current source. Gaps here are the number-one cause of unnecessary escalations.",
      },
      { type: "h3", text: "2. Action capability" },
      {
        type: "p",
        text: "Many tickets aren't really questions — they're requests: track this, change that, cancel this. Enabling [actions](/blog/agentic-ai-actions-explained) lets the agent resolve them end to end, which can lift deflection by 10–20 points on its own.",
      },
      { type: "h3", text: "3. Discoverability" },
      {
        type: "p",
        text: "If customers can't find the agent, it can't help. Put the widget on high-traffic pages, add suggested questions, and surface it at the moment of need — on order pages, in your help center, after a failed search.",
      },
      { type: "h3", text: "4. Continuous improvement" },
      {
        type: "p",
        text: "Deflection compounds. Teams that review conversations weekly and patch content gaps routinely add 10–15 points over a quarter. Treat your agent like a living product, not a set-and-forget widget.",
      },
      {
        type: "quote",
        text: "Deflection isn't a switch you flip — it's a flywheel. Every gap you close makes the next month's number better.",
        cite: "Sasha Lindqvist, Customer Success Lead",
      },
      { type: "h2", text: "Protecting CSAT while you deflect" },
      {
        type: "p",
        text: "Aggressive deflection that frustrates customers is a false economy. Keep satisfaction high with a few rules:",
      },
      {
        type: "ul",
        items: [
          "Always offer a visible, one-click path to a human.",
          "Hand off with full context so customers never repeat themselves.",
          "Be transparent that it's an AI agent.",
          "Let the agent admit uncertainty instead of guessing.",
          "Monitor CSAT on AI chats and fix low-rated topics fast.",
        ],
      },
      { type: "h2", text: "A 30-day rollout plan" },
      {
        type: "ol",
        items: [
          "Week 1: Train the agent on your help center and top policies.",
          "Week 2: Enable your two highest-volume actions and an escalation path.",
          "Week 3: Launch on high-traffic pages; watch deflection and CSAT daily.",
          "Week 4: Review low-rated chats, close content gaps, expand coverage.",
        ],
      },
      {
        type: "p",
        text: "For the full operational playbook, see [The AI customer support automation playbook](/blog/ai-customer-support-automation-playbook).",
      },
      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "Does deflecting tickets hurt customer satisfaction?",
            a: "No — done well, it improves it. Customers get instant, accurate answers and an easy path to a human when needed. CSAT only suffers when bots are unhelpful and hide the contact option.",
          },
          {
            q: "How fast will I see results?",
            a: "Most teams see meaningful deflection within the first week of launch, then a steady climb over the following weeks as they close content and action gaps.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How much can AI reduce support tickets?",
        a: "A well-built AI agent trained on good content and able to take actions commonly deflects 60–80% of tier-1 support tickets, with the exact figure depending on documentation quality, action coverage, and ongoing improvement.",
      },
      {
        q: "How do I reduce support tickets without hurting CSAT?",
        a: "Always offer a one-click path to a human, hand off with full context, be transparent that it's AI, let the agent admit uncertainty, and monitor CSAT on AI chats to fix low-rated topics quickly.",
      },
    ],
  },

  {
    slug: "rag-explained-for-business",
    title: "RAG Explained for Business: Accurate AI Answers From Your Content",
    excerpt:
      "Retrieval-Augmented Generation (RAG) is why modern AI agents give accurate, cited answers. Here's how it works — in plain English for business leaders.",
    date: "2026-04-16",
    dateDisplay: "Apr 16, 2026",
    category: "Explainer",
    readTime: "8 min read",
    author: AUTHORS.amir,
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200",
    keywords: [
      "RAG explained",
      "retrieval augmented generation",
      "RAG chatbot for business",
      "reduce AI hallucinations",
      "grounded AI answers",
    ],
    tags: ["RAG", "Technical", "Accuracy"],
    content: [
      {
        type: "p",
        text: "If you've evaluated AI support tools, you've seen the acronym **RAG** — Retrieval-Augmented Generation. It's the technique that makes an AI agent trustworthy enough to put in front of customers. This is the plain-English version: what RAG is, why it matters, and what to look for.",
      },
      { type: "h2", text: "The problem RAG solves" },
      {
        type: "p",
        text: "Large language models are trained on a snapshot of public data. They're fluent, but they don't know your prices, your policies, or yesterday's product update — and when they don't know, they can confidently make something up. That's a **hallucination**, and it's unacceptable in customer-facing support.",
      },
      {
        type: "callout",
        title: "In one sentence",
        text: "RAG gives the AI an open-book exam: instead of answering from memory, it looks up the relevant passages from your content first, then writes an answer based on what it found.",
      },
      { type: "h2", text: "How RAG works, step by step" },
      {
        type: "ol",
        items: [
          "**Ingest** — your documents and pages are split into small chunks.",
          "**Embed** — each chunk is converted into a vector that captures its meaning.",
          "**Index** — vectors are stored in a searchable vector database.",
          "**Retrieve** — at question time, the system finds the chunks most relevant to the query.",
          "**Generate** — the model writes an answer using those chunks, and cites them.",
        ],
      },
      {
        type: "p",
        text: "Because the answer is built from passages it just retrieved, it reflects *your* content — and you can show the customer exactly where it came from.",
      },
      { type: "h2", text: "Why RAG matters for your business" },
      {
        type: "ul",
        items: [
          "**Accuracy** — answers are grounded in your real content, not the model's guesses.",
          "**Freshness** — update a doc and the next answer reflects it; no retraining.",
          "**Trust** — citations let customers (and you) verify answers.",
          "**Control** — restrict the agent to your sources and define fallback behavior.",
          "**Cost** — far cheaper and faster than fine-tuning a model on your data.",
        ],
      },
      {
        type: "quote",
        text: "Fine-tuning teaches a model a style; RAG gives it the facts. For customer support, you almost always want the facts — current, cited, and under your control.",
        cite: "Amir Haddad, Founding Engineer",
      },
      { type: "h2", text: "RAG vs. fine-tuning" },
      {
        type: "p",
        text: "These are often confused. Fine-tuning adjusts the model's weights to learn a tone or format and is expensive to update. RAG leaves the model alone and supplies knowledge at query time, so it's cheap to keep current. For grounded, up-to-date answers, RAG is the right default — and you can combine both if you need a specific voice.",
      },
      { type: "h2", text: "What to look for in a RAG-powered agent" },
      {
        type: "ul",
        items: [
          "Citations that link back to the source passage",
          "Easy content updates and scheduled re-crawling",
          "Controls to restrict answers to your content",
          "Graceful fallbacks when retrieval finds nothing relevant",
          "Good handling of tables, PDFs, and long documents",
        ],
      },
      {
        type: "p",
        text: "Every Knowledge Agent uses RAG by default, so your answers stay accurate and current. To put it into practice, follow our guide on [building an AI chatbot trained on your data](/blog/how-to-build-an-ai-chatbot-trained-on-your-data).",
      },
      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "Does RAG stop AI hallucinations completely?",
            a: "It dramatically reduces them by grounding answers in retrieved content and citing sources. Combined with instructions to answer only from your content and to escalate when unsure, hallucinations become rare in practice.",
          },
          {
            q: "Do I need a data team to use RAG?",
            a: "No. Platforms like Knowledge Agents handle ingestion, embedding, indexing, and retrieval for you. You just add content; the RAG pipeline runs behind the scenes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is RAG (Retrieval-Augmented Generation)?",
        a: "RAG is a technique where an AI system first retrieves the most relevant passages from your content, then uses a language model to generate an answer based on those passages and cite them. It keeps answers accurate, current, and grounded in your real content instead of the model's memory.",
      },
      {
        q: "What's the difference between RAG and fine-tuning?",
        a: "Fine-tuning adjusts a model's weights to learn a style or format and is costly to update. RAG leaves the model unchanged and supplies knowledge at query time, making it cheap to keep current — the better default for accurate, up-to-date customer support.",
      },
    ],
  },

  {
    slug: "generative-engine-optimization-guide",
    title: "Generative Engine Optimization (GEO): The 2026 Guide",
    excerpt:
      "SEO gets you ranked; GEO gets you cited inside AI answers. Learn how to optimize your content for ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
    date: "2026-04-08",
    dateDisplay: "Apr 8, 2026",
    category: "Guide",
    readTime: "11 min read",
    author: AUTHORS.nina,
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=1200",
    keywords: [
      "generative engine optimization",
      "GEO",
      "AI search optimization",
      "optimize for ChatGPT",
      "Google AI Overviews",
      "llms.txt",
    ],
    tags: ["GEO", "SEO", "Marketing"],
    content: [
      {
        type: "p",
        text: "Search is splitting in two. People still type queries into Google, but increasingly they ask ChatGPT, Perplexity, Gemini, or Google's AI Overviews and read a synthesized answer instead of a list of links. **Generative Engine Optimization (GEO)** is the practice of getting your content cited inside those AI answers. If SEO is about ranking, GEO is about being *referenced*.",
      },
      { type: "h2", text: "SEO vs. GEO: what's different?" },
      {
        type: "p",
        text: "They overlap, but the unit of success differs. SEO optimizes a page to rank in a list. GEO optimizes content to be retrieved, trusted, and quoted by an AI engine that's composing an answer for the user.",
      },
      {
        type: "ul",
        items: [
          "**SEO goal:** rank in the blue links. **GEO goal:** be the cited source in the AI answer.",
          "**SEO unit:** the page. **GEO unit:** the passage or fact.",
          "**SEO signals:** links, keywords, technical health. **GEO signals:** clarity, structure, citability, authority.",
        ],
      },
      {
        type: "callout",
        title: "Why GEO matters now",
        text: "AI answers often cite only a handful of sources. Being one of them puts your brand in front of high-intent users at the exact moment they're deciding — even when they never click a traditional search result.",
      },
      { type: "h2", text: "How AI engines choose what to cite" },
      {
        type: "p",
        text: "Generative engines retrieve candidate content (often via RAG over a search index), then synthesize an answer, preferring sources that are clear, specific, and trustworthy. To be selected, your content should be easy to extract a clean fact from and obviously credible.",
      },
      { type: "h2", text: "Nine GEO tactics that work" },
      { type: "h3", text: "1. Answer the question directly and early" },
      {
        type: "p",
        text: "Lead with a crisp, self-contained answer in the first sentence or two of a section. AI engines love passages that resolve the query without surrounding fluff.",
      },
      { type: "h3", text: "2. Use clear structure and headings" },
      {
        type: "p",
        text: "Descriptive H2/H3 headings, short paragraphs, and lists make content easy to parse and extract. Structure is a citability signal.",
      },
      { type: "h3", text: "3. Add FAQs with real questions" },
      {
        type: "p",
        text: "Question-and-answer formatting maps directly to how people prompt AI engines. Include an FAQ section and mark it up with FAQPage structured data.",
      },
      { type: "h3", text: "4. Be specific: numbers, dates, definitions" },
      {
        type: "p",
        text: "Concrete facts — statistics, ranges, definitions, dates — are more quotable than vague claims. “Deflects 60–80% of tier-1 tickets” beats “reduces tickets significantly.”",
      },
      { type: "h3", text: "5. Implement structured data" },
      {
        type: "p",
        text: "Use schema.org JSON-LD (Organization, Article, FAQPage, Product, HowTo, Breadcrumb) so machines understand your entities and relationships.",
      },
      { type: "h3", text: "6. Add an llms.txt file" },
      {
        type: "p",
        text: "An emerging convention, `/llms.txt`, gives AI engines a clean, curated map of your most important pages and facts in Markdown. It's a low-effort, high-signal way to guide what gets cited.",
      },
      { type: "h3", text: "7. Build topical authority" },
      {
        type: "p",
        text: "Cover a topic comprehensively with a pillar page and supporting articles that interlink. Depth and internal linking signal expertise to both search and AI engines.",
      },
      { type: "h3", text: "8. Establish E-E-A-T" },
      {
        type: "p",
        text: "Experience, Expertise, Authoritativeness, and Trust matter more when an engine is deciding whom to cite. Use real author bios, cite sources, and keep content current.",
      },
      { type: "h3", text: "9. Allow AI crawlers" },
      {
        type: "p",
        text: "Check your `robots.txt`. If you want to be cited, allow reputable AI crawlers (such as GPTBot, ClaudeBot, and PerplexityBot) to access your public content.",
      },
      {
        type: "quote",
        text: "Write the sentence you'd want an AI to quote back to a customer. If it's clear, specific, and true, you've done most of GEO already.",
        cite: "Nina Park, Content & SEO",
      },
      { type: "h2", text: "How Knowledge Agents fits GEO" },
      {
        type: "p",
        text: "There's a neat synergy: the same clear, well-structured, FAQ-rich content that makes a great Knowledge Agent also performs well in AI search. Publish a Knowledge Agent chat page and you create a fresh, answer-shaped resource; structure your site for GEO and your agent gets better source material too. To go deeper, read [What is a Knowledge Agent?](/what-is-a-knowledge-agent).",
      },
      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "Is GEO replacing SEO?",
            a: "No — it complements it. Traditional search isn't going away, and many GEO best practices (clear structure, authority, structured data) also help classic SEO. The smart move is to do both.",
          },
          {
            q: "What is llms.txt?",
            a: "It's an emerging Markdown file at /llms.txt that gives AI engines a curated overview of your most important pages and facts, making it easier for them to find and cite the right content.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "GEO is the practice of optimizing content so it gets retrieved, trusted, and cited inside AI-generated answers from engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews. Where SEO aims to rank a page in a list of links, GEO aims to make your content the source an AI quotes.",
      },
      {
        q: "How do I optimize content for AI search engines?",
        a: "Answer questions directly and early, use clear headings and lists, add FAQs with structured data, include specific facts and numbers, implement schema.org JSON-LD, add an llms.txt file, build topical authority, establish E-E-A-T with real authors, and allow reputable AI crawlers in robots.txt.",
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const getRelatedPosts = (slug: string, count = 3) =>
  POSTS.filter((p) => p.slug !== slug).slice(0, count);
