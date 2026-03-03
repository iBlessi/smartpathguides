/* ============================================
   SmartCalc Finance — Calculator Logic
   ============================================ */

// --- Utility Functions ---
function parseNum(str) {
    if (!str) return 0;
    return parseFloat(String(str).replace(/[^0-9.\-]/g, '')) || 0;
}

function formatCurrency(n) {
    if (isNaN(n) || !isFinite(n)) return '$0.00';
    const neg = n < 0;
    const abs = Math.abs(n);
    const formatted = abs.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return (neg ? '-$' : '$') + formatted;
}

function formatCurrencyShort(n) {
    if (isNaN(n) || !isFinite(n)) return '$0';
    const neg = n < 0;
    const abs = Math.abs(n);
    if (abs >= 1000000) {
        return (neg ? '-$' : '$') + (abs / 1000000).toFixed(1) + 'M';
    }
    if (abs >= 1000) {
        return (neg ? '-$' : '$') + (abs / 1000).toFixed(0) + 'K';
    }
    return formatCurrency(n);
}

function formatPct(n) {
    if (isNaN(n) || !isFinite(n)) return '0%';
    return n.toFixed(1) + '%';
}

function getVal(id) {
    return parseNum(document.getElementById(id).value);
}

function show(id) {
    const el = document.getElementById(id);
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function setText(id, text) {
    document.getElementById(id).textContent = text;
}

// --- Mobile Nav Toggle ---
document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('active');
});

document.querySelectorAll('.main-nav a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('mainNav').classList.remove('active');
    });
});

let ciChartInstance = null;
let retChartInstance = null;

function calcMortgage() {
    const homePrice = getVal('mortgageLoan');
    const downPayment = getVal('mortgageDown');
    const rate = getVal('mortgageRate');
    const termYears = getVal('mortgageTerm');
    const principal = homePrice - downPayment;
    if (principal <= 0 || rate <= 0 || termYears <= 0) { alert('Please enter valid values for all fields.'); return; }
    const monthlyRate = (rate / 100) / 12;
    const numPayments = termYears * 12;
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalCost = monthlyPayment * numPayments;
    const totalInterest = totalCost - principal;
    setText('mortgageMonthly', formatCurrency(monthlyPayment));
    setText('mortgageTotalInterest', formatCurrency(totalInterest));
    setText('mortgageTotalCost', formatCurrency(totalCost));
    setText('mortgageLoanAmt', formatCurrency(principal));
    const tbody = document.querySelector('#amortTable tbody');
    tbody.innerHTML = '';
    let balance = principal;
    const months = Math.min(12, numPayments);
    for (let i = 1; i <= months; i++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;
        if (balance < 0) balance = 0;
        const row = document.createElement('tr');
        row.innerHTML = '<td>' + i + '</td><td>' + formatCurrency(monthlyPayment) + '</td><td>' + formatCurrency(principalPayment) + '</td><td>' + formatCurrency(interestPayment) + '</td><td>' + formatCurrency(balance) + '</td>';
        tbody.appendChild(row);
    }
    show('mortgageResults');
}

function calcCompoundInterest() {
    const principal = getVal('ciPrincipal');
    const monthlyContrib = getVal('ciContribution');
    const annualRate = getVal('ciRate');
    const years = getVal('ciYears');
    const frequency = getVal('ciFreq');
    if (years <= 0) { alert('Please enter a time period greater than 0.'); return; }
    const r = annualRate / 100;
    const n = frequency;
    const ratePerPeriod = r / n;
    const totalPeriods = n * years;
    const fvLump = principal * Math.pow(1 + ratePerPeriod, totalPeriods);
    const contribPerPeriod = monthlyContrib * (12 / n);
    let fvContrib = ratePerPeriod > 0 ? contribPerPeriod * ((Math.pow(1 + ratePerPeriod, totalPeriods) - 1) / ratePerPeriod) : contribPerPeriod * totalPeriods;
    const futureValue = fvLump + fvContrib;
    const totalContributions = principal + (monthlyContrib * 12 * years);
    const interestEarned = futureValue - totalContributions;
    setText('ciFuture', formatCurrency(futureValue));
    setText('ciContribTotal', formatCurrency(totalContributions));
    setText('ciInterestEarned', formatCurrency(interestEarned));
    const labels = [], balanceData = [], contribData = [];
    for (let y = 0; y <= years; y++) {
        labels.push('Year ' + y);
        const periods = n * y;
        const bal = principal * Math.pow(1 + ratePerPeriod, periods) + (ratePerPeriod > 0 ? contribPerPeriod * ((Math.pow(1 + ratePerPeriod, periods) - 1) / ratePerPeriod) : contribPerPeriod * periods);
        balanceData.push(Math.round(bal));
        contribData.push(Math.round(principal + monthlyContrib * 12 * y));
    }
    if (ciChartInstance) ciChartInstance.destroy();
    const ctx = document.getElementById('ciChart').getContext('2d');
    ciChartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets: [{ label: 'Total Balance', data: balanceData, borderColor: '#c9a84c', backgroundColor: 'rgba(201,168,76,0.1)', fill: true, tension: 0.3, pointRadius: years > 20 ? 0 : 3, pointHoverRadius: 5, borderWidth: 2.5 }, { label: 'Total Contributions', data: contribData, borderColor: '#0a1628', backgroundColor: 'rgba(10,22,40,0.05)', fill: true, tension: 0.1, pointRadius: years > 20 ? 0 : 3, pointHoverRadius: 5, borderWidth: 2, borderDash: [5, 3] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { font: { family: "'Source Sans 3', sans-serif", size: 12 }, usePointStyle: true, padding: 20 } }, tooltip: { callbacks: { label: function(ctx) { return ctx.dataset.label + ': ' + formatCurrency(ctx.raw); } } } }, scales: { y: { ticks: { callback: function(val) { return formatCurrencyShort(val); }, font: { family: "'Source Sans 3', sans-serif", size: 11 } }, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { ticks: { font: { family: "'Source Sans 3', sans-serif", size: 11 }, maxTicksLimit: 10 }, grid: { display: false } } } }
    });
    show('ciResults');
}

function calcRetirement() {
    const currentAge = getVal('retAge');
    const retireAge = getVal('retRetireAge');
    const currentSavings = getVal('retSavings');
    const monthlyContrib = getVal('retMonthly');
    const annualReturn = getVal('retReturn');
    const yearsToRetirement = retireAge - currentAge;
    if (yearsToRetirement <= 0) { alert('Retirement age must be greater than your current age.'); return; }
    const monthlyRate = (annualReturn / 100) / 12;
    const totalMonths = yearsToRetirement * 12;
    const fvSavings = currentSavings * Math.pow(1 + monthlyRate, totalMonths);
    let fvContrib = monthlyRate > 0 ? monthlyContrib * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) : monthlyContrib * totalMonths;
    const totalFund = fvSavings + fvContrib;
    const totalContributions = currentSavings + (monthlyContrib * totalMonths);
    const investmentGrowth = totalFund - totalContributions;
    setText('retFund', formatCurrency(totalFund));
    setText('retContribs', formatCurrency(totalContributions));
    setText('retGrowth', formatCurrency(investmentGrowth));
    setText('retYears', yearsToRetirement + ' years');
    const labels = [], balanceData = [], contribLine = [];
    for (let y = 0; y <= yearsToRetirement; y++) {
        labels.push('Age ' + (currentAge + y));
        const months = y * 12;
        const bal = currentSavings * Math.pow(1 + monthlyRate, months) + (monthlyRate > 0 ? monthlyContrib * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) : monthlyContrib * months);
        balanceData.push(Math.round(bal));
        contribLine.push(Math.round(currentSavings + monthlyContrib * months));
    }
    if (retChartInstance) retChartInstance.destroy();
    const ctx = document.getElementById('retChart').getContext('2d');
    retChartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets: [{ label: 'Projected Balance', data: balanceData, borderColor: '#c9a84c', backgroundColor: 'rgba(201,168,76,0.1)', fill: true, tension: 0.3, pointRadius: yearsToRetirement > 20 ? 0 : 3, pointHoverRadius: 5, borderWidth: 2.5 }, { label: 'Total Contributions', data: contribLine, borderColor: '#0a1628', backgroundColor: 'rgba(10,22,40,0.05)', fill: true, tension: 0.1, pointRadius: yearsToRetirement > 20 ? 0 : 3, pointHoverRadius: 5, borderWidth: 2, borderDash: [5, 3] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { font: { family: "'Source Sans 3', sans-serif", size: 12 }, usePointStyle: true, padding: 20 } }, tooltip: { callbacks: { label: function(ctx) { return ctx.dataset.label + ': ' + formatCurrency(ctx.raw); } } } }, scales: { y: { ticks: { callback: function(val) { return formatCurrencyShort(val); }, font: { family: "'Source Sans 3', sans-serif", size: 11 } }, grid: { color: 'rgba(0,0,0,0.04)' } }, x: { ticks: { font: { family: "'Source Sans 3', sans-serif", size: 11 }, maxTicksLimit: 10 }, grid: { display: false } } } }
    });
    show('retResults');
}

function calcDebtPayoff() {
    const balance = getVal('debtBalance');
    const apr = getVal('debtAPR');
    const payment = getVal('debtPayment');
    if (balance <= 0 || apr <= 0 || payment <= 0) { alert('Please enter valid positive values for all fields.'); return; }
    const monthlyRate = (apr / 100) / 12;
    const minPayment = balance * monthlyRate;
    if (payment <= minPayment) { alert('Your monthly payment of ' + formatCurrency(payment) + ' is not enough to cover the monthly interest of ' + formatCurrency(minPayment) + '. Please increase your payment.'); return; }
    let remaining = balance, months = 0, totalInterest = 0;
    while (remaining > 0.01 && months < 600) {
        const interest = remaining * monthlyRate;
        totalInterest += interest;
        remaining = remaining + interest - payment;
        months++;
        if (remaining < 0) remaining = 0;
    }
    const totalPaid = balance + totalInterest;
    const now = new Date();
    const payoffDate = new Date(now.getFullYear(), now.getMonth() + months, 1);
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    setText('debtPayoffDate', monthNames[payoffDate.getMonth()] + ' ' + payoffDate.getFullYear());
    setText('debtMonths', months + (months === 1 ? ' month' : ' months'));
    setText('debtTotalInterest', formatCurrency(totalInterest));
    setText('debtTotalPaid', formatCurrency(totalPaid));
    show('debtResults');
}

function calcCarLoan() {
    const price = getVal('carPrice');
    const down = getVal('carDown');
    const rate = getVal('carRate');
    const termMonths = getVal('carTerm');
    const loanAmount = price - down;
    if (loanAmount <= 0 || rate <= 0 || termMonths <= 0) { alert('Please enter valid values for all fields.'); return; }
    const monthlyRate = (rate / 100) / 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    const totalCost = monthlyPayment * termMonths;
    const totalInterest = totalCost - loanAmount;
    setText('carMonthly', formatCurrency(monthlyPayment));
    setText('carLoanAmt', formatCurrency(loanAmount));
    setText('carTotalInterest', formatCurrency(totalInterest));
    setText('carTotalCost', formatCurrency(totalCost));
    show('carResults');
}

function calcBudget() {
    const income = getVal('budgetIncome');
    if (income <= 0) { alert('Please enter your monthly income.'); return; }
    const categories = [
        { id: 'budgetHousing', label: 'Housing', color: '#0a1628' },
        { id: 'budgetTransport', label: 'Transportation', color: '#1a2d52' },
        { id: 'budgetFood', label: 'Food & Groceries', color: '#2d4a7a' },
        { id: 'budgetUtilities', label: 'Utilities', color: '#4a6fa5' },
        { id: 'budgetInsurance', label: 'Insurance', color: '#6b8fc0' },
        { id: 'budgetDebt', label: 'Debt Payments', color: '#dc2626' },
        { id: 'budgetEntertain', label: 'Entertainment', color: '#c9a84c' },
        { id: 'budgetOther', label: 'Other', color: '#94a3b8' }
    ];
    let totalExpenses = 0;
    const expenseData = [];
    categories.forEach(function(cat) { const val = getVal(cat.id); totalExpenses += val; expenseData.push({ label: cat.label, amount: val, color: cat.color }); });
    const remaining = income - totalExpenses;
    const savingsRate = (remaining / income) * 100;
    setText('budgetRemaining', formatCurrency(remaining));
    setText('budgetSavingsRate', formatPct(savingsRate));
    setText('budgetTotalExpenses', formatCurrency(totalExpenses));
    document.getElementById('budgetRemaining').style.color = remaining >= 0 ? '#059669' : '#dc2626';
    const breakdown = document.getElementById('budgetBreakdown');
    breakdown.innerHTML = '';
    expenseData.forEach(function(item) {
        if (item.amount <= 0) return;
        const pct = (item.amount / income) * 100;
        const bar = document.createElement('div');
        bar.className = 'budget-bar';
        bar.innerHTML = '<span class="budget-bar-label">' + item.label + '</span><div class="budget-bar-track"><div class="budget-bar-fill" style="width:' + Math.min(pct,100) + '%;background:' + item.color + '">' + pct.toFixed(0) + '%</div></div><span class="budget-bar-amount">' + formatCurrency(item.amount) + '</span>';
        breakdown.appendChild(bar);
    });
    if (remaining > 0) {
        const savPct = (remaining / income) * 100;
        const bar = document.createElement('div');
        bar.className = 'budget-bar';
        bar.innerHTML = '<span class="budget-bar-label" style="color:#059669;font-weight:700">Savings</span><div class="budget-bar-track"><div class="budget-bar-fill" style="width:' + Math.min(savPct,100) + '%;background:linear-gradient(90deg,#059669,#10b981)">' + savPct.toFixed(0) + '%</div></div><span class="budget-bar-amount" style="color:#059669;font-weight:700">' + formatCurrency(remaining) + '</span>';
        breakdown.appendChild(bar);
    }
    show('budgetResults');
}

function calcNetWorth() {
    const assets = [getVal('nwCash'),getVal('nwInvestments'),getVal('nwRetirement'),getVal('nwRealEstate'),getVal('nwVehicles'),getVal('nwOtherAssets')];
    const liabilities = [getVal('nwMortgage'),getVal('nwStudentLoans'),getVal('nwCarLoan'),getVal('nwCreditCards'),getVal('nwOtherDebt')];
    const totalAssets = assets.reduce(function(a,b){return a+b;},0);
    const totalLiabilities = liabilities.reduce(function(a,b){return a+b;},0);
    const netWorth = totalAssets - totalLiabilities;
    setText('nwTotal', formatCurrency(netWorth));
    setText('nwTotalAssets', formatCurrency(totalAssets));
    setText('nwTotalLiabilities', formatCurrency(totalLiabilities));
    document.getElementById('nwTotal').style.color = netWorth >= 0 ? '#c9a84c' : '#f87171';
    show('nwResults');
}

function calcEmergencyFund() {
    const monthlyExpenses = getVal('efExpenses');
    const monthsCoverage = getVal('efMonths');
    const currentSavings = getVal('efCurrent');
    const monthlySavings = getVal('efMonthlySave');
    if (monthlyExpenses <= 0 || monthsCoverage <= 0) { alert('Please enter your monthly expenses and desired months of coverage.'); return; }
    const target = monthlyExpenses * monthsCoverage;
    const needed = Math.max(0, target - currentSavings);
    const progress = Math.min(100, (currentSavings / target) * 100);
    let monthsToGoal = 0;
    if (needed > 0 && monthlySavings > 0) { monthsToGoal = Math.ceil(needed / monthlySavings); }
    else if (needed > 0 && monthlySavings <= 0) { monthsToGoal = -1; }
    setText('efTarget', formatCurrency(target));
    setText('efNeeded', formatCurrency(needed));
    setText('efProgress', formatPct(progress));
    if (monthsToGoal === -1) { setText('efMonthsToGoal', '∞'); }
    else if (monthsToGoal === 0) { setText('efMonthsToGoal', 'Fully funded!'); }
    else {
        const yrs = Math.floor(monthsToGoal / 12);
        const mos = monthsToGoal % 12;
        let str = '';
        if (yrs > 0) str += yrs + (yrs === 1 ? ' year' : ' years');
        if (yrs > 0 && mos > 0) str += ', ';
        if (mos > 0) str += mos + (mos === 1 ? ' month' : ' months');
        setText('efMonthsToGoal', str);
    }
    const bar = document.getElementById('efProgressBar');
    bar.style.width = progress + '%';
    bar.textContent = progress.toFixed(0) + '%';
    show('efResults');
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
});

document.querySelectorAll('.input-prefix input, .input-suffix input').forEach(function(input) {
    if (input.closest('.input-suffix') && (input.parentElement.querySelector('span').textContent === '%' || input.parentElement.querySelector('span').textContent === 'years' || input.parentElement.querySelector('span').textContent === 'months')) { return; }
    input.addEventListener('blur', function() { const val = parseNum(this.value); if (val > 0) { this.value = val.toLocaleString('en-US', { maximumFractionDigits: 0 }); } });
    input.addEventListener('focus', function() { const val = parseNum(this.value); if (val > 0) { this.value = val; } });
});

(function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); } });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.calc-card, .guide-article, .faq-item, .calculator-section').forEach(function(el) { el.classList.add('animate-in'); observer.observe(el); });
})();

(function() {
    const style = document.createElement('style');
    style.textContent = '.animate-in{opacity:0;transform:translateY(20px);transition:opacity 0.5s ease,transform 0.5s ease}.animate-in.visible{opacity:1;transform:translateY(0)}';
    document.head.appendChild(style);
})();
