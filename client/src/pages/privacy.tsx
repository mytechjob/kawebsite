import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { SEO, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "Account information: when you create an account, we collect your name, email address, and billing details necessary to provide the service.",
      "Content you provide: the documents, text, URLs, and other materials you upload or connect to train your Knowledge Agents.",
      "Usage data: information about how you and your end users interact with the service, including conversations, log data, device and browser information, and analytics events.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "To provide, maintain, and improve the service, including training and operating your Knowledge Agents and processing the actions you enable.",
      "To communicate with you about your account, security, product updates, and support.",
      "To monitor and protect the security and integrity of the platform, and to comply with legal obligations.",
    ],
  },
  {
    heading: "AI models and your data",
    body: [
      "We do not use your content or end-user conversations to train foundation models. Your content is used only to power your own Knowledge Agents.",
      "We may use third-party model providers (such as providers of GPT, Claude, or Gemini models) to generate responses. Data sent to these providers is governed by their respective terms and our data-processing agreements.",
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We share information with service providers and subprocessors who help us operate the platform (for example, hosting, payments, and model providers), under appropriate confidentiality and data-protection obligations.",
      "We may disclose information if required by law, to protect rights and safety, or in connection with a business transfer such as a merger or acquisition.",
      "We do not sell your personal information.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We retain your information for as long as your account is active or as needed to provide the service. You can delete content and request account deletion at any time.",
      "Some information may be retained as required to comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use encryption in transit and at rest, access controls, and other technical and organizational measures designed to protect your information.",
      "No method of transmission or storage is completely secure, but we work continuously to protect your data and to notify you of material incidents as required by law.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, or port your personal information, and to object to or restrict certain processing.",
      `To exercise these rights, contact us at ${SITE.email}. We will respond in accordance with applicable law.`,
    ],
  },
  {
    heading: "International transfers",
    body: [
      "We may process and store information in countries other than where you live. Where required, we use appropriate safeguards for international transfers of personal data.",
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "The service is not directed to children under 16, and we do not knowingly collect personal information from them.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. We will post the updated version with a new “Last updated” date and, where appropriate, notify you.",
    ],
  },
  {
    heading: "Contact us",
    body: [`If you have questions about this Privacy Policy, contact us at ${SITE.email}.`],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Knowledge Agents"
        description="How Knowledge Agents collects, uses, and protects your information, and the choices and rights you have over your data."
        path="/privacy"
        noindex
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        updated="June 2, 2026"
        intro={`This Privacy Policy explains how ${SITE.legalName} (“${SITE.name},” “we,” “us”) collects, uses, and protects information when you use our website and platform.`}
        sections={sections}
      />
    </>
  );
}
