/**
 * Single source of truth for Pakistan salaried-individual tax slabs.
 * Figures verified against FBR's Tax Year 2027 notification
 * (Finance Act 2026) and FBR Circular No. 01 of 2025-26 (Tax Year 2026).
 */

export interface TaxSlab {
  /** Annual taxable income lower bound (exclusive) */
  min: number;
  /** Annual taxable income upper bound (inclusive), null = no limit */
  max: number | null;
  /** Fixed tax accumulated from all lower slabs */
  base: number;
  /** Marginal rate applied to amount above `min` */
  rate: number;
}

export type TaxYear = "2026-27" | "2025-26";

export const TAX_YEARS: { value: TaxYear; label: string }[] = [
  { value: "2026-27", label: "2026-27 (Current)" },
  { value: "2025-26", label: "2025-26" },
];

/** Tax Year 2026-27 — Finance Act 2026 (8 slabs, no salaried surcharge). */
export const SLABS_2026_27: TaxSlab[] = [
  { min: 0, max: 600_000, base: 0, rate: 0 },
  { min: 600_000, max: 1_200_000, base: 0, rate: 0.01 },
  { min: 1_200_000, max: 2_200_000, base: 6_000, rate: 0.11 },
  { min: 2_200_000, max: 3_200_000, base: 116_000, rate: 0.2 },
  { min: 3_200_000, max: 4_100_000, base: 316_000, rate: 0.25 },
  { min: 4_100_000, max: 5_600_000, base: 541_000, rate: 0.29 },
  { min: 5_600_000, max: 7_000_000, base: 976_000, rate: 0.32 },
  { min: 7_000_000, max: null, base: 1_424_000, rate: 0.35 },
];

/** Tax Year 2025-26 — 6 slabs + 9% surcharge above Rs 10M (salaried). */
export const SLABS_2025_26: TaxSlab[] = [
  { min: 0, max: 600_000, base: 0, rate: 0 },
  { min: 600_000, max: 1_200_000, base: 0, rate: 0.01 },
  { min: 1_200_000, max: 2_200_000, base: 6_000, rate: 0.11 },
  { min: 2_200_000, max: 3_200_000, base: 116_000, rate: 0.23 },
  { min: 3_200_000, max: 4_100_000, base: 346_000, rate: 0.3 },
  { min: 4_100_000, max: null, base: 616_000, rate: 0.35 },
];

export const SURCHARGE_2025_26_THRESHOLD = 10_000_000;
export const SURCHARGE_2025_26_RATE = 0.09;

export function getSlabs(year: TaxYear): TaxSlab[] {
  return year === "2026-27" ? SLABS_2026_27 : SLABS_2025_26;
}

export interface TaxResult {
  annualGross: number;
  annualTax: number;
  monthlyTax: number;
  annualTakeHome: number;
  monthlyTakeHome: number;
  effectiveRate: number;
  surcharge: number;
  /** Per-slab tax contribution for the breakdown view */
  breakdown: { label: string; taxableInSlab: number; tax: number }[];
}

export function calculateTax(annualGross: number, year: TaxYear): TaxResult {
  const slabs = getSlabs(year);
  let annualTax = 0;
  const breakdown: TaxResult["breakdown"] = [];

  for (const slab of slabs) {
    if (annualGross <= slab.min) break;
    const upper = slab.max ?? annualGross;
    const taxableInSlab = Math.min(annualGross, upper) - slab.min;
    const slabTax = Math.round(taxableInSlab * slab.rate);
    breakdown.push({
      label: slabLabel(slab),
      taxableInSlab: Math.round(taxableInSlab),
      tax: slabTax,
    });
    annualTax += slabTax;
  }

  let surcharge = 0;
  if (year === "2025-26" && annualGross > SURCHARGE_2025_26_THRESHOLD) {
    surcharge = Math.round(annualTax * SURCHARGE_2025_26_RATE);
    annualTax += surcharge;
  }

  const monthlyTax = Math.round(annualTax / 12);
  const annualTakeHome = Math.round(annualGross - annualTax);
  const monthlyTakeHome = Math.round(annualTakeHome / 12);
  const effectiveRate =
    annualGross > 0 ? (annualTax / annualGross) * 100 : 0;

  return {
    annualGross: Math.round(annualGross),
    annualTax: Math.round(annualTax),
    monthlyTax,
    annualTakeHome,
    monthlyTakeHome,
    effectiveRate,
    surcharge,
    breakdown,
  };
}

export function slabLabel(slab: TaxSlab): string {
  const from = formatPKR(slab.min);
  const to = slab.max ? formatPKR(slab.max) : "above";
  const pct = `${parseFloat((slab.rate * 100).toFixed(2)).toString()}%`;
  return slab.max ? `${from} – ${to} · ${pct}` : `Above ${from} · ${pct}`;
}

export function formatPKR(n: number): string {
  return "Rs " + Math.round(n).toLocaleString("en-US");
}

export function formatCompact(n: number): string {
  if (n >= 10_000_000) return `${(n / 10_000_000).toFixed(1)} crore`;
  if (n >= 100_000) return `${(n / 100_000).toFixed(1)} lakh`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return n.toString();
}

/** Common salary examples used across pages (2026-27). */
export function exampleAtMonthly(monthly: number): TaxResult {
  return calculateTax(monthly * 12, "2026-27");
}
