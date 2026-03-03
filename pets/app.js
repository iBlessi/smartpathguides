/* ===================================================
   PawSmart - Interactive Features & Navigation
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initScrollAnimations();
  initGuideCards();
  initFAQ();
  initFoodCalculator();
  initInsuranceCalculator();
  initBackToTop();
  initCategoryTabs();
});

/* --- Sticky Nav with scroll effect --- */
function initNav() {
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });
}

/* --- Mobile Menu Toggle --- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
}

/* --- Scroll Animations --- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.01, rootMargin: '50px 0px 0px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Fallback: if JS loaded late, reveal all visible elements immediately
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('visible');
      }
    });
  }, 200);
}

/* --- Guide Card Expand/Collapse --- */
function initGuideCards() {
  document.querySelectorAll('.guide-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.getAttribute('data-guide');
      const detail = document.getElementById(targetId);
      if (detail) {
        // Close all other details
        document.querySelectorAll('.guide-detail.active').forEach(d => {
          if (d.id !== targetId) d.classList.remove('active');
        });
        detail.classList.toggle('active');
        if (detail.classList.contains('active')) {
          setTimeout(() => {
            detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    });
  });

  // Close buttons
  document.querySelectorAll('.guide-detail .close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.closest('.guide-detail').classList.remove('active');
    });
  });
}

/* --- FAQ Accordion --- */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* --- Category Tab Filtering --- */
function initCategoryTabs() {
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const section = tab.closest('section');
      const category = tab.getAttribute('data-category');

      // Update active tab
      section.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show/hide cards
      section.querySelectorAll('.guide-card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      // Close any open details
      section.querySelectorAll('.guide-detail.active').forEach(d => d.classList.remove('active'));
    });
  });
}

/* --- Pet Food Cost Calculator --- */
function initFoodCalculator() {
  const form = document.getElementById('food-calc-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const petType = form.querySelector('[name="pet-type"]').value;
    const petSize = form.querySelector('[name="pet-size"]').value;
    const foodQuality = form.querySelector('[name="food-quality"]').value;

    // Monthly food costs (based on research data)
    const costs = {
      dog: {
        small:  { budget: 35, mid: 55, premium: 90 },
        medium: { budget: 50, mid: 80, premium: 130 },
        large:  { budget: 70, mid: 110, premium: 175 },
        giant:  { budget: 95, mid: 145, premium: 225 }
      },
      cat: {
        small:  { budget: 25, mid: 40, premium: 65 },
        medium: { budget: 30, mid: 50, premium: 80 },
        large:  { budget: 40, mid: 60, premium: 100 },
        giant:  { budget: 40, mid: 60, premium: 100 }
      }
    };

    const treatsMultiplier = { budget: 1.12, mid: 1.18, premium: 1.25 };

    const monthlyFood = costs[petType]?.[petSize]?.[foodQuality] || 60;
    const monthlyWithTreats = Math.round(monthlyFood * (treatsMultiplier[foodQuality] || 1.15));
    const annualCost = monthlyWithTreats * 12;
    const fiveYear = annualCost * 5;

    const result = document.getElementById('food-calc-result');
    result.classList.add('visible');
    result.innerHTML = `
      <h4>🦴 Estimated Food Costs</h4>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Monthly (Food Only)</div>
          <div class="result-value">$${monthlyFood}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Monthly (+ Treats)</div>
          <div class="result-value teal">$${monthlyWithTreats}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Annual Cost</div>
          <div class="result-value purple">$${annualCost.toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">5-Year Total</div>
          <div class="result-value">$${fiveYear.toLocaleString()}</div>
        </div>
      </div>
      <p class="result-note">*Estimates based on average 2026 pet food prices. Actual costs vary by brand and location.</p>
    `;
  });
}

/* --- Pet Insurance Worth-It Calculator --- */
function initInsuranceCalculator() {
  const form = document.getElementById('insurance-calc-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const petType = form.querySelector('[name="ins-pet-type"]').value;
    const petAge = parseInt(form.querySelector('[name="pet-age"]').value);
    const breedSize = form.querySelector('[name="breed-size"]').value;
    const healthHistory = form.querySelector('[name="health-history"]').value;

    // Average annual vet costs (without insurance)
    const baseCosts = {
      dog: { small: 800, medium: 950, large: 1100, giant: 1300 },
      cat: { small: 600, medium: 700, large: 800, giant: 800 }
    };

    // Age multiplier
    const ageMultiplier = petAge <= 1 ? 1.4 :
                          petAge <= 3 ? 0.8 :
                          petAge <= 7 ? 1.0 :
                          petAge <= 10 ? 1.5 : 2.0;

    // Health history multiplier
    const healthMultiplier = {
      excellent: 0.7,
      good: 1.0,
      fair: 1.4,
      poor: 2.0
    };

    const baseAnnualCost = baseCosts[petType]?.[breedSize] || 900;
    const expectedAnnualVet = Math.round(baseAnnualCost * ageMultiplier * (healthMultiplier[healthHistory] || 1));

    // Emergency probability cost (average over time)
    const emergencyRisk = petAge > 7 ? 0.35 : petAge > 3 ? 0.15 : 0.2;
    const avgEmergencyCost = petType === 'dog' ? 3200 : 2600;
    const annualizedEmergency = Math.round(avgEmergencyCost * emergencyRisk);

    const totalExpected = expectedAnnualVet + annualizedEmergency;

    // Insurance cost estimate
    const monthlyPremium = petType === 'dog' ?
      (breedSize === 'small' ? 32 : breedSize === 'medium' ? 42 : breedSize === 'large' ? 55 : 65) :
      (breedSize === 'small' ? 18 : 25);

    const premiumAgeAdjust = petAge > 7 ? 1.6 : petAge > 3 ? 1.2 : 1.0;
    const adjustedMonthly = Math.round(monthlyPremium * premiumAgeAdjust);
    const annualPremium = adjustedMonthly * 12;

    // With 80% reimbursement, $250 deductible
    const reimbursement = Math.max(0, (totalExpected - 250) * 0.8);
    const netWithInsurance = annualPremium + totalExpected - reimbursement;
    const savings = totalExpected - netWithInsurance;
    const worthIt = savings > 0;

    const result = document.getElementById('insurance-calc-result');
    result.classList.add('visible');
    result.innerHTML = `
      <h4>${worthIt ? '✅ Insurance Likely Worth It' : '🤔 Insurance May Not Save Money'}</h4>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Expected Annual Vet Costs</div>
          <div class="result-value">$${totalExpected.toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Est. Monthly Premium</div>
          <div class="result-value teal">$${adjustedMonthly}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Annual Premium Cost</div>
          <div class="result-value purple">$${annualPremium.toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">${worthIt ? 'Potential Savings' : 'Cost Difference'}</div>
          <div class="result-value ${worthIt ? 'teal' : ''}">${worthIt ? '+' : '-'}$${Math.abs(savings).toLocaleString()}/yr</div>
        </div>
      </div>
      <p class="result-note">
        ${worthIt ?
          '*Based on expected costs, pet insurance could save you money — especially for emergency coverage. We recommend getting quotes from at least 3 providers.' :
          '*Insurance may cost more than expected vet bills in a typical year, but still provides valuable peace of mind for unexpected emergencies that can cost $3,000–$10,000+.'
        }
      </p>
    `;
  });
}

/* --- Back to Top --- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
