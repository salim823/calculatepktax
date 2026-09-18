import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          
          {/* Column 1: CalculatePKTax */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 bg-[#0F172A] border-2 border-[#1D4ED8] rounded-md flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-sm">
                CP
              </div>
              <span className="text-white text-lg font-bold tracking-tight group-hover:text-gray-200 transition-colors">
                CalculatePKTax
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pakistan's trusted salary tax calculator and financial planning portal for Tax Year 2026-27.
            </p>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-white transition-colors">
                  Salary Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/tax-slabs" className="text-gray-400 hover:text-white transition-colors">
                  Tax Slabs 2026-27
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Tax Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY & LEGAL */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Company & Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: SUPPORT */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Support</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Have questions or feedback regarding your tax calculations? Reach out to us anytime.
            </p>
            <p className="text-sm pt-1">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contactnowmuhammadharis@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium break-all"
              >
                contactnowmuhammadharis@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} CalculatePKTax. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Estimates based on official FBR salaried tax rules for Tax Year 2026-27.
          </p>
        </div>
      </div>
    </footer>
  );
}


