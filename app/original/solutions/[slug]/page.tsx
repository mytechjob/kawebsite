import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/page-layout";
import { SolutionPageBody } from "@/components/solutions/solution-page-body";
import { getSolution, SOLUTIONS } from "@/data/solutions";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <PageLayout>
      <SolutionPageBody solution={solution} basePath="/solutions" />
    </PageLayout>
  );
}
