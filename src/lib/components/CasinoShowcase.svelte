<script lang="ts">
  import gonzabet from '$lib/assets/gonzabet.webp';
  import wbetz from '$lib/assets/wbetz.webp';
  import casinolab from '$lib/assets/casinolab.webp';
  import gransino from '$lib/assets/gransino.webp';
  import fatpirate from '$lib/assets/fatpirate.webp';
  import rating from '$lib/assets/rating.svg';
</script>

<!-- Начало витрины -->
<div class="showcase__wrapper">
  <!-- Пример: Gonzabet -->
  <div class="showcase">
    <a href="/link/gonzabet/" class="showcase__link" target="_blank" rel="nofollow" noindex>
      <div class="showcase__item">
        <div class="showcase__img"><img src={gonzabet} alt="gonzabet" /></div>
        <div class="showcase__title"><span>Gonzabet</span></div>
      </div>
      <div class="showcase__item showcase__item-right">
        <div class="showcase__rating">
          {#each Array(5) as _}
            <div class="showcase__rating-item"><img src={rating} alt="rating" /></div>
          {/each}
        </div>
        <div class="showcase__btn">Toneelstuk</div>
      </div>
    </a>
  </div>

  <div class="showcase">
    <a href="/link/wbetz/" class="showcase__link" target="_blank" rel="nofollow" noindex>
      <div class="showcase__item">
        <div class="showcase__img"><img src={wbetz} alt="wbetz" /></div>
        <div class="showcase__title"><span>Wbetz</span></div>
      </div>
      <div class="showcase__item showcase__item-right">
        <div class="showcase__rating">
          {#each Array(5) as _}
            <div class="showcase__rating-item"><img src={rating} alt="rating" /></div>
          {/each}
        </div>
        <div class="showcase__btn">Toneelstuk</div>
      </div>
    </a>
  </div>
  
  <div class="showcase">
    <a href="/link/casinolab/" class="showcase__link" target="_blank" rel="nofollow" noindex>
      <div class="showcase__item">
        <div class="showcase__img"><img src={casinolab} alt="casinolab" /></div>
        <div class="showcase__title"><span>Casinolab</span></div>
      </div>
      <div class="showcase__item showcase__item-right">
        <div class="showcase__rating">
          {#each Array(5) as _}
            <div class="showcase__rating-item"><img src={rating} alt="rating" /></div>
          {/each}
        </div>
        <div class="showcase__btn">Toneelstuk</div>
      </div>
    </a>
  </div>
  
<!-- Скопируйте блок .showcase ещё 4 раза с заменой:
       - пути: /link/.../, logo {wbetz,casinolab,gransino,fatpirate}
       - alt и span текст
  -->
</div>
<!-- Конец витрины -->

<style>
  :global(.showcase__wrapper) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  :global(.showcase) {
    background: #1c1a4b;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  :global(.showcase__link) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  }

  :global(.showcase__item) {
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  :global(.showcase__item-right) {
    background: #151533;
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  :global(.showcase__img img) {
    height: 40px;
    width: auto;
    border-radius: 0.25rem;
  }

  :global(.showcase__title span) {
    margin-left: 0.5rem;
    font-weight: 600;
    color: #ffffff;
    font-size: 1rem;
  }

  :global(.showcase__rating) {
    display: flex;
    gap: 0.25rem;
  }

  :global(.showcase__rating-item img) {
    height: 16px;
    width: 16px;
  }

  :global(.showcase__btn) {
    background: #2563eb;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    margin-left: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: background .2s;
  }

  :global(.showcase__btn:hover) {
    background: #1e4bb8;
  }
</style>