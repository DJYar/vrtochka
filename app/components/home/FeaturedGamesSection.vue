<template>
  <section id="games" class="section animated-section">
    <BaseContainer>
      <div class="featured-games__top">
        <SectionHeading
          eyebrow="Каталог"
          title="Популярні VR-ігри"
          text="Обирайте категорію, дивіться відеопрев’ю та знаходьте формат для свого сеансу."
        />
        <BaseButton to="/ua/games" variant="ghost">Усі ігри</BaseButton>
      </div>
      <GameCatalogTabs :games="featuredGames" />
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { games } from '~~/data/games'
import GameCatalogTabs from '~/components/games/GameCatalogTabs.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'

const featuredGames = games.filter(game => game.featured)
</script>

<style scoped lang="scss">
.featured-games__top {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 24px;
}

@media (width <= 860px) {
  .featured-games__top {
    display: grid;
  }
}
</style>
