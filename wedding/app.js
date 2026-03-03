/* ============================================================
   EverAfter — Wedding Planning Guide 2026
   Interactive JavaScript: Budget Calculator, Guest Manager, 
   Timeline Progress, FAQ Accordion, Navigation
   ============================================================ */

(function() {
    'use strict';

    // ---- Navigation ----
    const nav = document.getElementById('main-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // ---- Smooth scroll offset for fixed nav ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ---- Timeline Checklist Progress ----
    function updateTimelineProgress() {
        const checkboxes = document.querySelectorAll('.timeline-checklist input[type="checkbox"]');
        const total = checkboxes.length;
        const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
        const pct = total > 0 ? (checked / total * 100) : 0;

        const fill = document.getElementById('timelineProgress');
        const text = document.getElementById('timelineProgressText');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = checked + ' of ' + total + ' tasks complete (' + Math.round(pct) + '%)';
    }

    document.querySelectorAll('.timeline-checklist input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', updateTimelineProgress);
    });
    updateTimelineProgress();

    // ---- Budget Calculator ----
    const totalBudgetInput = document.getElementById('totalBudget');
    const calcCategories = document.querySelectorAll('.calc-category');
    const calcTotalPct = document.getElementById('calcTotalPct');
    const calcTotalAmt = document.getElementById('calcTotalAmt');
    const calcRemaining = document.getElementById('calcRemaining');
    const calcResetBtn = document.getElementById('calcReset');
    const budgetCanvas = document.getElementById('budgetChart');

    function formatCurrency(amount) {
        return '$' + Math.round(amount).toLocaleString('en-US');
    }

    function updateBudget() {
        const total = parseFloat(totalBudgetInput.value) || 0;
        let totalPct = 0;
        let totalAmt = 0;

        const data = [];
        const labels = [];
        const colors = [
            '#6b2737', '#8a3a4e', '#b8860b', '#d4a843',
            '#a89e96', '#c4a882', '#7a5c4f', '#d1b8a0'
        ];

        calcCategories.forEach((cat, i) => {
            const pctInput = cat.querySelector('.calc-pct');
            const amountEl = cat.querySelector('.calc-cat-amount');
            const fillEl = cat.querySelector('.calc-cat-fill');
            const nameEl = cat.querySelector('.calc-cat-name');

            const pct = parseFloat(pctInput.value) || 0;
            const amount = total * pct / 100;

            totalPct += pct;
            totalAmt += amount;

            amountEl.textContent = formatCurrency(amount);
            fillEl.style.width = Math.min(pct, 100) + '%';

            data.push(pct);
            labels.push(nameEl.textContent.trim());
        });

        calcTotalPct.textContent = Math.round(totalPct) + '%';
        calcTotalAmt.textContent = formatCurrency(totalAmt);

        const remaining = total - totalAmt;
        const remainingSpans = calcRemaining.querySelectorAll('span');
        if (remaining < 0) {
            remainingSpans[0].textContent = 'Over Budget:';
            remainingSpans[1].textContent = formatCurrency(Math.abs(remaining));
            calcRemaining.className = 'calc-summary-row calc-remaining over-budget';
        } else if (remaining === 0) {
            remainingSpans[0].textContent = 'Remaining:';
            remainingSpans[1].textContent = '$0';
            calcRemaining.className = 'calc-summary-row calc-remaining on-budget';
        } else {
            remainingSpans[0].textContent = 'Remaining:';
            remainingSpans[1].textContent = formatCurrency(remaining);
            calcRemaining.className = 'calc-summary-row calc-remaining on-budget';
        }

        drawPieChart(data, labels, colors);
    }

    // Pie Chart using Canvas
    function drawPieChart(data, labels, colors) {
        if (!budgetCanvas) return;
        const ctx = budgetCanvas.getContext('2d');
        const size = Math.min(budgetCanvas.parentElement.offsetWidth, 320);
        budgetCanvas.width = size * 2;
        budgetCanvas.height = size * 2;
        budgetCanvas.style.width = size + 'px';
        budgetCanvas.style.height = size + 'px';
        ctx.scale(2, 2);

        const cx = size / 2;
        const cy = size / 2;
        const radius = (size / 2) - 40;
        const total = data.reduce((a, b) => a + b, 0);

        ctx.clearRect(0, 0, size, size);

        if (total === 0) {
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#f0e8e4';
            ctx.fill();
            return;
        }

        let startAngle = -Math.PI / 2;

        data.forEach((value, i) => {
            if (value <= 0) return;
            const sliceAngle = (value / total) * Math.PI * 2;
            const endAngle = startAngle + sliceAngle;

            // Draw slice
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();

            // Thin white border between slices
            ctx.strokeStyle = '#fdf8f4';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Label
            if (value / total > 0.04) {
                const midAngle = startAngle + sliceAngle / 2;
                const labelRadius = radius * 0.65;
                const lx = cx + Math.cos(midAngle) * labelRadius;
                const ly = cy + Math.sin(midAngle) * labelRadius;

                ctx.save();
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 11px "Cormorant Garamond", Georgia, serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(Math.round(value) + '%', lx, ly);
                ctx.restore();
            }

            startAngle = endAngle;
        });

        // Center hole (donut)
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.42, 0, Math.PI * 2);
        ctx.fillStyle = '#fdf8f4';
        ctx.fill();

        // Center text
        ctx.save();
        ctx.fillStyle = '#6b2737';
        ctx.font = '500 13px "Cormorant Garamond", Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('BUDGET', cx, cy - 8);
        ctx.font = '300 11px "Cormorant Garamond", Georgia, serif';
        ctx.fillStyle = '#8a7e82';
        ctx.fillText('BREAKDOWN', cx, cy + 8);
        ctx.restore();
    }

    // Bind events
    if (totalBudgetInput) {
        totalBudgetInput.addEventListener('input', updateBudget);
    }
    calcCategories.forEach(cat => {
        const pctInput = cat.querySelector('.calc-pct');
        if (pctInput) pctInput.addEventListener('input', updateBudget);
    });

    if (calcResetBtn) {
        calcResetBtn.addEventListener('click', () => {
            totalBudgetInput.value = 30000;
            calcCategories.forEach(cat => {
                const pctInput = cat.querySelector('.calc-pct');
                if (pctInput) pctInput.value = pctInput.dataset.default;
            });
            updateBudget();
        });
    }

    // Initial render
    updateBudget();

    // ---- Guest List Manager ----
    const guestCountInput = document.getElementById('guestCount');
    const perHeadInput = document.getElementById('perHeadCost');
    const gmTables = document.getElementById('gmTables');
    const gmCatering = document.getElementById('gmCatering');
    const gmInvites = document.getElementById('gmInvites');
    const gmVenue = document.getElementById('gmVenue');

    function updateGuestManager() {
        const guests = parseInt(guestCountInput.value) || 0;
        const perHead = parseFloat(perHeadInput.value) || 0;

        // Tables: 8 per round table, round up
        const tables = Math.ceil(guests / 8);
        gmTables.textContent = tables;

        // Catering estimate
        const catering = guests * perHead;
        gmCatering.textContent = formatCurrency(catering);

        // Invitations: ~1 per 1.4 guests (household grouping) + 15% extras
        const households = Math.ceil(guests / 1.4);
        const invites = Math.ceil(households * 1.15);
        gmInvites.textContent = invites;

        // Venue size: 30 sq ft per guest min
        const sqft = guests * 30;
        gmVenue.textContent = sqft.toLocaleString('en-US') + ' sq ft';
    }

    if (guestCountInput) guestCountInput.addEventListener('input', updateGuestManager);
    if (perHeadInput) perHeadInput.addEventListener('input', updateGuestManager);
    updateGuestManager();

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');

            // Close all first
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                activeItem.classList.remove('active');
                activeItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Open clicked if it was closed
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ---- Scroll-based fade-in for sections ----
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to sections and observe
    document.querySelectorAll('.section, .guide-article, .etiquette-card, .gm-card, .glossary-item').forEach(el => {
        el.classList.add('fade-in-section');
        sectionObserver.observe(el);
    });

    // ---- Active nav link highlighting ----
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');

    function highlightNavLink() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinksAll.forEach(link => {
            link.style.color = '';
            link.style.background = '';
            if (link.getAttribute('href') === '#' + currentSection) {
                link.style.color = 'var(--burgundy)';
                link.style.background = 'rgba(107,39,55,0.06)';
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();

    // ---- Resize handler for pie chart ----
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateBudget, 200);
    });

})();
