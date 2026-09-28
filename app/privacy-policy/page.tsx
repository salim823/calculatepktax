import type { Metadata } from "next";
import LegalPage, { LegalH2 } from "@/app/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for CalculatePKTax — what data we collect and how we use it.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="28 September 2026">
      <p>
        CalculatePKTax (&quot;we&quot;, &quot;our&quot;) respects your privacy.
        This policy explains what information we collect when you use our
        Pakistan salary tax calculator and website, and how we use it.
      </p>
      <LegalH2>Information We Collect</LegalH2>
      <p>
        <strong className="text-gray-900">Salary inputs:</strong> figures you
        type into the calculator are processed entirely in your browser. They
        are never sent to our servers, stored, or shared.
      </p>
      <p>
        <strong className="text-gray-900">Contact emails:</strong> if you email
        us, we receive your email address and message content solely to
        respond to your query.
      </p>
      <p>
        <strong className="text-gray-900">Analytics:</strong> we may use
        privacy-respecting analytics to understand aggregate usage (pages
        visited, device type). This data cannot identify you personally.
      </p>
      <LegalH2>How We Use Information</LegalH2>
      <p>
        We use the limited information we receive to operate and improve the
        website, respond to messages, and ensure the accuracy of our tax
        content. We do not sell, rent, or share personal information with
        third parties for marketing.
      </p>
      <LegalH2>Cookies</LegalH2>
      <p>
        We use only essential technical cookies required for the site to
        function (such as remembering your tax-year selection). We do not use
        advertising or cross-site tracking cookies.
      </p>
      <LegalH2>Data Security &amp; Retention</LegalH2>
      <p>
        Emails you send us are retained only as long as needed to handle your
        query. We apply reasonable safeguards to protect any information in
        our possession.
      </p>
      <LegalH2>Changes to This Policy</LegalH2>
      <p>
        We may update this policy as the site evolves. The &quot;last
        updated&quot; date above will always reflect the current version.
      </p>
      <LegalH2>Contact</LegalH2>
      <p>
        For privacy questions, email us via the{" "}
        <a href="/contact" className="font-bold text-brand-700 hover:underline">
          Contact page
        </a>
        .
      </p>
    </LegalPage>
  );
}
