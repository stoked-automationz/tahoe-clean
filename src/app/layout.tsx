import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Tahoe Clean | Premium Cleaning Services in Lake Tahoe",
    template: "%s | Tahoe Clean",
  },
  description:
    "Professional vacation home & residential cleaning services at Lake Tahoe. Same-day turnovers, recurring cleans, handyman services, and more. Licensed, insured, and bonded.",
  openGraph: {
    title: "Tahoe Clean | Premium Cleaning Services in Lake Tahoe",
    description:
      "Professional vacation home & residential cleaning services at Lake Tahoe. Licensed, insured, and bonded.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahoe Clean | Premium Cleaning Services in Lake Tahoe",
    description:
      "Professional vacation home & residential cleaning services at Lake Tahoe.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}