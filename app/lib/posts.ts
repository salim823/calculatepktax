export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "fbr-tax-slabs-2026-27-explained",
    title: "FBR Tax Slabs 2026-27 for Salaried Persons (Complete Table)",
    description:
      "Complete FBR income tax slabs for 2026-27 explained: all 8 salary brackets, rates, what changed from 2025-26, and worked examples.",
    category: "Tax Slabs",
    published: "2026-09-10",
    updated: "2026-09-28",
    readTime: "7 min read",
    sections: [
      {
        paragraphs: [
          "The Finance Act 2026 brought the biggest relief for Pakistan's salaried class in years. FBR restructured the salary tax schedule from 6 slabs to 8 slabs, cut rates in every middle and upper bracket, and abolished the 9% surcharge on high earners. These rates apply to Tax Year 2027 (1 July 2026 – 30 June 2027).",
          "Below is the complete, official slab table for salaried individuals — the same table your employer uses to deduct tax from your salary every month.",
        ],
      },
      {
        heading: "Complete Salary Tax Slabs 2026-27",
        paragraphs: [
          "Tax is charged only on the amount exceeding each slab's lower limit — not on your entire salary. This is called a progressive (marginal) rate system.",
          "Slab table: Up to Rs 600,000 per year — 0% (no tax). Rs 600,001 to 1,200,000 — 1% of the amount above Rs 600,000. Rs 1,200,001 to 2,200,000 — Rs 6,000 plus 11% of the amount above Rs 1,200,000. Rs 2,200,001 to 3,200,000 — Rs 116,000 plus 20% of the amount above Rs 2,200,000. Rs 3,200,001 to 4,100,000 — Rs 316,000 plus 25% of the amount above Rs 3,200,000. Rs 4,100,001 to 5,600,000 — Rs 541,000 plus 29% of the amount above Rs 4,100,000. Rs 5,600,001 to 7,000,000 — Rs 976,000 plus 32% of the amount above Rs 5,600,000. Above Rs 7,000,000 — Rs 1,424,000 plus 35% of the amount above Rs 7,000,000.",
        ],
      },
      {
        heading: "What Changed from 2025-26?",
        paragraphs: [
          "Every earning group up to Rs 7 million per year pays less tax than last year. The biggest winners are middle-income earners:",
        ],
        list: [
          "Rs 600k–1.2M bracket: rate cut from 5% to 1%",
          "Rs 1.2M–2.2M bracket: rate cut from 15% to 11%",
          "Rs 2.2M–3.2M bracket: rate cut from 25% to 20%",
          "Rs 3.2M–4.1M bracket: rate cut from 30% to 25%",
          "Above Rs 4.1M: the old flat 35% band was split into three gentler slabs (29%, 32%, 35%)",
          "9% surcharge on income above Rs 10 million: completely abolished for salaried individuals",
        ],
      },
      {
        heading: "Worked Example: Rs 300,000 Monthly Salary",
        paragraphs: [
          "Annual income: Rs 3,600,000. This falls in the Rs 3.2M–4.1M slab. Tax = Rs 316,000 + 25% of (3,600,000 − 3,200,000) = Rs 316,000 + Rs 100,000 = Rs 416,000 per year, or Rs 34,667 per month. Under last year's rates the same salary attracted roughly Rs 466,000 — a saving of about Rs 50,000 a year.",
          "Try your own salary in our free salary tax calculator to see your exact figure instantly.",
        ],
      },
      {
        heading: "Who Do These Slabs Apply To?",
        paragraphs: [
          "These rates apply to individuals whose salary income is more than 75% of their total taxable income. If you mainly earn from business or freelancing, a different (higher) rate table applies. Your employer is legally required to deduct tax at these rates from your salary each month under Section 149 of the Income Tax Ordinance.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many tax slabs are there for salaried persons in 2026-27?",
        a: "There are 8 slabs for Tax Year 2026-27, restructured from 6 slabs by the Finance Act 2026. Rates range from 0% (up to Rs 600,000/year) to 35% (above Rs 7,000,000/year).",
      },
      {
        q: "Is there any surcharge on salary income in 2026-27?",
        a: "No. The 9% surcharge that applied to salaried individuals earning above Rs 10 million in 2025-26 has been abolished for Tax Year 2026-27.",
      },
      {
        q: "What is the tax-free salary limit in Pakistan for 2026-27?",
        a: "Annual salary up to Rs 600,000 (Rs 50,000 per month) is completely tax-free for salaried individuals.",
      },
    ],
  },
  {
    slug: "how-to-calculate-salary-tax-pakistan",
    title: "How to Calculate Salary Tax in Pakistan: Step-by-Step (2026-27)",
    description:
      "Learn how to calculate salary tax in Pakistan manually with FBR slabs — plus the fastest way using our free online calculator.",
    category: "Guides",
    published: "2026-09-12",
    updated: "2026-09-28",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Calculating your salary tax in Pakistan is straightforward once you understand the slab system. Pakistan uses progressive taxation: different portions of your income are taxed at different rates. Here is the exact method — and a shortcut at the end.",
        ],
      },
      {
        heading: "Step 1: Find Your Annual Taxable Salary",
        paragraphs: [
          "Multiply your monthly gross salary by 12. Include basic pay plus taxable allowances and bonuses your employer reports. Example: Rs 150,000/month × 12 = Rs 1,800,000/year.",
        ],
      },
      {
        heading: "Step 2: Identify Your Slab",
        paragraphs: [
          "Match your annual salary against the FBR 2026-27 slabs. Rs 1,800,000 falls in the Rs 1.2M–2.2M bracket, where tax is Rs 6,000 plus 11% of the amount above Rs 1,200,000.",
        ],
      },
      {
        heading: "Step 3: Apply the Formula",
        paragraphs: [
          "Tax = Rs 6,000 + 11% × (1,800,000 − 1,200,000) = Rs 6,000 + Rs 66,000 = Rs 72,000 per year. Divide by 12 for the monthly figure: Rs 6,000/month. Subtract from gross salary for take-home pay: Rs 150,000 − Rs 6,000 = Rs 144,000/month.",
        ],
      },
      {
        heading: "The Fast Way: Use the Calculator",
        paragraphs: [
          "Manual calculation works, but our free Pakistan salary tax calculator does it instantly — including a slab-by-slab breakdown, both tax years (2026-27 and 2025-26), and monthly/annual views. No signup needed.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        paragraphs: [],
        list: [
          "Applying the top rate to your entire salary (only the amount inside each slab is taxed at that slab's rate)",
          "Using last year's slabs — 2026-27 rates are significantly lower",
          "Forgetting that the first Rs 600,000 per year is tax-free",
          "Mixing up salaried slabs with business-individual slabs (business rates are higher)",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the formula to calculate salary tax in Pakistan?",
        a: "Find your annual salary, locate your FBR slab, then apply: fixed amount for the slab + marginal rate × (salary − slab lower limit). Divide the result by 12 for monthly tax.",
      },
      {
        q: "Is the first Rs 600,000 of salary tax-free?",
        a: "Yes. For Tax Year 2026-27, annual salary income up to Rs 600,000 (Rs 50,000/month) attracts zero tax for salaried individuals.",
      },
    ],
  },
  {
    slug: "tax-on-100000-salary-pakistan",
    title: "Tax on Rs 100,000 Salary in Pakistan (2026-27) — Full Breakdown",
    description:
      "How much tax is deducted on a Rs 100,000 monthly salary in Pakistan? Exact 2026-27 calculation, monthly tax and take-home pay.",
    category: "Examples",
    published: "2026-09-15",
    updated: "2026-09-28",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "A monthly salary of Rs 100,000 equals Rs 1,200,000 per year — which sits right at the top of the second FBR slab for 2026-27. Here is the exact calculation.",
        ],
      },
      {
        heading: "The Calculation",
        paragraphs: [
          "Annual salary: Rs 1,200,000. Slab: Rs 600,001–1,200,000 at 1% of the amount above Rs 600,000. Tax = 1% × (1,200,000 − 600,000) = Rs 6,000 per year. Monthly tax = Rs 6,000 ÷ 12 = Rs 500. Monthly take-home = Rs 100,000 − Rs 500 = Rs 99,500. Effective tax rate: just 0.5%.",
        ],
      },
      {
        heading: "What About Last Year?",
        paragraphs: [
          "In 2025-26, this same bracket was taxed at 5%, meaning Rs 30,000/year (Rs 2,500/month). The Finance Act 2026 cut it to 1% — saving you Rs 24,000 every year on a Rs 100,000 salary.",
        ],
      },
      {
        heading: "Check Any Salary Instantly",
        paragraphs: [
          "Want the figure for Rs 120,000 or Rs 90,000? Punch it into our free salary tax calculator — it shows monthly tax, annual tax, take-home pay, and a full slab breakdown in seconds.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much tax is deducted on 100,000 salary in Pakistan?",
        a: "For 2026-27, Rs 500 per month (Rs 6,000 per year) is deducted on a Rs 100,000 monthly salary. Take-home pay is Rs 99,500/month.",
      },
      {
        q: "Is 100,000 salary taxable in Pakistan?",
        a: "Yes, but lightly. Only the amount above Rs 50,000/month (Rs 600,000/year) is taxable, at 1% in this bracket.",
      },
    ],
  },
  {
    slug: "tax-on-200000-salary-pakistan",
    title: "Tax on Rs 200,000 Salary in Pakistan (2026-27) — Full Breakdown",
    description:
      "How much tax is deducted on a Rs 200,000 monthly salary in Pakistan? Exact 2026-27 FBR calculation with monthly and annual figures.",
    category: "Examples",
    published: "2026-09-16",
    updated: "2026-09-28",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "A Rs 200,000 monthly salary means Rs 2,400,000 per year, placing you in the Rs 2.2M–3.2M FBR slab for 2026-27. Let's work it out precisely.",
        ],
      },
      {
        heading: "The Calculation",
        paragraphs: [
          "Annual salary: Rs 2,400,000. Slab formula: Rs 116,000 + 20% of the amount above Rs 2,200,000. Tax = Rs 116,000 + 20% × 200,000 = Rs 116,000 + Rs 40,000 = Rs 156,000 per year. Monthly tax = Rs 13,000. Monthly take-home = Rs 200,000 − Rs 13,000 = Rs 187,000. Effective tax rate: 6.5%.",
        ],
      },
      {
        heading: "Comparison with 2025-26",
        paragraphs: [
          "Last year this bracket was taxed at 23% (Rs 116,000 + 23% above Rs 2.2M), giving Rs 162,000/year. The 2026-27 cut to 20% saves Rs 6,000 a year — modest here, but the savings grow sharply at higher salaries where the old flat 35% band was split.",
        ],
      },
      {
        heading: "Verify It Yourself",
        paragraphs: [
          "Run Rs 200,000 through our salary tax calculator to see the identical result with a slab-by-slab breakdown — and compare both tax years side by side.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much tax on 200,000 salary in Pakistan in 2026-27?",
        a: "Rs 13,000 per month (Rs 156,000 per year). Your take-home pay is Rs 187,000/month, an effective rate of 6.5%.",
      },
    ],
  },
  {
    slug: "take-home-salary-calculator-pakistan",
    title: "Take-Home Salary in Pakistan: How to Calculate Your Net Pay (2026-27)",
    description:
      "Gross vs net salary in Pakistan explained: how income tax, and other deductions shape your take-home pay, with 2026-27 examples.",
    category: "Guides",
    published: "2026-09-18",
    updated: "2026-09-28",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Your offer letter says one number; your bank account receives another. The difference is deductions — and income tax is usually the biggest. This guide shows exactly how to get from gross salary to take-home (net) pay in Pakistan for 2026-27.",
        ],
      },
      {
        heading: "Gross vs Take-Home: The Formula",
        paragraphs: [
          "Take-home pay = Gross salary − Income tax (withheld monthly by employer) − Other deductions (EOBI, provident fund contributions, etc.). Income tax is computed on your annual taxable salary using FBR slabs, then divided by 12 for the monthly deduction.",
        ],
      },
      {
        heading: "Example at Three Salary Levels (2026-27)",
        paragraphs: [
          "Rs 100,000/month: tax Rs 500 → take-home Rs 99,500. Rs 150,000/month: tax Rs 6,000 → take-home Rs 144,000. Rs 300,000/month: tax Rs 34,667 → take-home Rs 265,333. Notice how the effective rate climbs as salary rises — that's progressive taxation working as designed.",
        ],
      },
      {
        heading: "Don't Forget Non-Tax Deductions",
        paragraphs: [
          "Beyond income tax, many employers deduct EOBI (a small fixed monthly amount, employer + employee share) and voluntary provident fund contributions. These are separate from FBR income tax — check your payslip's deduction section to see each line item.",
        ],
      },
      {
        heading: "Calculate Your Exact Net Pay",
        paragraphs: [
          "Our free calculator shows your monthly and annual take-home pay instantly, with the tax math broken down slab by slab. Bookmark it for every salary negotiation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I calculate my take-home salary in Pakistan?",
        a: "Subtract your monthly income tax (annual FBR slab tax ÷ 12) and other deductions like EOBI/provident fund from your gross monthly salary.",
      },
      {
        q: "What is the take-home pay on a 150,000 salary in Pakistan?",
        a: "For 2026-27: monthly tax is Rs 6,000, so take-home is Rs 144,000/month before EOBI/provident fund deductions.",
      },
    ],
  },
  {
    slug: "how-employers-deduct-salary-tax-pakistan",
    title: "How Employers Deduct Salary Tax in Pakistan (Section 149 Explained)",
    description:
      "Why does your payslip show a tax deduction every month? How Section 149 withholding works, and what to check on your salary slip.",
    category: "Guides",
    published: "2026-09-20",
    updated: "2026-09-28",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "If you're salaried in Pakistan, you never 'pay' income tax yourself — your employer deducts it from your salary every month before it reaches you. This system is called deduction at source, governed by Section 149 of the Income Tax Ordinance, 2001.",
        ],
      },
      {
        heading: "How the Monthly Deduction Is Computed",
        paragraphs: [
          "Your employer estimates your total annual salary, computes the full year's tax using FBR's slabs, and divides it by 12. That fixed amount is deducted each month. If your salary changes mid-year (raise, bonus, job switch), the employer recalculates and adjusts the remaining months' deductions.",
        ],
      },
      {
        heading: "What to Check on Your Payslip",
        paragraphs: [],
        list: [
          "Gross salary matches your contract (basic + allowances)",
          "The 'income tax' line equals roughly your annual slab tax ÷ 12",
          "Tax year reference (should be 2026-27 rates from July 2026)",
          "Any arrears/adjustments if you joined mid-year",
        ],
      },
      {
        heading: "Bonuses Are Taxed Too",
        paragraphs: [
          "Bonuses and arrears count as salary income. Employers typically withhold tax on bonuses at your average or marginal rate — which is why a bonus month's payslip often shows a bigger deduction.",
        ],
      },
      {
        heading: "Verify Your Deduction",
        paragraphs: [
          "Enter your gross salary in our calculator and compare its monthly tax figure with your payslip. They should match closely — if not, ask your HR/payroll team which tax year table they're using.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is tax deducted from my salary every month in Pakistan?",
        a: "Under Section 149 of the Income Tax Ordinance, employers must withhold income tax at source — they compute your annual liability from FBR slabs and deduct 1/12th each month.",
      },
      {
        q: "Can I claim back excess salary tax deducted by my employer?",
        a: "Yes. If too much was withheld, you can claim a refund/adjustment when filing your annual income tax return with FBR.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, count);
}
