<template>
  <section class="hero">
    <BaseContainer>
      <div class="hero__grid">
        <div class="hero__content">
          <p class="eyebrow">VR-клуб для компаній</p>
          <h1>Віртуальні пригоди починаються тут</h1>
          <p class="hero__text">Обери гру, збери друзів і забронюй сеанс у просторі з окремими ігровими кімнатами та уважним супроводом.</p>
          <div class="hero__actions">
            <BaseButton @click="openBooking">Забронювати сеанс</BaseButton>
            <BaseButton to="/ua/games" variant="ghost">Переглянути ігри</BaseButton>
          </div>
          <ul class="hero__stats" aria-label="Короткі переваги">
            <li><strong>8</strong><span>демо-ігор</span></li>
            <li><strong>1-8</strong><span>гравців</span></li>
            <li><strong>11:00</strong><span>щодня</span></li>
          </ul>
        </div>
        <div class="hero__visual" aria-hidden="true">
          <NuxtImg src="/images/placeholders/hero-vr.svg" alt="" width="1200" height="900" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'

const { openBooking } = useBookingModal()
</script>

<style scoped lang="scss">
.hero {
  padding: 58px 0 84px;
}

.hero__grid {
  display: grid;
  min-height: calc(100dvh - 160px);
  align-items: center;
  grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.78fr);
  gap: 42px;
}

.hero__content {
  display: grid;
  gap: 24px;
}

.hero__text {
  max-width: 660px;
  font-size: clamp(1.05rem, 2vw, 1.28rem);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero__stats {
  display: grid;
  max-width: 620px;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  li {
    padding: 18px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-medium);
    background: rgb(255 255 255 / 5%);
  }

  strong,
  span {
    display: block;
  }

  strong {
    font-size: 1.45rem;
  }

  span {
    color: var(--color-text-muted);
  }
}

.hero__visual {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-large);
  box-shadow: var(--shadow-soft);

  img {
    width: 100%;
    height: auto;
  }
}

@media (width <= 920px) {
  .hero {
    padding-top: 36px;
  }

  .hero__grid {
    min-height: auto;
    grid-template-columns: 1fr;
  }

  .hero__visual {
    max-height: 420px;
  }
}

@media (width <= 520px) {
  .hero__stats {
    grid-template-columns: 1fr;
  }

  .hero__actions {
    display: grid;
  }
}
</style>
