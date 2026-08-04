import { PageLayout, PageHero } from "@/components/layout/page-layout";
import { PostCard, TopicNav } from "@/components/blog/post-card";
import { Newsletter } from "@/components/sections/newsletter";
import { CTA } from "@/components/sections/cta";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { POSTS, POSTS_BY_DATE, TOPICS } from "@/data/blog";
import { absoluteUrl } from "@/lib/site";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Agents, Knowledge Management & Customer Experience",
  description:
    "Guides, playbooks, and product news on AI knowledge management, contact center automation, agentic actions, RAG, omnichannel support, and Generative Engine Optimization (GEO).",
  keywords: [
    "AI customer support blog",
    "AI knowledge management",
    "contact center knowledge management",
    "AI agent guides",
    "customer support automation",
    "generative engine optimization",
  ],
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS_BY_DATE;

  return (
    <PageLayout>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Knowledge Agents Blog",
            url: absoluteUrl("/blog"),
            blogPost: POSTS.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: absoluteUrl(`/blog/${p.slug}`),
              datePublished: p.date,
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Blog & Resources"
        title="Build better AI customer experiences"
        description="Practical guides and playbooks on knowledge management, AI agents, contact center automation, and getting cited by AI search engines."
      />

      <div className="container mx-auto px-4 py-16">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid lg:grid-cols-2 gap-8 mb-12 items-center bg-background border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="h-64 lg:h-full overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 lg:pr-12">
            <div className="flex items-center gap-3 mb-3">
              <Badge>Featured</Badge>
              <Badge variant="secondary">{featured.category}</Badge>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-4">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{featured.dateDisplay}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {featured.readTime}
              </span>
            </div>
          </div>
        </Link>

        <TopicNav topics={TOPICS} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/blog/prompting-claude-fable-5"
            className="group flex flex-col bg-background border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow h-full"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
                alt="The GOALS framework for prompting Claude Fable 5"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">Field Guide</Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 8 min read
                </span>
              </div>
              <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                Your Best Prompting Habits Are Now Your Worst: The GOALS Framework for Claude Fable 5
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                Prompting Claude Fable 5 needs a different playbook. The GOALS framework, distilled
                from official Anthropic guidance: give the why, outcomes not steps, agree on done,
                let it run, show the evidence.
              </p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <Newsletter />
      <CTA />
    </PageLayout>
  );
}
