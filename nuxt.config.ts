// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "nuxt-swiper",
    "nuxt-easy-lightbox",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  css: [
    "~/static/vendor/line-awesome/css/line-awesome.min.css",
    "~/static/css/fonts-molla.min.css",
    "~/static/css/bootstrap.min.css",
    "~/assets/scss/style.scss",
  ],
  plugins: ["~/plugins/toastify.js"],
  imports: {
    dirs: ["store"],
  },
});
