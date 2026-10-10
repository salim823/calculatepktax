import type { BlogPost } from "./existing";

export const BATCH_04_POSTS: BlogPost[] = [
  {
    slug: "how-to-check-salary-tax-deduction-pakistan",
    title: "How to Check Your Salary Tax Deduction in Pakistan (2026-27)",
    description:
      "Verify whether your employer's salary tax deduction is correct for 2026-27. Worked example for Rs 150,000/month plus red flags that signal a wrong deduction.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Your employer is legally required to deduct the right amount of income tax from your salary every month. But payroll mistakes happen — wrong tax year tables, flat percentage estimates, or deductions that ignore your actual taxable income. Checking your payslip takes five minutes and can save you thousands.",
          "The short version: convert your monthly salary to an annual figure, apply FBR's 2026-27 slab table, and divide the result by 12. That number should match the income tax line on your payslip.",
        ],
      },
      {
        heading: "Step 1: Find the Tax Line on Your Payslip",
        paragraphs: [
          "Look for a line labelled income tax, WHT, TDS, or withholding tax on your payslip. That is the only line you are checking here — EOBI and provident fund are separate deductions and are not income tax.",
        ],
        list: [
          "Gross salary: your total monthly pay before any deduction",
          "Income tax / withholding tax: the FBR deduction you are verifying",
          "EOBI: a separate social security contribution, not income tax",
          "Provident fund: your own savings scheme, not a tax",
        ],
      },
      {
        heading: "Step 2: Work Out What Your Deduction Should Be",
        paragraphs: [
          "Multiply your monthly salary by 12 to get your annual taxable income, then apply the 2026-27 slabs. The simplest way is our [free salary tax calculator](/), which does the slab math and shows your expected monthly deduction.",
          "You can also check the full [FBR tax slabs 2026-27](/tax-slabs) table to see exactly which slab your salary falls in.",
        ],
      },
      {
        heading: "Step 3: Compare — Worked Example (Rs 150,000/Month)",
        paragraphs: [
          "Annual income: Rs 150,000 × 12 = Rs 1,800,000. This falls in the 1.2M–2.2M slab: Rs 6,000 fixed + 11% of the amount above Rs 1,200,000. Taxable excess: Rs 600,000. Tax: Rs 6,000 + (11% × Rs 600,000) = Rs 6,000 + Rs 66,000 = Rs 72,000 per year.",
          "Monthly deduction: Rs 72,000 ÷ 12 = Rs 6,000 per month. If your payslip shows Rs 6,000 (give or take rounding), your deduction is correct. If it shows Rs 10,000 or Rs 2,000, something is wrong.",
        ],
      },
      {
        heading: "Red Flags: Signs Your Deduction Is Wrong",
        paragraphs: [
          "The most common payroll errors are easy to spot once you know what to look for. If any of these apply, raise it with your HR or payroll department in writing.",
        ],
        list: [
          "Deduction equals a flat round percentage of salary — FBR slabs are progressive, not flat",
          "You joined mid-year but tax is calculated as if you worked all 12 months",
          "Your salary changed this year but the deduction never changed",
          "You earn Rs 50,000/month or less but income tax is still being deducted — that is fully tax-free in 2026-27",
          "Payslip deduction differs from your salary certificate issued by the same employer",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "Many employees compare the wrong lines — EOBI or provident fund are not tax, so a payslip is fine even if those look unfamiliar. Another mistake is checking once at joining and never again; deductions should be rechecked whenever your salary changes or the new tax year's slabs take effect in July.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I calculate my expected monthly salary tax?",
        a: "Multiply monthly salary by 12, apply FBR's 2026-27 slabs to the annual figure, then divide by 12. Our free salary tax calculator does this instantly.",
      },
      {
        q: "My payslip deduction does not match my calculation. What should I do?",
        a: "First re-check using the official slab table. Then raise it in writing with your payroll department or HR, showing your working. If they do not correct it, see our guide on fixing wrong salary tax deductions.",
      },
      {
        q: "Is the Rs 6,000/month deduction on Rs 150,000 salary correct?",
        a: "Yes. Rs 150,000/month is Rs 1.8M/year, which attracts Rs 72,000 annual tax under the 2026-27 slabs — exactly Rs 6,000 per month.",
      },
      {
        q: "Should I check my deduction every month?",
        a: "Once a year is usually enough — check in July when the new tax year's slabs begin, and again after any salary change.",
      },
      {
        q: "My employer deducts more tax than the calculator shows. Is that allowed?",
        a: "Over-deduction is a payroll error, not a right. Excess tax deducted can be adjusted in your annual return, but it is better to get payroll fixed so your take-home pay is correct all year.",
      },
    ],
  },
  {
    slug: "salary-tax-certificate-pakistan",
    title: "Salary Tax Certificate in Pakistan: What It Is and How to Get It",
    description:
      "Your employer's annual withholding certificate shows gross salary and tax deducted under Section 149. Learn why banks and visa offices ask for it and how to get one from HR.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "A salary tax certificate (also called a salary withholding certificate) is a document your employer issues at the end of the financial year. It states your total annual salary and the exact income tax your employer deducted and deposited with FBR under Section 149 of the Income Tax Ordinance, 2001.",
          "Think of it as the official receipt for a full year of salary tax deductions. It is the single most important document for your annual tax return — and it is required by banks and embassies far more often than people expect.",
        ],
      },
      {
        heading: "What the Certificate Shows",
        paragraphs: [
          "A standard certificate lists your name and CNIC, the tax year, your total gross salary for the year, and the total tax deducted month by month or as a yearly total. It is signed or stamped by the employer's authorised person.",
          "The certificate typically carries a reference number linking your deduction to FBR's records — this is what lets you claim the withheld amount as credit in your return.",
        ],
      },
      {
        heading: "Why Banks and Visa Applications Ask for It",
        paragraphs: [
          "Banks ask for salary tax certificates when you apply for loans, credit cards, or account upgrades, because it is independent proof of your declared income — harder to fake than a self-declared figure.",
          "Embassies and visa offices request it for the same reason: it proves your income is declared and taxed in Pakistan. Keep every year's certificate in a file — visa applications often ask for two or three years of income proof.",
        ],
        list: [
          "Bank loans and credit card applications",
          "Visa applications and immigration files",
          "Your annual income tax return filing",
          "Proof of filer-status income if FBR asks questions",
        ],
      },
      {
        heading: "How to Get It From Your HR Department",
        paragraphs: [
          "Ask your HR or payroll department in writing — an email is fine — requesting your salary withholding certificate for the completed tax year. Most employers issue them between July and September, once the financial year closes.",
          "Check the figures against your 12 monthly payslips before you rely on it. The annual tax total on the certificate should equal the sum of the monthly income tax lines. If the numbers do not add up, get a corrected certificate before filing your return.",
        ],
      },
      {
        heading: "Checklist: Before You Accept the Certificate",
        paragraphs: [
          "A quick review now prevents return-filing headaches later.",
        ],
        list: [
          "Name and CNIC match your official records exactly",
          "Tax year is correct (the year just ended, not the new one)",
          "Annual tax total equals the sum of your monthly payslip deductions",
          "Employer's stamp or authorised signature is present",
          "You have a scanned copy saved — you will need it every year",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "The biggest mistake is never asking for the certificate at all — some employees only realise they need it when a bank or embassy demands it urgently. Another is accepting a certificate without checking the tax-year label; a TY 2025 certificate cannot be used for your TY 2026 return.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is my employer legally required to give me a salary tax certificate?",
        a: "Employers must deduct tax under Section 149 and are expected to provide withholding documentation on request. If your HR refuses, put the request in writing and escalate.",
      },
      {
        q: "When should I ask for my salary tax certificate?",
        a: "After the financial year ends on June 30. Most employers issue them between July and September, in time for return filing.",
      },
      {
        q: "Can I file my return without the salary certificate?",
        a: "You can declare figures from your payslips, but the certificate is the authoritative record and banks and FBR treat it as the standard proof. Always get one.",
      },
      {
        q: "What if the certificate figures do not match my payslips?",
        a: "Ask payroll for a corrected certificate before filing your return. Filing with wrong figures can trigger an FBR notice.",
      },
      {
        q: "Does the certificate also cover bonuses and allowances?",
        a: "It should cover all salary income your employer paid you during the tax year — base salary, allowances, bonuses — and the total tax deducted on it.",
      },
    ],
  },
  {
    slug: "how-to-get-ntn-salary-pakistan",
    title: "How to Get an NTN for Salaried Individuals in Pakistan",
    description:
      "Get your NTN through FBR's IRIS portal in about 15 minutes. Step-by-step registration guide for salaried employees, plus why your employer asks for it.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "An NTN (National Tax Number) is your tax identity with FBR. Good news for salaried individuals: for individuals, your NTN is simply your 13-digit CNIC number — registration on FBR's IRIS portal activates it as a tax number.",
          "Registration is free and usually takes 10–15 minutes online, provided your CNIC and mobile number match NADRA's records.",
        ],
      },
      {
        heading: "Step 1: Before You Start",
        paragraphs: [
          "Gather the basics: your original CNIC, a mobile number registered in your name with NADRA, a personal email address, and your employer's details (salaried individuals list their employer in the form).",
          "The single most common reason registration fails is a mismatch between your mobile number and NADRA's records. If your number is not linked to your CNIC, update it at a NADRA e-Sahulat centre first.",
        ],
      },
      {
        heading: "Step 2: Register on the IRIS Portal",
        paragraphs: [
          "Go to iris.fbr.gov.pk — always confirm you are on the genuine FBR domain. Click Registration for Unregistered Person and enter your 13-digit CNIC without dashes.",
          "FBR sends verification codes to your NADRA-linked mobile number and email. Enter both, then complete the registration form (Form 181) with your personal details, address, employer details, and source of income. Submit — your NTN is generated automatically, and login credentials are sent by SMS and email.",
        ],
      },
      {
        heading: "Step 3: Get Your Registration Certificate",
        paragraphs: [
          "Log in to IRIS with your CNIC and new password, then go to the Registration menu and select View Registration. You can download and print your NTN registration certificate as a PDF — keep a copy for your employer and your records.",
        ],
      },
      {
        heading: "Why Does Your Employer Ask for Your NTN?",
        paragraphs: [
          "Employers ask for your NTN/CNIC because it links your salary tax deductions to your personal tax record in FBR's system. Without it, the tax they withhold under Section 149 cannot be properly credited to you.",
          "It also matters for your Active Taxpayer List (ATL) status. Registered taxpayers who file their returns on time are listed on the ATL, which lowers withholding tax rates on banking transactions, property purchases, and vehicle registration.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "Confusing registration with filer status is the classic error — having an NTN only gives you a tax identity. You become an active filer only after you submit your income tax return. Another mistake is resubmitting repeatedly after a failed OTP attempt; this can flag your CNIC for manual review. Fix the NADRA mobile-number mismatch first, then try once more.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the NTN different from my CNIC?",
        a: "For individuals, no — your NTN is your 13-digit CNIC. Registration on IRIS simply activates it as your tax number.",
      },
      {
        q: "Is NTN registration free?",
        a: "Yes. FBR registration on the IRIS portal is completely free.",
      },
      {
        q: "How long does NTN registration take?",
        a: "Usually 10–15 minutes online if your CNIC and mobile number match NADRA's records. Fix any mobile-number mismatch at a NADRA e-Sahulat centre first.",
      },
      {
        q: "Do I need an NTN if my employer already deducts my tax?",
        a: "Yes — your employer needs it to credit your deductions to you, and you need registration to file your annual return and stay on the Active Taxpayer List.",
      },
      {
        q: "What if I never received the verification code?",
        a: "Confirm your mobile number is NADRA-verified and linked to your CNIC, wait a few minutes, and try again. If it still fails, update your records at a NADRA e-Sahulat centre rather than resubmitting repeatedly.",
      },
      {
        q: "Does getting an NTN make me a filer?",
        a: "No. Registration gives you a tax identity; you become an active filer only after you file your income tax return each year.",
      },
    ],
  },
  {
    slug: "how-to-file-income-tax-return-salaried-pakistan",
    title: "How to File Income Tax Return for Salaried Persons in Pakistan",
    description:
      "A plain-language walkthrough of filing your salaried income tax return on FBR's IRIS portal: login, declaration, salary entries, withholding credits, and submission.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "7 min read",
    sections: [
      {
        paragraphs: [
          "If you earn above Rs 600,000 per year — or hold an NTN, own a car, or meet any of FBR's other filing conditions — you are legally required to file an income tax return every year. Your employer already deducts your tax monthly, but the return is your own declaration of income and assets to FBR.",
          "The whole process happens online on the IRIS portal (iris.fbr.gov.pk). A straightforward salaried return usually takes under an hour once your documents are ready.",
        ],
      },
      {
        heading: "Step 1: Gather Your Documents",
        paragraphs: [
          "Collect these before logging in — hunting for paperwork mid-session is what makes filing painful.",
        ],
        list: [
          "Salary tax certificate from your employer (gross salary + tax deducted)",
          "Bank statements for the full tax year (1 July – 30 June)",
          "Withholding tax receipts — bank profit, mobile tax, utility taxes",
          "Details of assets and liabilities for the wealth statement",
          "Last year's filed return, if you filed before",
        ],
      },
      {
        heading: "Step 2: Log In and Open the Declaration",
        paragraphs: [
          "Log in to IRIS with your CNIC (individuals) or NTN (companies/AOPs) and your password, complete the captcha, and open the Declaration section. Choose the income tax return for the correct tax year — and double-check the year, because filing under the wrong tax year is one of the most common beginner errors.",
        ],
      },
      {
        heading: "Step 3: Enter Salary Income and Withholding Credits",
        paragraphs: [
          "Enter your total salary income for the year from your salary certificate, and list your withholding tax credits — the tax your employer already deducted. If a deduction is not showing in FBR's records yet, you can enter it manually using the reference number from your deduction certificate.",
          "IRIS calculates your tax automatically from the declared income. If the calculated tax is lower than what was withheld, the difference shows as a refund or carry-forward — see our guide on adjusting withholding tax in your return.",
        ],
      },
      {
        heading: "Step 4: Complete the Wealth Statement and Submit",
        paragraphs: [
          "The wealth statement declares your assets (property, vehicles, bank balances, investments) and liabilities as of June 30. IRIS flags inconsistencies between this year's and last year's statements, so reconcile carefully.",
          "Save as a draft frequently — IRIS sessions time out. When everything checks out, submit and save the acknowledgment receipt with your IRIS reference number. That receipt is your proof of filing.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "The three errors that haunt salaried filers: selecting the wrong tax year, forgetting withholding credits (which means paying tax you already paid), and leaving the wealth statement inconsistent with the previous year. Also, never assume IRIS has pre-filled everything correctly — verify each figure against your own documents.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is the income tax return due for salaried individuals?",
        a: "The statutory deadline is 30 September each year. FBR sometimes announces extensions, so confirm the current status on the IRIS portal or in our deadline guide.",
      },
      {
        q: "My employer already deducts my tax — why must I file a return?",
        a: "Withholding is tax collection; the return is your legal declaration of income, tax paid, and assets. They are separate obligations under the Income Tax Ordinance.",
      },
      {
        q: "I made a mistake after submitting. Can I fix it?",
        a: "Yes — you can file a revised declaration through IRIS for the same tax year, generally allowed until the assessment is closed, typically within two years of the original filing.",
      },
      {
        q: "How long does filing take for a salaried person?",
        a: "With documents ready, usually 30–60 minutes. IRIS sessions time out after about 15 minutes of inactivity, so save drafts often.",
      },
      {
        q: "Do I need to file if my salary is below Rs 600,000?",
        a: "If you have no other filing conditions (NTN, car, property), you are not required to — but many people file voluntarily to stay on the Active Taxpayer List and get lower withholding rates on other transactions.",
      },
      {
        q: "What is the wealth statement?",
        a: "A declaration of your assets and liabilities as of June 30, filed alongside your income tax return. First-time filers find it the trickiest section — declare everything accurately and reconcile with the previous year's statement.",
      },
    ],
  },
  {
    slug: "adjust-withholding-tax-in-return-pakistan",
    title: "How to Adjust Withholding Tax in Your Income Tax Return",
    description:
      "Excess withholding tax on salary, bank profit, or mobile bills can be claimed in your annual return. Learn how adjustment works, plus refund vs carry-forward.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Tax gets withheld from your income at many points during the year: your employer deducts it from your salary, banks deduct it on profit, and even your mobile balance top-ups carry withholding tax. Your annual return is where all of this gets reconciled.",
          "If the total tax withheld from you during the year is more than the tax you actually owe, you do not lose that money — you claim it back in your return as adjustable withholding tax.",
        ],
      },
      {
        heading: "What Counts as Adjustable Withholding Tax",
        paragraphs: [
          "The main categories for a salaried person are salary withholding (under Section 149 — this is usually the biggest one), withholding on bank profit, tax deducted on mobile phone bills and internet, and tax on cash withdrawals in some cases.",
          "Each of these appears in your return as a tax credit against your total liability. IRIS subtracts your total credits from the tax calculated on your declared income.",
        ],
      },
      {
        heading: "Step-by-Step: Claiming the Adjustment",
        paragraphs: [
          "Gather every withholding certificate or receipt — your salary tax certificate from your employer, bank profit certificates, and any other deduction receipts. These prove the amounts you claim.",
          "In IRIS, enter each credit in the withholding tax section of your declaration, using the reference numbers from your certificates. IRIS then shows whether your credits exceed your liability — if they do, the excess becomes your refund or carry-forward amount.",
        ],
      },
      {
        heading: "Refund vs Carry-Forward: Which to Choose",
        paragraphs: [
          "A refund means FBR pays the excess back to you. Carry-forward means the excess is adjusted against your tax liability next year. In practice, refunds from FBR can take a long time to arrive, so many salaried filers choose carry-forward to reduce next year's tax instead.",
          "There is no universally right answer — if you need the cash, claim the refund; if you would rather avoid waiting, carry it forward. See our guide on income tax refunds for salaried persons for the full picture.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "The costliest mistake is simply forgetting to enter your withholding credits — you end up paying tax you already paid. Another is claiming credits without the supporting certificates; if FBR questions your return, you need the paperwork. Keep every certificate filed for at least a few years.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does adjustable withholding tax mean?",
        a: "It means tax already withheld from you during the year — on salary, bank profit, bills — is credited against your final tax liability in your annual return instead of being lost.",
      },
      {
        q: "Can I claim mobile phone tax in my return?",
        a: "Yes. Withholding tax on mobile bills and top-ups is adjustable — keep your receipts or statements as proof.",
      },
      {
        q: "Is it better to take a refund or carry the amount forward?",
        a: "Refunds can take a long time to be processed, so carry-forward is often more practical. Choose the refund if you need the cash and can wait.",
      },
      {
        q: "What if I forgot to claim withholding credits in last year's return?",
        a: "You can file a revised declaration for that tax year through IRIS, generally allowed until the assessment is closed — typically within two years of filing.",
      },
      {
        q: "My employer over-deducted tax this month. Should I wait for the return to adjust it?",
        a: "No — get payroll fixed now so your monthly take-home pay is right. The return adjustment is the backup, not the plan.",
      },
    ],
  },
  {
    slug: "tax-refund-salaried-pakistan",
    title: "Income Tax Refund for Salaried Persons in Pakistan: How It Works",
    description:
      "When does a salary tax refund arise, how do you claim it through your return, and how long does it take? A realistic guide with cautious expectations.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "A tax refund arises when the total tax withheld from you during the year exceeds the tax you actually owe. For salaried persons, this usually happens when your employer over-deducted — or when you had other withholding (bank profit, mobile tax) on top of correct salary deductions.",
          "The honest headline: you are entitled to the refund, but FBR refunds can be slow. Go in with realistic expectations and a backup plan.",
        ],
      },
      {
        heading: "When Does a Refund Arise?",
        paragraphs: [
          "The classic case is over-deduction by payroll — your employer applied the wrong slab table or calculated on projected rather than actual income. Refunds also arise when your income dropped mid-year but deductions were based on your old salary, or when multiple withholding streams (salary + bank profit + mobile tax) collectively exceed your liability.",
          "First confirm a refund actually exists: calculate your true annual tax with our [free salary tax calculator](/) and compare it with the total tax shown on your salary certificate. Only the difference is refundable.",
        ],
      },
      {
        heading: "How to Claim: Through Your Annual Return",
        paragraphs: [
          "There is no separate refund form to hunt down — you claim the refund inside your income tax return on IRIS. Enter all your withholding credits; IRIS computes the excess of credits over liability and treats it as your refund claim.",
          "Make sure your bank account details in IRIS are correct and verified — FBR processes refunds to the bank account on record. Wrong or outdated account details are one of the most common reasons refunds stall.",
        ],
      },
      {
        heading: "Realistic Timelines (Set Your Expectations)",
        paragraphs: [
          "FBR does not publish a guaranteed refund turnaround, and salaried refund claims can take many months — sometimes longer than a year. This is why many filers choose carry-forward instead: the excess reduces next year's tax without waiting for FBR to send money.",
          "Treat the refund as money owed to you eventually, not money arriving next month. If the amount is small, carry-forward is usually the pragmatic choice.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "Claiming a refund without the certificates to back it up is the biggest error — if FBR scrutinises your return, unsubstantiated claims get rejected. Another is filing the return late and still expecting prompt processing; get the return in on time, with complete withholding entries, and correct bank details.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if I am owed a tax refund?",
        a: "Compare your total annual withholding (from your salary certificate and other receipts) with your true tax liability from the 2026-27 slabs. If withholding is higher, the difference is your refund.",
      },
      {
        q: "Do I file a separate application for the refund?",
        a: "No. The refund is claimed inside your annual income tax return on IRIS — your withholding credits create the refund automatically when they exceed your liability.",
      },
      {
        q: "How long does an FBR refund take?",
        a: "There is no published guaranteed timeline, and salaried refunds can take many months or longer. Set expectations cautiously and consider carry-forward as the practical alternative.",
      },
      {
        q: "What if my refund never arrives?",
        a: "Check your IRIS dashboard for the claim status and confirm your bank details are correct. For large amounts, a tax consultant can help follow up with the department.",
      },
      {
        q: "Can I get a refund for over-deducted salary tax from a previous year?",
        a: "Yes — file or revise the return for that tax year and claim the excess there. A revised declaration is generally allowed until the assessment is closed, typically within two years.",
      },
    ],
  },
  {
    slug: "income-tax-return-deadline-pakistan",
    title: "Income Tax Return Deadline in Pakistan for Salaried Individuals",
    description:
      "The statutory return deadline for salaried individuals is 30 September — with FBR extensions announced some years. Plus: what missing it costs you, including ATL status.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "The statutory deadline for salaried individuals to file their income tax return is 30 September following the end of the tax year. For Tax Year 2026 (1 July 2025 – 30 June 2026), that means 30 September 2026.",
          "FBR has extended this deadline in some past years through an official notification — but extensions are never guaranteed. Plan for 30 September, and treat any announced extension as a bonus.",
        ],
      },
      {
        heading: "Key Dates at a Glance",
        paragraphs: [
          "The tax year runs 1 July to 30 June. The IRIS filing window typically opens on 1 July, giving you three months to file. Filing early — in July or August — avoids the late-September portal congestion that crashes sessions and creates errors.",
        ],
        list: [
          "Tax year: 1 July to 30 June each year",
          "Filing window opens: 1 July",
          "Statutory deadline (individuals, salaried, AOPs): 30 September",
          "Companies (June year-end): 31 December",
          "Extensions: possible via FBR notification, never guaranteed",
        ],
      },
      {
        heading: "What Happens If You Miss the Deadline",
        paragraphs: [
          "Late filing triggers penalties under the Income Tax Ordinance — including a daily penalty subject to a minimum amount — plus a default surcharge on any unpaid tax. The financial cost grows with every day of delay, so filing late is always cheaper than not filing at all.",
          "The practical cost most salaried people feel is losing Active Taxpayer List (ATL) status. Non-filers pay substantially higher withholding tax on banking transactions, property purchases, and vehicle registration — often double the filer rate.",
        ],
      },
      {
        heading: "How to Get Back on the ATL",
        paragraphs: [
          "File the belated return and pay any penalty due. FBR allows late filers to restore their ATL status by paying a separate surcharge — once processed, your name reappears on the Active Taxpayer List, usually within about a week of the return being processed.",
          "The Commissioner can reduce or waive penalties in some cases, but this is discretionary, not automatic. Do not count on it.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "Waiting for an announced extension before starting your return is the classic trap — extensions come late or not at all, and the portal is slowest exactly when everyone rushes in. Another mistake is assuming zero tax payable means no filing needed; if you meet any filing condition (NTN, car, property), you must file regardless of whether tax is due.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the income tax return deadline for salaried persons in Pakistan?",
        a: "30 September following the end of the tax year. For Tax Year 2026, that is 30 September 2026, unless FBR announces an official extension.",
      },
      {
        q: "Does FBR extend the deadline every year?",
        a: "No. FBR has extended it in some past years via official notification, but extensions are not guaranteed. Always plan for 30 September.",
      },
      {
        q: "What is the penalty for filing late?",
        a: "A daily penalty subject to a minimum amount under Section 182 of the Ordinance, plus default surcharge on unpaid tax. File as soon as possible — the cost grows daily.",
      },
      {
        q: "What happens to my ATL status if I miss the deadline?",
        a: "You lose Active Taxpayer List status, which means much higher withholding tax rates on banking, property, and vehicle transactions until you file and pay the restoration surcharge.",
      },
      {
        q: "Is it better to file late or not file at all?",
        a: "Always file, even late. Late filing stops the penalty clock and restores your ATL path; not filing leaves penalties and non-filer rates compounding.",
      },
      {
        q: "Do I need to file if no tax is payable?",
        a: "Yes, if you meet any filing condition — holding an NTN, owning a car or property above specified thresholds, or having filed previously. Filing keeps you on the ATL.",
      },
    ],
  },
  {
    slug: "iris-registration-salaried-pakistan",
    title: "IRIS Registration for Salaried Persons in Pakistan (FBR Portal Guide)",
    description:
      "What FBR's IRIS portal is, what you need before registering, and the general registration flow for salaried individuals — in plain language.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "IRIS is FBR's online tax portal — the single website where Pakistan's taxpayers register, file returns, pay taxes, download certificates, and check their filer status. If you pay salary tax in Pakistan, IRIS is where your tax life happens.",
          "Registration is free, online, and usually takes 10–15 minutes. This guide walks you through what IRIS is and the general flow, written for salaried individuals.",
        ],
      },
      {
        heading: "What You Can Do on IRIS",
        paragraphs: [
          "Your IRIS dashboard is the control panel for your tax affairs. From one login you can file and revise your income tax return, view your withholding tax credits, check your Active Taxpayer List status, download your registration certificate, and respond to FBR notices.",
        ],
      },
      {
        heading: "What You Need Before Registering",
        paragraphs: [
          "Keep these ready so the process goes smoothly in one sitting.",
        ],
        list: [
          "Original CNIC — your 13-digit number, entered without dashes",
          "Mobile number registered in your name with NADRA (receives the verification code)",
          "Personal email address (receives a second verification code)",
          "Employer details — name and NTN if you have it",
          "Bank account details, used for verification and future refunds",
        ],
      },
      {
        heading: "The Registration Flow (General Steps)",
        paragraphs: [
          "Open the official portal at iris.fbr.gov.pk — verify the domain carefully, since look-alike sites exist. Choose the option for new registration (labelled for unregistered persons) and enter your CNIC.",
          "FBR sends verification codes to your NADRA-linked mobile number and email — enter both. Then complete the registration form with your personal details, address, employer information, and income sources. Submit, and your NTN is generated automatically — for individuals, your NTN is your CNIC. Login credentials arrive by SMS and email.",
        ],
      },
      {
        heading: "After Registration: First Things to Do",
        paragraphs: [
          "Log in with your CNIC and the new password, download your registration certificate from the Registration menu, and confirm your bank account details are recorded correctly — FBR needs them for any future refund.",
          "Then file your first income tax return. Remember: registration alone does not make you a filer — filing the annual return does. See our step-by-step return filing guide for salaried persons.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "The number-one failure point is a mobile number that does not match NADRA's records — fix this at a NADRA e-Sahulat centre before attempting registration. Do not resubmit repeatedly after failed attempts; multiple failed tries can flag your CNIC for manual review. Use Chrome or Firefox, and beware of fake IRIS sites — always check the domain.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is FBR IRIS?",
        a: "IRIS is FBR's official online tax portal at iris.fbr.gov.pk, where taxpayers register, file returns, view withholding credits, and check ATL status.",
      },
      {
        q: "Is IRIS registration free?",
        a: "Yes — registration on the IRIS portal is completely free.",
      },
      {
        q: "What is my IRIS username?",
        a: "For individuals, your username is your 13-digit CNIC (without dashes). Companies and AOPs use their NTN.",
      },
      {
        q: "I forgot my IRIS password. What do I do?",
        a: "Use the Forgot Password option on the login page — FBR resets it via a code sent to your registered mobile number. You can also call the FBR helpline at 051-111-772-772.",
      },
      {
        q: "The verification code never arrives. What now?",
        a: "Confirm your mobile number is NADRA-verified and linked to your CNIC, wait a few minutes, and retry. If it still fails, update your records at a NADRA e-Sahulat centre.",
      },
      {
        q: "Does IRIS registration alone make me a filer?",
        a: "No. Registration gives you a tax identity; you become an active filer only after submitting your annual income tax return.",
      },
    ],
  },
  {
    slug: "employer-tax-obligations-penalties-pakistan",
    title: "Employer Tax Obligations in Pakistan: Section 149 Duties & Penalties",
    description:
      "What the law requires your employer to do with salary tax — correct monthly withholding, timely deposit with FBR — and the penalties and surcharge for failure.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Under Section 149 of the Income Tax Ordinance, 2001, every employer in Pakistan has a legal duty: deduct the correct income tax from each employee's salary every month and deposit it with FBR. This is not optional, and it is not a favour — it is the law.",
          "This guide explains the employer's side of salary taxation: what they must do, and what the Ordinance says happens when they do not. (If you want the employee's view — how to read your own deduction — see our guide on how employers deduct salary tax.)",
        ],
      },
      {
        heading: "Duty 1: Deduct the Correct Amount Every Month",
        paragraphs: [
          "The employer must estimate each employee's annual taxable salary, apply FBR's slab rates for the current tax year, and divide the result into monthly deductions. When salaries change mid-year, the deduction must be recalculated — a static deduction after a raise or cut is a compliance failure.",
          "Common employer errors include using last year's slab table, applying a flat percentage instead of progressive slabs, and deducting tax from employees earning below the Rs 600,000 annual tax-free limit.",
        ],
      },
      {
        heading: "Duty 2: Deposit the Tax With FBR on Time",
        paragraphs: [
          "Deducting is only half the duty — the employer must deposit the withheld tax with FBR within the prescribed timelines and file the required withholding statements. The tax deducted from your salary is government money held in trust; keeping it is a serious default.",
          "Employers must also issue withholding certificates to employees so each person's deductions can be credited to them in their annual return.",
        ],
      },
      {
        heading: "What Happens When Employers Default",
        paragraphs: [
          "The Ordinance provides for penalties and a default surcharge on employers that fail to deduct or deposit salary tax. An employer that deducts tax but does not deposit it faces the harshest consequences — the law treats undeclared withheld amounts severely.",
          "In practice, FBR can also hold the employer personally liable for the tax that should have been deducted, on top of penalties and surcharge. Employees are protected in one important way: tax your employer deducted (and can prove deducting) is credited to you even if the employer failed to deposit it — which is why your salary certificate and payslips matter.",
        ],
      },
      {
        heading: "What Employees Should Do",
        paragraphs: [
          "Keep every payslip and your annual salary tax certificate — they are your proof that tax was deducted from you. If you suspect your employer is deducting but not depositing, you can verify the withholding appears in your IRIS records.",
          "Raise concerns in writing with HR or payroll first. For persistent non-compliance, employees can report the matter to FBR — and our guide on fixing wrong salary deductions walks through the escalation steps.",
        ],
      },
      {
        heading: "Common Mistakes (Employers)",
        paragraphs: [
          "Small businesses most often trip on three things: never updating deductions after salary revisions, missing deposit deadlines, and failing to issue certificates to employees. Each of these is independently punishable — and employees should not quietly absorb the consequences of any of them.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Section 149 of the Income Tax Ordinance?",
        a: "It is the provision that requires every employer to deduct income tax from employees' salaries at the time of payment and deposit it with FBR.",
      },
      {
        q: "What penalties can an employer face for not deducting salary tax?",
        a: "The Ordinance provides for penalties and a default surcharge on the tax not deducted or not deposited, and FBR can hold the employer personally liable for the missing tax. Confirm the current figures with FBR or a tax professional.",
      },
      {
        q: "My employer deducts tax but I doubt they deposit it. Am I liable?",
        a: "No — tax deducted from your salary and provable via your payslips and salary certificate is credited to you. The default liability sits with the employer.",
      },
      {
        q: "Must my employer give me a withholding certificate?",
        a: "Yes. Employers are expected to provide withholding documentation so you can claim the credit in your annual return. Request it in writing if HR delays.",
      },
      {
        q: "Can an employer deduct a flat 10% from all salaries?",
        a: "No. Salary tax must follow FBR's progressive slab rates for the tax year — flat-percentage deduction is wrong and penalises lower earners.",
      },
    ],
  },
  {
    slug: "salary-tax-appeal-pakistan",
    title: "Wrong Tax Deducted from Salary? How to Fix It in Pakistan",
    description:
      "A realistic escalation path for wrong salary tax deductions: payroll correction, written complaint, Commissioner's rectification, and formal appeal.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "You checked your payslip against the 2026-27 slabs and the numbers do not match. Maybe your employer used last year's table, applied a flat percentage, or kept deducting on your old salary after a revision. Here is the realistic path to getting it fixed — from a quiet conversation to a formal appeal.",
          "Most cases are resolved at step one or two. The later steps exist for when they are not.",
        ],
      },
      {
        heading: "Step 1: Talk to Payroll (With Your Math Ready)",
        paragraphs: [
          "Start with your payroll or HR contact and show your working: your monthly salary, the annualised figure, the slab calculation, and what the correct monthly deduction should be. Our [free salary tax calculator](/) gives you the official figures to show them.",
          "Most payroll errors are genuine mistakes — an outdated spreadsheet, a missed salary revision. A polite, documented request fixes the majority of cases within a pay cycle or two.",
        ],
      },
      {
        heading: "Step 2: Put It in Writing",
        paragraphs: [
          "If the verbal request does not work, send a written complaint — an email to HR and payroll is enough. State the facts: your salary, the correct deduction per the current slabs, the amount actually deducted, and the months affected.",
          "Written complaints create a record, which matters if you need to escalate. Keep copies of your payslips and your employer's responses.",
        ],
      },
      {
        heading: "Step 3: Rectification by the Commissioner",
        paragraphs: [
          "If your employer will not correct the deduction, the next level is the Commissioner of Inland Revenue, who has the power to rectify mistakes in tax assessments and withholding. This is typically done with the help of a tax consultant, who drafts the application setting out the error and the correct position.",
          "At this stage, your documentation — payslips, salary certificate, written complaint to the employer — becomes your evidence.",
        ],
      },
      {
        heading: "Step 4: Formal Appeal",
        paragraphs: [
          "If rectification does not resolve the matter, the Ordinance provides a formal appeal process against tax decisions. Appeals have strict time limits, so do not sit on a rejected rectification — consult a tax professional promptly about the applicable forum and deadline for your case.",
          "Be realistic: formal appeals are slow and best reserved for significant amounts. For a few thousand rupees of over-deduction, getting payroll fixed plus adjusting the excess in your annual return is usually the pragmatic resolution.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "The biggest mistake is doing nothing because the amount seems small — systematic over-deduction costs you every single month. Another is escalating aggressively before giving payroll one documented chance to fix it; paper trails beat confrontation. And never stop the process at a verbal promise — confirm the correction appears on your next payslip.",
        ],
      },
    ],
    faqs: [
      {
        q: "My employer deducts too much tax. What is the first step?",
        a: "Calculate the correct deduction using the current slabs, then raise it with payroll showing your working. Most errors are fixed at this stage.",
      },
      {
        q: "Can I recover tax that was wrongly deducted last year?",
        a: "Yes — claim the excess as adjustable withholding in your annual return for that year, or file a revised declaration. See our guide on adjusting withholding tax.",
      },
      {
        q: "What if my employer refuses to correct the deduction?",
        a: "Escalate in writing, then consider rectification through the Commissioner of Inland Revenue with a tax consultant's help, and finally a formal appeal if needed.",
      },
      {
        q: "Is there a time limit for appeals?",
        a: "Yes — tax appeals have strict statutory time limits. Consult a tax professional promptly rather than delaying.",
      },
      {
        q: "Should I hire a tax consultant for a small over-deduction?",
        a: "For small amounts, usually not — fix payroll and adjust in your return. Consultants become worthwhile for large amounts or formal rectification and appeals.",
      },
    ],
  },
  {
    slug: "advance-tax-salaried-individuals-pakistan",
    title: "Advance Tax for Salaried Individuals in Pakistan Explained",
    description:
      "Your monthly salary tax deduction IS advance tax. Learn how monthly withholding settles against your final liability at year-end.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Advance tax sounds like something only businesses pay — quarterly instalments, separate challans, accountants. But if you are a salaried employee in Pakistan, you have been paying advance tax all along: your monthly salary deduction is advance payment of your annual income tax.",
          "Understanding this changes how you read your payslip. Every month's deduction is a down payment, and the annual return is the final settlement.",
        ],
      },
      {
        heading: "Monthly Withholding = Advance Tax",
        paragraphs: [
          "Under Section 149, your employer deducts tax each month based on your estimated annual salary. Each deduction is credited to your tax account with FBR as an advance payment toward the tax year in progress.",
          "By June, twelve monthly deductions have accumulated into a full year's advance payment. Check the total on your salary tax certificate — that figure is your advance tax for the year.",
        ],
      },
      {
        heading: "How It Settles at Year-End",
        paragraphs: [
          "When you file your annual return, IRIS calculates your actual tax liability from your real annual income and subtracts everything already paid in advance. Three outcomes are possible.",
        ],
        list: [
          "Advance payments equal liability: you owe nothing more and get nothing back — the ideal outcome",
          "Advance payments exceed liability: the excess becomes your refund or carry-forward",
          "Advance payments fall short (e.g. mid-year raise): you pay the small balance with your return",
        ],
      },
      {
        heading: "Why the Settlement Rarely Matches Perfectly",
        paragraphs: [
          "Employers estimate your annual salary at the start of the year. Raises, bonuses, unpaid leave, or joining mid-year all shift your actual income away from the estimate — which is why the year-end settlement exists.",
          "This is also why checking your deduction after every salary change matters: accurate monthly withholding means a clean settlement with no surprise payment and no long refund wait. Run your new salary through our [free salary tax calculator](/) after any change.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "Many employees think the monthly deduction is the final word and skip filing — but without the return, there is no settlement, and any overpayment sits unclaimed. Another mistake: treating a mid-year bonus as tax-free because it arrived separately. Bonuses are salary income and must be in the annual total.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do salaried individuals pay advance tax separately?",
        a: "No. Your monthly salary withholding is your advance tax — there are no separate quarterly payments for salaried employees.",
      },
      {
        q: "What happens if my advance payments were too high?",
        a: "The excess is claimed in your annual return as a refund or carried forward against next year's liability.",
      },
      {
        q: "What if my salary increased mid-year and withholding was too low?",
        a: "You pay the shortfall when you file your return. To avoid this, ask payroll to recalculate your monthly deduction after any raise.",
      },
      {
        q: "Is advance tax the same as withholding tax?",
        a: "For salaried persons, effectively yes — the monthly withholding under Section 149 functions as advance payment of your annual income tax.",
      },
      {
        q: "Do I need to file a return if my advance tax covered everything?",
        a: "Yes — the return is the settlement itself, and filing is a legal obligation independent of whether any balance is due.",
      },
    ],
  },
  {
    slug: "salary-slip-tax-deduction-explained",
    title: "Salary Slip Tax Deduction Explained Line by Line (Pakistan)",
    description:
      "Decode every deduction line on a Pakistani payslip — gross salary, income tax, EOBI, provident fund — with a worked Rs 200,000/month example.",
    category: "Guides",
    published: "2026-10-10",
    updated: "2026-10-10",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "Pakistani payslips pack a lot of lines into a small space — and the deduction section confuses almost everyone at first. Income tax, EOBI, provident fund: three different deductions, three different destinations, only one of them a tax.",
          "This guide decodes each line, then walks through a full Rs 200,000/month example so you can read your own slip with confidence.",
        ],
      },
      {
        heading: "The Earnings Side: Gross Salary",
        paragraphs: [
          "Gross salary is everything your employer pays you before deductions: basic pay plus house rent allowance, conveyance, medical, and any other allowances. Bonuses usually appear as separate lines in the month they are paid.",
          "Income tax is calculated on your total taxable salary — not just basic pay. A common confusion: employees compute tax on basic pay alone and wonder why the deduction is higher.",
        ],
      },
      {
        heading: "The Deductions, Line by Line",
        paragraphs: [
          "Each deduction line sends your money somewhere different.",
        ],
        list: [
          "Income tax (WHT/TDS): your advance income tax under Section 149, deposited with FBR — the only true tax line",
          "EOBI: Employees' Old-Age Benefits Institution contribution — a social security deduction toward your old-age pension, not a tax",
          "Provident fund: your own retirement savings, deducted and held in your fund account — not a tax, and it is your money",
          "Other deductions: loans, advances, or absence adjustments — employer-specific, not taxes",
        ],
      },
      {
        heading: "Worked Example: Rs 200,000/Month Payslip",
        paragraphs: [
          "Annual income: Rs 200,000 × 12 = Rs 2,400,000. This falls in the 2.2M–3.2M slab: Rs 116,000 fixed + 20% of the amount above Rs 2,200,000. Taxable excess: Rs 200,000. Annual tax: Rs 116,000 + (20% × Rs 200,000) = Rs 116,000 + Rs 40,000 = Rs 156,000.",
          "Monthly income tax: Rs 156,000 ÷ 12 = Rs 13,000. So on a Rs 200,000 payslip, expect an income tax line of Rs 13,000/month — plus EOBI and provident fund as separate lines. Your take-home before those other deductions is Rs 187,000. Verify any salary with our [free salary tax calculator](/) or the [take-home salary calculator](/).",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "The most frequent error is adding EOBI and provident fund to your tax burden — they are not taxes, and the provident fund is your own savings. Another is panicking when a bonus month shows a bigger tax line: the deduction scales with that month's higher taxable pay, which is correct. If the regular months look wrong, see our guide on checking your salary tax deduction.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the income tax on a Rs 200,000 monthly salary?",
        a: "Rs 13,000 per month (Rs 156,000 per year) under the 2026-27 slabs, before EOBI and provident fund deductions.",
      },
      {
        q: "Is EOBI a tax?",
        a: "No. EOBI is a social security contribution toward your old-age pension. Only the income tax line goes to FBR as tax.",
      },
      {
        q: "Is provident fund deduction a tax?",
        a: "No. Provident fund is your own retirement savings held in your name — it is not paid to the government as tax.",
      },
      {
        q: "Why is my tax deduction higher in bonus months?",
        a: "Bonuses are taxable salary income, so the month's higher taxable pay correctly attracts a higher deduction.",
      },
      {
        q: "My payslip has no income tax line. Is that normal?",
        a: "It is normal if your annual salary is Rs 600,000 or below (the tax-free limit). Above that, a missing tax line means your employer is not withholding — raise it with payroll.",
      },
      {
        q: "How do I check if my payslip deductions are correct?",
        a: "Annualise your salary, apply the 2026-27 slabs, and divide by 12 — or use our free salary tax calculator for an instant check.",
      },
    ],
  },
];
