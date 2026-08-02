import { notFound } from "next/navigation";
import { SolutionPageBody } from "@/components/solutions/solution-page-body";
import { pageMetadata } from "@/lib/metadata";
import { getSolution, SOLUTIONS } from "@/data/solutions";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return pageMetadata({
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function NewSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return <SolutionPageBody solution={solution} basePath="/solutions" />;
}
