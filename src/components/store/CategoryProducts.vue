<template>
    <div class="bg-white py-8 mt-2">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                        {{ this.$route.params.slug.replace('-', ' ') }}
                    </a>
                </div>
            </nav>  

            <div class="grid sm:grid-cols-1 sm:px-10 md:grid-cols-3 md:px-5 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <!-- TODO: Losproductos se muestran solo una vez, buscar para que la petición dentro del componente sea dinámico -->
                <CardProduct 
                    v-for="(product, index) in products" 
                    :key="index"
                    v-bind:id="product.id"
                    v-bind:picture="product.picture"
                    v-bind:name="product.name"
                    v-bind:category="product.category"
                    v-bind:price="product.price"
                ></CardProduct>
            </div>
                      
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardProduct from "@/components/store/products/Card.vue";
import http from "../../http-common";

export default {
    name: "CategoryProducts",
    components: {
        CardProduct
    },
    computed: {
        ...mapGetters([
            'products'
        ])
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
            const url = `/products/categories/${ this.$route.params.slug }`
            this.$store.dispatch('fetchProductData', url)               
        }
    }
}
</script>