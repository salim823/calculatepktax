import Link from "next/link";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CalculatePKTax",
    url: "https://calculatepktax.vercel.app/",
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Pakistan Salary Tax Calculator 2026-27
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Calculate your estimated salary tax in Pakistan for 2026-27.
            Check monthly and annual income tax, tax deductions, and take-home
            salary with our online Pakistan salary tax calculator.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/calculator"
            className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors text-base text-center"
          >
            Calculate Salary Tax
          </Link>

          <Link
            href="/tax-slabs"
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-lg border border-gray-300 shadow-sm transition-colors text-base text-center"
          >
            View Tax Slabs
          </Link>
        </div>
      </section>

      {/* Pakistan Salary Tax Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Pakistan Salary Tax Calculator 2026-27
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            CalculatePKTax helps salaried individuals estimate their income tax
            based on salary and taxable income. Use our Pakistan salary tax
            calculator to estimate your monthly salary tax, annual income tax,
            tax deductions, and take-home pay for the 2026-27 tax year.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Enter your salary to get an estimated tax breakdown and understand
            how much of your income may remain after the estimated income tax
            deduction.
          </p>

          <div className="pt-2">
            <Link
              href="/calculator"
              className="text-[#1D4ED8] font-semibold hover:underline"
            >
              Use the Pakistan Salary Tax Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* How Calculator Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            How to Calculate Salary Tax in Pakistan
          </h2>

          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Use the calculator to estimate your salary tax and understand your
            monthly and annual take-home salary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1D4ED8] font-bold text-base flex items-center justify-center">
              1
            </div>

            <h3 className="text-lg font-bold text-gray-900">
              Enter Your Salary
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Enter your monthly or annual salary into the Pakistan income tax
              calculator to begin your estimated tax calculation.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1D4ED8] font-bold text-base flex items-center justify-center">
              2
            </div>

            <h3 className="text-lg font-bold text-gray-900">
              Select the Tax Year
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Select the relevant tax year so your estimated calculation uses
              the appropriate salary tax rules and income tax slabs.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1D4ED8] font-bold text-base flex items-center justify-center">
              3
            </div>

            <h3 className="text-lg font-bold text-gray-900">
              View Estimated Tax and Net Pay
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Review your estimated annual tax, monthly tax deduction, and
              take-home salary after the estimated income tax.
            </p>
          </div>
        </div>
      </section>

      {/* Pakistan Tax Slabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Pakistan Salary Tax Slabs 2026-27
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Pakistan salary tax is calculated according to applicable taxable
            income slabs. Understanding the salary tax slabs can help you
            estimate your income tax liability and understand how different
            taxable income levels are treated.
          </p>

          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            View the detailed Pakistan tax slabs for 2026-27 on our dedicated
            tax slabs page.
          </p>

          <div>
            <Link
              href="/tax-slabs"
              className="inline-block bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors text-base"
            >
              View Pakistan Tax Slabs
            </Link>
          </div>
        </div>
      </section>

      {/* Monthly and Annual Tax */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Monthly and Annual Income Tax Calculator
          </h2>

          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Estimate your salary tax, income tax deductions, and take-home
            salary using monthly or annual salary information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Monthly Salary Tax Calculator
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Estimate the income tax that may apply to your monthly salary and
              understand your estimated monthly tax deduction and net salary.
            </p>

            <Link
              href="/calculator"
              className="inline-block text-[#1D4ED8] font-semibold hover:underline"
            >
              Calculate Monthly Salary Tax
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Annual Income Tax Calculator
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Estimate your annual salary tax based on your yearly taxable
              income and understand your estimated yearly tax liability.
            </p>

            <Link
              href="/calculator"
              className="inline-block text-[#1D4ED8] font-semibold hover:underline"
            >
              Calculate Annual Income Tax
            </Link>
          </div>
        </div>
      </section>

      {/* What You Can Calculate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            What You Can Calculate
          </h2>

          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Calculate important salary and income tax figures to better
            understand your estimated tax deductions and take-home pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Annual Salary Tax
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Estimate your yearly income tax based on your annual taxable
              salary.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Monthly Salary Tax
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Estimate the income tax deduction that may apply to your monthly
              salary.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Annual Take-Home Salary
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Estimate your yearly take-home income after the estimated salary
              tax deduction.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Monthly Take-Home Salary
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Estimate your monthly net salary after the estimated income tax
              deduction.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Effective Tax Rate
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Understand the estimated percentage of taxable income represented
              by your calculated income tax.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg">
              Tax Estimate by Tax Year
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Review estimated salary tax calculations for the available tax
              years supported by the calculator.
            </p>
          </div>
        </div>
      </section>

      {/* Take Home Salary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-6 bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Take-Home Salary Calculator Pakistan
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Your take-home salary is the amount you receive after applicable
            deductions are taken from your gross salary. An online take-home
            salary calculator can help you understand the estimated difference
            between your gross earnings, estimated salary tax, and net pay.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Use CalculatePKTax to estimate your monthly and annual take-home
            salary based on your salary information and the selected tax year.
          </p>

          <Link
            href="/calculator"
            className="inline-block text-[#1D4ED8] font-semibold hover:underline"
          >
            Calculate Your Take-Home Salary
          </Link>
        </div>
      </section>

      {/* Salary Tax Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Salary Tax in Pakistan
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Salary tax in Pakistan depends on taxable income and the applicable
            income tax rules for the relevant tax year. Salaried individuals
            can use a salary tax calculator to estimate their annual tax,
            monthly tax deduction, and net salary.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            The actual tax payable can depend on individual circumstances and
            applicable deductions, exemptions, allowances, and tax rules.
            CalculatePKTax provides estimates to help users understand their
            potential salary tax and take-home income.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/tax-slabs"
              className="text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore Tax Slabs
            </Link>

            <Link
              href="/blog"
              className="text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Read Tax Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions About Salary Tax in Pakistan
          </h2>

          <p className="text-base text-gray-600">
            Common questions about Pakistan salary tax, income tax calculations,
            tax slabs, and take-home salary.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              What is a salary tax calculator in Pakistan?
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              A salary tax calculator is an online tool that estimates income
              tax for salaried individuals based on salary information and the
              applicable tax rules for the selected tax year.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              How is salary tax calculated in Pakistan?
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Salary tax is generally calculated using taxable income and the
              applicable income tax slabs and rates for the relevant tax year.
              Use the calculator to estimate your salary tax based on the
              information you enter.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              Can I calculate monthly salary tax?
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Yes. You can enter your salary information in the calculator to
              estimate your monthly tax deduction and monthly take-home salary.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              Can I calculate annual income tax in Pakistan?
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Yes. The calculator can be used to estimate annual salary tax
              based on your annual taxable income and the selected tax year.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              What is the difference between gross salary and take-home salary?
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Gross salary is the salary amount before applicable deductions,
              while take-home salary is the amount remaining after applicable
              deductions. Income tax can be one of the deductions affecting
              your net salary.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">
              Are the calculator results final tax amounts?
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              No. Calculator results are estimates for informational purposes.
              Individual circumstances and applicable tax rules can affect the
              final tax liability. For formal tax matters, refer to current FBR
              guidance or consult a qualified tax professional.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-8 sm:p-14 space-y-6 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Calculate Your Salary Tax
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estimate your Pakistan salary tax, income tax deduction, and
            take-home salary for the selected tax year in seconds.
          </p>

          <div>
            <Link
              href="/calculator"
              className="inline-block bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors text-base"
            >
              Calculate Salary Tax
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}