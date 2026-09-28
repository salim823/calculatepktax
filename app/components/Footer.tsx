import Link from "next/link";
import { LogoMark } from "./Navbar";

// TODO: replace with the site's real LinkedIn / Facebook page URLs
const SOCIAL = {
  linkedin: "#",
  facebook: "#",
};

const QUICK_LINKS = [
  { href: "/", label: "Salary Tax Calculator" },
  { href: "/tax-slabs", label: "FBR Tax Slabs 2026-27" },
  { href: "/blog", label: "Tax Guides & Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5" aria-label="CalculatePKTax home">
              <LogoMark />
              <span className="text-lg font-extrabold tracking-tight text-white">
                Calculate<span className="text-brand-300">PK</span>Tax
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200/80">
              Free Pakistan salary tax calculator with the latest FBR income
              tax slabs for 2026-27. Estimate your monthly and annual tax,
              deductions, and take-home salary in seconds.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CalculatePKTax on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
                </svg>
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CalculatePKTax on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-200/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-200/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-brand-200/60">
            Tax rates shown are for salaried individuals per FBR&apos;s Tax Year
            2027 notification (Finance Act 2026). Figures are estimates for
            guidance only — consult a tax professional for your exact
            liability. See our{" "}
            <Link href="/disclaimer" className="underline hover:text-white">
              Disclaimer
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-brand-200/60">
            © {new Date().getFullYear()} CalculatePKTax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
