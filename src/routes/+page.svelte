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
  .section {
    margin: 2rem 0;
  }
  /* Existing global styles and component-specific CSS below */
  :global(body) {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #111827;
    color: #e5e7eb;
  }
  :global(section.prose) {
    background: #1f2937;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 6px 10px rgba(0,0,0,0.4);
  }
  /* Additional global styling for headings, lists, navs kept as is */
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

  <!-- Main Content Wrapper -->
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

    <!-- 3. Text section with proper headings in English -->
    <section class="prose prose-invert section description mx-auto px-5 py-8 max-w-4xl">
      <h1>Welcome to the Plinko Game</h1>

      <h2>Game Overview</h2>
      <p>
        The Plinko Game is a physics-based simulation inspired by the classic Plinko board from game shows.
        Players drop chips from the top and watch how gravity and collisions determine their path, showcasing randomness
        and probability in an engaging way.
      </p>

      <h2>How to Play</h2>
      <p>
        Click or tap anywhere along the top edge of the board to release a chip. Adjust the gravity and chip size settings
        to explore different behaviors, and observe how each chip bounces off pegs before landing in one of the slots at the bottom.
      </p>

      <h3>Controls and Settings</h3>
      <ul>
        <li><strong>Drop Chip:</strong> Click or tap on the board to release a new chip.</li>
        <li><strong>Gravity Slider:</strong> Increase or decrease the gravitational pull.</li>
        <li><strong>Chip Size Slider:</strong> Adjust the diameter of each chip.</li>
      </ul>

      <h3>Statistics and Distribution</h3>
      <p>
        The game tracks the number of chips in each slot in real time and displays a live histogram
        to help you analyze outcome distributions and probability trends.
      </p>
    </section>
  </main>

  <!-- Modal windows -->
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


<style>
  /* Общие стили страницы */
  :global(body) {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #111827;
    color: #e5e7eb;
  }

  /* Кнопка PLAY */
  :global(.play-button) {
    display: inline-block;
    background: #0ea5e9;
    color: #ffffff;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: background 0.2s, transform 0.2s;
    text-decoration: none;
  }
  :global(.play-button:hover) {
    background: #0284c7;
    transform: translateY(-2px);
  }

  /* Секция информации */
  :global(section.prose) {
    background: #1f2937;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 6px 10px rgba(0,0,0,0.4);
  }

  /* Определения dl/dt/dd */
  :global(.info-list dt) {
    font-weight: 600;
    color: #f3f4f6;
  }
  :global(.info-list dd) {
    margin-left: 0.5rem;
    color: #9ca3af;
  }

  /* Меню-якоря */
  :global(.toc a) {
    color: #60a5fa;
    text-decoration: none;
    padding: 0.25rem;
    transition: color 0.2s;
  }
  :global(.toc a:hover) {
    color: #3b82f6;
    text-decoration: underline;
  }

  /* Заголовки внутри секции */
  :global(section.prose h2) {
    margin-top: 1.5rem;
    color: #ffffff;
    border-bottom: 2px solid #374151;
    padding-bottom: 0.25rem;
  }

  /* Списки */
  :global(section.prose ul, section.prose ol) {
    margin-left: 1rem;
  }
</style>
