# Knowledge Agents

## Overview

Knowledge Agents is a no-code platform for building AI agents trained on a business's own content. The agents answer customer questions 24/7 and take real actions (book meetings, create tickets, check orders, capture leads). This repository is the **marketing website** for the platform — the product itself lives at kagents.net.

The site is a statically-generated Next.js application. There is no database and no backend of its own; sign-ups and the live chat widget point at the external product (kagents.net).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

- **Framework**: Next.js 15 (App Router) with React 19 and TypeScript
- **Styling**: Tailwind CSS v4 (CSS-variable theming in `app/globals.css`), shadcn/ui components in `components/ui/`
- **Animations**: Framer Motion
- **Theme**: next-themes (light/dark)
- **Typography**: Inter (body, `--font-sans`) and Plus Jakarta Sans (display, `--font-display`)
- **Rendering**: All pages are statically prerendered at build time except two dynamic route handlers (`/api/health`, `/llms.txt`)

### Directory Structure

```
app/                 # App Router pages (home funnel, business, pricing, features, blog, solutions, ...)
  api/health/        # Health-check endpoint for Replit autoscale / uptime monitors
  business/          # Full business/enterprise marketing page (former home page)
  page.tsx           # Home page: sales funnel for the Knowledge Suite (Bar, Bubble, Page)
components/
  ui/                # shadcn/ui primitives
  layout/            # Navbar, footer, page layout
  sections/          # Home-page and shared marketing sections
  funnel/            # Home-page funnel sections (distraction-free header, showcase, sticky CTA)
data/                # All marketing copy/content (content.ts, funnel.ts, blog.ts, solutions.ts)
lib/                 # site.ts (branding/nav/plans — single source of truth), metadata.tsx (JSON-LD)
public/              # Static assets, sitemap.xml, robots.txt, llms.txt
```

### Key Conventions

- `lib/site.ts` is the single source of truth for branding, navigation, pricing plans, sign-up URL (`SIGNUP_URL` → kagents.net/signup), and scheduling URL (`SCHEDULE_URL`).
- Marketing copy lives in `data/*.ts` files, not inline in pages.
- SEO: every page composes keywords from `lib/site.ts` and emits JSON-LD via `lib/metadata.tsx` helpers.
- Analytics: Google Analytics (gtag, `G-CRRX66KVW6`) is loaded in `app/layout.tsx`; funnel CTAs and the chat-bar minimize/expand fire custom events.

### Chat Widget Integration

`app/layout.tsx` embeds the external Knowledge Agents chat widget (`https://kagents.net/widget.js`) in "bar" style on every page. The layout also adds a host-page minimize/expand enhancement: a chevron collapses the bar into a slim one-line bar (avatar + welcome text). The bar always starts expanded; a visitor's minimize choice persists for the rest of their visit via sessionStorage. The avatar loads from `https://kagents.net/avatars/avatar_05.png` (the widget resolves assets against the kagents.net origin).

## Build and Development

- **Development**: `npm run dev` (Next dev server on port 5080)
- **Production build**: `npm run build`, serve with `npm run start` (port 5080)
- **Type check**: `npm run check`
- **Deployment**: Replit autoscale runs `npm run build` then `npm run start`; port 5080 maps to external port 80. `/api/health` returns 200 for health probes.

## History

This site was previously a full-stack Express + Vite + React app with PostgreSQL (waitlist/contact tables) and `/api/*` endpoints. It was rebuilt as the current static Next.js site; no API routes remain except `/api/health` (added because legacy health-check probes still poll it). The `postgresql-16` module in `.replit` is a leftover from that era and is unused.
