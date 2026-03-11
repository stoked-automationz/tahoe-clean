import type { Metadata } from "next";
import { ShieldCheck, GraduationCap, Award, Shield } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tahoe Clean — founded by Kyle Leake, committed to delivering exceptional cleaning services to the Lake Tahoe community with honesty, reliability, and attention to detail.",
};

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Background Checked Staff",
    description:
      "Every team member is background checked, carefully interviewed, and professionally trained before servicing any of our clients' properties.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description:
      "Our cleaners undergo thorough professional training to ensure consistent, high-quality results on every job.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description:
      "If you are ever unhappy with any area we've cleaned, we'll return the next day and re-clean the area to your satisfaction.",
  },
  {
    icon: Shield,
    title: "Licensed, Insured & Bonded",
    description:
      "We are fully licensed, insured and bonded — giving you complete peace of mind when we're in your home or business.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Tahoe Clean"
        subtitle="Committed to protecting your family and business — one cleaning at a time."
      />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Founded by Kyle Leake, Tahoe Clean was built on a simple promise:
              to deliver exceptional cleaning services to the Lake Tahoe
              community with honesty, reliability, and attention to detail. We
              understand that your home or vacation rental is one of your most
              valuable assets, and we treat it with the care it deserves.
            </p>
            <p>
              Whether you&apos;re a vacation home owner managing rentals through
              Airbnb, VRBO, or HomeAway, or a local family looking for recurring
              cleaning help, we&apos;re here to make your life easier. Day or
              night, we can be there for your guests and your property.
            </p>
            <p>
              We do a whole lot more than just clean. From handyman services to
              snow removal, hot-tub maintenance to lawn care, we&apos;re your
              one-stop solution for property management in South Lake Tahoe.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Trust Tahoe Clean
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}