import Sticky from "vue3-sticky-directive";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Sticky);
});
