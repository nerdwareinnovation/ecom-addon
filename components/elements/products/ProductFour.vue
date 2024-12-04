<template>
  <div class="product product-3">
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
        <a
          href="#"
          class="btn-product-icon btn-compare"
          title="Compare"
          @click.prevent="addToCompare({ product: product })"
          v-else
          key="notInCompare"
        >
          <span>Compare</span>
        </a>
      </div>

      <div class="product-action" v-if="product.stock !== 0">
        <nuxt-link
          :to="'/product/default/' + product.slug"
          class="btn btn-product btn-cart btn-select"
          v-if="product.variants.length > 0"
        >
          <span>select options</span>
        </nuxt-link>
        <a
          href="javascript:;"
          class="btn btn-product btn-cart"
          @click.prevent="addToCart({ product: product })"
          v-else
        >
          <span>add to cart</span>
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
    </div>
    <div class="product-footer">
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

      <div
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
      </div>
    </div>
  </div>
</template>
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
    computed: {
        ...mapGetters('cart', ['canAddToCart']),
        ...mapGetters('wishlist', ['isInWishlist']),
        ...mapGetters('compare', ['isInCompare'])
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
    },
    mounted: function() {
        this.$el.addEventListener('mouseover', this.mouseOverHandler, {
            passive: true
        });
        this.$el.addEventListener('mouseleave', this.mouseLeaveHandler, {
            passive: true
        });
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        ...mapActions('wishlist', ['addToWishlist']),
        ...mapActions('compare', ['addToCompare']),
        quickView: function() {
            this.$modal.show(
                () => import('~/components/elements/modals/QuickViewModal'),
                {
                    product: this.product
                },
                { width: '1030', height: 'auto', adaptive: true }
            );
        },
        mouseOverHandler: function() {
            let animDiff =
                this.$el.offsetHeight -
                (this.$el.querySelector('.product-body').offsetHeight +
                    this.$el.querySelector('.product-media').offsetHeight);
            let animDistance =
                this.$el.querySelector('.product-footer').offsetHeight -
                animDiff;
            this.$el
                .querySelector('.product-footer')
                .setAttribute(
                    'style',
                    'visibility: visible; transform: translateY(0);'
                );
            this.$el
                .querySelector('.product-body')
                .setAttribute(
                    'style',
                    'transform: translateY(' + -animDistance + 'px)'
                );
        },
        mouseLeaveHandler: function() {
            this.$el
                .querySelector('.product-footer')
                .setAttribute(
                    'style',
                    'visibility: hidden; transform: translateY(100%);'
                );
            this.$el
                .querySelector('.product-body')
                .setAttribute('style', 'transform: translateY(0)');
        }
    }
};
</script> -->

<script setup>
import { ref, onMounted, watch } from "vue";

// import { useModal } from "@nuxtjs/modal";
import { baseUrl } from "~/repositories/repository";
import { useRoute } from "vue-router";

const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const compareStore = useCompareStore();
const modal = useModal();
const route = useRoute();

const maxPrice = ref(0);
const minPrice = ref(99999);

const productVariants = computed(() => props.product?.variants || []);
const productPrice = computed(() => {
  if (productVariants.value.length > 0) {
    return productVariants.value.map((item) => item.price);
  }
  return props.product.sale_price
    ? props.product.sale_price
    : props.product.price;
});

watch(
  productVariants,
  () => {
    let min = minPrice.value;
    let max = maxPrice.value;

    productVariants.value.forEach((item) => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    });

    minPrice.value = min;
    maxPrice.value = max;
  },
  { immediate: true }
);

onMounted(() => {
  document
    .querySelector(".product-card")
    .addEventListener("mouseover", mouseOverHandler, { passive: true });

  document
    .querySelector(".product-card")
    .addEventListener("mouseleave", mouseLeaveHandler, { passive: true });
});

const canAddToCart = computed(() => cartStore.canAddToCart);
const isInWishlist = computed(() =>
  wishlistStore.isInWishlist(props.product.id)
);
const isInCompare = computed(() => compareStore.isInCompare(props.product.id));

const quickView = () => {
  modal.show(
    "QuickViewModal",
    {
      product: props.product,
    },
    { width: "1030px", height: "auto", adaptive: true }
  );
};

const mouseOverHandler = () => {
  const productBody = document.querySelector(".product-body");
  const productFooter = document.querySelector(".product-footer");
  const animDiff =
    document.querySelector(".product-card").offsetHeight -
    productBody.offsetHeight -
    productFooter.offsetHeight;
  const animDistance = productFooter.offsetHeight - animDiff;

  productFooter.style.visibility = "visible";
  productFooter.style.transform = "translateY(0)";
  productBody.style.transform = `translateY(${-animDistance}px)`;
};

const mouseLeaveHandler = () => {
  const productBody = document.querySelector(".product-body");
  const productFooter = document.querySelector(".product-footer");

  productFooter.style.visibility = "hidden";
  productFooter.style.transform = "translateY(100%)";
  productBody.style.transform = "translateY(0)";
};

const addToCart = () => cartStore.addToCart(props.product);
const addToWishlist = () => wishlistStore.addToWishlist(props.product);
const addToCompare = () => compareStore.addToCompare(props.product);
</script>
