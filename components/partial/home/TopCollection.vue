<template>
    <div class="container">
        <div class="heading heading-center">
            <h2 class="title">Top Selling Products</h2>
        </div>
        <tabs
            class="nav-pills nav-pills nav-dark nav-border-anim justify-content-center mb-3"
            :data="tabsData"
            id="tab2"
        ></tabs>
        <div class="tab-content">
            <div class="tab-pane fade show active p-0" id="tab2-all">
                <div class="products">
                    <div class="row">
                        <div
                            class="col-6 col-md-4 col-lg-3 col-xl-5col mb-n4"
                            v-for="(product, index) in products"
                            :key="index"
                        >
                            <product-twelve :product="product"></product-twelve>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade p-0" id="tab2-furniture">
                <div class="products">
                    <div class="row">
                        <div
                            class="col-6 col-md-4 col-lg-3 col-xl-5col mb-n4"
                            v-for="(product, index) in furniture"
                            :key="index"
                        >
                            <product-twelve :product="product"></product-twelve>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade p-0" id="tab2-decoration">
                <div class="products">
                    <div class="row">
                        <div
                            class="col-6 col-md-4 col-lg-3 col-xl-5col mb-n4"
                            v-for="(product, index) in decoration"
                            :key="index"
                        >
                            <product-twelve :product="product"></product-twelve>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade p-0" id="tab2-lighting">
                <div class="products">
                    <div class="row">
                        <div
                            class="col-6 col-md-4 col-lg-3 col-xl-5col mb-n4"
                            v-for="(product, index) in lighting"
                            :key="index"
                        >
                            <product-twelve :product="product"></product-twelve>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mt-1 mb-6" />
    </div>
</template>
<script>
import Tabs from '~/components/elements/Tabs';
import ProductTwelve from '~/components/elements/products/ProductTwelve';
import { catFilter } from '~/utilities/common';

export default {
    components: {
        Tabs,
        ProductTwelve
    },
    props: {
        products: Array
    },
    data: function() {
        return {
            tabsData: [
                {
                    id: 'all',
                    title: 'All',
                    active: true
                },
                {
                    id: 'furniture',
                    title: 'Furniture'
                },
                {
                    id: 'decoration',
                    title: 'Decoration'
                },
                {
                    id: 'lighting',
                    title: 'Lighting'
                }
            ]
        };
    },
    computed: {
        furniture: function() {
            return catFilter(this.products, ['furniture']);
        },
        decoration: function() {
            return catFilter(this.products, ['decoration']);
        },
        lighting: function() {
            return catFilter(this.products, ['lighting']);
        }
    }
};
</script>