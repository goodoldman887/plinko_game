<script lang="ts">
  import logo from '$lib/assets/logo.svg';
  import Balance from '$lib/components/Balance.svelte';
  import LiveStatsWindow from '$lib/components/LiveStatsWindow/LiveStatsWindow.svelte';
  import Plinko from '$lib/components/Plinko';
  import SettingsWindow from '$lib/components/SettingsWindow';
  import Sidebar from '$lib/components/Sidebar';
  import CasinoShowcase from '$lib/components/CasinoShowcase.svelte';
  import { setBalanceFromLocalStorage, writeBalanceToLocalStorage } from '$lib/utils/game';
  

  $effect(() => {
    setBalanceFromLocalStorage();
  });
</script>

<style>
  /* Component spacing */
  .section {
    margin: 2rem 0;
  }

  /* Global styles */
  :global(body) {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #111827;
    color: #e5e7eb;
  }

  /* Prose styling for description section */
  :global(section.prose) {
    background: #1f2937;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 6px 10px rgba(0,0,0,0.4);
  }

  /* Heading sizes */
  :global(.prose h1) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  :global(.prose h2) {
    margin-top: 2rem;
    border-bottom: 1px solid #2d3748;
    padding-bottom: 0.5rem;
    font-size: 1.75rem;
  }
  :global(.prose h3) {
    margin-top: 1.5rem;
    font-size: 1.25rem;
  }

  /* Table styling within prose */
  :global(.prose table) {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    margin: 0 auto;
  }
  :global(.prose th),
  :global(.prose td) {
    padding: 0.75rem;
    border: none;
  }
  :global(.prose thead) {
    background: #2d3748;
  }
  :global(.prose thead th) {
    font-weight: bold;
    color: #edf2f7;
  }
  :global(.prose tbody tr:nth-child(odd)) {
    background: #2a303c;
  }
  :global(.prose tbody tr:nth-child(even)) {
    background: #1f2937;
  }
</style>

<div class="relative flex min-h-dvh w-full flex-col bg-gray-900 text-gray-100">
  <!-- Navigation -->
  <nav class="sticky top-0 z-10 w-full bg-gray-800 px-5 py-3 drop-shadow-md">
  <div class="relative mx-auto flex h-14 max-w-7xl items-center">
    <!-- Logo on the left -->
    <img src={logo} alt="logo" class="h-6 sm:h-7" />
    <!-- Balance centered -->
    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Balance />
    </div>
  </div>
</nav>

  <!-- Main Content -->
  <main class="flex-1">
    <div class="mx-auto w-full max-w-7xl px-5">
    <!-- 1. Demo at the top -->
    <section id="plinko-demo" class="section demo px-5">
      <div class="mx-auto mt-5 min-w-[300px] max-w-xl drop-shadow-xl md:mt-10 lg:max-w-7xl">
        <div class="flex flex-col-reverse overflow-hidden rounded-lg lg:w-full lg:flex-row">
          <Sidebar />
          <div class="flex-1"><Plinko /></div>
        </div>
      </div>
    </section>

    <!-- 2. Showcase under the demo -->
    <section class="section showcase mx-auto px-5 mt-8 min-w-[300px] max-w-xl md:mt-10 lg:max-w-7xl">
      <CasinoShowcase />
    </section>

    <!-- 3. Description section -->
    <section class="prose prose-invert section description mx-auto w-full max-w-7xl">
  <!-- Full provided text translated to English -->
<section class="prose prose-invert section description mx-auto w-full max-w-7xl">
  <h1 id="intro">Plinko Casino: Overview and Game Rules</h1>
  <p>
    Dive into the exciting world of Plinko right now! To get started, register on the official website,
    claim your welcome bonus, and find answers to all your questions in our detailed sections below.
  </p>

  <h2 id="quick-info">Quick Game Information</h2>
  <table>
    <thead>
      <tr><th>Aspect</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>🌐 Official Website</td><td>www.plinko.org</td></tr>
      <tr><td>🎮 Game Type</td><td>Gambling, Slot</td></tr>
      <tr><td>💻 Platforms</td><td>Stake, Roobet, and other online casinos</td></tr>
      <tr><td>⚙️ Mechanics</td><td>Random chip movement through a peg board</td></tr>
      <tr><td>🎯 Objective</td><td>Chip bounces off pegs and lands in a prize slot</td></tr>
      <tr><td>💵 Bets</td><td>Fiat and cryptocurrencies</td></tr>
      <tr><td>🎲 Risk Levels</td><td>Low, Medium, High</td></tr>
      <tr><td>🆓 Demo Version</td><td>Available on most platforms</td></tr>
      <tr><td>🔑 Features</td><td>Easy login, multiple versions, bonuses</td></tr>
    </tbody>
  </table>

  <h2 id="how-to-start">How to Start Playing Plinko</h2>
  <ol>
    <li><strong>Choose Your Bet:</strong> Set the chip size before starting — it affects potential winnings.</li>
    <li><strong>Set Risk Level:</strong> Select Low, Medium, or High risk — this determines payout multipliers and volatility.</li>
    <li><strong>Drop the Chip:</strong> Press the “Start” button and watch the chip bounce off the pegs.</li>
    <li><strong>Collect Winnings:</strong> After the chip falls into a slot, you receive a payout multiplied by that slot’s coefficient.</li>
  </ol>

  <h2 id="general-info">General Information about Online Plinko</h2>
  <ul>
    <li><strong>Luck & Strategy:</strong> The chip moves unpredictably, but risk selection adds a strategic element.</li>
    <li><strong>Different Formats:</strong> Peg count and slot layouts vary across platforms; some add animations and mini-games.</li>
    <li><strong>Crypto Support:</strong> Bitcoin, Ethereum, and other cryptocurrencies for instant deposits and withdrawals.</li>
    <li><strong>Fair RNG:</strong> Licensed casinos use certified random number generators for transparent results.</li>
    <li><strong>Licensing:</strong> Choose platforms with valid licenses to ensure safe gameplay.</li>
  </ul>

  <h2 id="reviews">Player Reviews</h2>
  <ul>
    <li>Excellent balance between risk and reward.</li>
    <li>Chance for big wins in a single drop.</li>
    <li>Intuitive interface for both newcomers and experienced players.</li>
  </ul>

  <h2 id="strategies">Strategies and Tips</h2>
  <ul>
    <li><strong>Flat Betting:</strong> Keep your bet size consistent to manage losses.</li>
    <li><strong>Martingale:</strong> Double your bet after a loss and reset after a win. Suited for large budgets.</li>
    <li><strong>Anti-Martingale:</strong> Increase your bet after a win and decrease after a loss to ride winning streaks.</li>
    <li><strong>Use Demo Mode:</strong> Practice without risk to test different strategies and risk levels.</li>
    <li><strong>Bankroll Management:</strong> Set win/loss limits to stay within budget.</li>
  </ul>

  <h2 id="versions">Features of Different Plinko Versions</h2>
  <ul>
    <li><strong>Plinko Slot:</strong> Combines Plinko mechanics with slot machine features like bonus rounds and special symbols.</li>
    <li><strong>Crypto Plinko:</strong> Anonymity and fast transactions powered by blockchain, plus crypto-specific promotions.</li>
    <li><strong>Developer Variants:</strong> BGaming offers vibrant graphics, Spribe adds interactive elements and unique bonuses.</li>
  </ul>

  <h2 id="getting-started">Steps to Begin Playing</h2>
  <ol>
    <li>Select a platform by checking licenses, reviews, and payment options.</li>
    <li>Register and complete verification if required.</li>
    <li>Choose between demo and real-money modes.</li>
    <li>Deposit funds via card, e-wallet, or cryptocurrency.</li>
    <li>Set your chip size and risk level.</li>
    <li>Drop the chip and enjoy the game!</li>
  </ol>

  <h2 id="recommendations">Important Recommendations</h2>
  <ul>
    <li>Play responsibly by setting time and budget limits.</li>
    <li>Look for promotions — welcome bonuses and free spins can boost your bankroll.</li>
    <li>Read player feedback before choosing a platform.</li>
  </ul>

  <h2 id="real-money">Plinko for Real Money</h2>
  <p>
    Real-money play adds extra excitement:
  </p>
  <ul>
    <li>Actual payouts depend on bet size, risk level, and slot multiplier.</li>
    <li>Bonuses and free spins increase your chances by providing extra credits.</li>
    <li>Always choose licensed casinos for secure gameplay.</li>
  </ul>

  <h2 id="demo-mode">Demo Mode</h2>
  <p>
    Practice in demo mode to:
  </p>
  <ul>
    <li>Understand chip bounce mechanics.</li>
    <li>See how payouts change with risk levels.</li>
    <li>Test multiple strategies without losing real money.</li>
  </ul>

  <h2 id="faq">FAQ</h2>
  <h3>1. What is Plinko Casino?</h3>
  <p>
    A gambling game where a chip falls through a grid of pegs and you win based on the slot it lands in.
  </p>
  <h3>2. Is it legal?</h3>
  <p>
    Legality depends on your jurisdiction and the casino’s licensing. Always check local laws before registering.
  </p>
  <h3>3. Can I really win?</h3>
  <p>
    Yes, with luck and proper bankroll management.
  </p>
  <h3>4. Should I use cryptocurrency?</h3>
  <p>
    Crypto offers anonymity and instant transactions but requires basic blockchain knowledge.
  </p>
  <h3>5. Are there any strategies?</h3>
  <p>
    While outcomes are random, risk selection and bet management can help minimize losses.
  </p>
</section>
      </div>
</main>

  <!-- Modals -->
  <SettingsWindow />
  <LiveStatsWindow />

  <!-- Footer -->
  <footer class="px-5 pt-16 pb-4 text-sm text-gray-400">
    <div class="mx-auto max-w-4xl">
      <div aria-hidden="true" class="h-px bg-gray-700 mb-4"></div>
      <div class="flex justify-end">
        <a href="https://github.com/goodoldman887/plinko_game" target="_blank" class="hover:opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.743.084-.728.084-.728 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.628-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div>
