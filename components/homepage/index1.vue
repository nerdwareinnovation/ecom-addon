<template>
  <div class="main home-page">
    <div class="intro-slider-container">
      <div class="swiper-carousel swiper-1">
        <div v-swiper:swiper1="carouselSetting1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="intro-slide"
                v-lazy:background-image="'/images/home/sliders/slide-1.jpg'"
              >
                <div class="container intro-content">
                  <h3 class="intro-subtitle">Bedroom Furniture</h3>
                  <h1 class="intro-title">
                    Find Comfort
                    <br />That Suits You.
                  </h1>

                  <nuxt-link to="/shop/sidebar/list" class="btn btn-primary">
                    <span>Shop Now</span>
                    <i class="icon-long-arrow-right"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="intro-slide"
                v-lazy:background-image="'/images/home/sliders/slide-2.jpg'"
              >
                <div class="container intro-content">
                  <h3 class="intro-subtitle">Deals and Promotions</h3>
                  <h1 class="intro-title">
                    Ypperlig
                    <br />Coffee Table
                    <br />
                    <span class="text-primary"> <sup>$</sup>49,99 </span>
                  </h1>

                  <nuxt-link to="/shop/sidebar/list" class="btn btn-primary">
                    <span>Shop Now</span>
                    <i class="icon-long-arrow-right"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="intro-slide"
                v-lazy:background-image="'/images/home/sliders/slide-3.jpg'"
              >
                <div class="container intro-content">
                  <h3 class="intro-subtitle">Living Room</h3>
                  <h1 class="intro-title">
                    Make Your Living Room
                    <br />Work For You.
                    <br />
                    <span class="text-primary">
                      <sup class="text-white font-weight-light">from</sup>
                      <sup>$</sup>9,99
                    </span>
                  </h1>

                  <nuxt-link to="/shop/sidebar/list" class="btn btn-primary">
                    <span>Shop Now</span>
                    <i class="icon-long-arrow-right"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-dots swiper-dots-inner"></div>
      </div>
    </div>
    <div class="swiper-carousel brands-border swiper-2 mb-3 mb-lg-5">
      <div v-swiper:swiper2="carouselSetting2">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(brand, index) in homeData.brands"
            :key="index"
          >
            <a href="javascript:;" class="brand">
              <img
                v-lazy="brand.image"
                class="bg-white"
                alt="Brand"
                :width="brand.width"
                :height="brand.height"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="banner-group">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-5">
            <div
              class="banner banner-large banner-overlay banner-overlay-light banner-1"
            >
              <a href="#">
                <img
                  v-lazy="'/images/home/banners/banner-1.jpg'"
                  width="470"
                  height="510"
                  alt="Banner"
                />
              </a>

              <div class="banner-content banner-content-top">
                <h4 class="banner-subtitle">Clearence</h4>

                <h3 class="banner-title">Coffee Tables</h3>

                <div class="banner-text">from $19.99</div>

                <a href="#" class="btn btn-outline-gray banner-link">
                  Shop Now
                  <i class="icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="banner banner-overlay banner-2">
              <a href="#">
                <img
                  v-lazy="'/images/home/banners/banner-2.jpg'"
                  width="290"
                  height="510"
                  alt="Banner"
                />
              </a>

              <div class="banner-content banner-content-bottom">
                <h4 class="banner-subtitle text-grey">On Sale</h4>

                <h3 class="banner-title text-white">
                  Amazing
                  <br />Armchairs
                </h3>

                <div class="banner-text text-white">from $39.99</div>

                <nuxt-link
                  to="/shop/sidebar/3cols"
                  class="btn btn-outline-white banner-link"
                >
                  Discover Now
                  <i class="icon-long-arrow-right"></i>
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-sm-6">
                <div class="banner banner-overlay banner-3">
                  <a href="#">
                    <img
                      v-lazy="'/images/home/banners/banner-3.jpg'"
                      width="370"
                      height="245"
                      alt="Banner"
                    />
                  </a>

                  <div class="banner-content banner-content-top">
                    <h4 class="banner-subtitle text-grey">New Arrivals</h4>

                    <h3 class="banner-title text-white">
                      Storage
                      <br />Boxes & Baskets
                    </h3>

                    <nuxt-link
                      to="/shop/sidebar/3cols"
                      class="btn btn-outline-white banner-link"
                    >
                      Discover Now
                      <i class="icon-long-arrow-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 col-md-6 col-sm-6">
                <div
                  class="banner banner-overlay banner-overlay-light banner-4"
                >
                  <a href="#">
                    <img
                      v-lazy="'/images/home/banners/banner-4.jpg'"
                      width="370"
                      height="245"
                      alt="Banner"
                    />
                  </a>

                  <div class="banner-content banner-content-top">
                    <h4 class="banner-subtitle">On Sale</h4>

                    <h3 class="banner-title">Lamps Offer</h3>

                    <div class="banner-text">up to 30% off</div>

                    <nuxt-link
                      to="/shop/sidebar/list"
                      class="btn btn-outline-gray banner-link"
                    >
                      Shop Now
                      <i class="icon-long-arrow-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <special-collection :products="products" v-if="loaded"></special-collection>

    <div class="bg-light deal-container pt-5 pb-3 mb-6">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="deal">
              <div class="deal-content">
                <h4>Limited Quantities</h4>
                <h2>Deal of the Day</h2>

                <h3 class="product-title">
                  <nuxt-link to="/shop/sidebar/list">POÄNG</nuxt-link>
                </h3>

                <div class="product-price">
                  <span class="new-price">$149.00</span>
                  <span class="old-price">Was $240.00</span>
                </div>

                <count-down
                  wrap="deal-countdown"
                  until="+10h"
                  format="HMS"
                  :relative="true"
                  :labelsShort="true"
                ></count-down>

                <nuxt-link to="/shop/sidebar/list" class="btn btn-primary">
                  <span>Shop Now</span>
                  <i class="icon-long-arrow-right"></i>
                </nuxt-link>
              </div>

              <div class="deal-image">
                <nuxt-link
                  to="/shop/sidebar/list"
                  class="justify-content-center d-flex"
                >
                  <img
                    v-lazy="'/images/home/deal/product-1.jpg'"
                    width="440"
                    height="460"
                    alt="image"
                  />
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div
              class="banner banner-overlay banner-overlay-light text-center d-none d-lg-block"
            >
              <nuxt-link to="/shop/sidebar/list">
                <img
                  v-lazy="'/images/home/banners/banner-5.jpg'"
                  alt="Banner"
                  width="280"
                  height="500"
                />
              </nuxt-link>

              <div
                class="banner-content banner-content-top banner-content-center"
              >
                <h4 class="banner-subtitle">The Best Choice</h4>
                <h3 class="banner-title">AGEN</h3>
                <div class="banner-text text-primary">$49.99</div>
                <nuxt-link
                  to="/shop/sidebar/list"
                  class="btn btn-outline-gray banner-link"
                >
                  Shop Now
                  <i class="icon-long-arrow-right"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <top-collection :products="topProducts" v-if="loaded"></top-collection>

    <blog-section :blogs="blogs" v-if="loaded"></blog-section>
    <div class="icon-boxes-container">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <i class="icon-rocket"></i>
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Free Shipping</h3>

                <p>orders $50 or more</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <i class="icon-rotate-left"></i>
              </span>

              <div class="icon-box-content">
                <h3 class="icon-box-title">Free Returns</h3>

                <p>within 30 days</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <i class="icon-info-circle"></i>
              </span>

              <div class="icon-box-content">
                <h3 class="icon-box-title">Get 20% Off 1 Item</h3>

                <p>When you sign up</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <i class="icon-life-ring"></i>
              </span>

              <div class="icon-box-content">
                <h3 class="icon-box-title">We Support</h3>

                <p>24/7 amazing services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer-newsletter bg-image"
      v-lazy:background-image="'/images/backgrounds/bg-2.jpg'"
    >
      <div class="container">
        <div class="heading text-center">
          <h3 class="title">Get The Latest Deals</h3>

          <p class="title-desc">
            and receive
            <span>$20 coupon</span> for first shopping
          </p>
        </div>

        <div class="row">
          <div
            class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
          >
            <form action="#">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your Email Address"
                  aria-label="Email Adress"
                  aria-describedby="newsletter-btn"
                  required
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    id="newsletter-btn"
                  >
                    <span>Subscribe</span>
                    <i class="icon-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from "~/components/elements/CountDown";
import SpecialCollection from "~/components/partial/home/SpecialCollection";
import TopCollection from "~/components/partial/home/TopCollection";
import BlogSection from "~/components/partial/home/BlogSection";
import NewsletterModal from "~/components/elements/modals/NewsletterModal";
import { useDemoStore } from "~/store/demo";
import Repository, { baseUrl } from "~/repositories/repository.js";
import { attrFilter } from "~/utilities/common";
import {
  carouselSettingSingle,
  carouselSettingDefault,
} from "~/utilities/carousel";
import { homeData } from "~/utilities/data";
import { useNuxtApp } from "#app";

export default {
  components: {
    CountDown,
    BlogSection,
    TopCollection,
    SpecialCollection,
  },
  data() {
    return {
      loaded: false,
      products: [],
      topProducts: [],
      blogs: [],
      carouselSetting1: {
        ...carouselSettingSingle,
        pagination: {
          el: ".swiper-1 .swiper-dots",
          clickable: true,
        },
      },
      carouselSetting2: {
        ...carouselSettingDefault,
        slidesPerView: 7,
        spaceBetween: 0,
        breakpoints: {
          992: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 5,
          },
          576: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
        },
      },
      homeData: homeData,
    };
  },
  setup() {
    // Access Pinia stores
    const wishlistStore = useWishlistStore();
    const demoStore = useDemoStore();

    const { $api } = useNuxtApp();
    // Access newsletter visibility state from the demo store
    const newsletterShow = computed(() => demoStore.newsletterShow);

    return {
      wishlistStore,
      demoStore,
      newsletterShow,
    };
  },
  created() {
    this.getProducts();
  },
  mounted() {
    if (this.newsletterShow) {
      setTimeout(() => {
        if (this.$route.path === "/" && this.newsletterShow) {
          this.$modal.show(
            NewsletterModal,
            {},
            { width: "970", height: "auto", adaptive: true }
          );
        }
      }, 8000);
    }
  },
  methods: {
    async getProducts() {
      this.loaded = false;
      try {
        const response = await $api.get(`${baseUrl}/demo1`);
        this.products = response.data.products;
        this.topProducts = attrFilter(this.products, "top");
        this.blogs = response.data.blogs;
        this.loaded = true;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>
