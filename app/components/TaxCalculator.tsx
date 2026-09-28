"use client";

import { useMemo, useState } from "react";
import {
  TAX_YEARS,
  calculateTax,
  formatPKR,
  type TaxYear,
} from "@/app/lib/tax";

export default function TaxCalculator({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<"monthly" | "annual">("monthly");
  const [input, setInput] = useState("150000");
  const [year, setYear] = useState<TaxYear>("2026-27");
  const [showBreakdown, setShowBreakdown] = useState(false);

  const parsed = useMemo(() => {
    const v = parseFloat(input.replace(/,/g, ""));
    return isNaN(v) || v < 0 ? null : v;
  }, [input]);

  const result = useMemo(() => {
    if (parsed === null) return null;
    const annual = mode === "monthly" ? parsed * 12 : parsed;
    return calculateTax(annual, year);
  }, [parsed, mode, year]);

  const error =
    input.trim() !== "" && parsed === null
      ? "Please enter a valid salary amount."
      : null;

  return (
    <div
      id="calculator"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-brand-950/5"
    >
      <div className="bg-brand-700 px-6 py-5 sm:px-8">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl">
          Salary Tax Calculator {year}
        </h2>
        <p className="mt-1 text-sm text-brand-100">
          Enter your salary — results update instantly.
        </p>
      </div>

      <div className="space-y-6 px-6 py-6 sm:px-8">
        {/* Controls */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="tax-year" className="mb-1.5 block text-sm font-bold text-gray-700">
              Tax Year
            </label>
            <select
              id="tax-year"
              value={year}
              onChange={(e) => setYear(e.target.value as TaxYear)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
            >
              {TAX_YEARS.map((y) => (
                <option key={y.value} value={y.value}>
                  {y.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-bold text-gray-700">
              Salary Type
            </span>
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1">
              {(["monthly", "annual"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  aria-pressed={mode === m}
                  className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-all ${
                    mode === m
                      ? "bg-white text-brand-700 shadow"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {m === "monthly" ? "Monthly" : "Annual"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="salary-input" className="mb-1.5 block text-sm font-bold text-gray-700">
            {mode === "monthly" ? "Monthly" : "Annual"} Gross Salary (PKR)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-gray-400">
              Rs
            </span>
            <input
              id="salary-input"
              type="text"
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === "monthly" ? "150,000" : "1,800,000"}
              className="tnum w-full rounded-xl border-2 border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-xl font-extrabold text-gray-900 placeholder:font-medium placeholder:text-gray-300 focus:border-brand-500 focus:bg-white focus:outline-none"
            />
          </div>
          {error && <p className="mt-2 text-sm font-semibold text-red-600">{error}</p>}
        </div>

        {/* Results */}
        {result && !error && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-600 px-4 py-4 text-white">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-100">
                  Annual Tax
                </p>
                <p className="tnum mt-1 text-xl font-extrabold sm:text-2xl">
                  {formatPKR(result.annualTax)}
                </p>
              </div>
              <div className="rounded-xl bg-brand-50 px-4 py-4 ring-1 ring-brand-100">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                  Monthly Tax
                </p>
                <p className="tnum mt-1 text-xl font-extrabold text-brand-800 sm:text-2xl">
                  {formatPKR(result.monthlyTax)}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 px-4 py-4 ring-1 ring-gray-200">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  Monthly Take-Home
                </p>
                <p className="tnum mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl">
                  {formatPKR(result.monthlyTakeHome)}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 px-4 py-4 ring-1 ring-gray-200">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  Annual Take-Home
                </p>
                <p className="tnum mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl">
                  {formatPKR(result.annualTakeHome)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl bg-gold-300/20 px-4 py-3 text-sm">
              <span className="tnum font-bold text-gray-800">
                Effective rate:{" "}
                <span className="text-brand-700">
                  {result.effectiveRate.toFixed(1)}%
                </span>
              </span>
              {result.surcharge > 0 && (
                <span className="tnum font-semibold text-gray-600">
                  Incl. 9% surcharge: {formatPKR(result.surcharge)}
                </span>
              )}
              <button
                type="button"
                onClick={() => setShowBreakdown(!showBreakdown)}
                aria-expanded={showBreakdown}
                className="ml-auto font-bold text-brand-700 hover:underline"
              >
                {showBreakdown ? "Hide slab breakdown" : "Show slab breakdown"}
              </button>
            </div>

            {showBreakdown && (
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                      <th className="px-4 py-2.5 font-bold">Slab</th>
                      <th className="px-4 py-2.5 text-right font-bold">Tax</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {result.breakdown.map((b, i) => (
                      <tr key={i}>
                        <td className="tnum px-4 py-2.5 text-gray-600">{b.label}</td>
                        <td className="tnum px-4 py-2.5 text-right font-bold text-gray-900">
                          {formatPKR(b.tax)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {!compact && (
          <p className="text-xs leading-relaxed text-gray-400">
            Estimate based on FBR slabs for salaried individuals. Your employer
            deducts this tax monthly from your salary. Actual liability may
            vary — see our{" "}
            <a href="/disclaimer" className="underline hover:text-gray-600">
              disclaimer
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
