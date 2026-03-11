import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Vacation Rental Cleaning",
  "Recurring Cleaning",
  "Handyman Services",
  "Deep Cleaning",
  "Snow Removal",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Tahoe Clean"
              width={96}
              height={64}
              className="h-16 w-auto mb-4 brightness-200"
            />
            <p className="text-sm leading-relaxed">
              Professional cleaning services for Lake Tahoe homes, vacation
              rentals, and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <Link
                href="tel:7756007437"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                775-600-7437
              </Link>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                South Lake Tahoe, CA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} Tahoe Clean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}