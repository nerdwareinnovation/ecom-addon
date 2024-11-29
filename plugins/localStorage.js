import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    demo: {
      current: 1, // Default value
    },
    // Add other state properties as needed
  }),
  persist: true, // Enable persistence
});
