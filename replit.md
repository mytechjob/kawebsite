# Knowledge Agents

## Overview

Knowledge Agents is an AI-powered enterprise knowledge management SaaS platform. It positions itself as the "first AI-native knowledge orchestrator" that transforms documents, incidents, and tribal knowledge into intelligent, self-improving systems. The platform targets document-heavy industries including Finance, Legal, Compliance, Internal Audit, and Private Equity/M&A.

The application is a full-stack TypeScript monorepo with a React frontend and Express backend, designed to be deployed on Replit. It currently serves as a marketing website with early access signup functionality, featuring multiple landing pages for different use cases and audience segments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with CSS variables for theming, shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Theme Support**: next-themes for dark/light mode switching
- **Typography**: Custom fonts - Fraunces (display), Inter (body), JetBrains Mono (code)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL (via Neon serverless)
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Build System**: Custom build script using esbuild for server bundling, Vite for client

### Directory Structure
```
client/src/          # React frontend application
  components/        # Reusable UI components
  pages/            # Route-based page components
  hooks/            # Custom React hooks
  lib/              # Utility functions and query client
server/             # Express backend
  routes.ts         # API route definitions
  storage.ts        # Database access layer
  db.ts             # Drizzle database connection
shared/             # Shared code between client and server
  schema.ts         # Drizzle database schema and Zod validators
```

### Data Layer
- **Schema Location**: `shared/schema.ts` defines all database tables
- **Current Tables**: `waitlistEntries` and `contactSubmissions` for lead capture
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Storage Pattern**: Repository pattern with `IStorage` interface in `server/storage.ts`

### Build and Development
- **Development**: `npm run dev` starts Express server with Vite middleware for HMR
- **Production Build**: `npm run build` bundles both client (Vite) and server (esbuild)
- **Database Migrations**: `npm run db:push` uses Drizzle Kit to sync schema

## External Dependencies

### Database
- **PostgreSQL via Neon**: Serverless PostgreSQL using `@neondatabase/serverless`
- **Connection**: Requires `DATABASE_URL` environment variable
- **WebSocket Support**: Uses `ws` package for Neon's WebSocket connections

### AI/External Services (Prepared but not yet integrated)
- Package.json includes dependencies for future AI integrations:
  - OpenAI SDK
  - Google Generative AI (@google/generative-ai)
  - These are bundled for deployment but not currently used in the codebase

### Third-Party Integrations
- **Stripe**: Payment processing (dependency installed, not implemented)
- **Nodemailer**: Email sending capability (dependency installed)
- **Multer**: File upload handling (dependency installed)

### Chat Widget Integration
- External knowledge base chat widget embedded in the homepage
- Connects to an external API endpoint for chat functionality
- Uses a simple CORS-based security model

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator
- Custom `vite-plugin-meta-images`: Updates OpenGraph meta tags with Replit deployment URLs