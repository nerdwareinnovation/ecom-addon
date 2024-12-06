<template>
  <div class="product product-list">
    <div class="row pr-2">
      <div class="col-lg-3 col-md-3 col-6">
        <figure class="product-media">
          <span class="product-label label-new" v-if="product.new">New</span>
          <span class="product-label label-sale" v-if="product.sale_price"
            >Sale</span
          >
          <span class="product-label label-top" v-if="product.top">Top</span>
          <span class="product-label label-out" v-if="product.stock === 0"
            >Out Of Stock</span
          >

          <nuxt-link :to="'/product/default/' + product.slug">
            <img
              v-lazy="`${baseUrl}/${product.image}`"
              alt="Product"
              :width="product.image.width"
              :height="product.image.height"
              class="product-image"
            />
            <img
              v-lazy="`${baseUrl}/${product.image}`"
              alt="Product"
              :width="product.image.width"
              :height="product.image.height"
              class="product-image-hover"
              v-if="product.image"
            />
          </nuxt-link>
        </figure>
      </div>

      <div class="col-lg-6 col-md-6 order-last">
        <div class="product-body product-action-inner">
          <!-- <div class="product-cat">
            <span v-for="(cat, index) of product.category" :key="index">
              <nuxt-link
                :to="{
                  path: '/shop/sidebar/list',
                  query: { category: cat.slug },
                }"
                >{{ cat.name }}</nuxt-link
              >
              {{ index < product.category.length - 1 ? "," : "" }}
            </span>
          </div> -->
          <h3 class="product-title w-100">
            <!-- {{ product.name }} -->

            <nuxt-link :to="'/product/default/' + product.name" class="w-100">{{
              product.name
            }}</nuxt-link>
          </h3>

          <div class="product-content">
            <p>{{ product.short_desc }}</p>
          </div>

          <!-- <div
            class="product-nav product-nav-dots"
            v-if="product.variants.length > 0"
          >
            <div class="row no-gutters">
              <a
                href="javascript:;"
                :style="{ 'background-color': item.color }"
                v-for="(item, index) in product.variants"
                :key="index"
              >
                <span class="sr-only">Color name</span>
              </a>
            </div>
          </div> -->
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-6 order-md-last order-lg-last">
        <div class="product-list-action">
          <div class="product-price" v-if="product.stock == 0" key="outPrice">
            <span class="out-price">${{ product.price.toFixed(2) }}</span>
          </div>

          <template v-else>
            <div class="product-price" v-if="minPrice == maxPrice">
              ${{ minPrice.toFixed(2) }}
            </div>
            <template v-else>
              <!-- <div class="product-price" v-if="product.variants.length == 0">
                <span class="new-price">${{ minPrice.toFixed(2) }}</span>
                <span class="old-price">${{ maxPrice.toFixed(2) }}</span>
              </div> -->
              <!-- <div class="product-price" v-else>
                ${{ minPrice.toFixed(2) }}&ndash;${{ maxPrice.toFixed(2) }}
              </div> -->
              <div class="product-price">
                ${{ product.price }} <br />
                ${{ minPrice.toFixed(2) }}&ndash;${{ maxPrice.toFixed(2) }}
              </div>
            </template>
          </template>

          <!-- <div class="ratings-container">
            <div class="ratings">
              <div
                class="ratings-val"
                :style="{ width: product.ratings * 20 + '%' }"
              ></div>
              <span class="tooltip-text">{{ product.ratings.toFixed(2) }}</span>
            </div>
            <span class="ratings-text">( {{ product.review }} Reviews )</span>
          </div> -->

          <div class="product-action">
            <button
              class="btn-product btn-quickview"
              title="Quick view"
              @click.prevent="quickView({ product: product })"
            >
              <span>quick view</span>
            </button>
            <nuxt-link
              to="/shop/wishlist"
              class="btn-product btn-wishlist added-to-wishlist"
              v-if="isInWishlist"
              key="inWishlist"
            >
              <span>wishlist</span>
            </nuxt-link>
            <a
              href="javascript:;"
              class="btn-product btn-wishlist"
              @click.prevent="addToWishlist(product)"
              v-else
              key="notInWishlist"
            >
              <span>wishlist</span>
            </a>
          </div>

          <!-- <nuxt-link
            :to="'/product/default/' + product.slug"
            class="btn-product btn-cart btn-select"
            v-if="product.variants.length > 0"
          >
            <span>select options</span>
          </nuxt-link> -->
          <!-- <button
            class="btn-product btn-cart"
            :class="{ 'btn-disabled': !canAddToCart(product, 1) }"
            @click.prevent="addToCart({ product: product })"
            v-else
          > -->
          <button
            class="btn-product btn-cart"
            :class="{ 'btn-disabled': !canAddToCart }"
            @click.prevent="addToCart({ product })"
          >
            <span>add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <script>
import { mapGetters, mapActions } from "vuex";
import { baseUrl } from "~/repositories/repository";
export default {
  props: {
    product: Object,
  },
  data: function () {
    return {
      baseUrl: baseUrl,
      maxPrice: 0,
      minPrice: 99999,
    };
  },
  computed: {
    ...mapGetters("cart", ["canAddToCart"]),
    ...mapGetters("wishlist", ["isInWishlist"]),
    ...mapGetters("compare", ["isInCompare"]),
  },

  created: function () {
    let min = this.minPrice;
    let max = this.maxPrice;
    this.product.variants.map((item) => {
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
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),
    ...mapActions("compare", ["addToCompare"]),
    quickView: function () {
      this.$modal.show(
        () => import("~/components/elements/modals/QuickViewModal"),
        {
          product: this.product,
        },
        { width: "1030", height: "auto", adaptive: true }
      );
    },
  },
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
// const canAddToCart = computed(() => useCartStore.canAddToCart);
const canAddToCart = computed(() => cartStore.canAddToCart(props.product));

// const isInWishlist = computed(() => useWishlistStore.isInWishlist);
const isInWishlist = computed(() => wishlistStore.isInWishlist(props.product));
const isInCompare = computed(() => useCompareStore.isInCompare);
onMounted(() => {
  // if (props.product.variants.length > 0) {
  //   props.product.variants.forEach((item) => {
  //     if (minPrice.value > item.price) minPrice.value = item.price;
  //     if (maxPrice.value < item.price) maxPrice.value = item.price;
  //   });
  // } else {
  //   minPrice.value = props.product.sale_price || props.product.price;
  //   maxPrice.value = props.product.price;
  // }
});
const addToCart = (product) => {
  cartStore.addToCart(product);
};
const addToWishlist = (product) => {
  console.log(props.prodcut);
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

<style scoped>
.product-title {
  width: 100%;
}
</style>
