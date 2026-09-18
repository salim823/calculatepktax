import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <div className="bg-white text-gray-900 font-sans py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Header Section */}
      <div className="text-center space-y-4 pt-4 sm:pt-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          CalculatePKTax Blog
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore helpful articles, guides, and updates regarding personal finance, salary tax calculations, tax slabs, and take-home pay in Pakistan.
        </p>
      </div>

      {/* Blog Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Article 1 (Connected to dynamic slug) */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span>Tax Guide</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              Pakistan Tax Calculator: How to Calculate Your Tax Easily
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Learn how to easily calculate your salary tax, understand progressive FBR tax slabs, and project your net take-home pay using our online tools.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/blog/pakistan-tax-calculator"
              className="text-sm font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
            >
              Read Article →
            </Link>
          </div>
        </div>

        {/* Article 2 (Connected to second dynamic slug) */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span>Tax Slabs</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              Understanding Salary Tax Slabs in Pakistan
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              A comprehensive breakdown of how progressive income tax brackets apply to salaried individuals across different earnings tiers.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/blog/understanding-salary-tax-slabs-pakistan"
              className="text-sm font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
            >
              Read Article →
            </Link>
          </div>
        </div>

        {/* Article 3 (Connected to third dynamic slug) */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span>Income Tax</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              Pakistan Income Tax Calculator: Understanding Your Tax Estimate
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Understand how a Pakistan income tax calculator estimates your annual tax, monthly tax, and take home salary using applicable salaried income tax rules.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/blog/pakistan-income-tax-calculator"
              className="text-sm font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
            >
              Read Article →
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}