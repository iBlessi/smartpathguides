const guides = {
'bitcoin-basics': {
level: 'beginner',
number: '01',
title: 'What Is Bitcoin? A Plain English Explanation',
desc: 'Understand the world\'s first cryptocurrency, how it works, and why it matters.',
content: `
<h3>The Basics</h3>
<p>Bitcoin is a digital currency that was created in 2009 by an anonymous person or group using the name Satoshi Nakamoto. Unlike the dollars in your bank account, Bitcoin isn't controlled by any government, bank, or company. It runs on a decentralized network of computers spread across the globe, and anyone can participate.</p>
<p>Think of Bitcoin as digital cash that you can send to anyone, anywhere in the world, without needing a middleman. When you send Bitcoin to someone, the transaction is recorded on a public ledger called the <strong>blockchain</strong> — a chain of blocks containing transaction records that's maintained by thousands of computers simultaneously.</p>
<h3>How Does It Actually Work?</h3>
<p>When you send Bitcoin, your transaction is broadcast to the network. Specialized computers called <strong>miners</strong> compete to verify and bundle transactions into blocks. This process, called <strong>Proof of Work</strong>, requires miners to solve complex mathematical puzzles. The first miner to solve the puzzle gets to add the block and earns newly created Bitcoin as a reward.</p>
<p>This system creates security through economic incentives. To tamper with the blockchain, an attacker would need to control more than half of all mining power worldwide — a feat that's practically impossible given the enormous scale of the network.</p>
<div class="highlight-box"><strong>Key fact:</strong> There will only ever be 21 million Bitcoin. As of 2026, roughly 19.8 million have been mined. This fixed supply is one reason many people consider Bitcoin a hedge against inflation, similar to digital gold.</div>
<h3>Why Does Bitcoin Have Value?</h3>
<p>Bitcoin's value comes from several factors: its <strong>scarcity</strong> (fixed 21 million supply), <strong>utility</strong> (borderless, censorship-resistant payments), <strong>network effects</strong> (millions of users and businesses accept it), and <strong>security</strong> (the most battle-tested blockchain in existence). In January 2024, the SEC approved spot Bitcoin ETFs in the United States, giving institutional investors easy access and further legitimizing Bitcoin as an asset class.</p>
<h3>Common Misconceptions</h3>
<ul>
<li><strong>"Bitcoin is anonymous"</strong> — It's actually pseudonymous. All transactions are publicly visible on the blockchain, linked to wallet addresses rather than real names. With enough effort, transactions can be traced.</li>
<li><strong>"Bitcoin is only used by criminals"</strong> — Studies show illicit use accounts for less than 1% of all Bitcoin transactions. Most users are investors, savers, and people sending remittances.</li>
<li><strong>"Bitcoin wastes energy"</strong> — While Bitcoin mining does consume energy, over 50% now comes from renewable sources. The debate over energy use is nuanced and ongoing.</li>
</ul>
<h3>Should You Buy Bitcoin?</h3>
<p>Bitcoin is a volatile asset. Its price has seen drops of 50% or more multiple times throughout its history, but it has also delivered extraordinary long-term returns for early adopters. If you're considering buying Bitcoin, only invest what you can afford to lose, educate yourself thoroughly, and consider dollar-cost averaging rather than trying to time the market.</p>
<div class="warning-box"><strong>Remember:</strong> This is educational content, not financial advice. Always do your own research before investing in any cryptocurrency.</div>
`
},
'ethereum-smart': {
level: 'beginner',
number: '02',
title: 'Understanding Ethereum and Smart Contracts',
desc: 'Learn how Ethereum goes beyond digital currency to power a programmable blockchain.',
content: `
<h3>Ethereum: More Than a Cryptocurrency</h3>
<p>While Bitcoin was designed primarily as digital money, Ethereum — launched in 2015 by Vitalik Buterin — was built as a programmable blockchain. Yes, Ethereum has its own cryptocurrency called <strong>Ether (ETH)</strong>, but the real innovation is what you can build on top of it: self-executing programs called <strong>smart contracts</strong>.</p>
<p>Think of Ethereum as a global computer that anyone can program. Instead of running applications on servers owned by Amazon or Google, developers can deploy code on Ethereum's decentralized network, where it runs exactly as programmed without any possibility of censorship, downtime, or third-party interference.</p>
<h3>What Are Smart Contracts?</h3>
<p>A smart contract is a piece of code that automatically executes when certain conditions are met. Imagine a vending machine: you put in money, select an item, and the machine gives it to you — no cashier needed. Smart contracts work the same way but for almost anything: financial transactions, insurance payouts, voting systems, supply chain tracking, and much more.</p>
<div class="highlight-box"><strong>Real example:</strong> A decentralized lending platform uses smart contracts to let you deposit crypto as collateral and borrow against it. The contract automatically manages interest rates, liquidation thresholds, and repayments — no bank required.</div>
<h3>The Merge and Proof of Stake</h3>
<p>In September 2022, Ethereum completed "The Merge," transitioning from energy-intensive Proof of Work mining to <strong>Proof of Stake</strong>. Instead of miners competing with computing power, validators now stake (lock up) their ETH as collateral to verify transactions. This reduced Ethereum's energy consumption by approximately 99.95% and enabled ETH holders to earn staking rewards of around 2-3% APY as of 2026.</p>
<h3>The Ethereum Ecosystem</h3>
<p>Ethereum is the backbone of several major crypto movements:</p>
<ul>
<li><strong>DeFi (Decentralized Finance):</strong> Lending, borrowing, trading, and earning interest without banks. Billions of dollars are locked in Ethereum-based DeFi protocols.</li>
<li><strong>NFTs:</strong> Non-fungible tokens for digital art, collectibles, gaming items, and proof of ownership.</li>
<li><strong>DAOs:</strong> Decentralized Autonomous Organizations where token holders vote on decisions collectively.</li>
<li><strong>Layer 2s:</strong> Networks like Arbitrum, Optimism, and Base that process transactions faster and cheaper while inheriting Ethereum's security.</li>
</ul>
<h3>ETH as an Investment</h3>
<p>With the approval of spot Ethereum ETFs in the US in 2024, institutional investors now have easy access to ETH. The combination of staking yields, a deflationary supply mechanism (EIP-1559 burns ETH with each transaction), and the growing ecosystem makes ETH a fundamentally different investment proposition than Bitcoin. Both have roles in a diversified crypto portfolio.</p>
<div class="warning-box"><strong>Note:</strong> Ethereum is complex and rapidly evolving. Prices are volatile, and smart contract bugs can result in loss of funds. Approach with education and caution.</div>
`
},
'buy-first': {
level: 'beginner',
number: '03',
title: 'How to Buy Your First Cryptocurrency Safely',
desc: 'A step-by-step walkthrough for purchasing crypto for the first time.',
content: `
<h3>Step 1: Choose a Reputable Exchange</h3>
<p>The safest way to buy cryptocurrency as a beginner is through a regulated exchange. The top options in 2026 include <strong>Coinbase</strong> (easiest for beginners), <strong>Kraken</strong> (best for low fees and advanced features), and <strong>Gemini</strong> (strongest security focus). Look for exchanges that are licensed in your jurisdiction, offer insurance on deposits, and have a track record free of major security breaches.</p>
<div class="highlight-box"><strong>Tip:</strong> Avoid obscure exchanges offering too-good-to-be-true deals. Stick with well-known, regulated platforms, especially when starting out.</div>
<h3>Step 2: Create and Verify Your Account</h3>
<p>All legitimate exchanges require <strong>KYC (Know Your Customer)</strong> verification. You'll need to provide a government-issued ID and possibly a selfie. This typically takes 5-30 minutes. While it may feel intrusive, KYC is a regulatory requirement that helps prevent fraud and money laundering.</p>
<h3>Step 3: Secure Your Account</h3>
<p>Before depositing any money, set up strong security measures:</p>
<ul>
<li><strong>Two-Factor Authentication (2FA):</strong> Use an authenticator app like Google Authenticator or Authy — never SMS-based 2FA, which is vulnerable to SIM swapping.</li>
<li><strong>Strong, unique password:</strong> Use a password manager to create and store a complex password.</li>
<li><strong>Withdrawal address whitelisting:</strong> If available, enable this feature so crypto can only be sent to addresses you've pre-approved.</li>
</ul>
<h3>Step 4: Deposit Funds</h3>
<p>Most exchanges accept bank transfers (ACH in the US), wire transfers, and debit cards. Bank transfers are typically free or low-cost but take 1-3 business days. Debit cards offer instant purchasing but charge higher fees (usually 2-5%). Avoid using credit cards, as most issuers treat crypto purchases as cash advances with high fees.</p>
<h3>Step 5: Make Your First Purchase</h3>
<p>Start small — many exchanges let you buy as little as $1 worth of crypto. For your first purchase, Bitcoin (BTC) or Ethereum (ETH) are the safest choices due to their track records and liquidity. Use a <strong>limit order</strong> to set your desired purchase price rather than a market order, which may execute at a slightly worse price.</p>
<h3>Step 6: Consider Your Storage Strategy</h3>
<p>For small amounts (under $1,000), keeping crypto on a reputable exchange is reasonable. For larger holdings, consider transferring to a <strong>hardware wallet</strong> like a Ledger or Trezor for maximum security. Write down your seed phrase (recovery words) and store it in a safe physical location — never digitally.</p>
<h3>Common Beginner Mistakes to Avoid</h3>
<ul>
<li>Investing more than you can afford to lose</li>
<li>Trying to time the market (consider dollar-cost averaging instead)</li>
<li>Falling for social media hype or "guaranteed return" scams</li>
<li>Not setting up proper account security before depositing funds</li>
<li>Panic selling during market dips</li>
</ul>
<div class="warning-box"><strong>Golden rule:</strong> If someone promises guaranteed returns in crypto, it's a scam. No legitimate investment guarantees returns, and crypto is especially volatile.</div>
`
},
'wallets': {
level: 'beginner',
number: '04',
title: 'Crypto Wallets Explained: Hot vs Cold Storage',
desc: 'Understand the different types of wallets and how to keep your crypto safe.',
content: `
<h3>What Is a Crypto Wallet?</h3>
<p>A crypto wallet doesn't actually "store" your cryptocurrency. Your coins always live on the blockchain. What a wallet stores is your <strong>private key</strong> — a secret code that proves you own your crypto and lets you send it. Think of it like this: the blockchain is a public safe deposit box, and your private key is the only key that opens it.</p>
<p>There are two main categories: <strong>hot wallets</strong> (connected to the internet) and <strong>cold wallets</strong> (offline storage). Each has different tradeoffs between convenience and security.</p>
<h3>Hot Wallets: Always Connected</h3>
<p>Hot wallets are software applications that run on your phone, computer, or browser. They're free, convenient, and give you instant access to your crypto. Popular options include:</p>
<ul>
<li><strong>MetaMask:</strong> The most popular Ethereum wallet. Browser extension and mobile app. Essential for DeFi and NFTs.</li>
<li><strong>Trust Wallet:</strong> Multi-chain mobile wallet supporting Bitcoin, Ethereum, and dozens of other blockchains.</li>
<li><strong>Coinbase Wallet:</strong> Self-custody wallet (separate from the Coinbase exchange) with a user-friendly interface.</li>
<li><strong>Phantom:</strong> Popular for Solana but now supports Ethereum and Bitcoin too.</li>
</ul>
<div class="highlight-box"><strong>Important:</strong> "Not your keys, not your crypto." When you keep crypto on an exchange, the exchange controls your private keys. A self-custody wallet means only you have access — but also only you are responsible if you lose your keys.</div>
<h3>Cold Wallets: Maximum Security</h3>
<p>Cold wallets are physical devices that store your private keys completely offline. They only connect to a computer briefly when you need to sign a transaction. Leading options include:</p>
<ul>
<li><strong>Ledger Nano X / Ledger Stax:</strong> The most popular hardware wallets. Support thousands of cryptocurrencies. Bluetooth-enabled for mobile use.</li>
<li><strong>Trezor Model T / Safe 5:</strong> Open-source hardware wallets with touchscreen interfaces. Strong reputation for security.</li>
</ul>
<p>Hardware wallets cost between $60 and $250, but they provide the highest level of security for your crypto holdings. They're immune to malware, phishing attacks, and remote hacking because your private keys never leave the device.</p>
<h3>Seed Phrases: Your Ultimate Backup</h3>
<p>When you create any self-custody wallet (hot or cold), you receive a <strong>seed phrase</strong> — typically 12 or 24 words. This phrase can restore your wallet on any compatible device. It is the most important thing to protect.</p>
<ul>
<li>Write it down on paper or engrave it on metal</li>
<li>Never store it digitally (no photos, no cloud storage, no notes apps)</li>
<li>Never share it with anyone — no legitimate service will ever ask for it</li>
<li>Consider splitting copies across multiple secure physical locations</li>
</ul>
<h3>Which Wallet Should You Use?</h3>
<p>Most people benefit from using both types. Keep a small amount in a hot wallet for everyday use and DeFi interactions, and store the majority of your holdings in a cold wallet. Think of it like keeping cash in your pocket for daily spending, while your savings stay locked in a bank vault.</p>
<div class="warning-box"><strong>Security tip:</strong> The number one cause of crypto loss is losing access to your seed phrase or sharing it with scammers. Protect it like you would protect the deed to your house.</div>
`
},
'stablecoins': {
level: 'beginner',
number: '05',
title: 'What Are Stablecoins and Why Do They Matter?',
desc: 'Learn about dollar-pegged crypto tokens and their critical role in the ecosystem.',
content: `
<h3>Stablecoins: Crypto Without the Volatility</h3>
<p>A stablecoin is a cryptocurrency designed to maintain a stable value, usually pegged 1:1 to the US dollar. While Bitcoin and Ethereum can swing 10% or more in a single day, one USDC or USDT is intended to always be worth approximately $1. They serve as the "dollars" of the crypto world — a safe harbor when markets are volatile and the primary medium for trading and DeFi.</p>
<h3>Types of Stablecoins</h3>
<p>There are three main categories, each with different mechanisms for maintaining their peg:</p>
<ul>
<li><strong>Fiat-Backed (Centralized):</strong> Backed by actual dollars held in bank accounts. Examples: USDC (Circle), USDT (Tether). For every token in circulation, the issuer holds $1 in reserves. These are the most widely used stablecoins.</li>
<li><strong>Crypto-Backed (Decentralized):</strong> Backed by other cryptocurrencies locked in smart contracts. Example: DAI (MakerDAO). These are over-collateralized — typically $1.50+ of crypto backs each $1 of stablecoin — to absorb price fluctuations in the collateral.</li>
<li><strong>Algorithmic:</strong> Use software algorithms to manage supply and demand to maintain the peg. These are the riskiest category. The collapse of UST/Luna in 2022, which wiped out $40 billion in value, demonstrated the dangers of algorithmic stablecoins.</li>
</ul>
<h3>Why Stablecoins Matter</h3>
<p>Stablecoins are the backbone of the crypto economy for several reasons:</p>
<ul>
<li><strong>Trading:</strong> Most crypto trading pairs use stablecoins (BTC/USDT, ETH/USDC). They let you move in and out of positions without converting back to fiat currency.</li>
<li><strong>DeFi:</strong> Lending, borrowing, and yield farming protocols primarily operate with stablecoins. You can earn 4-8% APY lending stablecoins on reputable platforms.</li>
<li><strong>Remittances:</strong> Sending $100 in USDC to another country costs a few cents and takes minutes, compared to $25+ and several days for traditional wire transfers.</li>
<li><strong>Hedging:</strong> During market downturns, traders convert volatile crypto to stablecoins to preserve value without leaving the crypto ecosystem entirely.</li>
</ul>
<div class="highlight-box"><strong>Scale:</strong> As of 2026, the total stablecoin market cap exceeds $200 billion. USDT alone processes more daily transaction volume than many traditional payment networks.</div>
<h3>Risks to Understand</h3>
<p>Stablecoins are not risk-free. USDT has faced ongoing scrutiny about whether its reserves are fully backed. Fiat-backed stablecoins can be frozen by their issuers (and have been, in cases of suspected illicit activity). Regulatory scrutiny is intensifying, with multiple countries developing stablecoin-specific legislation.</p>
<h3>Choosing a Stablecoin</h3>
<p>For beginners, <strong>USDC</strong> is generally considered the safest option due to its regular audits by major accounting firms and full backing by cash and short-term US treasuries. <strong>USDT</strong> has the most liquidity and widest exchange support. <strong>DAI</strong> is the top choice for those who prefer decentralized alternatives, though it carries additional smart contract risk.</p>
<div class="warning-box"><strong>Remember:</strong> Even stablecoins can temporarily lose their peg during extreme market stress. USDC briefly dropped to $0.87 during the Silicon Valley Bank crisis in 2023 before recovering. Diversification across stablecoin types can help manage risk.</div>
`
},
'defi': {
level: 'intermediate',
number: '06',
title: 'DeFi Explained: Decentralized Finance for Regular People',
desc: 'How DeFi recreates banking, lending, and trading without intermediaries.',
content: `
<h3>What Is DeFi?</h3>
<p>Decentralized Finance, or DeFi, refers to a collection of financial applications built on blockchain technology — primarily Ethereum — that replicate traditional banking services without centralized intermediaries. Instead of a bank approving your loan, a smart contract does it. Instead of a stockbroker executing your trade, an automated market maker handles it. DeFi aims to create an open, permissionless, and transparent financial system accessible to anyone with an internet connection.</p>
<h3>Core DeFi Applications</h3>
<ul>
<li><strong>Decentralized Exchanges (DEXs):</strong> Platforms like Uniswap and SushiSwap let you trade cryptocurrencies directly from your wallet, without creating an account or trusting a centralized exchange with your funds. They use liquidity pools — collections of tokens provided by users — to facilitate trades.</li>
<li><strong>Lending and Borrowing:</strong> Protocols like Aave and Compound let you lend your crypto to earn interest or borrow against your holdings. Interest rates adjust algorithmically based on supply and demand. No credit checks required — your collateral is your creditworthiness.</li>
<li><strong>Yield Farming:</strong> The practice of moving crypto between DeFi protocols to maximize returns. Liquidity providers earn trading fees and often additional token rewards for supplying assets to pools.</li>
<li><strong>Stablecoins and Savings:</strong> Earn yields on stablecoins that often exceed traditional savings account rates, though with additional risk from smart contract vulnerabilities.</li>
</ul>
<h3>How a DeFi Transaction Works</h3>
<p>Let's say you want to swap ETH for USDC on Uniswap:</p>
<ol>
<li>Connect your wallet (like MetaMask) to uniswap.org</li>
<li>Select the tokens you want to swap and the amount</li>
<li>The smart contract calculates the exchange rate based on the liquidity pool</li>
<li>You approve the transaction and pay a gas fee</li>
<li>The swap executes in seconds, and tokens appear in your wallet</li>
</ol>
<p>No account creation, no KYC, no waiting period. This permissionless access is DeFi's greatest strength — and also a reason regulators are paying close attention.</p>
<h3>DeFi Risks</h3>
<p>DeFi offers exciting opportunities but carries significant risks:</p>
<ul>
<li><strong>Smart Contract Bugs:</strong> Code vulnerabilities have led to billions in losses. Even audited protocols can have exploits.</li>
<li><strong>Impermanent Loss:</strong> Liquidity providers can lose value when token prices change relative to each other.</li>
<li><strong>Rug Pulls:</strong> Malicious projects that drain liquidity pools. Stick to well-established protocols.</li>
<li><strong>Regulatory Risk:</strong> Governments worldwide are developing DeFi regulations that could restrict access or require compliance.</li>
</ul>
<div class="warning-box"><strong>Start small.</strong> If you're new to DeFi, begin with small amounts on well-established protocols. The learning curve is steep, and mistakes can be costly and irreversible.</div>
`
},
'bitcoin-etf': {
level: 'intermediate',
number: '07',
title: 'Bitcoin ETFs: What They Are and How to Invest',
desc: 'Understand spot Bitcoin ETFs and how they bring crypto to traditional investors.',
content: `
<h3>What Is a Bitcoin ETF?</h3>
<p>A Bitcoin Exchange-Traded Fund (ETF) is a financial product that tracks the price of Bitcoin and trades on traditional stock exchanges like the NYSE or NASDAQ. Instead of buying, storing, and securing Bitcoin directly, investors can buy shares of a Bitcoin ETF through their regular brokerage account — the same way they'd buy shares of Apple or an S&P 500 index fund.</p>
<p>In January 2024, the SEC approved 11 spot Bitcoin ETFs in the United States, marking a watershed moment for the crypto industry. "Spot" means these funds actually hold real Bitcoin (as opposed to earlier futures-based ETFs that used derivatives contracts).</p>
<h3>Major Bitcoin ETFs</h3>
<ul>
<li><strong>BlackRock iShares Bitcoin Trust (IBIT):</strong> The largest Bitcoin ETF with over $55 billion in cumulative net inflows. Managed by the world's largest asset manager. Expense ratio: 0.25%.</li>
<li><strong>Fidelity Wise Origin Bitcoin Fund (FBTC):</strong> Popular with existing Fidelity customers. Strong custodial reputation.</li>
<li><strong>ARK 21Shares Bitcoin ETF (ARKB):</strong> Managed by Cathie Wood's ARK Invest. Appeals to growth-oriented investors.</li>
<li><strong>Grayscale Bitcoin Trust (GBTC):</strong> The converted original Bitcoin trust. Higher expense ratio (1.5%) but historically significant.</li>
</ul>
<div class="highlight-box"><strong>Scale:</strong> As of February 2026, US spot Bitcoin ETFs hold approximately $91 billion in assets, representing about 6% of Bitcoin's total market capitalization. BlackRock's IBIT recently attracted $275 million in a single day, demonstrating sustained institutional demand.</div>
<h3>Pros of Bitcoin ETFs</h3>
<ul>
<li><strong>Simplicity:</strong> No wallets, private keys, or exchanges to manage. Buy and sell like any stock.</li>
<li><strong>Tax advantages:</strong> Available in IRAs and 401(k) plans. Familiar tax reporting through standard brokerage forms.</li>
<li><strong>Institutional custody:</strong> Bitcoin held by regulated custodians (Coinbase Custody, Fidelity) with institutional-grade security.</li>
<li><strong>Regulatory clarity:</strong> ETFs operate under SEC oversight, providing investor protections not available with direct crypto ownership.</li>
</ul>
<h3>Cons and Considerations</h3>
<ul>
<li><strong>Fees:</strong> Annual expense ratios of 0.19% - 1.5% eat into returns over time. Holding Bitcoin directly has no ongoing fees.</li>
<li><strong>No self-custody:</strong> You don't actually own Bitcoin. You own shares of a fund. You can't send Bitcoin to someone, use it in DeFi, or take possession of it.</li>
<li><strong>Trading hours:</strong> ETFs only trade during stock market hours. Bitcoin trades 24/7, meaning prices can gap between market close and open.</li>
<li><strong>Tracking error:</strong> ETF prices may slightly deviate from Bitcoin's actual price.</li>
</ul>
<h3>How to Invest</h3>
<p>If you have a brokerage account (Fidelity, Charles Schwab, Robinhood, etc.), you can buy Bitcoin ETF shares right now. Search for the ticker symbol (IBIT, FBTC, ARKB, etc.), decide how much to invest, and place a buy order. Many investors use dollar-cost averaging — buying a fixed dollar amount regularly — to reduce the impact of volatility.</p>
<div class="warning-box"><strong>Important:</strong> Bitcoin ETFs carry the full volatility risk of Bitcoin. Prices can drop 50% or more. Only invest what you can afford to lose, and consider Bitcoin ETFs as one part of a diversified portfolio.</div>
`
},
'eth-staking': {
level: 'intermediate',
number: '08',
title: 'Ethereum Staking: Earn Passive Income on Your Crypto',
desc: 'How to stake ETH, compare methods, and understand the risks and rewards.',
content: `
<h3>What Is Ethereum Staking?</h3>
<p>Since Ethereum's transition to Proof of Stake in September 2022, ETH holders can "stake" their tokens to help secure the network and earn rewards in return. Staking involves locking up ETH as collateral — validators who process transactions honestly earn rewards, while those who act maliciously risk losing their stake (a process called "slashing").</p>
<p>As of early 2026, approximately 30% of all ETH is staked, with annual percentage yields (APY) ranging from 2% to 3% depending on the staking method you choose.</p>
<h3>Staking Methods Compared</h3>
<p><strong>Solo Staking (32 ETH minimum)</strong><br>
Run your own validator node. Highest rewards (2.5-3% APY) since you keep 100% of earnings with no protocol fees. Requires 32 ETH (worth tens of thousands of dollars), a dedicated computer, stable internet, and technical knowledge. Best for experienced users who want maximum control and returns.</p>
<p><strong>Liquid Staking (Any amount)</strong><br>
Platforms like Lido (stETH) and Rocket Pool (rETH) let you stake any amount of ETH. You receive a liquid token representing your staked position that can be used in DeFi while still earning staking rewards. Typical APY: 2.3-2.6% after the protocol's 10% fee. This is the most popular method, with Lido alone holding about 25% of all staked ETH.</p>
<p><strong>Exchange Staking (Easiest)</strong><br>
Coinbase, Kraken, and other major exchanges offer one-click staking. The simplest option but typically offers lower yields (1.9-2.9% APY) due to higher fees. Comes with counterparty risk since your ETH sits on the exchange. Withdrawals may take days or weeks.</p>
<div class="highlight-box"><strong>Comparison:</strong> Liquid staking offers the best balance of yield and flexibility for most users. Solo staking maximizes returns but requires significant technical and financial commitment. Exchange staking sacrifices yield for convenience.</div>
<h3>Staking Rewards Breakdown</h3>
<p>Your staking rewards come from three sources:</p>
<ul>
<li><strong>Block Rewards:</strong> Base rewards for proposing and attesting to blocks on the network.</li>
<li><strong>Transaction Fees:</strong> Priority fees paid by users who want their transactions processed faster.</li>
<li><strong>MEV Rewards:</strong> Maximum Extractable Value from optimizing block ordering (available through MEV-boost for solo stakers, built into most liquid staking protocols).</li>
</ul>
<h3>Risks of Staking</h3>
<ul>
<li><strong>Slashing:</strong> Validators that go offline for extended periods or act maliciously can lose a portion of their staked ETH.</li>
<li><strong>Price risk:</strong> ETH's value can decline while staked, potentially losing more than the staking rewards earn.</li>
<li><strong>Smart contract risk:</strong> Liquid staking protocols could have code vulnerabilities. Lido's dominance also raises centralization concerns.</li>
<li><strong>Opportunity cost:</strong> ETH staking yields (2-3%) are currently lower than US Treasury yields (~4.6%). The thesis relies on ETH price appreciation to supplement yield.</li>
</ul>
<h3>How to Start</h3>
<p>For most users, liquid staking through Lido or Rocket Pool is the recommended approach. Connect your wallet to the protocol's website, deposit ETH, and receive liquid staking tokens. Your rewards accrue automatically as the token's value appreciates relative to ETH.</p>
<div class="warning-box"><strong>Tax note:</strong> Staking rewards are typically taxable as income in most jurisdictions. Keep records and consult a tax professional about your specific obligations.</div>
`
},
'nfts-2026': {
level: 'intermediate',
number: '09',
title: 'NFTs in 2026: Are They Still Relevant?',
desc: 'The evolution of NFTs beyond profile pictures into real-world utility.',
content: `
<h3>The NFT Market Reality in 2026</h3>
<p>Let's be honest: the NFT market in 2026 looks very different from the speculative frenzy of 2021-2022, when cartoon apes sold for millions. Trading volumes have dropped dramatically from peak levels, and many early collections have lost 90%+ of their value. The era of paying six figures for a profile picture is largely over.</p>
<p>But that doesn't mean NFTs are dead. The technology — non-fungible tokens that prove unique digital ownership on a blockchain — is quietly evolving into genuinely useful applications.</p>
<h3>What's Actually Working</h3>
<ul>
<li><strong>Digital Identity and Credentials:</strong> Universities and certification bodies are issuing diplomas and professional credentials as NFTs — verifiable, tamper-proof, and portable. You own your credentials rather than relying on institutions to maintain records.</li>
<li><strong>Gaming and Virtual Worlds:</strong> In-game items, characters, and land that players truly own and can trade or use across compatible games. This is where significant NFT volume still exists.</li>
<li><strong>Event Ticketing:</strong> NFT tickets eliminate scalping and fraud, allow artists to receive royalties on resales, and create verifiable collectibles from experiences.</li>
<li><strong>Real-World Asset Tokenization:</strong> Real estate, art, and financial instruments are being tokenized as NFTs to enable fractional ownership and improved liquidity.</li>
</ul>
<h3>The Investment Reality</h3>
<p>Most NFT collections from 2021-2022 have lost significant value. The "flip for profit" model that drove early adoption has largely failed for retail investors. In 2026, approaching NFTs as speculative investments carries high risk.</p>
<p>The more defensible use cases involve NFTs with clear, ongoing utility — gaming items in active games, credentials, or tokenized assets with real-world backing. Pure "digital art" NFTs without additional utility remain highly speculative.</p>
<div class="warning-box"><strong>Before buying any NFT:</strong> Research the team thoroughly, understand what utility the NFT provides beyond speculation, assess the liquidity (how easy would it be to sell?), and only invest what you can afford to lose entirely.</div>
`
},
'future-blockchain': {
level: 'intermediate',
number: '10',
title: 'The Future of Blockchain: Beyond Cryptocurrency',
desc: 'How blockchain technology is reshaping finance, supply chains, and digital identity.',
content: `
<h3>Beyond Speculation: Blockchain as Infrastructure</h3>
<p>Much of the public discourse about blockchain focuses on price speculation. But underneath the noise, blockchain technology is quietly being integrated into systems that affect daily life — often invisibly. In 2026, the most transformative blockchain applications aren't about getting rich; they're about restructuring how trust, ownership, and data work.</p>
<h3>Institutional Finance and Tokenization</h3>
<p>The most concrete mainstream adoption is happening in traditional finance. BlackRock's BUIDL fund — a tokenized money market fund on Ethereum — surpassed $1 billion in assets within weeks of launch in 2024. By 2026, major banks including JPMorgan, Citibank, and HSBC are running blockchain-based settlement systems that reduce transaction times from days to minutes and cut costs by 30-50% compared to traditional infrastructure.</p>
<p>The tokenization of real-world assets (RWAs) is accelerating. Treasury bonds, private equity funds, and real estate are being put on-chain, enabling 24/7 trading, fractional ownership, and programmable compliance. Major financial institutions estimate the tokenized asset market could reach $10+ trillion by 2030.</p>
<h3>Central Bank Digital Currencies (CBDCs)</h3>
<p>Over 130 countries are exploring or developing Central Bank Digital Currencies — government-issued digital money that would run on blockchain or similar distributed ledger technology. China's digital yuan (e-CNY) has processed hundreds of billions in transactions. The European Central Bank's digital euro pilot launched in 2024. The US remains cautious, but the Federal Reserve has published extensive research on potential designs.</p>
<p>CBDCs are controversial: they enable faster, cheaper payments and financial inclusion, but also give governments unprecedented visibility into transactions and potential control over spending. This tradeoff between efficiency and privacy will define monetary policy debates for the next decade.</p>
<h3>Supply Chain and Traceability</h3>
<p>Walmart now uses blockchain to trace the provenance of produce in its stores — what used to take 7 days to trace now takes 2.2 seconds. Similar systems are being deployed for pharmaceutical tracking (reducing counterfeit medications), luxury goods authentication, and conflict mineral tracking in electronics supply chains.</p>
<h3>Digital Identity</h3>
<p>Blockchain-based identity solutions are emerging to give people more control over their personal data. Rather than relying on Facebook or Google as identity providers, blockchain-based "self-sovereign identity" systems let individuals control their own credentials. The EU's eIDAS 2.0 framework, being implemented across member states, draws on these concepts.</p>
<h3>The Honest Assessment</h3>
<p>Blockchain technology has genuine, transformative applications — but many are more incremental improvements to existing systems than revolutionary disruptions. The speculative excess of the 2020-2022 bull market obscured real progress. In 2026, the technology is maturing: less hype, more infrastructure, slower but more durable adoption.</p>
<div class="highlight-box"><strong>For investors:</strong> The biggest blockchain opportunity may not be in cryptocurrencies directly, but in the companies building the infrastructure — exchanges, custodians, data providers, and enterprise blockchain platforms that service an inevitably tokenized financial system.</div>
`
}
};
const glossaryTerms = [
{ term: 'Altcoin', definition: 'Any cryptocurrency other than Bitcoin. Ethereum, Solana, and Cardano are altcoins.' },
{ term: 'ATH (All-Time High)', definition: 'The highest price a cryptocurrency has ever reached.' },
{ term: 'Bear Market', definition: 'A prolonged period of declining prices, typically defined as a 20%+ drop from recent highs.' },
{ term: 'Block', definition: 'A bundle of verified transactions added to the blockchain. Each block contains a cryptographic hash linking it to the previous block.' },
{ term: 'Blockchain', definition: 'A distributed, immutable ledger of transactions maintained by a network of computers. Each block contains a hash of the previous block, making tampering practically impossible.' },
{ term: 'Bull Market', definition: 'A period of rising prices and positive investor sentiment.' },
{ term: 'Cold Wallet', definition: 'Offline storage for cryptocurrency private keys, typically a hardware device. More secure than hot wallets because it\'s not connected to the internet.' },
{ term: 'Consensus Mechanism', definition: 'The method by which a blockchain network agrees on which transactions are valid. Bitcoin uses Proof of Work; Ethereum uses Proof of Stake.' },
{ term: 'DAO', definition: 'Decentralized Autonomous Organization. A member-owned community without centralized leadership, governed by smart contracts and token-based voting.' },
{ term: 'DApp', definition: 'Decentralized Application. Software built on a blockchain rather than centralized servers. Operates via smart contracts.' },
{ term: 'DeFi', definition: 'Decentralized Finance. Financial services (lending, trading, savings) built on blockchain without banks or brokers.' },
{ term: 'DEX', definition: 'Decentralized Exchange. A platform for trading cryptocurrencies directly from wallets without a central authority. Examples: Uniswap, Curve.' },
{ term: 'DYOR', definition: 'Do Your Own Research. A reminder that you should independently verify information before making investment decisions.' },
{ term: 'ERC-20', definition: 'A standard for fungible tokens on the Ethereum blockchain. Most tokens (USDC, LINK, UNI) follow this standard.' },
{ term: 'EVM', definition: 'Ethereum Virtual Machine. The runtime environment for smart contracts on Ethereum. Many blockchains are "EVM-compatible."' },
{ term: 'Fiat', definition: 'Government-issued currency not backed by a commodity (like gold). USD, EUR, and GBP are fiat currencies.' },
{ term: 'FOMO', definition: 'Fear Of Missing Out. The anxiety that others are profiting while you aren\'t, often leading to impulsive buying decisions.' },
{ term: 'FUD', definition: 'Fear, Uncertainty, and Doubt. Negative information (sometimes false) spread to lower the price of a cryptocurrency.' },
{ term: 'Gas', definition: 'The fee paid to process a transaction on Ethereum. Gas prices vary based on network congestion.' },
{ term: 'HODL', definition: 'Hold On for Dear Life. Originally a typo for "hold," it became crypto slang for holding rather than selling during volatility.' },
{ term: 'Hot Wallet', definition: 'An internet-connected cryptocurrency wallet. More convenient but less secure than cold wallets. Examples: MetaMask, Trust Wallet.' },
{ term: 'KYC', definition: 'Know Your Customer. Identity verification required by regulated financial services. Exchanges require KYC to comply with anti-money laundering laws.' },
{ term: 'Layer 1', definition: 'The base blockchain network itself. Bitcoin and Ethereum are Layer 1 blockchains.' },
{ term: 'Layer 2', definition: 'A network built on top of a Layer 1 blockchain to improve speed and reduce costs. Arbitrum and Optimism are Ethereum Layer 2s.' },
{ term: 'Liquidity', definition: 'How easily an asset can be bought or sold without affecting its price. Bitcoin has high liquidity; small altcoins have low liquidity.' },
{ term: 'Market Cap', definition: 'Total value of a cryptocurrency. Calculated as current price × circulating supply.' },
{ term: 'Mempool', definition: 'The waiting area for unconfirmed transactions before they are included in a block by miners or validators.' },
{ term: 'Miner', definition: 'A computer (or person operating one) that validates transactions on a Proof of Work blockchain and earns block rewards.' },
{ term: 'NFT', definition: 'Non-Fungible Token. A unique token on a blockchain representing ownership of a specific item. Unlike Bitcoin (fungible), each NFT is one-of-a-kind.' },
{ term: 'Node', definition: 'A computer that participates in a blockchain network, maintaining a copy of the ledger and verifying transactions.' },
{ term: 'On-Chain', definition: 'Data or transactions recorded directly on the blockchain, publicly visible and immutable.' },
{ term: 'Private Key', definition: 'A secret alphanumeric code that proves ownership of a crypto address and authorizes transactions. Never share your private key.' },
{ term: 'Proof of Stake (PoS)', definition: 'A consensus mechanism where validators stake cryptocurrency as collateral to propose and attest to blocks. More energy efficient than Proof of Work.' },
{ term: 'Proof of Work (PoW)', definition: 'A consensus mechanism where miners compete to solve mathematical puzzles to add blocks. Used by Bitcoin. Energy-intensive but battle-tested.' },
{ term: 'Public Key', definition: 'The publicly shareable portion of a cryptographic key pair. Corresponds to your wallet address; safe to share.' },
{ term: 'Rug Pull', definition: 'A scam where developers abandon a project and steal investor funds after generating hype and investment.' },
{ term: 'Satoshi (Sat)', definition: 'The smallest unit of Bitcoin. 1 Bitcoin = 100,000,000 satoshis (named after Bitcoin\'s pseudonymous creator, Satoshi Nakamoto).' },
{ term: 'Seed Phrase', definition: 'A 12-24 word backup phrase that can restore a crypto wallet. Equivalent to your private key. Must be kept offline and secret.' },
{ term: 'Smart Contract', definition: 'Self-executing code on a blockchain that automatically enforces agreement terms when conditions are met. No intermediary needed.' },
{ term: 'Stablecoin', definition: 'A cryptocurrency designed to maintain a stable value, usually pegged to the US dollar. Examples: USDC, USDT, DAI.' },
{ term: 'Staking', definition: 'Locking up cryptocurrency in a Proof of Stake network to help validate transactions and earn rewards.' },
{ term: 'Token', definition: 'A digital asset built on top of an existing blockchain. Distinct from coins (which are native to their own blockchain).' },
{ term: 'TVL', definition: 'Total Value Locked. The amount of crypto deposited in a DeFi protocol. A measure of its size and usage.' },
{ term: 'Validator', definition: 'A participant in a Proof of Stake network who stakes cryptocurrency to verify transactions and earn rewards.' },
{ term: 'Wallet Address', definition: 'A string of alphanumeric characters that serves as a destination for cryptocurrency transactions. Like a bank account number.' },
{ term: 'Web3', definition: 'The vision of a decentralized internet built on blockchain technology, where users own their data and digital assets.' },
{ term: 'Whale', definition: 'An individual or entity holding a large amount of cryptocurrency, capable of influencing market prices.' },
{ term: 'Yield Farming', definition: 'Moving crypto between DeFi protocols to maximize returns through interest, fees, and token rewards.' }
];
const comparisons = {
'btc-eth': {
header: ['Feature', 'Bitcoin (BTC)', 'Ethereum (ETH)'],
rows: [
['Primary Purpose', 'Store of value / digital gold', 'Programmable blockchain platform'],
['Created', '2009 by Satoshi Nakamoto', '2015 by Vitalik Buterin'],
['Consensus', 'Proof of Work (mining)', 'Proof of Stake (since 2022)'],
['Supply', 'Fixed at 21 million BTC', 'No hard cap; deflationary burn'],
['Transaction Speed', '~7 TPS (base layer)', '~15-30 TPS (base layer)'],
['Smart Contracts', 'Limited (Taproot/Lightning)', 'Full EVM support'],
['Staking', 'Not applicable', '2-3% APY currently'],
['Energy Use', 'High (PoW mining)', 'Very low (~0.01% of Bitcoin)'],
['ETF Available', 'Yes (IBIT, FBTC, ARKB)', 'Yes (ETHA, FETH, CETH)'],
['2026 Price Range', '$80,000 - $110,000', '$2,500 - $4,000']
]
},
'exchanges': {
header: ['Feature', 'Coinbase', 'Kraken', 'Gemini', 'Binance'],
rows: [
['Founded', '2012', '2011', '2015', '2017'],
['US Licensed', 'Yes', 'Yes', 'Yes', 'Banned in US'],
['Maker/Taker Fees', '0.40%/0.60%', '0.25%/0.40%', '0.20%/0.40%', 'N/A in US'],
['Coins Available', '250+', '250+', '70+', '350+'],
['Beginner Friendly', '★★★★★', '★★★★☆', '★★★★☆', '★★★☆☆'],
['Security Track Record', 'Strong', 'Excellent', 'Excellent', 'Hacked 2019'],
['Staking Available', 'Yes (limited)', 'Yes (wide)', 'Yes', 'Yes (not US)'],
['Mobile App Rating', '4.7/5', '4.6/5', '4.4/5', 'N/A in US'],
['FDIC Insurance', 'USD only', 'USD only', 'USD only', 'No'],
['Best For', 'Beginners', 'Advanced/low fees', 'Security-focused', 'N/A in US']
]
},
'wallets': {
header: ['Feature', 'Ledger Nano X', 'Trezor Safe 5', 'MetaMask', 'Trust Wallet'],
rows: [
['Type', 'Hardware (Cold)', 'Hardware (Cold)', 'Software (Hot)', 'Software (Hot)'],
['Price', '$149', '$169', 'Free', 'Free'],
['Coins Supported', '5,500+', '8,000+', 'EVM + Solana', '10M+ tokens'],
['Bluetooth', 'Yes', 'No', 'N/A', 'N/A'],
['Open Source', 'Partial', 'Fully open source', 'Yes', 'Yes'],
['Mobile App', 'Yes', 'Yes', 'Yes', 'Yes'],
['DeFi Support', 'Via WalletConnect', 'Via WalletConnect', 'Native', 'Native'],
['Staking', 'Via Ledger Live', 'Via Trezor Suite', 'Via dApps', 'Built-in'],
['Best For', 'Most crypto users', 'Open-source purists', 'DeFi/NFT users', 'Mobile-first users'],
['Recovery', '24-word seed phrase', '12-20 word seed phrase', '12-word seed phrase', '12-word seed phrase']
]
}
};
const state = {
currentGuide: null,
currentLevel: 'all',
currentCompTab: 'btc-eth',
investChart: null,
dcaChart: null
};
function renderGuides(filter = 'all') {
const beginnerGrid = document.getElementById('beginnerGrid');
const intermediateGrid = document.getElementById('intermediateGrid');
if (!beginnerGrid || !intermediateGrid) return;
beginnerGrid.innerHTML = '';
intermediateGrid.innerHTML = '';
Object.entries(guides).forEach(([id, guide]) => {
if (filter !== 'all' && guide.level !== filter) return;
const card = document.createElement('div');
card.className = 'guide-card reveal';
card.innerHTML = `
<div class="guide-number">${guide.number}</div>
<h3 class="guide-title">${guide.title}</h3>
<p class="guide-desc">${guide.desc}</p>
<button class="btn btn-primary guide-btn" onclick="openGuide('${id}')" aria-label="Read guide: ${guide.title}">Read Guide</button>
`;
if (guide.level === 'beginner') {
beginnerGrid.appendChild(card);
} else {
intermediateGrid.appendChild(card);
}
});
}
function openGuide(id) {
const guide = guides[id];
if (!guide) return;
state.currentGuide = id;
const modal = document.getElementById('guideModal');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalBody = document.getElementById('modalBody');
if (!modal || !modalTitle || !modalBody) return;
modalTitle.textContent = guide.title;
modalMeta.innerHTML = `<span class="badge badge-${guide.level}">${guide.level.charAt(0).toUpperCase() + guide.level.slice(1)}</span> · Guide ${guide.number}`;
modalBody.innerHTML = guide.content;
modal.classList.add('active');
document.body.style.overflow = 'hidden';
setTimeout(() => {
const firstHeading = modalBody.querySelector('h3');
if (firstHeading) firstHeading.focus();
}, 100);
}
function closeGuide() {
const modal = document.getElementById('guideModal');
if (modal) {
modal.classList.remove('active');
document.body.style.overflow = '';
}
state.currentGuide = null;
}
function renderGlossary(searchTerm = '') {
const container = document.getElementById('glossaryContainer');
if (!container) return;
const filtered = searchTerm
? glossaryTerms.filter(item =>
item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
item.definition.toLowerCase().includes(searchTerm.toLowerCase())
)
: glossaryTerms;
if (filtered.length === 0) {
container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 24px;">No terms found. Try a different search.</p>';
return;
}
const groups = {};
filtered.forEach(item => {
const letter = item.term[0].toUpperCase();
if (!groups[letter]) groups[letter] = [];
groups[letter].push(item);
});
container.innerHTML = Object.keys(groups).sort().map(letter => `
<div class="glossary-group">
<div class="glossary-letter">${letter}</div>
${groups[letter].map(item => `
<div class="glossary-item">
<div class="glossary-term">${item.term}</div>
<div class="glossary-def">${item.definition}</div>
</div>
`).join('')}
</div>
`).join('');
}
function renderComparison(tabId) {
const comp = comparisons[tabId];
if (!comp) return;
const container = document.getElementById('compContainer');
if (!container) return;
container.innerHTML = `
<div class="table-wrap">
<table class="comp-table">
<thead>
<tr>${comp.header.map((h, i) => `<th${i === 0 ? '' : ' class="comp-value"'}>${h}</th>`).join('')}</tr>
</thead>
<tbody>
${comp.rows.map(row => `<tr>${row.map((cell, i) => `<td${i === 0 ? ' class="comp-feature"' : ''}>${cell}</td>`).join('')}</tr>`).join('')}
</tbody>
</table>
</div>
`;
}
function calculateInvestment() {
const amount = parseFloat(document.getElementById('investAmount').value);
const rate = parseFloat(document.getElementById('investReturn').value) / 100;
const years = parseInt(document.getElementById('investYears').value);
if (isNaN(amount) || isNaN(rate) || isNaN(years)) return;
const finalValue = amount * Math.pow(1 + rate, years);
const profit = finalValue - amount;
document.getElementById('investResult').style.display = 'block';
document.getElementById('investValue').textContent = formatCurrency(finalValue);
document.getElementById('investDetail').textContent =
`Initial: ${formatCurrency(amount)} · Profit: ${formatCurrency(profit)} · ${rate >= 0 ? '+' : ''}${(rate * 100).toFixed(0)}%/yr over ${years} yrs`;
const labels = [];
const values = [];
for (let y = 0; y <= years; y++) {
labels.push(`Year ${y}`);
values.push(amount * Math.pow(1 + rate, y));
}
if (state.investChart) state.investChart.destroy();
const ctx = document.getElementById('investChart');
if (!ctx) return;
state.investChart = new Chart(ctx, {
type: 'line',
data: {
labels,
datasets: [{
label: 'Portfolio Value',
data: values,
borderColor: '#2563EB',
backgroundColor: 'rgba(37, 99, 235, 0.08)',
borderWidth: 2,
fill: true,
tension: 0.4,
pointRadius: years <= 10 ? 4 : 2
}]
},
options: {
responsive: true,
plugins: { legend: { display: false } },
scales: {
y: {
ticks: { callback: v => '$' + (v >= 1000 ? (v/1000).toFixed(0) + 'k' : v.toFixed(0)) }
}
}
}
});
}
function calculateDCA() {
const monthly = parseFloat(document.getElementById('dcaMonthly').value);
const years = parseInt(document.getElementById('dcaYears').value);
const rate = parseFloat(document.getElementById('dcaReturn').value) / 100;
if (isNaN(monthly) || isNaN(years) || isNaN(rate)) return;
const monthlyRate = rate / 12;
const months = years * 12;
const finalValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
const totalInvested = monthly * months;
const profit = finalValue - totalInvested;
document.getElementById('dcaResult').style.display = 'block';
document.getElementById('dcaValue').textContent = formatCurrency(finalValue);
document.getElementById('dcaDetail').textContent =
`Invested: ${formatCurrency(totalInvested)} · Profit: ${formatCurrency(profit)} · ${monthly}/mo for ${years} yrs`;
const labels = [];
const portfolioValues = [];
const investedValues = [];
for (let m = 0; m <= months; m++) {
labels.push(m % 12 === 0 ? `Yr ${m/12}` : '');
portfolioValues.push(monthly * ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate));
investedValues.push(monthly * m);
}
if (state.dcaChart) state.dcaChart.destroy();
const ctx = document.getElementById('dcaChart');
if (!ctx) return;
state.dcaChart = new Chart(ctx, {
type: 'line',
data: {
labels,
datasets: [
{
label: 'Portfolio Value',
data: portfolioValues,
borderColor: '#2563EB',
backgroundColor: 'rgba(37, 99, 235, 0.08)',
borderWidth: 2,
fill: true,
tension: 0.4,
pointRadius: 0
},
{
label: 'Total Invested',
data: investedValues,
borderColor: '#6B7280',
borderWidth: 1.5,
borderDash: [4, 4],
fill: false,
pointRadius: 0
}
]
},
options: {
responsive: true,
plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
scales: {
y: {
ticks: { callback: v => '$' + (v >= 1000 ? (v/1000).toFixed(0) + 'k' : v.toFixed(0)) }
},
x: {
ticks: { maxRotation: 0, callback: (v, i) => labels[i] }
}
}
}
});
}
function formatCurrency(value) {
if (value >= 1000000) return '$' + (value / 1000000).toFixed(2) + 'M';
if (value >= 1000) return '$' + (value / 1000).toFixed(1) + 'k';
return '$' + value.toFixed(2);
}
function handleScrollReveal() {
const elements = document.querySelectorAll('.reveal:not(.revealed)');
elements.forEach(el => {
const rect = el.getBoundingClientRect();
if (rect.top < window.innerHeight - 80) {
el.classList.add('revealed');
}
});
}
document.addEventListener('DOMContentLoaded', () => {
renderGuides();
renderGlossary();
renderComparison('btc-eth');
const glossarySearch = document.getElementById('glossarySearch');
if (glossarySearch) {
glossarySearch.addEventListener('input', e => renderGlossary(e.target.value));
}
const compTabs = document.querySelectorAll('.comp-tab');
compTabs.forEach(tab => {
tab.addEventListener('click', () => {
compTabs.forEach(t => t.classList.remove('active'));
tab.classList.add('active');
const tabId = tab.dataset.tab;
state.currentCompTab = tabId;
renderComparison(tabId);
});
});
const modal = document.getElementById('guideModal');
const closeBtn = document.getElementById('closeModal');
if (closeBtn) closeBtn.addEventListener('click', closeGuide);
if (modal) {
modal.addEventListener('click', e => {
if (e.target === modal) closeGuide();
});
}
document.addEventListener('keydown', e => {
if (e.key === 'Escape' && state.currentGuide) closeGuide();
});
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
if (mobileToggle && navLinks) {
mobileToggle.addEventListener('click', () => {
navLinks.classList.toggle('mobile-open');
});
}
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach(link => {
link.addEventListener('click', () => {
if (navLinks) navLinks.classList.remove('mobile-open');
});
});
window.addEventListener('scroll', handleScrollReveal, { passive: true });
handleScrollReveal();
const header = document.getElementById('site-header');
if (header) {
window.addEventListener('scroll', () => {
if (window.scrollY > 20) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
}, { passive: true });
}
const navLinksAll = document.querySelectorAll('.nav-link[href^="#"]');
navLinksAll.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const targetId = link.getAttribute('href').slice(1);
const target = document.getElementById(targetId);
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
setTimeout(handleScrollReveal, 200);
}
}, 400);
}
});
}