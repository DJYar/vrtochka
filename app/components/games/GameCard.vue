<template>
  <article class="game-card surface">
    <NuxtImg class="game-card__image" :src="game.image" :alt="`Абстрактна заглушка гри ${game.title}`" width="800" height="560" />
    <div class="game-card__body">
      <div class="game-card__tags">
        <span v-for="genre in game.genres" :key="genre">{{ genre }}</span>
      </div>
      <h3>{{ game.title }}</h3>
      <p>{{ game.shortDescription }}</p>
      <dl class="game-card__meta">
        <div>
          <dt>Гравці</dt>
          <dd>{{ game.players.min }}-{{ game.players.max }}</dd>
        </div>
        <div>
          <dt>Вік</dt>
          <dd>{{ game.ageRating }}</dd>
        </div>
        <div>
          <dt>Сеанс</dt>
          <dd>{{ game.durationMinutes }} хв</dd>
        </div>
      </dl>
      <div class="game-card__actions">
        <BaseButton @click="openBooking">Забронювати</BaseButton>
        <BaseButton :to="`/ua/game/${game.slug}`" variant="ghost">Детальніше</BaseButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Game } from '~/types/game'
import BaseButton from '~/components/ui/BaseButton.vue'

defineProps<{
  game: Game
}>()

const { openBooking } = useBookingModal()
</script>

<style scoped lang="scss">
.game-card {
  display: grid;
  overflow: hidden;
  border-radius: var(--radius-medium);
  transition: transform var(--transition-default), border-color var(--transition-default);

  &:hover {
    border-color: rgb(124 92 255 / 58%);
    transform: translateY(-5px);
  }
}

.game-card__image {
  width: 100%;
  aspect-ratio: 16 / 11;
  object-fit: cover;
}

.game-card__body {
  display: grid;
  gap: 16px;
  padding: 20px;
}

.game-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    padding: 6px 9px;
    border-radius: 999px;
    background: rgb(32 217 194 / 12%);
    color: var(--color-secondary);
    font-size: 0.78rem;
    font-weight: 800;
  }
}

.game-card__meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0;

  div {
    padding: 10px;
    border-radius: var(--radius-small);
    background: rgb(255 255 255 / 5%);
  }

  dt {
    color: var(--color-text-muted);
    font-size: 0.76rem;
  }

  dd {
    margin: 3px 0 0;
    font-weight: 900;
  }
}

.game-card__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (width <= 430px) {
  .game-card__actions {
    grid-template-columns: 1fr;
  }
}
</style>
