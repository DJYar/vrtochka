<template>
  <section class="section animated-section">
    <BaseContainer>
      <SectionHeading eyebrow="FAQ" title="Поширені запитання" />
      <div class="faq">
        <details v-for="item in faq" :key="item.question" class="faq__item surface">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { faq } from '~~/data/faq'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'
</script>

<style scoped lang="scss">
.faq {
  display: grid;
  gap: 12px;
}

.faq__item {
  border-radius: var(--radius-medium);
  padding: 20px;
}

summary {
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 900;
}

p {
  margin-top: 14px;
}
</style>
