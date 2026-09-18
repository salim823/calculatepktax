import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://calculatepktax.vercel.app"),

  title: "Pakistan Salary Tax Calculator 2026-27 | Income Tax Calculator",

  description:
    "Calculate salary tax in Pakistan for 2026-27. Estimate monthly and annual income tax, tax deductions, take home salary, and net pay using our online tax calculator.",

  keywords: [
    "Pakistan Salary Tax Calculator",
    "Salary Tax Calculator Pakistan",
    "Pakistan Income Tax Calculator",
    "Income Tax Calculator Pakistan",
    "Tax Calculator Pakistan",
    "Salary Tax Pakistan",
    "Income Tax Pakistan",
    "Monthly Salary Tax Calculator",
    "Annual Salary Tax Calculator",
    "Take Home Salary Calculator",
    "Net Salary Calculator Pakistan",
    "Pakistan Tax Slabs 2026-27",
    "Salary Tax Slabs Pakistan",
    "Income Tax Slabs Pakistan",
    "Tax on Salary in Pakistan",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Pakistan Salary Tax Calculator 2026-27 | Income Tax Calculator",
    description:
      "Calculate salary tax in Pakistan for 2026-27. Estimate monthly and annual income tax, tax deductions, take home salary, and net pay.",
    url: "https://calculatepktax.vercel.app/",
    siteName: "CalculatePKTax",
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pakistan Salary Tax Calculator 2026-27 | Income Tax Calculator",
    description:
      "Calculate salary tax in Pakistan for 2026-27 and estimate your monthly tax, annual tax, take home salary, and net pay.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}