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
  },
  css: ["~/assets/main.css"],
});
