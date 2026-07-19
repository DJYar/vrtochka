<template>
  <header class="app-header">
    <BaseContainer>
      <div class="app-header__inner">
        <AppLogo />
        <nav class="app-header__nav" aria-label="Основна навігація">
          <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="app-header__actions">
          <a class="app-header__phone" href="tel:+380631112233">+38 063 111 22 33</a>
          <BaseButton @click="$emit('booking')">Забронювати</BaseButton>
          <button
            class="app-header__menu"
            type="button"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-navigation"
            aria-label="Відкрити меню"
            @click="toggleMenu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </BaseContainer>
    <MobileNavigation
      id="mobile-navigation"
      :open="isMenuOpen"
      :items="navItems"
      @close="isMenuOpen = false"
      @booking="handleMobileBooking"
    />
  </header>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import MobileNavigation from './MobileNavigation.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'

const emit = defineEmits<{
  booking: []
}>()

const isMenuOpen = ref(false)
const navItems = [
  { label: 'Ігри', to: '/ua/games' },
  { label: 'Ціни', to: '/ua#prices' },
  { label: 'День народження', to: '/ua/birthday' },
  { label: 'PS-клуб', to: '/ua/ps-club' },
  { label: 'Блог', to: '/ua/blog' },
  { label: 'Контакти', to: '/ua/contacts' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleMobileBooking = () => {
  isMenuOpen.value = false
  emit('booking')
}

watch(isMenuOpen, (value) => {
  if (import.meta.client) {
    document.body.classList.toggle('modal-open', value)
  }
})
</script>

<style scoped lang="scss">
.app-header {
  position: sticky;
  top: 0;
  z-index: 90;
  border-bottom: 1px solid var(--color-border);
  background: rgb(13 14 18 / 82%);
  backdrop-filter: blur(18px);
}

.app-header__inner {
  display: flex;
  min-height: 84px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  font-weight: 700;

  a:hover,
  a.router-link-active {
    color: var(--color-text);
  }
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.app-header__phone {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 800;
  white-space: nowrap;
}

.app-header__menu {
  display: none;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  background: rgb(255 255 255 / 6%);

  span {
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: var(--color-text);
  }
}

@media (width <= 1080px) {
  .app-header__phone {
    display: none;
  }
}

@media (width <= 920px) {
  .app-header__nav,
  .app-header__actions > .base-button {
    display: none;
  }

  .app-header__menu {
    display: grid;
  }
}
</style>
