// stores/wishlist.js
import { defineStore } from "pinia";
// import { useCartStore } from "./cart"; // Assuming you have a cart store

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    data: [],
  }),

  getters: {
    wishlist(state) {
      return state.data;
    },
    wishlistQty(state) {
      return state.data.length;
    },
    isInWishlist: (state) => (product) => {
      return state.data.some((item) => item.id === product.id);
    },
  },

  actions: {
    addToWishlist(product) {
      const { $toast } = useNuxtApp();

      if (!this.isInWishlist(product)) {
        this.data.push(product);

        // Toast notification
        $toast.success("Product added to wishlist", {
          position: "top-right",
          duration: 1500,
        });
      }
    },

    removeFromWishlist(product) {
      const { $toast } = useNuxtApp();

      this.data = this.data.filter((item) => item.id !== product.id);

      // Toast notification
      $toast.success("Product removed from wishlist", {
        position: "top-right",
        duration: 1500,
      });
    },

    moveToCart(product) {
      const { $toast } = useNuxtApp();

      const cartStore = useCartStore();

      // this.removeFromWishlist(product);
      cartStore.addToCart({ product, qty: 1 }); // Add to cart

      // Toast notification
      $toast.success("Product moved to cart", {
        position: "top-right",
        duration: 1500,
      });
    },
  },
  persist: true,
});
