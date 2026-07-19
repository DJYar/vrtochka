<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="modal" role="presentation" @mousedown.self="emitClose">
        <section
          ref="dialogRef"
          class="modal__dialog"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          tabindex="-1"
        >
          <header class="modal__header">
            <h2 :id="titleId">{{ title }}</h2>
            <button type="button" class="modal__close" aria-label="Закрити модальне вікно" @click="emitClose">
              ×
            </button>
          </header>
          <slot />
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  open: boolean
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()

const titleId = useId()
const dialogRef = ref<HTMLElement | null>(null)
let previousFocus: HTMLElement | null = null

const emitClose = () => emit('close')

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emitClose()
  }
}

watch(() => props.open, async (value) => {
  if (!import.meta.client) {
    return
  }

  if (value) {
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    dialogRef.value?.focus()
  } else {
    document.body.classList.remove('modal-open')
    window.removeEventListener('keydown', onKeydown)
    previousFocus?.focus()
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.classList.remove('modal-open')
    window.removeEventListener('keydown', onKeydown)
  }
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgb(0 0 0 / 68%);
}

.modal__dialog {
  width: min(100%, 620px);
  max-height: min(820px, calc(100dvh - 40px));
  overflow: auto;
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-medium);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.modal__header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;

  h2 {
    font-size: clamp(1.6rem, 4vw, 2.3rem);
  }
}

.modal__close {
  display: grid;
  width: 42px;
  min-width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  background: rgb(255 255 255 / 6%);
  color: var(--color-text);
  font-size: 1.7rem;
  line-height: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--transition-default);

  .modal__dialog {
    transition: transform var(--transition-default);
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal__dialog {
    transform: translateY(14px) scale(0.98);
  }
}
</style>
