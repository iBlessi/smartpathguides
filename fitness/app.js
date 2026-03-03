/* ===== FitPath - App.js ===== */

// ========== ARTICLE CONTENT ==========
const articles = {
  'calorie-deficit': {
    tag: 'Weight Loss / Foundation',
    title: 'Calorie Deficit Explained: The Only Rule That Matters',
    body: `
      <p>Every diet that has ever worked — keto, paleo, intermittent fasting, Weight Watchers, carnivore — works because of one fundamental principle: <strong>a calorie deficit</strong>. You must burn more calories than you consume to lose body fat. There are no exceptions to this rule, and understanding it is the single most important thing you can learn about weight loss.</p>

      <h3>What Is a Calorie Deficit?</h3>
      <p>A calorie deficit occurs when you eat fewer calories than your body needs to maintain its current weight. Your body makes up the difference by tapping into stored energy — primarily body fat. One pound of fat contains approximately 3,500 calories, so a daily deficit of 500 calories results in roughly one pound of fat loss per week.</p>
      <p>Your body burns calories through four main pathways: Basal Metabolic Rate (BMR) accounts for 60-70% and covers basic functions like breathing, circulation, and cell repair. The thermic effect of food uses about 10% to digest what you eat. Non-exercise activity thermogenesis (NEAT) — fidgeting, walking, standing — burns 15-20%. Finally, deliberate exercise accounts for only 5-10% of total daily burn for most people.</p>

      <h3>How to Create a Deficit</h3>
      <p>There are two levers you can pull: eat less or move more. Most experts recommend a combination. Start by calculating your TDEE (Total Daily Energy Expenditure) using the calculator on this page, then subtract 300-500 calories. This creates a moderate deficit that preserves muscle, keeps energy levels stable, and is sustainable long-term.</p>
      <div class="callout">
        <strong>Pro Tip:</strong> A deficit of more than 1,000 calories per day is counterproductive for most people. It increases muscle loss, tanks energy, spikes hunger hormones, and often leads to binge-restrict cycles. Slow and steady truly wins the race.
      </div>

      <h3>Common Mistakes</h3>
      <ul>
        <li><strong>Not tracking accurately</strong> — Most people underestimate intake by 30-50%. Cooking oils, sauces, and "small bites" add up fast.</li>
        <li><strong>Cutting too aggressively</strong> — Crash diets cause metabolic adaptation and muscle loss, making future fat loss harder.</li>
        <li><strong>Ignoring protein</strong> — High protein (0.7-1g per pound of body weight) preserves muscle during a deficit and keeps you fuller longer.</li>
        <li><strong>Weekend blowouts</strong> — Five days of deficit erased by two days of overeating is the most common reason people don't see results.</li>
        <li><strong>Relying only on exercise</strong> — You can't outrun a bad diet. A single restaurant meal can wipe out an entire week of cardio sessions.</li>
      </ul>

      <h3>Making It Sustainable</h3>
      <p>The best deficit is one you can maintain for months, not days. Eat foods you enjoy within your calorie target. Prioritize protein and fiber for satiety. Use diet breaks (eating at maintenance for a week every 8-12 weeks) to prevent metabolic adaptation. Weigh yourself daily but only look at weekly averages — daily fluctuations of 2-5 lbs are completely normal due to water, sodium, and digestion.</p>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> A calorie deficit is the non-negotiable requirement for fat loss. How you create it — whether through food choices, meal timing, or exercise — is personal preference. Pick the approach that fits your lifestyle, and be consistent.
      </div>
    `
  },

  'intermittent-fasting': {
    tag: 'Weight Loss / Nutrition',
    title: 'Intermittent Fasting: Methods, Benefits, and Risks',
    body: `
      <p>Intermittent fasting (IF) is not a diet — it's an eating pattern. Rather than telling you <em>what</em> to eat, it specifies <em>when</em> to eat. Over the past decade, IF has become one of the most popular approaches to weight management, with research supporting its effectiveness when done correctly.</p>

      <h3>Popular IF Methods</h3>
      <p><strong>16:8 (Leangains)</strong> — Fast for 16 hours, eat during an 8-hour window. The most popular method. Example: eat from 12pm to 8pm, skip breakfast. This is the easiest starting point for most people because you're sleeping through most of the fast.</p>
      <p><strong>5:2 Diet</strong> — Eat normally five days a week, restrict to 500-600 calories on two non-consecutive days. Less daily restriction but those two low days can be challenging.</p>
      <p><strong>Eat-Stop-Eat</strong> — One or two complete 24-hour fasts per week. For example, dinner to dinner. More aggressive and harder to sustain.</p>
      <p><strong>OMAD (One Meal a Day)</strong> — Eat your entire daily calories in a single meal. Extreme and not recommended for beginners or those with a history of disordered eating.</p>

      <h3>How IF Promotes Weight Loss</h3>
      <p>The primary mechanism is simple: by restricting your eating window, most people naturally eat fewer total calories. IF doesn't have magical fat-burning properties — it's a tool that makes calorie restriction easier for many people. Some research suggests fasting periods improve insulin sensitivity and increase norepinephrine, which may slightly boost fat oxidation.</p>

      <h3>Proven Benefits</h3>
      <ul>
        <li><strong>Simplicity</strong> — Fewer meals to plan, prep, and think about</li>
        <li><strong>Improved insulin sensitivity</strong> — Especially beneficial for those with pre-diabetes risk factors</li>
        <li><strong>Reduced snacking</strong> — Clear boundaries eliminate mindless eating</li>
        <li><strong>Potential cellular benefits</strong> — Research on autophagy (cellular cleanup) is promising but mostly from animal studies</li>
        <li><strong>Mental clarity</strong> — Many people report improved focus during fasting hours</li>
      </ul>

      <h3>Risks and Downsides</h3>
      <ul>
        <li><strong>Muscle loss risk</strong> — If protein intake is too low or meals are imbalanced, you may lose muscle. Always prioritize protein.</li>
        <li><strong>Not for everyone</strong> — People with a history of eating disorders, pregnant/nursing women, and those with blood sugar regulation issues should avoid IF or consult a doctor first.</li>
        <li><strong>Social challenges</strong> — Skipping meals can be awkward in social or family settings.</li>
        <li><strong>Potential for overeating</strong> — Some people compensate by eating larger meals during their window, negating the deficit.</li>
      </ul>

      <div class="callout">
        <strong>Getting Started:</strong> Begin with a 14:10 protocol for the first week, then gradually extend to 16:8. Stay hydrated during fasting hours — water, black coffee, and plain tea are fine. Break your fast with a balanced meal rich in protein, not a binge.
      </div>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> Intermittent fasting is an effective <em>tool</em> for creating a calorie deficit, not a silver bullet. It works well for people who prefer fewer, larger meals and like structure. If it doesn't suit your lifestyle, a standard calorie-controlled approach works just as well.
      </div>
    `
  },

  'no-counting': {
    tag: 'Weight Loss / Lifestyle',
    title: 'How to Lose Weight Without Counting Calories',
    body: `
      <p>Calorie counting is effective, but it's not for everyone. The good news: you don't <em>have</em> to track every morsel to lose weight. Many people successfully lose fat by building habits that naturally reduce calorie intake without ever opening a food tracking app. Here's how.</p>

      <h3>The Plate Method</h3>
      <p>Fill half your plate with vegetables or salad, one quarter with lean protein (chicken, fish, tofu, eggs), and one quarter with complex carbs (rice, potato, whole grains). This simple visual template naturally controls portions and ensures balanced nutrition. No math required — just look at your plate.</p>

      <h3>Prioritize Protein at Every Meal</h3>
      <p>Protein is the most satiating macronutrient. It keeps you fuller longer, preserves muscle during weight loss, and has the highest thermic effect (your body burns 20-30% of protein calories just digesting them). Aim for a palm-sized portion of protein at every meal: eggs at breakfast, chicken at lunch, fish at dinner. When you're full from protein, you naturally eat less of everything else.</p>

      <h3>Volume Eating</h3>
      <p>Some foods are calorie-dense (nuts, oils, cheese) while others are calorie-sparse but filling (vegetables, fruits, broth-based soups). By building meals around high-volume, low-calorie foods, you can eat large, satisfying portions while consuming fewer total calories. A massive salad with grilled chicken might be 400 calories. A small handful of trail mix could be the same.</p>

      <h3>Habit-Based Strategies That Work</h3>
      <ul>
        <li><strong>Eat slowly</strong> — It takes 20 minutes for fullness signals to reach your brain. Put your fork down between bites.</li>
        <li><strong>Drink water before meals</strong> — 16 oz of water 30 minutes before eating reduces intake by 75-90 calories per meal.</li>
        <li><strong>Use smaller plates</strong> — A 10-inch plate instead of 12-inch reduces serving sizes by 20-25% without feeling restrictive.</li>
        <li><strong>Don't drink your calories</strong> — Soda, juice, fancy coffee drinks, and alcohol are the most common hidden calorie sources. Switch to water, black coffee, and unsweetened tea.</li>
        <li><strong>Sleep 7-9 hours</strong> — Poor sleep increases ghrelin (hunger hormone) by up to 28% and makes high-calorie foods more appealing.</li>
        <li><strong>Walk 8,000-10,000 steps daily</strong> — This alone can burn 300-500+ extra calories per day with minimal fatigue or recovery cost.</li>
      </ul>

      <h3>Stop Eating When 80% Full</h3>
      <p>This Japanese principle called "hara hachi bu" is practiced in Okinawa, one of the world's Blue Zones with the longest-living populations. The idea is simple: eat until you're satisfied, not stuffed. There's a natural 20-minute delay between eating and feeling full, so stopping at 80% usually means you've eaten exactly enough.</p>

      <div class="callout">
        <strong>Key Insight:</strong> You don't need to count calories if you change the <em>types</em> of food you eat. Whole foods, lean proteins, vegetables, and fruits are naturally lower in calorie density than processed foods. Upgrade your food quality and portions often take care of themselves.
      </div>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> Counting calories works but isn't the only way. The plate method, protein prioritization, volume eating, and mindful habits can create a natural deficit. For people who find tracking stressful or obsessive, these approaches are highly effective and sustainable.
      </div>
    `
  },

  'meal-prep': {
    tag: 'Weight Loss / Practical',
    title: 'Meal Prep for Weight Loss: A Beginner\'s Guide',
    body: `
      <p>Meal prep is the secret weapon of people who successfully lose weight and keep it off. When healthy meals are ready to grab, you eliminate the two biggest diet killers: decision fatigue and convenience eating. Here's your complete system for getting started.</p>

      <h3>Why Meal Prep Works</h3>
      <p>When you're hungry and tired after a long day, the path of least resistance wins. If that path leads to a pre-made chicken and rice bowl, you eat healthy. If it leads to a drive-through, you don't. Meal prep removes willpower from the equation by making the healthy choice the easy choice. Studies show people who prepare meals at home eat 200-300 fewer calories per day than those who eat out frequently.</p>

      <h3>The Sunday System (2-Hour Prep)</h3>
      <ol>
        <li><strong>Plan your meals</strong> — Pick 2-3 protein sources, 2-3 carb sources, and 3-4 vegetables for the week. Keep it simple.</li>
        <li><strong>Shop with a list</strong> — Buy only what you need. Stick to the perimeter of the grocery store (produce, meat, dairy) and minimize processed aisles.</li>
        <li><strong>Batch cook proteins</strong> — Bake 3-4 lbs of chicken breast, cook a batch of ground turkey, and hard-boil a dozen eggs. Season differently for variety.</li>
        <li><strong>Prepare carb sources</strong> — Cook a large pot of rice, roast sweet potatoes, or prepare overnight oats.</li>
        <li><strong>Wash and chop vegetables</strong> — Pre-cut veggies are 10x more likely to get eaten. Roast a sheet pan of mixed veggies, prep salad greens, and portion raw snack veggies.</li>
        <li><strong>Assemble and store</strong> — Divide into meal containers. Most prepped meals last 4-5 days refrigerated. Freeze anything beyond that.</li>
      </ol>

      <h3>Beginner-Friendly Meal Prep Recipes</h3>
      <p><strong>Protein:</strong> Sheet-pan chicken thighs (season with different spices for variety), slow-cooker pulled chicken, baked turkey meatballs, or seasoned ground beef.</p>
      <p><strong>Carbs:</strong> Jasmine rice, roasted sweet potato cubes, quinoa, whole wheat pasta, or overnight oats.</p>
      <p><strong>Vegetables:</strong> Roasted broccoli and bell peppers, steamed green beans, sautéed spinach, raw cucumber and carrots with hummus.</p>

      <h3>Portion Guide for Weight Loss</h3>
      <p>Use your hand as a measuring tool: one palm of protein (4-6 oz), one cupped hand of carbs (½-¾ cup cooked), one fist of vegetables, and one thumb of fat (olive oil, nuts, avocado). This simple method gives most people a 400-500 calorie meal without any weighing or counting.</p>

      <div class="callout">
        <strong>Beginner Tip:</strong> Don't try to prep every single meal at once. Start by prepping lunches only. Once that becomes habit (2-3 weeks), add breakfasts. Small wins build momentum.
      </div>

      <h3>Essential Equipment</h3>
      <ul>
        <li>Glass meal prep containers (BPA-free, microwave-safe) — invest in quality</li>
        <li>A good sheet pan and parchment paper</li>
        <li>A rice cooker or instant pot (game-changer)</li>
        <li>Quality food scale (optional but helpful)</li>
        <li>Freezer bags for long-term storage</li>
      </ul>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> Meal prep doesn't have to be Instagram-perfect. Even basic prep — pre-cooked protein, washed vegetables, and portioned snacks — dramatically improves your nutrition. The two hours you spend on Sunday save you hours of decision-making and hundreds of excess calories all week.
      </div>
    `
  },

  'scale-lies': {
    tag: 'Weight Loss / Mindset',
    title: 'Why the Scale Lies: Understanding Body Composition',
    body: `
      <p>You've been dieting for two weeks. Your clothes feel looser, you look better in the mirror, and you have more energy. Then you step on the scale and it hasn't moved — or it's gone <em>up</em>. Before you panic or quit, understand this: the scale measures your relationship with gravity, not your progress.</p>

      <h3>What the Scale Actually Measures</h3>
      <p>Your scale weight is the sum of everything in your body: muscle, fat, water, bones, organs, food in your digestive tract, glycogen stores, and more. A single glass of water weighs half a pound. A large meal can weigh 2-3 lbs before digestion. Your body can hold 5-10 lbs of water depending on sodium intake, carb consumption, hormones, and stress levels. None of these fluctuations represent fat gain or loss.</p>

      <h3>Why Your Weight Fluctuates Daily</h3>
      <ul>
        <li><strong>Sodium intake</strong> — A high-sodium meal can cause 2-4 lbs of water retention within hours. This disappears in 1-2 days.</li>
        <li><strong>Carbohydrate intake</strong> — Every gram of glycogen (stored carbs) holds 3g of water. Eating more carbs after a low-carb period causes rapid "weight gain" that is 100% water.</li>
        <li><strong>Hormonal cycles</strong> — Women can retain 3-7 lbs of water during certain phases of their menstrual cycle.</li>
        <li><strong>Intense exercise</strong> — Creates inflammation and water retention for muscle repair. You often weigh MORE the day after a hard workout.</li>
        <li><strong>Stress and cortisol</strong> — High stress increases cortisol, which promotes water retention and can mask fat loss for weeks.</li>
        <li><strong>Digestion timing</strong> — Whether you've eaten or used the bathroom affects the number by 1-3 lbs.</li>
      </ul>

      <h3>Better Ways to Track Progress</h3>
      <p><strong>Weekly weight averages:</strong> Weigh yourself daily at the same time (morning, after bathroom, before eating) and compare weekly averages, not individual days. A downward trend over 2-4 weeks is what matters.</p>
      <p><strong>Progress photos:</strong> Take front, side, and back photos in the same lighting every 2-4 weeks. Visual changes often happen before scale changes, especially if you're building muscle while losing fat.</p>
      <p><strong>Measurements:</strong> Track waist, hips, chest, and thigh circumference. If your waist is shrinking but the scale isn't moving, you're losing fat.</p>
      <p><strong>How clothes fit:</strong> Your jeans don't lie. If they're getting looser, you're making progress regardless of the scale.</p>
      <p><strong>Performance metrics:</strong> Are you lifting heavier? Running further? Recovering faster? These indicate improved body composition.</p>

      <h3>Body Recomposition: The Scale's Worst Enemy</h3>
      <p>When you lift weights and eat enough protein during a fat loss phase, you can simultaneously lose fat and gain muscle. Since muscle is denser than fat, your body gets smaller while the scale stays the same or even goes up. This is especially common in beginners who can gain 1-2 lbs of muscle per month while losing fat at the same rate — resulting in zero scale change but dramatic visual transformation.</p>

      <div class="callout">
        <strong>Reality Check:</strong> It's physiologically impossible to gain a pound of fat overnight. That requires eating 3,500 calories <em>above</em> your maintenance. If the scale jumps 3 lbs after a big dinner, it's water and food weight. Give it 2-3 days.
      </div>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> Use the scale as one data point among many, not as your sole measure of success. Weekly averages, progress photos, measurements, and how you feel are more reliable indicators of actual progress. The scale measures weight, not worth or health.
      </div>
    `
  },

  'strength-beginners': {
    tag: 'Fitness / Beginner',
    title: 'Strength Training for Beginners: Your First 30 Days',
    body: `
      <p>Walking into a weight room for the first time can be intimidating. Machines you don't understand, people who seem to know exactly what they're doing, and the fear of looking foolish. Here's the truth: every single person in that gym started exactly where you are. This 30-day guide will take you from complete beginner to confident gym-goer.</p>

      <h3>Week 1-2: Learn the Movement Patterns</h3>
      <p>Every exercise falls into one of six fundamental movement patterns. Master these and you can do any workout:</p>
      <ul>
        <li><strong>Squat</strong> — Goblet squat (hold a dumbbell at chest). Trains quads, glutes, core.</li>
        <li><strong>Hinge</strong> — Romanian deadlift (dumbbells). Trains hamstrings, glutes, lower back.</li>
        <li><strong>Push (horizontal)</strong> — Dumbbell bench press. Trains chest, shoulders, triceps.</li>
        <li><strong>Pull (horizontal)</strong> — Dumbbell row. Trains back and biceps.</li>
        <li><strong>Push (vertical)</strong> — Overhead press. Trains shoulders and triceps.</li>
        <li><strong>Pull (vertical)</strong> — Lat pulldown. Trains back and biceps.</li>
      </ul>
      <p>Use light weights and focus entirely on form. If you can't control the weight through the full range of motion, it's too heavy. Record yourself on your phone and compare to tutorial videos.</p>

      <h3>Week 2-3: Build the Habit</h3>
      <p>Commit to 3 sessions per week (e.g., Monday, Wednesday, Friday). Full-body workouts are ideal for beginners because they hit every muscle group frequently and allow maximum practice of each movement. Keep sessions to 45 minutes — you don't need two-hour sessions to make progress. Consistency beats intensity at this stage.</p>

      <h3>Week 3-4: Start Progressive Overload</h3>
      <p>Progressive overload means gradually increasing the challenge over time. It's the single most important principle in strength training. Each session, try to do one of these:</p>
      <ul>
        <li>Add 1-2 more reps with the same weight</li>
        <li>Add 2.5-5 lbs to the exercise</li>
        <li>Do the same workout with shorter rest periods</li>
        <li>Add one more set</li>
      </ul>
      <p>You don't need to do all of these at once. Small, consistent progress compounds into massive results over months.</p>

      <h3>Essential Tips for Beginners</h3>
      <div class="callout">
        <strong>Soreness is normal.</strong> Delayed Onset Muscle Soreness (DOMS) peaks 24-48 hours after training and is worst in the first two weeks. It gets dramatically better as your body adapts. Don't skip workouts because of soreness — light movement actually helps.
      </div>
      <ul>
        <li><strong>Rest 60-90 seconds</strong> between sets. Use a timer.</li>
        <li><strong>Warm up</strong> with 5 minutes of walking or cycling plus a few light sets before your working sets.</li>
        <li><strong>Breathe</strong> — Exhale on the effort (pushing or pulling), inhale on the return.</li>
        <li><strong>Track your workouts</strong> — Write down exercises, weights, sets, and reps. You can't improve what you don't measure.</li>
        <li><strong>Eat enough protein</strong> — 0.7-1g per pound of body weight supports muscle recovery and growth.</li>
        <li><strong>Sleep 7-9 hours</strong> — Muscle is built during sleep, not during the workout.</li>
      </ul>

      <h3>Your First 30 Days Sample Schedule</h3>
      <p>Train Monday, Wednesday, Friday. Alternate between Workout A and Workout B. See the beginner 3-day workout plan on this page for the exact exercises. By day 30, you should feel comfortable with basic movements, see early strength gains, and have built a consistent gym habit.</p>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> The first 30 days are about learning, not lifting heavy. Focus on form, build the habit, and trust the process. Beginners experience the fastest strength gains of their entire training career — enjoy the "newbie gains" phase while it lasts.
      </div>
    `
  },

  'hiit-vs-steady': {
    tag: 'Fitness / Cardio',
    title: 'HIIT vs Steady-State Cardio: Which Burns More Fat?',
    body: `
      <p>The debate between High-Intensity Interval Training (HIIT) and steady-state cardio has raged in fitness circles for years. Social media would have you believe HIIT is the ultimate fat burner and steady-state is a waste of time. The reality is more nuanced — and the best approach probably uses both.</p>

      <h3>What Is HIIT?</h3>
      <p>HIIT alternates between short bursts of maximum effort (85-95% of max heart rate) and brief recovery periods. A typical session lasts 15-25 minutes. Examples include sprint intervals (30 sec sprint / 60 sec walk), cycling intervals, battle ropes, and metabolic circuits. The key is that work periods are genuinely intense — if you can hold a conversation, it's not HIIT.</p>

      <h3>What Is Steady-State Cardio?</h3>
      <p>Steady-state (also called LISS — Low-Intensity Steady State) maintains a consistent moderate effort (60-70% max heart rate) for 30-60+ minutes. Think brisk walking, light jogging, cycling at a comfortable pace, or swimming laps. You should be able to hold a conversation but feel slightly winded.</p>

      <h3>The Science: Calorie Burn Compared</h3>
      <p><strong>During the workout:</strong> HIIT burns more calories per minute than steady-state. A 20-minute HIIT session might burn 250-350 calories vs. 150-200 for 20 minutes of walking.</p>
      <p><strong>After the workout:</strong> HIIT creates an "afterburn effect" (EPOC — Excess Post-Exercise Oxygen Consumption) where your metabolism stays elevated for 12-24 hours post-workout. However, research shows this afterburn effect is smaller than often claimed — roughly 50-80 extra calories, not the hundreds some marketers suggest.</p>
      <p><strong>Total weekly comparison:</strong> When equated for total time, HIIT burns more calories. But most people can do steady-state cardio more frequently without burning out. Walking 45 minutes daily (7 days) burns far more weekly calories than three 20-minute HIIT sessions.</p>

      <h3>Pros and Cons of Each</h3>
      <p><strong>HIIT Pros:</strong> Time-efficient, improves cardiovascular fitness rapidly, increases metabolic rate, builds some muscle in legs.</p>
      <p><strong>HIIT Cons:</strong> High recovery cost, injury risk if form breaks down during fatigue, can interfere with strength training recovery, not sustainable daily, stressful on the nervous system.</p>
      <p><strong>Steady-State Pros:</strong> Low injury risk, minimal recovery cost, can be done daily, reduces stress and cortisol, improves aerobic base, pairs well with strength training.</p>
      <p><strong>Steady-State Cons:</strong> Time-consuming, less time-efficient per calorie, can become boring, doesn't build significant fitness beyond a certain point.</p>

      <h3>The Optimal Approach</h3>
      <div class="callout">
        <strong>The Best of Both Worlds:</strong> Do 2-3 strength training sessions per week, 1-2 HIIT sessions (on non-lifting days or after light training days), and aim for 8,000-10,000 daily steps through walking. This combination maximizes fat loss, builds muscle, improves cardiovascular fitness, and remains sustainable.
      </div>

      <p>Walking is the most underrated fat loss tool. It burns meaningful calories without spiking cortisol, requires zero recovery, and can be done anywhere. Many successful bodybuilders and physique athletes rely on walking, not HIIT, as their primary cardio method during fat loss phases.</p>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> HIIT is more time-efficient; steady-state is more sustainable. Neither is objectively "better" for fat loss — total calorie deficit is what matters. The ideal program combines both: HIIT for fitness and time efficiency, and daily walking for consistent calorie burn without the recovery cost.
      </div>
    `
  },

  'home-gym': {
    tag: 'Fitness / Equipment',
    title: 'Building a Home Gym on Any Budget',
    body: `
      <p>You don't need a $5,000 setup to get strong at home. Whether you have $50 or $2,000 to spend, there's an effective home gym configuration that fits your budget and goals. Here's how to build one at every price point, prioritizing equipment that gives you the most exercises per dollar.</p>

      <h3>The $50-$100 Starter Kit</h3>
      <p>With this budget, focus on bodyweight capability and minimal resistance:</p>
      <ul>
        <li><strong>Resistance bands set ($20-30)</strong> — Multiple resistance levels cover light to heavy. Useful for rows, presses, curls, lateral raises, and mobility work.</li>
        <li><strong>Door-mounted pull-up bar ($25-35)</strong> — Pull-ups, chin-ups, and hanging exercises are some of the best upper body builders that exist.</li>
        <li><strong>Yoga mat ($15-25)</strong> — Cushioning for floor exercises, stretching, and ab work.</li>
      </ul>
      <p>With this kit plus bodyweight exercises (push-ups, squats, lunges, dips off a chair), you can build a legitimately effective training program.</p>

      <h3>The $200-$500 Solid Foundation</h3>
      <p>This is where a home gym starts to rival commercial gyms for most exercises:</p>
      <ul>
        <li><strong>Adjustable dumbbells ($150-350)</strong> — The single best home gym investment. Brands like Bowflex SelectTech or PowerBlock give you 5-52+ lbs in one compact set. This alone enables dozens of exercises.</li>
        <li><strong>Adjustable bench ($100-200)</strong> — Flat, incline, and decline positions unlock chest presses, rows, shoulder work, and more. Look for one that adjusts to at least 6 positions.</li>
        <li><strong>Pull-up bar ($25-35)</strong> — If not purchased above.</li>
      </ul>
      <p>This three-piece setup covers 80% of what you'd do in a commercial gym for upper body and a significant portion of lower body training.</p>

      <h3>The $800-$1,500 Serious Setup</h3>
      <p>Add barbell training for heavy compound lifts:</p>
      <ul>
        <li><strong>Everything above</strong> plus:</li>
        <li><strong>Olympic barbell + weight plates ($300-600)</strong> — Enables heavy squats, deadlifts, bench press, and overhead press — the four most effective strength exercises.</li>
        <li><strong>Power rack / squat stand ($200-500)</strong> — Safety pins let you train heavy alone. Many racks include a pull-up bar attachment.</li>
        <li><strong>Rubber floor mats ($50-100)</strong> — Protect your floor and reduce noise from deadlifts.</li>
      </ul>

      <h3>The $1,500-$2,500 Dream Gym</h3>
      <ul>
        <li><strong>All of the above</strong> plus:</li>
        <li><strong>Cable pulley system ($200-500)</strong> — Enables face pulls, cable flies, tricep pushdowns, and dozens of isolation exercises with constant tension.</li>
        <li><strong>Specialty items</strong> — Dip attachment, landmine attachment, EZ curl bar, or a rower/assault bike for cardio.</li>
      </ul>

      <h3>Smart Shopping Tips</h3>
      <div class="callout">
        <strong>Save Money:</strong> Check Facebook Marketplace, Craigslist, and garage sales — especially in January (New Year's quitters) and summer. Gently used equipment at 40-60% off retail is common. Olympic weight plates hold their value well, so quality used plates are a great buy.
      </div>
      <ul>
        <li>Prioritize versatility over specialization — adjustable equipment beats single-purpose machines</li>
        <li>Buy quality for items you'll use daily (barbell, bench). Budget items work fine for accessories</li>
        <li>Avoid all-in-one home gym machines unless space is extremely limited — they're less effective per dollar</li>
        <li>Consider the floor space you have before buying. Measure twice, buy once</li>
      </ul>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> A $200 home gym with adjustable dumbbells and a bench is more than enough for most people. Build up gradually as your training advances. The best gym is the one you'll consistently use — and eliminating commute time makes home training incredibly convenient.
      </div>
    `
  },

  'best-exercises': {
    tag: 'Fitness / Training',
    title: 'The Best Exercises for Each Muscle Group',
    body: `
      <p>Not all exercises are created equal. Some movements activate more muscle fibers, allow heavier loading, and produce better results per rep than others. Here are the top evidence-based exercises for every major muscle group, ranked by effectiveness based on EMG studies and real-world results.</p>

      <h3>Chest</h3>
      <ul>
        <li><strong>Barbell Bench Press</strong> — The gold standard for chest development. Flat bench targets mid-chest, incline (30°) targets upper chest.</li>
        <li><strong>Dumbbell Press</strong> — Greater range of motion than barbell. Excellent for muscle activation and addressing imbalances.</li>
        <li><strong>Cable Fly / Pec Deck</strong> — Constant tension throughout the movement. Best for isolation and that chest "squeeze" feeling.</li>
        <li><strong>Push-Ups</strong> — Underrated. Progressive versions (weighted, deficit, archer) build serious chest mass with zero equipment.</li>
      </ul>

      <h3>Back</h3>
      <ul>
        <li><strong>Pull-Ups / Chin-Ups</strong> — The king of back exercises. Wide grip for lats, underhand for bicep involvement. Add weight once you can do 10+ clean reps.</li>
        <li><strong>Barbell Row</strong> — Builds thick, dense back muscles. Overhand grip for upper back, underhand for lats and biceps.</li>
        <li><strong>Seated Cable Row</strong> — Excellent for mid-back thickness and mind-muscle connection.</li>
        <li><strong>Face Pulls</strong> — Essential for rear delts and rotator cuff health. Everyone should do these.</li>
      </ul>

      <h3>Shoulders</h3>
      <ul>
        <li><strong>Overhead Press</strong> — Barbell or dumbbell. The primary mass builder for shoulders. Standing version also works core heavily.</li>
        <li><strong>Lateral Raises</strong> — Isolates the side delt, which creates that wide, capped shoulder look. Light weight, high reps, strict form.</li>
        <li><strong>Face Pulls / Rear Delt Fly</strong> — Balances out all the pressing by targeting the often-neglected rear delts.</li>
      </ul>

      <h3>Quadriceps</h3>
      <ul>
        <li><strong>Barbell Back Squat</strong> — The king of all exercises. Targets quads, glutes, core, and more. Nothing builds legs like heavy squats.</li>
        <li><strong>Front Squat</strong> — More quad-dominant than back squat. Also builds upper back strength and core stability.</li>
        <li><strong>Bulgarian Split Squat</strong> — Single-leg exercise that fixes imbalances and hammers the quads. Brutally effective.</li>
        <li><strong>Leg Extension</strong> — Isolation exercise for quad definition. Great as a finisher or pre-exhaust.</li>
      </ul>

      <h3>Hamstrings & Glutes</h3>
      <ul>
        <li><strong>Romanian Deadlift</strong> — The best hamstring builder. Eccentric loading through a deep stretch is highly effective for muscle growth.</li>
        <li><strong>Conventional Deadlift</strong> — Full posterior chain builder — glutes, hamstrings, back, traps.</li>
        <li><strong>Hip Thrust</strong> — Research shows it's the #1 glute activator. Heavy barbell hip thrusts build impressive glute strength and shape.</li>
        <li><strong>Lying Leg Curl</strong> — Isolates hamstrings. Slow negatives (3-4 seconds) increase effectiveness.</li>
      </ul>

      <h3>Arms (Biceps & Triceps)</h3>
      <ul>
        <li><strong>Barbell Curl</strong> — Heavy curls build bicep size. Use strict form, avoid swinging.</li>
        <li><strong>Incline Dumbbell Curl</strong> — Stretches the long head of the bicep for a fuller look. One of the best isolation moves.</li>
        <li><strong>Close-Grip Bench Press</strong> — Heavy tricep builder. Triceps make up 2/3 of arm size.</li>
        <li><strong>Overhead Tricep Extension</strong> — Targets the long head of the tricep, which creates the most visual arm size.</li>
      </ul>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> Build your program around compound movements (squat, deadlift, bench, row, OHP, pull-up) and use isolation exercises to target weak points. Quality of execution matters more than exercise selection — any exercise done with proper form and progressive overload will build muscle.
      </div>
    `
  },

  'recovery': {
    tag: 'Fitness / Recovery',
    title: 'Recovery and Rest Days: Why They Matter',
    body: `
      <p>Here's a counterintuitive truth: you don't get stronger in the gym. Training is the stimulus — it creates microscopic damage in muscle fibers. Growth happens during <em>recovery</em>, when your body repairs and rebuilds those fibers stronger than before. Skip recovery, and you skip the actual gains.</p>

      <h3>What Happens During Recovery</h3>
      <p>When you train, you create microtrauma in muscle tissue and deplete energy stores (glycogen). During rest, your body initiates a repair process: damaged proteins are replaced, new muscle fibers are synthesized, and glycogen stores are replenished. Growth hormone surges during deep sleep. Inflammation from training is resolved. Neural pathways that fire during exercise are consolidated, making you more efficient at movements.</p>
      <p>This process takes 48-72 hours for a given muscle group. Training the same muscles before recovery is complete doesn't double the stimulus — it interrupts the repair process and can lead to overtraining, stalled progress, and injury.</p>

      <h3>Signs You Need More Recovery</h3>
      <ul>
        <li><strong>Persistent fatigue</strong> — Feeling tired despite adequate sleep is the first warning sign.</li>
        <li><strong>Declining performance</strong> — Weights that used to feel manageable suddenly feel heavy. Sets get harder, not easier over time.</li>
        <li><strong>Chronic soreness</strong> — Some DOMS is normal. Being sore all the time is not.</li>
        <li><strong>Mood changes</strong> — Irritability, low motivation, and depression-like symptoms can indicate overtraining.</li>
        <li><strong>Frequent illness</strong> — Overtraining suppresses the immune system. Getting sick often is a red flag.</li>
        <li><strong>Poor sleep</strong> — Paradoxically, overtraining can disrupt sleep quality.</li>
        <li><strong>Elevated resting heart rate</strong> — A resting HR 5+ beats above normal in the morning can signal incomplete recovery.</li>
      </ul>

      <h3>How to Optimize Rest Days</h3>
      <p><strong>Active recovery</strong> is better than complete inactivity. Light walking, swimming, yoga, or stretching promotes blood flow (which delivers nutrients to muscles) without adding training stress. Aim for 20-30 minutes of low-intensity movement.</p>

      <h3>The Recovery Pillars</h3>
      <ol>
        <li><strong>Sleep (7-9 hours)</strong> — Non-negotiable. Growth hormone peaks during deep sleep. Poor sleep reduces protein synthesis by up to 18%. Keep a consistent sleep schedule, make your room cold and dark, and avoid screens 30 minutes before bed.</li>
        <li><strong>Nutrition</strong> — Eat at or slightly above maintenance on rest days if building muscle. Keep protein high (0.7-1g/lb body weight). Don't slash calories on rest days — your body needs fuel to rebuild.</li>
        <li><strong>Hydration</strong> — Dehydration impairs recovery, nutrient transport, and performance. Aim for half your body weight in ounces of water daily (a 170 lb person needs ~85 oz).</li>
        <li><strong>Stress management</strong> — Psychological stress produces the same cortisol response as physical stress. Meditation, walks in nature, social connection, and hobbies all support recovery.</li>
      </ol>

      <div class="callout">
        <strong>How Many Rest Days?</strong> Beginners: 3-4 rest days per week. Intermediate: 2-3 rest days. Advanced: 1-2 rest days. These are from <em>intense</em> training — light cardio and stretching don't count. When in doubt, take the rest day. You'll come back stronger.
      </div>

      <div class="callout callout-blue">
        <strong>Bottom Line:</strong> Recovery isn't laziness — it's when growth happens. Prioritize sleep, nutrition, hydration, and stress management. Schedule rest days with the same discipline you schedule workouts. Your body will reward you with better performance, fewer injuries, and more consistent progress.
      </div>
    `
  }
};

// ========== NAVIGATION ==========
const nav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-links a');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

// Scroll handling
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrolled / docHeight) * 100;

  // Scroll progress bar
  scrollProgress.style.width = progress + '%';

  // Nav background
  if (scrolled > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Back to top
  if (scrolled > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrolled >= top && scrolled < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Mobile menu
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// ========== SCROLL ANIMATIONS ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-in-section').forEach(el => {
  // Immediately show elements already in viewport
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    el.classList.add('visible');
  }
  observer.observe(el);
});

// ========== ARTICLE MODAL ==========
function openArticle(id) {
  const article = articles[id];
  if (!article) return;

  document.getElementById('articleTag').textContent = article.tag;
  document.getElementById('articleTitle').textContent = article.title;
  document.getElementById('articleBody').innerHTML = article.body;

  const modal = document.getElementById('articleModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  document.getElementById('articleModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('articleModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('articleModal')) {
    closeArticle();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeArticle();
});

// ========== WORKOUT TABS ==========
document.querySelectorAll('.workout-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.workout-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.workout-plan').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('plan-' + tab.dataset.plan).classList.add('active');
  });
});

function toggleDay(header) {
  const day = header.parentElement;
  day.classList.toggle('open');
}

// ========== FAQ ==========
function toggleFAQ(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');

  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

  // Toggle the clicked one
  if (!wasOpen) {
    item.classList.add('open');
  }
}

// ========== CALCULATORS ==========

// TDEE Calculator
function calcTDEE() {
  const age = parseInt(document.getElementById('tdee-age').value);
  const sex = document.getElementById('tdee-sex').value;
  const weight = parseFloat(document.getElementById('tdee-weight').value);
  const height = parseFloat(document.getElementById('tdee-height').value);
  const activity = parseFloat(document.getElementById('tdee-activity').value);

  if (!age || !weight || !height) {
    alert('Please fill in all fields.');
    return;
  }

  // Convert lbs to kg, inches to cm
  const weightKg = weight * 0.453592;
  const heightCm = height * 2.54;

  // Mifflin-St Jeor
  let bmr;
  if (sex === 'male') {
    bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
  } else {
    bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
  }

  const tdee = Math.round(bmr * activity);
  const mildDeficit = tdee - 300;
  const moderateDeficit = tdee - 500;
  const mildSurplus = tdee + 250;

  document.getElementById('tdee-value').textContent = tdee.toLocaleString();
  document.getElementById('tdee-breakdown').innerHTML = `
    <div class="calc-result-row"><span class="label">BMR (Basal Metabolic Rate)</span><span class="value">${Math.round(bmr).toLocaleString()} cal</span></div>
    <div class="calc-result-row"><span class="label">Maintenance (TDEE)</span><span class="value">${tdee.toLocaleString()} cal</span></div>
    <div class="calc-result-row"><span class="label">Mild Fat Loss (-300)</span><span class="value" style="color:var(--orange)">${mildDeficit.toLocaleString()} cal</span></div>
    <div class="calc-result-row"><span class="label">Fat Loss (-500)</span><span class="value" style="color:var(--orange)">${moderateDeficit.toLocaleString()} cal</span></div>
    <div class="calc-result-row"><span class="label">Lean Bulk (+250)</span><span class="value" style="color:var(--blue)">${mildSurplus.toLocaleString()} cal</span></div>
  `;

  const result = document.getElementById('tdee-result');
  result.classList.add('show');
}

// BMI Calculator
function calcBMI() {
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const height = parseFloat(document.getElementById('bmi-height').value);

  if (!weight || !height) {
    alert('Please fill in all fields.');
    return;
  }

  const bmi = (weight / (height * height)) * 703;
  const bmiRounded = bmi.toFixed(1);

  let category = '';
  let color = '';
  let context = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    color = 'var(--blue)';
    context = 'A BMI below 18.5 may indicate insufficient nutrition. Consider consulting a healthcare provider to ensure you\'re meeting your nutritional needs and rule out underlying conditions.';
  } else if (bmi < 25) {
    category = 'Normal Weight';
    color = 'var(--success)';
    context = 'Your BMI falls within the healthy range. Focus on maintaining good habits: regular exercise, balanced nutrition, and adequate sleep.';
  } else if (bmi < 30) {
    category = 'Overweight';
    color = 'var(--warning)';
    context = 'A BMI of 25-30 may indicate excess weight, but BMI doesn\'t account for muscle mass. A muscular person can have a "high" BMI while being very healthy. Consider body fat percentage for a better assessment.';
  } else {
    category = 'Obese';
    color = 'var(--orange)';
    context = 'A BMI over 30 is classified as obese. However, BMI is a screening tool, not a diagnosis. Factors like muscle mass, bone density, age, sex, and ethnicity affect its accuracy. Consult a healthcare provider for a comprehensive assessment.';
  }

  document.getElementById('bmi-value').textContent = bmiRounded;
  document.getElementById('bmi-value').style.color = color;
  document.getElementById('bmi-category').textContent = category;
  document.getElementById('bmi-context').innerHTML = `
    <p>${context}</p>
    <p style="margin-top:8px; font-size:0.85rem; color:var(--gray);">
      <strong>Important:</strong> BMI is a population-level screening tool. It does not measure body fat directly and does not account for muscle mass, bone density, or fat distribution. Athletes, elderly individuals, and pregnant women should use other assessments.
    </p>
  `;

  document.getElementById('bmi-result').classList.add('show');
}

// Macro Calculator
function calcMacros() {
  const weight = parseFloat(document.getElementById('macro-weight').value);
  const calories = parseInt(document.getElementById('macro-calories').value);
  const goal = document.getElementById('macro-goal').value;

  if (!weight || !calories) {
    alert('Please fill in all fields.');
    return;
  }

  let proteinPerLb, fatPercent;

  switch (goal) {
    case 'lose':
      proteinPerLb = 1.0;
      fatPercent = 0.25;
      break;
    case 'maintain':
      proteinPerLb = 0.8;
      fatPercent = 0.30;
      break;
    case 'gain':
      proteinPerLb = 1.0;
      fatPercent = 0.25;
      break;
  }

  const proteinGrams = Math.round(weight * proteinPerLb);
  const proteinCals = proteinGrams * 4;
  const fatCals = Math.round(calories * fatPercent);
  const fatGrams = Math.round(fatCals / 9);
  const carbCals = calories - proteinCals - fatCals;
  const carbGrams = Math.round(carbCals / 4);

  const goalLabel = goal === 'lose' ? 'Fat Loss' : goal === 'gain' ? 'Muscle Building' : 'Maintenance';

  document.getElementById('macro-breakdown').innerHTML = `
    <div style="margin-bottom: 12px;">
      <div class="calc-result-value" style="font-size: 1.5rem;">${goalLabel} Macros</div>
      <div class="calc-result-label">${calories} calories / day</div>
    </div>
    <div class="calc-result-row">
      <span class="label">&#127830; Protein</span>
      <span class="value" style="color:var(--orange)">${proteinGrams}g <span style="color:var(--gray); font-weight:400;">(${proteinCals} cal)</span></span>
    </div>
    <div class="calc-result-row">
      <span class="label">&#127834; Carbs</span>
      <span class="value" style="color:var(--blue)">${carbGrams}g <span style="color:var(--gray); font-weight:400;">(${carbCals} cal)</span></span>
    </div>
    <div class="calc-result-row">
      <span class="label">&#129361; Fat</span>
      <span class="value">${fatGrams}g <span style="color:var(--gray); font-weight:400;">(${fatCals} cal)</span></span>
    </div>
    <div style="margin-top: 16px; padding: 12px; background: rgba(255,99,72,0.06); border-radius: 8px; font-size: 0.85rem; color: var(--charcoal-light);">
      <strong>Split:</strong> ${Math.round(proteinCals/calories*100)}% protein / ${Math.round(carbCals/calories*100)}% carbs / ${Math.round(fatCals/calories*100)}% fat
    </div>
  `;

  document.getElementById('macro-result').classList.add('show');
}

// One-Rep Max Calculator
function calcORM() {
  const weight = parseFloat(document.getElementById('orm-weight').value);
  const reps = parseInt(document.getElementById('orm-reps').value);

  if (!weight || !reps) {
    alert('Please fill in all fields.');
    return;
  }

  // Brzycki formula
  const oneRM = Math.round(weight * (36 / (37 - reps)));

  document.getElementById('orm-value').textContent = oneRM + ' lbs';
  document.getElementById('orm-breakdown').innerHTML = `
    <div class="calc-result-row"><span class="label">1RM (100%)</span><span class="value" style="color:var(--orange)">${oneRM} lbs</span></div>
    <div class="calc-result-row"><span class="label">95% (2 reps)</span><span class="value">${Math.round(oneRM * 0.95)} lbs</span></div>
    <div class="calc-result-row"><span class="label">90% (3-4 reps)</span><span class="value">${Math.round(oneRM * 0.90)} lbs</span></div>
    <div class="calc-result-row"><span class="label">85% (5-6 reps)</span><span class="value">${Math.round(oneRM * 0.85)} lbs</span></div>
    <div class="calc-result-row"><span class="label">80% (7-8 reps)</span><span class="value">${Math.round(oneRM * 0.80)} lbs</span></div>
    <div class="calc-result-row"><span class="label">75% (8-10 reps)</span><span class="value">${Math.round(oneRM * 0.75)} lbs</span></div>
    <div class="calc-result-row"><span class="label">70% (10-12 reps)</span><span class="value">${Math.round(oneRM * 0.70)} lbs</span></div>
    <div class="calc-result-row"><span class="label">65% (12-15 reps)</span><span class="value">${Math.round(oneRM * 0.65)} lbs</span></div>
    <div class="calc-result-row"><span class="label">60% (15-20 reps)</span><span class="value">${Math.round(oneRM * 0.60)} lbs</span></div>
  `;

  document.getElementById('orm-result').classList.add('show');
}

// ========== SMOOTH HASH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, null, link.getAttribute('href'));
    }
  });
});
