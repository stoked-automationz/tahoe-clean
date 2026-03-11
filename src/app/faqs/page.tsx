import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Tahoe Clean's services, coverage area, cleaning products, and satisfaction guarantee.",
};

export default function FAQsPage() {
  return (
    <>
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