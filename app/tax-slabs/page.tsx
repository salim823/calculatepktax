import Link from "next/link";
import type { Metadata } from "next";
import Faq from "@/app/components/Faq";
import {
  SLABS_2026_27,
  SLABS_2025_26,
  formatPKR,
} from "@/app/lib/tax";

export const metadata: Metadata = {
  title: "FBR Tax Slabs 2026-27 Pakistan | Salary Income Tax Rates",
  description:
    "Complete FBR salary tax slabs for 2026-27: all 8 brackets, rates, formulas, what changed from 2025-26, and worked examples for Pakistani salaried individuals.",
  alternates: { canonical: "/tax-slabs" },
};

const SLAB_FAQS = [
  {
    q: "How many income tax slabs are there in Pakistan for 2026-27?",
    a: "Eight slabs for salaried individuals, restructured from six by the Finance Act 2026. Rates run from 0% (up to Rs 600,000/year) to 35% (above Rs 7,000,000/year).",
  },
  {
    q: "What is the tax rate on salary above Rs 4.1 million in 2026-27?",
    a: "It depends on the portion: 29% on Rs 4.1M–5.6M, 32% on Rs 5.6M–7M, and 35% above Rs 7M. Last year's flat 35% above Rs 4.1M was split into these three gentler bands.",
  },
  {
    q: "Is the 9% surcharge still applicable on salary income?",
    a: "No. For Tax Year 2026-27 the 9% surcharge on salaried income above Rs 10 million has been abolished. It applied in 2025-26.",
  },
  {
    q: "Where can I verify these slab rates officially?",
    a: "FBR's Tax Year 2026-27 salary rates notification and the Finance Act 2026, available on FBR's official website (fbr.gov.pk). Employers are required to deduct tax using these exact rates.",
  },
];

/** Display-only percent label without float dust ("29%" not "28.999999999999996%"). Tax math untouched. */
const rateLabel = (rate: number) =>
  `${parseFloat((rate * 100).toFixed(2)).toString()}%`;

function SlabTable({
  slabs,
  caption,
}: {
  slabs: typeof SLABS_2026_27;
  caption: string;
}) {
  return (
    <div className="slim-scroll overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full min-w-[640px] text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-brand-700 text-left text-xs uppercase tracking-wider text-white">
            <th className="px-5 py-3.5 font-bold">Annual Taxable Salary</th>
            <th className="px-5 py-3.5 font-bold">Rate</th>
            <th className="px-5 py-3.5 font-bold">Tax Payable</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {slabs.map((s, i) => (
            <tr key={i} className="transition-colors hover:bg-brand-50/50">
              <td className="tnum px-5 py-3 font-semibold text-gray-900">
                {s.max
                  ? `${formatPKR(s.min + 1)} – ${formatPKR(s.max)}`
                  : `Above ${formatPKR(s.min)}`}
              </td>
              <td className="px-5 py-3">
                <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-800">
                  {rateLabel(s.rate)}
                </span>
              </td>
              <td className="tnum px-5 py-3 text-gray-600">
                {s.base === 0 && s.rate === 0
                  ? "Nil"
                  : `${formatPKR(s.base)} + ${rateLabel(s.rate)} of amount exceeding ${formatPKR(s.min)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CHANGES: [string, string, string][] = [
  ["Rs 600k – 1.2M", "5%", "1%"],
  ["Rs 1.2M – 2.2M", "15%", "11%"],
  ["Rs 2.2M – 3.2M", "25%", "20%"],
  ["Rs 3.2M – 4.1M", "30%", "25%"],
  ["Rs 4.1M – 5.6M", "35%", "29%"],
  ["Rs 5.6M – 7M", "35%", "32%"],
  ["Above Rs 7M", "35%", "35%"],
  ["Surcharge > Rs 10M", "9%", "Abolished"],
];

export default function TaxSlabsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
          FBR Official Rates
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Pakistan Salary Tax Slabs 2026-27
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600">
          Complete income tax slab table for salaried individuals for Tax Year
          2027 (1 July 2026 – 30 June 2027), per FBR&apos;s notification under
          the Finance Act 2026. Your employer uses these exact rates for
          monthly tax deduction.
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Last updated: 28 September 2026 • Source: FBR (fbr.gov.pk)
        </p>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-extrabold text-gray-900">
          2026-27 Slabs (Current)
        </h2>
        <SlabTable slabs={SLABS_2026_27} caption="FBR salary tax slabs 2026-27" />
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-extrabold text-gray-900">
          What Changed from 2025-26?
        </h2>
        <p className="mt-2 max-w-3xl text-[15px] text-gray-600">
          The Finance Act 2026 cut every rate up to Rs 7 million and split the
          old flat 35% top band into three slabs.
        </p>
        <div className="slim-scroll mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-gray-900 text-left text-xs uppercase tracking-wider text-white">
                <th className="px-5 py-3.5 font-bold">Bracket</th>
                <th className="px-5 py-3.5 font-bold">2025-26</th>
                <th className="px-5 py-3.5 font-bold">2026-27</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {CHANGES.map(([b, old, nw], i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="tnum px-5 py-3 font-semibold text-gray-900">{b}</td>
                  <td className="tnum px-5 py-3 text-gray-500 line-through">{old}</td>
                  <td className="tnum px-5 py-3 font-extrabold text-brand-700">{nw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-extrabold text-gray-900">
          2025-26 Slabs (Previous Year)
        </h2>
        <SlabTable slabs={SLABS_2025_26} caption="FBR salary tax slabs 2025-26" />
        <p className="mt-3 text-sm text-gray-500">
          Note: in 2025-26 an additional 9% surcharge applied on tax payable
          where annual salary exceeded Rs 10 million. This surcharge was
          abolished for 2026-27.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-8">
        <h2 className="text-lg font-extrabold text-gray-900">
          Calculate your exact tax
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Enter your salary and get monthly/annual tax with a slab-by-slab
          breakdown — free.
        </p>
        <Link
          href="/#calculator"
          className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-700"
        >
          Open Salary Tax Calculator
        </Link>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <h2 className="mb-4 text-xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <Faq items={SLAB_FAQS} id="faq-slabs" />
      </div>
    </div>
  );
}
