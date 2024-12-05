<template>
  <div class="sidebar-shop" :class="isSidebar ? 'sidebar-filter' : 'sidebar'">
    <div :class="{ 'sidebar-filter-wrapper': isSidebar }">
      <div class="widget widget-clean">
        <label>Filters:</label>
        <a href="#" class="sidebar-filter-clear" @click.prevent="cleanAll"
          >Clean All</a
        >
      </div>

      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a
            href="#widget-1"
            :class="{ collapsed: !toggleStates[0] }"
            @click.prevent="toggleSlide(0)"
            >Category</a
          >
        </h3>

        <Vue3SlideUpDown v-model="toggleStates[0]" class="show" :duration="200">
          <div class="widget-body pt-0">
            <div class="filter-items filter-items-count">
              <div
                class="filter-item"
                v-for="(category, index) in filterData.categories"
                :key="index"
              >
                <nuxt-link
                  :to="{
                    path: $route.path,
                    query: { category: category.slug },
                  }"
                  :class="{ active: categorySelected(category) }"
                  >{{ category.name }}</nuxt-link
                >
                <span class="item-count">{{ category.count }}</span>
              </div>
            </div>
          </div>
        </Vue3SlideUpDown>
      </div>

      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a
            href="#widget-2"
            :class="{ collapsed: !toggleStates[1] }"
            @click.prevent="toggleSlide(1)"
            >Size</a
          >
        </h3>

        <Vue3SlideUpDown v-model="toggleStates[1]" class="show" :duration="200">
          <div class="widget-body pt-0">
            <div class="filter-items">
              <div
                class="filter-item"
                v-for="(item, index) in filterData.sizes"
                :key="index"
              >
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :id="'size-' + index"
                    @click="setSizeFilter(item)"
                    :checked="sizeChecked(item)"
                  />
                  <label class="custom-control-label" :for="'size-' + index">{{
                    item.slug
                  }}</label>
                </div>
              </div>
            </div>
          </div>
        </Vue3SlideUpDown>
      </div>

      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a
            href="#widget-3"
            :class="{ collapsed: !toggleStates[2] }"
            @click.prevent="toggleSlide(2)"
            >Colour</a
          >
        </h3>

        <Vue3SlideUpDown v-model="toggleStates[2]" class="show" :duration="200">
          <div class="widget-body pt-0">
            <div class="filter-colors">
              <nuxt-link
                :to="getColorUrl(item)"
                :style="{ 'background-color': item.color }"
                v-for="(item, index) in filterData.colors"
                :key="index"
                :class="{ selected: colorSelected(item) }"
              >
                <span class="sr-only">{{ item.color_name }}</span>
              </nuxt-link>
            </div>
          </div>
        </Vue3SlideUpDown>
      </div>

      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a
            href="#widget-4"
            :class="{ collapsed: !toggleStates[3] }"
            @click.prevent="toggleSlide(3)"
            >Brand</a
          >
        </h3>

        <Vue3SlideUpDown v-model="toggleStates[3]" class="show" :duration="200">
          <div class="widget-body pt-0">
            <div class="filter-items">
              <div
                class="filter-item"
                v-for="(item, index) in filterData.brands"
                :key="index"
              >
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :id="'brand-' + index"
                    @click="setBrandFilter(item)"
                    :checked="brandChecked(item)"
                  />
                  <label class="custom-control-label" :for="'brand-' + index">{{
                    item.brand
                  }}</label>
                </div>
              </div>
            </div>
          </div>
        </Vue3SlideUpDown>
      </div>

      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a
            href="#widget-5"
            :class="{ collapsed: !toggleStates[4] }"
            @click.prevent="toggleSlide(4)"
            >Price</a
          >
        </h3>

        <Vue3SlideUpDown v-model="toggleStates[4]" class="show" :duration="200">
          <div class="widget-body pt-0">
            <div class="filter-price">
              <div class="filter-price-text d-flex justify-content-between">
                <span>
                  Price Range:
                  <span id="filter-price-range">{{ priceRangeText }}</span>
                </span>
                <nuxt-link :to="priceFilterRoute" class="pr-2"
                  >Filter</nuxt-link
                >
              </div>

              <vue-nouislider
                :config="priceSliderConfig"
                :values="priceValues"
                id="price-slider"
                v-if="loaded"
              ></vue-nouislider>
            </div>
          </div>
        </Vue3SlideUpDown>
        <!-- <ClientOnly> -->
        <!-- <vue-slider
            v-model="priceValues"
            :min="minPrice"
            :max="maxPrice"
            :step="step"
            :range="true"
            v-if="loaded"
          ></vue-slider> -->
        <!-- <Nouislider
          v-model="priceRange"
          :range="{ min: minPrice, max: maxPrice }"
          :step="step"
          :connect="true"
          :tooltips="[true, true]"
        /> -->
        <!-- </ClientOnly> -->
      </div>
    </div>
  </div>
</template>

<!-- <script>
// import { VueSlideToggle } from 'Vue3SlideUpDown';
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import { shopData } from "~/utilities/data";

export default {
  components: {
    Vue3SlideUpDown,
  },
  props: {
    isSidebar: Boolean,
  },
  data: function () {
    return {
      loaded: true,
      priceValues: [0, 1000],
      priceSliderConfig: {
        connect: true,
        step: 50,
        margin: 100,
        range: {
          min: 0,
          max: 1000,
        },
      },
      toggleStates: [true, true, true, true, true],
      filterData: shopData,
    };
  },
  computed: {
    priceRangeText: function () {
      return (
        "$" +
        parseInt(this.priceValues[0]) +
        " — $" +
        parseInt(this.priceValues[1])
      );
    },
    priceFilterRoute: function () {
      let query = {};
      if (this.$route.query.page) {
        for (let key in this.$route.query) {
          if (key !== "page") {
            query[key] = this.$route.query[key];
          }
        }
      } else {
        query = { ...this.$route.query };
      }

      return {
        path: this.$route.path,
        query: {
          ...query,
          minPrice: this.priceValues[0],
          maxPrice: this.priceValues[1],
        },
      };
    },
  },
  created: function () {
    document.querySelector("body").classList.remove("sidebar-filter-active");
    if (this.$route.query.minPrice && this.$route.query.maxPrice) {
      this.loaded = false;

      this.priceValues = [
        this.$route.query.minPrice,
        this.$route.query.maxPrice,
      ];

      this.$nextTick(function () {
        this.loaded = true;
      });
    } else {
      this.loaded = false;
      this.$nextTick(function () {
        this.loaded = true;
      });
    }
  },
  methods: {
    cleanAll: function () {
      this.loaded = false;
      this.priceValues = [0, 1000];
      this.$nextTick(function () {
        this.orderBy = "default";
        this.loaded = true;
        this.$router.push(this.$route.path);
      });
    },
    toggleSlide: function (index) {
      this.toggleStates = this.toggleStates.reduce((acc, cur, id) => {
        if (id == index) return [...acc, !cur];
        else return [...acc, cur];
      }, []);
    },
    sizeChecked: function (item) {
      return (
        this.$route.query.size &&
        this.$route.query.size.split(",").includes(item.slug)
      );
    },
    brandChecked: function (item) {
      return (
        this.$route.query.brand &&
        this.$route.query.brand.split(",").includes(item.slug)
      );
    },
    categorySelected: function (item) {
      return (
        this.$route.query.category && this.$route.query.category == item.slug
      );
    },
    colorSelected: function (item) {
      return (
        this.$route.query.color &&
        this.$route.query.color.split(",").includes(item.color_name)
      );
    },
    setSizeFilter: function (item) {
      let query = {};
      if (this.$route.query.page) {
        for (let key in this.$route.query) {
          if (key !== "page") {
            query[key] = this.$route.query[key];
          }
        }
      } else {
        query = { ...this.$route.query };
      }

      if (!this.$route.query.size) {
        query = {
          ...query,
          size: item.slug,
        };
      } else if (this.$route.query.size.split(",").includes(item.slug)) {
        query = {
          ...query,
          size: query.size
            .split(",")
            .filter((slug) => slug !== item.slug)
            .join(","),
        };
      } else {
        query = {
          ...query,
          size: [...query.size.split(","), item.slug].join(","),
        };
      }

      this.$router.push({
        path: this.$route.path,
        query: query,
      });
    },
    setBrandFilter: function (item) {
      let query = {};
      if (this.$route.query.page) {
        for (let key in this.$route.query) {
          if (key !== "page") {
            query[key] = this.$route.query[key];
          }
        }
      } else {
        query = { ...this.$route.query };
      }

      if (!this.$route.query.brand) {
        query = {
          ...query,
          brand: item.slug,
        };
      } else if (this.$route.query.brand.split(",").includes(item.slug)) {
        query = {
          ...query,
          brand: query.brand
            .split(",")
            .filter((slug) => slug !== item.slug)
            .join(","),
        };
      } else {
        query = {
          ...query,
          brand: [...query.brand.split(","), item.slug].join(","),
        };
      }

      this.$router.push({
        path: this.$route.path,
        query: query,
      });
    },
    getColorUrl: function (item) {
      let query = {};

      if (!this.$route.query.color) {
        query = {
          ...this.$route.query,
          color: item.color_name,
        };
      } else if (this.$route.query.color.split(",").includes(item.color_name)) {
        query = {
          ...this.$route.query,
          color: this.$route.query.color
            .split(",")
            .filter((slug) => slug !== item.color_name)
            .join(","),
        };
      } else {
        query = {
          ...this.$route.query,
          color: [...this.$route.query.color.split(","), item.color_name].join(
            ","
          ),
        };
      }

      let temp = {};
      if (query.page) {
        for (let key in query) {
          if (key !== "page") {
            temp[key] = query[key];
          }
        }
      } else {
        temp = { ...query };
      }

      return {
        path: this.$route.path,
        query: temp,
      };
    },
  },
};
</script> -->

<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import { shopData } from "~/utilities/data";
// import Nouislider from "vue3-nouislider";
// import 'nouislider/dist/nouislider.css';
// import VueSlider from "vue-slider-component";
// import "vue-slider-component/theme/default.css";
// Props
defineProps({
  isSidebar: Boolean,
});

// Reactive data and refs
const value = ref(0);
const priceValues = ref([0, 1000]);
const toggleStates = ref([true, true, true, true, true]);
const loaded = ref(true);
const minPrice = ref(0);
const maxPrice = ref(1000);
const step = ref(50);
const priceSliderConfig = reactive({
  connect: true,
  step: 50,
  margin: 100,
  range: {
    min: 0,
    max: 1000,
  },
});
const filterData = shopData;

// Router and route
const router = useRouter();
const route = useRoute();

// Computed properties
const priceRangeText = computed(() => {
  return `$${parseInt(priceValues.value[0])} — $${parseInt(
    priceValues.value[1]
  )}`;
});

const priceFilterRoute = computed(() => {
  let query = { ...route.query };
  delete query.page; // Remove "page" query param if it exists
  return {
    path: route.path,
    query: {
      ...query,
      minPrice: priceValues.value[0],
      maxPrice: priceValues.value[1],
    },
  };
});

// Lifecycle hook
onMounted(() => {
  document.querySelector("body")?.classList.remove("sidebar-filter-active");
  if (route.query.minPrice && route.query.maxPrice) {
    loaded.value = false;
    priceValues.value = [
      Number(route.query.minPrice),
      Number(route.query.maxPrice),
    ];
    nextTick(() => {
      loaded.value = true;
    });
  } else {
    loaded.value = false;
    nextTick(() => {
      loaded.value = true;
    });
  }
});

// Methods
const cleanAll = () => {
  loaded.value = false;
  priceValues.value = [0, 1000];
  nextTick(() => {
    loaded.value = true;
    router.push({ path: route.path });
  });
};

const toggleSlide = (index) => {
  toggleStates.value = toggleStates.value.map((state, id) =>
    id === index ? !state : state
  );
};

const sizeChecked = (item) => {
  return route.query.size?.split(",").includes(item.slug) ?? false;
};

const brandChecked = (item) => {
  return route.query.brand?.split(",").includes(item.slug) ?? false;
};

const categorySelected = (item) => {
  return route.query.category === item.slug;
};

const colorSelected = (item) => {
  return route.query.color?.split(",").includes(item.color_name) ?? false;
};

const setSizeFilter = (item) => {
  const query = { ...route.query };
  if (!query.size) {
    query.size = item.slug;
  } else {
    const sizes = query.size.split(",");
    if (sizes.includes(item.slug)) {
      query.size = sizes.filter((slug) => slug !== item.slug).join(",");
    } else {
      query.size = [...sizes, item.slug].join(",");
    }
  }
  router.push({ path: route.path, query });
};

const setBrandFilter = (item) => {
  const query = { ...route.query };
  if (!query.brand) {
    query.brand = item.slug;
  } else {
    const brands = query.brand.split(",");
    if (brands.includes(item.slug)) {
      query.brand = brands.filter((slug) => slug !== item.slug).join(",");
    } else {
      query.brand = [...brands, item.slug].join(",");
    }
  }
  router.push({ path: route.path, query });
};

const getColorUrl = (item) => {
  const query = { ...route.query };
  if (!query.color) {
    query.color = item.color_name;
  } else {
    const colors = query.color.split(",");
    if (colors.includes(item.color_name)) {
      query.color = colors.filter((slug) => slug !== item.color_name).join(",");
    } else {
      query.color = [...colors, item.color_name].join(",");
    }
  }
  delete query.page; // Remove "page" param
  return { path: route.path, query };
};
</script>
