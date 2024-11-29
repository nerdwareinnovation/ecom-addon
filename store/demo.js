import { defineStore } from "pinia";

export const useDemoStore = defineStore("newsletter", {
  state: () => ({
    current: 1,
    showNewsletter: true,
  }),

  getters: {
    currentDemo: (state) => `demo${state.current}`,
    newsletterShow: (state) => state.showNewsletter,
  },

  actions: {
    hideNewsletter() {
      this.showNewsletter = false;
    },

    refreshStore() {
      // Implement refresh logic here if needed
      // e.g., resetting state values to initial state or fetching new data
    },
  },
});
