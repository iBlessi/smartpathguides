/* ===================================================
   KnowYourRights.guide — Interactive Features
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Smooth Scroll Navigation ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile nav
        document.querySelector('.nav-links')?.classList.remove('open');
        document.querySelector('.mobile-toggle')?.classList.remove('active');
      }
    });
  });

  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // --- Scroll Effects ---
  const nav = document.querySelector('.main-nav');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Nav shadow on scroll
    if (nav) {
      nav.classList.toggle('scrolled', scrollY > 50);
    }

    // Back to top visibility
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 600);
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Intersection Observer for Animations ---
  const animateEls = document.querySelectorAll('.animate-in');
  if (animateEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animateEls.forEach(el => observer.observe(el));
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Open clicked if wasn't open
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // --- Glossary Search ---
  const glossarySearch = document.getElementById('glossary-search');
  if (glossarySearch) {
    glossarySearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.glossary-term').forEach(term => {
        const text = term.textContent.toLowerCase();
        term.classList.toggle('hidden', query && !text.includes(query));
      });
    });
  }

  // --- "Do I Need a Lawyer?" Quiz ---
  const quizData = {
    questions: [
      {
        text: "What type of legal situation are you dealing with?",
        options: [
          { text: "Landlord/tenant dispute", value: "tenant", weight: 1 },
          { text: "Employment issue (fired, discrimination, unpaid wages)", value: "employment", weight: 2 },
          { text: "Consumer complaint or debt collection", value: "consumer", weight: 1 },
          { text: "Traffic violation or DUI", value: "traffic", weight: 2 },
          { text: "Divorce or child custody", value: "family", weight: 3 },
          { text: "Personal injury or accident", value: "injury", weight: 3 },
          { text: "Criminal charges", value: "criminal", weight: 4 },
          { text: "Small claims or money owed to me", value: "smallclaims", weight: 1 },
          { text: "Estate planning (wills, trusts)", value: "estate", weight: 2 },
          { text: "Bankruptcy or serious debt", value: "bankruptcy", weight: 3 }
        ]
      },
      {
        text: "How much money is potentially at stake?",
        options: [
          { text: "Less than $1,000", value: "low", weight: 0 },
          { text: "$1,000 – $10,000", value: "medium", weight: 1 },
          { text: "$10,000 – $50,000", value: "high", weight: 2 },
          { text: "Over $50,000", value: "veryhigh", weight: 3 },
          { text: "Not about money — it's about rights or custody", value: "rights", weight: 3 }
        ]
      },
      {
        text: "Has the other party already involved a lawyer?",
        options: [
          { text: "Yes, they have legal representation", value: "yes", weight: 3 },
          { text: "I'm not sure", value: "unsure", weight: 1 },
          { text: "No, they haven't", value: "no", weight: 0 }
        ]
      },
      {
        text: "Is there a deadline or court date approaching?",
        options: [
          { text: "Yes, within the next 30 days", value: "urgent", weight: 3 },
          { text: "Yes, but I have a few months", value: "soon", weight: 1 },
          { text: "No specific deadline", value: "none", weight: 0 }
        ]
      },
      {
        text: "Have you already tried to resolve this on your own?",
        options: [
          { text: "Yes, and it didn't work", value: "tried", weight: 2 },
          { text: "I haven't tried yet", value: "notyet", weight: 0 },
          { text: "The situation is too complex to handle alone", value: "complex", weight: 3 }
        ]
      }
    ]
  };

  let currentQuestion = 0;
  let quizScore = 0;
  let quizCategory = '';
  const quizContainer = document.getElementById('quiz-container');

  function renderQuiz() {
    if (!quizContainer) return;

    if (currentQuestion >= quizData.questions.length) {
      renderResult();
      return;
    }

    const q = quizData.questions[currentQuestion];

    let progressDots = '';
    for (let i = 0; i < quizData.questions.length; i++) {
      let cls = 'quiz-progress-dot';
      if (i < currentQuestion) cls += ' completed';
      else if (i === currentQuestion) cls += ' current';
      progressDots += `<div class="${cls}"></div>`;
    }

    let optionsHtml = q.options.map((opt, idx) =>
      `<button class="quiz-option" data-index="${idx}">${opt.text}</button>`
    ).join('');

    quizContainer.innerHTML = `
      <div class="quiz-step active">
        <div class="quiz-progress">${progressDots}</div>
        <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:0.5rem;">Question ${currentQuestion + 1} of ${quizData.questions.length}</p>
        <h3 class="quiz-question">${q.text}</h3>
        <div class="quiz-options">${optionsHtml}</div>
      </div>
    `;

    quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        const selected = q.options[idx];
        quizScore += selected.weight;
        if (currentQuestion === 0) quizCategory = selected.value;
        currentQuestion++;
        renderQuiz();
      });
    });
  }

  function renderResult() {
    let level, levelClass, heading, advice;

    const categoryAdvice = {
      tenant: "For landlord-tenant disputes, start by reviewing your lease agreement and your state's tenant rights laws. Many disputes can be resolved through your local tenant's rights organization or housing authority.",
      employment: "Employment disputes often benefit from professional legal guidance. Document everything, file complaints with your state labor board or the EEOC if discrimination is involved, and consider a consultation with an employment attorney.",
      consumer: "Consumer protection issues can often be addressed through the FTC, your state's attorney general, or the Consumer Financial Protection Bureau (CFPB). For debt collection violations, document every interaction.",
      traffic: "For traffic violations, you may be able to handle minor infractions yourself. For DUI charges, legal representation is strongly recommended as penalties can be severe and long-lasting.",
      family: "Family law matters — especially custody disputes — are among the most emotionally and legally complex. Most family law attorneys offer free initial consultations. Mediation can also be a cost-effective first step.",
      injury: "Personal injury attorneys typically work on contingency (no upfront cost). If you've been injured due to someone else's negligence, a free consultation can help you understand the strength of your case.",
      criminal: "If you're facing criminal charges, obtaining legal counsel is critical. You have a constitutional right to an attorney. If you cannot afford one, request a public defender immediately.",
      smallclaims: "Small claims court is designed for self-representation. Research your state's small claims limits and procedures. Gather all documentation, receipts, and evidence before filing.",
      estate: "Estate planning (wills, trusts, powers of attorney) is an area where proper legal guidance helps avoid costly mistakes. Many estate attorneys offer flat-fee packages for basic planning.",
      bankruptcy: "Bankruptcy has long-term consequences and specific eligibility requirements. A bankruptcy attorney can help you understand whether Chapter 7 or Chapter 13 is appropriate and guide you through the means test."
    };

    if (quizScore <= 4) {
      level = "Low — You May Be Able to Handle This Yourself";
      levelClass = "result-low";
      heading = "Self-Help May Be Sufficient";
      advice = "Based on your answers, your situation may be manageable without hiring an attorney. Many legal resources, self-help guides, and free legal aid services can assist you.";
    } else if (quizScore <= 8) {
      level = "Moderate — Consider a Legal Consultation";
      levelClass = "result-medium";
      heading = "A Consultation Would Be Wise";
      advice = "Your situation has enough complexity that a professional consultation could save you time, money, and stress. Many attorneys offer free or low-cost initial consultations.";
    } else {
      level = "High — Legal Representation Recommended";
      levelClass = "result-high";
      heading = "You Should Seek Legal Counsel";
      advice = "Based on your responses, your situation involves significant stakes, complexity, or urgency. Professional legal representation would be strongly advisable.";
    }

    const specificAdvice = categoryAdvice[quizCategory] || "";

    quizContainer.innerHTML = `
      <div class="quiz-result">
        <div class="result-level ${levelClass}">${level}</div>
        <h3>${heading}</h3>
        <p>${advice}</p>
        <p style="margin-top:1rem;">${specificAdvice}</p>
        <div style="margin-top:2rem;">
          <p style="color:var(--text-muted);font-size:0.85rem;font-style:italic;">This quiz provides general guidance only and does not constitute legal advice. Every situation is unique.</p>
        </div>
        <button class="btn btn-secondary" style="margin-top:1.5rem;" onclick="resetQuiz()">Take Quiz Again</button>
      </div>
    `;
  }

  // Make resetQuiz global
  window.resetQuiz = function() {
    currentQuestion = 0;
    quizScore = 0;
    quizCategory = '';
    renderQuiz();
  };

  // Initialize quiz
  renderQuiz();


  // --- State-by-State Resource Finder ---
  const stateData = {
    "Alabama": { minWage: "$7.25 (federal)", tenantNotice: "14 days (non-payment)", smallClaims: "$6,000", atWill: "Yes", communityProperty: "No" },
    "Alaska": { minWage: "$11.73", tenantNotice: "7 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "Arizona": { minWage: "$14.35", tenantNotice: "5 days (non-payment)", smallClaims: "$3,500", atWill: "Yes", communityProperty: "Yes" },
    "Arkansas": { minWage: "$11.00", tenantNotice: "14 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "California": { minWage: "$16.50", tenantNotice: "3 days (non-payment)", smallClaims: "$12,500", atWill: "Yes", communityProperty: "Yes" },
    "Colorado": { minWage: "$14.81", tenantNotice: "10 days (non-payment)", smallClaims: "$7,500", atWill: "Yes", communityProperty: "No" },
    "Connecticut": { minWage: "$16.35", tenantNotice: "3 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "Delaware": { minWage: "$15.00", tenantNotice: "5 days (non-payment)", smallClaims: "$25,000", atWill: "Yes", communityProperty: "No" },
    "Florida": { minWage: "$14.00", tenantNotice: "3 days (non-payment)", smallClaims: "$8,000", atWill: "Yes", communityProperty: "No" },
    "Georgia": { minWage: "$7.25 (federal)", tenantNotice: "Immediate (demand)", smallClaims: "$15,000", atWill: "Yes", communityProperty: "No" },
    "Hawaii": { minWage: "$14.00", tenantNotice: "5 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "Idaho": { minWage: "$7.25 (federal)", tenantNotice: "3 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "Yes" },
    "Illinois": { minWage: "$15.00", tenantNotice: "5 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "Indiana": { minWage: "$7.25 (federal)", tenantNotice: "10 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "Iowa": { minWage: "$7.25 (federal)", tenantNotice: "3 days (non-payment)", smallClaims: "$6,500", atWill: "Yes", communityProperty: "No" },
    "Kansas": { minWage: "$7.25 (federal)", tenantNotice: "10 days (non-payment)", smallClaims: "$4,000", atWill: "Yes", communityProperty: "No" },
    "Kentucky": { minWage: "$7.25 (federal)", tenantNotice: "7 days (non-payment)", smallClaims: "$2,500", atWill: "Yes", communityProperty: "No" },
    "Louisiana": { minWage: "$7.25 (federal)", tenantNotice: "5 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "Yes" },
    "Maine": { minWage: "$14.65", tenantNotice: "7 days (non-payment)", smallClaims: "$6,000", atWill: "Yes", communityProperty: "No" },
    "Maryland": { minWage: "$15.00", tenantNotice: "Immediate (demand)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "Massachusetts": { minWage: "$15.00", tenantNotice: "14 days (non-payment)", smallClaims: "$7,000", atWill: "Yes", communityProperty: "No" },
    "Michigan": { minWage: "$10.56", tenantNotice: "7 days (non-payment)", smallClaims: "$6,500", atWill: "Yes", communityProperty: "No" },
    "Minnesota": { minWage: "$11.13", tenantNotice: "14 days (non-payment)", smallClaims: "$15,000", atWill: "Yes", communityProperty: "No" },
    "Mississippi": { minWage: "$7.25 (federal)", tenantNotice: "3 days (non-payment)", smallClaims: "$3,500", atWill: "Yes", communityProperty: "No" },
    "Missouri": { minWage: "$13.75", tenantNotice: "Immediate (demand)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "Montana": { minWage: "$10.55", tenantNotice: "3 days (non-payment)", smallClaims: "$7,000", atWill: "No (exceptions)", communityProperty: "No" },
    "Nebraska": { minWage: "$13.50", tenantNotice: "7 days (non-payment)", smallClaims: "$3,600", atWill: "Yes", communityProperty: "No" },
    "Nevada": { minWage: "$12.00", tenantNotice: "7 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "Yes" },
    "New Hampshire": { minWage: "$7.25 (federal)", tenantNotice: "7 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "New Jersey": { minWage: "$15.49", tenantNotice: "30 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "New Mexico": { minWage: "$12.00", tenantNotice: "3 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "Yes" },
    "New York": { minWage: "$16.50", tenantNotice: "14 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "North Carolina": { minWage: "$7.25 (federal)", tenantNotice: "10 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "North Dakota": { minWage: "$7.25 (federal)", tenantNotice: "3 days (non-payment)", smallClaims: "$15,000", atWill: "Yes", communityProperty: "No" },
    "Ohio": { minWage: "$10.65", tenantNotice: "3 days (non-payment)", smallClaims: "$6,000", atWill: "Yes", communityProperty: "No" },
    "Oklahoma": { minWage: "$7.25 (federal)", tenantNotice: "5 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "Oregon": { minWage: "$14.70", tenantNotice: "13 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "Pennsylvania": { minWage: "$7.25 (federal)", tenantNotice: "10 days (non-payment)", smallClaims: "$12,000", atWill: "Yes", communityProperty: "No" },
    "Rhode Island": { minWage: "$15.00", tenantNotice: "15 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "South Carolina": { minWage: "$7.25 (federal)", tenantNotice: "5 days (non-payment)", smallClaims: "$7,500", atWill: "Yes", communityProperty: "No" },
    "South Dakota": { minWage: "$11.50", tenantNotice: "3 days (non-payment)", smallClaims: "$12,000", atWill: "Yes", communityProperty: "No" },
    "Tennessee": { minWage: "$7.25 (federal)", tenantNotice: "14 days (non-payment)", smallClaims: "$25,000", atWill: "Yes", communityProperty: "No" },
    "Texas": { minWage: "$7.25 (federal)", tenantNotice: "3 days (non-payment)", smallClaims: "$20,000", atWill: "Yes", communityProperty: "Yes" },
    "Utah": { minWage: "$7.25 (federal)", tenantNotice: "3 days (non-payment)", smallClaims: "$11,000", atWill: "Yes", communityProperty: "No" },
    "Vermont": { minWage: "$14.01", tenantNotice: "14 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "Virginia": { minWage: "$12.41", tenantNotice: "5 days (non-payment)", smallClaims: "$5,000", atWill: "Yes", communityProperty: "No" },
    "Washington": { minWage: "$16.66", tenantNotice: "14 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "Yes" },
    "West Virginia": { minWage: "$8.75", tenantNotice: "Immediate (demand)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "No" },
    "Wisconsin": { minWage: "$7.25 (federal)", tenantNotice: "5 days (non-payment)", smallClaims: "$10,000", atWill: "Yes", communityProperty: "Yes" },
    "Wyoming": { minWage: "$7.25 (federal)", tenantNotice: "3 days (non-payment)", smallClaims: "$6,000", atWill: "Yes", communityProperty: "No" }
  };

  const stateSelect = document.getElementById('state-select');
  const stateInfo = document.getElementById('state-info');

  if (stateSelect) {
    stateSelect.addEventListener('change', () => {
      const state = stateSelect.value;
      if (!state || !stateData[state]) {
        stateInfo.classList.remove('visible');
        return;
      }

      const data = stateData[state];
      stateInfo.innerHTML = `
        <h3 style="font-family:var(--font-display);color:var(--ivory);margin-bottom:1.5rem;">${state} — Key Legal Information</h3>
        <div class="state-info-grid">
          <div class="state-info-item">
            <div class="label">Minimum Wage</div>
            <div class="value">${data.minWage}</div>
            <div class="detail">Per hour (2026)</div>
          </div>
          <div class="state-info-item">
            <div class="label">Eviction Notice Period</div>
            <div class="value">${data.tenantNotice}</div>
            <div class="detail">For non-payment of rent</div>
          </div>
          <div class="state-info-item">
            <div class="label">Small Claims Limit</div>
            <div class="value">${data.smallClaims}</div>
            <div class="detail">Maximum amount allowed</div>
          </div>
          <div class="state-info-item">
            <div class="label">At-Will Employment</div>
            <div class="value">${data.atWill}</div>
            <div class="detail">Employer can terminate without cause</div>
          </div>
          <div class="state-info-item">
            <div class="label">Community Property State</div>
            <div class="value">${data.communityProperty}</div>
            <div class="detail">Affects divorce asset division</div>
          </div>
        </div>
        <p style="color:var(--text-muted);font-size:0.8rem;font-style:italic;margin-top:1.5rem;">Data shown is for general reference. Laws change frequently — verify current statutes with your state's official resources.</p>
      `;
      stateInfo.classList.add('visible');
    });
  }

  // --- Active Nav Highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) {
        item.classList.add('active');
      }
    });
  });

});

