import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { ScrollManager } from "@/components/layout/scroll-manager";
import { Spinner } from "@/components/ui/spinner";

// Landing page is eager-loaded for the fastest possible first paint.
import Home from "@/pages/home";

// Remaining routes are code-split so the initial bundle stays lean.
const FeaturesPage = lazy(() => import("@/pages/features"));
const PricingPage = lazy(() => import("@/pages/pricing"));
const SolutionPage = lazy(() => import("@/pages/solution"));
const WhatIsKnowledgeAgentPage = lazy(() => import("@/pages/what-is-knowledge-agent"));
const ComparePage = lazy(() => import("@/pages/compare"));
const BlogPage = lazy(() => import("@/pages/blog"));
const BlogPostPage = lazy(() => import("@/pages/blog-post"));
const AboutPage = lazy(() => import("@/pages/about"));
const ContactPage = lazy(() => import("@/pages/contact"));
const PrivacyPage = lazy(() => import("@/pages/privacy"));
const TermsPage = lazy(() => import("@/pages/terms"));
const LoginPage = lazy(() => import("@/pages/login"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Spinner className="w-8 h-8 text-primary" />
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollManager />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/solutions/:slug" component={SolutionPage} />
          <Route path="/what-is-a-knowledge-agent" component={WhatIsKnowledgeAgentPage} />
          <Route path="/compare" component={ComparePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog/:slug" component={BlogPostPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
