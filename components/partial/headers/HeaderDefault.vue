<template>
  <header class="header header-2 header-intro-clearance">
    <div class="header-top">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="header-left overflow-hidden mr-3 mr-sm-0">
          <div class="welcome-msg d-flex flex-nowrap">
            <p>Special collection already available.</p>
            <a href="#">&nbsp;Read more ...</a>
          </div>
        </div>

        <div class="header-right">
          <ul class="top-menu">
            <li>
              <a href="#">Links</a>
              <ul>
                <li>
                  <div class="header-dropdown">
                    <a href="#">USD</a>
                    <div class="header-menu">
                      <ul>
                        <li>
                          <a href="#">Eur</a>
                        </li>
                        <li>
                          <a href="#">Usd</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="header-dropdown">
                    <a href="#">English</a>
                    <div class="header-menu">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#signin-modal" @click.prevent="openSignInModal"
                    >Sign in / Sign up</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="header-middle">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="header-left">
          <button class="mobile-menu-toggler" @click="openMobileMenu">
            <span class="sr-only">Toggle mobile menu</span>
            <i class="icon-bars"></i>
          </button>

          <nuxt-link to="/" class="logo">
            <img
              v-lazy="'./images/logo.png'"
              class="bg-transparent"
              alt="Molla Logo"
              width="104"
              height="27"
            />
          </nuxt-link>
        </div>

        <div class="header-center">
          <header-search></header-search>
        </div>

        <div class="header-right">
          <div class="account">
            <nuxt-link to="/shop/dashboard" title="My account">
              <div class="icon">
                <i class="icon-user"></i>
              </div>
              <p>Account</p>
            </nuxt-link>
          </div>

          <wishlist-menu></wishlist-menu>

          <cart-menu></cart-menu>
        </div>
      </div>
    </div>

    <sticky-header>
      <div class="header-bottom sticky-header">
        <div :class="isFullwidth ? 'container-fluid' : 'container'">
          <div class="header-left">
            <div class="dropdown category-dropdown">
              <a
                href="javascript:;"
                class="dropdown-toggle"
                title="Browse Categories"
                >Browse Categories</a
              >

              <div class="dropdown-menu">
                <nav class="side-nav">
                  <ul class="menu-vertical sf-arrows">
                    <li
                      class="item-lead"
                      :class="{
                        active: $route.query.category == 'electronics',
                      }"
                    >
                      <nuxt-link
                        :to="'/shop/sidebar/3cols?category=electronics'"
                        >Electronics</nuxt-link
                      >
                    </li>
                    <li
                      class="item-lead"
                      :class="{ active: $route.query.category == 'gift-idea' }"
                    >
                      <nuxt-link :to="'/shop/sidebar/3cols?category=gift-idea'"
                        >Gift Ideas</nuxt-link
                      >
                    </li>
                    <li :class="{ active: $route.query.category == 'beds' }">
                      <nuxt-link :to="'/shop/sidebar/3cols?category=beds'"
                        >Beds</nuxt-link
                      >
                    </li>
                    <li
                      :class="{ active: $route.query.category == 'lighting' }"
                    >
                      <nuxt-link :to="'/shop/sidebar/3cols?category=lighting'"
                        >Lighting</nuxt-link
                      >
                    </li>
                    <li
                      :class="{
                        active:
                          $route.query.category == 'sofas-and-sleeper-sofas',
                      }"
                    >
                      <nuxt-link
                        :to="'/shop/sidebar/3cols?category=sofas-and-sleeper-sofas'"
                        >Sofas & Sleeper sofas</nuxt-link
                      >
                    </li>
                    <li :class="{ active: $route.query.category == 'storage' }">
                      <nuxt-link :to="'/shop/sidebar/3cols?category=storage'"
                        >Storage</nuxt-link
                      >
                    </li>
                    <li
                      :class="{
                        active:
                          $route.query.category == 'armchairs-and-chaises',
                      }"
                    >
                      <nuxt-link
                        :to="'/shop/sidebar/3cols?category=armchairs-and-chaises'"
                        >Armchairs & Chaises</nuxt-link
                      >
                    </li>
                    <li
                      :class="{ active: $route.query.category == 'decoration' }"
                    >
                      <nuxt-link :to="'/shop/sidebar/3cols?category=decoration'"
                        >Decoration</nuxt-link
                      >
                    </li>
                    <li
                      :class="{
                        active: $route.query.category == 'kitchen-cabinets',
                      }"
                    >
                      <nuxt-link
                        :to="'/shop/sidebar/3cols?category=kitchen-cabinets'"
                        >Kitchen Cabinets</nuxt-link
                      >
                    </li>
                    <li
                      :class="{
                        active: $route.query.category == 'coffee-and-tables',
                      }"
                    >
                      <nuxt-link
                        :to="'/shop/sidebar/3cols?category=coffee-and-tables'"
                        >Coffee & Tables</nuxt-link
                      >
                    </li>
                    <li
                      :class="{ active: $route.query.category == 'furniture' }"
                    >
                      <nuxt-link :to="'/shop/sidebar/3cols?category=furniture'"
                        >Outdoor Furniture</nuxt-link
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div class="header-center">
            <main-menu></main-menu>
          </div>

          <div class="header-right overflow-hidden">
            <i class="la la-lightbulb-o"></i>
            <p class="text-truncate">
              Clearance
              <span class="highlight">&nbsp;Up to 30% Off</span>
            </p>
          </div>
        </div>
      </div>
    </sticky-header>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import CartMenu from "~/components/partial/headers/shared/CartMenu.vue";
import WishlistMenu from "~/components/partial/headers/shared/WishlistMenu.vue";
import MainMenu from "~/components/partial/headers/shared/MainMenu.vue";
import HeaderSearch from "~/components/partial/headers/shared/HeaderSearch.vue";
import StickyHeader from "~/components/elements/StickyHeader.vue";

// State and Router
const isFullwidth = computed(() => {
  return useRouter().currentRoute.value.path.includes("fullwidth");
});

// Modal Function
const openSignInModal = () => {
  const modal = useModal();
  modal.show(
    () => import("~/components/elements/modals/SignInModal.vue"),
    {},
    { width: "575", height: "auto", adaptive: true }
  );
};

// Mobile Menu Function
const openMobileMenu = () => {
  document.querySelector("body").classList.add("mmenu-active");
};
</script>
