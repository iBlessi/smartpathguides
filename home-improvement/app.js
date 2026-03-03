/* ============================================
   HomeFixIt - Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVIGATION ----
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const allNavLinks = document.querySelectorAll('.nav-links a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Active section highlighting
  const sections = document.querySelectorAll('.section[id]');
  const observerOptions = { rootMargin: '-30% 0px -70% 0px' };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        allNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);
  sections.forEach(s => sectionObserver.observe(s));

  // ---- SCROLL ANIMATIONS ----
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => fadeObserver.observe(el));


  // ---- PROJECT MODAL ----
  const modalOverlay = document.getElementById('projectModal');
  const modalClose = modalOverlay.querySelector('.modal-close');
  const projectCards = document.querySelectorAll('.project-card');

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    const header = modalOverlay.querySelector('.modal-header');
    const body = modalOverlay.querySelector('.modal-body');

    header.querySelector('h2').textContent = data.title;

    let metaHtml = `<div class="modal-meta-bar">
      <div class="modal-meta-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        ${data.time}
      </div>
      <div class="modal-meta-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        ${data.difficulty}
      </div>
      <div class="modal-meta-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>
        ${data.cost}
      </div>
    </div>`;

    body.innerHTML = metaHtml + data.content;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.project);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });


  // ---- PAINTING COST CALCULATOR ----
  document.getElementById('paintCalcBtn').addEventListener('click', () => {
    const length = parseFloat(document.getElementById('roomLength').value);
    const width = parseFloat(document.getElementById('roomWidth').value);
    const height = parseFloat(document.getElementById('roomHeight').value);
    const coats = parseInt(document.getElementById('paintCoats').value);
    const quality = document.getElementById('paintQuality').value;

    if (!length || !width || !height) {
      alert('Please fill in all room dimensions.');
      return;
    }

    const wallArea = 2 * (length + width) * height;
    const windowDoorDeduction = wallArea * 0.15;
    const paintableArea = wallArea - windowDoorDeduction;
    const totalArea = paintableArea * coats;

    const sqftPerGallon = 350;
    const gallonsNeeded = Math.ceil(totalArea / sqftPerGallon);

    const priceMap = { budget: 25, standard: 40, premium: 65 };
    const paintCost = gallonsNeeded * priceMap[quality];
    const suppliesCost = 35 + (paintableArea > 400 ? 20 : 0);
    const totalCost = paintCost + suppliesCost;

    const result = document.getElementById('paintResult');
    result.innerHTML = `
      <h4>Painting Estimate</h4>
      <div class="calc-result-row"><span>Wall Area (minus windows/doors)</span><span>${paintableArea.toFixed(0)} sq ft</span></div>
      <div class="calc-result-row"><span>Gallons Needed (${coats} coat${coats > 1 ? 's' : ''})</span><span>${gallonsNeeded} gallons</span></div>
      <div class="calc-result-row"><span>Paint Cost (${quality})</span><span>$${paintCost.toFixed(2)}</span></div>
      <div class="calc-result-row"><span>Supplies (tape, brushes, rollers, drop cloths)</span><span>$${suppliesCost.toFixed(2)}</span></div>
      <div class="calc-result-row"><span>Estimated Total</span><span>$${totalCost.toFixed(2)}</span></div>
    `;
    result.classList.add('visible');
  });


  // ---- FLOORING CALCULATOR ----
  document.getElementById('floorCalcBtn').addEventListener('click', () => {
    const area = parseFloat(document.getElementById('floorArea').value);
    const material = document.getElementById('floorMaterial').value;

    if (!area) {
      alert('Please enter the room area.');
      return;
    }

    const materialData = {
      laminate: { name: 'Laminate', priceMin: 2, priceMax: 5, waste: 0.1 },
      hardwood: { name: 'Hardwood', priceMin: 6, priceMax: 12, waste: 0.1 },
      vinyl_plank: { name: 'Luxury Vinyl Plank', priceMin: 3, priceMax: 7, waste: 0.08 },
      tile: { name: 'Ceramic Tile', priceMin: 3, priceMax: 8, waste: 0.12 },
      carpet: { name: 'Carpet', priceMin: 2, priceMax: 6, waste: 0.05 }
    };

    const mat = materialData[material];
    const totalArea = area * (1 + mat.waste);
    const costLow = totalArea * mat.priceMin;
    const costHigh = totalArea * mat.priceMax;
    const installLow = area * 2;
    const installHigh = area * 5;
    const underlayment = material !== 'carpet' ? area * 0.5 : 0;

    const result = document.getElementById('floorResult');
    result.innerHTML = `
      <h4>Flooring Estimate — ${mat.name}</h4>
      <div class="calc-result-row"><span>Room Area</span><span>${area} sq ft</span></div>
      <div class="calc-result-row"><span>Material Needed (+${(mat.waste*100).toFixed(0)}% waste)</span><span>${totalArea.toFixed(0)} sq ft</span></div>
      <div class="calc-result-row"><span>Material Cost Range</span><span>$${costLow.toFixed(0)} – $${costHigh.toFixed(0)}</span></div>
      ${underlayment > 0 ? `<div class="calc-result-row"><span>Underlayment</span><span>$${underlayment.toFixed(0)}</span></div>` : ''}
      <div class="calc-result-row"><span>Pro Installation (optional)</span><span>$${installLow.toFixed(0)} – $${installHigh.toFixed(0)}</span></div>
      <div class="calc-result-row"><span>DIY Estimated Total</span><span>$${(costLow + underlayment).toFixed(0)} – $${(costHigh + underlayment).toFixed(0)}</span></div>
    `;
    result.classList.add('visible');
  });


  // ---- RENOVATION BUDGET PLANNER ----
  document.getElementById('renoCalcBtn').addEventListener('click', () => {
    const projectType = document.getElementById('renoProject').value;
    const scope = document.getElementById('renoScope').value;

    const budgets = {
      bathroom: { small: [3000, 7000], medium: [8000, 15000], large: [15000, 35000] },
      kitchen: { small: [5000, 12000], medium: [12000, 30000], large: [30000, 75000] },
      basement: { small: [5000, 15000], medium: [15000, 35000], large: [35000, 70000] },
      bedroom: { small: [1500, 4000], medium: [4000, 10000], large: [10000, 25000] },
      deck: { small: [2000, 6000], medium: [6000, 14000], large: [14000, 30000] },
      whole_house: { small: [15000, 40000], medium: [40000, 100000], large: [100000, 250000] }
    };

    const typeNames = {
      bathroom: 'Bathroom Renovation',
      kitchen: 'Kitchen Renovation',
      basement: 'Basement Finishing',
      bedroom: 'Bedroom Remodel',
      deck: 'Deck Build/Remodel',
      whole_house: 'Whole House Renovation'
    };

    const scopeNames = { small: 'Budget / Cosmetic', medium: 'Mid-Range', large: 'High-End / Full Gut' };

    const range = budgets[projectType][scope];
    const materials = [range[0] * 0.4, range[1] * 0.4];
    const labor = [range[0] * 0.35, range[1] * 0.35];
    const permits = [range[0] * 0.05, range[1] * 0.05];
    const contingency = [range[0] * 0.15, range[1] * 0.15];

    const result = document.getElementById('renoResult');
    result.innerHTML = `
      <h4>${typeNames[projectType]} — ${scopeNames[scope]}</h4>
      <div class="calc-result-row"><span>Materials (~40%)</span><span>$${materials[0].toLocaleString()} – $${materials[1].toLocaleString()}</span></div>
      <div class="calc-result-row"><span>Labor (~35%)</span><span>$${labor[0].toLocaleString()} – $${labor[1].toLocaleString()}</span></div>
      <div class="calc-result-row"><span>Permits & Fees (~5%)</span><span>$${permits[0].toLocaleString()} – $${permits[1].toLocaleString()}</span></div>
      <div class="calc-result-row"><span>Contingency Fund (~15%)</span><span>$${contingency[0].toLocaleString()} – $${contingency[1].toLocaleString()}</span></div>
      <div class="calc-result-row"><span>Estimated Total Budget</span><span>$${range[0].toLocaleString()} – $${range[1].toLocaleString()}</span></div>
    `;
    result.classList.add('visible');
  });


  // ---- TOOL CHECKLIST TABS ----
  const toolTabs = document.querySelectorAll('.tool-tab');
  const toolPanels = document.querySelectorAll('.tool-panel');

  toolTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      toolTabs.forEach(t => t.classList.remove('active'));
      toolPanels.forEach(p => p.style.display = 'none');
      tab.classList.add('active');
      const panel = document.getElementById(`tools-${tab.dataset.category}`);
      if (panel) panel.style.display = 'grid';
    });
  });


  // ---- FAQ ACCORDION ----
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

});


// ---- PROJECT DATA ----
const projectData = {
  bathroom: {
    title: "Bathroom Renovation on a Budget: Step-by-Step",
    difficulty: "Medium",
    time: "2–4 Weekends",
    cost: "$3,000 – $7,000",
    content: `
      <h3>Overview</h3>
      <p>A budget bathroom renovation can completely transform one of the most-used rooms in your home without breaking the bank. The key is knowing where to splurge and where to save. You can achieve a stunning result for $3,000–$7,000 by focusing on high-impact cosmetic changes rather than moving plumbing or changing the layout.</p>

      <h3>Planning Your Budget Bathroom Reno</h3>
      <p>Start by assessing what truly needs replacing versus what can be refreshed. Often, a bathtub in good structural condition just needs reglazing ($300–$600) rather than full replacement ($1,500+). Similarly, if your vanity cabinet is solid, consider just replacing the countertop, sink, and hardware for a fraction of the cost. Set aside 15% of your budget as a contingency fund—unexpected issues like water damage or outdated wiring are common in bathroom walls.</p>

      <h3>Step-by-Step Process</h3>
      <ol>
        <li><strong>Demo Day:</strong> Remove old fixtures, flooring, and wall coverings. Protect the tub if keeping it. Turn off water supply before disconnecting any plumbing.</li>
        <li><strong>Inspect & Repair:</strong> Check for water damage, mold, or structural issues. Fix subflooring if spongy. This is the most important step—skipping it causes expensive problems later.</li>
        <li><strong>Paint & Prep Walls:</strong> Use moisture-resistant primer and semi-gloss or satin paint rated for bathrooms. Light colors make small bathrooms feel larger.</li>
        <li><strong>Install New Flooring:</strong> Luxury vinyl plank (LVP) is the best budget option—waterproof, durable, and DIY-friendly. Peel-and-stick tiles are even easier for beginners.</li>
        <li><strong>Update the Vanity:</strong> A new vanity with countertop runs $200–$800 at home improvement stores. Alternatively, paint the existing one and add new hardware ($15–$30).</li>
        <li><strong>Upgrade Fixtures:</strong> New faucet, showerhead, towel bars, and toilet seat make a huge visual impact for $150–$300 total.</li>
        <li><strong>Lighting & Mirror:</strong> Replace the builder-grade light bar with a modern fixture. A large framed mirror ($60–$150) elevates the entire space.</li>
        <li><strong>Finishing Touches:</strong> Fresh caulk around the tub, new switch plates, and coordinated accessories complete the look.</li>
      </ol>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> Shop clearance and open-box items at home improvement stores. End-of-season sales on tile and fixtures can save 40–60%. Also check local Habitat for Humanity ReStores for deeply discounted materials.
      </div>

      <h3>Where to Save vs. Splurge</h3>
      <ul>
        <li><strong>Save:</strong> Accessories, towel bars, paint, basic hardware</li>
        <li><strong>Moderate:</strong> Flooring, lighting, mirror</li>
        <li><strong>Splurge:</strong> Faucet and showerhead (you use these daily—quality matters)</li>
      </ul>

      <h3>Common Mistakes to Avoid</h3>
      <p>Don't skip the exhaust fan upgrade—poor ventilation leads to mold. Don't tile over existing tile unless it's perfectly level. Always use GFCI outlets near water sources (it's code). And measure twice before ordering a vanity—even a half-inch error can mean a return trip to the store.</p>
    `
  },
  flooring: {
    title: "How to Install Laminate Flooring Yourself",
    difficulty: "Medium",
    time: "1–2 Weekends",
    cost: "$800 – $2,500",
    content: `
      <h3>Overview</h3>
      <p>Laminate flooring is one of the most DIY-friendly home upgrades you can tackle. Modern click-lock systems require no glue or nails, and with the right preparation, you can transform a room in a single weekend. At $2–$5 per square foot for materials, it's a fraction of the cost of hardwood while delivering a remarkably similar look.</p>

      <h3>Materials & Tools You'll Need</h3>
      <ul>
        <li>Laminate flooring planks (buy 10% extra for waste and cuts)</li>
        <li>Underlayment (foam or cork—some laminate comes with it attached)</li>
        <li>Spacers (¼ inch for expansion gaps)</li>
        <li>Tapping block and pull bar</li>
        <li>Miter saw or circular saw for cuts</li>
        <li>Tape measure, pencil, utility knife</li>
        <li>Pry bar for removing baseboards</li>
      </ul>

      <h3>Preparation Is Everything</h3>
      <p>Your subfloor must be clean, dry, and level. Use a 6-foot straightedge to check for high and low spots—anything more than 3/16 inch over 10 feet needs leveling compound. Concrete subfloors require a moisture barrier (6-mil polyethylene sheeting). Remove all baseboards and door casings, and undercut door frames with an oscillating tool so planks slide underneath.</p>

      <h3>Installation Steps</h3>
      <ol>
        <li><strong>Acclimate:</strong> Let planks sit in the room for 48 hours to adjust to temperature and humidity.</li>
        <li><strong>Lay Underlayment:</strong> Roll out underlayment perpendicular to the direction you'll lay planks. Tape seams—don't overlap.</li>
        <li><strong>Start the First Row:</strong> Begin along the longest, most visible wall. Place spacers against the wall. Cut the tongue off the first row's wall-side edge for a flush fit.</li>
        <li><strong>Click & Lock:</strong> Angle each plank at about 20 degrees and press down to click into the previous row. Use a tapping block to close any gaps—never hammer directly on the plank.</li>
        <li><strong>Stagger Joints:</strong> Offset end joints by at least 12 inches between rows for structural integrity and a natural appearance. Start alternating rows with a plank cut to different lengths.</li>
        <li><strong>Navigate Obstacles:</strong> For door frames, pipes, and vents, measure carefully and use a jigsaw for curved cuts. Leave expansion gaps around all fixed objects.</li>
        <li><strong>Final Row:</strong> Measure and rip the last row to width, leaving a ¼-inch gap. Use a pull bar to snug it into place.</li>
        <li><strong>Reinstall Baseboards:</strong> Nail baseboards to the wall (not the floor!) to allow the floating floor to expand and contract freely.</li>
      </ol>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> Open boxes from multiple cartons and mix planks as you install. This distributes any slight color variations naturally and prevents obvious pattern repetition.
      </div>

      <h3>Common Pitfalls</h3>
      <p>The number one mistake is forgetting expansion gaps. Laminate is a floating floor that expands and contracts with humidity. Without gaps, planks buckle and peak. Never install over carpet, and avoid laminate in full bathrooms where standing water is likely. For kitchens, choose water-resistant laminate with sealed edges.</p>
    `
  },
  backsplash: {
    title: "Kitchen Backsplash Installation Guide",
    difficulty: "Medium",
    time: "1 Weekend",
    cost: "$200 – $600",
    content: `
      <h3>Overview</h3>
      <p>A new kitchen backsplash is one of the highest-impact, lowest-cost kitchen upgrades available. It protects your walls from cooking splashes, ties together your countertops and cabinets, and adds serious visual appeal. With peel-and-stick options and easy-to-use tile adhesives, this is a project most homeowners can handle in a single weekend.</p>

      <h3>Choosing Your Material</h3>
      <p>Subway tile remains the most popular choice for its timeless look and affordability ($2–$5/sq ft). Glass mosaic tiles add sparkle ($5–$15/sq ft). Peel-and-stick tile sheets ($3–$10/sq ft) are the easiest option for absolute beginners. For a budget-friendly option with dramatic results, consider large-format peel-and-stick panels that mimic marble or stone.</p>

      <h3>Step-by-Step Installation</h3>
      <ol>
        <li><strong>Measure & Calculate:</strong> Measure the total area between countertops and upper cabinets. Add 10% for cuts and waste. Order all your tile at once to ensure consistent color from the same dye lot.</li>
        <li><strong>Prep the Wall:</strong> Clean thoroughly with TSP (trisodium phosphate). Sand glossy surfaces lightly. Remove outlet covers and switch plates. The wall must be clean, dry, and free of grease.</li>
        <li><strong>Mark Your Layout:</strong> Find the center point and dry-lay tiles to plan cuts. You want balanced, even cuts on both edges—never start with a full tile on one side and a sliver on the other.</li>
        <li><strong>Apply Thinset:</strong> Spread thinset mortar with a notched trowel (¼-inch V-notch for most wall tiles). Work in small sections—about 3–4 square feet at a time to prevent the mortar from drying.</li>
        <li><strong>Set Tiles:</strong> Press tiles firmly with a slight twist. Use tile spacers for consistent grout lines. Check level frequently. Wipe excess mortar immediately.</li>
        <li><strong>Cut Tiles:</strong> Use a manual tile cutter for straight cuts and a wet saw or tile nipper for outlets and irregular shapes. Wear safety glasses.</li>
        <li><strong>Grout:</strong> Wait 24 hours, then spread grout diagonally across joints with a rubber float. Wipe excess with a damp sponge in circular motions. Let haze dry, then buff with a dry cloth.</li>
        <li><strong>Seal & Finish:</strong> Apply grout sealer after 48–72 hours to prevent staining. Reinstall outlet covers using extenders if needed for the added tile thickness.</li>
      </ol>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> Use tile edge trim (Schluter strips) for a clean, professional finish at exposed edges. It's the detail that separates DIY from pro installations.
      </div>

      <h3>Design Tips</h3>
      <p>A herringbone or chevron pattern using standard subway tiles costs the same in materials but looks far more custom. White grout with white tile looks clean but shows stains—consider a light gray grout for lower maintenance. Run your backsplash all the way to the ceiling behind the range for a dramatic, high-end look.</p>
    `
  },
  painting: {
    title: "Painting a Room Like a Pro: Tips and Techniques",
    difficulty: "Easy",
    time: "1–2 Days",
    cost: "$100 – $300",
    content: `
      <h3>Overview</h3>
      <p>Painting is the single most cost-effective home improvement project. A fresh coat of paint transforms a room instantly and requires minimal tools. But the difference between an amateur paint job and a professional one comes down to preparation, technique, and patience. Follow these steps and your results will look like you hired a pro.</p>

      <h3>Choosing Paint</h3>
      <p>Invest in quality paint—premium paints ($40–$65/gallon) have better pigments, cover in fewer coats, and last longer than budget options ($20–$30/gallon). For most rooms, eggshell or satin finishes strike the ideal balance of washability and aesthetics. Use semi-gloss for bathrooms, kitchens, and trim. Flat/matte hides wall imperfections but doesn't clean as easily.</p>

      <h3>The Professional Process</h3>
      <ol>
        <li><strong>Prep the Room:</strong> Move furniture to the center and cover with drop cloths. Remove outlet covers, switch plates, and light fixtures. Fill nail holes with lightweight spackle and sand smooth when dry.</li>
        <li><strong>Clean Walls:</strong> Wipe down with a damp cloth or TSP solution for kitchens. Dust and cobwebs prevent paint adhesion. Let walls dry completely.</li>
        <li><strong>Tape & Protect:</strong> Apply painter's tape along trim, ceiling lines, and around windows. Press the edge firmly with a putty knife for crisp lines. Lay drop cloths on floors.</li>
        <li><strong>Prime if Needed:</strong> Always prime over dark colors, stains, new drywall, or repairs. Tinted primer matched to your paint color saves a coat.</li>
        <li><strong>Cut In:</strong> Using a 2.5-inch angled brush, paint a 2–3 inch border along all edges, corners, and around trim. Work in 3-foot sections.</li>
        <li><strong>Roll the Walls:</strong> Load your roller (9-inch, ¾-nap for textured walls, ½-nap for smooth) and roll in a "W" pattern, then fill in evenly. Work from ceiling to floor, maintaining a wet edge to avoid lap marks.</li>
        <li><strong>Second Coat:</strong> Wait 2–4 hours between coats. The second coat evens out color and builds durability. Lightly sand between coats with 220-grit if you feel any bumps or debris.</li>
        <li><strong>Remove Tape:</strong> Pull tape at a 45-degree angle while the final coat is slightly tacky for the cleanest lines. Waiting too long can pull paint off with the tape.</li>
      </ol>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> The "box" method guarantees consistent color: pour all your paint cans into a 5-gallon bucket and mix (called "boxing"). Paint cans—even the same color and batch—can vary slightly. Boxing eliminates visible seams.
      </div>

      <h3>Cleanup & Storage</h3>
      <p>Wrap brushes and rollers tightly in plastic wrap between coats—they'll stay wet for hours without cleaning. For latex paint, clean tools with warm soapy water. Store leftover paint upside-down to create an airtight seal. Label each can with the room, color name, and date.</p>
    `
  },
  deck: {
    title: "Building a Deck: Materials, Costs, and Steps",
    difficulty: "Hard",
    time: "3–5 Weekends",
    cost: "$5,000 – $15,000",
    content: `
      <h3>Overview</h3>
      <p>A well-built deck extends your living space outdoors and can return 65–75% of its cost in home value. Building a deck is one of the more ambitious DIY projects, but with proper planning, permits, and patience, it's achievable for handy homeowners. A standard 12×16-foot deck costs $5,000–$15,000 depending on materials and features.</p>

      <h3>Choosing Materials</h3>
      <p>Pressure-treated lumber is the most affordable ($15–$25/sq ft installed) and remains the most common choice. Cedar ($25–$35/sq ft) offers natural rot resistance and beautiful grain. Composite decking ($30–$45/sq ft) costs more upfront but requires virtually zero maintenance over its 25–50 year lifespan—no staining, sealing, or splintering.</p>

      <h3>Before You Build</h3>
      <ul>
        <li><strong>Check local codes:</strong> Most jurisdictions require a building permit for decks. This isn't optional—building without one can mean fines and forced demolition.</li>
        <li><strong>Call 811:</strong> Have underground utilities marked before digging post holes. This is free and legally required in all 50 states.</li>
        <li><strong>Design to standard lumber lengths:</strong> Planning your deck in 2-foot increments (12×16, 14×20) minimizes waste and cuts.</li>
      </ul>

      <h3>Construction Steps</h3>
      <ol>
        <li><strong>Layout & Footings:</strong> Mark the deck perimeter with stakes and string. Dig post holes below the frost line (depth varies by region—check local code). Pour concrete footings with post brackets.</li>
        <li><strong>Install Posts & Ledger Board:</strong> Attach the ledger board to the house using lag bolts with proper flashing to prevent water intrusion. Set support posts plumb in brackets.</li>
        <li><strong>Frame the Structure:</strong> Install beams across posts, then joists at 16-inch centers. Use joist hangers at every connection—nails alone are not sufficient. Add blocking between joists for rigidity.</li>
        <li><strong>Lay Decking:</strong> Start at the outer edge and work toward the house. Pre-drill screw holes near board ends to prevent splitting. Leave 1/8-inch gaps between boards for drainage and expansion.</li>
        <li><strong>Build Railings:</strong> Required by code for decks 30+ inches above grade. Posts must be bolted to the framing—not just screwed to deck boards. Balusters spaced no more than 4 inches apart.</li>
        <li><strong>Add Stairs:</strong> Calculate rise and run carefully. Consistent step height is critical for safety. Attach stair stringers to the frame with reinforced brackets.</li>
        <li><strong>Finish & Protect:</strong> Apply stain/sealer to pressure-treated or cedar decking within 30–60 days of installation. Composite requires no finishing.</li>
      </ol>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> Consider hidden fastener systems for a clean, screw-free deck surface. They cost about $100–$200 more per 100 sq ft but eliminate exposed screw heads—a major aesthetic and barefoot-comfort upgrade.
      </div>
    `
  },
  plumbing: {
    title: "How to Fix Common Plumbing Issues",
    difficulty: "Easy to Medium",
    time: "1–4 Hours per Fix",
    cost: "$10 – $100",
    content: `
      <h3>Overview</h3>
      <p>Most homeowners call a plumber for issues they could fix themselves in under an hour. Plumbing repairs are among the highest-value DIY skills because professional plumber rates average $75–$150 per hour. Learning to handle common fixes saves hundreds per year and prevents minor issues from becoming major water damage events.</p>

      <h3>Leaky Faucet</h3>
      <p>A dripping faucet wastes up to 3,000 gallons per year. Turn off the supply valves under the sink. For compression faucets, replace the rubber seat washer ($1). For cartridge or ceramic disc faucets, replace the cartridge ($10–$30). Take the old part to the hardware store for an exact match. Reassemble in reverse order—most repairs take 20 minutes.</p>

      <h3>Running Toilet</h3>
      <p>A running toilet wastes 200+ gallons daily. Open the tank and check three things: (1) the flapper—if warped or mineral-crusted, replace it ($5–$10). (2) The fill valve—if water flows past the overflow tube, adjust the float or replace the valve ($8–$15). (3) The flush valve seal—if water leaks around the base of the flush valve, replace the gasket. Universal toilet repair kits ($20) cover all three fixes.</p>

      <h3>Clogged Drain</h3>
      <p>Before reaching for chemical drain cleaners (which damage pipes over time), try these methods in order: (1) Plunger—use a flange plunger for toilets and a cup plunger for sinks. (2) Baking soda and vinegar—pour ½ cup each, wait 30 minutes, flush with boiling water. (3) Drain snake—a $25 hand auger clears most clogs within 25 feet. For kitchen sinks, the clog is usually in the P-trap—place a bucket underneath and unscrew the trap to clean it out.</p>

      <h3>Low Water Pressure</h3>
      <p>Check if the issue is one faucet or whole-house. Single faucet: unscrew the aerator, soak in vinegar overnight to dissolve mineral deposits, and replace if damaged. Showerhead: same process. Whole-house: check the main shutoff valve (ensure fully open), inspect the pressure regulator, and call your water company to check for supply issues.</p>

      <h3>Pipe Leak Under the Sink</h3>
      <p>Tighten slip-joint connections by hand first. If a compression fitting leaks, tighten the nut 1/4 turn with pliers. For a cracked pipe section, cut out the damaged area and replace with a repair coupling. For an emergency temporary fix, pipe repair tape or epoxy putty ($6–$10) can buy you time until a proper repair.</p>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> Keep a plumber's emergency kit on hand: adjustable wrench, plunger, drain snake, pipe tape, plumber's putty, and a handful of common washers and O-rings. This $50 kit handles 80% of household plumbing issues.
      </div>
    `
  },
  insulation: {
    title: "Insulating Your Attic for Energy Savings",
    difficulty: "Medium",
    time: "1–2 Weekends",
    cost: "$500 – $2,000",
    content: `
      <h3>Overview</h3>
      <p>Attic insulation is one of the best returns on investment in home improvement. The Department of Energy estimates that proper attic insulation reduces heating and cooling costs by 10–50%. Most homes—especially those built before 2000—are significantly under-insulated by current standards. This is a project that literally pays for itself within 1–3 years.</p>

      <h3>Understanding R-Values</h3>
      <p>R-value measures insulation's resistance to heat flow. Higher is better. The DOE recommends R-38 to R-60 for most US attics (varies by climate zone). Measure your existing insulation: fiberglass batts are about R-3.2 per inch, blown cellulose about R-3.7, and spray foam R-6 to R-7 per inch. If your insulation is less than 10–12 inches deep, you likely need more.</p>

      <h3>Choosing Insulation Type</h3>
      <ul>
        <li><strong>Blown-in cellulose ($0.50–$1/sq ft):</strong> Most popular DIY choice. Fills irregular spaces well. Many home improvement stores rent blowing machines free with purchase.</li>
        <li><strong>Fiberglass batts ($0.50–$1.50/sq ft):</strong> Easy to handle for accessible, evenly spaced joists. Less effective in tight or irregular spaces.</li>
        <li><strong>Blown-in fiberglass ($1–$1.50/sq ft):</strong> Non-combustible, doesn't settle as much as cellulose.</li>
        <li><strong>Spray foam ($1.50–$3.50/sq ft):</strong> Best air sealing and highest R-value per inch, but usually requires professional application.</li>
      </ul>

      <h3>Installation Process</h3>
      <ol>
        <li><strong>Safety First:</strong> Wear an N95 respirator, safety goggles, long sleeves, gloves, and a hard hat. Place plywood walkways across joists—never step between them or you'll go through the ceiling.</li>
        <li><strong>Air Seal First:</strong> This is the step most people skip and the one that matters most. Seal gaps around pipes, wiring, ductwork, light fixtures, and the attic hatch with expanding foam or caulk. These air leaks account for 30–40% of heat loss.</li>
        <li><strong>Install Baffles:</strong> Staple foam or cardboard baffles in every rafter bay at the eave to maintain soffit ventilation. Blocking ventilation leads to moisture problems and ice dams.</li>
        <li><strong>Add Insulation:</strong> For blown-in: start at the far wall and work toward the access point. Maintain consistent depth using depth markers (rulers stapled to joists). For batts: lay perpendicular to existing insulation for best coverage, don't compress.</li>
        <li><strong>Insulate the Hatch:</strong> The attic access point is often the biggest heat leak. Attach rigid foam board to the top of the hatch and add weatherstripping around the frame.</li>
      </ol>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> Get an energy audit first ($150–$400, or free through many utility companies). Auditors use infrared cameras to show exactly where heat is escaping—you might discover that air sealing alone solves most of your problem.
      </div>

      <h3>What NOT to Insulate Over</h3>
      <p>Never cover recessed lights (unless IC-rated), exhaust fan housings, or the chimney. Maintain 3-inch clearance around non-IC recessed lights and build dams with sheet metal. Cover knob-and-tube wiring requires an electrician's evaluation before insulating—it depends on airflow for cooling.</p>
    `
  },
  smarthome: {
    title: "Smart Home Upgrades That Increase Property Value",
    difficulty: "Easy",
    time: "1–3 Hours per Device",
    cost: "$200 – $2,000",
    content: `
      <h3>Overview</h3>
      <p>Smart home technology has moved from novelty to expectation for many homebuyers. According to recent real estate surveys, homes with smart features sell up to 5% faster and can command a 3–5% price premium. The best part: most smart home upgrades are plug-and-play installations that require zero wiring knowledge and deliver immediate quality-of-life improvements.</p>

      <h3>Highest-Value Smart Upgrades</h3>

      <h3>1. Smart Thermostat ($100–$250)</h3>
      <p>This is the single best smart home investment. A smart thermostat (Nest, Ecobee, or Honeywell) saves 10–15% on heating and 15% on cooling annually—roughly $130–$180/year. Installation takes 30 minutes: turn off HVAC power, remove old thermostat, label wires, mount the new base plate, connect wires, and snap on the display. Most include step-by-step video guides.</p>

      <h3>2. Smart Door Lock ($150–$350)</h3>
      <p>Keyless entry with auto-lock, temporary access codes for guests, and activity logs appeal to security-conscious buyers. Retrofit smart locks replace your existing deadbolt in 15 minutes—no new holes or wiring. Look for models with auto-lock/unlock based on your phone's proximity.</p>

      <h3>3. Video Doorbell ($100–$300)</h3>
      <p>Video doorbells deter package theft and provide peace of mind. They replace your existing doorbell wiring or run on rechargeable batteries. Ring, Nest, and Arlo are the market leaders. Installation is typically 20 minutes with a screwdriver. These are the #1 most-requested smart feature by homebuyers.</p>

      <h3>4. Smart Lighting ($50–$400)</h3>
      <p>Start with smart bulbs ($10–$15 each) in key areas or upgrade to smart switches ($25–$50 each) for a more permanent solution. Smart switches are more appealing to buyers because they work like normal switches—guests don't need an app. Create lighting scenes, automate schedules, and control everything by voice.</p>

      <h3>5. Smart Garage Door Opener ($30–$100)</h3>
      <p>A smart garage controller like MyQ adds smartphone control to your existing garage door opener for under $40. Check if your garage is open from anywhere, get alerts, and close it remotely. Installation takes 10 minutes—just mount the sensor and connect to WiFi.</p>

      <h3>6. Water Leak Detectors ($30–$80 for a 3-pack)</h3>
      <p>Place these under sinks, behind toilets, near water heaters, and by washing machines. They alert your phone immediately when moisture is detected, potentially saving thousands in water damage. Insurance companies are starting to offer discounts for smart water monitoring.</p>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> Stick to one ecosystem (Google Home, Amazon Alexa, or Apple HomeKit) for seamless integration. Check compatibility before buying—look for "Works with" labels. A cohesive smart home system is more valuable than a random collection of devices.
      </div>
    `
  },
  garage: {
    title: "Garage Organization: Storage Solutions and Ideas",
    difficulty: "Easy",
    time: "1–2 Weekends",
    cost: "$200 – $1,500",
    content: `
      <h3>Overview</h3>
      <p>The average two-car garage contains $2,000–$5,000 worth of tools, equipment, and belongings—yet 25% of homeowners with two-car garages can't fit a single car inside. A well-organized garage maximizes your usable space, protects your investments, and makes every project faster because you can actually find your tools. The key principle: get everything off the floor and onto the walls and ceiling.</p>

      <h3>The Organization System</h3>

      <h3>Phase 1: Purge and Sort (Day 1)</h3>
      <p>Empty everything onto the driveway. Sort into four zones: Keep, Donate, Trash, and Relocate (belongs elsewhere). Be honest—if you haven't used it in two years, you probably won't. Then group "Keep" items by category: automotive, gardening, sports, tools, holiday, household. This step alone typically eliminates 25–35% of garage contents.</p>

      <h3>Phase 2: Wall Systems ($100–$600)</h3>
      <p>Wall-mounted storage is the biggest game changer. Options include: <strong>Slatwall panels</strong> ($3–$8/sq ft) with interchangeable hooks and baskets—the most flexible system. <strong>French cleat systems</strong> (make your own for $30–$50 in lumber)—infinitely customizable and strong enough for heavy tools. <strong>Pegboard</strong> ($15–$30 per 4×8 sheet)—the classic budget option, great for hand tools.</p>

      <h3>Phase 3: Ceiling Storage ($50–$300)</h3>
      <p>Ceiling-mounted overhead racks ($100–$250) hold 200–600 lbs and are perfect for seasonal items, camping gear, and holiday decorations. Mount into ceiling joists (not just drywall) using lag bolts. A motorized overhead storage lift ($200–$500) is ideal for heavy items you access occasionally, like a roof cargo box. Overhead bike hoists ($15–$30 each) free up massive floor space.</p>

      <h3>Phase 4: Floor Plan & Zones</h3>
      <p>Create dedicated zones: a workbench area with tool storage above, a garden zone near the exterior door, a sports/recreation section, and clear floor space for vehicles. Use floor markings or different-colored epoxy sections to visually define zones. An 8-foot workbench with pegboard above becomes a mini workshop for under $200 in materials.</p>

      <h3>Phase 5: Finishing Touches</h3>
      <ul>
        <li><strong>Flooring:</strong> Epoxy coating ($100–$300 DIY) protects concrete and makes sweeping easy</li>
        <li><strong>Lighting:</strong> LED shop lights ($20–$40 each)—install 3–4 for shadowless coverage</li>
        <li><strong>Labeling:</strong> Label every bin, shelf, and zone. Include a visual inventory list on the wall.</li>
        <li><strong>Power strip bar:</strong> Mount a heavy-duty power strip at workbench height for tool chargers</li>
      </ul>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> The single best organizational investment is clear plastic storage bins ($8–$15 each) instead of cardboard boxes. You can see contents instantly, they're waterproof, stackable, and pest-proof. Add a label on two sides for quick identification.
      </div>
    `
  },
  landscaping: {
    title: "Landscaping for Curb Appeal on Any Budget",
    difficulty: "Easy to Medium",
    time: "2–4 Weekends",
    cost: "$300 – $3,000",
    content: `
      <h3>Overview</h3>
      <p>Landscaping delivers the highest ROI of any home improvement category—the National Association of Realtors reports that a well-landscaped home can increase property value by 5–12%. You don't need a massive budget to make a dramatic impact. Strategic planting, clean edges, and a few key focal points transform curb appeal more than expensive hardscaping projects.</p>

      <h3>The Foundation Formula</h3>
      <p>Professional landscapers use a simple layering formula: trees for canopy, shrubs for structure, perennials for color, groundcover for finished edges, and mulch for a polished look. You don't need all five—even just fresh mulch and clean bed edges make an immediate difference.</p>

      <h3>Budget Tier: $300–$600</h3>
      <ul>
        <li>Edge all beds with a half-moon edger for crisp, defined borders ($30 tool)</li>
        <li>Apply 2–3 inches of fresh hardwood mulch ($3–$5 per bag, or $30–$45/cubic yard delivered)</li>
        <li>Add 6–8 seasonal color plants at the front entry ($3–$5 each)</li>
        <li>Clean, paint, or replace the front door hardware and house numbers ($50–$100)</li>
        <li>Power wash the driveway, walkway, and siding ($50 rental or $200–$400 to buy)</li>
      </ul>

      <h3>Mid-Range Tier: $600–$1,500</h3>
      <ul>
        <li>Everything above, plus foundation plantings: evergreen shrubs for year-round structure</li>
        <li>One ornamental tree ($50–$150) as a focal point in the front yard</li>
        <li>Landscape lighting along the walkway and uplighting key trees ($100–$300 for solar, $200–$500 for low-voltage)</li>
        <li>Define the walkway with border pavers or stone edging ($100–$300)</li>
        <li>Install a drip irrigation system for beds ($100–$200 DIY)</li>
      </ul>

      <h3>Premium Tier: $1,500–$3,000</h3>
      <ul>
        <li>All the above, plus a stone or paver walkway refresh ($500–$1,500)</li>
        <li>Retaining wall or raised planter ($300–$800)</li>
        <li>Mature specimen trees for instant presence ($200–$500 each)</li>
        <li>Professional sod for the front lawn ($0.60–$1.50/sq ft installed)</li>
      </ul>

      <h3>Plant Selection Tips</h3>
      <p>Choose native plants for your region—they require less water, fewer chemicals, and naturally thrive. Layer heights: tall plants in back, medium in middle, low in front. Plant in odd-numbered groups (3, 5, 7) for a natural, designed look. Repeat the same plant varieties across the landscape for cohesion rather than using one of everything.</p>

      <div class="pro-tip">
        <strong>Pro Tip:</strong> The best time to buy plants is end-of-season (late September–October). Nurseries slash prices 40–70% on healthy stock that just needs to be planted before frost. Trees and shrubs planted in fall actually establish roots better than spring plantings because they aren't stressed by summer heat.
      </div>
    `
  }
};
