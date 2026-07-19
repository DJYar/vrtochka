<template>
  <section class="section animated-section">
    <BaseContainer>
      <SectionHeading eyebrow="Переваги" title="Комфортний старт для кожного гостя" text="Шаблон передбачає чітке пояснення формату, швидкий вибір гри й помітні CTA для бронювання." />
      <div class="advantages">
        <article v-for="advantage in advantages" :key="advantage.title" class="advantages__item surface">
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.text }}</p>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { advantages } from '~~/data/advantages'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'
</script>

<style scoped lang="scss">
.advantages {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.advantages__item {
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: var(--radius-medium);
}

@media (width <= 820px) {
  .advantages {
    grid-template-columns: 1fr;
  }
}
</style>
