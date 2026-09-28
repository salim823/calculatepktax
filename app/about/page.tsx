import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About CalculatePKTax — a free, dedicated Pakistan salary tax calculator with FBR's latest 2026-27 slabs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
        About
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        About CalculatePKTax
      </h1>
      <p className="mt-2 text-xs text-gray-400">Last updated: 28 September 2026</p>

      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-gray-700 sm:text-base">
        <p>
          <strong className="text-gray-900">CalculatePKTax</strong> is a
          dedicated Pakistan salary tax calculator. Our only job: help
          salaried Pakistanis understand exactly how much income tax applies
          to their salary — using the Federal Board of Revenue&apos;s official
          slabs, updated for every tax year.
        </p>
        <p>
          The site was created because most online tax calculators for
          Pakistan were either outdated, inaccurate, or buried inside generic
          finance portals. We built one tool, for one country, for one
          purpose — and we keep its numbers verified against FBR
          notifications.
        </p>
        <h2 className="pt-2 text-xl font-extrabold text-gray-900">
          What we offer
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Free salary tax calculator with monthly &amp; annual results</li>
          <li>Slab-by-slab tax breakdown you can match with your payslip</li>
          <li>Complete FBR tax slab tables for 2026-27 and 2025-26</li>
          <li>Plain-English tax guides written for Pakistani employees</li>
        </ul>
        <h2 className="pt-2 text-xl font-extrabold text-gray-900">
          Our accuracy promise
        </h2>
        <p>
          Tax figures on this site follow FBR&apos;s Tax Year 2027
          notification (Finance Act 2026) for salaried individuals. When FBR
          announces new rates, we update the calculator and mark every page
          with a new &quot;last updated&quot; date. Figures remain estimates
          for guidance — see our{" "}
          <Link
            href="/disclaimer"
            target="_blank"
            rel="noopener"
            className="font-bold text-brand-700 hover:underline"
          >
            Disclaimer
          </Link>
          .
        </p>
        <h2 className="pt-2 text-xl font-extrabold text-gray-900">
          Who maintains this site?
        </h2>
        <p>
          CalculatePKTax is independently maintained by Hafiz Muhammad, with
          content reviewed against official FBR publications before every
          release. For questions or corrections, reach us via the{" "}
          <Link
            href="/contact"
            target="_blank"
            rel="noopener"
            className="font-bold text-brand-700 hover:underline"
          >
            Contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
