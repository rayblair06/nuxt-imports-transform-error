import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/sitemap"],
  i18n: {
    strategy: "prefix_except_default", // https://i18n.nuxtjs.org/strategies/
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en", name: "English" },
      { code: "es", iso: "es", name: "Español" },
    ],
  },
  site: {
    url: "https://example.com",
  },
  ignore: [
    "**/dist/**/*", // Doesn't work
    "dist", // Doesn't work
    "**/node_modules/**/*", // Doesn't work
    "node_modules/**/*", // Doesn't work
    "node_modules", // Doesn't work
  ],
});
