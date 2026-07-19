<template>
  <div class="game-category-tabs" role="tablist" aria-label="Категорії VR-ігор">
    <button
      v-for="(tab, index) in tabs"
      :id="`${baseId}-tab-${tab.slug}`"
      :key="tab.slug"
      :ref="element => setTabRef(element, index)"
      class="game-category-tabs__button"
      type="button"
      role="tab"
      :aria-selected="modelValue === tab.slug"
      :aria-controls="panelId"
      :tabindex="modelValue === tab.slug ? 0 : -1"
      @click="$emit('update:modelValue', tab.slug)"
      @keydown="handleKeydown($event, index)"
    >
      {{ tab.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { GameCategory, GameCategoryFilter } from '~/types/game'

const props = defineProps<{
  modelValue: GameCategoryFilter
  categories: GameCategory[]
  baseId: string
  panelId: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: GameCategoryFilter]
}>()

const tabs = computed(() => [
  { slug: 'all' as const, title: 'Усі ігри' },
  ...[...props.categories].sort((first, second) => first.order - second.order)
])

const tabRefs = ref<Array<HTMLButtonElement | null>>([])

const setTabRef = (element: Element | ComponentPublicInstance | null, index: number) => {
  tabRefs.value[index] = element instanceof HTMLButtonElement ? element : null
}

const activateTab = async (index: number) => {
  const tab = tabs.value[index]

  if (!tab) {
    return
  }

  emit('update:modelValue', tab.slug)
  await nextTick()
  tabRefs.value[index]?.focus()
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  const lastIndex = tabs.value.length - 1
  let nextIndex: number | null = null

  if (event.key === 'ArrowRight') {
    nextIndex = index === lastIndex ? 0 : index + 1
  }

  if (event.key === 'ArrowLeft') {
    nextIndex = index === 0 ? lastIndex : index - 1
  }

  if (event.key === 'Home') {
    nextIndex = 0
  }

  if (event.key === 'End') {
    nextIndex = lastIndex
  }

  if (nextIndex !== null) {
    event.preventDefault()
    void activateTab(nextIndex)
  }
}
</script>

<style scoped lang="scss">
.game-category-tabs {
  display: flex;
  overflow-x: auto;
  max-width: 100%;
  gap: 8px;
  padding: 4px 2px 10px;
  scrollbar-width: thin;
  overscroll-behavior-inline: contain;
}

.game-category-tabs__button {
  flex: 0 0 auto;
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgb(255 255 255 / 4%);
  color: var(--color-text-muted);
  font-weight: 800;
  white-space: nowrap;
  transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);

  &:hover {
    border-color: rgb(124 92 255 / 55%);
    color: var(--color-text);
  }

  &[aria-selected="true"] {
    border-color: var(--color-primary);
    background: var(--color-primary);
    color: #fff;
  }
}
</style>
