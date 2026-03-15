type SchemaObject = Record<string, unknown>;

interface StructuredDataProps {
  schemas: SchemaObject[];
}

const localBusinessSchema: SchemaObject = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  name: "Tahoe Clean",
  url: "https://tahoe-clean.vercel.app",
  telephone: "+1-775-600-7437",
  logo: "https://tahoe-clean.vercel.app/images/logo.png",
  image: "https://tahoe-clean.vercel.app/images/hero-tahoe.jpg",
  priceRange: "$$",
  description:
    "Professional vacation home & residential cleaning services in South Lake Tahoe. Same-day turnovers, recurring cleans, handyman services, and more.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Lake Tahoe",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "Lake Tahoe Area",
  },
  sameAs: [],
};

export { localBusinessSchema };

// Note: dangerouslySetInnerHTML is safe here because the content is
// hardcoded JSON-LD schema objects, not user-supplied input.
export default function StructuredData({ schemas }: StructuredDataProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
