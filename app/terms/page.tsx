import { LegalPage } from "@/components/layout/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Knowledge Agents Terms of Service — rules and guidelines for using the platform.",
  robots: { index: false, follow: false },
};

const sections = [
  { heading: "Acceptance of terms", body: ["By accessing or using the Knowledge Agents platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the service."] },
  { heading: "Description of service", body: ["Knowledge Agents provides a no-code platform for building AI agents that can answer questions and take actions based on content uploaded by users.", "The platform includes features for training agents on uploaded content, embedding agents on websites, creating standalone chat pages, and integrating with third-party services through actions.", "We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with reasonable notice."] },
  { heading: "Accounts", body: ["You must be at least 18 years old to create an account.", "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.", "You agree to provide accurate and complete information when creating your account and to update it as necessary."] },
  { heading: "Your content", body: ["You retain all rights to the content you upload to train your agents ('Your Content').", "By uploading Your Content, you grant us a limited license to use it solely to provide, maintain, and improve the Knowledge Agents service for your account.", "You represent that you have the necessary rights to upload Your Content and that doing so does not violate any third-party rights or applicable laws."] },
  { heading: "Acceptable use", body: ["You agree not to use the platform for any unlawful purpose or in violation of these terms.", "You agree not to train agents on content that is illegal, harmful, abusive, or that promotes illegal activities.", "You agree not to use the platform to generate spam, phishing content, or otherwise fraudulent communications.", "You agree not to attempt to reverse engineer, decompile, or extract the underlying models or algorithms of the platform."] },
  { heading: "Billing and payment", body: ["Paid plans are billed monthly or annually as selected during signup. Annual billing provides approximately two months of savings.", "Fees are non-refundable except as required by applicable law.", "We may change our pricing with 30 days notice. Price changes will not affect your current billing cycle.", "Message credits reset monthly. Unused credits do not roll over."] },
  { heading: "Third-party services", body: ["The platform may integrate with third-party services and AI model providers. Your use of those services is subject to their respective terms and privacy policies.", "We are not responsible for the availability, accuracy, or practices of third-party services."] },
  { heading: "Intellectual property", body: ["The Knowledge Agents platform, including its software, design, branding, and documentation, is owned by Knowledge Agents, Inc. and protected by intellectual property laws.", "You may not copy, modify, distribute, or create derivative works of the platform without our express permission."] },
  { heading: "Disclaimers", body: ["THE SERVICE IS PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.", "We do not warrant that the service will be uninterrupted, error-free, or that AI-generated responses will always be accurate or appropriate.", "You are responsible for reviewing and validating AI-generated responses before relying on them, especially in contexts with legal, financial, or health implications."] },
  { heading: "Limitation of liability", body: ["TO THE MAXIMUM EXTENT PERMITTED BY LAW, KNOWLEDGE AGENTS, INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.", "Our total liability for any claim arising from your use of the service shall not exceed the amount paid by you in the twelve months preceding the claim."] },
  { heading: "Termination", body: ["You may terminate your account at any time through the platform settings.", "We may suspend or terminate your account for violation of these terms or for extended inactivity, with notice where reasonably possible.", "Upon termination, your right to use the service ceases immediately. Your content will be deleted in accordance with our data retention policy."] },
  { heading: "Changes to terms", body: ["We may update these Terms of Service from time to time. Material changes will be communicated via email or platform notification.", "Continued use of the platform after changes take effect constitutes acceptance of the revised terms."] },
  { heading: "Contact", body: ["For questions about these Terms of Service, please contact us at hello@knowledgeagents.com."] },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 1, 2026"
      intro="Welcome to Knowledge Agents. These Terms of Service govern your use of our no-code AI agent platform. Please read them carefully."
      sections={sections}
    />
  );
}
