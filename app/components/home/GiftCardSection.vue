<template>
  <section class="section section--compact animated-section">
    <BaseContainer>
      <div class="gift surface">
        <div class="gift__badge">VR</div>
        <div>
          <p class="eyebrow">Подарунок</p>
          <h2>Подарунковий сертифікат</h2>
          <p>Демонстраційний блок для майбутнього сертифіката: сума, формат вручення та правила використання можуть бути замінені пізніше.</p>
        </div>
        <BaseButton variant="secondary" @click="openBooking">Запитати про сертифікат</BaseButton>
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
.gift {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: 24px;
  padding: 28px;
  border-radius: var(--radius-large);
}

.gift__badge {
  display: grid;
  width: 120px;
  aspect-ratio: 1.5;
  place-items: center;
  border-radius: var(--radius-medium);
  background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
  color: #10120f;
  font-size: 2rem;
  font-weight: 1000;
}

@media (width <= 820px) {
  .gift {
    grid-template-columns: 1fr;
  }
}
</style>
