<template>
  <Transition name="mobile-nav">
    <div v-if="open" class="mobile-nav" role="dialog" aria-modal="true" aria-label="Мобільна навігація">
      <nav class="mobile-nav__panel" aria-label="Основна мобільна навігація">
        <NuxtLink v-for="item in items" :key="item.to" :to="item.to" @click="$emit('close')">
          {{ item.label }}
        </NuxtLink>
        <BaseButton wide @click="$emit('booking')">Забронювати</BaseButton>
      </nav>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

defineProps<{
  open: boolean
  items: Array<{ label: string, to: string }>
}>()

defineEmits<{
  close: []
  booking: []
}>()
</script>

<style scoped lang="scss">
.mobile-nav {
  position: fixed;
  inset: 70px 0 auto;
  z-index: 80;
  padding: 0 var(--container-padding) 20px;
  background: linear-gradient(180deg, rgb(13 14 18 / 96%), rgb(13 14 18 / 84%));
  backdrop-filter: blur(18px);
}

.mobile-nav__panel {
  display: grid;
  gap: 8px;
  padding: 18px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-medium);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);

  a {
    padding: 14px 10px;
    border-radius: var(--radius-small);
    color: var(--color-text);
    font-weight: 800;

    &:hover {
      background: rgb(255 255 255 / 7%);
    }
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity var(--transition-default), transform var(--transition-default);
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (width >= 921px) {
  .mobile-nav {
    display: none;
  }
}
</style>
