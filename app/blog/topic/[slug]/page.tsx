import { notFound } from "next/navigation";
import Link from "next/link";
import { PageLayout, PageHero } from "@/components/layout/page-layout";
import { PostCard, TopicNav } from "@/components/blog/post-card";
import { Newsletter } from "@/components/sections/newsletter";
import { CTA } from "@/components/sections/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/metadata";
import { TOPICS, getTopic, getPostsByTopic } from "@/data/blog";
import { absoluteUrl } from "@/lib/site";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return TOPICS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  const title = `${topic.name} Articles`;
  return {
    title,
    description: topic.description,
    alternates: { canonical: `/blog/topic/${topic.slug}` },
    openGraph: {
      type: "website",
      url: `/blog/topic/${topic.slug}`,
      title: `${title} | Knowledge Agents Blog`,
      description: topic.description,
    },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const posts = getPostsByTopic(topic.slug);

  return (
    <PageLayout>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: topic.name, path: `/blog/topic/${topic.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${topic.name} — Knowledge Agents Blog`,
            description: topic.description,
            url: absoluteUrl(`/blog/topic/${topic.slug}`),
            hasPart: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: absoluteUrl(`/blog/${p.slug}`),
              datePublished: p.date,
            })),
          },
        ]}
      />
      <PageHero eyebrow="Blog & Resources" title={topic.name} description={topic.description} />

      <div className="container mx-auto px-4 py-16">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground/70">{topic.name}</span>
        </nav>

        <TopicNav topics={TOPICS} active={topic.slug} />

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No articles in this topic yet.{" "}
            <Link href="/blog" className="text-primary hover:underline">
              Browse all articles
            </Link>
            .
          </p>
        )}
      </div>

      <Newsletter />
      <CTA />
    </PageLayout>
  );
}
