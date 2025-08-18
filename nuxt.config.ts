// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@compodium/nuxt',
  ],

  // vite: {
  //   resolve: {
  //     alias: {
  //       '~': fileURLToPath(new URL('./app', import.meta.url)),
  //       '@': fileURLToPath(new URL('./app', import.meta.url)),
  //     }
  //   }
  // },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }

})