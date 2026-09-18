import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Salary Tax Calculator 2026-27 | Calculate Income Tax",
  description:
    "Calculate salary tax in Pakistan for 2026-27. Estimate monthly tax, annual income tax, take home salary, and net salary using updated FBR tax slabs.",
  keywords: [
    "Pakistan Salary Tax Calculator",
    "Salary Tax Calculator Pakistan",
    "Pakistan Income Tax Calculator",
    "Income Tax Calculator Pakistan",
    "Tax Calculator Pakistan",
    "Salary Tax Pakistan",
    "Monthly Salary Tax Calculator",
    "Annual Income Tax Calculator",
    "Take Home Salary Calculator Pakistan",
    "Salary After Tax Pakistan",
    "Tax on Salary in Pakistan",
    "Pakistan Tax Slabs 2026-27",
  ],
  alternates: {
    canonical: "https://calculatepktax.vercel.app/calculator",
  },
  openGraph: {
    title: "Pakistan Salary Tax Calculator 2026-27",
    description:
      "Calculate salary tax, annual income tax, monthly tax, and take home salary in Pakistan for Tax Year 2026-27.",
    url: "https://calculatepktax.vercel.app/calculator",
    siteName: "CalculatePKTax",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Salary Tax Calculator 2026-27",
    description:
      "Calculate your estimated salary tax and take home salary in Pakistan for Tax Year 2026-27.",
  },
};

export default function CalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
