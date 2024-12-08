<template>
  <div class="main home-page">
    <div class="intro-section bg-lighter pt-5 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <!-- <div
              class="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0"
            >
              <div class="intro-slider intro-slider-1 swiper-carousel swiper-1">
                <div v-swiper:swiper1="carouselSetting1">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="intro-slide">
                        <figure class="slide-image mb-0">
                          <picture>
                            <source
                              media="(max-width: 480px)"
                              srcset="./images/home/sliders/slide-1-480w.jpg"
                            />
                            <img
                              v-lazy="'/images/home/sliders/slide-1.jpg'"
                              alt="Banner"
                            />
                          </picture>
                        </figure>

                        <div class="intro-content">
                          <h3 class="intro-subtitle">Topsale Collection</h3>

                          <h1 class="intro-title">
                            Living Room
                            <br />Furniture
                          </h1>

                          <nuxt-link
                            to="/shop/sidebar/list"
                            class="btn btn-outline-white"
                          >
                            <span>SHOP NOW</span>
                            <i class="icon-long-arrow-right"></i>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="intro-slide">
                        <figure class="slide-image mb-0">
                          <picture>
                            <source
                              media="(max-width: 480px)"
                              srcset="./images/home/sliders/slide-2-480w.jpg"
                            />
                            <img
                              v-lazy="'/images/home/sliders/slide-2.jpg'"
                              alt="Banner"
                            />
                          </picture>
                        </figure>

                        <div class="intro-content">
                          <h3 class="intro-subtitle">News and Inspiration</h3>

                          <h1 class="intro-title">New Arrivals</h1>

                          <nuxt-link
                            to="/shop/sidebar/list"
                            class="btn btn-outline-white"
                          >
                            <span>SHOP NOW</span>
                            <i class="icon-long-arrow-right"></i>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="intro-slide">
                        <figure class="slide-image mb-0">
                          <picture>
                            <source
                              media="(max-width: 480px)"
                              srcset="./images/home/sliders/slide-3-480w.jpg"
                            />
                            <img
                              v-lazy="'/images/home/sliders/slide-3.jpg'"
                              alt="Banner"
                            />
                          </picture>
                        </figure>

                        <div class="intro-content">
                          <h3 class="intro-subtitle">Outdoor Furniture</h3>

                          <h1 class="intro-title">
                            Outdoor Dining
                            <br />Furniture
                          </h1>

                          <nuxt-link
                            to="/shop/sidebar/list"
                            class="btn btn-outline-white"
                          >
                            <span>SHOP NOW</span>
                            <i class="icon-long-arrow-right"></i>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-dots swiper-dots-inner"></div>
              </div>
            </div> -->
            <swiper-container ref="containerRef" :pagination="true">
              <swiper-slide>
                <div class="intro-slide">
                  <figure class="slide-image mb-0">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="./static/images/home/sliders/slide-1-480w.jpg"
                      />
                      <img
                        v-lazy="'/images/home/sliders/slide-1.jpg'"
                        alt="Banner"
                      />
                    </picture>
                  </figure>

                  <div class="intro-content">
                    <h3 class="intro-subtitle">Topsale Collection</h3>

                    <h1 class="intro-title">
                      Living Room
                      <br />Furniture
                    </h1>

                    <nuxt-link
                      to="/shop/sidebar/list"
                      class="btn btn-outline-white"
                    >
                      <span>SHOP NOW</span>
                      <i class="icon-long-arrow-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="intro-slide">
                  <figure class="slide-image mb-0">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="./images/home/sliders/slide-2-480w.jpg"
                      />
                      <img
                        v-lazy="'/images/home/sliders/slide-2.jpg'"
                        alt="Banner"
                      />
                    </picture>
                  </figure>

                  <div class="intro-content">
                    <h3 class="intro-subtitle">News and Inspiration</h3>

                    <h1 class="intro-title">New Arrivals</h1>

                    <nuxt-link
                      to="/shop/sidebar/list"
                      class="btn btn-outline-white"
                    >
                      <span>SHOP NOW</span>
                      <i class="icon-long-arrow-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="intro-slide">
                  <figure class="slide-image mb-0">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="./images/home/sliders/slide-3-480w.jpg"
                      />
                      <img
                        v-lazy="'/images/home/sliders/slide-3.jpg'"
                        alt="Banner"
                      />
                    </picture>
                  </figure>

                  <div class="intro-content">
                    <h3 class="intro-subtitle">Outdoor Furniture</h3>

                    <h1 class="intro-title">
                      Outdoor Dining
                      <br />Furniture
                    </h1>

                    <nuxt-link
                      to="/shop/sidebar/list"
                      class="btn btn-outline-white"
                    >
                      <span>SHOP NOW</span>
                      <i class="icon-long-arrow-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>

          <div class="col-lg-4">
            <div class="intro-banners">
              <div class="row row-sm">
                <div class="col-md-6 col-lg-12">
                  <div class="banner banner-display">
                    <a href="#">
                      <img
                        src="./images/home/banners/intro/banner-1.jpg"
                        width="370"
                        height="205"
                        alt="Banner"
                      />
                    </a>

                    <div class="banner-content">
                      <h4 class="banner-subtitle text-darkwhite">
                        <a href="#">Clearence</a>
                      </h4>

                      <h3 class="banner-title text-white">
                        <a href="#">
                          Chairs & Chaises
                          <br />Up to 40% off
                        </a>
                      </h3>

                      <nuxt-link
                        to="/shop/sidebar/3cols"
                        class="btn btn-outline-white banner-link"
                      >
                        Shop Now
                        <i class="icon-long-arrow-right"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-12">
                  <div class="banner banner-display mb-0">
                    <a href="#">
                      <img
                        src="./images/home/banners/intro/banner-2.jpg"
                        width="375"
                        height="205"
                        alt="Banner"
                      />
                    </a>

                    <div class="banner-content">
                      <h4 class="banner-subtitle text-darkwhite">
                        <a href="#">New in</a>
                      </h4>

                      <h3 class="banner-title text-white">
                        <a href="#">
                          Best Lighting
                          <br />Collection
                        </a>
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
              </div>
            </div>
          </div>
        </div>

        <div class="mb-6"></div>

        <!-- <div class="swiper-carousel brands-carousel swiper-2">
          <div v-swiper:swiper2="carouselSetting2">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(brand, index) in homeData.brands"
                :key="index"
              >
                <a href="#" class="brand">
                  <img
                    :src="brand.image"
                    class="bg-transparent"
                    alt="Brand"
                    :width="brand.width"
                    :height="brand.height"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="swiper-nav">
            <div class="swiper-prev">
              <i class="icon-angle-left"></i>
            </div>
            <div class="swiper-next">
              <i class="icon-angle-right"></i>
            </div>
          </div>
        </div> -->
        <swiper-container
          ref="containerRef"
          :navigation="true"
          :slidesPerView="'5'"
          :freeMode="true"
        >
          <swiper-slide v-for="(brand, index) in homeData.brands" :key="index">
            <a href="#" class="brand">
              <img
                :src="'https://cdn-icons-png.flaticon.com/512/5309/5309779.png'"
                class="bg-transparent"
                alt="Brand"
                style="height: 50px; width: 150px"
              />
            </a>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
    <div class="mb-6"></div>
    <trendy-collection :products="products" v-if="loaded"></trendy-collection>

    <div class="container categories pt-6">
      <h2 class="title-lg text-center mb-4">Shop by Categories</h2>

      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="banner banner-display banner-link-anim">
            <nuxt-link to="/shop/sidebar/3cols">
              <img v-lazy="'/images/home/banners/banner-1.jpg'" alt="Banner" />
            </nuxt-link>

            <div class="banner-content banner-content-center">
              <h3 class="banner-title text-white">
                <nuxt-link to="/shop/sidebar/3cols">Outdoor</nuxt-link>
              </h3>

              <nuxt-link
                to="/shop/sidebar/3cols"
                class="btn btn-outline-white banner-link"
              >
                Shop Now
                <i class="icon-long-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 order-lg-last">
          <div class="banner banner-display banner-link-anim">
            <nuxt-link to="/shop/sidebar/3cols">
              <img v-lazy="'/images/home/banners/banner-4.jpg'" alt="Banner" />
            </nuxt-link>

            <div class="banner-content banner-content-center">
              <h3 class="banner-title text-white">
                <nuxt-link to="/shop/sidebar/3cols">Lighting</nuxt-link>
              </h3>

              <nuxt-link
                to="/shop/sidebar/3cols"
                class="btn btn-outline-white banner-link"
              >
                Shop Now
                <i class="icon-long-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-4 banners-sm">
          <div class="row">
            <div
              class="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12"
            >
              <nuxt-link to="/shop/sidebar/3cols">
                <img
                  v-lazy="'/images/home/banners/banner-2.jpg'"
                  alt="Banner"
                />
              </nuxt-link>

              <div class="banner-content banner-content-center">
                <h3 class="banner-title text-white">
                  <nuxt-link to="/shop/sidebar/3cols"
                    >Furniture and Design</nuxt-link
                  >
                </h3>

                <nuxt-link
                  to="/shop/sidebar/3cols"
                  class="btn btn-outline-white banner-link"
                >
                  Shop Now
                  <i class="icon-long-arrow-right"></i>
                </nuxt-link>
              </div>
            </div>

            <div
              class="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12"
            >
              <nuxt-link to="/shop/sidebar/3cols">
                <img
                  v-lazy="'/images/home/banners/banner-3.jpg'"
                  alt="Banner"
                />
              </nuxt-link>

              <div class="banner-content banner-content-center">
                <h3 class="banner-title text-white">
                  <nuxt-link to="/shop/sidebar/3cols"
                    >Kitchen & Utensil</nuxt-link
                  >
                </h3>

                <nuxt-link
                  to="/shop/sidebar/3cols"
                  class="btn btn-outline-white banner-link"
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

    <div class="mb-5"></div>

    <new-collection :products="products" v-if="loaded"></new-collection>
    <div class="container">
      <hr />
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-6">
          <div class="icon-box px-0 icon-box-card text-center">
            <span class="icon-box-icon">
              <i class="icon-rocket"></i>
            </span>
            <div class="icon-box-content">
              <h3 class="icon-box-title">Payment & Delivery</h3>

              <p>Free shipping for orders over $50</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <div class="icon-box px-0 icon-box-card text-center">
            <span class="icon-box-icon">
              <i class="icon-rotate-left"></i>
            </span>
            <div class="icon-box-content">
              <h3 class="icon-box-title">Return & Refund</h3>

              <p>Free 100% money back guarantee</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <div class="icon-box px-0 icon-box-card text-center">
            <span class="icon-box-icon">
              <i class="icon-life-ring"></i>
            </span>
            <div class="icon-box-content">
              <h3 class="icon-box-title">Quality Support</h3>

              <p>Alway online feedback 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-2"></div>
    </div>

    <blog-section :blogs="blogs" v-if="loaded"></blog-section>
    <div
      class="cta cta-display bg-image pt-4 pb-4"
      v-lazy:background-image="'/images/backgrounds/cta/bg-6.jpg'"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-9 col-xl-8">
            <div
              class="row no-gutters flex-column flex-sm-row align-items-sm-center"
            >
              <div class="col">
                <h3 class="cta-title text-white">Sign Up & Get 10% Off</h3>

                <p class="cta-desc text-white">
                  Molla presents the best in interior design
                </p>
              </div>

              <div class="col-auto">
                <nuxt-link to="/pages/login" class="btn btn-outline-white">
                  <span>SIGN UP</span>
                  <i class="icon-long-arrow-right"></i>
                </nuxt-link>
              </div>
            </div>
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
    const containerRef = ref(null);
    const slides = ref(Array.from({ length: 10 }));

    const swiper = useSwiper(containerRef);
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
