<template>
  <div v-if="games.length" class="game-grid">
    <GameVideoCard
      v-for="game in games"
      :key="`${game.id}-${resetKey}`"
      :game="game"
    />
  </div>
  <div v-else class="game-grid__empty surface" role="status">
    <h3>У цій категорії поки немає ігор</h3>
    <p>Додамо нові варіанти, щойно каталог буде погоджено.</p>
  </div>
</template>

<script setup lang="ts">
import type { Game } from '~/types/game'
import GameVideoCard from '~/components/games/GameVideoCard.vue'

withDefaults(defineProps<{
  games: Game[]
  resetKey?: string
}>(), {
  resetKey: 'all'
})
</script>

<style scoped lang="scss">
.game-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  animation: games-in 260ms ease both;
}

.game-grid__empty {
  display: grid;
  min-height: 220px;
  place-content: center;
  gap: 10px;
  padding: 32px;
  border-radius: var(--radius-medium);
  text-align: center;
}

@keyframes games-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (width <= 1180px) {
  .game-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (width <= 860px) {
  .game-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (width <= 560px) {
  .game-grid {
    grid-template-columns: 1fr;
  }
}
</style>
