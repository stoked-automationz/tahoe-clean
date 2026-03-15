import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import StructuredData from "@/components/StructuredData";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Lake Tahoe Cleaning Services",
  description:
    "Frequently asked questions about Tahoe Clean's services, coverage area, cleaning products, and satisfaction guarantee.",
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
      name: "FAQs",
      item: "https://tahoe-clean.vercel.app/faqs",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <StructuredData schemas={[breadcrumbSchema, faqSchema]} />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services."
      />

      <section className="py-16 md:py-24">
        <FAQAccordion />
      </section>

      <CTABanner />
    </>
  );
}