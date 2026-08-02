import { FeaturesPageBody } from "@/components/features/features-page-body";
import { allKeywords } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "AI Customer Support Features & Actions",
  description: "Train AI agents on your content, deploy across customer touchpoints, take real actions, analyze conversations, hand off to humans, and protect customer data.",
  path: "/features",
  keywords: allKeywords("build", "agentic", "support", "core"),
});

export default function NewFeaturesPage() {
  return <FeaturesPageBody basePath="/features" />;
}
