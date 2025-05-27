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

<style src="$lib/assets/css/showcase.css"></style>