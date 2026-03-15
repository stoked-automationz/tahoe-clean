import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Tahoe Clean. Learn how we collect, use, and protect your personal information.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tahoe-clean.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: "https://tahoe-clean.vercel.app/privacy",
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <StructuredData schemas={[breadcrumbSchema]} />
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral">
          {/* TODO: Have a legal professional review and finalize this privacy policy */}
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 2026
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you contact us by phone, email, or through our website, we may
            collect your name, phone number, email address, and property address
            to provide our cleaning and property care services.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our cleaning services</li>
            <li>Communicate with you about appointments and services</li>
            <li>Send service-related notifications</li>
            <li>Respond to your inquiries and requests</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties. We may share information with
            trusted third parties who assist us in operating our business,
            provided they agree to keep your information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{" "}
            <a href="tel:7756007437" className="text-primary hover:underline">
              775-600-7437
            </a>{" "}
            or{" "}
            {/* TODO: Confirm email address */}
            <a
              href="mailto:info@tahoeclean.com"
              className="text-primary hover:underline"
            >
              info@tahoeclean.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
