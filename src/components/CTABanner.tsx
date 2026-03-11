import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready for a spotless home?
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Call today for a free consultation. Licensed, insured, and bonded.
        </p>
        <Link
          href="tel:7756007437"
          className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
        >
          <Phone className="h-5 w-5" />
          775-600-7437
        </Link>
      </div>
    </section>
  );
}