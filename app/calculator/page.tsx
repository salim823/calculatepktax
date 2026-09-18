"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [salaryMode, setSalaryMode] = useState<"monthly" | "annual">("monthly");
  const [salaryInput, setSalaryInput] = useState<string>("150000");
  const [taxYear, setTaxYear] = useState<string>("2026-27");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [results, setResults] = useState<{
    annualGross: number;
    annualTax: number;
    monthlyTax: number;
    annualTakeHome: number;
    monthlyTakeHome: number;
    effectiveTaxRate: string;
  } | null>({
    annualGross: 1800000,
    annualTax: 72000,
    monthlyTax: 6000,
    annualTakeHome: 1728000,
    monthlyTakeHome: 144000,
    effectiveTaxRate: "4%",
  });

  const handleCalculate = () => {
    setErrorMsg("");

    if (salaryInput.trim() === "") {
      setErrorMsg("Please enter a valid salary amount.");
      setResults(null);
      return;
    }

    const rawValue = parseFloat(salaryInput);

    if (isNaN(rawValue) || rawValue <= 0) {
      setErrorMsg("Salary must be greater than zero.");
      setResults(null);
      return;
    }

    const annualGross =
      salaryMode === "monthly" ? rawValue * 12 : rawValue;

    let baseTax = 0;

    if (taxYear === "2025-26") {
      if (annualGross <= 600000) {
        baseTax = 0;
      } else if (annualGross <= 1200000) {
        baseTax = (annualGross - 600000) * 0.01;
      } else if (annualGross <= 2200000) {
        baseTax = 6000 + (annualGross - 1200000) * 0.11;
      } else if (annualGross <= 3200000) {
        baseTax = 116000 + (annualGross - 2200000) * 0.23;
      } else if (annualGross <= 4100000) {
        baseTax = 346000 + (annualGross - 3200000) * 0.30;
      } else {
        baseTax = 616000 + (annualGross - 4100000) * 0.35;
      }

      if (annualGross > 10000000) {
        const surcharge = baseTax * 0.09;
        baseTax += surcharge;
      }
    } else {
      // Tax Year 2026-27 - Current FBR salaried individual slabs
      if (annualGross <= 600000) {
        baseTax = 0;
      } else if (annualGross <= 1200000) {
        baseTax = (annualGross - 600000) * 0.01;
      } else if (annualGross <= 2200000) {
        baseTax = 6000 + (annualGross - 1200000) * 0.11;
      } else if (annualGross <= 3200000) {
        baseTax = 116000 + (annualGross - 2200000) * 0.20;
      } else if (annualGross <= 4100000) {
        baseTax = 316000 + (annualGross - 3200000) * 0.25;
      } else {
        baseTax = 541000 + (annualGross - 4100000) * 0.29;
      }
    }

    const annualTax = Math.round(baseTax);
    const monthlyTax = Math.round(annualTax / 12);
    const annualTakeHome = annualGross - annualTax;
    const monthlyTakeHome = Math.round(annualTakeHome / 12);

    const effectiveRateNum =
      annualGross > 0 ? (annualTax / annualGross) * 100 : 0;

    const effectiveTaxRate = Number.isInteger(effectiveRateNum)
      ? `${effectiveRateNum}%`
      : `${effectiveRateNum.toFixed(1)}%`;

    setResults({
      annualGross,
      annualTax,
      monthlyTax,
      annualTakeHome,
      monthlyTakeHome,
      effectiveTaxRate,
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Salary Tax Calculator 2026-27",
    url: "https://calculatepktax.vercel.app/calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description:
      "Calculate estimated salary tax, annual income tax, monthly tax, and take home salary in Pakistan for Tax Year 2026-27.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Pakistan Salary Tax Calculator 2026-27
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate your estimated salary tax in Pakistan for Tax Year
            2026-27. Enter your monthly or annual salary to estimate annual
            income tax, monthly tax deduction, and take home salary.
          </p>
        </section>

        {/* Calculator */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 space-y-6">

          {/* Salary Mode */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-gray-300 p-1 bg-gray-50">
              <button
                type="button"
                onClick={() => setSalaryMode("monthly")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  salaryMode === "monthly"
                    ? "bg-[#1D4ED8] text-white shadow-sm"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Monthly Salary
              </button>

              <button
                type="button"
                onClick={() => setSalaryMode("annual")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  salaryMode === "annual"
                    ? "bg-[#1D4ED8] text-white shadow-sm"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Annual Salary
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {salaryMode === "monthly"
                  ? "Gross Monthly Salary (Rs)"
                  : "Gross Annual Salary (Rs)"}
              </label>

              <input
                type="number"
                min="0"
                step="any"
                value={salaryInput}
                onChange={(e) => setSalaryInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
                placeholder="e.g. 150000"
              />
            </div>

            {/* Tax Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tax Year
              </label>

              <select
                value={taxYear}
                onChange={(e) => setTaxYear(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
              >
                <option value="2025-26">2025-26</option>
                <option value="2026-27">2026-27 (Latest FBR)</option>
              </select>
            </div>
          </div>

          {/* Calculate */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleCalculate}
              className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-colors text-center block text-base cursor-pointer"
            >
              Calculate Salary Tax
            </button>
          </div>

          {/* Error */}
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
              {errorMsg}
            </div>
          )}

          {/* Results */}
          {results && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Salary Tax Calculation Results
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-sm text-gray-600">
                    Annual Gross Salary
                  </span>
                  <span className="block text-xl font-extrabold text-gray-900 mt-2">
                    Rs {results.annualGross.toLocaleString()}
                  </span>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-sm text-gray-600">
                    Annual Income Tax
                  </span>
                  <span className="block text-xl font-extrabold text-gray-900 mt-2">
                    Rs {results.annualTax.toLocaleString()}
                  </span>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-sm text-gray-600">
                    Monthly Tax
                  </span>
                  <span className="block text-xl font-extrabold text-gray-900 mt-2">
                    Rs {results.monthlyTax.toLocaleString()}
                  </span>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-sm text-gray-600">
                    Annual Take Home Salary
                  </span>
                  <span className="block text-xl font-extrabold text-gray-900 mt-2">
                    Rs {results.annualTakeHome.toLocaleString()}
                  </span>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-sm text-gray-600">
                    Monthly Take Home Salary
                  </span>
                  <span className="block text-xl font-extrabold text-[#1D4ED8] mt-2">
                    Rs {results.monthlyTakeHome.toLocaleString()}
                  </span>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-sm text-gray-600">
                    Effective Tax Rate
                  </span>
                  <span className="block text-xl font-extrabold text-gray-900 mt-2">
                    {results.effectiveTaxRate}
                  </span>
                </div>

              </div>
            </div>
          )}
        </section>

        {/* How It Works */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            How to Calculate Salary Tax in Pakistan
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our Pakistan salary tax calculator helps salaried individuals
            estimate income tax based on their annual taxable salary. Enter
            your monthly or annual salary, select the tax year, and calculate
            your estimated tax and take home salary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-2">
                1. Enter Your Salary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your gross monthly salary or annual salary in Pakistani
                Rupees.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-2">
                2. Select Tax Year
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Select 2026-27 to calculate your estimated salary tax using the
                current FBR salaried individual tax slabs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-2">
                3. View Your Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Review your estimated annual tax, monthly tax, take home salary,
                and effective tax rate.
              </p>
            </div>

          </div>
        </section>

        {/* Tax Slabs */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Pakistan Salary Tax Slabs 2026-27
          </h2>

          <p className="text-gray-700 leading-relaxed">
            For Tax Year 2026-27, FBR has revised the income tax rates for
            salaried individuals. The first Rs 600,000 of taxable income is
            subject to 0% tax, while higher income levels are taxed according
            to progressive slabs. The maximum rate in the current salaried
            individual table is 29% on the amount exceeding Rs 4.1 million.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 border-b">Taxable Income</th>
                  <th className="px-4 py-3 border-b">Tax Calculation</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b">
                    Up to Rs 600,000
                  </td>
                  <td className="px-4 py-3 border-b">0%</td>
                </tr>

                <tr>
                  <td className="px-4 py-3 border-b">
                    Rs 600,001 to Rs 1,200,000
                  </td>
                  <td className="px-4 py-3 border-b">
                    1% of amount exceeding Rs 600,000
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 border-b">
                    Rs 1,200,001 to Rs 2,200,000
                  </td>
                  <td className="px-4 py-3 border-b">
                    Rs 6,000 + 11% of amount exceeding Rs 1,200,000
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 border-b">
                    Rs 2,200,001 to Rs 3,200,000
                  </td>
                  <td className="px-4 py-3 border-b">
                    Rs 116,000 + 20% of amount exceeding Rs 2,200,000
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 border-b">
                    Rs 3,200,001 to Rs 4,100,000
                  </td>
                  <td className="px-4 py-3 border-b">
                    Rs 316,000 + 25% of amount exceeding Rs 3,200,000
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">
                    Above Rs 4,100,000
                  </td>
                  <td className="px-4 py-3">
                    Rs 541,000 + 29% of amount exceeding Rs 4,100,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Take Home Salary */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Take Home Salary Calculator Pakistan
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Your take home salary is the amount remaining after estimated
            income tax is deducted from your gross salary. This calculator
            provides both monthly and annual take home salary estimates so you
            can better understand your net salary after tax.
          </p>

          <p className="text-gray-700 leading-relaxed">
            You can use the results to estimate your monthly salary after tax,
            annual salary after tax, and effective tax rate for Tax Year
            2026-27.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="font-bold text-lg">
                What is the Pakistan Salary Tax Calculator?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                It is an online calculator that estimates salary income tax,
                monthly tax, annual tax, and take home salary based on your
                salary and selected tax year.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                How is salary tax calculated in Pakistan?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Salary tax is calculated by applying the applicable tax rate
                and fixed amount for the relevant taxable income slab.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                What is the tax-free salary limit for 2026-27?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                For salaried individuals, taxable income up to Rs 600,000 for
                Tax Year 2026-27 falls in the 0% tax slab.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Can I calculate monthly salary tax?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Yes. Enter your gross monthly salary and the calculator
                converts it into annual income and estimates the monthly tax
                and monthly take home salary.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Is this calculator an official FBR calculator?
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                No. CalculatePKTax is an independent online calculator. The
                estimates are based on the applicable tax rates and should be
                checked against official FBR guidance for individual tax
                situations.
              </p>
            </div>

          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 leading-relaxed">
            Tax calculations are estimates for informational purposes.
            Individual tax circumstances may vary depending on taxable income,
            exemptions, allowances, deductions, and other applicable rules.
          </p>
        </section>

      </main>
    </div>
  );
}