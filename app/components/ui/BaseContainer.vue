<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: min(100% - (var(--container-padding) * 2), var(--container-width));
  margin-inline: auto;
}
</style>
