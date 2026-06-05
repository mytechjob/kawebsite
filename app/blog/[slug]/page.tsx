import { notFound } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { ArticleRenderer } from "@/components/blog/article-renderer";
import { Newsletter } from "@/components/sections/newsletter";
import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/metadata";
import { getPost, getRelatedPosts, POSTS } from "@/data/blog";
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
    authors: [{ name: post.author.name }],
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <PageLayout>
      <JsonLd data={[articleSchema({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.image, author: post.author.name, datePublished: post.date }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]), ...(post.faqs ? [faqSchema(post.faqs)] : [])]} />
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
            <div className="flex items-center gap-4 text-sm">
              <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{post.author.initials}</div>
              <div><div className="font-semibold text-foreground">{post.author.name}</div><div className="text-muted-foreground flex items-center gap-2">{post.dateDisplay}<span>&bull;</span><span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span></div></div>
            </div>
          </header>
          <div className="rounded-2xl overflow-hidden mb-10 border"><img src={post.image} alt={post.title} className="w-full h-auto object-cover" /></div>
          <ArticleRenderer blocks={post.content} />
          <div className="mt-14 p-6 rounded-2xl border bg-muted/20 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">{post.author.initials}</div>
            <div><div className="font-bold">{post.author.name}</div><div className="text-sm text-muted-foreground mb-2">{post.author.role}, Knowledge Agents</div><p className="text-sm text-foreground/80">Writing about AI agents, customer experience, and the technology that powers Knowledge Agents.</p></div>
          </div>
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
