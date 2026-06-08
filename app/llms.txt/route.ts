import { NextResponse } from "next/server";

export function GET() {
  const content = `# Knowledge Agents

## Overview
Knowledge Agents is a no-code platform that lets businesses build AI agents trained on their own content. These agents answer customer questions 24/7 and take real actions — booking meetings, creating support tickets, checking orders, and capturing leads.

## Key facts
- **Founding year**: 2023
- **Headquarters**: United States
- **Website**: https://www.knowledgeagents.com
- **Pricing**: Simple flat monthly plans with no AI credits — Starter ($49/mo), Professional ($149/mo), Business ($399/mo), and custom Enterprise pricing on request. Cancel anytime.

## Core platform capabilities
- Train AI agents on documents (PDF, DOCX, TXT, Markdown), help centers, and websites.
- Retrieval-Augmented Generation (RAG) — answers are grounded in your content with citations.
- Agentic actions — book meetings, create/update tickets, check order status, capture leads.
- Deploy as a website widget (one script tag) or a standalone chat page with its own URL.
- 80+ languages, dark/light themes, custom branding and white-label options.
- Analytics, conversation insights, human handoff with full context transfer.

## Core pages
- Home: https://www.knowledgeagents.com/
- Features: https://www.knowledgeagents.com/features
- Pricing: https://www.knowledgeagents.com/pricing
- Blog: https://www.knowledgeagents.com/blog
- Compare: https://www.knowledgeagents.com/compare
- What is a Knowledge Agent? https://www.knowledgeagents.com/what-is-a-knowledge-agent

## Solution pages
- Customer support: https://www.knowledgeagents.com/solutions/customer-support
- E-commerce: https://www.knowledgeagents.com/solutions/ecommerce
- SaaS & software: https://www.knowledgeagents.com/solutions/saas
- Healthcare: https://www.knowledgeagents.com/solutions/healthcare
- Real estate: https://www.knowledgeagents.com/solutions/real-estate
- Education: https://www.knowledgeagents.com/solutions/education

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
