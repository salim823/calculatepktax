import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pakistan Income Tax Slabs 2026-27 | Salary Tax Rates",
  description:
    "View Pakistan salary tax slabs for 2026-27, including taxable income brackets, tax rates, formulas, and worked examples for salaried individuals.",
  keywords: [
    "Pakistan Income Tax Slabs 2026-27",
    "Pakistan Salary Tax Slabs 2026-27",
    "Salary Tax Slabs Pakistan",
    "Income Tax Slabs Pakistan",
    "Pakistan Tax Slabs 2026-27",
    "Salary Tax Rates Pakistan",
    "Income Tax Rates Pakistan",
    "FBR Salary Tax Slabs",
    "Tax on Salary in Pakistan",
    "Pakistan Salary Tax",
  ],
  alternates: {
    canonical: "https://calculatepktax.vercel.app/tax-slabs",
  },
  openGraph: {
    title: "Pakistan Income Tax Slabs 2026-27 | Salary Tax Rates",
    description:
      "Check the current Pakistan salary tax slabs for 2026-27 with tax brackets, rates, formulas, and worked examples.",
    url: "https://calculatepktax.vercel.app/tax-slabs",
    siteName: "CalculatePKTax",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Income Tax Slabs 2026-27",
    description:
      "Check salary tax slabs, income tax rates, and tax calculation formulas for Pakistan Tax Year 2026-27.",
  },
};

const taxSlabSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pakistan Income Tax Slabs 2026-27",
  url: "https://calculatepktax.vercel.app/tax-slabs",
  description:
    "Pakistan salary tax slabs and income tax rates for salaried individuals for Tax Year 2026-27.",
};

export default function TaxSlabsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(taxSlabSchema),
        }}
      />

      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Pakistan Salary Tax Slabs 2026-27
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Check the current Pakistan salary tax slabs for Tax Year 2026-27.
            See taxable income brackets, applicable tax rates, and calculation
            formulas for salaried individuals in Pakistan.
          </p>
        </section>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Pakistan Income Tax Slabs 2026-27
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Pakistan income tax for salaried individuals is calculated using
            progressive tax slabs. The applicable rate depends on the
            individual&apos;s annual taxable income. For Tax Year 2026-27,
            the salaried individual tax table starts with a 0% rate on taxable
            income up to Rs 600,000 and applies higher rates to income above
            each threshold.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The following salary tax slabs are based on the current FBR
            2026-27 tax provisions. The maximum rate in this salaried
            individual table is 29% on the amount exceeding Rs 4.1 million.
          </p>
        </section>

        {/* Tax Slabs Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Salary Tax Slabs for Tax Year 2026-27
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-4">
                    Taxable Income
                  </th>
                  <th className="px-6 py-4">
                    Tax Rate / Calculation
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white text-gray-800">

                <tr>
                  <td className="px-6 py-4 font-medium">
                    Up to Rs 600,000
                  </td>
                  <td className="px-6 py-4">
                    0%
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">
                    Above Rs 600,000 to Rs 1,200,000
                  </td>
                  <td className="px-6 py-4">
                    1% of the amount exceeding Rs 600,000
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">
                    Above Rs 1,200,000 to Rs 2,200,000
                  </td>
                  <td className="px-6 py-4">
                    Rs 6,000 + 11% of the amount exceeding Rs 1,200,000
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">
                    Above Rs 2,200,000 to Rs 3,200,000
                  </td>
                  <td className="px-6 py-4">
                    Rs 116,000 + 20% of the amount exceeding Rs 2,200,000
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">
                    Above Rs 3,200,000 to Rs 4,100,000
                  </td>
                  <td className="px-6 py-4">
                    Rs 316,000 + 25% of the amount exceeding Rs 3,200,000
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">
                    Above Rs 4,100,000
                  </td>
                  <td className="px-6 py-4">
                    Rs 541,000 + 29% of the amount exceeding Rs 4,100,000
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* How Tax Is Calculated */}
        <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            How Salary Tax Is Calculated in Pakistan
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Salary income tax is calculated using annual taxable income and
            the applicable tax slab. If you receive a monthly salary, your
            annual gross salary can be estimated by multiplying the monthly
            salary by 12. The applicable tax formula is then applied to the
            relevant income bracket.
          </p>

          <p className="text-gray-700 leading-relaxed">
            For example, if your annual taxable salary is Rs 2,500,000, it
            falls within the Rs 2,200,001 to Rs 3,200,000 slab.
          </p>
        </section>

        {/* Worked Examples */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Pakistan Salary Tax Examples 2026-27
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Example 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Example 1: Annual Income Rs 900,000
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                Annual taxable income is Rs 900,000, which falls in the
                second tax slab.
                <br /><br />

                <strong>Calculation:</strong>
                <br />
                (Rs 900,000 − Rs 600,000) × 1%
                <br />
                = Rs 300,000 × 1%
                <br />
                = <strong>Rs 3,000 annual tax</strong>
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Example 2: Annual Income Rs 2,500,000
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                Annual taxable income of Rs 2,500,000 falls in the
                Rs 2,200,001 to Rs 3,200,000 slab.
                <br /><br />

                <strong>Calculation:</strong>
                <br />
                Rs 116,000 + (Rs 300,000 × 20%)
                <br />
                = Rs 116,000 + Rs 60,000
                <br />
                = <strong>Rs 176,000 annual tax</strong>
              </p>
            </div>

            {/* Example 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Example 3: Annual Income Rs 4,500,000
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                Annual taxable income of Rs 4,500,000 falls above the
                Rs 4,100,000 threshold.
                <br /><br />

                <strong>Calculation:</strong>
                <br />
                Rs 541,000 + (Rs 400,000 × 29%)
                <br />
                = Rs 541,000 + Rs 116,000
                <br />
                = <strong>Rs 657,000 annual tax</strong>
              </p>
            </div>

            {/* Example 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Example 4: Annual Income Rs 8,000,000
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                Annual taxable income of Rs 8,000,000 is above the
                Rs 4,100,000 threshold.
                <br /><br />

                <strong>Calculation:</strong>
                <br />
                Rs 541,000 + (Rs 3,900,000 × 29%)
                <br />
                = Rs 541,000 + Rs 1,131,000
                <br />
                = <strong>Rs 1,672,000 annual tax</strong>
              </p>
            </div>

          </div>
        </section>

        {/* Tax Slabs and Monthly Salary */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Monthly Salary Tax in Pakistan
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Pakistan salary tax slabs are based on annual taxable income,
            even when an employee receives salary every month. A monthly
            salary can be converted into an annual amount and the applicable
            tax slab can then be used to estimate the annual tax liability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            To calculate your estimated monthly tax and take home salary,
            use our{" "}
            <Link
              href="/calculator"
              className="text-[#1D4ED8] font-semibold hover:underline"
            >
              Pakistan Salary Tax Calculator
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                What are the Pakistan salary tax slabs for 2026-27?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                For salaried individuals, the 2026-27 tax table starts at
                0% for taxable income up to Rs 600,000. Higher income is
                taxed according to the applicable progressive slabs, with
                29% applying to the amount exceeding Rs 4,100,000.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                What is the tax-free income limit for salary in 2026-27?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Taxable income up to Rs 600,000 falls under the 0% slab for
                salaried individuals for Tax Year 2026-27.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                What is the highest salary tax rate in Pakistan for 2026-27?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Under the 2026-27 salaried individual table, the rate is
                29% on the amount exceeding Rs 4,100,000.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                How can I calculate my salary tax?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                You can use your annual taxable income with the applicable
                slab formula, or use our{" "}
                <Link
                  href="/calculator"
                  className="text-[#1D4ED8] font-semibold hover:underline"
                >
                  online salary tax calculator
                </Link>{" "}
                to estimate your tax and take home salary.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Are these official FBR tax rates?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                The figures on this page are based on the current FBR
                2026-27 salaried individual tax table. Tax rules can change
                through legislation, so taxpayers should verify their
                individual circumstances with current FBR guidance.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Calculate Your Salary Tax
          </h2>

          <p className="text-gray-600 mb-6">
            Enter your salary and estimate your annual tax, monthly tax, and
            take home salary for 2026-27.
          </p>

          <Link
            href="/calculator"
            className="inline-block bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors text-base text-center"
          >
            Calculate Salary Tax
          </Link>
        </section>

        {/* Disclaimer */}
        <section className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Tax rates and rules may change through legislation. This page is
            for informational purposes and should be checked against current
            official FBR guidance for individual tax situations.
          </p>
        </section>

      </main>
    </div>
  );
}