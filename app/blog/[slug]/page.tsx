import { notFound } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { ArticleRenderer } from "@/components/blog/article-renderer";
import { ArticleFooterCta } from "@/components/blog/article-footer-cta";
import { Newsletter } from "@/components/sections/newsletter";
import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import { getPost, getRelatedPosts, getTopic, POSTS } from "@/data/blog";
import { Clock, ChevronRight, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Knowledge Agents Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);
  const postTopics = post.topics.map(getTopic).filter((t) => t !== undefined);

  return (
    <PageLayout>
      <JsonLd data={[articleSchema({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.image, datePublished: post.date }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]), ...(post.faqs ? [faqSchema(post.faqs)] : [])]} />
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8 flex-wrap">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground/70 truncate">{post.category}</span>
          </nav>
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.dateDisplay}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
          </header>
          <div className="rounded-2xl overflow-hidden mb-10 border"><img src={post.image} alt={post.title} className="w-full h-auto object-cover" /></div>
          <ArticleRenderer blocks={post.content} />
          {postTopics.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="text-sm font-semibold text-muted-foreground mb-3">Topics</div>
              <div className="flex flex-wrap gap-2">
                {postTopics.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/blog/topic/${t.slug}`}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <ArticleFooterCta />
        </div>
      </article>
      {related.length > 0 && (
        <section className="py-16 bg-muted/30 border-t">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold font-display mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block bg-background border rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="h-36 overflow-hidden"><img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-5"><Badge variant="secondary" className="mb-2">{r.category}</Badge><h3 className="font-bold leading-snug group-hover:text-primary transition-colors">{r.title}</h3></div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10"><Link href="/blog" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">View all articles <ArrowRight className="w-4 h-4" /></Link></div>
          </div>
        </section>
      )}
      <Newsletter />
      <CTA />
    </PageLayout>
  );
}
