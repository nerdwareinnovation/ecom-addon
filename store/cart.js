import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
export const useCartStore = defineStore("cart", {
  state: () => ({
    data: [],
  }),

  getters: {
    cartList: (state) => state.data,

    priceTotal: (state) => {
      return state.data.reduce((acc, cur) => acc + cur.sum, 0);
    },

    qtyTotal: (state) => {
      return state.data.reduce((acc, cur) => acc + parseInt(cur.qty, 10), 0);
    },

    isInCart: (state) => (product) => {
      return state.data.some((item) => item.id === product.id);
    },

    canAddToCart:
      (state) =>
      (product, qty = 1) => {
        const existingItem = state.data.find((item) => item.id === product.id);

        if (existingItem) {
          return (
            product.quantity > 0 && product.quantity >= existingItem.qty + qty
          );
        }
        return product.quantity > 0 && product.quantity >= qty;
      },
  },

  actions: {
    addToCart(payload) {
      console.log(payload.qty);
      const { $toast } = useNuxtApp();
      if (!this.canAddToCart(payload.product, payload.qty)) {
        $toast.error("Sorry, you can't add that amount to the cart.");
        return;
      }

      const findIndex = this.data.findIndex(
        (item) => item.id === payload.product.id
      );
      const qty = payload.qty || 1;

      if (findIndex !== -1) {
        // Update existing product
        this.data = this.data.map((product, index) => {
          if (index === findIndex) {
            const updatedQty = product.qty + qty;
            return {
              ...product,
              qty: updatedQty,
              sum:
                updatedQty *
                (payload.product.sale_price || payload.product.price),
            };
          }
          return product;
        });
      } else {
        // Add new product
        this.data.push({
          ...payload.product,
          qty,
          price: payload.product.sale_price || payload.product.price,
          sum: qty * (payload.product.sale_price || payload.product.price),
        });
      }

      $toast.success("Product added to cart");
    },

    removeFromCart(payload) {
      const { $toast } = useNuxtApp();
      this.data = this.data.filter((item) => {
        return (
          item.id !== payload.product.id || item.name !== payload.product.name
        );
      });

      $toast.success("Product removed from cart");
    },

    updateCart(payload) {
      const { $toast } = useNuxtApp();
      this.data = payload.cartItems.map((cur) => ({
        ...cur,
        sum: (cur.sale_price || cur.price) * cur.qty,
      }));

      $toast.success("Cart successfully updated");
    },

    clearCart() {
      const { $toast } = useNuxtApp();
      this.data = [];
      $toast.success("Cart cleared");
    },
  },
  persist: true,
});
