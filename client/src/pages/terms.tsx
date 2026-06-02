import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { SEO, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: [
      `By accessing or using ${SITE.name} (the “service”), you agree to be bound by these Terms of Service. If you are using the service on behalf of an organization, you represent that you have authority to bind that organization.`,
    ],
  },
  {
    heading: "Description of service",
    body: [
      "The service lets you create AI agents (“Knowledge Agents”) trained on content you provide, deploy them as chat widgets or chat pages, and enable actions through connected tools.",
      "We may update, improve, or modify features of the service over time.",
    ],
  },
  {
    heading: "Accounts and eligibility",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
      "You must be at least 16 years old, or the age of majority in your jurisdiction, to use the service.",
    ],
  },
  {
    heading: "Your content and responsibilities",
    body: [
      "You retain ownership of the content you upload. You grant us a limited license to host and process it solely to provide the service to you.",
      "You are responsible for ensuring you have the rights to the content you provide and that it complies with applicable laws.",
      "You are responsible for the configuration of your agents and the actions they are permitted to take.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "You agree not to use the service to violate any law, infringe intellectual property, transmit harmful or unlawful content, attempt to disrupt or reverse-engineer the service, or generate deceptive or abusive content.",
      "We may suspend or terminate accounts that violate these terms or that pose a risk to the platform or other users.",
    ],
  },
  {
    heading: "Plans, billing, and credits",
    body: [
      "Paid plans are billed in advance on a recurring basis. Message credits and limits are described on the pricing page and reset each billing cycle.",
      "Fees are non-refundable except where required by law. You can upgrade, downgrade, or cancel at any time; cancellations take effect at the end of the current billing period.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "The service integrates with third-party tools and AI model providers. Your use of those integrations may be subject to the third party's terms, and we are not responsible for third-party services.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      `The service, including its software, design, and trademarks, is owned by ${SITE.legalName} and protected by law. These terms do not grant you any rights to our intellectual property except as needed to use the service.`,
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "The service is provided “as is” without warranties of any kind. AI-generated responses may be inaccurate or incomplete, and you are responsible for reviewing and configuring agents appropriately for your use case.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, or consequential damages, or for lost profits or data, arising from your use of the service.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "You may stop using the service at any time. We may suspend or terminate access if you breach these terms or as needed to protect the platform. Upon termination, your right to use the service ends.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. Material changes will be posted with a new “Last updated” date, and continued use of the service constitutes acceptance.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms? Contact us at ${SITE.email}.`],
  },
];

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service | Knowledge Agents"
        description="The terms and conditions governing your use of the Knowledge Agents website and platform."
        path="/terms"
        noindex
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalPage
        title="Terms of Service"
        updated="June 2, 2026"
        intro={`These Terms of Service govern your access to and use of ${SITE.name}. Please read them carefully.`}
        sections={sections}
      />
    </>
  );
}
