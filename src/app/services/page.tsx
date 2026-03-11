import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { allServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From vacation rental turnovers to snow removal — Tahoe Clean offers comprehensive cleaning and property care services in South Lake Tahoe.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="From vacation rental turnovers to snow removal — we've got you covered."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
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