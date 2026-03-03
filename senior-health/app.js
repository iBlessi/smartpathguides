/* ===== WellAged — App JavaScript ===== */

document.addEventListener('DOMContentLoaded', function () {
  // ===== Sticky Header Shadow =====
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== Mobile Navigation =====
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      mobileNav.setAttribute('aria-hidden', 'false');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      mobileNavClose.focus();
    });

    mobileNavClose.addEventListener('click', closeMobileNav);

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    navToggle.focus();
  }

  // ===== Back to Top Button =====
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // ===== Scroll-triggered Fade In =====
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // ===== Active Nav Highlighting =====
  const navLinks = document.querySelectorAll('.main-nav a');
  const sections = document.querySelectorAll('section[id], article[id]');

  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
      // Group guides under #guides
      const guideIds = ['heart-health', 'arthritis', 'brain-health', 'sleep', 'medicare-guide', 'fall-prevention', 'nutrition', 'chronic-pain', 'mental-health', 'vision-hearing'];
      if (href === '#guides' && guideIds.indexOf(current) !== -1) {
        link.classList.add('active');
      }
    });
  });

  // ===== FAQ Accordion =====
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===== Medication Checklist =====
  // Initialize with 3 empty rows
  for (var i = 0; i < 3; i++) {
    addMedRow();
  }
});

// ===== BMI Calculator =====
function calculateBMI() {
  var weight = parseFloat(document.getElementById('bmi-weight').value);
  var feet = parseInt(document.getElementById('bmi-height-ft').value);
  var inches = parseInt(document.getElementById('bmi-height-in').value);
  var age = parseInt(document.getElementById('bmi-age').value);

  if (!weight || !feet || isNaN(inches) || !age) {
    alert('Please fill in all fields to calculate your BMI.');
    return;
  }

  var totalInches = (feet * 12) + inches;
  var bmi = (weight / (totalInches * totalInches)) * 703;
  bmi = Math.round(bmi * 10) / 10;

  var category = '';
  var detail = '';

  if (age >= 65) {
    if (bmi < 22) {
      category = 'Underweight Range';
      detail = 'For adults over 65, a BMI below 22 may indicate being underweight, which is associated with increased risk of frailty, weakened immune function, and bone loss. Talk to your doctor about strategies to maintain a healthy weight through nutrition.';
    } else if (bmi < 27) {
      category = 'Healthy Range for Seniors';
      detail = 'Research suggests that for adults over 65, a BMI of 22-27 is associated with the lowest mortality risk. This is slightly higher than the standard "normal" range, as modest extra weight may provide protective reserves during illness or injury.';
    } else if (bmi < 30) {
      category = 'Slightly Above Optimal';
      detail = 'A BMI of 27-30 for seniors is only mildly elevated. Focus on staying physically active and eating nutritious foods rather than aggressive weight loss, which can lead to muscle loss. Discuss your individual goals with your doctor.';
    } else if (bmi < 35) {
      category = 'Obese Range (Class 1)';
      detail = 'A BMI of 30-35 increases the risk of diabetes, heart disease, and joint problems. Gradual, moderate weight loss (1-2 lbs/week) through diet and exercise can improve health outcomes. A registered dietitian can help create a safe plan.';
    } else {
      category = 'Obese Range (Class 2+)';
      detail = 'A BMI over 35 significantly increases health risks. Work with your healthcare team to develop a comprehensive plan that includes nutrition, physical activity, and possibly medical intervention. Prioritize sustainable changes over rapid weight loss.';
    }
  } else {
    if (bmi < 18.5) {
      category = 'Underweight';
      detail = 'A BMI below 18.5 may indicate that you are underweight. Consider consulting a healthcare provider or registered dietitian.';
    } else if (bmi < 25) {
      category = 'Normal Weight';
      detail = 'Your BMI is within the standard healthy range. Continue maintaining a balanced diet and regular physical activity.';
    } else if (bmi < 30) {
      category = 'Overweight';
      detail = 'A BMI of 25-30 falls in the overweight category. Moderate lifestyle changes in diet and exercise can help manage weight.';
    } else {
      category = 'Obese';
      detail = 'A BMI of 30 or above falls in the obese category. Consult your healthcare provider for a personalized health plan.';
    }
  }

  document.getElementById('bmi-value').textContent = bmi;
  document.getElementById('bmi-category').textContent = category;
  document.getElementById('bmi-detail').textContent = detail;
  document.getElementById('bmi-result').classList.add('visible');
  document.getElementById('bmi-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== Water Intake Calculator =====
function calculateWater() {
  var weight = parseFloat(document.getElementById('water-weight').value);
  var activity = document.getElementById('water-activity').value;

  if (!weight || !activity) {
    alert('Please fill in your weight and select an activity level.');
    return;
  }

  var baseOz = weight * 0.5;
  var multiplier = 1;
  switch (activity) {
    case 'sedentary': multiplier = 0.85; break;
    case 'light': multiplier = 1.0; break;
    case 'moderate': multiplier = 1.15; break;
    case 'active': multiplier = 1.3; break;
  }

  var totalOz = Math.round(baseOz * multiplier);
  var cups = Math.round(totalOz / 8);
  var liters = (totalOz * 0.0296).toFixed(1);

  document.getElementById('water-value').textContent = cups + ' cups';
  document.getElementById('water-label').textContent = totalOz + ' oz (' + liters + ' liters) per day';
  document.getElementById('water-detail').textContent = 'This includes all fluids — water, herbal tea, milk, broth, and water-rich foods like watermelon and cucumbers all count. Spread intake throughout the day rather than drinking large amounts at once. If you take diuretics or have kidney/heart conditions, consult your doctor for personalized recommendations.';
  document.getElementById('water-result').classList.add('visible');
  document.getElementById('water-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== Medication Checklist =====
var medRowCount = 0;

function addMedRow() {
  medRowCount++;
  var container = document.getElementById('med-rows');
  var row = document.createElement('div');
  row.className = 'med-row';
  row.setAttribute('role', 'row');
  row.innerHTML =
    '<input type="text" placeholder="Medication name" aria-label="Medication name ' + medRowCount + '">' +
    '<input type="text" placeholder="e.g., 10mg" aria-label="Dosage ' + medRowCount + '">' +
    '<input type="time" aria-label="Time for medication ' + medRowCount + '">' +
    '<input type="text" placeholder="With food, etc." aria-label="Notes for medication ' + medRowCount + '">' +
    '<button onclick="removeMedRow(this)" aria-label="Remove medication row ' + medRowCount + '" title="Remove">✕</button>';
  container.appendChild(row);
}

function removeMedRow(btn) {
  var row = btn.closest('.med-row');
  if (document.querySelectorAll('#med-rows .med-row').length > 1) {
    row.remove();
  }
}

function printChecklist() {
  window.print();
}
