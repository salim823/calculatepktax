import Link from "next/link";
import type { Metadata } from "next";
import TaxCalculator from "@/app/components/TaxCalculator";
import Faq from "@/app/components/Faq";
import {
  SLABS_2026_27,
  exampleAtMonthly,
  formatPKR,
} from "@/app/lib/tax";
import { POSTS } from "@/app/lib/posts";

export const metadata: Metadata = {
  title: "Salary Tax Calculator Pakistan 2026-27 – CalculatePKTax",
  description:
    "Calculate salary tax in Pakistan for 2026-27 with FBR's latest slabs. Free income tax calculator — monthly tax, annual tax & take-home salary in seconds.",
  alternates: { canonical: "/" },
};

const HOME_FAQS = [
  {
    q: "How do I calculate salary tax in Pakistan for 2026-27?",
    a: "Find your annual salary, match it to FBR's 2026-27 slab, and apply the formula: fixed slab amount + rate × (salary − slab lower limit). Or simply enter your salary in the calculator above — it does the math instantly with a full slab breakdown.",
  },
  {
    q: "What is the minimum salary for tax deduction in Pakistan?",
    a: "Salary up to Rs 50,000 per month (Rs 600,000 per year) is completely tax-free for salaried individuals in Tax Year 2026-27. Tax applies only to income above this threshold.",
  },
  {
    q: "How much tax is deducted on a Rs 150,000 monthly salary?",
    a: "For 2026-27: Rs 6,000 per month (Rs 72,000 per year), leaving a take-home pay of Rs 144,000/month. The effective tax rate is 4%.",
  },
  {
    q: "Did salary tax decrease in 2026-27?",
    a: "Yes. The Finance Act 2026 cut rates in every bracket up to Rs 7 million, split the old flat 35% band into gentler slabs (29%, 32%, 35%), and abolished the 9% surcharge on high earners.",
  },
  {
    q: "Who deducts salary tax in Pakistan?",
    a: "Your employer deducts it every month under Section 149 of the Income Tax Ordinance — they compute your annual liability from FBR slabs and withhold one-twelfth each month.",
  },
  {
    q: "Is this calculator free to use?",
    a: "Yes, completely free with no signup. It uses FBR's official Tax Year 2027 slabs for salaried individuals.",
  },
];

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pakistan Salary Tax Calculator 2026-27",
  url: "https://calculatepktax.vercel.app/",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
  description:
    "Free online salary tax calculator for Pakistan with FBR 2026-27 slabs. Monthly tax, annual tax and take-home pay.",
};

const EXAMPLE_SALARIES = [100000, 150000, 200000, 300000];

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {/* HERO */}
      <section className="hero-pattern bg-brand-800">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-100 ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              FBR Tax Year 2026-27 Slabs
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Salary Tax Calculator Pakistan
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Calculate your income tax in seconds with FBR&apos;s latest
              2026-27 slabs. Monthly tax, annual tax, and take-home salary —
              free, accurate, no signup.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-brand-100">
              <span>✓ 8 official FBR slabs</span>
              <span>✓ Slab-by-slab breakdown</span>
              <span>✓ 2025-26 comparison</span>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <TaxCalculator />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
          {[
            { v: "8", l: "FBR salary slabs" },
            { v: "Rs 600k", l: "Tax-free per year" },
            { v: "0%", l: "Surcharge (abolished)" },
            { v: "100%", l: "Free, no signup" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="tnum text-2xl font-extrabold text-brand-700 sm:text-3xl">
                {s.v}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SLAB SUMMARY */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            FBR Salary Tax Slabs 2026-27
          </h2>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            Pakistan uses progressive taxation — each portion of your salary is
            taxed at its slab&apos;s rate. Here&apos;s the official table for
            salaried individuals.
          </p>
        </div>

        <div className="slim-scroll mt-6 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-brand-700 text-left text-xs uppercase tracking-wider text-white">
                <th className="px-5 py-3.5 font-bold">Annual Salary</th>
                <th className="px-5 py-3.5 font-bold">Tax Rate</th>
                <th className="px-5 py-3.5 font-bold">Tax Formula</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {SLABS_2026_27.map((s, i) => (
                <tr key={i} className="transition-colors hover:bg-brand-50/50">
                  <td className="tnum px-5 py-3 font-semibold text-gray-900">
                    {s.max
                      ? `${formatPKR(s.min + 1)} – ${formatPKR(s.max)}`
                      : `Above ${formatPKR(s.min)}`}
                  </td>
                  <td className="px-5 py-3">
                    <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-800">
                      {(s.rate * 100).toString().replace(/\.0$/, "")}%
                    </span>
                  </td>
                  <td className="tnum px-5 py-3 text-gray-600">
                    {s.base === 0 && s.rate === 0
                      ? "No tax"
                      : `${formatPKR(s.base)} + ${(s.rate * 100).toString().replace(/\.0$/, "")}% above ${formatPKR(s.min)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          href="/tax-slabs"
          target="_blank"
          rel="noopener"
          className="mt-5 inline-flex items-center gap-2 font-bold text-brand-700 hover:underline"
        >
          View complete slab guide with examples →
        </Link>
      </section>

      {/* EXAMPLES */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Salary Tax Examples (2026-27)
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Real calculations at common salary levels — verified against FBR
              slabs.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXAMPLE_SALARIES.map((m) => {
              const r = exampleAtMonthly(m);
              return (
                <div
                  key={m}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="tnum text-sm font-bold uppercase tracking-wide text-gray-500">
                    {formatPKR(m)}/month
                  </p>
                  <p className="tnum mt-2 text-2xl font-extrabold text-brand-700">
                    {formatPKR(r.monthlyTax)}
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    monthly tax
                  </p>
                  <div className="mt-3 border-t border-gray-100 pt-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Annual tax</span>
                      <span className="tnum font-bold text-gray-900">
                        {formatPKR(r.annualTax)}
                      </span>
                    </div>
                    <div className="mt-1 flex justify-between">
                      <span className="text-gray-500">Take-home/mo</span>
                      <span className="tnum font-bold text-gray-900">
                        {formatPKR(r.monthlyTakeHome)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            How Salary Tax Works in Pakistan
          </h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Enter your salary",
              d: "Type your monthly or annual gross salary into the calculator above and pick the tax year. Results appear instantly — no button needed.",
            },
            {
              n: "2",
              t: "We apply FBR slabs",
              d: "Your income is split across the 8 official 2026-27 slabs. Each portion is taxed at its own rate — never the top rate on everything.",
            },
            {
              n: "3",
              t: "See tax & take-home",
              d: "Get monthly and annual tax, effective tax rate, take-home pay, and a slab-by-slab breakdown you can compare with your payslip.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-gray-900">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="prose-like mt-10 max-w-3xl space-y-4 text-[15px] leading-relaxed text-gray-700">
          <h3 className="text-xl font-extrabold text-gray-900">
            Who pays salary tax in Pakistan?
          </h3>
          <p>
            Anyone earning salary income above Rs 50,000 per month (Rs 600,000
            per year) pays income tax. Your employer deducts it every month
            under Section 149 of the Income Tax Ordinance — you never pay it
            separately. These slabs apply when salary is more than 75% of your
            total taxable income.
          </p>
          <h3 className="text-xl font-extrabold text-gray-900">
            Why did tax decrease in 2026-27?
          </h3>
          <p>
            The Finance Act 2026 gave the salaried class major relief: rates
            were cut in every bracket up to Rs 7 million, the old flat 35%
            top band was split into three gentler slabs (29%, 32%, 35%), and
            the 9% surcharge on income above Rs 10 million was abolished.
            Most salaried Pakistanis now keep noticeably more of their pay.{" "}
            <Link
              href="/tax-slabs"
              target="_blank"
              rel="noopener"
              className="font-bold text-brand-700 hover:underline"
            >
              See the full comparison →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Quick answers about salary tax in Pakistan for 2026-27.
          </p>
          <div className="mt-6">
            <Faq items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Latest Tax Guides
          </h2>
          <Link
            href="/blog"
            target="_blank"
            rel="noopener"
            className="text-sm font-bold text-brand-700 hover:underline"
          >
            All guides →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              target="_blank"
              rel="noopener"
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                {p.category}
              </p>
              <h3 className="mt-2 font-extrabold leading-snug text-gray-900 group-hover:text-brand-700">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{p.readTime}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
