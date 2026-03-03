// ===== INSURANCE QUIZ =====
const quizQuestions = [
  {
    question: "What is your age range?",
    options: [
      { text: "18–25", value: "young" },
      { text: "26–35", value: "young-adult" },
      { text: "36–50", value: "mid" },
      { text: "51–65", value: "senior" },
      { text: "65+", value: "retired" }
    ]
  },
  {
    question: "Do you own or rent your home?",
    options: [
      { text: "I own my home", value: "owner" },
      { text: "I rent an apartment or house", value: "renter" },
      { text: "I live with family (no housing costs)", value: "family" }
    ]
  },
  {
    question: "How many people depend on your income?",
    options: [
      { text: "None — just me", value: "none" },
      { text: "1 person (spouse or partner)", value: "one" },
      { text: "2–3 people (small family)", value: "small" },
      { text: "4+ people (larger family)", value: "large" }
    ]
  },
  {
    question: "Are you self-employed or a business owner?",
    options: [
      { text: "No — I work for an employer", value: "employed" },
      { text: "Yes — I'm a freelancer or sole proprietor", value: "freelance" },
      { text: "Yes — I own a business with employees", value: "business-owner" }
    ]
  },
  {
    question: "Do you own a vehicle?",
    options: [
      { text: "Yes — I own or lease a car", value: "vehicle" },
      { text: "No — I use public transit or rideshare", value: "no-vehicle" }
    ]
  }
];

let currentQuestion = 0;
let quizAnswers = {};

function initQuiz() {
  currentQuestion = 0;
  quizAnswers = {};
  document.getElementById("quiz-results").style.display = "none";
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById("quiz-container");
  const q = quizQuestions[currentQuestion];

  // Update progress
  const steps = document.querySelectorAll("#quiz-progress .step");
  steps.forEach((s, i) => {
    s.className = "step";
    if (i < currentQuestion) s.classList.add("done");
    if (i === currentQuestion) s.classList.add("active");
  });

  let html = `<div class="quiz-question">
    <h4>Question ${currentQuestion + 1} of ${quizQuestions.length}: ${q.question}</h4>
    <div class="quiz-options">`;

  q.options.forEach((opt, i) => {
    const selected = quizAnswers[currentQuestion] === opt.value ? " selected" : "";
    html += `<button class="quiz-option${selected}" onclick="selectOption(${currentQuestion}, '${opt.value}', this)">${opt.text}</button>`;
  });

  html += `</div></div>`;
  html += `<div class="quiz-nav">`;
  if (currentQuestion > 0) {
    html += `<button class="btn btn-secondary btn-sm" onclick="prevQuestion()">← Back</button>`;
  } else {
    html += `<div></div>`;
  }
  if (currentQuestion < quizQuestions.length - 1) {
    html += `<button class="btn btn-primary btn-sm" onclick="nextQuestion()" id="next-btn" ${!quizAnswers[currentQuestion] ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>Next →</button>`;
  } else {
    html += `<button class="btn btn-primary btn-sm" onclick="showResults()" id="results-btn" ${!quizAnswers[currentQuestion] ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>See My Results</button>`;
  }
  html += `</div>`;

  container.innerHTML = html;
}

function selectOption(qIndex, value, el) {
  quizAnswers[qIndex] = value;
  document.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  const nextBtn = document.getElementById("next-btn") || document.getElementById("results-btn");
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
  }
}

function nextQuestion() {
  if (!quizAnswers[currentQuestion]) return;
  currentQuestion++;
  renderQuestion();
}

function prevQuestion() {
  currentQuestion--;
  renderQuestion();
}

function showResults() {
  if (!quizAnswers[currentQuestion]) return;

  const recs = [];
  const age = quizAnswers[0];
  const housing = quizAnswers[1];
  const dependents = quizAnswers[2];
  const employment = quizAnswers[3];
  const vehicle = quizAnswers[4];

  // Auto insurance
  if (vehicle === "vehicle") {
    recs.push({
      name: "Auto Insurance",
      reason: "You own a vehicle, so auto insurance is legally required in most states. Consider full coverage with adequate liability limits.",
      link: "#auto",
      priority: "essential"
    });
  }

  // Health insurance
  recs.push({
    name: "Health Insurance",
    reason: employment === "freelance" || employment === "business-owner"
      ? "As a self-employed individual, you must secure your own health coverage through the ACA marketplace or private insurers."
      : "Health insurance is essential. If your employer offers coverage, review your plan options during open enrollment.",
    link: "#health",
    priority: "essential"
  });

  // Homeowners or Renters
  if (housing === "owner") {
    recs.push({
      name: "Homeowners Insurance",
      reason: "As a homeowner, this coverage protects your largest asset. Your mortgage lender likely requires it. Don't forget to evaluate flood coverage.",
      link: "#home-ins",
      priority: "essential"
    });
  } else if (housing === "renter") {
    recs.push({
      name: "Renters Insurance",
      reason: "Your landlord's policy doesn't cover your belongings. At $15-30/month, renters insurance is one of the best values in insurance.",
      link: "#renters",
      priority: "essential"
    });
  }

  // Life insurance
  if (dependents !== "none") {
    recs.push({
      name: "Life Insurance",
      reason: `With ${dependents === "one" ? "a partner" : "a family"} depending on your income, term life insurance is critical. Aim for 10-15x your annual income.`,
      link: "#life",
      priority: "essential"
    });
  } else if (age === "young-adult" || age === "mid") {
    recs.push({
      name: "Life Insurance",
      reason: "Even without dependents now, locking in a term life policy while young and healthy can save significantly if your situation changes.",
      link: "#life",
      priority: "recommended"
    });
  }

  // Disability insurance
  if (employment === "freelance" || employment === "business-owner") {
    recs.push({
      name: "Disability Insurance",
      reason: "Without employer benefits, individual disability insurance is critical to protect your income. You have no employer safety net.",
      link: "#disability",
      priority: "essential"
    });
  } else if (age !== "retired") {
    recs.push({
      name: "Disability Insurance",
      reason: "Your ability to earn income is your most valuable asset. Review your employer's disability benefits and consider supplemental coverage.",
      link: "#disability",
      priority: "recommended"
    });
  }

  // Business insurance
  if (employment === "freelance") {
    recs.push({
      name: "Business Insurance",
      reason: "As a freelancer, professional liability (E&O) insurance protects against claims of mistakes or negligence in your work.",
      link: "#business",
      priority: "recommended"
    });
  } else if (employment === "business-owner") {
    recs.push({
      name: "Business Insurance",
      reason: "With employees, you need general liability, workers' compensation, and potentially a BOP. This is essential for business protection.",
      link: "#business",
      priority: "essential"
    });
  }

  // Umbrella insurance
  if (housing === "owner" || dependents === "small" || dependents === "large" || age === "mid" || age === "senior") {
    recs.push({
      name: "Umbrella Insurance",
      reason: "With assets to protect, an umbrella policy provides critical extra liability coverage for just $150-300/year.",
      link: "#umbrella",
      priority: "recommended"
    });
  }

  // Pet insurance (suggest for younger demographics)
  if (age === "young" || age === "young-adult") {
    recs.push({
      name: "Pet Insurance",
      reason: "If you have or plan to get a pet, enrolling early means lower premiums and no pre-existing condition exclusions.",
      link: "#pet",
      priority: "consider"
    });
  }

  // Travel insurance
  recs.push({
    name: "Travel Insurance",
    reason: "Consider travel insurance for any international trip or expensive vacation. Purchase as soon as you book.",
    link: "#travel",
    priority: "consider"
  });

  // Render results
  const list = document.getElementById("rec-list");
  const priorityLabels = { essential: "Essential", recommended: "Recommended", consider: "Worth Considering" };
  list.innerHTML = recs.map(r => `
    <li>
      <strong><a href="${r.link}" style="color:var(--forest);text-decoration:underline;">${r.name}</a> — ${priorityLabels[r.priority]}</strong>
      <span>${r.reason}</span>
    </li>
  `).join("");

  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("quiz-results").style.display = "block";

  // Mark all steps done
  document.querySelectorAll("#quiz-progress .step").forEach(s => {
    s.className = "step done";
  });
}

function restartQuiz() {
  document.getElementById("quiz-container").style.display = "block";
  initQuiz();
}

// ===== MOBILE NAV =====
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

// Close mobile nav when clicking a link
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.textContent = "☰";
  });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const answer = item.querySelector(".faq-answer");
    const isOpen = item.classList.contains("open");

    // Close all
    document.querySelectorAll(".faq-item").forEach(faq => {
      faq.classList.remove("open");
      faq.querySelector(".faq-answer").style.maxHeight = null;
    });

    // Open clicked (if it was closed)
    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== TOC SIDEBAR =====
const tocDots = document.querySelectorAll(".toc-dot");
tocDots.forEach(dot => {
  dot.addEventListener("click", () => {
    const section = document.getElementById(dot.dataset.section);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight active section in TOC
const sectionIds = Array.from(tocDots).map(d => d.dataset.section);
const observerOpts = { rootMargin: "-30% 0px -70% 0px" };

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      tocDots.forEach(d => d.classList.toggle("active", d.dataset.section === id));

      // Also update nav active state
      nav.querySelectorAll("a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + id);
      });
    }
  });
}, observerOpts);

sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// ===== SCROLL ANIMATIONS =====
const animElements = document.querySelectorAll(".guide-section .guide-content > div, .ins-card, .glossary-item, .cost-card, .faq-item");
animElements.forEach(el => el.classList.add("animate-in"));

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, i * 50);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animElements.forEach(el => animObserver.observe(el));

// ===== INIT =====
initQuiz();
