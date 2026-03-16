import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[750px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-tahoe.jpg"
        alt="Professional cleaning services in South Lake Tahoe"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      <div className="relative z-10 text-center px-4 pt-16 md:pt-0 max-w-3xl">
        <Image
          src="/images/logo.png"
          alt="Tahoe Clean"
          width={450}
          height={300}
          className="h-40 md:h-56 lg:h-64 w-auto mx-auto mb-6 md:mb-10 drop-shadow-2xl"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Cleaning Services in South Lake Tahoe
        </h1>
        <p className="text-xl md:text-2xl text-accent italic mb-2">
          Life&apos;s too short to clean — that&apos;s why we are here!
        </p>
        <p className="text-white/80 text-lg md:text-xl mb-8">
          Premium vacation home & residential cleaning services at Lake Tahoe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="tel:7756007437"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call 775-600-7437
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}