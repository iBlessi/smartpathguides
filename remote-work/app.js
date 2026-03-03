/* ===== WorkFlow App.js ===== */
(function() {
  'use strict';

  // ===== NAV SCROLL EFFECT =====
  const nav = document.getElementById('main-nav');
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const y = window.scrollY;
    if (y > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = y;
  }, { passive: true });

  // ===== MOBILE MENU =====
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      this.classList.toggle('active');
    });
    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // ===== TOOL CARD EXPAND/COLLAPSE =====
  document.querySelectorAll('.tool-card-header').forEach(function(header) {
    header.addEventListener('click', function() {
      const card = this.closest('.tool-card');
      const wasOpen = card.classList.contains('open');
      // Close all
      document.querySelectorAll('.tool-card.open').forEach(function(c) {
        c.classList.remove('open');
      });
      // Toggle clicked
      if (!wasOpen) {
        card.classList.add('open');
        // Scroll into view
        setTimeout(function() {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  });

  // ===== CATEGORY FILTER PILLS =====
  const pills = document.querySelectorAll('.pill');
  const toolCards = document.querySelectorAll('.tool-card');

  pills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      pills.forEach(function(p) { p.classList.remove('active'); });
      this.classList.add('active');
      const cat = this.dataset.cat;

      toolCards.forEach(function(card) {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===== CALCULATOR =====
  // Tab switching
  const calcTabs = document.querySelectorAll('.calc-tab');
  const calcPanels = document.querySelectorAll('.calc-panel');

  calcTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      calcTabs.forEach(function(t) { t.classList.remove('active'); });
      calcPanels.forEach(function(p) { p.classList.remove('active'); });
      this.classList.add('active');
      var method = this.dataset.method;
      document.getElementById('calc-' + method).classList.add('active');
    });
  });

  // Simplified method
  var simplifiedBtn = document.getElementById('calc-simplified-btn');
  if (simplifiedBtn) {
    simplifiedBtn.addEventListener('click', function() {
      var sqft = parseFloat(document.getElementById('sqft').value) || 0;
      sqft = Math.min(sqft, 300);
      sqft = Math.max(sqft, 0);
      var deduction = sqft * 5;
      var resultEl = document.getElementById('simplified-result');

      if (sqft <= 0) {
        resultEl.innerHTML = '<div class="calc-result-card"><p class="result-label" style="color:var(--text-muted)">Please enter your office square footage.</p></div>';
        return;
      }

      resultEl.innerHTML =
        '<div class="calc-result-card">' +
          '<div class="result-amount">$' + deduction.toLocaleString() + '</div>' +
          '<div class="result-label">Estimated Annual Deduction</div>' +
          '<div class="result-breakdown">' +
            sqft + ' sq ft &times; $5/sq ft = <strong>$' + deduction.toLocaleString() + '</strong><br>' +
            'Maximum allowed: $1,500 (300 sq ft)' +
          '</div>' +
        '</div>';
    });
  }

  // Regular method
  var regularBtn = document.getElementById('calc-regular-btn');
  if (regularBtn) {
    regularBtn.addEventListener('click', function() {
      var homeSqft = parseFloat(document.getElementById('home-sqft').value) || 0;
      var officeSqft = parseFloat(document.getElementById('office-sqft').value) || 0;
      var rent = parseFloat(document.getElementById('rent').value) || 0;
      var utilities = parseFloat(document.getElementById('utilities').value) || 0;
      var insurance = parseFloat(document.getElementById('insurance').value) || 0;
      var internet = parseFloat(document.getElementById('internet').value) || 0;
      var repairs = parseFloat(document.getElementById('repairs').value) || 0;
      var equipment = parseFloat(document.getElementById('equipment').value) || 0;
      var resultEl = document.getElementById('regular-result');

      if (homeSqft <= 0 || officeSqft <= 0) {
        resultEl.innerHTML = '<div class="calc-result-card"><p class="result-label" style="color:var(--text-muted)">Please enter both your total home and office square footage.</p></div>';
        return;
      }

      var percentage = (officeSqft / homeSqft) * 100;
      percentage = Math.min(percentage, 100);
      var ratio = officeSqft / homeSqft;

      var indirectTotal = rent + utilities + insurance + repairs;
      var indirectDeduction = indirectTotal * ratio;
      var directDeduction = (internet * ratio) + equipment;
      var totalDeduction = indirectDeduction + directDeduction;

      resultEl.innerHTML =
        '<div class="calc-result-card">' +
          '<div class="result-amount">$' + totalDeduction.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + '</div>' +
          '<div class="result-label">Estimated Annual Deduction</div>' +
          '<div class="result-breakdown">' +
            '<strong>Business Use Percentage:</strong> ' + percentage.toFixed(1) + '% (' + officeSqft + ' / ' + homeSqft + ' sq ft)<br><br>' +
            '<strong>Indirect Expenses (prorated):</strong><br>' +
            '&nbsp;&nbsp;Rent/Mortgage Interest: $' + (rent * ratio).toLocaleString(undefined, {maximumFractionDigits: 0}) + '<br>' +
            '&nbsp;&nbsp;Utilities: $' + (utilities * ratio).toLocaleString(undefined, {maximumFractionDigits: 0}) + '<br>' +
            '&nbsp;&nbsp;Insurance: $' + (insurance * ratio).toLocaleString(undefined, {maximumFractionDigits: 0}) + '<br>' +
            '&nbsp;&nbsp;Repairs/Maintenance: $' + (repairs * ratio).toLocaleString(undefined, {maximumFractionDigits: 0}) + '<br><br>' +
            '<strong>Direct Expenses:</strong><br>' +
            '&nbsp;&nbsp;Internet (prorated): $' + (internet * ratio).toLocaleString(undefined, {maximumFractionDigits: 0}) + '<br>' +
            '&nbsp;&nbsp;Office Equipment: $' + equipment.toLocaleString(undefined, {maximumFractionDigits: 0}) + '<br><br>' +
            '<em>Compare with simplified method ($' + (Math.min(officeSqft, 300) * 5).toLocaleString() + ') to see which is better for you.</em>' +
          '</div>' +
        '</div>';
    });
  }

  // ===== SCROLL ANIMATIONS =====
  // Add animate-on-scroll class to key elements
  var animateTargets = document.querySelectorAll('.tool-card, .guide-card, .faq-item, .glossary-item');
  animateTargets.forEach(function(el) {
    el.classList.add('animate-on-scroll');
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });

  // ===== SMOOTH HASH NAVIGATION =====
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash
        history.pushState(null, null, targetId);
      }
    });
  });

  // ===== ACTIVE NAV HIGHLIGHTING =====
  var sections = document.querySelectorAll('section[id]');
  var navLinksAll = document.querySelectorAll('.nav-link');

  function highlightNav() {
    var scrollPos = window.scrollY + 100;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinksAll.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

})();
