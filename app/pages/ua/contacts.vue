<template>
  <section class="section">
    <BaseContainer>
      <div class="contacts">
        <div>
          <p class="eyebrow">Контакти</p>
          <h1>Зв’яжіться з VR Точка</h1>
          <p>Тимчасові контактні дані для демонстраційного шаблону.</p>
        </div>
        <address class="contacts__card surface">
          <a href="tel:+380631112233">+38 063 111 22 33</a>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <span>Київ, вул. Прикладна, 12</span>
          <span>Щодня 11:00-22:00</span>
        </address>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'

buildSeo('/ua/contacts', 'Контакти - VR Точка', 'Тимчасові контакти демонстраційного українського шаблону VR-клубу.')
</script>

<style scoped lang="scss">
.contacts {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 28px;
}

.contacts__card {
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: var(--radius-medium);
  color: var(--color-text-muted);
  font-style: normal;
}

@media (width <= 760px) {
  .contacts {
    grid-template-columns: 1fr;
  }
}
</style>
