<template>
  <article class="game-video-card surface">
    <YouTubePreview :video-id="game.youtubeVideoId" :title="game.title" />
    <div class="game-video-card__body">
      <div class="game-video-card__categories" aria-label="Категорії гри">
        <span v-for="category in visibleCategories" :key="category.slug">
          {{ category.title }}
        </span>
      </div>
      <h3>{{ game.title }}</h3>
      <p>{{ game.shortDescription }}</p>
      <BaseButton :to="`/ua/game/${game.slug}`" variant="ghost">Детальніше</BaseButton>
    </div>
  </article>
</template>

<script setup lang="ts">
import { gameCategories } from '~~/data/gameCategories'
import type { Game } from '~/types/game'
import BaseButton from '~/components/ui/BaseButton.vue'
import YouTubePreview from '~/components/games/YouTubePreview.vue'

const props = defineProps<{
  game: Game
}>()

const visibleCategories = computed(() => gameCategories.filter(category => props.game.categories.includes(category.slug)))
</script>

<style scoped lang="scss">
.game-video-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius-medium);
  transition: transform var(--transition-default), border-color var(--transition-default);

  &:hover {
    border-color: rgb(124 92 255 / 58%);
    transform: translateY(-5px);
  }
}

.game-video-card__body {
  display: flex;
  min-height: 250px;
  flex: 1;
  flex-direction: column;
  align-items: start;
  gap: 14px;
  padding: 20px;

  h3 {
    min-height: 2.08em;
  }

  p {
    display: -webkit-box;
    overflow: hidden;
    min-height: 4.95em;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .base-button {
    margin-top: auto;
  }
}

.game-video-card__categories {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  span {
    padding: 5px 8px;
    border-radius: 999px;
    background: rgb(32 217 194 / 12%);
    color: var(--color-secondary);
    font-size: 0.74rem;
    font-weight: 800;
  }
}

@media (width <= 560px) {
  .game-video-card__body {
    min-height: 0;

    h3,
    p {
      min-height: 0;
    }
  }
}
</style>
