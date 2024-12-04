<template lang="html">
  <div>
    <div class="page-wrapper">
      <HeaderDefault />
      <!-- <nuxt /> -->
      <slot />

      <FooterDefault />

      <button
        id="scroll-top"
        ref="scrollTop"
        title="Back to Top"
        @click.prevent="scrollTop"
      >
        <i class="icon-arrow-up"></i>
      </button>
    </div>
    <div class="mobile-menu-overlay" @click="hideMobileMenu"></div>
    <mobile-menu></mobile-menu>
  </div>
</template>

<!-- <script>
// import HeaderDefault from "~/components/partial/headers/HeaderDefault";
// import FooterDefault from "./components/partial/footers/FooterDefault.vue";
import { isSafariBrowser, isEdgeBrowser } from "~/utilities/common";
// import HeaderDefault from "~/components/partial/headers/HeaderDefault.vue";

export default {
  components: {
    HeaderDefault,
    FooterDefault: () => import("~/components/partial/footers/FooterDefault"),
    MobileMenu: () => import("~/components/partial/home/MobileMenu"),
  },
  mounted: function () {
    let scrollTop = this.$refs.scrollTop;
    document.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset >= 400) {
          scrollTop.classList.add("show");
        } else {
          scrollTop.classList.remove("show");
        }
      },
      false
    );
  },
  methods: {
    scrollTop: function () {
      if (isSafariBrowser() || isEdgeBrowser()) {
        let pos = window.pageYOffset;
        let timerId = setInterval(() => {
          if (pos <= 0) clearInterval(timerId);
          window.scrollBy(0, -120);
          pos -= 120;
        }, 1);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    hideMobileMenu: function () {
      document.querySelector("body").classList.remove("mmenu-active");
    },
  },
};
</script> -->

<script setup>
import { ref, onMounted } from "vue";

import { isSafariBrowser, isEdgeBrowser } from "~/utilities/common";

import HeaderDefault from "~/components/partial/headers/HeaderDefault.vue";

const FooterDefault = defineAsyncComponent(() =>
  import("~/components/partial/footers/FooterDefault.vue")
);

const MobileMenu = defineAsyncComponent(() =>
  import("~/components/partial/home/MobileMenu.vue")
);

const scrollTop = ref(null);

const handleScroll = () => {
  if (window.pageYOffset >= 400) {
    scrollTop.value.classList.add("show");
  } else {
    scrollTop.value.classList.remove("show");
  }
};

const scrollToTop = () => {
  if (isSafariBrowser() || isEdgeBrowser()) {
    let pos = window.pageYOffset;

    const timerId = setInterval(() => {
      if (pos <= 0) clearInterval(timerId);

      window.scrollBy(0, -120);

      pos -= 120;
    }, 1);
  } else {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }
};

const hideMobileMenu = () => {
  document.querySelector("body").classList.remove("mmenu-active");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
