"use client";

import { useMemo, useState } from "react";
import {
  TAX_YEARS,
  calculateTax,
  formatPKR,
  type TaxYear,
} from "@/app/lib/tax";

function parseAmount(raw: string): number | null {
  const v = parseFloat(raw.replace(/,/g, ""));
  return isNaN(v) || v < 0 ? null : v;
}

export default function BonusCalculator() {
  const [salaryInput, setSalaryInput] = useState("150000");
  const [bonusInput, setBonusInput] = useState("200000");
  const [year, setYear] = useState<TaxYear>("2026-27");

  const salary = useMemo(() => parseAmount(salaryInput), [salaryInput]);
  const bonus = useMemo(() => parseAmount(bonusInput), [bonusInput]);

  const result = useMemo(() => {
    if (salary === null || bonus === null) return null;
    const annualSalary = salary * 12;
    const taxOnSalary = calculateTax(annualSalary, year).annualTax;
    const taxWithBonus = calculateTax(annualSalary + bonus, year).annualTax;
    const bonusTax = taxWithBonus - taxOnSalary;
    const netBonus = bonus - bonusTax;
    const effectiveRateOnBonus = bonus > 0 ? (bonusTax / bonus) * 100 : 0;
    return {
      annualSalary,
      taxOnSalary,
      taxWithBonus,
      bonusTax,
      netBonus,
      effectiveRateOnBonus,
    };
  }, [salary, bonus, year]);

  const salaryError =
    salaryInput.trim() !== "" && salary === null
      ? "Please enter a valid salary amount."
      : null;
  const bonusError =
    bonusInput.trim() !== "" && bonus === null
      ? "Please enter a valid bonus amount."
      : null;

  return (
    <div
      id="bonus-calculator"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-brand-950/5"
    >
      <div className="bg-brand-700 px-6 py-5 sm:px-8">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl">
          Bonus Tax Calculator {year}
        </h2>
        <p className="mt-1 text-sm text-brand-100">
          Enter your salary and bonus — see exactly how much tax is cut from
          your bonus.
        </p>
      </div>

      <div className="space-y-6 px-6 py-6 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <label
              htmlFor="bonus-tax-year"
              className="mb-1.5 block text-sm font-bold text-gray-700"
            >
              Tax Year
            </label>
            <select
              id="bonus-tax-year"
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
            <label
              htmlFor="bonus-salary-input"
              className="mb-1.5 block text-sm font-bold text-gray-700"
            >
              Monthly Gross Salary (PKR)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-gray-400">
                Rs
              </span>
              <input
                id="bonus-salary-input"
                type="text"
                inputMode="numeric"
                value={salaryInput}
                onChange={(e) => setSalaryInput(e.target.value)}
                placeholder="150,000"
                className="tnum w-full rounded-xl border-2 border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-xl font-extrabold text-gray-900 placeholder:font-medium placeholder:text-gray-300 focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>
            {salaryError && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {salaryError}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="bonus-amount-input"
              className="mb-1.5 block text-sm font-bold text-gray-700"
            >
              Bonus Amount (PKR)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-gray-400">
                Rs
              </span>
              <input
                id="bonus-amount-input"
                type="text"
                inputMode="numeric"
                value={bonusInput}
                onChange={(e) => setBonusInput(e.target.value)}
                placeholder="200,000"
                className="tnum w-full rounded-xl border-2 border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-xl font-extrabold text-gray-900 placeholder:font-medium placeholder:text-gray-300 focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>
            {bonusError && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {bonusError}
              </p>
            )}
          </div>
        </div>

        {result && !salaryError && !bonusError && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-600 px-4 py-4 text-white">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-100">
                  Tax on Bonus
                </p>
                <p className="tnum mt-1 text-xl font-extrabold sm:text-2xl">
                  {formatPKR(result.bonusTax)}
                </p>
              </div>
              <div className="rounded-xl bg-brand-50 px-4 py-4 ring-1 ring-brand-100">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                  Net Bonus Received
                </p>
                <p className="tnum mt-1 text-xl font-extrabold text-brand-800 sm:text-2xl">
                  {formatPKR(result.netBonus)}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 px-4 py-4 ring-1 ring-gray-200">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  Effective Rate on Bonus
                </p>
                <p className="tnum mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl">
                  {result.effectiveRateOnBonus.toFixed(1)}%
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 px-4 py-4 ring-1 ring-gray-200">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  Total Annual Tax
                </p>
                <p className="tnum mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl">
                  {formatPKR(result.taxWithBonus)}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl bg-gold-300/20 px-4 py-3 text-sm">
              <span className="tnum font-bold text-gray-800">
                Tax on salary alone:{" "}
                <span className="text-brand-700">
                  {formatPKR(result.taxOnSalary)}
                </span>
              </span>
              <span className="tnum font-semibold text-gray-600">
                Annual salary: {formatPKR(result.annualSalary)}
              </span>
            </div>
          </div>
        )}

        <p className="text-xs leading-relaxed text-gray-400">
          Estimate based on FBR slabs for salaried individuals — your bonus is
          added to annual salary income and taxed at your marginal slab rate.
          Actual withholding may vary — see our{" "}
          <a href="/disclaimer" className="underline hover:text-gray-600">
            disclaimer
          </a>
          .
        </p>
      </div>
    </div>
  );
}
