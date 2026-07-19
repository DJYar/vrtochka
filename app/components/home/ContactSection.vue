<template>
  <section class="section animated-section">
    <BaseContainer>
      <div class="contact surface">
        <div>
          <p class="eyebrow">Зв’язок</p>
          <h2>Залиш запитання про сеанс</h2>
          <p>Форма працює локально й показує, як виглядатиме майбутня заявка без підключення сервера.</p>
        </div>
        <BookingForm />
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BookingForm from '~/components/booking/BookingForm.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
</script>

<style scoped lang="scss">
.contact {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 32px;
  padding: 32px;
  border-radius: var(--radius-large);
}

.contact > div:first-child {
  display: grid;
  align-content: start;
  gap: 16px;
}

@media (width <= 880px) {
  .contact {
    grid-template-columns: 1fr;
    padding: 22px;
  }
}
</style>
