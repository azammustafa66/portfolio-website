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
        { name: 'description', content: 'Software Engineer at IBM working on SAP SuccessFactors cloud integrations, test automation, and backend development. Based in Bangalore, India.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://azam-sys.netlify.app' },
        { property: 'og:title', content: 'Azam Mustufa — Software Engineer' },
        { property: 'og:description', content: 'Software Engineer at IBM working on SAP SuccessFactors cloud integrations, test automation, and backend development.' },
        { property: 'og:image', content: 'https://azam-sys.netlify.app/og.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Azam Mustufa — Software Engineer' },
        { name: 'twitter:description', content: 'Software Engineer at IBM. Working on SAP SuccessFactors cloud integrations, test automation, and backend development.' },
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
