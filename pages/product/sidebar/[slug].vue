<template>
    <main class="main">
        <breadcrumb :prev-product="prevProduct" :next-product="nextProduct" current="Extended"></breadcrumb>

        <div class="page-content">
            <div class="container skeleton-body horizontal">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="product-details-top">
                            <div class="row skel-pro-single" :class="{loaded: loaded}">
                                <div class="col-md-6">
                                    <div class="skel-product-gallery"></div>
                                    <gallery-horizontal :product="product"></gallery-horizontal>
                                </div>

                                <div class="col-md-6">
                                    <div class="entry-summary row">
                                        <div class="col-md-12">
                                            <div class="entry-summary1"></div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="entry-summary2"></div>
                                        </div>
                                    </div>
                                    <detail-one :product="product" v-if="product"></detail-one>
                                </div>
                            </div>
                        </div>
                        <info-one></info-one>
                        <related-products-one :products="relatedProducts" class="nav-none"></related-products-one>
                    </div>
                    <div class="col-lg-3" sticky-container>
                        <div v-sticky="shouldSticky" sticky-offset="{ top: 69 }">
                            <sidebar :products="relatedProducts" :loaded="loaded"></sidebar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<!-- <script>
import { mapGetters } from 'vuex';
import Sticky from 'vue-sticky-directive';

import GalleryHorizontal from '~/components/partial/product/gallery/GalleryHorizontal';
import DetailOne from '~/components/partial/product/details/DetailOne';
import InfoOne from '~/components/partial/product/info-tabs/InfoOne';
import Breadcrumb from '~/components/partial/product/BreadCrumb';
import Sidebar from '~/components/partial/product/sidebar/Sidebar';
import RelatedProductsOne from '~/components/partial/product/related/RelatedProductsOne';
import Repository, { baseUrl } from '~/repositories/repository.js';

export default {
    components: {
        DetailOne,
        InfoOne,
        Sidebar,
        Breadcrumb,
        GalleryHorizontal,
        RelatedProductsOne
    },
    directives: {
        Sticky
    },
    data: function() {
        return {
            product: null,
            prevProduct: null,
            nextProduct: null,
            relatedProducts: [],
            loaded: false,
            shouldSticky: false
        };
    },
    computed: {
        ...mapGetters('demo', ['currentDemo'])
    },
    created: function() {
        this.getProduct();
    },
    mounted: function() {
        this.stickyHandle();
        window.addEventListener('resize', this.stickyHandle, { passive: true });
    },
    destroyed: function() {
        window.removeEventListener('resize', this.stickyHandle);
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
        },
        stickyHandle: function() {
            if (window.innerWidth > 991) this.shouldSticky = true;
            else this.shouldSticky = false;
        }
    }
};
</script> -->


<script setup>
import GalleryHorizontal from '~/components/partial/product/gallery/GalleryHorizontal';
import DetailOne from '~/components/partial/product/details/DetailOne';
import InfoOne from '~/components/partial/product/info-tabs/InfoOne';
import Breadcrumb from '~/components/partial/product/BreadCrumb';
import Sidebar from '~/components/partial/product/sidebar/Sidebar';
import RelatedProductsOne from '~/components/partial/product/related/RelatedProductsOne';
import Repository, { baseUrl } from '~/repositories/repository.js';

const product = ref(null);
const prevProduct = ref(null);
const relatedProdcuts = ref(null);
const loaded = ref(false);
const shouldSticky = ref(false);

const demoStore = useDemoStore();
const currentDemo = computed(()=> demoStore.currentDemo);
const route = useRoute();
onMounted(() => {
    getProduct();
    stickyHandle();
    window.addEventListener('resize', stickyHandle, { passive: true });


});
const getProduct =async()=>{
    loaded.value = false;
    await Repository.get(
                `${baseUrl}/products/${route.params.slug}`,
                {
                    params: { demo: currentDemo.value }
                }
    )
    .then(response => {
                    product.value = { ...response.data.product };
                    relatedProducts.value = [...response.data.relatedProducts];
                    prevProduct.value = response.data.prevProduct;
                    nextProduct.value = response.data.nextProduct;
                    loaded.value = true;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
}
const stickyHnadle=()=>{
    if (window.innerWidth > 991) shouldSticky.value = true;
    else shouldSticky.value = false;
}
destroyed = () =>{
    window.removeEventListener('resize', stickyHandle.value);

}
</script>