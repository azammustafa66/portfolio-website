export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Azam Mustufa — Software Engineer',
      meta: [
        { name: 'description', content: 'Software Engineer at IBM building distributed systems, cloud integrations, and scalable backend APIs. Based in Bangalore, India.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Azam Mustufa — Software Engineer' },
        { property: 'og:description', content: 'Software Engineer at IBM specializing in distributed systems, cloud integrations, and high-concurrency backend APIs.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Azam Mustufa — Software Engineer' },
        { name: 'twitter:description', content: 'Software Engineer at IBM. Building distributed systems, cloud integrations, and scalable backend APIs.' },
      ],
    },
  },
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Geist': [500],
    },
    display: 'swap',
  },
})
