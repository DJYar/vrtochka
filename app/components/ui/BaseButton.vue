<template>
  <NuxtLink
    v-if="to"
    class="base-button"
    :class="[`base-button--${variant}`, { 'base-button--wide': wide }]"
    :to="to"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    class="base-button"
    :class="[`base-button--${variant}`, { 'base-button--wide': wide }]"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  wide?: boolean
}>(), {
  to: undefined,
  variant: 'primary',
  type: 'button',
  wide: false
})
</script>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: var(--radius-small);
  font-weight: 800;
  line-height: 1.1;
  text-align: center;
  transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
  }
}

.base-button--wide {
  width: 100%;
}

.base-button--primary {
  background: var(--color-primary);
  color: var(--color-text);

  &:hover {
    background: var(--color-primary-hover);
  }
}

.base-button--secondary {
  background: var(--color-secondary);
  color: #08110f;
}

.base-button--ghost {
  background: rgb(255 255 255 / 6%);
  border-color: var(--color-border);
  color: var(--color-text);
}
</style>
