// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui-pro",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@compodium/nuxt",
  ],

  fonts: {
    families: [
      {
        name: "mirza",
        provider: "google",
        weights: [300, 400, 500, 600, 700],
      },
    ],
  },

  ui: {
    theme: {
      colors: ["primary", "secondary", "info", "success", "warning", "error"],
    },
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});
