<template>
  <header class="section-heading">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="text" class="section-heading__text">{{ text }}</p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  text?: string
}>()
</script>

<style scoped lang="scss">
.section-heading {
  display: grid;
  max-width: 760px;
  gap: 16px;
  margin-bottom: 34px;
}

.section-heading__text {
  font-size: 1.08rem;
}
</style>
