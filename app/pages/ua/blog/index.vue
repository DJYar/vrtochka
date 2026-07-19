<template>
  <section class="section">
    <BaseContainer>
      <SectionHeading eyebrow="Блог" title="Матеріали про VR-відпочинок" text="Демонстраційний список статей для майбутнього контентного розділу." />
      <div class="blog-list">
        <article v-for="post in blogPosts" :key="post.slug" class="blog-list__item surface">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <BaseButton :to="`/ua/blog/${post.slug}`" variant="ghost">Читати</BaseButton>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from '~~/data/blog'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'

buildSeo('/ua/blog', 'Блог - VR Точка', 'Демонстраційні матеріали про VR-ігри, події та відпочинок.')
</script>

<style scoped lang="scss">
.blog-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.blog-list__item {
  display: grid;
  gap: 14px;
  padding: 22px;
  border-radius: var(--radius-medium);

  h2 {
    font-size: 1.35rem;
  }
}

@media (width <= 820px) {
  .blog-list {
    grid-template-columns: 1fr;
  }
}
</style>
