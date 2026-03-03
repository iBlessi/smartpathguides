/* ========================================
   AutoSmart - Car Buying Guide 2026
   Interactive JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // === Mobile Navigation ===
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // === Active Nav Highlight ===
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // === Back to Top Button ===
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === Scroll Animations ===
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // === Monthly Payment Calculator ===
  function calcMonthlyPayment() {
    const price = parseFloat(document.getElementById('calc-price').value) || 0;
    const down = parseFloat(document.getElementById('calc-down').value) || 0;
    const rate = parseFloat(document.getElementById('calc-rate').value) || 0;
    const term = parseInt(document.getElementById('calc-term').value) || 60;

    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    let monthly = 0;
    let totalInterest = 0;

    if (principal <= 0) {
      monthly = 0;
      totalInterest = 0;
    } else if (monthlyRate === 0) {
      monthly = principal / term;
      totalInterest = 0;
    } else {
      monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
      totalInterest = (monthly * term) - principal;
    }

    document.getElementById('result-monthly').textContent = '$' + monthly.toFixed(2);
    document.getElementById('result-total-paid').textContent = '$' + (monthly * term).toFixed(2);
    document.getElementById('result-total-interest').textContent = '$' + totalInterest.toFixed(2);
    document.getElementById('result-principal').textContent = '$' + principal.toFixed(2);
  }

  // Attach listeners to payment calculator
  ['calc-price', 'calc-down', 'calc-rate', 'calc-term'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcMonthlyPayment);
  });

  // Initial calculation
  calcMonthlyPayment();

  // === Lease vs Buy Calculator ===
  function calcLeaseBuy() {
    // Buy inputs
    const buyPrice = parseFloat(document.getElementById('buy-price').value) || 0;
    const buyDown = parseFloat(document.getElementById('buy-down').value) || 0;
    const buyRate = parseFloat(document.getElementById('buy-rate').value) || 0;
    const buyTerm = parseInt(document.getElementById('buy-term').value) || 60;

    // Lease inputs
    const leasePayment = parseFloat(document.getElementById('lease-payment').value) || 0;
    const leaseTerm = parseInt(document.getElementById('lease-term').value) || 36;
    const leaseDown = parseFloat(document.getElementById('lease-down').value) || 0;
    const leaseEndFee = parseFloat(document.getElementById('lease-end-fee').value) || 0;

    // Buy calculation
    const buyPrincipal = buyPrice - buyDown;
    const buyMonthlyRate = buyRate / 100 / 12;
    let buyMonthly = 0;
    if (buyPrincipal <= 0 || buyMonthlyRate === 0) {
      buyMonthly = buyPrincipal > 0 ? buyPrincipal / buyTerm : 0;
    } else {
      buyMonthly = buyPrincipal * (buyMonthlyRate * Math.pow(1 + buyMonthlyRate, buyTerm)) / (Math.pow(1 + buyMonthlyRate, buyTerm) - 1);
    }

    // 3-year and 5-year costs
    const buy3Year = buyDown + (buyMonthly * Math.min(36, buyTerm));
    const buy5Year = buyDown + (buyMonthly * Math.min(60, buyTerm));

    const lease3Year = leaseDown + (leasePayment * Math.min(36, leaseTerm)) + leaseEndFee;
    const lease5Year = leaseDown + (leasePayment * leaseTerm) + leaseEndFee;
    // For 5-year lease, assume new lease for remaining months
    const lease5YearFull = leaseTerm >= 60 ? lease5Year : leaseDown + (leasePayment * leaseTerm) + leaseEndFee + (leasePayment * (60 - leaseTerm)) + leaseEndFee;

    // Update results
    document.getElementById('lvb-buy-3yr').textContent = '$' + buy3Year.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('lvb-lease-3yr').textContent = '$' + lease3Year.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('lvb-buy-5yr').textContent = '$' + buy5Year.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('lvb-lease-5yr').textContent = '$' + lease5YearFull.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('lvb-buy-monthly').textContent = '$' + buyMonthly.toFixed(2);
    document.getElementById('lvb-lease-monthly').textContent = '$' + leasePayment.toFixed(2);

    // Highlight winner
    const cards3 = document.querySelectorAll('.lvb-3yr-card');
    const cards5 = document.querySelectorAll('.lvb-5yr-card');
    cards3.forEach(c => c.classList.remove('winner'));
    cards5.forEach(c => c.classList.remove('winner'));

    if (buy3Year < lease3Year && buy3Year > 0) {
      document.querySelector('.lvb-3yr-card.buy-card')?.classList.add('winner');
    } else if (lease3Year > 0) {
      document.querySelector('.lvb-3yr-card.lease-card')?.classList.add('winner');
    }

    if (buy5Year < lease5YearFull && buy5Year > 0) {
      document.querySelector('.lvb-5yr-card.buy-card')?.classList.add('winner');
    } else if (lease5YearFull > 0) {
      document.querySelector('.lvb-5yr-card.lease-card')?.classList.add('winner');
    }
  }

  ['buy-price', 'buy-down', 'buy-rate', 'buy-term', 'lease-payment', 'lease-term', 'lease-down', 'lease-end-fee'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcLeaseBuy);
  });
  calcLeaseBuy();

  // === Total Cost of Ownership Calculator ===
  function calcTCO() {
    const price = parseFloat(document.getElementById('tco-price').value) || 0;
    const insurance = parseFloat(document.getElementById('tco-insurance').value) || 0;
    const fuel = parseFloat(document.getElementById('tco-fuel').value) || 0;
    const maintenance = parseFloat(document.getElementById('tco-maintenance').value) || 0;
    const depreciation = parseFloat(document.getElementById('tco-depreciation').value) || 0;
    const years = parseInt(document.getElementById('tco-years').value) || 5;

    const totalInsurance = insurance * years;
    const totalFuel = fuel * years;
    const totalMaintenance = maintenance * years;
    const depreciationAmt = price * (depreciation / 100);
    const totalCost = price + totalInsurance + totalFuel + totalMaintenance;
    const costPerMonth = totalCost / (years * 12);
    const residualValue = price - depreciationAmt;

    document.getElementById('tco-total').textContent = '$' + totalCost.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('tco-per-month').textContent = '$' + costPerMonth.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('tco-insurance-total').textContent = '$' + totalInsurance.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('tco-fuel-total').textContent = '$' + totalFuel.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('tco-maint-total').textContent = '$' + totalMaintenance.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('tco-residual').textContent = '$' + residualValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Update bar chart
    const max = Math.max(price, totalInsurance, totalFuel, totalMaintenance, 1);
    updateBar('bar-purchase', price, max);
    updateBar('bar-insurance', totalInsurance, max);
    updateBar('bar-fuel', totalFuel, max);
    updateBar('bar-maint', totalMaintenance, max);
  }

  function updateBar(id, value, max) {
    const bar = document.getElementById(id);
    if (bar) {
      const pct = (value / max) * 100;
      bar.style.width = pct + '%';
    }
  }

  ['tco-price', 'tco-insurance', 'tco-fuel', 'tco-maintenance', 'tco-depreciation', 'tco-years'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcTCO);
  });
  calcTCO();

  // === Interactive Checklist ===
  const checklistItems = document.querySelectorAll('.checklist-item');
  let checkedCount = 0;
  const totalItems = checklistItems.length;

  function updateProgress() {
    checkedCount = document.querySelectorAll('.checklist-item.checked').length;
    const pct = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;
    const bar = document.querySelector('.progress-bar-inner');
    const text = document.querySelector('.progress-text');
    if (bar) bar.style.width = pct + '%';
    if (text) text.textContent = checkedCount + ' of ' + totalItems + ' steps completed (' + Math.round(pct) + '%)';
  }

  checklistItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      updateProgress();
    });
  });
  updateProgress();

  // === FAQ Accordion ===
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(fi => fi.classList.remove('open'));
      // Open clicked if wasn't open
      if (!isOpen) item.classList.add('open');
    });
  });

  // === Smooth scroll for category cards ===
  document.querySelectorAll('.cat-card[data-target]').forEach(card => {
    card.addEventListener('click', () => {
      const target = document.querySelector(card.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // === Number counter animation for hero stats ===
  function animateCounters() {
    document.querySelectorAll('.stat-value[data-target]').forEach(el => {
      const target = el.dataset.target;
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const numTarget = parseFloat(target);
      const duration = 1500;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = numTarget * eased;

        if (target.includes('.')) {
          el.textContent = prefix + current.toFixed(1) + suffix;
        } else {
          el.textContent = prefix + Math.round(current).toLocaleString() + suffix;
        }

        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  // Trigger counter animation when hero is visible
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        heroObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) heroObserver.observe(heroStats);

});

