import type { Metadata } from "next";
import LegalPage, { LegalH2 } from "@/app/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for CalculatePKTax — our tax calculations are estimates for guidance, not professional tax advice.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="28 September 2026">
      <p>
        The information on CalculatePKTax is provided for general guidance
        only. Please read this disclaimer carefully before relying on any
        calculation.
      </p>
      <LegalH2>Estimates, Not Advice</LegalH2>
      <p>
        Our salary tax calculator produces <strong className="text-gray-900">estimates</strong> based
        on FBR&apos;s published slabs for salaried individuals. It is not tax,
        legal, or financial advice, and it does not create a professional
        relationship between you and CalculatePKTax.
      </p>
      <LegalH2>Your Actual Liability May Differ</LegalH2>
      <p>Real-world tax can vary because of factors the calculator cannot see, such as:</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Tax credits, rebates, or adjustable withholding on other income</li>
        <li>Employer-specific payroll adjustments and arrears</li>
        <li>Mid-year FBR circulars, SROs, or amendments</li>
        <li>Whether salary truly exceeds 75% of your total taxable income</li>
      </ul>
      <LegalH2>Verify Before Acting</LegalH2>
      <p>
        For filing decisions, refunds, or disputes, consult FBR&apos;s
        official website (fbr.gov.pk) or a qualified tax professional. If you
        spot a figure on our site that looks outdated, please{" "}
        <a href="/contact" className="font-bold text-brand-700 hover:underline">
          tell us
        </a>{" "}
        — we correct verified errors promptly.
      </p>
      <LegalH2>No Liability</LegalH2>
      <p>
        CalculatePKTax accepts no responsibility for actions taken based on
        the site&apos;s content or calculations.
      </p>
    </LegalPage>
  );
}
