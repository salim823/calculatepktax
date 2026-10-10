import type { BlogPost } from "./existing";

export const BATCH_05_POSTS: BlogPost[] = [
  {
    slug: "tax-on-arrears-salary-pakistan",
    title: "Tax on Salary Arrears in Pakistan: How Arrears Are Taxed (2026-27)",
    description:
      "Salary arrears are added to the year's taxable salary income and taxed at your marginal slab rate. See the exact math for a promotion-arrears month.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Salary arrears — the backdated pay you receive after a raise, promotion, or pay-scale revision — are fully taxable in Pakistan. The short answer: arrears are not taxed under some special arrears rate. They are simply added to your annual salary income for the year you receive them, and only the extra amount pushes through your marginal slab at that slab's rate.",
          "That is why your payslip looks alarming in an arrears month. Your employer recalculates withholding tax on the higher projected annual income, so a month that includes six months of backpay can show a much bigger deduction than usual. The money is still yours to claim back (or owe more on) when you file your annual return.",
        ],
      },
      {
        heading: "How Arrears Are Taxed Under FBR Rules",
        paragraphs: [
          "Pakistan's salary tax is progressive: income up to Rs 600,000 a year is taxed at 0%, the next slab at 1%, then 11%, 20%, and so on. Arrears paid to you in 2026-27 are added on top of your regular salary for the tax year. The arrears amount itself is taxed at whatever slab the extra income lands in — only the excess above each slab limit takes that slab's rate.",
          "Employers deduct withholding tax monthly based on your projected annual income. When arrears hit, that projection jumps, and the employer spreads the extra annual tax across the remaining months — which is why the arrears month looks heavily taxed. At return-filing time, the final figure is reconciled against the actual [FBR tax slabs 2026-27](/tax-slabs), so any over-deduction comes back to you.",
        ],
      },
      {
        heading: "Worked Example: Promotion Arrears Month",
        paragraphs: [
          "Say your monthly salary is Rs 150,000 (Rs 1,800,000 per year). Normal annual tax: Rs 6,000 + 11% of Rs 600,000 = Rs 72,000, or Rs 6,000 per month deducted from your payslip.",
          "Now your promotion is backdated six months, adding Rs 10,000 per month in arrears: a lump sum of Rs 60,000 paid in one month. Your projected annual income becomes Rs 1,860,000. New annual tax: Rs 6,000 + 11% of Rs 660,000 = Rs 78,600. The extra tax on the arrears is Rs 6,600 — exactly 11% of Rs 60,000, because the whole amount sits inside your 11% marginal slab.",
          "Your employer may deduct a big chunk of that Rs 6,600 in the arrears month alone. That is not a penalty — it is the annual figure being compressed into fewer remaining payroll cycles. Check the result yourself in our [free salary tax calculator](/) by entering 1,860,000 as the annual salary.",
        ],
      },
      {
        heading: "Check Your Payslip",
        paragraphs: [
          "In an arrears month, look for a single line like 'arrears' or 'backpay' added to gross salary, plus a higher-than-normal income-tax deduction. The higher deduction should roughly equal your marginal rate (11%, 20%, etc.) times the arrears amount. If the jump is far larger — or the employer withheld a flat 30% on the arrears — ask payroll to recalculate on the projected-annual basis, because flat withholding on arrears is a common payroll error.",
          "If the arrears relate to an earlier tax year but were paid in 2026-27, they are still taxable in 2026-27 — FBR taxes salary on a receipt basis, meaning the year you actually receive the money.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are salary arrears taxable in Pakistan?",
        a: "Yes. Salary arrears are taxed as salary income in the tax year you receive them, at your marginal slab rate. There is no separate arrears tax rate.",
      },
      {
        q: "Why is my tax deduction so high in an arrears month?",
        a: "Your employer annualizes the arrears into your projected annual income and adjusts withholding for the remaining months. The bigger deduction is timing, not a penalty — it balances out when you file your return.",
      },
      {
        q: "Can I get the extra tax on arrears refunded?",
        a: "If your employer over-deducted during the year, file your annual income tax return on IRIS and the excess is adjusted or refunded according to your actual slab calculation.",
      },
      {
        q: "Are arrears from a previous tax year taxed differently?",
        a: "No. FBR taxes salary on receipt basis, so arrears are taxable in the year they are paid to you, even if they relate to backdated salary from an earlier year.",
      },
      {
        q: "What marginal rate applies to my arrears?",
        a: "It depends on your total annual income. Arrears stack on top of your regular salary, so use the slab that contains your projected annual total — check the table on our [FBR tax slabs 2026-27](/tax-slabs) page.",
      },
    ],
  },
  {
    slug: "tax-on-overtime-pay-pakistan",
    title: "Is Overtime Pay Taxable in Pakistan? (2026-27)",
    description:
      "Yes — overtime pay is salary income and is taxed at your marginal slab rate. See a worked example with real 2026-27 FBR slab math.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Overtime pay is taxable in Pakistan. There is no separate overtime tax rate and no overtime exemption for salaried employees — every rupee of overtime is treated as salary income and taxed at your marginal slab rate, meaning only the slab the extra income lands in applies to that extra income.",
          "If your payslip shows a noticeably higher tax deduction in a heavy-overtime month, that is exactly how it is supposed to work: your employer recalculates withholding on the higher projected annual income.",
        ],
      },
      {
        heading: "How Overtime Is Taxed Under FBR Rules",
        paragraphs: [
          "Overtime is simply added to your annual salary income. If your basic salary already puts you in the 11% slab, an extra month of overtime is taxed at 11%. If overtime pushes your annual total across a slab boundary, the portion above the boundary is taxed at the higher rate — the rest stays at the lower rate. Nothing already earned is re-taxed at a higher rate.",
          "This applies to all overtime — double-pay holiday work, weekend shifts, and late sittings. It is all salary income under Section 12 of the Income Tax Ordinance, 2001.",
        ],
      },
      {
        heading: "Worked Example: Overtime Month Tax",
        paragraphs: [
          "Take a monthly salary of Rs 100,000 (Rs 1,200,000 per year). Normal annual tax: 1% of Rs 600,000 = Rs 6,000 per year, or Rs 500 deducted each month.",
          "Add Rs 20,000 of overtime in one month. Projected annual income rises to Rs 1,440,000. New annual tax: Rs 6,000 + 11% of Rs 240,000 = Rs 32,400 per year. The extra tax caused by that overtime is Rs 26,400 across the year — and the Rs 20,000 overtime payment itself costs about Rs 2,200 in tax (11%), leaving Rs 17,800 in your pocket.",
          "Try your own figures in our [free salary tax calculator](/) — enter your salary with and without the overtime and compare the two results.",
        ],
      },
      {
        heading: "Check Your Payslip",
        paragraphs: [
          "Your payslip should show overtime as a separate gross-pay line and a higher income-tax deduction that month. A quick sanity check: divide the extra tax by the extra overtime — the result should be close to your marginal slab rate (1%, 11%, 20%, etc.). If the employer withheld a much higher flat rate on the overtime alone, flag it with payroll.",
          "Also watch for overtime pushing your projected annual income across a slab boundary (for example past Rs 1.2 million, Rs 2.2 million). The higher rate then applies only to the slice above the boundary, not to your whole salary.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is overtime pay taxable in Pakistan?",
        a: "Yes. Overtime pay is treated as salary income and taxed at your marginal slab rate. There is no separate overtime tax rate or overtime exemption for salaried employees.",
      },
      {
        q: "Does overtime get taxed at a higher rate than my salary?",
        a: "Overtime is taxed at the marginal rate — the slab rate for the income band your total annual salary (including overtime) falls in. It does not attract a penalty rate; it just stacks on top of your regular salary.",
      },
      {
        q: "Can overtime push me into a higher tax slab?",
        a: "Yes, if the extra income crosses a slab boundary. But only the amount above the boundary is taxed at the higher rate — your existing salary is not re-taxed.",
      },
      {
        q: "Is holiday double-pay also taxable?",
        a: "Yes. Double-pay for holidays, weekends, and night shifts is all overtime and fully taxable as salary income.",
      },
      {
        q: "My employer didn't deduct tax on overtime. Do I still owe it?",
        a: "Yes. You declare your total salary income (including overtime) in your annual return, and any shortfall in withholding is payable with the return. See how employers are supposed to handle this in our guide on [how employers deduct salary tax](/how-employers-deduct-salary-tax-pakistan).",
      },
    ],
  },
  {
    slug: "tax-on-gratuity-pakistan",
    title: "Is Gratuity Taxable in Pakistan? Gratuity Tax Rules Explained",
    description:
      "Gratuity from an approved fund is generally exempt in Pakistan, with caps for approved schemes and unapproved funds. Understand the rules before you retire.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Gratuity — the lump sum paid when you leave or retire after years of service — gets special treatment under Pakistan's Income Tax Ordinance. The short answer: gratuity is often fully exempt, but the exact exemption depends on who paid it and whether the fund or scheme is approved by the tax authorities.",
          "The figures below reflect the long-standing Second Schedule rules for salary income. Tax rules and exemption clauses do change, so confirm the current position with FBR or a tax consultant before relying on them for a retirement decision.",
        ],
      },
      {
        heading: "Gratuity Tax Rules by Fund Type",
        paragraphs: [
          "Gratuity received by government employees is fully exempt from income tax. Gratuity paid out of an approved gratuity fund — one approved by the Commissioner Inland Revenue — is also fully exempt.",
          "For gratuity received under an approved gratuity scheme (approved by the Board/FBR), the exemption is capped at Rs 300,000. For gratuity from an unapproved fund or scheme, the exemption is the lower of Rs 75,000 or 50% of the amount received.",
          "The unapproved-fund exemption does not apply at all if the payment was not received in Pakistan, was paid to a company director who is not a regular employee, was paid to a non-resident, or if you have already received gratuity from the same or another employer before.",
        ],
      },
      {
        heading: "Worked Example: Taxable Portion of Gratuity",
        paragraphs: [
          "Say you retire with a gratuity of Rs 500,000 from your employer's approved scheme (not a fully approved fund). The exempt portion is Rs 300,000, so Rs 200,000 is taxable. That Rs 200,000 is added to your salary income for the year and taxed at your marginal slab rate — for example at 20% if your annual income (gratuity included) falls between Rs 2.2 million and Rs 3.2 million, the extra tax is Rs 40,000.",
          "If the same Rs 500,000 came from a fully approved gratuity fund, the taxable portion would be zero. The difference between fund types is why it pays to ask your HR which category your employer's gratuity arrangement falls into. You can model the impact in our [free salary tax calculator](/) by adding the taxable portion to your annual salary.",
        ],
      },
      {
        heading: "Check Your Settlement Statement",
        paragraphs: [
          "When you receive your final settlement, ask your employer for the written breakup showing the gratuity amount, the fund or scheme type, and the exempt vs taxable split. If your employer deducted tax on the full gratuity amount even though an exemption applies, the excess can be adjusted in your annual return — but it is far easier to get the withholding right up front.",
          "Keep the gratuity payment advice and the fund approval reference with your tax records for the year; FBR may ask for them during verification.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is gratuity taxable in Pakistan?",
        a: "It depends on the source. Gratuity from the government or an approved gratuity fund is fully exempt. Approved schemes are exempt up to Rs 300,000, and unapproved funds up to the lower of Rs 75,000 or 50% of the amount received. Anything above the exemption is taxed as salary income at your marginal slab rate.",
      },
      {
        q: "Is government employee gratuity taxable?",
        a: "No. Gratuity received by government employees is fully exempt from income tax under the Second Schedule rules.",
      },
      {
        q: "What is the difference between an approved gratuity fund and an approved scheme?",
        a: "An approved gratuity fund is approved by the Commissioner Inland Revenue and its payouts are fully exempt. An approved scheme (approved by the Board) carries a Rs 300,000 exemption cap on the payout.",
      },
      {
        q: "I received gratuity from an unapproved fund. How much is exempt?",
        a: "The lower of Rs 75,000 or 50% of the amount received. The exemption is lost entirely if the payment was not received in Pakistan, went to a non-resident or a non-regular director, or if you had already received gratuity from the same or another employer.",
      },
      {
        q: "Where do I declare gratuity in my tax return?",
        a: "The taxable portion is included in your salary income. The exempt portion is claimed under exempt income in IRIS. Confirm the current clause references with FBR or your tax consultant, as schedules are updated periodically.",
      },
    ],
  },
  {
    slug: "tax-on-leave-encashment-pakistan",
    title: "Is Leave Encashment Taxable in Pakistan?",
    description:
      "Yes — leave encashment is taxed as salary income at your marginal slab rate in 2026-27. See a worked example with real FBR slab math.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Leave encashment — the cash you receive for unused annual leave, usually at resignation or retirement — is taxable in Pakistan. The short answer: there is no separate tax or exemption for leave encashment. It is treated as ordinary salary income and taxed at your marginal slab rate.",
          "Many employees are surprised by this because leave encashment feels like a benefit, not a salary. For tax purposes, though, it is simply more salary paid in the year you receive it.",
        ],
      },
      {
        heading: "How Leave Encashment Is Taxed",
        paragraphs: [
          "The encashment amount is added to your annual salary income. If your regular salary already puts you in the 20% slab, the encashment is taxed at 20%. If the encashment pushes you across a slab boundary, only the slice above the boundary takes the higher rate.",
          "Your employer should withhold tax on it in the month it is paid, based on your projected annual income including the encashment. At filing time, the figure is reconciled against the actual slabs, as explained in our guide on [how employers deduct salary tax](/how-employers-deduct-salary-tax-pakistan).",
        ],
      },
      {
        heading: "Worked Example: Leave Encashment at Resignation",
        paragraphs: [
          "Take a monthly salary of Rs 200,000 (Rs 2,400,000 per year). Annual tax: Rs 116,000 + 20% of Rs 200,000 = Rs 156,000. You can verify this on our page on [tax on a Rs 200,000 salary](/tax-on-200000-salary-pakistan).",
          "Now add 30 days of encashed leave worth Rs 200,000. Annual income becomes Rs 2,600,000. New annual tax: Rs 116,000 + 20% of Rs 400,000 = Rs 196,000. The encashment itself costs Rs 40,000 in tax — exactly 20% of Rs 200,000, your marginal rate. You keep Rs 160,000 of the encashment.",
          "Model it yourself in our [free salary tax calculator](/) by comparing 2,400,000 and 2,600,000 as annual salary.",
        ],
      },
      {
        heading: "Check Your Final Settlement",
        paragraphs: [
          "In your final settlement, leave encashment should appear as a separate gross-pay line with its own withholding. A quick check: the extra tax divided by the encashment amount should roughly equal your marginal slab rate. If the employer applied a flat high rate (some payrolls default to 30%), ask for a recalculation on the projected-annual basis.",
          "If you receive encashment after leaving (for example paid in the next month), it is still taxable in the tax year you receive it, under FBR's receipt-basis rule for salary.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is leave encashment taxable in Pakistan?",
        a: "Yes. Leave encashment is treated as salary income and taxed at your marginal slab rate. There is no separate exemption for encashed leave.",
      },
      {
        q: "Is leave encashment taxed at a higher rate than salary?",
        a: "No. It is taxed at the same marginal rate as the rest of your salary — the slab rate for the income band your total annual income falls into.",
      },
      {
        q: "I received leave encashment after resigning. Is it still taxable?",
        a: "Yes. FBR taxes salary on receipt basis, so the encashment is taxable in the tax year you receive it, even after your employment ended.",
      },
      {
        q: "My employer deducted 30% on leave encashment. Is that correct?",
        a: "Probably not. Encashment should be taxed at your marginal slab rate based on projected annual income, not a flat 30%. Ask payroll to recalculate; any excess is adjustable in your annual return.",
      },
      {
        q: "Does leave encashment count toward the tax-free Rs 600,000 limit?",
        a: "Yes — it is part of your total annual salary income, so it counts toward the Rs 600,000 tax-free threshold and every slab above it.",
      },
    ],
  },
  {
    slug: "provident-fund-tax-pakistan",
    title: "Provident Fund Tax in Pakistan: Contributions & Withdrawals",
    description:
      "Provident fund contributions and withdrawals have special tax treatment in Pakistan. Learn how recognized funds work and what to confirm with FBR.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "A provident fund is the monthly retirement savings where you and your employer both contribute a percentage of your basic salary. The tax treatment is generous — but only if the fund is a recognized (approved) provident fund. The short answer: in a recognized fund, contributions accumulate and are paid out without the tax treatment that ordinary salary gets, while unrecognized funds enjoy far fewer benefits.",
          "Because the exact conditions sit in the Income Tax Ordinance's approval rules, treat this as the framework and confirm the current specifics with FBR or a tax consultant for your situation.",
        ],
      },
      {
        heading: "How Contributions Are Treated",
        paragraphs: [
          "Typically both you and your employer contribute a fixed percentage of basic salary — commonly around 8 to 10%. For the fund to qualify as recognized, the employer's contribution must not exceed the employee's own contribution; that matching-contribution condition is one of the key approval requirements under the Ordinance.",
          "Your own contribution comes out of your already-taxed salary, so it does not reduce your taxable salary the way a pension-fund tax credit might. The real tax benefit of a recognized provident fund is on the growth and the payout side: profits accumulate inside the fund without annual tax erosion, and the accumulated balance at withdrawal is generally treated as exempt when the fund is approved.",
        ],
      },
      {
        heading: "Withdrawals: Recognized vs Unrecognized Funds",
        paragraphs: [
          "When you retire or leave and receive your full provident fund balance — your contributions, the employer's contributions, and the accumulated profit — a recognized provident fund payout is generally exempt from income tax. That is the single biggest reason to check whether your employer's fund is actually recognized.",
          "Unrecognized provident funds do not get these benefits: the employer's contributions and the profit may be treated as taxable when received. If you work for a smaller employer with an informal in-house fund, ask HR whether the fund is approved by the Commissioner Inland Revenue before assuming the payout is tax-free.",
        ],
      },
      {
        heading: "Check Your Payslip and Fund Documents",
        paragraphs: [
          "Your payslip should show your monthly PF deduction as a fixed percentage of basic salary, and your employer's matching contribution should appear in your annual salary certificate. Ask HR for the fund's approval status in writing — recognized, unapproved, or government PF (which has its own fully exempt treatment).",
          "When you withdraw, keep the payout statement and the fund's approval reference. In IRIS you report the salary figures from your employer's certificate, and an approved fund's exempt payout goes under exempt income — confirm the current schedule clause with FBR or your consultant, since return forms are updated periodically. Your projected tax with any taxable PF component can be modeled in our [free salary tax calculator](/) against the [FBR tax slabs 2026-27](/tax-slabs).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is provident fund taxable in Pakistan?",
        a: "The payout from a recognized (approved) provident fund is generally exempt from income tax. Unrecognized funds do not enjoy the same exemption — employer contributions and profit can be taxable on receipt.",
      },
      {
        q: "Does my PF contribution reduce my taxable salary?",
        a: "No. Your own PF contribution is deducted from your salary after tax — it does not lower your taxable salary. The tax advantage of a recognized PF is tax-free accumulation and an exempt payout.",
      },
      {
        q: "Is there a limit on the employer's PF contribution?",
        a: "For fund approval, the employer's contribution must not exceed the employee's own contribution. If it does, the fund can lose its recognized status and its tax benefits.",
      },
      {
        q: "Is the interest/profit earned on my PF taxable?",
        a: "In a recognized provident fund, the accumulated profit is part of the generally exempt payout. In an unrecognized fund, the profit may be taxable — confirm with FBR or a tax consultant.",
      },
      {
        q: "Can I withdraw my PF before retirement?",
        a: "Many funds allow partial or full withdrawal on leaving the employer, and some allow interest-free loans against the balance. The tax treatment of an early withdrawal depends on the fund's status — check the fund rules and confirm with a consultant.",
      },
    ],
  },
  {
    slug: "pension-tax-pakistan",
    title: "Is Pension Taxable in Pakistan? Pension & EOBI Tax Rules",
    description:
      "Pension tax rules in Pakistan changed under the Finance Act 2025. Learn the Rs 10 million threshold, the age-70 rule, and how EOBI pensions are treated.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Pension used to be straightforwardly exempt for most retirees in Pakistan. That changed: under the Finance Act 2025, high pensions can now be taxed, while ordinary pensions — including EOBI pensions — remain effectively untouched. The short answer: most pensioners pay no tax, but if your annual pension exceeds Rs 10 million and you are under 70, a 5% tax applies.",
          "Because this is a recent and politically contested change, confirm the current position with FBR or a tax consultant before acting on it.",
        ],
      },
      {
        heading: "The New Pension Tax Rule: Rs 10 Million and Age 70",
        paragraphs: [
          "Under the Finance Act 2025 changes to the Income Tax Ordinance, pension received from a former employer is subject to a 5% tax where the annual pension exceeds Rs 10 million and the recipient is below 70 years of age. Below the Rs 10 million threshold — where the overwhelming majority of pensions sit — no such tax applies.",
          "Pensions from the Armed Forces and Federal or Provincial Governments have their own long-standing exemption treatment. The historic rule that only the higher of multiple pensions was exempt, and that rejoining the same employer ended the exemption, sat under the old clause 12 framework that the Finance Act 2025 omitted — another reason to verify your exact position rather than relying on older guidance.",
        ],
      },
      {
        heading: "EOBI and Commuted Pensions",
        paragraphs: [
          "EOBI (Employees' Old-Age Benefits Institution) pensions are modest monthly amounts — far below the Rs 10 million annual threshold — so EOBI pensioners are not affected by the new 5% rule. EOBI pensions were increased by 15% from January 2025, but even so they remain small, fixed monthly payments.",
          "Commutation of pension — taking part of your pension as an upfront lump sum at retirement — has its own exemption history, and proposals to tax commutation have been debated in recent budgets. Because the treatment of commuted pension has shifted with the 2025 changes, get written confirmation of your commutation's tax position rather than assuming the old full exemption still applies.",
        ],
      },
      {
        heading: "What Pensioners Should Do",
        paragraphs: [
          "Even with zero tax due, pensioners should keep filing their annual return to stay on FBR's Active Taxpayer List — non-filers face higher withholding rates on banking and other transactions regardless of income. Declare the pension income and claim the applicable exemption or threshold treatment in IRIS.",
          "If you received an FBR notice about pension tax, do not pay it blindly: check whether the Rs 10 million threshold and the under-70 condition actually apply to you, and have the notice reviewed by a tax consultant. Keep your pension payment orders and any commutation documents with your tax records.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is pension taxable in Pakistan in 2026-27?",
        a: "For most pensioners, no. Under the Finance Act 2025, a 5% tax applies to pension from a former employer only where the annual pension exceeds Rs 10 million and the recipient is under 70. Ordinary pensions below that threshold are not taxed under this rule.",
      },
      {
        q: "Is EOBI pension taxable?",
        a: "No, in practice. EOBI pensions are small monthly amounts far below the Rs 10 million annual threshold, so the new pension tax rule does not touch them.",
      },
      {
        q: "Is commutation of pension taxable in Pakistan?",
        a: "The treatment of commuted pension has been debated and changed with recent finance acts. Do not assume the old full exemption — confirm the current position for your commutation with FBR or a tax consultant.",
      },
      {
        q: "Does the pension tax apply if I am over 70?",
        a: "No. The 5% tax on pensions above Rs 10 million a year applies only where the recipient is below 70 years of age.",
      },
      {
        q: "Should I still file a tax return if my pension is exempt?",
        a: "Yes. Filing keeps you on the Active Taxpayer List, which avoids higher withholding rates on bank transactions and other deductions that hit non-filers.",
      },
      {
        q: "I received two pensions. How are they taxed?",
        a: "Under the older rules, the exemption applied to the higher pension and the second was taxable. The 2025 changes altered this framework, so verify the current treatment with a tax consultant for your case.",
      },
    ],
  },
  {
    slug: "house-rent-allowance-tax-pakistan",
    title: "Is House Rent Allowance Taxable in Pakistan? (2026-27)",
    description:
      "Yes — house rent allowance is part of taxable salary in Pakistan with no separate exemption. See the exact 2026-27 slab math for an HRA example.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "House rent allowance is fully taxable in Pakistan. The short answer: unlike some countries, Pakistan's tax law gives no separate exemption or deduction for HRA. It is simply part of your salary, added to your annual income and taxed at your marginal slab rate — the same as your basic pay.",
          "This catches many employees off guard, because HRA can be a large line on the payslip. If your HRA is Rs 30,000 a month, that is Rs 360,000 a year of taxable income, and it can push you across a slab boundary.",
        ],
      },
      {
        heading: "How HRA Is Taxed Under FBR Rules",
        paragraphs: [
          "Your employer adds HRA to your gross salary before calculating withholding tax. There is no HRA-specific deduction to claim in your return — the entire amount counts toward the Rs 600,000 tax-free limit and every slab above it.",
          "Note the difference from a related benefit: if your employer provides actual rent-free accommodation instead of an allowance, it is taxed as a perquisite valued under the Ordinance's valuation rules — but a cash HRA on your payslip is just salary, taxed rupee for rupee.",
        ],
      },
      {
        heading: "Worked Example: HRA Tax Calculation",
        paragraphs: [
          "Take a monthly salary of Rs 150,000 plus Rs 30,000 house rent allowance — Rs 2,160,000 per year in total. Annual tax: Rs 6,000 + 11% of Rs 960,000 = Rs 111,600 per year, or Rs 9,300 deducted each month.",
          "Without the HRA, the same Rs 150,000 salary would be Rs 1,800,000 a year with tax of Rs 72,000. So the HRA costs an extra Rs 39,600 in tax — 11% of the Rs 360,000 annual allowance, your marginal rate. Compare the two figures yourself in our [free salary tax calculator](/) against the [FBR tax slabs 2026-27](/tax-slabs).",
        ],
      },
      {
        heading: "Check Your Payslip",
        paragraphs: [
          "Your payslip should show HRA as part of gross pay, and income-tax withholding computed on the total including HRA. If your employer is withholding tax only on basic pay and ignoring the HRA, the shortfall is yours to pay when you file your annual return — under-deduction by the employer does not reduce your tax liability.",
          "Some employees ask whether they can claim rent receipts as a deduction. In Pakistan's salary tax rules, you cannot — rent you pay is a personal expense, not a deductible one. Keep the HRA line in mind when negotiating: a higher HRA and a higher basic pay are taxed identically.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is house rent allowance taxable in Pakistan?",
        a: "Yes. HRA is part of taxable salary with no separate exemption. The full amount is added to your annual income and taxed at your marginal slab rate.",
      },
      {
        q: "Can I claim a deduction for rent paid against my HRA?",
        a: "No. Pakistan's salary tax rules do not allow a deduction for rent paid, and rent receipts do not reduce the tax on your HRA.",
      },
      {
        q: "Is HRA taxed differently from basic salary?",
        a: "No. HRA and basic salary are taxed identically — both are salary income under Section 12 of the Income Tax Ordinance.",
      },
      {
        q: "Can HRA push me into a higher tax slab?",
        a: "Yes. HRA counts toward your total annual income, so a large allowance can push you across a slab boundary. Only the amount above the boundary is taxed at the higher rate.",
      },
      {
        q: "What if my employer gives me a house instead of HRA?",
        a: "Rent-free accommodation is taxed as a perquisite, valued under the Ordinance's rules (broadly, the higher of market rent or 45% of basic salary) — a different mechanism from cash HRA, but still taxable.",
      },
    ],
  },
  {
    slug: "conveyance-allowance-tax-pakistan",
    title: "Is Conveyance Allowance Taxable in Pakistan?",
    description:
      "Yes — conveyance allowance is fully taxable as salary income in Pakistan. See how it adds to your annual tax with 2026-27 slab math.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Conveyance allowance — the monthly amount for commuting and travel — is fully taxable in Pakistan. The short answer: it is treated as ordinary salary income. There is no exemption for it, even if you genuinely spend the whole amount on fuel or fares.",
          "Employees often assume a travel-related allowance must be tax-free. Under FBR's salary rules, it is not: allowances granted to meet office expenses are a different category, and a fixed monthly conveyance allowance on your payslip is simply salary.",
        ],
      },
      {
        heading: "How Conveyance Allowance Is Taxed",
        paragraphs: [
          "The allowance is added to your gross salary, and withholding tax is calculated on the combined figure at your marginal slab rate. A Rs 15,000 monthly conveyance allowance is Rs 180,000 a year of extra taxable income.",
          "One nuance worth knowing: a genuine reimbursement of actual official travel expenses (with bills, under your terms of employment) is treated differently from a fixed monthly allowance. But the standard fixed conveyance allowance most employees receive is fully taxable — the salary taxation notes are explicit that conveyance allowance given to an employee is fully taxable.",
        ],
      },
      {
        heading: "Worked Example: Conveyance Allowance Tax",
        paragraphs: [
          "Take a monthly salary of Rs 100,000 plus Rs 15,000 conveyance allowance — Rs 1,380,000 per year. Annual tax: Rs 6,000 + 11% of Rs 180,000 = Rs 25,800 per year, or Rs 2,150 per month.",
          "Without the allowance, tax on Rs 1,200,000 would be just Rs 6,000 a year. So the Rs 180,000 annual allowance adds Rs 19,800 in tax — 11% of it, the marginal rate. Verify with your own numbers in our [free salary tax calculator](/) and the [FBR tax slabs 2026-27](/tax-slabs) table.",
        ],
      },
      {
        heading: "Check Your Payslip",
        paragraphs: [
          "Look for the conveyance allowance as a separate gross-pay line, with income tax withheld on the total. If your employer withholds tax only on basic pay and leaves allowances out, you will owe the difference in your annual return — and interest-free underpayment across the year is still your liability at filing.",
          "If you also receive a company car for mixed personal and official use, note that the car is a separate taxable perquisite on top of the allowance — the allowance itself does not become exempt just because you have a car.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is conveyance allowance taxable in Pakistan?",
        a: "Yes. Conveyance allowance is fully taxable as salary income. It is added to your annual salary and taxed at your marginal slab rate.",
      },
      {
        q: "Is there any exemption for conveyance allowance?",
        a: "No fixed monthly conveyance allowance is exempt. Only genuine reimbursements of actual official travel expenses, under your terms of employment, are treated differently.",
      },
      {
        q: "I spend my whole conveyance allowance on fuel. Is it still taxed?",
        a: "Yes. What you spend it on does not matter — the allowance is taxable salary income regardless of how you use it.",
      },
      {
        q: "I get both a car and conveyance allowance. Are both taxed?",
        a: "Yes. The allowance is taxable salary, and the company car is a separate taxable perquisite valued under the Ordinance's rules. They do not cancel each other out.",
      },
    ],
  },
  {
    slug: "medical-allowance-tax-pakistan",
    title: "Is Medical Allowance Taxable in Pakistan?",
    description:
      "Medical allowance has a limited 10%-of-basic exemption in Pakistan — with a catch. Learn when it is taxable and when it is not.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Medical allowance sits in a grey zone that confuses many employees. The short answer: a medical allowance is exempt only up to 10% of your basic salary — and that exemption disappears entirely if you also get a medical facility or medical-expense reimbursement from your employer. Anything above the 10% cap is taxable salary.",
          "These are the long-standing salary rules under the Income Tax Ordinance. They can be amended, so confirm the current position with FBR or a tax consultant if a large amount is at stake.",
        ],
      },
      {
        heading: "The 10% Rule and Its Catch",
        paragraphs: [
          "Under the salary taxation rules, a medical allowance is exempt up to 10% of basic salary. If your basic salary is Rs 100,000 a month and your medical allowance is Rs 10,000, the full allowance is within the 10% cap and exempt.",
          "But if your basic is Rs 100,000 and the allowance is Rs 15,000 a month, only Rs 10,000 is exempt and Rs 5,000 a month (Rs 60,000 a year) is taxable salary. And the bigger catch: if your employer also provides a medical facility or reimburses your medical expenses under your terms of employment, the medical allowance becomes fully taxable — the 10% exemption does not apply at all in that combination.",
        ],
      },
      {
        heading: "Worked Example: Medical Allowance Above the Cap",
        paragraphs: [
          "Take basic salary of Rs 80,000 a month with a Rs 10,000 monthly medical allowance and no medical facility. The exempt portion is 10% of basic = Rs 8,000 a month (Rs 96,000 a year). The remaining Rs 2,000 a month (Rs 24,000 a year) is taxable salary.",
          "Add that to an annual salary of Rs 960,000: total taxable income becomes Rs 984,000. Tax: 1% of Rs 384,000 = Rs 3,840 per year. Without the taxable slice, the tax would have been 1% of Rs 360,000 = Rs 3,600 — so the excess allowance costs Rs 240 a year in tax here. Small at this income level, but the same logic scales: at higher incomes the excess is taxed at 11%, 20% or more. Run your own figures in our [free salary tax calculator](/) with the [FBR tax slabs 2026-27](/tax-slabs).",
        ],
      },
      {
        heading: "Check Your Payslip",
        paragraphs: [
          "First check whether your employer provides any medical facility or reimbursement alongside the allowance — panel hospitals, medical reimbursement claims, health insurance paid by the employer. If yes, your entire medical allowance is taxable and should be in the withholding base.",
          "If there is no facility or reimbursement, check that only the amount above 10% of basic salary is being taxed. Many payrolls simply tax the whole allowance, which over-deducts — you can claim the 10% exemption in your annual return, but it is cleaner to get payroll to apply it monthly. Note that 'basic salary' here means your basic pay component, not total gross salary.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is medical allowance taxable in Pakistan?",
        a: "Partly. It is exempt up to 10% of basic salary. Any amount above that is taxable as salary income — and the whole allowance is taxable if you also receive a medical facility or medical reimbursement from your employer.",
      },
      {
        q: "What counts as basic salary for the 10% medical exemption?",
        a: "Your basic pay component as shown on your salary structure — not your total gross salary including allowances.",
      },
      {
        q: "My company reimburses my medical bills and also pays medical allowance. Is the allowance exempt?",
        a: "No. When medical allowance is paid in addition to a medical facility or reimbursement under your terms of employment, the allowance is fully taxable.",
      },
      {
        q: "Is medical reimbursement itself taxable?",
        a: "Reimbursement of medical expenses under your terms of employment (with proper documentation) is treated as exempt under the salary rules; a fixed medical allowance alongside it is not.",
      },
      {
        q: "My employer taxes my full medical allowance. Can I fix it?",
        a: "Yes — if you have no medical facility or reimbursement and the allowance is within 10% of basic, claim the exemption in your annual IRIS return, or ask payroll to apply the 10% rule in monthly withholding.",
      },
    ],
  },
  {
    slug: "tax-on-perquisites-pakistan",
    title: "Tax on Perquisites in Pakistan: Car, Housing & Benefits",
    description:
      "Perquisites like company cars and free housing are taxed in Pakistan at values set by the Ordinance — not at what they cost you. Learn how each is valued.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Perquisites — the non-cash benefits on top of your salary, like a company car, free housing, a driver, or an interest-free loan — are taxable in Pakistan. The short answer: FBR does not tax them at their market cost to you. Instead, the Income Tax Ordinance assigns each perquisite a fixed valuation formula, and that notional value is added to your salary income and taxed at your marginal slab rate.",
          "The valuation figures below are the long-standing rules under Section 13 of the Ordinance. Confirm the current rules with FBR or a tax consultant, as valuation rules can be amended.",
        ],
      },
      {
        heading: "How the Main Perquisites Are Valued",
        paragraphs: [
          "Company car: if provided for both personal and official use, 5% of the vehicle's cost to the employer (or 5% of fair market value for a leased car) is added to your annual salary. For personal use only, it is 10%. A car used strictly for office work adds nothing. Fuel and maintenance are covered inside that notional figure — but a driver paid by the employer is a separate, fully taxable perquisite, and any conveyance allowance is fully taxable too.",
          "Free accommodation: the taxable value is the higher of the property's fair market rent and 45% of your basic salary — so it can never be less than 45% of basic. Interest-free or cheap employer loans above Rs 1,000,000 add the difference between the actual interest and a 10% benchmark rate. Any other perquisite is valued at its fair market value minus whatever you paid the employer for it.",
        ],
      },
      {
        heading: "Worked Example: Company Car in Your Salary",
        paragraphs: [
          "Take a basic salary of Rs 150,000 a month (Rs 1,800,000 a year) plus a company car for mixed personal and official use that cost your employer Rs 2,000,000. Perquisite value: 5% of Rs 2,000,000 = Rs 100,000 added to your annual salary income, making it Rs 1,900,000.",
          "Tax without the car: Rs 6,000 + 11% of Rs 600,000 = Rs 72,000. Tax with the car: Rs 6,000 + 11% of Rs 700,000 = Rs 83,000. The car costs you Rs 11,000 a year in extra tax — 11% of the Rs 100,000 notional value, your marginal rate. Check your own package in our [free salary tax calculator](/) by adding the perquisite value to your annual salary, using the [FBR tax slabs 2026-27](/tax-slabs).",
        ],
      },
      {
        heading: "Worked Example: Free Housing",
        paragraphs: [
          "Same Rs 150,000 monthly basic salary (Rs 1,800,000 a year), now with a rent-free company house. The taxable value is the higher of the market rent and 45% of basic salary: 45% of Rs 1,800,000 = Rs 810,000. Even if the house would rent for Rs 500,000, the Rs 810,000 figure applies.",
          "Taxable salary income becomes Rs 2,610,000. Tax: Rs 116,000 + 20% of Rs 410,000 = Rs 198,000 a year. Compare that with Rs 72,000 without the house — the accommodation adds Rs 126,000 in tax. This is why employees sometimes prefer a cash house rent allowance they can spend freely: both are taxable, but the 45%-of-basic floor can make free housing the more expensive option tax-wise.",
        ],
      },
      {
        heading: "Check Your Payslip",
        paragraphs: [
          "Perquisites rarely appear as cash on your payslip, so look at your annual salary certificate instead — the notional values should be listed there and included in the withholding base. Common payroll errors: the car valued at 10% when it is genuinely mixed-use (should be 5%), or accommodation valued at actual rent when 45% of basic is higher.",
          "If you make any payment to your employer for the benefit — for example contributing toward the car — that payment is deducted from the notional value before tax. Keep records of such payments.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are perquisites taxable in Pakistan?",
        a: "Yes. Perquisites are valued under Section 13 of the Income Tax Ordinance, added to your salary income, and taxed at your marginal slab rate.",
      },
      {
        q: "How is a company car taxed in Pakistan?",
        a: "For mixed personal and official use, 5% of the car's cost to the employer (or fair market value if leased) is added to annual salary. For personal use only, it is 10%. Pure office use adds nothing.",
      },
      {
        q: "How is free accommodation taxed?",
        a: "At the higher of the property's fair market rent and 45% of your basic salary. The 45%-of-basic figure is a floor — the taxable value cannot be lower than that.",
      },
      {
        q: "Is a driver provided by my employer taxable?",
        a: "Yes. A driver's salary paid by the employer is a separate perquisite and fully taxable, on top of the car valuation.",
      },
      {
        q: "Are interest-free loans from my employer taxable?",
        a: "For loans above Rs 1,000,000, the difference between the interest you actually pay and a 10% benchmark rate is added to your taxable salary.",
      },
      {
        q: "What if I pay my employer something for the benefit?",
        a: "Any amount you pay the employer for the perquisite is deducted from its notional value before the remainder is added to your salary income.",
      },
    ],
  },
  {
    slug: "tax-on-bonus-pakistan",
    title: "Is Bonus Taxed Separately in Pakistan? Bonus Tax Rules (2026-27)",
    description:
      "No — a bonus is added to your annual salary and taxed at your marginal slab rate in Pakistan. See the exact math and estimate yours with our bonus calculator.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "A bonus is not taxed under any special bonus rate in Pakistan. The short answer: your bonus is added to your annual salary income and taxed at your marginal slab rate — the rate for the income band your total salary falls into. Only the bonus amount itself takes that rate; your existing salary is not re-taxed.",
          "This article explains the rules. To get your exact number in seconds, use our [bonus calculator](/bonus-calculator).",
        ],
      },
      {
        heading: "How Bonus Tax Works Under FBR Rules",
        paragraphs: [
          "Annual bonus, Eid bonus, performance bonus, 13th-month pay — all of it is salary income under Section 12 of the Income Tax Ordinance. Your employer withholds tax on it in the month it is paid, based on your projected annual income including the bonus.",
          "The marginal-rate principle is what makes bonuses feel heavily taxed: if your salary already sits in the 20% slab, a Rs 200,000 bonus costs Rs 40,000 in tax. That is not a penalty rate — it is simply your normal slab rate applied to extra income. When you file your annual return, the bonus is reconciled with everything else against the [FBR tax slabs 2026-27](/tax-slabs), and any over-withholding is adjusted.",
        ],
      },
      {
        heading: "Worked Example: Rs 200,000 Salary + Rs 200,000 Bonus",
        paragraphs: [
          "Monthly salary Rs 200,000 = Rs 2,400,000 per year. Annual tax: Rs 116,000 + 20% of Rs 200,000 = Rs 156,000 (see our full breakdown on [tax on a Rs 200,000 salary](/tax-on-200000-salary-pakistan)).",
          "Add a Rs 200,000 annual bonus: total income Rs 2,600,000. New tax: Rs 116,000 + 20% of Rs 400,000 = Rs 196,000. The bonus itself is taxed at Rs 40,000 — exactly 20% of Rs 200,000, your marginal rate. You keep Rs 160,000 of the bonus.",
          "Get your precise figure — including what changes if the bonus pushes you into a higher slab — in our [bonus calculator](/bonus-calculator), or sanity-check the slabs in our [free salary tax calculator](/).",
        ],
      },
      {
        heading: "Check Your Payslip",
        paragraphs: [
          "In the bonus month, expect a visibly higher tax deduction — your employer annualizes the bonus into the year's projection. A quick check: the extra tax divided by the bonus should be close to your marginal rate (11%, 20%, 25%, and so on).",
          "Watch for two common errors. First, some payrolls withhold a flat high rate on bonuses regardless of your actual slab — flag it if the math does not match your marginal rate. Second, if the bonus pushes your annual total across a slab boundary (say past Rs 2.2 million or Rs 3.2 million), only the slice above the boundary takes the higher rate. Your return at year-end settles any difference, so keep the bonus-month payslip for your records.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is bonus taxed separately in Pakistan?",
        a: "No. There is no separate bonus tax. A bonus is added to your annual salary income and taxed at your marginal slab rate.",
      },
      {
        q: "How much tax is deducted on a Rs 200,000 bonus?",
        a: "It depends on your salary. On a Rs 200,000 monthly salary (marginal rate 20%), a Rs 200,000 bonus costs about Rs 40,000 in tax. Estimate yours precisely with our [bonus calculator](/bonus-calculator).",
      },
      {
        q: "Why is the tax on my bonus month so high?",
        a: "Your employer projects your annual income including the bonus and adjusts withholding for the remaining months. The bigger deduction is timing — it reconciles in your annual return.",
      },
      {
        q: "Can a bonus push me into a higher tax slab?",
        a: "Yes. The bonus counts toward your total annual income. If it crosses a slab boundary, only the amount above the boundary is taxed at the higher rate.",
      },
      {
        q: "Is Eid bonus or 13th-month salary taxed differently?",
        a: "No. All bonuses — annual, Eid, performance, or 13th-month pay — are salary income taxed the same way at your marginal rate.",
      },
    ],
  },
  {
    slug: "tax-on-severance-pay-pakistan",
    title: "Is Severance Pay Taxable in Pakistan?",
    description:
      "Yes — severance pay is taxed as salary income in Pakistan at your marginal slab rate. See a worked example of how a severance package is taxed.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Severance pay — the lump sum paid when your employment ends, whether through layoff, mutual separation, or a voluntary separation scheme — is taxable in Pakistan. The short answer: it is treated as salary income (technically 'profit in lieu of salary') and taxed at your marginal slab rate, just like a bonus or arrears.",
          "Because severance is often several months of salary paid at once, it can push your annual income through multiple slabs in a single year, which is why the tax on it can look steep.",
        ],
      },
      {
        heading: "How Severance Is Taxed Under FBR Rules",
        paragraphs: [
          "The full severance amount is added to your salary income for the tax year you receive it. Pakistan's progressive slabs then apply: the portion of severance falling in each band is taxed at that band's rate. Nothing about your regular salary is re-taxed — but the severance stacks on top, so its later slices can hit 25%, 29%, or higher marginal rates.",
          "This same treatment covers golden-handshake and voluntary separation payments. The Ordinance historically allowed such termination payments to be taxed at the average rate of the last three years at the taxpayer's option — if you receive a large package, ask a tax consultant whether that option is still available and beneficial for you, since it can materially change the bill.",
        ],
      },
      {
        heading: "Worked Example: 12-Month Severance Package",
        paragraphs: [
          "Monthly salary Rs 200,000 = Rs 2,400,000 per year. Normal annual tax: Rs 116,000 + 20% of Rs 200,000 = Rs 156,000.",
          "Now add a severance package of 12 months' salary: Rs 2,400,000. Total annual income: Rs 4,800,000. Tax: Rs 541,000 + 29% of Rs 700,000 = Rs 744,000. The severance itself therefore costs Rs 588,000 in tax — about 24.5% of the package — because it pushed your income through the 25% and 29% slabs.",
          "Had the same package been paid across two tax years (where possible and genuine), the slab impact could differ. Structure matters with large one-off payments, so model scenarios in our [free salary tax calculator](/) against the [FBR tax slabs 2026-27](/tax-slabs) before agreeing to a payout schedule.",
        ],
      },
      {
        heading: "Check Your Final Settlement",
        paragraphs: [
          "Your final settlement should show the severance as a separate line with withholding tax deducted. Because it is a one-off payment, employers sometimes withhold at a flat estimated rate — compare the deduction against the slab math for your total annual income including the severance.",
          "Keep the separation agreement and the full-and-final settlement statement with your tax records. In your IRIS return, the severance is part of salary income for the year; any excess withholding is adjustable. And if you start a new job in the same tax year, remember that both incomes combine — see our guide on [how employers deduct salary tax](/how-employers-deduct-salary-tax-pakistan) for how the two withholdings interact.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is severance pay taxable in Pakistan?",
        a: "Yes. Severance pay is treated as salary income (profit in lieu of salary) and taxed at your marginal slab rate in the year you receive it.",
      },
      {
        q: "Why is the tax on severance so high?",
        a: "A lump sum of several months' salary stacks on top of your annual income and can push you through multiple higher slabs (25%, 29%, 32%) in one year. Each slice is taxed at its own slab rate — the progressive system, not a penalty.",
      },
      {
        q: "Is a golden handshake taxed the same as severance?",
        a: "Yes — golden-handshake and voluntary separation payments get the same salary-income treatment. Historically the Ordinance allowed taxing such payments at the average rate of the last three years at the taxpayer's option; ask a consultant whether that option applies to you.",
      },
      {
        q: "My severance was paid after I left. Which tax year is it taxed in?",
        a: "The tax year you receive it. FBR taxes salary on receipt basis, so a package paid in July falls in the new tax year even if your employment ended in June.",
      },
      {
        q: "Can I reduce tax by splitting severance across two years?",
        a: "Timing can change which slabs the payment falls into, but the structure must be genuine and agreed with the employer. Model both scenarios with a tax consultant before deciding.",
      },
    ],
  },
  {
    slug: "second-job-tax-pakistan",
    title: "Tax on Second Job / Dual Employment Salary in Pakistan",
    description:
      "Both salaries combine into one annual income in Pakistan — and the second employer's withholding often under-deducts. Learn how to settle the difference.",
    category: "Salary Components",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Working two jobs does not give you two tax-free limits. The short answer: FBR taxes you as one person on your combined annual income from all employers. Each employer withholds tax as if they were your only employer — and that almost always means too little is deducted overall, leaving you with extra tax to pay when you file your return.",
          "This is the single most common surprise for dual-employment earners: two 'correct-looking' payslips that together underpay your tax.",
        ],
      },
      {
        heading: "How Dual Salary Income Is Taxed",
        paragraphs: [
          "Add both salaries together for the full tax year, then apply the [FBR tax slabs 2026-27](/tax-slabs) once to the combined figure. That is your real tax liability. What each employer deducted is just advance withholding credited against it.",
          "Why does withholding fall short? Each employer applies the Rs 600,000 tax-free threshold and the low early slabs to the salary they pay you. But you only get one tax-free threshold and one set of low slabs in reality. The second salary effectively stacks on top of the first, so most of it should be taxed at your higher marginal rate — which the second employer never applied.",
        ],
      },
      {
        heading: "Worked Example: The Withholding Shortfall",
        paragraphs: [
          "Main job: Rs 120,000 a month (Rs 1,440,000 a year). Second job: Rs 60,000 a month (Rs 720,000 a year). Combined: Rs 2,160,000.",
          "Real tax on Rs 2,160,000: Rs 6,000 + 11% of Rs 960,000 = Rs 111,600 per year. What the employers deduct: the main employer withholds on Rs 1,440,000 → Rs 6,000 + 11% of Rs 240,000 = Rs 32,400. The second employer withholds on Rs 720,000 → 1% of Rs 120,000 = Rs 1,200. Total withheld: Rs 33,600.",
          "Shortfall: Rs 111,600 − Rs 33,600 = Rs 78,000 you owe with your annual return. Neither employer did anything wrong — each one followed the rules for the salary it pays. The gap is structural, and it is yours to settle. Estimate your own combined figure in our [free salary tax calculator](/).",
        ],
      },
      {
        heading: "How to Handle It",
        paragraphs: [
          "First, do not ignore it: the shortfall is payable with your IRIS return, and chronic under-withholding can draw FBR's attention. Second, you can fix it proactively — tell your main (higher-paying) employer about the second income and ask them to withhold at a higher rate, or make advance tax payments yourself during the year so there is no lump sum due at filing.",
          "Keep both employers' annual salary certificates. In your return you declare salary income from each employer separately, and IRIS computes tax on the combined total, crediting both withholdings. For the mechanics of employer withholding, see our guide on [how employers deduct salary tax](/how-employers-deduct-salary-tax-pakistan).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I get two tax-free limits with two jobs?",
        a: "No. You get one Rs 600,000 tax-free threshold and one set of slabs per person per year, applied to your combined income from all employers.",
      },
      {
        q: "Why do I owe extra tax when both employers deducted correctly?",
        a: "Each employer withholds as if it were your only employer, applying the tax-free limit and low slabs to its salary alone. Combined, your income sits in higher slabs — the difference is under-withheld and payable in your return.",
      },
      {
        q: "Should I tell my employer about my second job?",
        a: "It is the cleanest fix: your main employer can then withhold at the correct higher rate, avoiding a lump-sum payment at filing time. Alternatively, pay advance tax yourself during the year.",
      },
      {
        q: "How do I declare two salaries in my tax return?",
        a: "Declare salary income from each employer separately in IRIS. The system taxes the combined total and credits the withholding from both salary certificates.",
      },
      {
        q: "Does freelance income alongside a job work the same way?",
        a: "Broadly yes — all your income combines for the year, though freelance/business income has its own heads and rules. Keep separate records and consider a consultant if the mix is complex.",
      },
    ],
  },
];
