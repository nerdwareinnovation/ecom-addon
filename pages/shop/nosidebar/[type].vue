<template>
  <main class="main">
    <page-header :title="pageTitle" subtitle="Shop"></page-header>
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
      <div :class="containerClass">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="breadcrumb-item">
            <nuxt-link to="/shop/sidebar/list">Shop</nuxt-link>
          </li>
          <li class="breadcrumb-item active">{{ pageTitle }}</li>
          <li class="breadcrumb-item" v-if="$route.query.searchTerm">
            <span>Search - {{ $route.query.searchTerm }}</span>
          </li>
        </ol>
      </div>
    </nav>

    <div class="page-content">
      <div :class="containerClass">
        <div class="toolbox">
          <div class="toolbox-left">
            <a
              href="#"
              class="sidebar-toggler mr-0 mr-md-5"
              @click.prevent="showSidebar"
            >
              <i class="icon-bars"></i>Filters
            </a>
          </div>

          <div class="toolbox-center">
            <div class="toolbox-info">
              Showing
              <span>{{ products.length }} of {{ totalCount }}</span> Products
            </div>
          </div>
          <div class="toolbox-right">
            <div class="toolbox-sort">
              <label for="sortby">Sort by:</label>
              <div class="select-custom">
                <select
                  name="sortby"
                  id="sortby"
                  class="form-control"
                  @change.prevent="getProducts"
                  v-model="orderBy"
                >
                  <option value="default">Default</option>
                  <option value="featured">Most Popular</option>
                  <option value="rating">Most Rated</option>
                  <option value="new">Date</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <shop-list-three
          :products="products"
          :per-page="perPage"
          :loaded="loaded"
          :class="{ loaded: loaded }"
          class="skeleton-body skel-shop-products"
        ></shop-list-three>

        <div class="load-more-container text-center">
          <a
            href="#"
            class="btn btn-outline-darker btn-load-more"
            @click.prevent="loadMore"
            v-if="loadMoreLoading || hasMore"
          >
            More Products
            <i
              class="icon-refresh"
              :class="{ 'load-more-rotating': loadMoreLoading }"
            ></i>
          </a>
        </div>
        <div class="sidebar-filter-overlay" @click="hideSidebar"></div>
        <shop-sidebar-one :is-sidebar="true"></shop-sidebar-one>
      </div>
    </div>
  </main>
</template>
<!-- <script>
import { mapGetters } from "vuex";

import PageHeader from "~/components/elements/PageHeader";
import ShopListThree from "~/components/partial/shop/list/ShopListThree";
import ShopSidebarOne from "~/components/partial/shop/sidebar/ShopSidebarOne";

import Repository, { baseUrl } from "~/repositories/repository.js";
import { scrollToPageContent } from "~/utilities/common";

export default {
  components: {
    PageHeader,
    ShopListThree,
    ShopSidebarOne,
  },
  data: function () {
    return {
      products: [],
      perPage: 8,
      type: "list",
      totalCount: 0,
      orderBy: "default",
      isSidebar: true,
      loaded: false,
      loadMoreLoading: false,
    };
  },
  computed: {
    ...mapGetters("demo", ["currentDemo"]),
    pageTitle: function () {
      if (this.$route.params.type == "boxed") return "Boxed No Sidebar";
      else return "Fullwidth No Sidebar";
    },
    containerClass: function () {
      if (this.$route.params.type == "fullwidth") return "container-fluid";
      else return "container";
    },
    hasMore: function () {
      return this.perPage <= this.totalCount;
    },
  },
  watch: {
    $route: function () {
      this.getProducts(true);
    },
  },
  created: function () {
    this.getProducts();
  },
  methods: {
    getProducts: async function (samePage = false, loadMore = false) {
      if (!loadMore) this.loaded = false;
      await Repository.get(`${baseUrl}/shop`, {
        params: {
          ...this.$route.query,
          orderBy: this.orderBy,
          perPage: this.perPage,
          demo: this.currentDemo,
        },
      })
        .then((response) => {
          this.products = response.data.products;
          this.totalCount = response.data.totalCount;
          this.loaded = true;
          if (samePage) {
            scrollToPageContent();
          }
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    },
    toggleSidebar: function () {
      if (
        document
          .querySelector("body")
          .classList.contains("sidebar-filter-active")
      ) {
        document
          .querySelector("body")
          .classList.remove("sidebar-filter-active");
      } else {
        document.querySelector("body").classList.add("sidebar-filter-active");
      }
    },

    showSidebar: function () {
      document.querySelector("body").classList.add("sidebar-filter-active");
    },

    hideSidebar: function () {
      document.querySelector("body").classList.remove("sidebar-filter-active");
    },

    loadMore: function () {
      if (this.perPage < this.totalCount) {
        this.perPage += 4;
        this.loadMoreLoading = true;
        setTimeout(() => {
          this.getProducts(false, true);
          this.loadMoreLoading = false;
        }, 400);
      }
    },
  },
};
</script> -->

<script setup>
import PageHeader from "~/components/elements/PageHeader";
import ShopListThree from "~/components/partial/shop/list/ShopListThree";
import ShopSidebarOne from "~/components/partial/shop/sidebar/ShopSidebarOne";

import Repository, { baseUrl } from "~/repositories/repository.js";
import { scrollToPageContent } from "~/utilities/common";

const products = ref([]);
const perPage = ref(8);
const type = ref("list");
const totalCount = ref(0);
const orderBy = ref("default");
const isSidebar = ref(false);
const laoded = ref(false);
const loadMoreLoading = ref(false);

const demoStore = useDemoStore();
const route = useRoute();
const currentDemo = computed(() => demoStore.currentDemo);
const pageTitle = computed(() => {
  if (this.$route.params.type == "boxed") return "Boxed No Sidebar";
  else return "Fullwidth No Sidebar";
});
const containerClass = computed(() => {
  if (this.$route.params.type == "fullwidth") return "container-fluid";
  else return "container";
});
const hasMore = computed(() => {
  return this.perPage <= this.totalCount;
});
watch(
  route,
  () => {
    getProducts(true);
  },
  { immediate: true }
);
onMounted(() => {
  getProdcuts();
});

const getProdcuts = async (samePage = false, loadMore = false) => {
  if (!loadMore) this.loaded = false;
  await Repository.get(`${baseUrl}/shop`, {
    params: {
      ...route.query,
      orderBy: orderBy.value,
      perPage: perPage.value,
      demo: currentDemo.value,
    },
  })
    .then((response) => {
      products.value = response.data.products;
      totalCount.value = response.data.totalCount;
      loaded.value = true;
      if (samePage) {
        scrollToPageContent();
      }
    })
    .catch((error) => ({ error: JSON.stringify(error) }));
};
const toggleSidebar = () => {
  if (
    document.querySelector("body").classList.contains("sidebar-filter-active")
  ) {
    document.querySelector("body").classList.remove("sidebar-filter-active");
  } else {
    document.querySelector("body").classList.add("sidebar-filter-active");
  }
};
const showSidebar = () => {
  document.querySelector("body").classList.add("sidebar-filter-active");
};
const hideSidebar = () => {
  document.querySelector("body").classList.remove("sidebar-filter-active");
};
const loadMore = () => {
  if (perPage.value < totalCount.value) {
    perPage.value += 4;
    loadMoreLoading.value = true;
    setTimeout(() => {
      getProducts(false, true);
      loadMoreLoading.value = false;
    }, 400);
  }
};
</script>
