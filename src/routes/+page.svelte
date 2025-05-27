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

<svelte:window onbeforeunload={writeBalanceToLocalStorage} />

<div class="relative flex min-h-dvh w-full flex-col bg-gray-900 text-gray-100">
  <!-- Навигация -->
  <nav class="sticky top-0 z-10 w-full bg-gray-800 px-5 py-3 drop-shadow-md">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between">
      <img src={logo} alt="logo" class="h-6 sm:h-7" />
      <div class="mx-auto"><Balance /></div>
    </div>
  </nav>

  <!-- Текстовый блок с разметкой plinko.org -->
  <section class="prose prose-invert mx-auto px-5 py-8 max-w-4xl">
    <h1>Plinko Casino: Обзор и правила игры</h1>
    <p>
      Погрузитесь в увлекательный мир Plinko прямо сейчас! Чтобы начать, зарегистрируйтесь
      на официальном сайте, получите приветственный бонус и найдите ответы на все вопросы
      в наших подробных разделах.
    </p>

    <!-- Кнопка PLAY -->
    <a
      href="#plinko-demo"
      class="play-button inline-block"
    >
      PLAY PLINKO
    </a>

    <p>
      Plinko, популярная игра, знакомая многим по телешоу «The Price Is Right», нашла своё
      новое воплощение в онлайн-казино. Она особенно востребована на платформах
      Stake и Roobet, где представлена в самых разных форматах.
    </p>

    <h2>Краткая информация об игре</h2>
    <dl class="info-list grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
      <dt>🌐 Официальный ресурс</dt>
      <dd><a href="https://www.plinko.org" target="_blank">www.plinko.org</a></dd>

      <dt>🎮 Тип игры</dt>
      <dd>Азартная, слот</dd>

      <dt>💻 Платформы</dt>
      <dd>Stake, Roobet и другие онлайн-казино</dd>

      <dt>⚙️ Механика</dt>
      <dd>Случайное движение фишек через дорожку с штырьками</dd>

      <dt>🎯 Цель</dt>
      <dd>Фишка отскакивает от штырьков и падает в призовую ячейку</dd>

      <dt>💵 Ставки</dt>
      <dd>Фиат и криптовалюты</dd>

      <dt>🎲 Уровни риска</dt>
      <dd>Низкий, средний, высокий</dd>

      <dt>🆓 Демонстрационный режим</dt>
      <dd>Доступен на большинстве платформ</dd>

      <dt>🔑 Особенности</dt>
      <dd>Простая авторизация, мультиверсии, бонусы</dd>
    </dl>

    <!-- Меню-якоря -->
    <nav class="toc space-y-1 my-6">
      <a href="#how-to-play">1. Как начать играть в Plinko</a>
      <a href="#general-info">2. Общие сведения об онлайн-Plinko</a>
      <a href="#reviews">3. Отзывы игроков</a>
      <a href="#tips">4. Стратегии и советы</a>
      <a href="#faq">5. FAQ</a>
    </nav>

    <h2 id="how-to-play">Как начать играть в Plinko</h2>
    <ol class="list-decimal list-inside">
      <li><strong>Выбор ставки.</strong> Задайте размер фишки перед стартом — он влияет на возможный выигрыш.</li>
      <li><strong>Установка риска.</strong> Выберите один из трёх уровней: низкий, средний или высокий — от этого зависят множители выплат и волатильность.</li>
      <li><strong>Сброс фишки.</strong> Нажмите кнопку «Старт» и наблюдайте, как фишка отскакивает от ряда штырьков.</li>
      <li><strong>Получение приза.</strong> Фишка попадёт в ячейку, и вы получите выигрыш по её коэффициенту.</li>
    </ol>

    <h2 id="general-info">Общие сведения об онлайн-Plinko</h2>
    <ul class="list-disc list-inside">
      <li><strong>Приключение удачи и стратегии.</strong> Фишка движется хаотично, но выбор риска влияет на исход.</li>
      <li><strong>Разнообразие форматов.</strong> Разное число штырьков, анимации и бонусные мини-игры.</li>
      <li><strong>Поддержка криптовалют.</strong> Мгновенные транзакции на базе блокчейна.</li>
      <li><strong>Честная генерация.</strong> Сертифицированные алгоритмы случайных чисел.</li>
      <li><strong>Лицензирование.</strong> Выбирайте сайты с действующими лицензиями.</li>
    </ul>

    <h2 id="reviews">Отзывы игроков</h2>
    <ul class="list-disc list-inside">
      <li>Баланс между риском и наградой.</li>
      <li>Возможность получить крупный выигрыш.</li>
      <li>Удобный интерфейс для новичков и профи.</li>
    </ul>

    <h2 id="tips">Стратегии и советы</h2>
    <ul class="list-disc list-inside">
      <li><strong>Стабильные ставки.</strong> Фиксируйте размер фишки, чтобы избежать резких потерь.</li>
      <li><strong>Мартингейл.</strong> Удваивайте ставку после проигрыша, возвращайтесь к начальной после выигрыша.</li>
      <li><strong>Анти-Мартингейл.</strong> Увеличивайте ставку после победы и снижайте после поражения.</li>
      <li><strong>Демо-режим.</strong> Практикуйтесь без риска.</li>
      <li><strong>Банкролл-менеджмент.</strong> Устанавливайте лимиты выигрышей/проигрышей.</li>
    </ul>

    <h2 id="faq">FAQ</h2>
    <ul class="list-none">
      <li><strong>1. Что такое Plinko Casino?</strong> Азартная игра, где фишка падает через штырьки и приносит выигрыш.</li>
      <li><strong>2. Легальна ли игра?</strong> Зависит от юрисдикции и наличия лицензии.</li>
      <li><strong>3. Можно ли выиграть?</strong> Да, при удачном управлении банкроллом.</li>
      <li><strong>4. Стоит ли использовать криптовалюту?</strong> Быстро и анонимно.</li>
      <li><strong>5. Есть ли стратегии?</strong> Банкролл-менеджмент и выбор риска помогают минимизировать потери.</li>
    </ul>
  </section>

  <!-- Витрина казино -->
  <div class="mx-auto px-5 mt-8 min-w-[300px] max-w-xl md:mt-10 lg:max-w-7xl">
    <CasinoShowcase />
  </div>

  <!-- Демо-игра (якорь для кнопки PLAY) -->
  <div id="plinko-demo" class="flex-1 px-5">
    <div class="mx-auto mt-5 min-w-[300px] max-w-xl drop-shadow-xl md:mt-10 lg:max-w-7xl">
      <div class="flex flex-col-reverse overflow-hidden rounded-lg lg:w-full lg:flex-row">
        <Sidebar />
        <div class="flex-1"><Plinko /></div>
      </div>
    </div>
  </div>

  <!-- Модальные окна -->
  <SettingsWindow />
  <LiveStatsWindow />

  <!-- Футер -->
  <footer class="px-5 pt-16 pb-4">
    <div class="mx-auto max-w-[40rem]">
      <div aria-hidden="true" class="h-[1px] bg-gray-700"></div>
      <div class="flex items-center justify-end p-2">
        <a
          href="https://github.com/goodoldman887/plinko_game"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-1 p-1 text-sm text-gray-400 hover:text-cyan-400 transition"
        >
          <GitHubLogo class="size-4" weight="bold" />
          <span>Source Code</span>
        </a>
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
