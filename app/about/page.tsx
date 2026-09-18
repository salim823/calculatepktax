import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 font-sans py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Header Section */}
      <div className="text-center space-y-4 pt-4 sm:pt-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          About CalculatePKTax
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          CalculatePKTax helps people understand and estimate their <span className="font-medium text-gray-900">salary tax Pakistan</span> through an easy to use online <span className="font-medium text-gray-900">Pakistan salary tax calculator</span> and clear tax information.
        </p>
      </div>

      {/* What We Provide Section (2x2 Grid with White Cards & Hover Effects) */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">What We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1D4ED8] font-bold text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Pakistan Salary Tax Calculator</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              An accessible digital tool designed to compute income tax obligations rapidly based on your monthly or annual salary inputs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1D4ED8] font-bold text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Current Tax Slabs</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Detailed listings of official <span className="font-medium text-gray-900">Pakistan salary tax slabs</span> for salaried individuals across various income brackets.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1D4ED8] font-bold text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Monthly & Annual Estimates</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Clear breakdowns showing both annual tax liability and monthly deductions deducted directly from your earnings.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1D4ED8] font-bold text-sm flex items-center justify-center">
              4
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Take Home Salary Estimates</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Accurate projections of your net disposable income so you can plan your monthly budgets with complete clarity.
            </p>
          </div>

        </div>
      </div>

      {/* Our Goal Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Our Goal</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Our goal is to make <span className="font-medium text-gray-900">income tax Pakistan</span> information easier to understand and help salaried individuals estimate their tax and take home salary without complicated manual calculations or confusion. We strive to simplify personal finance planning for workers across the country.
        </p>
      </div>

      {/* Tax Information & Compliance Source */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Tax Information & Sources</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          This website provides salary tax information based on applicable tax rules and published information from relevant official sources such as the Federal Board of Revenue (FBR). Please note that CalculatePKTax is an independent informational platform and does not claim to be an official FBR website or represent FBR in any capacity.
        </p>
      </div>

      {/* Accuracy and Updates */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Accuracy and Updates</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Tax laws, rates, and rules can change through government legislation and budget updates. Our platform aims to keep salary tax calculations and information updated for the relevant tax year to ensure maximum reliability for our users.
        </p>
      </div>

      {/* Important Disclaimer */}
      <div className="border border-amber-200 bg-amber-50 rounded-xl p-6 space-y-2">
        <h3 className="text-base font-bold text-amber-900">Important Disclaimer</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          The <span className="font-medium">Pakistan income tax calculator</span> and associated pages provide estimates for informational purposes only. Users should verify their individual tax position with official FBR information or consult a qualified tax professional when necessary before making formal financial or legal filings.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-4">
        <Link
          href="/calculator"
          className="inline-block bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors text-base text-center"
        >
          Calculate Your Salary Tax
        </Link>
      </div>

    </div>
  );
}