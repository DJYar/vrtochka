<template>
  <section class="section">
    <BaseContainer>
      <div class="stub">
        <p class="eyebrow">Святкування</p>
        <h1>День народження у VR-клубі</h1>
        <p>Заглушка майбутнього лендингу з пакетами, таймінгом, фото кімнат і правилами бронювання.</p>
        <BaseButton @click="openBooking">Забронювати дату</BaseButton>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'

const { openBooking } = useBookingModal()

buildSeo('/ua/birthday', 'День народження у VR-клубі - VR Точка', 'Демонстраційний лендинг святкування дня народження у VR-клубі.')
</script>

<style scoped lang="scss">
.stub {
  display: grid;
  max-width: 780px;
  gap: 18px;
}
</style>
