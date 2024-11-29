<template>
  <div class="wishlist">
    <nuxt-link to="/shop/wishlist" title="Wishlist">
      <div class="icon">
        <i class="icon-heart-o"></i>
        <span class="wishlist-count badge">{{ wishlistQty }}</span>
      </div>
      <p>Wishlist</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  setup() {
    const wishlistStore = useWishlistStore(); // Access the wishlist store

    const wishlistQty = computed(() => wishlistStore.wishlistQty); // Map the getter to a computed property

    return {
      wishlistQty,
    };
  },
};
</script>
