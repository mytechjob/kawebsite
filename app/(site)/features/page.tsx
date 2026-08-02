import { FeaturesPageBody } from "@/components/features/features-page-body";
import { allKeywords } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | AI Agents That Answer & Take Action",
  description: "Explore Knowledge Agents features: train on any content, take real actions, deploy as a widget or chat page, analytics, multilingual support, human handoff, and enterprise-grade security.",
  keywords: allKeywords("build", "agentic", "core"),
  alternates: { canonical: "/new/features" },
};

export default function NewFeaturesPage() {
  return <FeaturesPageBody basePath="/new/features" />;
}
