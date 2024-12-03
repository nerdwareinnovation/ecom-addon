<template>
  <div class="product product-sm align-items-center">
    <figure class="product-media">
      <nuxt-link :to="'/product/default/' + product.slug">
        <img
          v-lazy="`${baseUrl}${product.sm_pictures[0].url}`"
          alt="Product"
          :width="product.sm_pictures[0].width"
          :height="product.sm_pictures[0].height"
          class="product-image"
        />
        <img
          v-lazy="`${baseUrl}${product.sm_pictures[1].url}`"
          alt="Product"
          :width="product.sm_pictures[1].width"
          :height="product.sm_pictures[1].height"
          class="product-image-hover"
          v-if="product.sm_pictures[1]"
        />
      </nuxt-link>
    </figure>

    <div class="product-body py-0 pl-4">
      <h3 class="product-title">
        <nuxt-link :to="'/product/default/' + product.slug">{{
          product.name
        }}</nuxt-link>
      </h3>
      <div class="product-price" v-if="product.stock == 0" key="outPrice">
        <span class="out-price">${{ product.price.toFixed(2) }}</span>
      </div>

      <template v-else>
        <div class="product-price" v-if="minPrice == maxPrice">
          ${{ minPrice.toFixed(2) }}
        </div>
        <template v-else>
          <div class="product-price" v-if="product.variants.length == 0">
            <span class="new-price">${{ minPrice.toFixed(2) }}</span>
            <span class="old-price">${{ maxPrice.toFixed(2) }}</span>
          </div>
          <div class="product-price" v-else>
            ${{ minPrice.toFixed(2) }}&ndash;${{ maxPrice.toFixed(2) }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
<!-- <script>
<!-- <script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/repositories/repository';
export default {
    props: {
        product: Object
    },
    data: function() {
        return {
            baseUrl: baseUrl,
            maxPrice: 0,
            minPrice: 99999
        };
    },

    created: function() {
        let min = this.minPrice;
        let max = this.maxPrice;
        this.product.variants.map(item => {
            if (min > item.price) min = item.price;
            if (max < item.price) max = item.price;
        }, []);

        if (this.product.variants.length == 0) {
            min = this.product.sale_price
                ? this.product.sale_price
                : this.product.price;
            max = this.product.price;
        }

        this.minPrice = min;
        this.maxPrice = max;
    }
};
</script> -->
<script setup>
import { baseUrl } from "~/repositories/repository";
const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const compareStore = useCompareStore();

const maxPrice = ref(0);
const minPrice = ref(99999);
const canAddToCart = computed(() => useCartStore.canAddToCart);
const isInWishlist = computed(() => useWishlistStore.isInWishlist);
const isInCompare = computed(() => useCompareStore.isInCompare);
onCreated(() => {
  if (props.product.variants.length > 0) {
    props.product.variants.forEach((item) => {
      if (minPrice.value > item.price) minPrice.value = item.price;
      if (maxPrice.value < item.price) maxPrice.value = item.price;
    });
  } else {
    minPrice.value = props.product.sale_price || props.product.price;
    maxPrice.value = props.product.price;
  }
});
const addToCart = (product) => {
  cartStore.addToCart(product);
};
const addToWishlist = (product) => {
  wishlistStore.addToWishlist(product);
};
const addToCompare = (prodcut) => {
  compareStore.addToCompare(prodcut);
};
const quickView = () => {
  const modal = useNuxtApp().$modal;
  modal.show(
    () => import("~/components/elements/modals/QuickViewModal"),
    { product: props.product },
    { width: "1030", height: "auto", adaptive: true }
  );
};
</script>
