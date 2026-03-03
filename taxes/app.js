/* ============================================
   TaxSmart 2026 - JavaScript
   Calculators, interactions, navigation
   ============================================ */

(function() {
'use strict';

// ---- NAVIGATION ----
const nav = document.querySelector('.nav');
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
  const btt = document.querySelector('.back-to-top');
  if (btt) btt.classList.toggle('visible', window.scrollY > 400);
});

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = mobileToggle.querySelector('svg');
    if (mobileMenu.classList.contains('open')) {
      mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>';
    } else {
      mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    }
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
  });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 120;
    if (scrollY >= top) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ---- SCROLL ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ---- GUIDE MODALS ----
const guideData = {
  'tax-brackets': {
    title: 'Federal Income Tax Brackets 2026 Explained',
    content: `
      <h3>How Tax Brackets Work</h3>
      <p>The United States uses a progressive tax system, meaning your income is taxed at different rates as it increases. A common misconception is that moving into a higher tax bracket means all your income is taxed at that higher rate — that is not the case. Only the income within each bracket is taxed at that bracket's rate.</p>
      <p>For example, if you are a single filer earning $60,000 in 2026, you do not pay 22% on the entire amount. Instead, you pay 10% on the first $12,400, 12% on the next portion up to $50,400, and 22% only on the remaining amount above $50,400.</p>

      <h3>2026 Tax Brackets for Single Filers</h3>
      <table>
        <tr><th>Tax Rate</th><th>Taxable Income Range</th></tr>
        <tr><td>10%</td><td>$0 – $12,400</td></tr>
        <tr><td>12%</td><td>$12,401 – $50,400</td></tr>
        <tr><td>22%</td><td>$50,401 – $105,700</td></tr>
        <tr><td>24%</td><td>$105,701 – $201,775</td></tr>
        <tr><td>32%</td><td>$201,776 – $256,225</td></tr>
        <tr><td>35%</td><td>$256,226 – $640,600</td></tr>
        <tr><td>37%</td><td>Over $640,600</td></tr>
      </table>

      <h3>2026 Tax Brackets for Married Filing Jointly</h3>
      <table>
        <tr><th>Tax Rate</th><th>Taxable Income Range</th></tr>
        <tr><td>10%</td><td>$0 – $24,800</td></tr>
        <tr><td>12%</td><td>$24,801 – $100,800</td></tr>
        <tr><td>22%</td><td>$100,801 – $211,400</td></tr>
        <tr><td>24%</td><td>$211,401 – $403,550</td></tr>
        <tr><td>32%</td><td>$403,551 – $512,450</td></tr>
        <tr><td>35%</td><td>$512,451 – $768,700</td></tr>
        <tr><td>37%</td><td>Over $768,700</td></tr>
      </table>

      <h3>Key Changes from 2025 to 2026</h3>
      <p>The IRS adjusts tax brackets annually for inflation. For 2026, brackets have widened slightly compared to 2025, meaning you can earn somewhat more before moving into the next bracket. This adjustment helps prevent "bracket creep" — being pushed into a higher bracket solely due to inflation rather than a real increase in purchasing power.</p>

      <div class="savings-callout"><p><strong>Tax Tip:</strong> Understanding marginal vs. effective tax rates is crucial. Your effective tax rate — total tax divided by total income — is always lower than your highest marginal rate. Use our tax estimator below to see your effective rate.</p></div>

      <h3>How to Lower Your Taxable Income</h3>
      <p>You can reduce the income subject to these brackets through deductions and credits. Common strategies include contributing to retirement accounts like 401(k)s or Traditional IRAs, claiming the standard deduction or itemizing, utilizing Health Savings Accounts (HSAs), and making charitable contributions. Each of these can reduce your taxable income and potentially keep more of your earnings in lower brackets.</p>
    `
  },
  'standard-vs-itemized': {
    title: 'Standard Deduction vs Itemizing: Which Saves You More?',
    content: `
      <h3>The Standard Deduction in 2026</h3>
      <p>The standard deduction is a fixed amount the IRS allows you to subtract from your taxable income, no questions asked. For 2026, the standard deduction amounts are:</p>
      <table>
        <tr><th>Filing Status</th><th>Standard Deduction</th></tr>
        <tr><td>Single</td><td>$16,100</td></tr>
        <tr><td>Married Filing Jointly</td><td>$32,200</td></tr>
        <tr><td>Head of Household</td><td>$24,150</td></tr>
        <tr><td>Married Filing Separately</td><td>$16,100</td></tr>
      </table>
      <p>If you are 65 or older, or blind, you qualify for an additional standard deduction: $2,050 for single filers and heads of household, or $1,650 per qualifying person for married filers.</p>

      <h3>What Does Itemizing Mean?</h3>
      <p>Itemizing means listing individual deductions on Schedule A of your tax return instead of taking the standard deduction. Common itemized deductions include state and local taxes (SALT, capped at $10,000), mortgage interest on up to $750,000 of debt, charitable contributions, and medical expenses exceeding 7.5% of your adjusted gross income.</p>

      <h3>Which Should You Choose?</h3>
      <p>The rule is straightforward: <strong>choose whichever gives you the larger deduction</strong>. If your total itemized deductions exceed your standard deduction, itemize. Otherwise, take the standard deduction — it is simpler and requires less documentation.</p>

      <div class="savings-callout"><p><strong>Did You Know?</strong> After the Tax Cuts and Jobs Act nearly doubled the standard deduction, roughly 90% of taxpayers now take the standard deduction. Starting in 2026, non-itemizers can also deduct up to $1,000 ($2,000 for married filing jointly) in charitable cash contributions on top of the standard deduction.</p></div>

      <h3>When Itemizing Makes Sense</h3>
      <ul>
        <li>You pay significant state and local taxes (close to the $10,000 SALT cap)</li>
        <li>You have a large mortgage and pay substantial interest</li>
        <li>You made large charitable donations during the year</li>
        <li>You had major unreimbursed medical expenses</li>
        <li>You suffered a casualty loss in a federally declared disaster area</li>
      </ul>

      <h3>Record-Keeping Tips</h3>
      <p>If you plan to itemize, keep detailed records throughout the year. Save receipts for charitable donations, property tax statements, mortgage interest statements (Form 1098), and medical bills. Good record-keeping not only ensures you claim every eligible deduction but also protects you in case of an audit.</p>
    `
  },
  'self-employment': {
    title: 'Self-Employment Tax: What Freelancers Need to Know',
    content: `
      <h3>What Is Self-Employment Tax?</h3>
      <p>If you work for yourself — as a freelancer, independent contractor, sole proprietor, or gig worker — you are responsible for self-employment (SE) tax. This tax covers both the employer and employee portions of Social Security and Medicare, totaling <strong>15.3%</strong> of your net self-employment income.</p>

      <h3>Breaking Down the 15.3%</h3>
      <table>
        <tr><th>Component</th><th>Rate</th><th>2026 Wage Base</th></tr>
        <tr><td>Social Security (employee + employer)</td><td>12.4%</td><td>Up to $184,500</td></tr>
        <tr><td>Medicare (employee + employer)</td><td>2.9%</td><td>No limit</td></tr>
        <tr><td>Additional Medicare Tax</td><td>0.9%</td><td>Over $200,000 (single)</td></tr>
      </table>

      <h3>How Self-Employment Tax Is Calculated</h3>
      <p>The IRS does not tax your full net earnings. First, you multiply your net self-employment income by 92.35% (0.9235). This adjustment accounts for the employer-equivalent portion of the tax, putting self-employed individuals on par with traditional employees. Then you apply the 15.3% rate to this adjusted amount.</p>

      <div class="savings-callout"><p><strong>Tax Savings:</strong> You can deduct 50% of your self-employment tax on your income tax return (Form 1040, Schedule 1). This reduces your adjusted gross income, which can lower your overall income tax liability.</p></div>

      <h3>Quarterly Estimated Payments</h3>
      <p>Self-employed individuals must make quarterly estimated tax payments if they expect to owe $1,000 or more. For 2026, the due dates are: April 15, June 15, September 15, and January 15 of the following year. Missing these deadlines can result in penalties and interest charges.</p>

      <h3>Key Deductions for Self-Employed Workers</h3>
      <ul>
        <li><strong>Home office deduction:</strong> If you use a portion of your home exclusively for business</li>
        <li><strong>Health insurance premiums:</strong> Self-employed individuals can deduct 100% of health insurance premiums</li>
        <li><strong>Retirement contributions:</strong> SEP IRA, SIMPLE IRA, or solo 401(k) contributions</li>
        <li><strong>Business expenses:</strong> Equipment, software, supplies, mileage, and more</li>
        <li><strong>Qualified Business Income (QBI) deduction:</strong> Up to 20% of qualified business income</li>
      </ul>

      <h3>Filing Requirements</h3>
      <p>You must file Schedule C (Profit or Loss from Business) and Schedule SE (Self-Employment Tax) with your Form 1040. Keep meticulous records of all income and expenses throughout the year — the IRS requires you to report all self-employment income of $400 or more.</p>
    `
  },
  'credits-vs-deductions': {
    title: 'Tax Credits vs Deductions: Understanding the Difference',
    content: `
      <h3>The Fundamental Difference</h3>
      <p>Tax deductions and tax credits both reduce what you owe, but they work very differently. A <strong>deduction</strong> reduces your taxable income — the amount of income subject to tax. A <strong>credit</strong> reduces your actual tax bill dollar-for-dollar. This makes credits generally more valuable than deductions of the same amount.</p>

      <h3>How Deductions Work</h3>
      <p>If you are in the 22% tax bracket and claim a $1,000 deduction, you save $220 in taxes (22% of $1,000). The value of a deduction depends on your marginal tax rate — higher-income taxpayers benefit more from the same deduction amount.</p>

      <h3>How Credits Work</h3>
      <p>A $1,000 tax credit reduces your tax bill by exactly $1,000, regardless of your tax bracket. This direct reduction makes credits far more powerful. There are two types of credits:</p>
      <ul>
        <li><strong>Nonrefundable credits</strong> can reduce your tax to zero but no further (e.g., Child and Dependent Care Credit)</li>
        <li><strong>Refundable credits</strong> can result in a refund even if they exceed your tax liability (e.g., Earned Income Tax Credit)</li>
      </ul>

      <div class="savings-callout"><p><strong>Example:</strong> If you owe $3,000 in taxes and have a $4,000 refundable credit, you receive a $1,000 refund. With a nonrefundable credit, your tax would be reduced to $0, but you would not get the extra $1,000.</p></div>

      <h3>Common Tax Credits for 2026</h3>
      <table>
        <tr><th>Credit</th><th>Maximum Amount</th><th>Type</th></tr>
        <tr><td>Child Tax Credit</td><td>$2,000 per child</td><td>Partially refundable</td></tr>
        <tr><td>Earned Income Tax Credit</td><td>Up to $7,830 (3+ children)</td><td>Refundable</td></tr>
        <tr><td>American Opportunity Credit</td><td>$2,500 per student</td><td>Partially refundable</td></tr>
        <tr><td>Lifetime Learning Credit</td><td>$2,000 per return</td><td>Nonrefundable</td></tr>
        <tr><td>Saver's Credit</td><td>Up to $1,000 ($2,000 MFJ)</td><td>Nonrefundable</td></tr>
        <tr><td>Residential Clean Energy Credit</td><td>30% of cost</td><td>Nonrefundable</td></tr>
      </table>

      <h3>Common Tax Deductions for 2026</h3>
      <ul>
        <li>Standard deduction ($16,100 single / $32,200 MFJ)</li>
        <li>Student loan interest (up to $2,500)</li>
        <li>Educator expenses (up to $300)</li>
        <li>HSA contributions ($4,400 individual / $8,750 family)</li>
        <li>IRA contributions (up to $7,500)</li>
        <li>Charitable contributions</li>
      </ul>

      <h3>Strategy: Maximize Both</h3>
      <p>The smartest tax strategy uses both deductions and credits to minimize your total liability. First, reduce your taxable income with deductions. Then, apply credits to reduce the tax owed on that lower income. Always claim every credit you qualify for — their dollar-for-dollar value is unbeatable.</p>
    `
  },
  'file-free': {
    title: 'How to File Your Taxes for Free in 2026',
    content: `
      <h3>IRS Free File Program</h3>
      <p>The IRS partners with tax software companies to offer free filing options to eligible taxpayers. If your adjusted gross income is $84,000 or less, you can use IRS Free File guided tax preparation software at no cost. This program provides access to brand-name software that handles both federal returns — and in many cases, state returns as well.</p>

      <h3>IRS Direct File</h3>
      <p>The IRS expanded its Direct File program, which allows taxpayers in participating states to file their federal taxes directly with the IRS for free — no third-party software needed. The tool is designed for straightforward returns and is available in an increasing number of states each year.</p>

      <h3>Free Fillable Forms</h3>
      <p>For any income level, the IRS offers Free Fillable Forms — electronic versions of IRS paper forms. These are best for people comfortable preparing their own taxes, as they provide limited guidance and no state filing option. They do perform basic calculations and allow you to e-file for free.</p>

      <div class="savings-callout"><p><strong>Potential Savings:</strong> Paid tax preparation can cost $150–$400+ depending on complexity. Filing for free through these programs puts that money back in your pocket.</p></div>

      <h3>Volunteer Income Tax Assistance (VITA)</h3>
      <p>VITA provides free tax preparation for people who generally earn $67,000 or less, persons with disabilities, and limited English-speaking taxpayers. IRS-certified volunteers prepare returns at community locations across the country. Use the IRS VITA locator tool to find a site near you.</p>

      <h3>Tax Counseling for the Elderly (TCE)</h3>
      <p>The TCE program offers free tax help to people aged 60 and older, specializing in pension and retirement-related questions. AARP Foundation Tax-Aide, a part of the TCE program, operates at thousands of locations nationwide.</p>

      <h3>Free Commercial Options</h3>
      <ul>
        <li><strong>Cash App Taxes:</strong> Completely free federal and state filing for most return types</li>
        <li><strong>TaxSlayer Simply Free:</strong> Free for simple returns (W-2 income, limited credits)</li>
        <li><strong>FreeTaxUSA:</strong> Free federal filing for all situations; state returns cost a small fee</li>
        <li><strong>IRS Free File partners:</strong> Various software providers through the IRS Free File Alliance</li>
      </ul>

      <h3>Tips for Free Filing</h3>
      <p>Gather all your tax documents (W-2s, 1099s, etc.) before you start. Double-check your Social Security number and bank routing information. File electronically and choose direct deposit for the fastest refund — typically within 21 days.</p>
    `
  },
  'capital-gains': {
    title: 'Capital Gains Tax: A Complete Guide',
    content: `
      <h3>What Are Capital Gains?</h3>
      <p>A capital gain occurs when you sell an asset — stocks, bonds, real estate, cryptocurrency, or other property — for more than you paid for it. The difference between your purchase price (cost basis) and sale price is the capital gain. If you sell for less than you paid, you have a capital loss.</p>

      <h3>Short-Term vs Long-Term Capital Gains</h3>
      <p>The tax rate you pay depends on how long you held the asset before selling:</p>
      <ul>
        <li><strong>Short-term gains</strong> (held one year or less): Taxed at your ordinary income tax rate (10%–37%)</li>
        <li><strong>Long-term gains</strong> (held more than one year): Taxed at preferential rates of 0%, 15%, or 20%</li>
      </ul>

      <h3>2026 Long-Term Capital Gains Rates</h3>
      <table>
        <tr><th>Rate</th><th>Single</th><th>Married Filing Jointly</th></tr>
        <tr><td>0%</td><td>Up to $49,450</td><td>Up to $98,900</td></tr>
        <tr><td>15%</td><td>$49,451 – $545,500</td><td>$98,901 – $613,700</td></tr>
        <tr><td>20%</td><td>Over $545,500</td><td>Over $613,700</td></tr>
      </table>

      <div class="savings-callout"><p><strong>Tax Savings Strategy:</strong> If you are close to the 0% threshold, consider timing asset sales so your taxable income stays below the cutoff. A married couple can realize up to $98,900 in long-term capital gains at the 0% tax rate in 2026.</p></div>

      <h3>Net Investment Income Tax (NIIT)</h3>
      <p>High earners may face an additional 3.8% surtax on net investment income (including capital gains) if their modified adjusted gross income exceeds $200,000 (single) or $250,000 (married filing jointly). This can bring the effective top rate on long-term gains to 23.8%.</p>

      <h3>Capital Loss Deductions</h3>
      <p>If your capital losses exceed your capital gains, you can deduct up to $3,000 per year ($1,500 if married filing separately) against ordinary income. Any excess losses carry forward to future tax years. This makes tax-loss harvesting — strategically selling losing investments — a valuable planning tool.</p>

      <h3>Special Situations</h3>
      <ul>
        <li><strong>Primary residence:</strong> Exclude up to $250,000 ($500,000 MFJ) in gains on your home if you lived in it for at least 2 of the last 5 years</li>
        <li><strong>Cryptocurrency:</strong> Treated as property; every sale, trade, or exchange is a taxable event</li>
        <li><strong>Inherited assets:</strong> Receive a "stepped-up" cost basis to fair market value at date of death</li>
        <li><strong>Collectibles:</strong> Long-term gains on collectibles are taxed at a maximum rate of 28%</li>
      </ul>
    `
  },
  'retirement': {
    title: 'Retirement Account Tax Benefits: 401(k), IRA, Roth',
    content: `
      <h3>Why Retirement Accounts Matter for Taxes</h3>
      <p>Retirement accounts offer some of the most powerful tax benefits available to individuals. Depending on the account type, you can either reduce your taxable income today or enjoy tax-free growth and withdrawals in retirement. Understanding your options helps you make smarter financial decisions.</p>

      <h3>2026 Contribution Limits</h3>
      <table>
        <tr><th>Account Type</th><th>Annual Limit</th><th>Catch-Up (50+)</th></tr>
        <tr><td>401(k) / 403(b) / 457</td><td>$24,500</td><td>+$8,000 (ages 50-59, 64+)<br>+$11,250 (ages 60-63)</td></tr>
        <tr><td>Traditional IRA</td><td>$7,500</td><td>+$1,100</td></tr>
        <tr><td>Roth IRA</td><td>$7,500</td><td>+$1,100</td></tr>
        <tr><td>SEP IRA</td><td>Up to $72,000</td><td>N/A</td></tr>
        <tr><td>SIMPLE IRA</td><td>$17,000</td><td>+$4,000</td></tr>
      </table>

      <h3>Traditional 401(k) and IRA</h3>
      <p>Contributions to traditional 401(k)s and deductible IRAs reduce your taxable income in the year you contribute. The money grows tax-deferred, and you pay income tax when you withdraw funds in retirement. This is beneficial if you expect to be in a lower tax bracket during retirement.</p>

      <div class="savings-callout"><p><strong>Tax Impact:</strong> Contributing $24,500 to a traditional 401(k) in the 22% bracket saves you $5,390 in taxes immediately. Over decades, tax-deferred compounding significantly amplifies your retirement savings.</p></div>

      <h3>Roth 401(k) and Roth IRA</h3>
      <p>Roth contributions are made with after-tax dollars — no immediate tax deduction. However, qualified withdrawals in retirement are completely tax-free, including all growth. Roth accounts are ideal if you expect to be in a higher bracket later or want tax diversification.</p>
      <p>For 2026, single filers can contribute to a Roth IRA if their income is below $168,000 (phaseout begins at $153,000). Married filing jointly, the phaseout range is $242,000–$252,000.</p>

      <h3>Health Savings Account (HSA)</h3>
      <p>Often called the "triple tax advantage" account: contributions are tax-deductible, growth is tax-free, and qualified medical withdrawals are tax-free. For 2026, contribution limits are $4,400 (individual) and $8,750 (family), with a $1,000 catch-up for those 55+.</p>

      <h3>Choosing the Right Strategy</h3>
      <ul>
        <li>If you are in a high bracket now and expect a lower bracket in retirement: prioritize traditional (pre-tax) accounts</li>
        <li>If you are in a low bracket now or expect higher taxes later: prioritize Roth accounts</li>
        <li>For maximum flexibility: contribute to both traditional and Roth accounts to create tax diversification</li>
        <li>Always contribute enough to get your employer's full 401(k) match — that is a guaranteed 100% return</li>
      </ul>
    `
  },
  'small-business': {
    title: 'Small Business Tax Deductions You Might Be Missing',
    content: `
      <h3>Maximize Your Deductions</h3>
      <p>Small business owners have access to a wide range of tax deductions that can significantly reduce their tax liability. Many entrepreneurs leave money on the table simply because they do not know all the deductions available to them. Here are the most commonly overlooked opportunities.</p>

      <h3>Home Office Deduction</h3>
      <p>If you use a portion of your home regularly and exclusively for business, you can deduct related expenses. There are two methods:</p>
      <ul>
        <li><strong>Simplified method:</strong> $5 per square foot of home office space, up to 300 square feet ($1,500 maximum)</li>
        <li><strong>Regular method:</strong> Calculate actual expenses (rent/mortgage interest, utilities, insurance, repairs) based on the percentage of your home used for business</li>
      </ul>

      <h3>Vehicle and Mileage Deductions</h3>
      <p>If you use your vehicle for business, you can deduct the costs. For 2026, the standard mileage rate is expected to remain around $0.70 per mile for business use. Alternatively, you can track actual expenses including gas, insurance, maintenance, and depreciation. Keep a mileage log to substantiate your deduction.</p>

      <h3>Qualified Business Income (QBI) Deduction</h3>
      <p>Pass-through business owners (sole proprietors, partners, S-corp shareholders) may deduct up to 20% of their qualified business income. This powerful deduction can reduce your effective tax rate significantly, though income limits and business type may restrict the full deduction.</p>

      <div class="savings-callout"><p><strong>Big Savings:</strong> A sole proprietor with $100,000 in qualified business income could deduct up to $20,000 through the QBI deduction — saving $4,400 or more depending on their tax bracket.</p></div>

      <h3>Often-Overlooked Deductions</h3>
      <table>
        <tr><th>Deduction</th><th>What Qualifies</th></tr>
        <tr><td>Business insurance</td><td>Liability, professional, property, and health insurance premiums</td></tr>
        <tr><td>Professional development</td><td>Courses, workshops, conferences, books, certifications</td></tr>
        <tr><td>Software and subscriptions</td><td>Business tools, cloud services, trade publications</td></tr>
        <tr><td>Marketing and advertising</td><td>Website costs, ads, business cards, promotional materials</td></tr>
        <tr><td>Legal and professional fees</td><td>Accountant, attorney, consultant, and bookkeeping fees</td></tr>
        <tr><td>Startup costs</td><td>Up to $5,000 in the first year for qualifying new businesses</td></tr>
        <tr><td>Retirement plan contributions</td><td>SEP IRA (up to $72,000 in 2026), Solo 401(k), SIMPLE IRA</td></tr>
        <tr><td>Bad debts</td><td>Unpaid invoices from clients that become uncollectible</td></tr>
      </table>

      <h3>Section 179 and Bonus Depreciation</h3>
      <p>Section 179 allows you to deduct the full purchase price of qualifying equipment and software in the year it is placed in service, rather than depreciating it over several years. For 2026, the Section 179 deduction limit is expected to be over $1.2 million. This is valuable for businesses making significant capital purchases.</p>
    `
  },
  'state-taxes': {
    title: 'State Income Tax: A State-by-State Overview',
    content: `
      <h3>Understanding State Income Tax</h3>
      <p>In addition to federal income tax, most states impose their own income tax. State tax systems vary widely — some states have no income tax at all, while others have rates exceeding 13%. Understanding your state's tax structure is essential for accurate tax planning.</p>

      <h3>States With No Income Tax</h3>
      <p>Nine states do not levy a state income tax on earned income:</p>
      <ul>
        <li>Alaska</li>
        <li>Florida</li>
        <li>Nevada</li>
        <li>New Hampshire (taxes dividends and interest only, phasing out by 2027)</li>
        <li>South Dakota</li>
        <li>Tennessee</li>
        <li>Texas</li>
        <li>Washington</li>
        <li>Wyoming</li>
      </ul>

      <div class="savings-callout"><p><strong>Location Matters:</strong> A person earning $100,000 would pay $0 in state income tax in Texas or Florida, but over $13,000 in California's highest bracket. For remote workers, your state of residence determines your tax obligation.</p></div>

      <h3>Flat Tax vs Progressive Tax States</h3>
      <p>States use different tax structures:</p>
      <ul>
        <li><strong>Flat tax states</strong> (single rate for all income levels): Colorado (4.4%), Illinois (4.95%), Indiana (3.05%), Kentucky (4.0%), Michigan (4.25%), North Carolina (4.5%), Pennsylvania (3.07%), Utah (4.65%), and others</li>
        <li><strong>Progressive tax states</strong> (rates increase with income): California (1%-13.3%), New York (4%-10.9%), New Jersey (1.4%-10.75%), and many more</li>
      </ul>

      <h3>SALT Deduction Cap</h3>
      <p>The State and Local Tax (SALT) deduction allows you to deduct state and local income taxes (or sales taxes) plus property taxes on your federal return if you itemize. However, this deduction is currently capped at $10,000 ($5,000 for married filing separately). This cap particularly impacts taxpayers in high-tax states.</p>

      <h3>Reciprocal Agreements</h3>
      <p>Some states have reciprocal agreements that allow residents who work in a neighboring state to pay income tax only to their state of residence. If you commute across state lines, check whether your states have such an agreement to avoid double taxation.</p>

      <h3>Tax Planning Considerations</h3>
      <p>When planning a move or evaluating job offers in different states, consider the full tax picture. States without income tax may have higher sales taxes, property taxes, or fees. Calculate your total tax burden — federal, state, and local — for an accurate comparison.</p>
    `
  },
  'back-taxes': {
    title: 'What to Do If You Owe Back Taxes',
    content: `
      <h3>Do Not Ignore the Problem</h3>
      <p>Owing back taxes to the IRS is stressful, but ignoring the issue only makes it worse. Penalties and interest accumulate daily, and the IRS has powerful collection tools including wage garnishment, bank levies, and tax liens. The good news: the IRS offers several programs to help you resolve your debt.</p>

      <h3>Understanding Penalties and Interest</h3>
      <table>
        <tr><th>Penalty Type</th><th>Rate</th></tr>
        <tr><td>Failure to file</td><td>5% of unpaid taxes per month (up to 25%)</td></tr>
        <tr><td>Failure to pay</td><td>0.5% of unpaid taxes per month (up to 25%)</td></tr>
        <tr><td>Interest on underpayment</td><td>Federal short-term rate + 3% (compounded daily)</td></tr>
      </table>

      <div class="warning-callout"><p><strong>Important:</strong> The failure-to-file penalty is 10 times higher than the failure-to-pay penalty. Even if you cannot pay in full, always file your return on time to avoid the steeper penalty.</p></div>

      <h3>IRS Payment Options</h3>
      <ul>
        <li><strong>Full payment:</strong> Pay in full to stop all penalties and interest. Use IRS Direct Pay, credit card, or check.</li>
        <li><strong>Short-term payment plan:</strong> Up to 180 days to pay in full. No setup fee for online applications. Apply at IRS.gov.</li>
        <li><strong>Long-term installment agreement:</strong> Monthly payments over up to 72 months. Setup fees range from $22 to $107 depending on how you apply and pay.</li>
        <li><strong>Offer in Compromise (OIC):</strong> Settle your tax debt for less than the full amount. The IRS considers your ability to pay, income, expenses, and asset equity.</li>
        <li><strong>Currently Not Collectible (CNC):</strong> If you cannot afford any payments, the IRS may temporarily suspend collection. Interest and penalties still accrue.</li>
      </ul>

      <h3>Steps to Take Right Now</h3>
      <ol>
        <li><strong>File all missing returns:</strong> The IRS will not negotiate until all required returns are filed</li>
        <li><strong>Calculate what you owe:</strong> Create an IRS online account to see your full balance</li>
        <li><strong>Choose a payment option:</strong> Select the plan that fits your financial situation</li>
        <li><strong>Consider professional help:</strong> A tax professional or enrolled agent can negotiate with the IRS on your behalf</li>
        <li><strong>Request penalty abatement:</strong> First-time penalty abatement is available if you have a clean compliance history for the prior three years</li>
      </ol>

      <h3>Statute of Limitations</h3>
      <p>The IRS generally has 10 years from the date of assessment to collect a tax debt. After this Collection Statute Expiration Date (CSED), the debt is legally unenforceable. However, certain actions (like filing an OIC or leaving the country) can extend this period. Do not rely on waiting out the clock as a strategy.</p>

      <h3>Protect Yourself From Scams</h3>
      <p>The IRS will never call you demanding immediate payment, threaten arrest, or request payment via gift cards or cryptocurrency. Official IRS communication starts with a letter sent through the U.S. mail. If you receive a suspicious call or email, report it to the IRS.</p>
    `
  }
};

window.openGuide = function(key) {
  const data = guideData[key];
  if (!data) return;
  const overlay = document.getElementById('guideModal');
  document.getElementById('guideModalTitle').textContent = data.title;
  document.getElementById('guideModalBody').innerHTML = data.content;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeGuide = function() {
  const overlay = document.getElementById('guideModal');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
};

document.getElementById('guideModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeGuide();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeGuide();
});

// ---- TAX CALCULATORS ----

// Tab switching
document.querySelectorAll('.calc-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.calc-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.panel).classList.add('active');
  });
});

// 2026 Tax Brackets
const brackets2026 = {
  single: [
    { min: 0, max: 12400, rate: 0.10 },
    { min: 12400, max: 50400, rate: 0.12 },
    { min: 50400, max: 105700, rate: 0.22 },
    { min: 105700, max: 201775, rate: 0.24 },
    { min: 201775, max: 256225, rate: 0.32 },
    { min: 256225, max: 640600, rate: 0.35 },
    { min: 640600, max: Infinity, rate: 0.37 }
  ],
  married: [
    { min: 0, max: 24800, rate: 0.10 },
    { min: 24800, max: 100800, rate: 0.12 },
    { min: 100800, max: 211400, rate: 0.22 },
    { min: 211400, max: 403550, rate: 0.24 },
    { min: 403550, max: 512450, rate: 0.32 },
    { min: 512450, max: 768700, rate: 0.35 },
    { min: 768700, max: Infinity, rate: 0.37 }
  ],
  hoh: [
    { min: 0, max: 17700, rate: 0.10 },
    { min: 17700, max: 67450, rate: 0.12 },
    { min: 67450, max: 105700, rate: 0.22 },
    { min: 105700, max: 201750, rate: 0.24 },
    { min: 201750, max: 256200, rate: 0.32 },
    { min: 256200, max: 640600, rate: 0.35 },
    { min: 640600, max: Infinity, rate: 0.37 }
  ],
  mfs: [
    { min: 0, max: 12400, rate: 0.10 },
    { min: 12400, max: 50400, rate: 0.12 },
    { min: 50400, max: 105700, rate: 0.22 },
    { min: 105700, max: 201775, rate: 0.24 },
    { min: 201775, max: 256225, rate: 0.32 },
    { min: 256225, max: 384350, rate: 0.35 },
    { min: 384350, max: Infinity, rate: 0.37 }
  ]
};

const stdDeductions2026 = {
  single: 16100,
  married: 32200,
  hoh: 24150,
  mfs: 16100
};

function calcIncomeTax(taxableIncome, status) {
  const b = brackets2026[status];
  let tax = 0;
  for (const bracket of b) {
    if (taxableIncome <= bracket.min) break;
    const taxable = Math.min(taxableIncome, bracket.max) - bracket.min;
    tax += taxable * bracket.rate;
  }
  return tax;
}

function fmt(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function fmtPct(n) {
  return n.toFixed(1) + '%';
}

// Simple Tax Estimator
window.calcSimpleTax = function() {
  const income = parseFloat(document.getElementById('income').value) || 0;
  const status = document.getElementById('filingStatus').value;
  const deductions = parseFloat(document.getElementById('deductions').value) || 0;
  const withholding = parseFloat(document.getElementById('withholding').value) || 0;

  const stdDed = stdDeductions2026[status];
  const totalDeductions = deductions > 0 ? Math.max(deductions, stdDed) : stdDed;
  const taxableIncome = Math.max(0, income - totalDeductions);
  const tax = calcIncomeTax(taxableIncome, status);
  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  const marginalRate = getMarginalRate(taxableIncome, status);
  const refundOrOwe = withholding - tax;

  document.getElementById('resGrossIncome').textContent = fmt(income);
  document.getElementById('resDeductions').textContent = fmt(totalDeductions);
  document.getElementById('resTaxableIncome').textContent = fmt(taxableIncome);
  document.getElementById('resFederalTax').textContent = fmt(Math.round(tax));
  document.getElementById('resEffectiveRate').textContent = fmtPct(effectiveRate);
  document.getElementById('resMarginalRate').textContent = fmtPct(marginalRate * 100);
  const refundEl = document.getElementById('resRefund');
  refundEl.textContent = (refundOrOwe >= 0 ? '+' : '') + fmt(Math.round(Math.abs(refundOrOwe)));
  const refundRow = refundEl.closest('.result-row');
  if (refundOrOwe >= 0) {
    refundRow.querySelector('.result-label').textContent = 'Estimated Refund';
    refundEl.style.color = 'var(--green-700)';
  } else {
    refundRow.querySelector('.result-label').textContent = 'Estimated Amount Owed';
    refundEl.style.color = 'var(--red-500)';
  }
};

function getMarginalRate(taxableIncome, status) {
  const b = brackets2026[status];
  for (let i = b.length - 1; i >= 0; i--) {
    if (taxableIncome > b[i].min) return b[i].rate;
  }
  return 0.10;
}

// Self-Employment Tax Calculator
window.calcSETax = function() {
  const netEarnings = parseFloat(document.getElementById('seIncome').value) || 0;
  const expenses = parseFloat(document.getElementById('seExpenses').value) || 0;
  const status = document.getElementById('seStatus').value;

  const netProfit = Math.max(0, netEarnings - expenses);
  const taxableBase = netProfit * 0.9235;
  const ssCap = 184500;
  const ssBase = Math.min(taxableBase, ssCap);
  const ssTax = ssBase * 0.124;
  const medicareTax = taxableBase * 0.029;
  let additionalMedicare = 0;
  const threshold = status === 'married' ? 250000 : 200000;
  if (taxableBase > threshold) {
    additionalMedicare = (taxableBase - threshold) * 0.009;
  }
  const totalSE = ssTax + medicareTax + additionalMedicare;
  const deductible = totalSE * 0.5;

  // income tax
  const stdDed = stdDeductions2026[status === 'married' ? 'married' : 'single'];
  const agi = netProfit - deductible;
  const taxableIncome = Math.max(0, agi - stdDed);
  const incomeTax = calcIncomeTax(taxableIncome, status === 'married' ? 'married' : 'single');
  const totalTax = totalSE + incomeTax;

  document.getElementById('seResNetProfit').textContent = fmt(Math.round(netProfit));
  document.getElementById('seResTaxableBase').textContent = fmt(Math.round(taxableBase));
  document.getElementById('seResSSTax').textContent = fmt(Math.round(ssTax));
  document.getElementById('seResMedicare').textContent = fmt(Math.round(medicareTax + additionalMedicare));
  document.getElementById('seResSETax').textContent = fmt(Math.round(totalSE));
  document.getElementById('seResDeductible').textContent = fmt(Math.round(deductible));
  document.getElementById('seResIncomeTax').textContent = fmt(Math.round(incomeTax));
  document.getElementById('seResTotalTax').textContent = fmt(Math.round(totalTax));
};

// Capital Gains Calculator
window.calcCapGains = function() {
  const purchasePrice = parseFloat(document.getElementById('cgPurchase').value) || 0;
  const salePrice = parseFloat(document.getElementById('cgSale').value) || 0;
  const holdingPeriod = document.getElementById('cgHolding').value;
  const income = parseFloat(document.getElementById('cgIncome').value) || 0;
  const status = document.getElementById('cgStatus').value;

  const gain = salePrice - purchasePrice;
  let taxRate = 0;
  let tax = 0;

  if (gain <= 0) {
    document.getElementById('cgResGain').textContent = fmt(Math.round(gain));
    document.getElementById('cgResTaxRate').textContent = '0%';
    document.getElementById('cgResTax').textContent = '$0';
    document.getElementById('cgResNet').textContent = fmt(Math.round(salePrice - purchasePrice));
    return;
  }

  if (holdingPeriod === 'short') {
    const stdDed = stdDeductions2026[status];
    const taxableIncome = Math.max(0, income - stdDed);
    taxRate = getMarginalRate(taxableIncome + gain, status);
    tax = gain * taxRate;
  } else {
    // Long-term rates
    const ltBrackets = {
      single: [ {max: 49450, rate: 0}, {max: 545500, rate: 0.15}, {max: Infinity, rate: 0.20} ],
      married: [ {max: 98900, rate: 0}, {max: 613700, rate: 0.15}, {max: Infinity, rate: 0.20} ],
      hoh: [ {max: 66200, rate: 0}, {max: 579600, rate: 0.15}, {max: Infinity, rate: 0.20} ],
      mfs: [ {max: 49450, rate: 0}, {max: 306850, rate: 0.15}, {max: Infinity, rate: 0.20} ]
    };
    const b = ltBrackets[status];
    const taxableIncome = income + gain;
    for (const bracket of b) {
      if (taxableIncome <= bracket.max) { taxRate = bracket.rate; break; }
    }
    tax = gain * taxRate;

    // NIIT check
    const niitThreshold = (status === 'married') ? 250000 : 200000;
    if (income + gain > niitThreshold) {
      const niitIncome = Math.min(gain, income + gain - niitThreshold);
      tax += niitIncome * 0.038;
    }
  }

  const netGain = gain - tax;
  document.getElementById('cgResGain').textContent = fmt(Math.round(gain));
  document.getElementById('cgResTaxRate').textContent = fmtPct(taxRate * 100);
  document.getElementById('cgResTax').textContent = fmt(Math.round(tax));
  document.getElementById('cgResNet').textContent = fmt(Math.round(netGain));
};

// ---- FILING STATUS DECISION TREE ----
const decisionTree = {
  start: {
    question: 'Were you legally married as of December 31 of the tax year?',
    options: [
      { label: 'Yes', next: 'married' },
      { label: 'No', next: 'single_check' }
    ]
  },
  married: {
    question: 'Do you and your spouse want to file a joint return?',
    options: [
      { label: 'Yes', next: 'result_mfj' },
      { label: 'No', next: 'married_separate' }
    ]
  },
  married_separate: {
    question: 'Did you live apart from your spouse for the last 6 months of the year and pay more than half the cost of maintaining a home for a qualifying child?',
    options: [
      { label: 'Yes', next: 'result_hoh' },
      { label: 'No', next: 'result_mfs' }
    ]
  },
  single_check: {
    question: 'Did your spouse pass away during the tax year or the prior year?',
    options: [
      { label: 'Yes, this tax year', next: 'result_mfj_widow' },
      { label: 'Yes, prior year (and I have a dependent child)', next: 'result_qss' },
      { label: 'No', next: 'hoh_check' }
    ]
  },
  hoh_check: {
    question: 'Did you pay more than half the cost of keeping up a home for a qualifying person (child, parent, or other dependent)?',
    options: [
      { label: 'Yes', next: 'result_hoh' },
      { label: 'No', next: 'result_single' }
    ]
  },
  result_mfj: {
    result: 'Married Filing Jointly',
    description: 'You and your spouse combine income and deductions on one return. This typically results in the lowest tax liability for most married couples, with the widest tax brackets and highest standard deduction ($32,200 for 2026).'
  },
  result_mfs: {
    result: 'Married Filing Separately',
    description: 'You and your spouse each file your own return. This may be beneficial if one spouse has significant medical expenses or if you want to separate tax liability. However, you lose access to several credits and deductions.'
  },
  result_hoh: {
    result: 'Head of Household',
    description: 'You qualify for wider tax brackets and a higher standard deduction ($24,150 for 2026) than single filers. This status is for unmarried individuals who pay more than half the cost of maintaining a home for a qualifying person.'
  },
  result_single: {
    result: 'Single',
    description: 'The standard filing status for unmarried individuals without dependents. Your standard deduction for 2026 is $16,100.'
  },
  result_mfj_widow: {
    result: 'Married Filing Jointly',
    description: 'In the year your spouse passed away, you can still file a joint return with the same benefits — the widest brackets and highest standard deduction ($32,200).'
  },
  result_qss: {
    result: 'Qualifying Surviving Spouse',
    description: 'For up to two years after your spouse\'s death, you may use the same tax brackets and standard deduction as Married Filing Jointly if you have a dependent child, giving you time to adjust financially.'
  }
};

let dtHistory = [];

function renderDT(nodeKey) {
  const node = decisionTree[nodeKey];
  const container = document.getElementById('decisionTreeContainer');
  if (!container) return;

  if (node.result) {
    container.innerHTML = `
      <div class="dt-result" style="display:block;">
        <h3>Your Recommended Filing Status:</h3>
        <h3 style="font-size:1.5rem; margin-bottom:12px;">${node.result}</h3>
        <p>${node.description}</p>
        <button class="dt-restart" onclick="restartDT()">Start Over</button>
      </div>
    `;
    return;
  }

  const steps = Object.keys(decisionTree).filter(k => !decisionTree[k].result).length;
  const progress = dtHistory.length;
  let dots = '';
  for (let i = 0; i < steps; i++) {
    const cls = i < progress ? 'completed' : (i === progress ? 'active' : '');
    dots += `<div class="dot-step ${cls}"></div>`;
  }

  const opts = node.options.map(o =>
    `<button class="dt-option" onclick="dtAnswer('${o.next}')">${o.label}</button>`
  ).join('');

  container.innerHTML = `
    <div class="dt-progress">${dots}</div>
    <div class="dt-question">${node.question}</div>
    <div class="dt-options">${opts}</div>
    ${dtHistory.length > 0 ? '<div style="text-align:center;margin-top:16px;"><button class="dt-restart" style="background:var(--gray-400);" onclick="dtBack()">← Back</button></div>' : ''}
  `;
}

window.dtAnswer = function(next) {
  dtHistory.push(next);
  renderDT(next);
};

window.dtBack = function() {
  dtHistory.pop();
  const key = dtHistory.length > 0 ? dtHistory[dtHistory.length - 1] : 'start';
  if (dtHistory.length === 0) {
    renderDT('start');
  } else {
    dtHistory.pop();
    renderDT(key);
  }
};

window.restartDT = function() {
  dtHistory = [];
  renderDT('start');
};

// Initialize
renderDT('start');

// ---- GLOSSARY SEARCH ----
const glossarySearch = document.getElementById('glossarySearch');
if (glossarySearch) {
  glossarySearch.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.glossary-item').forEach(item => {
      const term = item.querySelector('.glossary-term').textContent.toLowerCase();
      const def = item.querySelector('.glossary-def').textContent.toLowerCase();
      item.classList.toggle('hidden', !(term.includes(q) || def.includes(q)));
    });
  });
}

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    // Close all others
    document.querySelectorAll('.faq-item').forEach(fi => {
      fi.classList.remove('open');
      fi.querySelector('.faq-answer').style.maxHeight = '0';
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ---- BACK TO TOP ----
document.querySelector('.back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

})();
