import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { POSTS } from "@/data/blog";
import { SOLUTIONS } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "features", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "ainative", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "ainative/platform", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "ainative/product", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "ainative/revenue-intelligence", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "ainative/pricing", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "ainative/compare", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "new", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "new/platform", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "new/revenue-intelligence", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "new/pricing", priority: 0.5, changeFrequency: "weekly" as const },
    { path: "new/compare", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "new/features", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "what-is-a-knowledge-agent", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "compare", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "blog/prompting-claude-fable-5", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}/${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const solutionEntries: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newSolutionEntries: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${baseUrl}/new/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const blogEntries: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...solutionEntries, ...newSolutionEntries, ...blogEntries];
}
