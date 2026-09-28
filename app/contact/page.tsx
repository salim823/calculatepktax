import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact CalculatePKTax — questions about the Pakistan salary tax calculator, slab rates, or corrections.",
  alternates: { canonical: "/contact" },
};

const SUPPORT_EMAIL = "contactnowmuhammadharis@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${SUPPORT_EMAIL}`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        Questions about a calculation, spotted an outdated slab rate, or want
        to suggest a feature? Email us — we read every message.
      </p>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
          Support Email
        </p>
        <a
          href={GMAIL_COMPOSE}
          target="_blank"
          rel="noopener noreferrer"
          className="tnum mt-2 block break-all text-lg font-extrabold text-brand-700 hover:underline sm:text-xl"
        >
          {SUPPORT_EMAIL}
        </a>
        <p className="mt-2 text-sm text-gray-500">
          Opens Gmail in a new tab with a compose window addressed to us.
        </p>
        <a
          href={GMAIL_COMPOSE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-700"
        >
          Email Us via Gmail
        </a>
      </div>

      <div className="mt-8 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
        <h2 className="font-extrabold text-gray-900">Before you write</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-600">
          <li>Calculation questions: include your monthly salary &amp; tax year</li>
          <li>Corrections: link the official FBR source if possible</li>
          <li>We aim to reply within 2–3 working days</li>
        </ul>
      </div>
    </div>
  );
}
