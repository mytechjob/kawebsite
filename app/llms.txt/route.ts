import { NextResponse } from "next/server";

export function GET() {
  const content = `# Knowledge Agents

## Overview
Knowledge Agents is a no-code platform that lets businesses build AI agents trained on their own content. These agents answer customer questions 24/7 and take real actions — booking meetings, creating support tickets, checking orders, and capturing leads.

## Key facts
- **Founding year**: 2023
- **Headquarters**: United States
- **Website**: https://www.knowledgeagents.com
- **Pricing model**: Message-based monthly plans — you're billed on the volume of support messages, never per seat. Every plan starts with a 14-day free trial (no credit card), tiers scale with message volume, a fully managed done-for-you tier is available, and custom Enterprise pricing is available on request. Every plan includes unlimited seats, with annual and month-to-month billing. Cancel anytime. Current plans and rates: https://www.knowledgeagents.com/pricing

## The Knowledge Suite (product lineup)
- **Knowledge Bar** — turns any website or application into an AI application via an embedded answer bar.
- **Knowledge Bubble** — a virtual agent visitors talk to on your website; answers, captures leads, and takes actions.
- **Knowledge Page** — a collaborative content workspace teams publish as a standalone, shareable AI page.

## Core platform capabilities
- Train AI agents on documents (PDF, DOCX, TXT, Markdown), help centers, and websites.
- Retrieval-Augmented Generation (RAG) — answers are grounded in your content with citations.
- Agentic actions — book meetings, create/update tickets, check order status, capture leads.
- Deploy as a website widget (one script tag) or a standalone chat page with its own URL.
- Multilingual support, dark/light themes, custom branding and white-label options.
- Analytics, conversation insights, human handoff with full context transfer.

## Core pages
- Home (AI customer support platform): https://www.knowledgeagents.com/
- The Knowledge Suite (Bar, Bubble & Page): https://www.knowledgeagents.com/knowledgebar
- For business & enterprise: https://www.knowledgeagents.com/business
- Features: https://www.knowledgeagents.com/features
- Pricing: https://www.knowledgeagents.com/pricing
- Blog: https://www.knowledgeagents.com/blog
- Compare: https://www.knowledgeagents.com/compare
- What is a Knowledge Agent? https://www.knowledgeagents.com/what-is-a-knowledge-agent

## AI-Native B2B Support Platform (new positioning)
Knowledge Agents also positions as an AI-native B2B support platform: an omnichannel inbox, an AI agent (Knowledge Agent) that resolves conversations with full account context, an AI copilot that drafts replies for humans, and revenue-signal routing (churn detection, upsell signals, competitor mentions) that ties support activity to revenue. An outcome-based pricing track (pay per resolution, churn save, or closed upsell) is rolling out alongside the standard message-based plans.
- Overview: https://www.knowledgeagents.com/ainative
- Platform (context layer, AI agent, copilot, account intelligence): https://www.knowledgeagents.com/ainative/platform
- Product (resolutions, drafts, article creation, support intelligence): https://www.knowledgeagents.com/ainative/product
- Revenue Intelligence (churn, upsell, competitor signals): https://www.knowledgeagents.com/ainative/revenue-intelligence
- Outcome-based pricing: https://www.knowledgeagents.com/ainative/pricing
- Compare (AI-native vs. legacy platforms): https://www.knowledgeagents.com/ainative/compare

## Solution pages
- Customer support: https://www.knowledgeagents.com/solutions/customer-support
- E-commerce: https://www.knowledgeagents.com/solutions/ecommerce
- SaaS & software: https://www.knowledgeagents.com/solutions/saas
- Healthcare: https://www.knowledgeagents.com/solutions/healthcare
- Real estate: https://www.knowledgeagents.com/solutions/real-estate
- Education: https://www.knowledgeagents.com/solutions/education
- Insurance: https://www.knowledgeagents.com/solutions/insurance

## Blog posts
- How to build an AI chatbot trained on your data: https://www.knowledgeagents.com/blog/how-to-build-an-ai-chatbot-trained-on-your-data
- AI customer support automation playbook: https://www.knowledgeagents.com/blog/ai-customer-support-automation-playbook
- Agentic AI actions explained: https://www.knowledgeagents.com/blog/agentic-ai-actions-explained
- How to reduce support tickets with AI: https://www.knowledgeagents.com/blog/reduce-support-tickets-with-ai
- RAG explained for business: https://www.knowledgeagents.com/blog/rag-explained-for-business
- Generative Engine Optimization guide: https://www.knowledgeagents.com/blog/generative-engine-optimization-guide
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
