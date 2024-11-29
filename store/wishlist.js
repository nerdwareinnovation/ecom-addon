// stores/wishlist.js
import { defineStore } from "pinia";
import { useCartStore } from "./cart"; // Assuming you have a cart store

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
      if (!this.isInWishlist(product)) {
        this.data.push(product);

        // Toast notification
        this.$nuxt.$toast.success("Product added to wishlist", {
          position: "top-right",
          duration: 1500,
        });
      }
    },

    removeFromWishlist(product) {
      this.data = this.data.filter((item) => item.id !== product.id);

      // Toast notification
      this.$nuxt.$toast.success("Product removed from wishlist", {
        position: "top-right",
        duration: 1500,
      });
    },

    moveToCart(product) {
      const cartStore = useCartStore(); // Access the cart store

      this.removeFromWishlist(product); // Remove from wishlist
      cartStore.addToCart({ product, qty: 1 }); // Add to cart

      // Toast notification
      this.$nuxt.$toast.success("Product moved to cart", {
        position: "top-right",
        duration: 1500,
      });
    },
  },
});
