<template>
  <section class="section animated-section">
    <BaseContainer>
      <div class="rooms surface">
        <div>
          <p class="eyebrow">Кімнати</p>
          <h2>Ігрові кімнати для компаній</h2>
          <p>Окремі зони допомагають зібрати друзів, дивитися гру на екрані й міняти сценарії без зайвого очікування.</p>
          <BaseButton to="/ua/ps-club" variant="secondary">Дізнатися більше</BaseButton>
        </div>
        <NuxtImg src="/images/placeholders/room-grid.svg" alt="Абстрактна схема ігрових кімнат" width="900" height="620" />
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
</script>

<style scoped lang="scss">
.rooms {
  display: grid;
  overflow: hidden;
  align-items: center;
  grid-template-columns: 0.82fr 1fr;
  gap: 32px;
  padding: 32px;
  border-radius: var(--radius-large);

  div {
    display: grid;
    gap: 18px;
  }

  img {
    width: 100%;
    border-radius: var(--radius-medium);
  }
}

@media (width <= 860px) {
  .rooms {
    grid-template-columns: 1fr;
  }
}
</style>
