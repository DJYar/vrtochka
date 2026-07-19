<template>
  <section class="section animated-section">
    <BaseContainer>
      <div class="corporate">
        <div>
          <p class="eyebrow">Команди</p>
          <h2>Корпоративні події без складної підготовки</h2>
        </div>
        <p>Під шаблон закладено блок для HR-подій, невеликих тімбілдингів і вечірніх зустрічей. Надалі сюди можна додати пакетні пропозиції, фото залів і реальну заявку.</p>
        <BaseButton @click="openBooking">Обговорити формат</BaseButton>
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
.corporate {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 0.75fr auto;
  gap: 24px;
  padding: 30px 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

@media (width <= 960px) {
  .corporate {
    grid-template-columns: 1fr;
  }
}
</style>
