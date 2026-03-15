import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData, {
  localBusinessSchema,
} from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tahoe-clean.vercel.app"),
  title: {
    default: "Tahoe Clean | Cleaning Services in South Lake Tahoe, CA",
    template: "%s | Tahoe Clean",
  },
  description:
    "Professional vacation home & residential cleaning services at Lake Tahoe. Same-day turnovers, recurring cleans, handyman services, and more. Licensed, insured, and bonded.",
  openGraph: {
    title: "Tahoe Clean | Cleaning Services in South Lake Tahoe, CA",
    description:
      "Professional vacation home & residential cleaning services at Lake Tahoe. Licensed, insured, and bonded.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tahoe Clean — Cleaning Services in South Lake Tahoe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahoe Clean | Cleaning Services in South Lake Tahoe, CA",
    description:
      "Professional vacation home & residential cleaning services at Lake Tahoe.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StructuredData schemas={[localBusinessSchema]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
