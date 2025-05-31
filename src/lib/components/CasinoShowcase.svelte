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
  <!-- Gonzabet -->
  <div class="showcase">
    <div class="showcase__link">
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
        <div class="showcase__btn" on:click={() => window.location.href = 'https://applogic.top/5TRb1N'}>
          Toneelstuk
        </div>
      </div>
    </div>
  </div>

  <!-- Wbetz -->
  <div class="showcase">
    <div class="showcase__link">
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
        <div class="showcase__btn" on:click={() => window.location.href = 'https://applogic.top/5TRb1N'}>
          Toneelstuk
        </div>
      </div>
    </div>
  </div>

  <!-- Casinolab -->
  <div class="showcase">
    <div class="showcase__link">
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
        <div class="showcase__btn" on:click={() => window.location.href = 'https://applogic.top/5TRb1N'}>
          Toneelstuk
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Конец витрины -->

<style>
  :global(.showcase__wrapper) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
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
    background: #5b6cff;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }

  :global(.showcase__btn:hover) {
    background: #1e4bb8;
  }
</style>
