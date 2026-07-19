<template>
  <NuxtLink
    class="app-logo"
    :class="`app-logo--${size}`"
    to="/ua"
    aria-label="VR Точка, на головну"
  >
    <NuxtImg
      class="app-logo__image"
      src="/images/brand/vr-tochka-logo-white.png"
      alt=""
      width="1024"
      height="1024"
      loading="eager"
      aria-hidden="true"
    />
    <span class="app-logo__accessible-name">VR Точка</span>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'header' | 'footer'
}>(), {
  size: 'header'
})
</script>

<style scoped lang="scss">
.app-logo {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  line-height: 0;
}

.app-logo__image {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.app-logo--footer .app-logo__image {
  width: 132px;
  height: 132px;
}

.app-logo__accessible-name {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (width <= 480px) {
  .app-logo__image {
    width: 56px;
    height: 56px;
  }

  .app-logo--footer .app-logo__image {
    width: 112px;
    height: 112px;
  }
}
</style>
