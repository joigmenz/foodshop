<template>
    <div id="cart">
        <a class="flex relative pl-3 no-underline hover:text-black" href="#">
            <button @click="open()" class="relative flex items-center font-bold focus:outline-none fill-current hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
                    <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                    <circle cx="10.5" cy="18.5" r="1.5" />
                    <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>  
                <span class="absolute top-1 right-5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full" v-show="this.$store.getters.hasProducts">{{ Object.keys(this.$store.state.cart).length }}</span>
                <img class="ml-1 opacity-75" src="assets/icons/arrow-down.svg" width="12px" height="12px" />                        
            </button>       
            
            <div class="absolute w-72 bg-gray-200 top-8 right-0 shadow z-50" v-show="isOpen && this.$store.getters.hasProducts">
                <div class="flex flex-col p-2 gap-1">
                    <Product
                        v-for="(product, index) in products" 
                        :key="index"
                        v-bind:id="product.id"
                        v-bind:picture="product.picture"
                        v-bind:name="product.name"
                        v-bind:price="product.price"
                        v-bind:cant="product.cant"
                    />
                    <div class="flex justify-between px-2 pt-2">
                        <p>Total:</p>
                        <a  href="/cart"
                            class="bg-blue-500 p-2 rounded-sm text-sm font-semibold">
                            VIEW CART
                        </a>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/orders/product/Product.vue';
export default {
    name: "Cart",
    computed: {
        products() {            
            return this.$store.state.cart
        }        
    },
    data() {
        return {
            isOpen: false
        }
    },
    components: {
        Product
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen
        }
    },   
}
</script>