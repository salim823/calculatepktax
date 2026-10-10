import Link from "next/link";
import type { Metadata } from "next";
import BonusCalculator from "@/app/components/BonusCalculator";
import Faq from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Bonus Calculator Pakistan – Tax on Bonus Salary 2026-27",
  description:
    "Free bonus calculator Pakistan: calculate tax on your bonus salary with FBR 2026-27 slabs. See tax deducted on bonus, net bonus received and effective rate in seconds.",
  alternates: { canonical: "/bonus-calculator" },
  openGraph: {
    title: "Free Bonus Calculator Pakistan – Tax on Bonus Salary 2026-27",
    description:
      "Free bonus calculator Pakistan: calculate tax deducted on your bonus salary with FBR 2026-27 slabs. Net bonus & effective rate in seconds.",
    url: "https://calculatepktax.vercel.app/bonus-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Bonus Calculator Pakistan – Tax on Bonus Salary 2026-27",
    description:
      "Calculate tax on your bonus salary in Pakistan with FBR 2026-27 slabs. Free, instant, no signup.",
  },
};

const BONUS_FAQS = [
  {
    q: "How is bonus taxed in Pakistan?",
    a: "A bonus is not taxed at a separate flat rate. It is added to your annual salary income and taxed at your marginal slab rate — the rate of the highest FBR slab your total income reaches. That is why two people with the same bonus can pay different tax on it.",
  },
  {
    q: "Is bonus taxed separately from salary in Pakistan?",
    a: "No. For income tax purposes, bonus is part of your salary income for the year. Your employer adds it to your projected annual income and withholds tax accordingly under Section 149 of the Income Tax Ordinance.",
  },
  {
    q: "What is the tax rate on bonus salary in 2026-27?",
    a: "It depends on your total annual income. If your salary already puts you in the 20% slab (Rs 2.2M–3.2M/year), an extra bonus is taxed at 20%. Use the calculator above — it computes tax on (salary + bonus) minus tax on salary alone, which is exactly the incremental tax on your bonus.",
  },
  {
    q: "Does my employer deduct tax on bonus?",
    a: "Yes. Employers are required to withhold income tax on bonuses when paid, based on your projected annual taxable income using FBR's 2026-27 slabs. The amount appears on your payslip as tax deduction.",
  },
  {
    q: "Is there any tax-free limit for bonus in Pakistan?",
    a: "No special exemption exists for bonuses. Only the general tax-free threshold applies: total annual salary income up to Rs 600,000 (Rs 50,000/month) is tax-free in Tax Year 2026-27.",
  },
  {
    q: "How do I calculate tax on a monthly bonus in Pakistan?",
    a: "Use this monthly bonus calculator Pakistan tool: enter your regular monthly salary and the bonus amount as paid. The calculator adds the bonus to your projected annual income and applies FBR's 2026-27 slabs, so the result reflects the exact incremental tax on your bonus — whether it is paid monthly, quarterly or once a year.",
  },
  {
    q: "Is there a separate monthly bonus calculator for Pakistan?",
    a: "No separate tool is needed — this free bonus calculator Pakistan works for any bonus frequency. Enter the bonus amount exactly as you receive it; the tax logic annualizes your income behind the scenes and computes the correct withholding.",
  },
  {
    q: "Can I reduce the tax on my bonus?",
    a: "There is no legal way to avoid tax on a bonus — it is salary income. The honest way to pay less overall is to make sure your employer applies the correct 2026-27 slabs (rates were cut across the board by the Finance Act 2026), since over-withholding is common.",
  },
];

export default function BonusCalculatorPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-pattern bg-brand-800">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-100 ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              FBR Tax Year 2026-27 Slabs
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Free Bonus Calculator Pakistan 2026-27
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Got a bonus? Find out exactly how much tax is deducted from your
              bonus salary in Pakistan. Enter your salary and bonus amount —
              see the tax on your bonus, net bonus received, and effective rate
              instantly, using official FBR 2026-27 slabs.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <BonusCalculator />
          </div>
        </div>
      </section>

      {/* HOW BONUS TAX WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            How Bonus Tax Works in Pakistan
          </h2>
          <div className="prose-like mt-6 space-y-4 text-[15px] leading-relaxed text-gray-700">
            <p>
              In Pakistan, a bonus is treated as part of your salary income —
              not as a separate income type with its own rate. When you receive
              a bonus, it is added to your annual salary, and the combined
              amount is run through FBR&apos;s progressive tax slabs. The
              extra tax caused by that addition is effectively the tax on your
              bonus.
            </p>
            <p>
              This is why your bonus is taxed at your{" "}
              <strong>marginal rate</strong> — the rate of the highest slab
              your income reaches. For example, in 2026-27, if your annual
              salary is Rs 2.4 million (in the 20% slab), a Rs 200,000 bonus
              attracts roughly 20% tax, or about Rs 40,000. Someone earning Rs
              800,000 a year would pay only 1% on the same bonus.
            </p>
            <p>
              Your employer handles this automatically: under Section 149 of
              the Income Tax Ordinance, they project your total annual income
              including the bonus and withhold the right amount when the bonus
              is paid. The calculator above mirrors this exact logic —{" "}
              <Link
                href="/tax-slabs"
                className="font-bold text-brand-700 hover:underline"
              >
                see the FBR tax slabs
              </Link>{" "}
              it uses, or{" "}
              <Link
                href="/"
                className="font-bold text-brand-700 hover:underline"
              >
                calculate your full salary tax
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Bonus added to salary",
              d: "Your bonus joins your annual salary income — there is no separate bonus tax rate in Pakistan.",
            },
            {
              n: "2",
              t: "Taxed at marginal rate",
              d: "The bonus is effectively taxed at your highest slab's rate — the extra tax on (salary + bonus) minus tax on salary alone.",
            },
            {
              n: "3",
              t: "Employer withholds it",
              d: "Your employer deducts the bonus tax when paying it, under Section 149 — check your payslip against this calculator.",
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
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Bonus Tax FAQs — Pakistan 2026-27
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Common questions about tax on bonus salary in Pakistan.
          </p>
          <div className="mt-6">
            <Faq items={BONUS_FAQS} id="faq-bonus" />
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Also read:{" "}
            <Link
              href="/tax-slabs"
              className="font-bold text-brand-700 hover:underline"
            >
              FBR tax slabs 2026-27
            </Link>{" "}
            ·{" "}
            <Link
              href="/"
              className="font-bold text-brand-700 hover:underline"
            >
              monthly salary tax calculator
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
