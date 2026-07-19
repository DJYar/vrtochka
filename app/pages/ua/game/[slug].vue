<template>
  <section class="section">
    <BaseContainer>
      <div v-if="game" class="game-detail">
        <YouTubePreview :video-id="game.youtubeVideoId" :title="game.title" />
        <div class="game-detail__content">
          <p class="eyebrow">VR-гра</p>
          <h1>{{ game.title }}</h1>
          <p>{{ game.shortDescription }}</p>
          <div class="game-detail__categories" aria-label="Категорії гри">
            <span v-for="category in categories" :key="category.slug">{{ category.title }}</span>
          </div>
          <ul>
            <li>Гравці: {{ game.players.min }}-{{ game.players.max }}</li>
            <li>Вік: {{ game.ageRating }}</li>
            <li>Тривалість: {{ game.durationMinutes }} хв</li>
          </ul>
          <BaseButton @click="openBooking">Забронювати сеанс</BaseButton>
        </div>
      </div>
      <div v-else class="game-detail__missing">
        <h1>Гру не знайдено</h1>
        <p>Перейдіть до каталогу та оберіть іншу VR-гру.</p>
        <BaseButton to="/ua/games">До каталогу</BaseButton>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { gameCategories } from '~~/data/gameCategories'
import { games } from '~~/data/games'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import YouTubePreview from '~/components/games/YouTubePreview.vue'

const route = useRoute()
const game = computed(() => games.find(item => item.slug === route.params.slug))
const categories = computed(() => gameCategories.filter(category => game.value?.categories.includes(category.slug)))
const { openBooking } = useBookingModal()

buildSeo(
  `/ua/game/${route.params.slug}`,
  `${game.value?.title || 'VR-гра'} - VR Точка`,
  game.value?.shortDescription || 'Сторінка VR-гри українською мовою.'
)
</script>

<style scoped lang="scss">
.game-detail {
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 34px;

  > :first-child {
    overflow: hidden;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-large);
  }

  ul {
    display: grid;
    gap: 8px;
    color: var(--color-text-muted);
  }
}

.game-detail__content {
  display: grid;
  align-items: start;
  gap: 18px;
}

.game-detail__categories {
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

.game-detail__missing {
  display: grid;
  max-width: 680px;
  gap: 18px;
}

@media (width <= 820px) {
  .game-detail {
    grid-template-columns: 1fr;
  }
}
</style>
