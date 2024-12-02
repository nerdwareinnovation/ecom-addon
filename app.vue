<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <HeaderDefault /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <slot > -->
    <!-- <FooterDefault /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
import "../static/vendor/line-awesome/css/line-awesome.min.css";
import HeaderDefault from "~/components/partial/headers/HeaderDefault.vue";

// import "node_modules/swiper/dist/css/swiper.css";

import "../static/css/fonts-molla.min.css";

import "../static/css/bootstrap.min.css";

import "../assets/scss/style.scss";
// import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FooterDefault from "./components/partial/footers/FooterDefault.vue";
</script>
