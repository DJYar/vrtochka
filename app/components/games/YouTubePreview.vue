<template>
  <div class="youtube-preview">
    <iframe
      v-if="isPlaying"
      class="youtube-preview__frame"
      :src="embedUrl"
      :title="`Відео гри ${title}`"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
    <template v-else>
      <img
        v-if="!thumbnailFailed"
        class="youtube-preview__image"
        :src="thumbnailUrl"
        :alt="`Відеопрев’ю гри ${title}`"
        width="480"
        height="360"
        loading="lazy"
        decoding="async"
        referrerpolicy="strict-origin-when-cross-origin"
        @error="thumbnailFailed = true"
      >
      <div v-else class="youtube-preview__fallback" aria-hidden="true">
        <span>VR</span>
      </div>
      <button
        class="youtube-preview__play"
        type="button"
        :aria-label="`Відтворити відео гри ${title}`"
        @click="isPlaying = true"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.5 6.2v11.6L18 12z" />
        </svg>
      </button>
      <span class="youtube-preview__label">YouTube</span>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  videoId: string
  title: string
}>()

const isPlaying = ref(false)
const thumbnailFailed = ref(false)

const thumbnailUrl = computed(() => `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`)
const embedUrl = computed(() => `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0`)
</script>

<style scoped lang="scss">
.youtube-preview {
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;
  background:
    radial-gradient(circle at 72% 28%, rgb(32 217 194 / 28%), transparent 34%),
    linear-gradient(135deg, rgb(124 92 255 / 32%), rgb(13 14 18 / 96%));
}

.youtube-preview__image,
.youtube-preview__frame,
.youtube-preview__fallback {
  width: 100%;
  height: 100%;
  border: 0;
}

.youtube-preview__image {
  object-fit: cover;
  transition: transform var(--transition-default), filter var(--transition-default);
}

.youtube-preview__fallback {
  display: grid;
  place-items: center;

  span {
    color: rgb(255 255 255 / 18%);
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
  }
}

.youtube-preview__play {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 62px;
  height: 62px;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 35%);
  border-radius: 50%;
  background: rgb(13 14 18 / 82%);
  color: #fff;
  box-shadow: 0 14px 34px rgb(0 0 0 / 38%);
  transform: translate(-50%, -50%);
  transition: transform var(--transition-fast), background var(--transition-fast);
  backdrop-filter: blur(10px);

  svg {
    width: 28px;
    height: 28px;
    fill: currentcolor;
  }

  &:hover {
    background: var(--color-primary);
    transform: translate(-50%, -50%) scale(1.08);
  }
}

.youtube-preview__label {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgb(13 14 18 / 76%);
  color: rgb(255 255 255 / 82%);
  font-size: 0.72rem;
  font-weight: 800;
  backdrop-filter: blur(8px);
}

.youtube-preview:hover .youtube-preview__image {
  filter: saturate(1.08);
  transform: scale(1.025);
}
</style>
