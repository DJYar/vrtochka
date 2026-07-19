<template>
  <footer class="app-footer">
    <BaseContainer>
      <div class="app-footer__grid">
        <div class="app-footer__brand">
          <AppLogo size="footer" />
          <p>VR Точка — простір віртуальних пригод, командних ігор і яскравих подій.</p>
        </div>
        <nav aria-label="Навігація у футері">
          <h2>Розділи</h2>
          <NuxtLink to="/ua/games">Ігри</NuxtLink>
          <NuxtLink to="/ua/birthday">День народження</NuxtLink>
          <NuxtLink to="/ua/ps-club">PS-клуб</NuxtLink>
          <NuxtLink to="/ua/blog">Блог</NuxtLink>
        </nav>
        <address>
          <h2>Контакти</h2>
          <a href="tel:+380631112233">+38 063 111 22 33</a>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <span>Київ, вул. Прикладна, 12</span>
          <span>Щодня 11:00-22:00</span>
        </address>
      </div>
      <p class="app-footer__bottom">© 2026 VR Точка. Демонстраційна версія сайту без реальної системи бронювання.</p>
    </BaseContainer>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
</script>

<style scoped lang="scss">
.app-footer {
  padding: 56px 0 28px;
  border-top: 1px solid var(--color-border);
  background: #090a0d;
}

.app-footer__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.9fr;
  gap: 38px;
}

.app-footer__brand {
  display: grid;
  gap: 18px;
  max-width: 420px;
}

nav,
address {
  display: grid;
  align-content: start;
  gap: 12px;
  color: var(--color-text-muted);
  font-style: normal;

  h2 {
    color: var(--color-text);
    font-size: 1rem;
  }

  a:hover {
    color: var(--color-text);
  }
}

.app-footer__bottom {
  margin-top: 38px;
  padding-top: 22px;
  border-top: 1px solid var(--color-border);
  font-size: 0.9rem;
}

@media (width <= 768px) {
  .app-footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
