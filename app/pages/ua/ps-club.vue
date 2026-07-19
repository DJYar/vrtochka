<template>
  <section class="section">
    <BaseContainer>
      <div class="stub">
        <p class="eyebrow">Кімнати</p>
        <h1>PS-клуб та ігрові кімнати</h1>
        <p>Заглушка сторінки для консольних кімнат, компаній і додаткових форматів відпочинку.</p>
        <BaseButton @click="openBooking">Запитати час</BaseButton>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'

const { openBooking } = useBookingModal()

buildSeo('/ua/ps-club', 'PS-клуб та ігрові кімнати - VR Точка', 'Демонстраційна сторінка ігрових кімнат для компаній.')
</script>

<style scoped lang="scss">
.stub {
  display: grid;
  max-width: 780px;
  gap: 18px;
}
</style>
