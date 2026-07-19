<template>
  <section class="section">
    <BaseContainer>
      <SectionHeading
        eyebrow="Каталог"
        title="Усі VR-ігри"
        text="Перемикайте категорії та запускайте відеопрев’ю без перезавантаження сторінки."
      />
      <GameCatalogTabs :games="games" />
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { games } from '~~/data/games'
import GameCatalogTabs from '~/components/games/GameCatalogTabs.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'

buildSeo('/ua/games', 'VR-ігри - VR Точка', 'Каталог VR-ігор із категоріями та відеопрев’ю для простого вибору сеансу.')
</script>
