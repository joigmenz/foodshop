<template>
    <div class="max-w-screen-lg flex flex-col m-auto px-6 mt-16">        
        <IndexProduct
            v-bind:id="product.id"
            v-bind:picture="product.picture"
            v-bind:name="product.name"
            v-bind:slug="product.slug"
            v-bind:category="product.category"
            v-bind:price="product.price"
         />
    </div>    
</template>

<script>
import IndexProduct from "@/components/products/Index.vue";

export default {
    name: "Product",
    components: {
        IndexProduct
    },
    data() {
        return {
            product: {}
        }
    },
    created() {
        this.init()
    },
    watch: {
        '$route' (to, from) {
            this.init()
        }
    },
    methods: {
        init() {
            const url = `/products/${ this.$route.params.slug }`
            this.$store.dispatch('fetchProduct', url).then(product => {
                this.product = product
            });          
        }
    }
}
</script>