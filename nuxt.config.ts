export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  //GLOBAL Metadata -for head on all pages
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }]
    }
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})