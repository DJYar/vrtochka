<template>
  <section id="prices" class="section animated-section">
    <BaseContainer>
      <SectionHeading eyebrow="Тарифи" title="Наші тарифи" text="Ціни тимчасові й потрібні лише для демонстрації структури блоку." />
      <div class="pricing">
        <article v-for="price in prices" :key="price.title" class="pricing__card surface">
          <h3>{{ price.title }}</h3>
          <p class="pricing__time">{{ price.time }}</p>
          <strong>{{ price.price }}</strong>
          <p>{{ price.details }}</p>
          <BaseButton @click="openBooking">Забронювати</BaseButton>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { prices } from '~~/data/prices'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'

const { openBooking } = useBookingModal()
</script>

<style scoped lang="scss">
.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.pricing__card {
  display: grid;
  gap: 16px;
  padding: 24px;
  border-radius: var(--radius-medium);

  strong {
    color: var(--color-secondary);
    font-size: 2rem;
  }
}

.pricing__time {
  color: var(--color-text);
  font-weight: 900;
}

@media (width <= 820px) {
  .pricing {
    grid-template-columns: 1fr;
  }
}
</style>
