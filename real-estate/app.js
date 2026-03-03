/* ============================
   PropertyMind - JavaScript
   ============================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navigation scroll effect ---
  const nav = document.querySelector('.nav');
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Mobile Menu ---
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });

  // --- Guide card expand/collapse ---
  const guidesGrid = document.getElementById('guides-grid');
  const guideArticles = document.querySelectorAll('.guide-article');
  
  document.querySelectorAll('.guide-card').forEach(card => {
    card.addEventListener('click', () => {
      const guideId = card.dataset.guide;
      showGuide(guideId);
    });
  });

  function showGuide(guideId) {
    const article = document.getElementById('guide-' + guideId);
    if (!article) return;
    
    // Hide cards grid
    guidesGrid.style.display = 'none';
    
    // Hide all articles, show target
    guideArticles.forEach(a => a.classList.remove('active'));
    article.classList.add('active');
    
    // Scroll to guide section
    document.getElementById('guides').scrollIntoView({ behavior: 'smooth' });
  }

  // Back buttons
  document.querySelectorAll('.guide-article-back').forEach(btn => {
    btn.addEventListener('click', () => {
      guideArticles.forEach(a => a.classList.remove('active'));
      guidesGrid.style.display = '';
    });
  });

  // Guide nav buttons (prev/next)
  document.querySelectorAll('.guide-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target) {
        guideArticles.forEach(a => a.classList.remove('active'));
        showGuide(target);
      }
    });
  });

  // --- Rental Property ROI Calculator ---
  document.getElementById('calc-roi-btn').addEventListener('click', () => {
    const price = parseFloat(document.getElementById('roi-price').value) || 0;
    const down = parseFloat(document.getElementById('roi-down').value) || 0;
    const rent = parseFloat(document.getElementById('roi-rent').value) || 0;
    const expenses = parseFloat(document.getElementById('roi-expenses').value) || 0;
    const rate = parseFloat(document.getElementById('roi-rate').value) || 0;

    const loanAmount = price - down;
    const monthlyRate = (rate / 100) / 12;
    const numPayments = 30 * 12;
    let monthlyMortgage = 0;
    if (monthlyRate > 0 && loanAmount > 0) {
      monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    const monthlyCashFlow = rent - expenses - monthlyMortgage;
    const annualCashFlow = monthlyCashFlow * 12;
    const cashOnCash = down > 0 ? (annualCashFlow / down) * 100 : 0;
    const noi = (rent - expenses) * 12;
    const capRate = price > 0 ? (noi / price) * 100 : 0;
    const roi = down > 0 ? (annualCashFlow / down) * 100 : 0;

    document.getElementById('roi-mortgage').textContent = '$' + monthlyMortgage.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('roi-cashflow').textContent = '$' + monthlyCashFlow.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('roi-cashflow').className = 'calc-result-value ' + (monthlyCashFlow >= 0 ? 'positive' : 'negative');
    document.getElementById('roi-annual').textContent = '$' + annualCashFlow.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('roi-annual').className = 'calc-result-value ' + (annualCashFlow >= 0 ? 'positive' : 'negative');
    document.getElementById('roi-coc').textContent = cashOnCash.toFixed(2) + '%';
    document.getElementById('roi-caprate').textContent = capRate.toFixed(2) + '%';

    document.getElementById('roi-results').classList.add('show');
  });

  // --- Mortgage Affordability Calculator ---
  document.getElementById('calc-mortgage-btn').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('mort-income').value) || 0;
    const debt = parseFloat(document.getElementById('mort-debt').value) || 0;
    const downPct = parseFloat(document.getElementById('mort-down').value) || 20;
    const rate = parseFloat(document.getElementById('mort-rate').value) || 0;
    const term = parseFloat(document.getElementById('mort-term').value) || 30;

    const monthlyIncome = income / 12;
    const maxDTI = 0.36;
    const maxHousingPayment = (monthlyIncome * maxDTI) - debt;

    const monthlyRate = (rate / 100) / 12;
    const numPayments = term * 12;
    let maxLoan = 0;
    if (monthlyRate > 0 && maxHousingPayment > 0) {
      maxLoan = maxHousingPayment * (Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
    }

    const maxPrice = maxLoan / (1 - downPct / 100);
    const downAmount = maxPrice * (downPct / 100);

    document.getElementById('mort-maxpayment').textContent = '$' + Math.max(0, maxHousingPayment).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '/mo';
    document.getElementById('mort-maxloan').textContent = '$' + Math.max(0, maxLoan).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('mort-maxprice').textContent = '$' + Math.max(0, maxPrice).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('mort-downamount').textContent = '$' + Math.max(0, downAmount).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    document.getElementById('mort-results').classList.add('show');
  });

  // --- Cap Rate Calculator ---
  document.getElementById('calc-cap-btn').addEventListener('click', () => {
    const price = parseFloat(document.getElementById('cap-price').value) || 0;
    const grossRent = parseFloat(document.getElementById('cap-rent').value) || 0;
    const opExpenses = parseFloat(document.getElementById('cap-expenses').value) || 0;
    const vacancy = parseFloat(document.getElementById('cap-vacancy').value) || 0;

    const effectiveIncome = grossRent * (1 - vacancy / 100);
    const noi = effectiveIncome - opExpenses;
    const capRate = price > 0 ? (noi / price) * 100 : 0;
    const grm = grossRent > 0 ? price / grossRent : 0;

    document.getElementById('cap-noi').textContent = '$' + noi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('cap-noi').className = 'calc-result-value ' + (noi >= 0 ? 'positive' : 'negative');
    document.getElementById('cap-caprate').textContent = capRate.toFixed(2) + '%';
    document.getElementById('cap-effective').textContent = '$' + effectiveIncome.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById('cap-grm').textContent = grm.toFixed(2);

    document.getElementById('cap-results').classList.add('show');
  });

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('open');
        faq.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- Comparison Tabs ---
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabGroup = btn.closest('.tab-nav').dataset.group;
      const targetTab = btn.dataset.tab;
      
      // Update buttons
      btn.closest('.tab-nav').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update panels
      document.querySelectorAll(`.tab-panel[data-group="${tabGroup}"]`).forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // --- Scroll Animation ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });

  // --- Smooth scroll for hash links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
