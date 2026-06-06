import { LegalPage } from "@/components/layout/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Knowledge Agents Privacy Policy — how we collect, use, and protect your data.",
  robots: { index: false, follow: false },
};

const sections = [
  { heading: "Information we collect", body: ["When you create an account, we collect your name, email address, company name, and billing information.", "When you use the platform, we collect the content you upload to train agents, conversation logs, and usage analytics.", "We also collect standard web server log data including IP addresses, browser types, and page visits for operational purposes."] },
  { heading: "How we use your information", body: ["To provide, maintain, and improve the Knowledge Agents platform.", "To process payments and manage your subscription.", "To communicate with you about your account, product updates, and support inquiries.", "To analyze usage patterns and improve our AI models and service quality.", "To comply with legal obligations and enforce our terms."] },
  { heading: "AI models & your data", body: ["Your training data and conversation content are used solely to provide services to you. We do not use your data to train our foundation AI models or those of any third-party AI provider.", "When you use third-party model providers through the platform (such as OpenAI, Anthropic, or Google), your prompts and content are processed by those providers according to their respective data usage policies. Our paid plans offer opt-out options for processing by third-party models."] },
  { heading: "How we share information", body: ["With third-party service providers who help us operate the platform (payment processors, cloud hosting, email delivery, analytics).", "With AI model providers when you choose to use their models through our platform.", "If required by law, regulation, or legal process.", "In connection with a merger, acquisition, or sale of assets — users will be notified before any transfer."] },
  { heading: "Data retention", body: ["We retain your account information and uploaded content for as long as your account is active.", "Conversation logs are retained for 90 days by default. Enterprise plans can configure custom retention policies.", "You may request deletion of your data at any time by contacting our support team. We will process deletion requests within 30 days."] },
  { heading: "Security", body: ["We implement industry-standard security measures including encryption in transit (TLS) and at rest, access controls, and regular security assessments.", "Data is scoped per workspace, and role-based access controls are available on our Enterprise plan.", "Enterprise plans include SSO integration, audit logging, and custom data residency options."] },
  { heading: "Your rights", body: ["Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal data.", "You may also have the right to restrict or object to certain processing activities.", "To exercise any of these rights, please contact us at hello@knowledgeagents.com."] },
  { heading: "International transfers", body: ["Your data may be processed in countries where our servers and service providers operate.", "We ensure appropriate safeguards are in place for any international data transfers, including standard contractual clauses where applicable."] },
  { heading: "Children's privacy", body: ["Knowledge Agents is not directed at children under the age of 13, and we do not knowingly collect personal information from children."] },
  { heading: "Changes to this policy", body: ["We may update this Privacy Policy from time to time. Material changes will be communicated via email or platform notification.", "Continued use of the platform after changes take effect constitutes acceptance of the revised policy."] },
  { heading: "Contact", body: ["If you have questions about this Privacy Policy or our data practices, please contact us at hello@knowledgeagents.com."] },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 1, 2026"
      intro="At Knowledge Agents, we take your privacy seriously. This policy describes how we collect, use, and protect your information when you use our platform."
      sections={sections}
    />
  );
}
