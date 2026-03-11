import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import DifferentiatorCard from "@/components/DifferentiatorCard";
import CTABanner from "@/components/CTABanner";
import { homeServices } from "@/data/services";

const differentiators = [
  {
    title: "Background Checked",
    description:
      "Every team member is background checked, carefully interviewed, and professionally trained.",
    icon: "ShieldCheck",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Unhappy with any area? We'll return the next day and re-clean to your complete satisfaction.",
    icon: "Award",
  },
  {
    title: "Green Cleaning",
    description:
      "Eco-friendly products, HEPA vacuums, and microfiber cloths that protect health and environment.",
    icon: "Leaf",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            More than just a cleaning service
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For Tahoe vacation home owners, our job is to make sure you never
            have to worry about the condition of your home or if your guests are
            cared for. From same-day turnovers to hot-tub maintenance, snow
            removal, and handyman repairs — we&apos;re your complete property
            care solution.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {homeServices.map((service) => (
              <Link href="/services" key={service.title}>
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What Our Clients Say
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              The Tahoe Clean Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item) => (
              <DifferentiatorCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}