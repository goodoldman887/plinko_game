<script lang="ts">
  import logo from '$lib/assets/logo.svg';
  import Balance from '$lib/components/Balance.svelte';
  import LiveStatsWindow from '$lib/components/LiveStatsWindow/LiveStatsWindow.svelte';
  import Plinko from '$lib/components/Plinko';
  import SettingsWindow from '$lib/components/SettingsWindow';
  import Sidebar from '$lib/components/Sidebar';
  import CasinoShowcase from '$lib/components/CasinoShowcase.svelte';
  import { setBalanceFromLocalStorage, writeBalanceToLocalStorage } from '$lib/utils/game';
  import GitHubLogo from 'phosphor-svelte/lib/GithubLogo';

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

  /* Merge any other page-specific CSS here */
</style>

<div class="relative flex min-h-dvh w-full flex-col bg-gray-900 text-gray-100">
  <!-- Navigation -->
  <nav class="sticky top-0 z-10 w-full bg-gray-800 px-5 py-3 drop-shadow-md">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between">
      <img src={logo} alt="logo" class="h-6 sm:h-7" />
      <div class="mx-auto"><Balance /></div>
      <a href="https://github.com/goodoldman887/plinko_game" class="play-button" target="_blank">
        <GitHubLogo size={24} />
      </a>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-1">
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
    <section class="prose prose-invert section description mx-auto px-5 py-8 max-w-4xl">
      <h1>Welcome to the Plinko Game</h1>

      <h2>Game Overview</h2>
      <p>
        The Plinko Game is a physics-based simulation inspired by the classic Plinko board from game shows. Players drop chips from the top and watch how gravity and collisions determine their path, showcasing randomness and probability in an engaging way.
      </p>

      <h2>How to Play</h2>
      <p>
        Click or tap anywhere along the top edge of the board to release a chip. Adjust the gravity and chip size settings to explore different behaviors, and observe how each chip bounces off pegs before landing in one of the slots at the bottom.
      </p>

      <h3>Controls and Settings</h3>
      <ul>
        <li><strong>Drop Chip:</strong> Click or tap on the board to release a new chip.</li>
        <li><strong>Gravity Slider:</strong> Increase or decrease the gravitational pull.</li>
        <li><strong>Chip Size Slider:</strong> Adjust the diameter of each chip.</li>
      </ul>

      <h3>Statistics and Distribution</h3>
      <p>
        The game tracks the number of chips in each slot in real time and displays a live histogram to help you analyze outcome distributions and probability trends.
      </p>
    </section>
  </main>

  <!-- Modals -->
  <SettingsWindow />
  <LiveStatsWindow />

  <!-- Footer -->
  <footer class="px-5 pt-16 pb-4">
    <div class="mx-auto max-w-[40rem]">
      <div aria-hidden="true" class="h-[1px] bg-gray-700"></div>
      <div class="flex items-center justify-end p-2">
        © 2025 Plinko Game. All rights reserved.
      </div>
    </div>
  </footer>
</div>
