<template>
    <div class="bg-white py-8 mt-2">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                        Store
                    </a>
                </div>
            </nav>  

            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <CardProduct 
                    v-for="(product, index) in products" 
                    :key="index"
                    v-bind:picture="product.picture"
                    v-bind:name="product.name"
                    v-bind:price="product.price"
                ></CardProduct>
            </div>
                      
        </div>
    </div>
</template>

<script>
import CardProduct from "@/components/store/products/Card.vue";
import http from "../../http-common";

export default {
    name: "IndexStore",
    data() {
        return {
            products: []
        }
    },
    components: {
        CardProduct
    },
    methods: {
        retrieveProducts() {
            http
                .get("/products")
                .then(response => {
                    this.products = response.data;
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        refreshList() {
            this.retrieveProducts();
        },
        
    },
    mounted() {
        this.retrieveProducts()
    }
}
</script>