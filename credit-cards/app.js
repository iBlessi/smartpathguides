/* ============================================
   CARDPICK - Credit Card Hub
   Interactive features and animations
   ============================================ */

// ==========================================
// NAVIGATION
// ==========================================
const nav = document.getElementById('mainNav');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');

// Scroll handler for nav background + back-to-top
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  // Nav background
  if (scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  // Back to top button
  if (scrollY > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
  
  // Active nav link
  updateActiveNav();
  
  lastScroll = scrollY;
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  mobileToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    mobileToggle.textContent = '☰';
  });
});

// Update active nav link based on scroll position
function updateActiveNav() {
  const sections = ['home', 'categories', 'compare', 'learn', 'quiz', 'glossary', 'faq'];
  const scrollPos = window.scrollY + 120;
  
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) {
      current = id;
    }
  });
  
  navLinks.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Don't unobserve so re-entry also triggers
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
  revealObserver.observe(el);
});

// ==========================================
// GUIDE NAVIGATION
// ==========================================
function scrollToGuide(guideId) {
  const el = document.getElementById('guide-' + guideId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================
// COMPARISON TABLE TABS
// ==========================================
function showTable(tableId) {
  // Hide all tables
  document.querySelectorAll('.comparison-wrapper').forEach(t => {
    t.style.display = 'none';
  });
  
  // Show selected
  const table = document.getElementById(tableId);
  if (table) {
    table.style.display = 'block';
  }
  
  // Update tab active states
  document.querySelectorAll('.table-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}

// ==========================================
// EDUCATIONAL ARTICLES TOGGLE
// ==========================================
function toggleArticle(articleId) {
  const article = document.getElementById(articleId);
  const grid = document.getElementById('eduGrid');
  
  if (article.classList.contains('visible')) {
    // Close article
    article.classList.remove('visible');
    grid.style.display = '';
  } else {
    // Close any open article first
    document.querySelectorAll('.article-expanded.visible').forEach(a => {
      a.classList.remove('visible');
    });
    
    // Open this article
    article.classList.add('visible');
    grid.style.display = 'none';
    
    // Scroll to article
    article.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================
// FAQ ACCORDION
// ==========================================
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');
  
  // Close all
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-answer').style.maxHeight = '0';
  });
  
  // Open clicked if it wasn't already open
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ==========================================
// GLOSSARY SEARCH
// ==========================================
function filterGlossary() {
  const query = document.getElementById('glossarySearch').value.toLowerCase().trim();
  const items = document.querySelectorAll('.glossary-item');
  
  items.forEach(item => {
    const term = item.getAttribute('data-term');
    const text = item.textContent.toLowerCase();
    
    if (!query || term.includes(query) || text.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// ==========================================
// CREDIT CARD QUIZ
// ==========================================
const quizAnswers = {};
let currentQuestion = 1;
const totalQuestions = 5;

function selectOption(question, value) {
  quizAnswers[question] = value;
  
  // Visual feedback
  const questionEl = document.getElementById('q' + question);
  questionEl.querySelectorAll('.quiz-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  event.currentTarget.classList.add('selected');
  
  // Auto-advance after short delay
  setTimeout(() => {
    if (question < totalQuestions) {
      goToQuestion(question + 1);
    } else {
      showResult();
    }
  }, 400);
}

function goToQuestion(num) {
  // Hide all questions
  document.querySelectorAll('.quiz-question').forEach(q => {
    q.classList.remove('active');
  });
  
  // Show target question
  const target = document.getElementById('q' + num);
  if (target) {
    target.classList.add('active');
    currentQuestion = num;
  }
  
  // Update progress
  updateProgress();
}

function updateProgress() {
  const steps = document.querySelectorAll('.quiz-progress .step');
  steps.forEach((step, idx) => {
    step.classList.remove('active', 'completed');
    if (idx + 1 === currentQuestion) {
      step.classList.add('active');
    } else if (idx + 1 < currentQuestion) {
      step.classList.add('completed');
    }
  });
}

function showResult() {
  // Hide questions, show result
  document.querySelectorAll('.quiz-question').forEach(q => {
    q.classList.remove('active');
  });
  
  // Complete all progress steps
  document.querySelectorAll('.quiz-progress .step').forEach(s => {
    s.classList.add('completed');
  });
  
  const result = document.getElementById('quizResult');
  result.classList.add('active');
  
  // Calculate recommendation
  const rec = calculateRecommendation();
  
  document.getElementById('resultType').textContent = rec.type;
  document.getElementById('resultDescription').textContent = rec.description;
  
  // Build recommendation cards
  const recsDiv = document.getElementById('resultRecs');
  recsDiv.innerHTML = '';
  rec.cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'rec-card';
    div.innerHTML = `
      <h4>${card.name}</h4>
      <div class="rec-highlight">${card.highlight}</div>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 8px;">${card.reason}</p>
    `;
    recsDiv.appendChild(div);
  });
  
  // Scroll to result
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function calculateRecommendation() {
  const { 1: spending, 2: credit, 3: fee, 4: goal, 5: monthly } = quizAnswers;
  
  // Priority-based recommendation engine
  
  // If building credit or no credit
  if (goal === 'credit' || credit === 'building') {
    return {
      type: 'Credit Builder Card',
      description: 'Based on your profile, a credit-building card is the best starting point. These cards report to all three bureaus and help establish your credit history, opening the door to premium rewards cards in 12-18 months.',
      cards: [
        { name: 'Discover it Secured', highlight: '2% gas & restaurants + cash back match', reason: 'Best rewards among secured cards. Automatic upgrade review after 7 months.' },
        { name: 'Capital One Platinum Secured', highlight: 'Higher limit than deposit with good use', reason: 'Potential for credit line increase without additional deposit.' },
        { name: 'Petal 2 Visa', highlight: '1-1.5% cash back, no deposit needed', reason: 'Uses banking data for approval — great if you have income but no credit history.' }
      ]
    };
  }
  
  // If paying off debt
  if (goal === 'debt') {
    return {
      type: 'Balance Transfer Card',
      description: 'A 0% APR balance transfer card will save you significantly on interest while you pay down your debt. Focus on paying off the full balance before the promotional period ends.',
      cards: [
        { name: 'Citi Simplicity', highlight: '21 months 0% APR, no late fees', reason: 'The longest 0% intro period available. No annual fee, no late fees ever.' },
        { name: 'Wells Fargo Reflect', highlight: 'Up to 21 months with on-time payments', reason: 'Extended 0% period rewards good behavior. $0 annual fee.' },
        { name: 'BankAmericard', highlight: '18 months 0% APR', reason: 'Straightforward terms with a low 3% balance transfer fee.' }
      ]
    };
  }
  
  // If business
  if (goal === 'business') {
    if (monthly === 'very-high' && (fee === 'mid' || fee === 'premium')) {
      return {
        type: 'Premium Business Card',
        description: 'Your high spending volume and willingness to pay for premium perks makes you ideal for a top-tier business card with outsized rewards and travel benefits.',
        cards: [
          { name: 'Amex Business Platinum', highlight: '5x flights, 1.5x on $5K+ purchases', reason: 'Massive sign-up bonus, lounge access, and premium perks for heavy business spenders.' },
          { name: 'Chase Ink Business Preferred', highlight: '3x on travel/shipping/advertising', reason: '100K point bonus and flexible Ultimate Rewards transfer partners.' },
          { name: 'Capital One Spark Cash Plus', highlight: '2% unlimited cash back', reason: 'No cap on 2% earning. $1,200 bonus for high-volume spenders.' }
        ]
      };
    }
    return {
      type: 'Business Cash Back Card',
      description: 'A business card will help you separate expenses, simplify taxes, and earn rewards on common business purchases like office supplies, internet, and advertising.',
      cards: [
        { name: 'Ink Business Cash', highlight: '5% office/internet/phone', reason: 'Category bonuses perfectly aligned with typical small business expenses.' },
        { name: 'Amex Blue Business Cash', highlight: '2% on first $50K/year', reason: 'Simple flat-rate earning with no annual fee. Great for diverse spending.' },
        { name: 'Ink Business Unlimited', highlight: '1.5% unlimited + 0% intro APR', reason: 'Solid flat rate with introductory 0% APR for new purchases.' }
      ]
    };
  }
  
  // Travel rewards
  if (goal === 'travel') {
    if ((fee === 'mid' || fee === 'premium') && (credit === 'excellent')) {
      return {
        type: 'Premium Travel Card',
        description: 'With excellent credit and willingness to invest in annual fees, you\'re positioned for the most rewarding travel cards on the market. These cards pay for themselves with travel credits, lounge access, and outsized point earning.',
        cards: [
          { name: 'Capital One Venture X', highlight: '2x miles + $300 travel credit + lounge access', reason: 'Best value among premium cards. $395 fee effectively becomes $95 after credits.' },
          { name: 'Chase Sapphire Reserve', highlight: '3x dining/travel + $300 credit', reason: 'Unmatched transfer partner ecosystem and Priority Pass lounge access.' },
          { name: 'Amex Platinum', highlight: '5x flights + extensive lounge network', reason: 'The ultimate luxury travel card with Centurion Lounges and 17+ airline/hotel partners.' }
        ]
      };
    }
    return {
      type: 'Travel Rewards Card',
      description: 'A mid-tier travel card gives you the best balance of rewards earning, travel protections, and transfer partner access without a premium annual fee.',
      cards: [
        { name: 'Chase Sapphire Preferred', highlight: '3x dining, 2x travel, 14+ partners', reason: 'The gold standard for travel rewards at $95/year. 75K bonus worth $1,000+ in travel.' },
        { name: 'Capital One Venture', highlight: '2x miles on everything', reason: 'Simple earning with transfer partner access at a reasonable $95 annual fee.' },
        { name: 'Amex Gold Card', highlight: '4x dining and groceries', reason: 'Exceptional earning rates on food and airline-specific perks with Membership Rewards.' }
      ]
    };
  }
  
  // Cash back (default / goal === 'cashback')
  if (spending === 'groceries') {
    return {
      type: 'Category Cash Back Card',
      description: 'Your heavy grocery spending means you should prioritize cards with elevated supermarket earn rates. Pairing a grocery-focused card with a flat-rate card maximizes your total cash back.',
      cards: [
        { name: 'Blue Cash Preferred (Amex)', highlight: '6% at U.S. supermarkets', reason: 'The highest grocery earn rate available. Earns $360/year on $500/month grocery spend.' },
        { name: 'Capital One SavorOne', highlight: '3% groceries/dining/entertainment', reason: 'No annual fee with broad category coverage. Great companion card.' },
        { name: 'Citi Double Cash', highlight: '2% on everything else', reason: 'Your "catch-all" card for non-grocery purchases at a strong flat rate.' }
      ]
    };
  }
  
  if (spending === 'dining') {
    return {
      type: 'Dining Rewards Card',
      description: 'Your dining-heavy spending profile means you should maximize restaurant rewards. Several cards offer 3-4% on dining with no annual fee.',
      cards: [
        { name: 'Capital One SavorOne', highlight: '3% dining/entertainment/groceries', reason: 'Broad category card that maximizes dining and more with $0 annual fee.' },
        { name: 'Chase Freedom Flex', highlight: '3% dining + 5% rotating', reason: 'Strong dining rate plus quarterly 5% categories for extra value.' },
        { name: 'Wells Fargo Active Cash', highlight: '2% flat rate on everything', reason: 'Pair with your dining card for all non-restaurant purchases.' }
      ]
    };
  }
  
  if (spending === 'travel') {
    return {
      type: 'Travel + Cash Back Combo',
      description: 'With high transportation spending, you\'ll benefit from cards that reward gas, rideshares, and transit alongside a strong flat-rate option.',
      cards: [
        { name: 'Chase Freedom Flex', highlight: '5% rotating (often includes gas)', reason: 'Rotating categories frequently include gas stations. 3% on dining as a bonus.' },
        { name: 'Citi Custom Cash', highlight: '5% on your top category', reason: 'Automatically earns 5% on your highest spending category each month, up to $500.' },
        { name: 'Citi Double Cash', highlight: '2% on everything', reason: 'Reliable 2% on all purchases for your everyday non-category spending.' }
      ]
    };
  }
  
  // Default: flat-rate / everything / online
  if (fee === 'none' || monthly === 'low') {
    return {
      type: 'No-Fee Flat-Rate Card',
      description: 'A no-annual-fee card with a strong flat rewards rate is your best match. You\'ll earn consistent cash back on every purchase without tracking categories or paying fees.',
      cards: [
        { name: 'Wells Fargo Active Cash', highlight: '2% on all purchases + cell protection', reason: 'Flat 2% with no annual fee, plus cell phone protection when you pay your bill with it.' },
        { name: 'Citi Double Cash', highlight: '2% effective (1% buy + 1% pay)', reason: 'The original flat 2% card with no annual fee and flexible redemption.' },
        { name: 'Chase Freedom Unlimited', highlight: '1.5% + 3% dining/drugstores', reason: 'Great starter with a solid base rate and useful category bonuses.' }
      ]
    };
  }
  
  return {
    type: 'Premium Cash Back Card',
    description: 'With your spending level, a multi-card cash back strategy will maximize your returns. Lead with a strong category card and pair with a flat-rate option.',
    cards: [
      { name: 'Chase Freedom Flex', highlight: '5% rotating + 3% dining/drugstores', reason: 'Quarterly 5% categories boost earnings significantly. No annual fee.' },
      { name: 'Blue Cash Preferred (Amex)', highlight: '6% groceries, 6% streaming', reason: 'Highest category rates on groceries. $95 fee pays for itself quickly with heavy grocery spend.' },
      { name: 'Citi Double Cash', highlight: '2% flat on everything else', reason: 'Your catch-all card for purchases outside bonus categories.' }
    ]
  };
}

function resetQuiz() {
  // Reset state
  Object.keys(quizAnswers).forEach(k => delete quizAnswers[k]);
  currentQuestion = 1;
  
  // Reset UI
  document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
  document.getElementById('q1').classList.add('active');
  document.getElementById('quizResult').classList.remove('active');
  
  // Reset options
  document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
  
  // Reset progress
  document.querySelectorAll('.quiz-progress .step').forEach(s => {
    s.classList.remove('active', 'completed');
  });
  document.querySelector('.quiz-progress .step').classList.add('active');
  
  // Scroll to quiz
  document.getElementById('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================
// SMOOTH HASH NAVIGATION
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Set first quiz progress step as active
  const firstStep = document.querySelector('.quiz-progress .step');
  if (firstStep) firstStep.classList.add('active');
  
  // Trigger initial reveal check
  updateActiveNav();
  
  // Add entrance animation to hero
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }
});
