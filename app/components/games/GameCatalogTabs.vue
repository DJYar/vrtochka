<template>
  <div class="game-catalog-tabs">
    <GameCategoryTabs
      v-model="activeCategory"
      :categories="gameCategories"
      :base-id="baseId"
      :panel-id="panelId"
    />
    <div
      :id="panelId"
      :key="activeCategory"
      class="game-catalog-tabs__panel"
      role="tabpanel"
      :aria-labelledby="`${baseId}-tab-${activeCategory}`"
      tabindex="0"
    >
      <GameGrid :games="filteredGames" :reset-key="activeCategory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gameCategories } from '~~/data/gameCategories'
import type { Game, GameCategoryFilter } from '~/types/game'
import GameCategoryTabs from '~/components/games/GameCategoryTabs.vue'
import GameGrid from '~/components/games/GameGrid.vue'

const props = defineProps<{
  games: Game[]
}>()

const activeCategory = ref<GameCategoryFilter>('all')
const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, '')
const baseId = `game-catalog-${instanceId}`
const panelId = `${baseId}-panel`

const filteredGames = computed(() => {
  if (activeCategory.value === 'all') {
    return props.games
  }

  return props.games.filter(game => game.categories.includes(activeCategory.value as Exclude<GameCategoryFilter, 'all'>))
})
</script>

<style scoped lang="scss">
.game-catalog-tabs {
  display: grid;
  min-width: 0;
  gap: 22px;
}

.game-catalog-tabs__panel {
  min-width: 0;
  border-radius: var(--radius-small);
}
</style>
