import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://calculatepktax.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Salary Tax Calculator Pakistan – FBR Tax Slabs 2026-27",
    template: "%s – CalculatePKTax",
  },
  description:
    "Free salary tax calculator for Pakistan with FBR's official 2026-27 slabs. Get monthly tax, annual tax & take-home salary in seconds — no signup.",
  keywords: [
    "salary tax calculator pakistan",
    "income tax calculator pakistan",
    "pakistan salary tax calculator 2026-27",
    "fbr tax slabs 2026-27",
    "tax slab 2026-27 pakistan",
    "pakistan salary calculator",
    "new tax slab for salaried person",
    "tax calculator pakistan",
    "tax calculator 2025-26",
    "tax on salary in pakistan",
    "take home salary calculator pakistan",
    "monthly salary tax calculator pakistan",
  ],
  authors: [{ name: "CalculatePKTax" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Salary Tax Calculator Pakistan – FBR Tax Slabs 2026-27",
    description:
      "Free salary tax calculator for Pakistan with FBR's official 2026-27 tax slabs. Monthly tax, annual tax & take-home pay — instantly, no signup.",
    url: SITE_URL,
    siteName: "CalculatePKTax",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Tax Calculator Pakistan – FBR Tax Slabs 2026-27",
    description:
      "Free salary tax calculator for Pakistan with FBR's official 2026-27 tax slabs. Monthly tax, annual tax & take-home pay — instantly, no signup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CalculatePKTax",
  url: SITE_URL,
  description:
    "Free Pakistan salary tax calculator with FBR income tax slabs 2026-27.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-gray-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
