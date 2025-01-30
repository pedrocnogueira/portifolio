// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    baseURL: "/portifolio/",
  },

  alias: {
    "@": resolve(__dirname, "/"),
    "@images": resolve(__dirname, "assets/images"),
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/hero.css",
    "~/assets/css/ADA.css",
    "~/assets/css/pinspot.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
