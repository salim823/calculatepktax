import type { BlogPost } from "./existing";

export const BATCH_07_POSTS: BlogPost[] = [
  {
    slug: "what-is-ntn-pakistan",
    title: "What Is NTN in Pakistan? National Tax Number Explained",
    description:
      "What is an NTN in Pakistan, who needs one, and how do salaried persons get registered with FBR? A plain-English guide to the National Tax Number.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "NTN stands for National Tax Number. It is the unique identification number FBR issues to every registered taxpayer in Pakistan. Think of it as your tax identity: while your CNIC identifies you as a citizen, your NTN identifies you in the tax system.",
          "For salaried persons, the most common confusion is whether they even need an NTN. The short answer: if you are registered with FBR (you file an income tax return), you have an NTN — and for most individuals it is simply your CNIC number.",
        ],
      },
      {
        heading: "CNIC as NTN: How It Works for Individuals",
        paragraphs: [
          "Since 2008, FBR has used the 13-digit CNIC number as the NTN for individuals. This means you do not get a separate random NTN like companies do. When an individual registers with FBR, their CNIC itself becomes their National Tax Number.",
          "Companies and associations of persons get a different NTN — a 7 or 8-digit number issued by the tax office — because they have no CNIC. Individuals, including salaried employees, simply use their CNIC as the NTN.",
        ],
      },
      {
        heading: "Who Needs an NTN (and Registration)?",
        paragraphs: [],
        list: [
          "Salaried persons whose income exceeds Rs 600,000 per year — they are legally required to file an income tax return, which means registering with FBR.",
          "Anyone who wants filer status — registration and an annual return are the two steps that put your name on the Active Taxpayer List.",
          "Business owners, freelancers, and shopkeepers with taxable income.",
          "Anyone doing transactions where withholding tax applies at the filer rate — banks, car dealers, and property registrars all check your ATL status against your NTN/CNIC.",
        ],
      },
      {
        heading: "How Salaried Persons Register and Get Their NTN",
        paragraphs: [
          "Registration happens on FBR's IRIS portal (iris.fbr.gov.pk). The general process: create an account with your CNIC, fill in the registration form with your personal and employment details, and submit. FBR's system issues your NTN — for individuals, your CNIC number — and sends your login credentials by SMS.",
          "After registration, filing your first annual income tax return activates your filer status. Registration alone does not put you on the ATL; you must also file a return for the relevant tax year.",
          "If you want to see what tax you would owe before registering, try the [free salary tax calculator](/) — it applies the official [FBR tax slabs 2026-27](/tax-slabs) to any monthly salary.",
        ],
      },
      {
        heading: "NTN vs Filer Status: They Are Not the Same",
        paragraphs: [
          "Having an NTN (registration) and being a filer (appearing on the Active Taxpayer List) are two different things. Registration gives you the NTN. Filing an annual return for the relevant tax year puts you on the ATL.",
          "You can be registered but a non-filer if you skip your return. The benefits of being a filer — lower withholding rates on bank profit, property, and vehicle transactions — only apply while your name appears on the ATL.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is an NTN in Pakistan?",
        a: "NTN stands for National Tax Number — the unique tax identification number FBR issues to registered taxpayers. For individuals, it is simply their 13-digit CNIC number.",
      },
      {
        q: "Is my NTN the same as my CNIC?",
        a: "For individuals, yes. FBR uses the CNIC number as the NTN for individuals, so you do not receive a separate number. Companies get a different, 7 or 8-digit NTN.",
      },
      {
        q: "Does a salaried person need an NTN?",
        a: "If your annual salary income exceeds Rs 600,000, you are required to file an income tax return, which means registering with FBR and getting an NTN (your CNIC). Registration plus a filed return also earns you filer status on the Active Taxpayer List.",
      },
      {
        q: "How do I register for an NTN?",
        a: "Register on FBR's IRIS portal (iris.fbr.gov.pk) using your CNIC, complete the registration form with your personal and employment details, and FBR will issue your NTN and send login credentials by SMS.",
      },
      {
        q: "Do I need a return to appear on the Active Taxpayer List?",
        a: "Yes. Registration (NTN) alone does not make you a filer — you must also file an annual income tax return for the relevant tax year. Only filers on the ATL get the lower withholding tax rates.",
      },
      {
        q: "Can I check someone's NTN or filer status online?",
        a: "FBR offers online verification tools for NTN and ATL status. For your own registration or filing questions, FBR's helpline (051-111-772-772) or a qualified tax consultant can guide you.",
      },
    ],
  },
  {
    slug: "filer-vs-non-filer-pakistan",
    title: "Filer vs Non-Filer in Pakistan: Difference Explained (2026-27)",
    description:
      "What is the difference between a filer and a non-filer in Pakistan? How ATL status changes withholding tax on property, banking, and vehicles — 2026-27 figures.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "A filer is a person whose name appears on FBR's Active Taxpayer List (ATL) — which means they are registered with FBR and have filed their income tax return for the relevant tax year. A non-filer is anyone whose name does not appear on the ATL, whether they are unregistered or simply have not filed their return.",
          "The difference is not about how much salary tax you pay — Section 149 salary slabs apply identically to filers and non-filers. The difference shows up in withholding taxes on transactions: non-filers pay sharply higher rates on property, banking, vehicles, dividends, and more, under the Tenth Schedule of the Income Tax Ordinance.",
        ],
      },
      {
        heading: "Filer vs Non-Filer Withholding Rates (2026-27)",
        paragraphs: [
          "The general rule under the Tenth Schedule is that non-filers pay roughly double the filer rate on most transactions. Below are figures commonly reported by tax practitioners for Tax Year 2026-27, based on FBR's withholding rate card updated under the Finance Act 2026. FBR issues clarifying SROs from time to time, so always confirm the exact figure for a large transaction before relying on it.",
        ],
        list: [
          "Property sale (Section 236C): filer 2.75% vs non-filer 11.5% — a Rs 10 million sale costs a filer Rs 275,000 but a non-filer Rs 1,150,000.",
          "Property purchase (Section 236K): filer 1.25% vs non-filer 10.5% to 18.5%, depending on the property value band.",
          "Bank profit on deposits (Section 151): the non-filer rate is double the filer rate (commonly reported as 15% vs 30% or 20% vs 40% for different profit types).",
          "Dividend income (Section 150): filer 15% vs non-filer 30%.",
          "Cash withdrawal above Rs 50,000 per day (Section 231AB): filers pay nothing; non-filers pay 0.8%.",
          "Vehicle registration (Section 231B): non-filers pay up to three times the filer amount.",
          "International card payments (Section 236Y): filer 0.5% vs non-filer 1%.",
        ],
      },
      {
        heading: "What Filer Status Does Not Change",
        paragraphs: [
          "Being a filer does not reduce your salary tax. The progressive slabs in [FBR tax slabs 2026-27](/tax-slabs) apply to your annual salary income regardless of ATL status. There is also no discount on the amount of tax you owe on salary — filer status affects transaction withholding, not the salary slabs themselves.",
          "That said, filers get a refund mechanism non-filers do not have: if your employer over-deducted tax (for example after a mid-year raise or bonus), only a filed return lets you claim the excess back.",
        ],
      },
      {
        heading: "Why Salaried Persons Should Be Filers",
        paragraphs: [],
        list: [
          "Salary tax is withheld anyway — if your annual salary exceeds Rs 600,000, your employer deducts tax under Section 149 regardless. Filing costs you nothing extra in tax.",
          "You save on every banking transaction — lower withholding on bank profit and zero tax on large cash withdrawals.",
          "You can claim refunds of excess tax deducted during the year.",
          "Property and vehicle transactions become far cheaper — the single biggest saving for most people.",
          "It is legally required if your taxable income exceeds the threshold; staying unregistered while earning above Rs 600,000 invites FBR notices.",
        ],
      },
      {
        heading: "How to Become a Filer",
        paragraphs: [
          "Register with FBR on the IRIS portal to get your NTN (your CNIC, for individuals), then file your income tax return for the relevant tax year before the deadline. Your name appears on the Active Taxpayer List after the return is filed.",
          "Before filing, it helps to know your exact liability — run your salary through the [free salary tax calculator](/) to see your annual tax under the current slabs.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between a filer and a non-filer in Pakistan?",
        a: "A filer is registered with FBR and has filed an income tax return for the relevant tax year, so their name appears on the Active Taxpayer List (ATL). A non-filer's name does not appear on the ATL. The main practical difference is withholding tax: non-filers pay roughly double (and in some cases triple or far more) on property, banking, vehicle, and dividend transactions.",
      },
      {
        q: "Do filers pay less salary tax than non-filers?",
        a: "No. The salary tax slabs (Section 149) apply identically to everyone based on annual income. Filer status changes withholding rates on transactions, not your salary tax. Check your own liability with the [free salary tax calculator](/) under the [FBR tax slabs 2026-27](/tax-slabs).",
      },
      {
        q: "How much more does a non-filer pay on property transactions?",
        a: "For Tax Year 2026-27, the property sale rate (236C) is 2.75% for filers versus 11.5% for non-filers, and the purchase rate (236K) is 1.25% for filers versus 10.5%–18.5% for non-filers depending on value. Always confirm the current figure with FBR or a consultant before a large transaction, as SROs can amend rates.",
      },
      {
        q: "How do I become a filer?",
        a: "Register on FBR's IRIS portal with your CNIC to get your NTN, then file your income tax return for the relevant tax year. Your name appears on the ATL once the return is filed.",
      },
      {
        q: "Can a non-filer claim a tax refund?",
        a: "Effectively no. Refunds of excess tax deducted (for example, over-deduction by your employer) are claimed through a filed annual income tax return. Non-filers who never file have no mechanism to recover excess deductions.",
      },
      {
        q: "Is the filer/non-filer distinction going away in 2026-27?",
        a: "No. The Tenth Schedule mechanism that raises withholding rates for people not on the ATL remains in force for Tax Year 2026-27. If anything, recent budgets have widened the gap to push more people onto the ATL.",
      },
    ],
  },
  {
    slug: "what-is-atl-pakistan",
    title: "What Is ATL in Pakistan? Active Taxpayer List Explained",
    description:
      "What is the Active Taxpayer List (ATL) in Pakistan? How to check your filer status, how to appear on it, and what happens if you are not on it.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "ATL stands for Active Taxpayer List. It is FBR's official, published list of everyone who is registered and has filed an income tax return for the relevant tax year. If your name (your CNIC/NTN) is on the ATL, you are a filer. If it is not, you are a non-filer — regardless of how much tax you actually pay.",
          "The ATL is the switch that controls withholding rates across Pakistan. Banks, property registrars, car registration offices, and companies paying dividends all check this list before deciding which tax rate to deduct from your transaction.",
        ],
      },
      {
        heading: "How to Check If You Are on the ATL",
        paragraphs: [
          "FBR provides an online ATL verification tool where you enter your CNIC or NTN and it confirms whether your name appears on the list for the current tax year. Banks and other withholding agents use the same lookup.",
          "The status is per tax year: filing your return for Tax Year 2026-27 puts you on the ATL for that year. If you skip a year, you can drop off the list — so filer status is maintained annually, not earned once.",
        ],
      },
      {
        heading: "How to Appear on the ATL",
        paragraphs: [],
        list: [
          "Step 1: Register with FBR on the IRIS portal using your CNIC — this gives you an NTN (for individuals, the CNIC itself).",
          "Step 2: File your income tax return for the relevant tax year before the deadline, declaring your salary and any other income.",
          "Step 3: Pay any tax due shown on the return.",
          "Step 4: Verify your name on the ATL through FBR's online verification after filing.",
        ],
      },
      {
        heading: "What Happens If You Are Not on the ATL",
        paragraphs: [
          "You are treated as a non-filer for every transaction that carries a filer/non-filer rate split. The penalties are automatic and immediate: doubled withholding on bank profit and dividends, up to 18.5% on property purchases, triple vehicle registration charges, and 0.8% on large cash withdrawals — all for Tax Year 2026-27 under the Tenth Schedule.",
          "Beyond the money, staying off the ATL while earning taxable income exposes you to FBR notices and audit. And since your employer already deducts salary tax from your pay, filing the return costs you nothing in extra tax — it only unlocks the benefits.",
          "To see what your salary tax looks like before you file, run your figures through the [free salary tax calculator](/) and compare against the official [FBR tax slabs 2026-27](/tax-slabs).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the ATL in Pakistan?",
        a: "The Active Taxpayer List is FBR's published list of registered taxpayers who have filed an income tax return for the relevant tax year. Being on the ATL is what makes you a filer.",
      },
      {
        q: "How do I check my ATL status?",
        a: "FBR offers an online ATL verification tool where you enter your CNIC or NTN to see whether you appear on the list for the current tax year.",
      },
      {
        q: "How do I get on the Active Taxpayer List?",
        a: "Register with FBR on the IRIS portal with your CNIC to get your NTN, then file your income tax return for the relevant tax year and pay any tax due. Your name appears on the ATL once the return is filed.",
      },
      {
        q: "Is ATL status permanent once I am on it?",
        a: "No. The ATL is maintained per tax year — you must file a return every year to stay on the list. Skipping a year's return can drop you back to non-filer status.",
      },
      {
        q: "Does being on the ATL reduce my salary tax?",
        a: "No. The salary tax slabs apply the same to filers and non-filers. ATL status reduces withholding tax on transactions (property, banking, vehicles, dividends) — not your salary slabs.",
      },
      {
        q: "I am registered but my name is not on the ATL. Why?",
        a: "Registration alone is not enough. You must also file an income tax return for the relevant tax year. Only filers who have filed their return appear on the ATL.",
      },
    ],
  },
  {
    slug: "surcharge-on-salary-abolished-pakistan",
    title: "9% Surcharge on Salary Abolished in 2026-27: What It Means",
    description:
      "The 9% surcharge on high salary incomes is abolished in Tax Year 2026-27. Who benefits, how much high earners save, and the exact math on a Rs 12 million salary.",
    category: "Tax Slabs",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "For Tax Year 2026-27, the 9% surcharge on salary income has been abolished. In 2025-26, salaried individuals with taxable income above Rs 10 million paid the surcharge — an extra 9% on top of their calculated tax. That additional layer no longer exists.",
          "This is the biggest single relief in the 2026-27 budget for high earners: it combines with the slab changes (the 35% top rate now starts at Rs 7 million instead of Rs 4.1 million) to cut the total burden meaningfully.",
        ],
      },
      {
        heading: "Who Benefits From the Abolition?",
        paragraphs: [
          "Anyone with taxable salary income above Rs 10 million per year — roughly Rs 833,333 per month or more. Below that level the surcharge never applied, so nothing changes for the vast majority of salaried persons.",
          "The savings are substantial. Under the 2025-26 structure, a Rs 12 million annual salary produced tax of Rs 3,381,000 (Rs 616,000 + 35% of the Rs 7,900,000 above the threshold). The 9% surcharge added Rs 304,290 on top of that — a total of Rs 3,685,290 per year. In 2026-27, that Rs 304,290 simply disappears.",
        ],
      },
      {
        heading: "The Full 2026-27 Math on Rs 12 Million Salary",
        paragraphs: [
          "Under the 2026-27 slabs, a Rs 12 million salary falls in the top slab: Rs 1,424,000 + 35% of the amount above Rs 7 million. That is Rs 1,424,000 + 35% × Rs 5,000,000 = Rs 1,424,000 + Rs 1,750,000 = Rs 3,174,000 per year — with zero surcharge added.",
          "Compare: Rs 3,685,290 (2025-26, with surcharge) vs Rs 3,174,000 (2026-27, no surcharge). The combined relief from the abolished surcharge and the restructured slabs is Rs 511,290 per year — about Rs 42,608 per month back in the earner's pocket.",
        ],
      },
      {
        heading: "What to Do If You Earn Above Rs 10 Million",
        paragraphs: [
          "Make sure your employer's payroll applies the 2026-27 structure (no surcharge) from July 2026 onward. If surcharge was deducted in early months of the tax year, a filed annual return lets you reconcile and claim any excess back as a refund.",
          "Verify your own numbers anytime with the [free salary tax calculator](/) — it applies the current [FBR tax slabs 2026-27](/tax-slabs) with no surcharge, matching the post-budget structure exactly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the 9% surcharge on salary abolished in 2026-27?",
        a: "Yes. The 9% surcharge on salary income, which applied to taxable income above Rs 10 million in 2025-26, has been abolished for Tax Year 2026-27.",
      },
      {
        q: "Who paid the surcharge in 2025-26?",
        a: "Salaried individuals with annual taxable income above Rs 10 million paid an extra 9% on top of their calculated income tax. For example, on a Rs 12 million salary the surcharge was Rs 304,290 per year.",
      },
      {
        q: "How much do I save if I earn Rs 12 million a year?",
        a: "Under 2025-26 rules, a Rs 12 million salary paid Rs 3,381,000 tax plus Rs 304,290 surcharge (Rs 3,685,290 total). In 2026-27 the tax is Rs 3,174,000 with no surcharge — a total saving of Rs 511,290 per year once the slab restructuring is included.",
      },
      {
        q: "Does the abolition help middle-income earners?",
        a: "Not directly. The surcharge never applied below Rs 10 million annual income, so earners under that level see no change from this measure specifically — though the 2026-27 slab restructuring (35% top rate now starting at Rs 7 million) helps high earners too.",
      },
      {
        q: "My employer deducted surcharge this year. What should I do?",
        a: "Check whether the deduction belonged to Tax Year 2025-26 (valid) or 2026-27 (not applicable). If surcharge was wrongly deducted for 2026-27 months, you can reconcile it through your annual income tax return and claim the excess as a refund.",
      },
    ],
  },
  {
    slug: "marginal-tax-relief-pakistan",
    title: "Marginal Tax Relief in Pakistan: How Slab Edges Work",
    description:
      "Only the income above a slab limit is taxed at the higher rate in Pakistan. See how slab edges work with a Rs 1,210,000 vs Rs 1,190,000 comparison.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Pakistan uses a progressive tax system for salaried income: each slab rate applies only to the slice of income that falls inside that slab. Crossing into a higher slab never re-taxes the income you already earned in the lower slabs — it only changes the rate on the small excess above the boundary.",
          "This is the principle behind marginal tax relief: the higher rate bites only at the margin, so a small raise that pushes you into the next slab cannot cost you more than the raise itself.",
        ],
      },
      {
        heading: "The Rs 1,210,000 vs Rs 1,190,000 Example",
        paragraphs: [
          "The 11% slab begins at Rs 1,200,000 of annual income. At Rs 1,190,000, your whole income sits in the lower slabs: tax = 1% of the Rs 590,000 above Rs 600,000 = Rs 5,900 per year.",
          "At Rs 1,210,000, you cross the boundary — but only Rs 10,000 of your income falls in the 11% slab. Tax = Rs 6,000 (the base for the slab) + 11% × Rs 10,000 = Rs 6,000 + Rs 1,100 = Rs 7,100 per year.",
          "The Rs 20,000 raise cost you only Rs 1,200 in extra tax. You keep Rs 18,800 of the raise. There is no cliff where earning more makes you poorer.",
        ],
      },
      {
        heading: "How to Read the Slab Table Correctly",
        paragraphs: [
          "The official [FBR tax slabs 2026-27](/tax-slabs) show figures like 'Rs 6,000 + 11% of the amount exceeding Rs 1,200,000'. The fixed number (Rs 6,000) is the tax already accumulated on everything below the slab — you never recalculate it. You only apply the percentage to the excess above the boundary.",
          "If you want to see this in action on your own salary, enter any figure in the [free salary tax calculator](/) and check how the tax changes as you move across a slab boundary.",
        ],
      },
      {
        heading: "Common Mistakes About Slab Edges",
        paragraphs: [],
        list: [
          "Myth: a raise into a higher slab reduces take-home pay. Reality: only the excess is taxed at the higher rate, so net pay always rises with gross pay.",
          "Myth: you should avoid a bonus that crosses a slab. Reality: the bonus is still worth taking — the extra tax is only a fraction of the extra income.",
          "Myth: the fixed base amount is extra tax. Reality: it is the accumulated tax on lower slabs, already worked out for you in the FBR table.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is marginal tax relief in Pakistan?",
        a: "It is the principle of the progressive tax system: each slab rate applies only to the income within that slab. When you cross a slab boundary, only the excess above the limit is taxed at the higher rate — your lower-slab income keeps its lower rates.",
      },
      {
        q: "If my salary crosses into a higher slab, is my whole salary taxed at the higher rate?",
        a: "No. Only the amount above the slab limit faces the higher rate. For example, at Rs 1,210,000 annual income, only Rs 10,000 is taxed at 11%; everything below Rs 1,200,000 keeps the lower-slab rates.",
      },
      {
        q: "Can a raise ever reduce my take-home salary?",
        a: "No. Because only the excess above the boundary is taxed at the higher rate, the extra tax on a raise is always smaller than the raise itself. Net pay always rises with gross pay.",
      },
      {
        q: "What does the fixed base amount in the slab table mean?",
        a: "Figures like 'Rs 6,000 +' represent the tax already accumulated on all income below that slab. It is pre-calculated for you — you only need to apply the percentage to the excess above the boundary.",
      },
      {
        q: "How do bonuses interact with slab edges?",
        a: "A bonus is added to your annual income, and only the portion that lands above a slab boundary is taxed at the higher rate. The bonus always increases your net take-home pay. Our [bonus calculator](/) shows the exact tax on any bonus amount.",
      },
    ],
  },
  {
    slug: "what-is-tax-year-pakistan",
    title: "What Is a Tax Year in Pakistan? 2026-27 Dates Explained",
    description:
      "Pakistan's tax year runs 1 July to 30 June. Why Tax Year 2027 means 2026-27, and why the dates matter for withholding, returns, and your salary slips.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "In Pakistan, a tax year runs from 1 July to 30 June — not January to December. Tax Year 2026-27 (also called Tax Year 2027) covers 1 July 2026 to 30 June 2027. The year is named after the June in which it ends.",
          "This matters because every tax rule — the salary slabs, the surcharge abolition, withholding rates — is attached to a specific tax year. The [FBR tax slabs 2026-27](/tax-slabs) apply to income earned between 1 July 2026 and 30 June 2027.",
        ],
      },
      {
        heading: "Tax Year 2026-27: Key Dates",
        paragraphs: [],
        list: [
          "Starts: 1 July 2026 — employers switch payroll to the new slabs and the abolished surcharge from this date.",
          "Ends: 30 June 2027 — your annual salary income for the year is measured up to this date.",
          "Return filing: salaried individuals file the income tax return for this tax year in the months after 30 June 2027 (FBR announces the exact deadline; late filing can push you off the ATL).",
        ],
      },
      {
        heading: "Why the Tax Year Matters for Withholding",
        paragraphs: [
          "Your employer deducts tax each month based on your projected annual income for the current tax year — dividing the expected yearly tax into 12 monthly slices. That is why a mid-year raise or bonus can change your monthly deduction: the employer re-projects your full-year income under the current year's slabs.",
          "Withholding on other transactions (bank profit, dividends, property) also follows the current tax year's rates and your current ATL status. A rate announced in the 2026 budget applies to transactions from 1 July 2026 onward.",
        ],
      },
      {
        heading: "Fiscal Year vs Tax Year: Same Thing?",
        paragraphs: [
          "For practical purposes, yes — Pakistan's fiscal year and tax year both run 1 July to 30 June. You will see the two terms used interchangeably in budget coverage. Just remember the naming: 'Tax Year 2027' and '2026-27' describe the same twelve months.",
          "To see your own numbers for the current year, run your salary through the [free salary tax calculator](/) — it applies the 2026-27 slabs to your monthly and annual figures.",
        ],
      },
    ],
    faqs: [
      {
        q: "When does the tax year start and end in Pakistan?",
        a: "Pakistan's tax year runs from 1 July to 30 June. Tax Year 2026-27 (also called Tax Year 2027) covers 1 July 2026 to 30 June 2027.",
      },
      {
        q: "Is Tax Year 2027 the same as 2026-27?",
        a: "Yes. FBR names the tax year after the June in which it ends, so 'Tax Year 2027' and '2026-27' both describe 1 July 2026 to 30 June 2027.",
      },
      {
        q: "Why does my employer change deductions in July?",
        a: "July marks the start of a new tax year, so payroll switches to the new slabs and rates. For July 2026 this meant the 2026-27 slabs and the abolished 9% surcharge took effect.",
      },
      {
        q: "Which tax year's slabs apply to a bonus paid in June?",
        a: "Income is taxed in the tax year it is received. A bonus paid on or before 30 June 2027 falls in Tax Year 2026-27; one paid on 1 July 2027 falls in the next tax year.",
      },
      {
        q: "When do I file the return for Tax Year 2026-27?",
        a: "Salaried individuals file after the tax year ends on 30 June 2027, in the months FBR designates for filing. Filing on time keeps you on the Active Taxpayer List.",
      },
    ],
  },
  {
    slug: "cnic-vs-ntn-tax-pakistan",
    title: "CNIC vs NTN for Tax in Pakistan: What's the Difference?",
    description:
      "CNIC vs NTN for tax in Pakistan explained: when each number is used, why individuals use their CNIC as their NTN, and what filers need to know.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Your CNIC is your citizenship identity, issued by NADRA. Your NTN (National Tax Number) is your tax identity, issued by FBR. For individuals in Pakistan, the two are the same number: since 2008, FBR uses the 13-digit CNIC as the NTN for individuals.",
          "So the difference is mostly about context, not the digits. When you write the number on a tax return, an IRIS form, or a withholding certificate, you are using it as your NTN. When you show it as ID, it is your CNIC.",
        ],
      },
      {
        heading: "When Is Each One Used?",
        paragraphs: [],
        list: [
          "As CNIC: NADRA identity, voting, SIM registration, bank account opening, travel.",
          "As NTN: income tax returns, IRIS registration, ATL status checks, withholding certificates, FBR correspondence.",
          "In practice, salaried filers enter the same 13-digit number everywhere — the label changes with the form, not the number.",
        ],
      },
      {
        heading: "Who Gets a Different NTN?",
        paragraphs: [
          "Companies, associations of persons (AOPs), and other non-individual taxpayers receive a separate 7 or 8-digit NTN from FBR, because they have no CNIC. Only individuals get the CNIC-as-NTN treatment.",
          "If you are a salaried employee who also runs a small business, you file as an individual under your CNIC/NTN — the business income is declared on the same return.",
        ],
      },
      {
        heading: "What This Means for Filers",
        paragraphs: [
          "Registration with FBR (which creates your NTN) and filing your annual return (which puts you on the ATL) both revolve around this single number. Banks and other withholding agents check your ATL status against your CNIC/NTN to decide whether the filer or non-filer rate applies.",
          "Before registering, it is worth knowing your exact liability — the [free salary tax calculator](/) applies the official [FBR tax slabs 2026-27](/tax-slabs) to your salary in seconds.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is my NTN the same as my CNIC?",
        a: "For individuals, yes. FBR uses the 13-digit CNIC number as the NTN for individuals. Companies and AOPs receive a separate NTN because they have no CNIC.",
      },
      {
        q: "Do I need a separate NTN if I am salaried?",
        a: "No separate number is issued. When you register with FBR, your CNIC itself functions as your National Tax Number.",
      },
      {
        q: "Where do I use my NTN?",
        a: "On income tax returns, IRIS registration, ATL status verification, and FBR correspondence. Withholding agents (banks, registrars) also use it to check your filer status.",
      },
      {
        q: "Can a company use a CNIC as NTN?",
        a: "No. Companies and associations of persons get a distinct 7 or 8-digit NTN issued by FBR. The CNIC-as-NTN rule applies only to individuals.",
      },
      {
        q: "I lost my NTN. How do I recover it?",
        a: "As an individual, your NTN is your CNIC — you already have it. If you need your IRIS login recovered, use FBR's recovery options on the IRIS portal or contact the FBR helpline.",
      },
    ],
  },
  {
    slug: "minimum-tax-salary-pakistan",
    title: "Is There a Minimum Tax on Salary in Pakistan?",
    description:
      "Is there a minimum tax on salary income in Pakistan? No — salaries below Rs 600,000 a year are fully tax-free in 2026-27. How minimum tax works elsewhere.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "There is no minimum tax on salary income in Pakistan. If your annual salary is Rs 600,000 or less, you pay zero income tax in Tax Year 2026-27 — not a token amount, not a minimum slab. The first slab of the [FBR tax slabs 2026-27](/tax-slabs) charges 0% on income up to Rs 600,000.",
          "The confusion comes from the term 'minimum tax', which is a real concept in Pakistani tax law — but it applies to businesses, not to salaried individuals.",
        ],
      },
      {
        heading: "Where Minimum Tax Actually Applies",
        paragraphs: [
          "Under Section 113 of the Income Tax Ordinance, companies and certain businesses pay a minimum tax on turnover — a floor that applies even if their computed profit-based tax is lower. This exists to ensure businesses with large revenues but reported losses still contribute.",
          "Salaried persons are taxed under a completely different head of income ('salary') with its own progressive slabs. There is no turnover concept for salary, and therefore no minimum tax floor.",
        ],
      },
      {
        heading: "What Low Earners Actually Pay",
        paragraphs: [
          "A Rs 40,000 monthly salary (Rs 480,000 per year) pays Rs 0 tax. A Rs 50,000 salary (exactly Rs 600,000 per year) pays Rs 0 tax. Tax only begins on the amount above Rs 600,000 — at just 1% in the next slab.",
          "Note the related rule: if your salary income is Rs 600,000 or below, you are generally not even required to file an income tax return — though filing voluntarily is the only way to get on the Active Taxpayer List and access filer benefits.",
          "Check your exact position with the [free salary tax calculator](/) — any salary at or below Rs 50,000 per month shows zero tax.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a minimum tax on salary in Pakistan?",
        a: "No. Salary income up to Rs 600,000 per year is completely tax-free in Tax Year 2026-27. There is no minimum or token tax on salaries — the first slab charges 0%.",
      },
      {
        q: "What is minimum tax under Section 113?",
        a: "It is a turnover-based floor that applies to companies and certain businesses, ensuring they pay some tax even in low-profit years. It does not apply to salaried individuals.",
      },
      {
        q: "Do I need to file a return if my salary is below Rs 600,000?",
        a: "Generally no, since no tax is payable. However, filing voluntarily puts you on the Active Taxpayer List, which gives you lower withholding rates on banking, property, and vehicle transactions.",
      },
      {
        q: "Is there any tax at all on a Rs 45,000 monthly salary?",
        a: "No income tax — Rs 45,000 × 12 = Rs 540,000 per year, fully inside the tax-free slab. Your take-home is the full Rs 45,000.",
      },
      {
        q: "Does minimum tax apply to freelancers?",
        a: "Freelancers are generally taxed under different heads (business or other income) than salaried employees, and the minimum tax concept can apply to businesses. Confirm your treatment with a tax consultant, since it depends on how your income is classified.",
      },
    ],
  },
  {
    slug: "part-time-salary-tax-pakistan",
    title: "Is Part-Time Salary Taxable in Pakistan? (2026-27)",
    description:
      "Is part-time salary taxable in Pakistan? Yes — part-time pay is salary income taxed on your annual total. A Rs 40,000/month example showing zero tax.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Yes, part-time salary is taxable in Pakistan — but only through the same annual slabs as everyone else. The Income Tax Ordinance does not have a separate category for part-time work: your part-time pay is salary income, and what decides your tax is your total annual income, not whether the job is full-time or part-time.",
          "In practice, most part-time earnings fall below the tax-free limit. A part-time salary of Rs 40,000 per month equals Rs 480,000 per year — comfortably inside the Rs 600,000 tax-free slab. Tax: Rs 0.",
        ],
      },
      {
        heading: "How Part-Time Income Is Taxed",
        paragraphs: [
          "All your salary income for the tax year is added together — full-time job plus part-time job plus any bonuses — and the total runs through the progressive [FBR tax slabs 2026-27](/tax-slabs). There is no separate part-time rate and no special exemption for part-time workers.",
          "If you hold two jobs, neither employer knows about the other, so each may deduct as if your income were only what they pay you. The correct total tax is settled when you file your annual return: if too little was deducted overall, you pay the balance; if too much, you claim a refund.",
        ],
      },
      {
        heading: "Examples: Part-Time Salaries in 2026-27",
        paragraphs: [],
        list: [
          "Rs 25,000/month part-time (Rs 300,000/year): Rs 0 tax.",
          "Rs 40,000/month part-time (Rs 480,000/year): Rs 0 tax.",
          "Rs 55,000/month part-time (Rs 660,000/year): 1% on the Rs 60,000 above Rs 600,000 = Rs 600/year, about Rs 50/month.",
          "Rs 70,000/month part-time (Rs 840,000/year): 1% on Rs 240,000 = Rs 2,400/year, Rs 200/month.",
        ],
      },
      {
        heading: "What Part-Time Earners Should Do",
        paragraphs: [
          "Keep your salary slips from all employers — you will need them at return-filing time. If your combined annual income stays under Rs 600,000, you owe nothing; if it crosses the limit, file a return and pay (or reconcile) the small amount due.",
          "Run both incomes together in the [free salary tax calculator](/) by entering your combined monthly figure — it applies the current slabs to the total.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is part-time salary taxable in Pakistan?",
        a: "Yes. Part-time pay counts as salary income and is taxed through the same annual progressive slabs. Whether you owe tax depends on your total annual income, not on full-time or part-time status.",
      },
      {
        q: "Is there tax on a Rs 40,000 part-time salary?",
        a: "No. Rs 40,000 × 12 = Rs 480,000 per year, which is below the Rs 600,000 tax-free limit. The full Rs 40,000 is your take-home pay.",
      },
      {
        q: "I have a full-time job and a part-time job. How is tax calculated?",
        a: "Both incomes are added together for the tax year and taxed as one total through the progressive slabs. Each employer deducts separately, so the exact liability is reconciled in your annual return — with a refund if you overpaid.",
      },
      {
        q: "Does my employer deduct tax on part-time salary?",
        a: "Employers deduct tax under Section 149 based on the salary they pay you. If your pay from that employer alone suggests annual income above Rs 600,000, they will deduct — the final figure is settled at filing time.",
      },
      {
        q: "Do I need to file a return for part-time income?",
        a: "If your total annual income exceeds Rs 600,000, filing is required. Even below that, filing voluntarily gets you on the Active Taxpayer List with its lower withholding rates.",
      },
    ],
  },
  {
    slug: "internship-stipend-tax-pakistan",
    title: "Is Internship Stipend Taxable in Pakistan?",
    description:
      "Is an internship stipend taxable in Pakistan? Usually no — stipends are salary income and almost always fall below the Rs 600,000 tax-free limit.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "An internship stipend is generally treated as salary income for tax purposes in Pakistan, and in practice it is almost always tax-free. Typical stipends — Rs 15,000 to Rs 50,000 per month — annualize well below the Rs 600,000 tax-free limit, so no income tax is due.",
          "A Rs 30,000 monthly stipend is Rs 360,000 per year: Rs 0 tax. Even a generous Rs 50,000 stipend is exactly Rs 600,000 per year: Rs 0 tax. The stipend would need to exceed Rs 50,000 per month before any tax arises.",
        ],
      },
      {
        heading: "When Could a Stipend Be Taxed?",
        paragraphs: [
          "Tax only enters the picture if your total annual income — stipend plus any other earnings in the same tax year — crosses Rs 600,000. A paid internship at Rs 60,000/month (Rs 720,000/year) would owe 1% on the Rs 120,000 excess = Rs 1,200 per year.",
          "There is no special 'internship exemption' in the law; the tax-free result comes from the general Rs 600,000 slab that applies to all salary income, per the [FBR tax slabs 2026-27](/tax-slabs).",
        ],
      },
      {
        heading: "Does the Employer Deduct Tax From a Stipend?",
        paragraphs: [
          "Employers deduct tax under Section 149 based on projected annual pay. For a stipend that annualizes below Rs 600,000, there should be no deduction. If tax was deducted in error, it is recoverable — but only through a filed income tax return, which requires registration on IRIS.",
          "Keep your stipend slips or offer letter regardless: they document the income if you ever need to file.",
        ],
      },
      {
        heading: "Stipend vs Scholarship: A Quick Note",
        paragraphs: [
          "Do not confuse a stipend (payment for work done as an intern) with a scholarship or educational grant, which follows different treatment. If your 'stipend' is actually tied to employment duties, treat it as salary income. When in doubt about classification, confirm with the paying organization's HR or a tax consultant.",
          "To see exactly where any stipend lands, enter the monthly figure in the [free salary tax calculator](/) — anything at or under Rs 50,000/month shows zero tax.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is internship stipend taxable in Pakistan?",
        a: "It is treated as salary income, but typical stipends (Rs 15,000–50,000/month) annualize below the Rs 600,000 tax-free limit, so no income tax is due in 2026-27.",
      },
      {
        q: "Is there tax on a Rs 30,000 monthly stipend?",
        a: "No. Rs 30,000 × 12 = Rs 360,000 per year, fully inside the tax-free slab. Take-home is the full Rs 30,000.",
      },
      {
        q: "At what stipend level does tax start?",
        a: "Above Rs 50,000 per month (Rs 600,000 per year). Only the amount above Rs 600,000 is taxed, at 1% in the next slab — so even slightly higher stipends owe very little.",
      },
      {
        q: "My employer deducted tax from my stipend. Can I get it back?",
        a: "Yes, if the deduction was not actually due. Excess tax is recovered by filing an annual income tax return on IRIS — which requires FBR registration. Keep your stipend slips as proof.",
      },
      {
        q: "Is a scholarship taxed the same way as a stipend?",
        a: "Not necessarily. A stipend paid for work performed is salary income; a scholarship or educational grant follows different treatment. Confirm the classification with the payer or a tax consultant if you are unsure.",
      },
    ],
  },
  {
    slug: "teachers-tax-rebate-pakistan",
    title: "Teachers' Tax Rebate in Pakistan: 25% Rebate Explained",
    description:
      "The 25% tax rebate for full-time teachers and researchers expired after Tax Year 2025 and is NOT available in 2026-27. History, current status, and what teachers pay now.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "The 25% tax rebate for full-time teachers and researchers is not available in Tax Year 2026-27. The rebate was reintroduced for a limited period by the Finance Act 2025 (a new clause 3A in Part III of the Second Schedule), but it applied only to the three tax years then specified — and expired after Tax Year 2025. FBR's Circular No. 01 of 2025-26 confirms it is no longer available for Tax Year 2026 onwards.",
          "This is a common source of confusion because the rebate has been switched on and off repeatedly over the years, and old articles still circulate online. For the current tax year, teachers are taxed on the same slabs as every other salaried person.",
        ],
      },
      {
        heading: "A Brief History of the Teachers' Rebate",
        paragraphs: [],
        list: [
          "The 25% rebate for full-time teachers and researchers existed under the Income Tax Ordinance 2001 for years.",
          "It was withdrawn (omitted under the Finance Act 2022), making it unavailable for Tax Years 2023 and 2024 — which triggered thousands of complaints and Federal Tax Ombudsman intervention.",
          "The federal cabinet restored it, and the Finance Act 2025 reintroduced it via clause (3A) — but only for three specified tax years, ending with Tax Year 2025.",
          "It has now expired again. The Institute of Chartered Accountants of Pakistan has proposed reinstating it for 2026-27, but as of now that is only a proposal.",
        ],
      },
      {
        heading: "What Teachers Pay in 2026-27",
        paragraphs: [
          "Full-time teachers and researchers pay tax on the standard salaried slabs with no rebate: the [FBR tax slabs 2026-27](/tax-slabs) apply in full. A teacher earning Rs 100,000/month (Rs 1.2 million/year), for example, owes 1% on the Rs 600,000 above the tax-free limit = Rs 6,000 per year (Rs 500/month) — the same as any other salaried person at that income.",
          "Verify your own figure with the [free salary tax calculator](/) — it applies the current slabs with no teacher rebate, matching the law as it stands.",
        ],
      },
      {
        heading: "What Teachers Should Watch For",
        paragraphs: [
          "If the rebate is reinstated by a future Finance Act, it would typically be announced in the budget and clarified in FBR's explanatory circular — not by social media posts. Treat viral claims about teacher tax relief with skepticism and check fbr.gov.pk or a qualified consultant before acting on them.",
          "Separately, some employers historically over-deducted from teachers' salaries without applying the rebate during the years it was in force. If you believe excess tax was deducted in a year when the rebate applied, a filed return and the FTO complaint mechanism were the remedies used at the time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the 25% teachers' tax rebate available in 2026-27?",
        a: "No. The rebate expired after Tax Year 2025. It was reintroduced for a limited three-year period by the Finance Act 2025, and FBR's Circular No. 01 of 2025-26 confirms it is no longer available for Tax Year 2026 onwards.",
      },
      {
        q: "Who qualified for the teachers' rebate when it was active?",
        a: "Full-time teachers and researchers employed in recognized educational and research institutions. The rebate was 25% of the tax payable on their salary income.",
      },
      {
        q: "Has the rebate been reinstated for 2026-27?",
        a: "Not as law. The Institute of Chartered Accountants of Pakistan has proposed reinstating the 25% rebate for 2026-27, but it remains a proposal — check fbr.gov.pk or a tax consultant for the current position before relying on it.",
      },
      {
        q: "How much tax does a teacher pay now?",
        a: "The same as any salaried person: the standard progressive slabs apply with no rebate. For example, Rs 100,000/month (Rs 1.2M/year) means Rs 6,000/year tax. Run your salary in the [free salary tax calculator](/) for the exact figure.",
      },
      {
        q: "My employer deducted extra tax ignoring the rebate in an earlier year. What can I do?",
        a: "During years when the rebate was legally in force, excess deductions were recoverable through a filed income tax return (refund claim), and the Federal Tax Ombudsman handled thousands of such teacher complaints. A tax consultant can advise on whether your specific year still allows a claim.",
      },
    ],
  },
  {
    slug: "tax-credit-investment-pakistan",
    title: "Tax Credits on Investment in Pakistan: Sections 62 & 63 Explained",
    description:
      "Which investment tax credits still exist in 2026-27? Section 62 was abolished, but the Section 63 pension fund credit survives. What salaried persons can actually claim.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "A tax credit directly reduces the tax you owe — unlike a deduction, which only reduces the income the tax is calculated on. Pakistan's Income Tax Ordinance once offered several investment-linked credits, but most have been withdrawn. Here is what actually survives for Tax Year 2026-27.",
          "The key distinction: Section 62 (investment in shares and insurance) was omitted by the Finance Act 2022 and is gone. Section 62A (health insurance) was omitted too. Section 63 (approved pension fund contributions) is still in force for Tax Year 2027.",
        ],
      },
      {
        heading: "Section 63: The Pension Fund Credit (Still Available)",
        paragraphs: [
          "Under Section 63, a person earning salary or business income can claim a tax credit for contributions to an approved pension fund under the Voluntary Pension System Rules 2005. FBR's updated Income Tax Ordinance (up to 30 June 2026) retains this provision for Tax Year 2027.",
          "The credit is calculated as (A / B) x C, where A is the tax assessed before credits, B is taxable income, and C is the lower of the actual contribution or 20% of taxable income. In plain terms: the credit equals your average tax rate applied to your qualifying pension contribution, capped at 20% of your taxable income.",
          "Example: taxable income Rs 2,000,000. Using the [FBR tax slabs 2026-27](/tax-slabs): tax = Rs 6,000 + 11% of the Rs 800,000 above Rs 1,200,000 = Rs 94,000. A Rs 200,000 pension contribution (within the 20% cap) yields a credit of (94,000 / 2,000,000) x 200,000 = Rs 9,400 off the tax bill.",
        ],
      },
      {
        heading: "What Was Abolished: Sections 62 and 62A",
        paragraphs: [
          "Section 62 previously gave a credit for investment in shares of listed companies, mutual funds, and life insurance premiums. Section 62A covered health insurance. Both were omitted through the Finance Act 2022, and the Institute of Chartered Accountants of Pakistan has noted their withdrawal as a reason the salaried tax burden has risen.",
          "Do not rely on old guides that still list these credits — they do not apply to Tax Year 2026-27 returns.",
        ],
      },
      {
        heading: "Other Credits Worth Knowing",
        paragraphs: [
          "Section 61 (donations to approved charitable institutions) survives, with the eligible amount capped at 30% of taxable income. Section 63A (profit on debt for low-cost housing loans, subject to property size limits) is retained for Tax Year 2027. Section 60 allows Zakat paid as a straight deduction.",
          "Because credit rules change with each Finance Act, confirm the current position on fbr.gov.pk or with a qualified tax consultant before structuring investments around a credit — and estimate your baseline tax first with the [free salary tax calculator](/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I still claim a tax credit for investing in shares in 2026-27?",
        a: "No. The Section 62 credit for investment in shares, mutual funds, and insurance was omitted by the Finance Act 2022 and is not available for Tax Year 2026-27.",
      },
      {
        q: "Is the pension fund tax credit still available?",
        a: "Yes. Section 63 remains in force for Tax Year 2027: contributions to an approved pension fund earn a credit of (tax / taxable income) x qualifying contribution, where the qualifying contribution is capped at 20% of taxable income.",
      },
      {
        q: "How is the Section 63 credit calculated?",
        a: "Credit = (A / B) x C. A is your tax assessed before credits, B is your taxable income, and C is the lower of your actual pension contribution or 20% of your taxable income.",
      },
      {
        q: "Can I claim a credit for donations?",
        a: "Yes — Section 61 gives a credit for donations to approved charitable institutions, with the eligible donation capped at 30% of taxable income. Keep official receipts; the institution must be FBR-approved.",
      },
      {
        q: "Is there a tax credit on my home loan?",
        a: "Section 63A retains a credit for profit on debt paid on qualifying low-cost housing loans for Tax Year 2027, subject to conditions including property size limits. Confirm the current conditions with FBR or a consultant.",
      },
      {
        q: "Do tax credits apply automatically?",
        a: "No. Credits are claimed in your annual income tax return on IRIS with supporting documentation. Your employer's monthly withholding does not account for them — you reconcile the benefit at filing time.",
      },
    ],
  },
  {
    slug: "senior-citizen-salary-tax-pakistan",
    title: "Senior Citizen Salary Tax in Pakistan: Rules Explained",
    description:
      "Do senior citizens get a tax discount on salary in Pakistan in 2026-27? The old 50% rebate was withdrawn in 2014 — here is what actually applies today.",
    category: "Tax Basics",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Senior citizens in Pakistan pay salary tax on the same slabs as everyone else in Tax Year 2026-27. There is no age-based discount, rebate, or reduced rate for salaried income at age 60 or above under the current law.",
          "If you have seen social media posts claiming FBR announced a 'new' 50% tax reduction for citizens over 60, treat them as misinformation: FBR officials have publicly dismissed these claims, confirming no such directive has been issued.",
        ],
      },
      {
        heading: "The Old 50% Rebate: Withdrawn in 2014",
        paragraphs: [
          "A 50% reduction in tax liability for taxpayers aged 60 or more did exist — introduced in 2010 under section 53(1)(c) and clause (1A) of Part III of the Second Schedule. But it was abolished through the Finance Act 2014.",
          "Old press releases and articles from 2010 are still recirculated online as if they were current policy. They are not. For Tax Year 2026-27, no senior-citizen reduction applies to salary income.",
        ],
      },
      {
        heading: "What Actually Reduces Tax for Older Earners",
        paragraphs: [
          "The same tools available to every salaried person apply: the Rs 600,000 tax-free threshold, the progressive slabs in the [FBR tax slabs 2026-27](/tax-slabs), the Section 63 pension fund credit, the Section 61 donation credit, and Zakat deductions under Section 60.",
          "Retirees should also check how their specific income is classified — pension income and salary income can be treated differently, and commuted pension amounts have their own rules. A tax consultant can confirm the treatment for your situation.",
          "To see your exact liability at any age, run your salary through the [free salary tax calculator](/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do senior citizens get a tax discount on salary in Pakistan?",
        a: "No. In Tax Year 2026-27 there is no age-based rebate or reduced rate on salary income. Senior citizens are taxed on the same progressive slabs as everyone else.",
      },
      {
        q: "What happened to the 50% senior citizen rebate?",
        a: "It was introduced in 2010 but abolished through the Finance Act 2014. Claims circulating on social media about a 'new' FBR rebate for over-60s have been dismissed by FBR officials as false.",
      },
      {
        q: "Is pension income taxed the same as salary?",
        a: "Not necessarily — pension income can follow different rules from salary income, including specific treatment of commuted pension. Confirm your classification with a tax consultant rather than assuming the salary slabs apply.",
      },
      {
        q: "Can a senior citizen claim the Section 63 pension credit?",
        a: "The Section 63 credit applies to contributions made to an approved pension fund during the tax year, subject to its conditions — it is not age-restricted in itself, but the contribution must actually be made in that year.",
      },
      {
        q: "Should senior citizens still file a tax return?",
        a: "If taxable income exceeds Rs 600,000, filing is required. Filing also keeps you on the Active Taxpayer List, which preserves the lower withholding rates on banking and other transactions.",
      },
    ],
  },
  {
    slug: "withholding-tax-rates-salary-pakistan",
    title: "Withholding Tax Rates on Salary in Pakistan (2026-27)",
    description:
      "Withholding tax on salary in Pakistan equals the slab rates themselves (Section 149). How monthly deduction works, with a Rs 250,000/month worked example.",
    category: "Tax Slabs",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Withholding tax on salary is not a separate tax with its own rates. Under Section 149 of the Income Tax Ordinance, your employer deducts tax using the exact same progressive slabs that determine your final liability — the [FBR tax slabs 2026-27](/tax-slabs). The 'withholding rate' on your salary is simply your slab rate.",
          "This is different from withholding on dividends, bank profit, or property, where flat filer/non-filer rates apply. For salary, filer status does not change the rate — the slabs apply identically to everyone.",
        ],
      },
      {
        heading: "How Monthly Withholding Works",
        paragraphs: [
          "Each month, your employer projects your total annual salary (monthly pay × 12, plus expected bonuses and allowances), computes the full year's tax on that projection using the slabs, and deducts one-twelfth of it from your pay.",
          "When your salary changes mid-year — a raise, a bonus, a new allowance — the employer re-projects the annual total and adjusts the monthly deduction. That is why your 'tax' line on the payslip can jump after a raise even though the slabs did not change: the projection moved you into a higher slice of the slabs.",
        ],
      },
      {
        heading: "Worked Example: Rs 250,000 Monthly Salary",
        paragraphs: [
          "Annual salary: Rs 250,000 × 12 = Rs 3,000,000. This falls in the Rs 2.2M–3.2M slab: tax = Rs 116,000 + 20% of the amount above Rs 2,200,000.",
          "Excess = Rs 3,000,000 − Rs 2,200,000 = Rs 800,000. Tax = Rs 116,000 + 20% × Rs 800,000 = Rs 116,000 + Rs 160,000 = Rs 276,000 per year.",
          "Monthly withholding: Rs 276,000 ÷ 12 = Rs 23,000 per month. Take-home: Rs 250,000 − Rs 23,000 = Rs 227,000 per month (before any other deductions like provident fund).",
        ],
      },
      {
        heading: "Withholding vs Final Tax: Reconciliation at Filing",
        paragraphs: [
          "Withholding is an advance payment, not necessarily the final figure. If your employer over-deducted — for example, you changed jobs mid-year and both employers projected a full year's income — the excess is refunded when you file your annual return.",
          "Conversely, if too little was withheld (say a large year-end bonus was under-projected), the balance is payable with your return. Filing is what settles the account — which is also why filing keeps you on the Active Taxpayer List.",
          "To preview your own monthly deduction, enter your salary in the [free salary tax calculator](/) — it shows the annual tax and the monthly figure side by side.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the withholding tax rate on salary in Pakistan?",
        a: "There is no separate withholding rate for salary. Under Section 149, the employer deducts tax using the standard progressive salary slabs — the same rates that determine your final tax liability for 2026-27.",
      },
      {
        q: "How much tax is deducted monthly on a Rs 250,000 salary?",
        a: "Rs 23,000 per month. Annual income of Rs 3,000,000 falls in the 2.2M–3.2M slab: Rs 116,000 + 20% × Rs 800,000 = Rs 276,000/year, which is Rs 23,000/month.",
      },
      {
        q: "Does filer status change salary withholding?",
        a: "No. The salary slabs apply identically to filers and non-filers. Filer status affects withholding on transactions like bank profit, dividends, and property — not on salary.",
      },
      {
        q: "Why did my monthly tax deduction increase after a raise?",
        a: "Your employer re-projects your full-year income and recalculates the annual tax on the higher total. Only the extra income above the old level is taxed at the higher slab rate — your take-home still rises.",
      },
      {
        q: "Is withheld salary tax my final tax?",
        a: "It is an advance payment. The exact liability is settled in your annual return: over-deductions are refunded, under-deductions are payable. Filing reconciles the difference.",
      },
      {
        q: "What if I have two employers in one year?",
        a: "Each employer withholds based only on what it pays you, which can mean too little or too much was deducted overall. Add both incomes together and reconcile the total in your annual return.",
      },
    ],
  },
  {
    slug: "tax-on-1-crore-annual-salary-pakistan",
    title: "Tax on Rs 1 Crore Annual Salary in Pakistan (2026-27)",
    description:
      "Tax on a Rs 1 crore annual salary in Pakistan for 2026-27: Rs 2,474,000 per year, Rs 206,167 per month — with the full slab math, take-home, and effective rate.",
    category: "Salary Examples",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "A Rs 1 crore annual salary (Rs 10,000,000 per year, about Rs 833,333 per month) sits in the top slab of the [FBR tax slabs 2026-27](/tax-slabs). The total income tax is Rs 2,474,000 per year — Rs 206,167 per month — leaving a take-home of Rs 627,167 per month.",
          "The effective tax rate is 24.74%: roughly one rupee in four goes to income tax. And unlike 2025-26, there is no 9% surcharge on top — it was abolished for Tax Year 2026-27.",
        ],
      },
      {
        heading: "The Full Calculation",
        paragraphs: [
          "Rs 10,000,000 falls in the 'above Rs 7,000,000' slab: tax = Rs 1,424,000 + 35% of the amount exceeding Rs 7,000,000.",
          "Excess = Rs 10,000,000 − Rs 7,000,000 = Rs 3,000,000. Tax = Rs 1,424,000 + 35% × Rs 3,000,000 = Rs 1,424,000 + Rs 1,050,000 = Rs 2,474,000 per year.",
          "Monthly: Rs 2,474,000 ÷ 12 = Rs 206,167. Take-home: Rs 833,333 − Rs 206,167 = Rs 627,167 per month. Effective rate: Rs 2,474,000 ÷ Rs 10,000,000 = 24.74%.",
        ],
      },
      {
        heading: "2026-27 vs 2025-26: What Changed at Rs 1 Crore",
        paragraphs: [
          "In 2025-26, the 35% top rate began at just Rs 4.1 million, and income above Rs 10 million additionally attracted the 9% surcharge. The 2026-27 restructuring moved the 35% threshold up to Rs 7 million and abolished the surcharge entirely.",
          "At exactly Rs 10 million the surcharge boundary is not crossed (it applied above Rs 10 million), but anyone earning even slightly more in 2025-26 paid it. In 2026-27, no salary level attracts a surcharge at all.",
        ],
      },
      {
        heading: "Ways to Reduce the Bill Legally",
        paragraphs: [
          "High earners have the most to gain from the surviving credits: Section 63 pension fund contributions (credit capped via 20% of taxable income), Section 61 donations to approved charities (eligible amount up to 30% of taxable income), and Zakat deductions under Section 60.",
          "These are claimed in the annual return, not through monthly payroll — so your payslip will show the full Rs 206,167 deduction, and the credits reduce the final liability at filing time. Estimate your baseline first with the [free salary tax calculator](/).",
        ],
      },
    ],
    faqs: [
      {
        q: "How much tax is on a Rs 1 crore annual salary in Pakistan?",
        a: "Rs 2,474,000 per year in Tax Year 2026-27 — Rs 206,167 per month. Take-home is Rs 627,167 per month, an effective rate of 24.74%.",
      },
      {
        q: "What is the monthly take-home on Rs 10,000,000 per year?",
        a: "Gross monthly: Rs 833,333. Monthly tax: Rs 206,167. Take-home: Rs 627,167 per month (before provident fund or other non-tax deductions).",
      },
      {
        q: "Is there a surcharge on Rs 1 crore salary in 2026-27?",
        a: "No. The 9% surcharge on salary income above Rs 10 million was abolished for Tax Year 2026-27. The Rs 2,474,000 figure is the complete tax.",
      },
      {
        q: "What is the effective tax rate at Rs 1 crore?",
        a: "24.74% — well below the 35% top marginal rate, because the lower slabs tax the first Rs 7 million at progressively lower rates. Only income above Rs 7 million faces 35%.",
      },
      {
        q: "How can I legally reduce tax on a Rs 1 crore salary?",
        a: "The surviving credits help most at high incomes: Section 63 pension fund contributions, Section 61 donations to approved charities, and Section 60 Zakat deductions. Confirm current rules with a tax consultant and claim them in your annual return.",
      },
    ],
  },
];
