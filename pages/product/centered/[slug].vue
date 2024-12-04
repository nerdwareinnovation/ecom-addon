<template>
  <main class="main">
    <breadcrumb
      :prev-product="prevProduct"
      :next-product="nextProduct"
      current="Centered"
    ></breadcrumb>

    <div class="page-content">
      <div class="container skeleton-body">
        <div class="product-details-top">
          <div class="row skel-pro-single" :class="{ loaded: loaded }">
            <div class="col-md-6">
              <div class="skel-product-gallery"></div>
              <gallery-vertical :product="product"></gallery-vertical>
            </div>

            <div class="col-md-6">
              <div class="entry-summary row">
                <div class="col-md-12">
                  <div class="entry-summary1 mt-2 mt-md-0"></div>
                </div>
                <div class="col-md-12">
                  <div class="entry-summary2"></div>
                </div>
              </div>
              <detail-two :product="product" v-if="product"></detail-two>
            </div>
          </div>
        </div>

        <info-one></info-one>

        <related-products-one
          :products="relatedProducts"
        ></related-products-one>
      </div>
    </div>
  </main>
</template>
<!-- <script>
import { mapGetters } from 'vuex';

import GalleryVertical from '~/components/partial/product/gallery/GalleryVertical';
import DetailTwo from '~/components/partial/product/details/DetailTwo';
import InfoOne from '~/components/partial/product/info-tabs/InfoOne';
import Breadcrumb from '~/components/partial/product/BreadCrumb';
import RelatedProductsOne from '~/components/partial/product/related/RelatedProductsOne';
import Repository, { baseUrl } from '~/repositories/repository.js';

export default {
    components: {
        DetailTwo,
        InfoOne,
        Breadcrumb,
        GalleryVertical,
        RelatedProductsOne
    },
    data: function() {
        return {
            product: null,
            prevProduct: null,
            nextProduct: null,
            relatedProducts: [],
            loaded: false
        };
    },
    computed: {
        ...mapGetters('demo', ['currentDemo'])
    },
    created: function() {
        this.getProduct();
    },
    methods: {
        getProduct: async function() {
            this.loaded = false;
            await Repository.get(
                `${baseUrl}/products/${this.$route.params.slug}`,
                {
                    params: { demo: this.currentDemo }
                }
            )
                .then(response => {
                    this.product = { ...response.data.product };
                    this.relatedProducts = [...response.data.relatedProducts];
                    this.prevProduct = response.data.prevProduct;
                    this.nextProduct = response.data.nextProduct;
                    this.loaded = true;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        }
    }
};
</script> -->
<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import QuantityInput from "~/components/elements/QuantityInput";
import { baseUrl } from "~/repositories/repository.js";

// Props passed to the component
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Reactive state
const state = reactive({
  baseUrl,
  variationGroup: [],
  selectableGroup: [],
  sizeArray: [],
  colorArray: [],
  selectedVariant: {
    color: null,
    colorName: null,
    price: null,
    size: null,
  },
  maxPrice: 0,
  minPrice: 99999,
  qty: 1,
  qty2: 1,
});

// Route information
const route = useRoute();

// Pinia stores
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const compareStore = useCompareStore();

// Computed properties
const isCartSticky = computed(() => route.path.includes("/product/default"));
const showClear = computed(
  () => state.selectedVariant.color || state.selectedVariant.size
);
const showVariationPrice = computed(
  () => state.selectedVariant.color && state.selectedVariant.size
);

// Lifecycle hook
onMounted(() => {
  let min = state.minPrice;
  let max = state.maxPrice;

  state.variationGroup = product.variants.reduce((acc, cur) => {
    cur.size.forEach((item) => {
      acc.push({
        color: cur.color,
        colorName: cur.color_name,
        size: item.name,
        price: cur.price,
      });
    });
    if (min > cur.price) min = cur.price;
    if (max < cur.price) max = cur.price;
    return acc;
  }, []);

  if (product.variants.length === 0) {
    min = product.sale_price || product.price;
    max = product.price;
  }

  state.minPrice = min;
  state.maxPrice = max;

  refreshSelectableGroup();
});

// Methods
const refreshSelectableGroup = () => {
  let tempArray = [...state.variationGroup];
  if (state.selectedVariant.color) {
    tempArray = state.variationGroup.filter(
      (cur) => state.selectedVariant.color === cur.color
    );
  }

  state.sizeArray = tempArray.reduce((acc, cur) => {
    if (!acc.some((item) => item.size === cur.size)) acc.push(cur);
    return acc;
  }, []);

  tempArray = [...state.variationGroup];
  if (state.selectedVariant.size) {
    tempArray = state.variationGroup.filter(
      (cur) => state.selectedVariant.size === cur.size
    );
  }

  state.colorArray = product.variants.map((cur) => {
    const disabled =
      tempArray.findIndex((item) => item.color === cur.color) === -1;
    return {
      color: cur.color,
      colorName: cur.color_name,
      price: cur.price,
      disabled,
    };
  });
};

const selectColor = (item) => {
  if (item.color === state.selectedVariant.color) {
    state.selectedVariant = {
      ...state.selectedVariant,
      color: null,
      colorName: null,
      price: item.price,
    };
  } else {
    state.selectedVariant = {
      ...state.selectedVariant,
      color: item.color,
      colorName: item.colorName,
      price: item.price,
    };
  }
  refreshSelectableGroup();
};

const selectSize = () => {
  if (state.selectedVariant.size === "null") {
    state.selectedVariant.size = null;
  }
  refreshSelectableGroup();
};

const changeQty = (current) => {
  state.qty = current;
};

const changeQty2 = (current) => {
  state.qty2 = current;
};

const clearSelection = () => {
  state.selectedVariant = {
    color: null,
    colorName: null,
    size: null,
  };
  refreshSelectableGroup();
};

const addCart = (index = 0) => {
  let newProduct = { ...product };
  if (product.variants.length > 0) {
    newProduct = {
      ...product,
      name: `${product.name} - ${state.selectedVariant.colorName}, ${state.selectedVariant.size}`,
      price: state.selectedVariant.price,
    };
  }
  cartStore.addToCart({
    product: newProduct,
    qty: index === 0 ? state.qty : state.qty2,
  });
};
</script>
