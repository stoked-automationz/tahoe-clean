import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tahoe Clean for a free consultation. Serving South Lake Tahoe and the surrounding area. Call 775-600-7437.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    content: (
      <Link
        href="tel:7756007437"
        className="text-primary font-medium hover:underline"
      >
        775-600-7437
      </Link>
    ),
  },
  {
    icon: MapPin,
    title: "Location",
    content: (
      <div className="text-muted-foreground">
        <p>South Lake Tahoe, CA</p>
        <p className="text-sm">Serving the greater Lake Tahoe area</p>
      </div>
    ),
  },
  {
    icon: Clock,
    title: "Availability",
    content: (
      <div className="text-muted-foreground">
        <p>7 Days a Week</p>
        <p className="text-sm">Same-day service available</p>
      </div>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Ready for a spotless home? Give us a call."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-lg border border-border p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{card.title}</h3>
                {card.content}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg border border-border p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Call us today for a free consultation. We&apos;ll discuss your
              cleaning needs and provide an affordable, customized solution for
              your home or business.
            </p>
            <Link
              href="tel:7756007437"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call 775-600-7437
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}