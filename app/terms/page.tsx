import type { Metadata } from "next";
import LegalPage, { LegalH2 } from "@/app/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for CalculatePKTax — the rules for using our Pakistan salary tax calculator website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="28 September 2026">
      <p>
        By accessing CalculatePKTax, you agree to these Terms of Use. If you
        do not agree, please do not use the website.
      </p>
      <LegalH2>Service Description</LegalH2>
      <p>
        CalculatePKTax provides a free online salary tax calculator, FBR tax
        slab tables, and educational tax guides for Pakistan. All content is
        provided for general information only and does not constitute tax,
        legal, or financial advice.
      </p>
      <LegalH2>Acceptable Use</LegalH2>
      <p>You agree not to:</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Misuse the calculator or attempt to disrupt the website</li>
        <li>Copy our content and republish it as your own without permission</li>
        <li>Use the site for any unlawful purpose</li>
      </ul>
      <LegalH2>Accuracy of Tax Information</LegalH2>
      <p>
        We work hard to keep slab rates aligned with official FBR
        notifications, but tax law can change. Figures on this site are
        estimates — always verify important decisions with FBR&apos;s official
        publications or a qualified tax professional. See our{" "}
        <a href="/disclaimer" className="font-bold text-brand-700 hover:underline">
          Disclaimer
        </a>
        .
      </p>
      <LegalH2>Intellectual Property</LegalH2>
      <p>
        The website&apos;s design, text, and calculator logic are owned by
        CalculatePKTax. You may link to our pages and share them; systematic
        scraping or republication of our content requires written permission.
      </p>
      <LegalH2>Limitation of Liability</LegalH2>
      <p>
        To the maximum extent permitted by law, CalculatePKTax is not liable
        for any loss arising from reliance on the site&apos;s calculations or
        content.
      </p>
      <LegalH2>Changes</LegalH2>
      <p>
        We may update these terms at any time; continued use of the site
        constitutes acceptance of the current version.
      </p>
    </LegalPage>
  );
}
