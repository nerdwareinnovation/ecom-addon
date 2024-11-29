import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useCompareStore = defineStore("compare", {
  state: () => ({
    data: [],
  }),

  getters: {
    compareList: (state) => state.data,
    isInCompare: (state) => (product) =>
      state.data.some((item) => item.id === product.id),
  },

  actions: {
    addToCompare(product) {
      const { $toast } = useNuxtApp();

      if (this.isInCompare(product)) {
        $toast.removeToast(); // Optional: Remove existing toasts if needed
        $toast.error("Product has already been in Compare.", {
          position: "top-right",
          timeout: 2000,
        });
        return;
      }

      this.data.push(product);

      $toast.success("Product added to compare", {
        position: "top-right",
        timeout: 1500,
      });
    },

    removeFromCompare(product) {
      const { $toast } = useNuxtApp();

      this.data = this.data.filter((item) => item.id !== product.id);

      $toast.success("Product removed from compare", {
        position: "top-right",
        timeout: 1500,
      });
    },

    clearCompare() {
      const { $toast } = useNuxtApp();

      this.data = [];

      $toast.success("Compare list cleared", {
        position: "top-right",
        timeout: 1500,
      });
    },
  },
});
