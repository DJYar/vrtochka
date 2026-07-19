<template>
  <section class="section section--compact animated-section">
    <BaseContainer>
      <div class="promo promo--birthday">
        <div>
          <p class="eyebrow">Свято</p>
          <h2>Святкуй день народження у новій реальності</h2>
          <p>Сценарії для дітей, підлітків і дорослих компаній, простір для гостей та демонстраційна заявка без зовнішньої відправки.</p>
        </div>
        <div class="promo__actions">
          <BaseButton @click="openBooking">Забронювати дату</BaseButton>
          <BaseButton to="/ua/birthday" variant="ghost">Дізнатися більше</BaseButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'

const { openBooking } = useBookingModal()
</script>

<style scoped lang="scss">
.promo {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  gap: 24px;
  padding: 34px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-large);
  background:
    linear-gradient(135deg, rgb(124 92 255 / 36%), rgb(32 217 194 / 16%)),
    var(--color-surface);
}

.promo > div:first-child {
  display: grid;
  max-width: 800px;
  gap: 14px;
}

.promo__actions {
  display: grid;
  gap: 10px;
}

@media (width <= 760px) {
  .promo {
    grid-template-columns: 1fr;
    padding: 24px;
  }
}
</style>
