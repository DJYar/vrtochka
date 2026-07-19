<template>
  <section class="section">
    <BaseContainer>
      <article v-if="post" class="article">
        <p class="eyebrow">Блог</p>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <p>Це заглушка статті. На наступному етапі сюди можна додати реальний матеріал, автора, дату, зміст і пов’язані ігри.</p>
      </article>
      <div v-else class="article">
        <h1>Матеріал не знайдено</h1>
        <p>Перейдіть до списку демонстраційних матеріалів.</p>
        <BaseButton to="/ua/blog">До блогу</BaseButton>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from '~~/data/blog'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'

const route = useRoute()
const post = computed(() => blogPosts.find((item) => item.slug === route.params.slug))

buildSeo(
  `/ua/blog/${route.params.slug}`,
  `${post.value?.title || 'Матеріал'} - VR Точка`,
  post.value?.description || 'Демонстраційна стаття українською мовою.'
)
</script>

<style scoped lang="scss">
.article {
  display: grid;
  max-width: 820px;
  gap: 18px;
}
</style>
