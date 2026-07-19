// https://nuxt.com/docs/api/configuration/nuxt-config
const env = globalThis as typeof globalThis & {
  process?: {
    env?: Record<string, string | undefined>
  }
}

const appBaseUrl = env.process?.env?.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image'],
  components: {
    dirs: [
      {
        path: 'app/components',
        pathPrefix: false
      }
    ]
  },
  css: ['~/assets/styles/main.scss'],
  app: {
    baseURL: appBaseUrl,
    head: {
      htmlAttrs: {
        lang: 'uk'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${appBaseUrl}favicon.svg` }
      ],
      meta: [
        { name: 'theme-color', content: '#0d0e12' },
        { property: 'og:locale', content: 'uk_UA' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: env.process?.env?.NUXT_PUBLIC_SITE_URL || 'https://example.com'
    }
  },
  image: {
    format: ['webp', 'avif', 'png', 'svg']
  }
})
