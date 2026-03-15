import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import StructuredData from "@/components/StructuredData";
import { allServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Cleaning & Property Services in South Lake Tahoe",
  description:
    "From vacation rental turnovers to snow removal — Tahoe Clean offers comprehensive cleaning and property care services in South Lake Tahoe.",
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
      name: "Services",
      item: "https://tahoe-clean.vercel.app/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData schemas={[breadcrumbSchema]} />
      <PageHeader
        title="Our Services"
        subtitle="From vacation rental turnovers to snow removal — we've got you covered."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Comprehensive Property Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}