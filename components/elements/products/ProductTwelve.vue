<template>
  <div class="product product-11 text-center">
    <figure class="product-media">
      <span class="product-label label-circle label-new" v-if="product.new"
        >New</span
      >
      <span
        class="product-label label-circle label-sale"
        v-if="product.sale_price"
        >Sale</span
      >
      <span class="product-label label-circle label-top" v-if="product.top"
        >Top</span
      >
      <span
        class="product-label label-circle label-out"
        v-if="product.stock === 0"
        >Out Of Stock</span
      >

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
      <div class="product-action-vertical" v-if="product.stock !== 0">
        <nuxt-link
          to="/shop/wishlist"
          class="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
          v-if="isInWishlist(product)"
          key="inWishlist"
        >
          <span>go to wishlist</span>
        </nuxt-link>
        <a
          href="javascript:;"
          class="btn-product-icon btn-wishlist btn-expandable"
          @click.prevent="addToWishlist({ product: product })"
          v-else
          key="notInWishlist"
        >
          <span>add to wishlist</span>
        </a>
        <a
          href="javascript:;"
          class="btn-product-icon btn-quickview"
          title="Quick view"
          @click.prevent="quickView({ product: product })"
        >
          <span>Quick view</span>
        </a>
        <a
          href="javascript:;"
          class="btn-product-icon btn-compare added-to-compare"
          title="Compare"
          v-if="isInCompare(product)"
          key="inCompare"
        >
          <span>Compare</span>
        </a>
      </div>
    </figure>

    <div class="product-body">
      <div class="product-cat">
        <span v-for="(cat, index) of product.category" :key="index">
          <nuxt-link
            :to="{ path: '/shop/sidebar/list', query: { category: cat.slug } }"
            >{{ cat.name }}</nuxt-link
          >
          {{ index < product.category.length - 1 ? "," : "" }}
        </span>
      </div>
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

      <div class="ratings-container">
        <div class="ratings">
          <div
            class="ratings-val"
            :style="{ width: product.ratings * 20 + '%' }"
          ></div>
          <span class="tooltip-text">{{ product.ratings.toFixed(2) }}</span>
        </div>
        <span class="ratings-text">( {{ product.review }} Reviews )</span>
      </div>
    </div>

    <div class="product-action" v-if="product.stock !== 0">
      <nuxt-link
        :to="'/product/default/' + product.slug"
        class="btn-product btn-cart btn-select"
        v-if="product.variants.length > 0"
      >
        <span>select options</span>
      </nuxt-link>
      <button
        class="btn-product btn-cart"
        @click.prevent="addToCart({ product: product })"
        v-else
      >
        <span>add to cart</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

// import { baseUrl } from "~/repositories/repository";

// Props
defineProps({
  product: Object,
});

// State and Variables
const baseUrlRef = "http://localhost:3000/";
const maxPrice = ref(0);
const minPrice = ref(99999);

// Pinia Stores
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const compareStore = useCompareStore();

// Computed Properties
const canAddToCart = computed(() => cartStore.canAddToCart);
const isInWishlist = computed(() => wishlistStore.isInWishlist(product));
const isInCompare = computed(() => compareStore.isInCompare(product));

// Methods
function addToCart(payload) {
  cartStore.addToCart(payload);
}

function addToWishlist(payload) {
  wishlistStore.addToWishlist(payload);
}

function addToCompare(payload) {
  compareStore.addToCompare(payload);
}

function quickView() {
  useNuxtApp().$modal.show(
    () => import("~/components/elements/modals/QuickViewModal"),
    {
      product,
    },
    { width: "1030", height: "auto", adaptive: true }
  );
}

// Lifecycle Hook
onMounted(() => {
  let min = minPrice.value;
  let max = maxPrice.value;

  product.variants.forEach((item) => {
    if (min > item.price) min = item.price;
    if (max < item.price) max = item.price;
  });

  if (product.variants.length === 0) {
    min = product.sale_price ? product.sale_price : product.price;
    max = product.price;
  }

  minPrice.value = min;
  maxPrice.value = max;
});
</script>
