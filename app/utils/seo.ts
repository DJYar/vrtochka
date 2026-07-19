export const buildSeo = (path: string, title: string, description: string) => {
  const config = useRuntimeConfig()
  const url = `${config.public.siteUrl}${path}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogType: 'website'
  })

  useHead({
    link: [{ rel: 'canonical', href: url }]
  })
}
