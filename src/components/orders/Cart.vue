<template>
    <ul id="cart" class="flex relative no-underline hover:text-black" @mouseover="isOpen = true">        
        <li class="relative">
            <router-link class="flex items-center font-bold focus:outline-none fill-current hover:text-black" :to="`/${this.$i18n.locale}/cart`">
                <span class="ml-2 inline-block w-2 h-2 bg-red-600 rounded-full" v-show="hasProducts"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                    <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                    <circle cx="10.5" cy="18.5" r="1.5" />
                    <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>  
                <span class="text-base font-light" v-show="hasProducts">({{ qtyProducts }})</span> 
            </router-link>                                     
        </li> 
        <li class="absolute w-72 bg-gray-100 top-8 right-0 shadow z-50" v-show="isOpen && hasProducts" @mouseleave="isOpen = false">
            <div class="flex flex-col p-2 gap-1 cursor-pointer">
                <Product
                    v-for="(product, index) in cart" 
                    :key="index"
                    v-bind:id="product.id"
                    v-bind:picture="product.picture"
                    v-bind:name="product.name"
                    v-bind:slug="product.slug"
                    v-bind:category="product.category"
                    v-bind:price="product.price"
                    v-bind:qty="product.qty"
                />
                <div class="flex justify-between px-2 pt-2">
                    <p>Total: {{ total.toFixed(2) }}€</p>
                </div>
            </div>
        </li>          
    </ul>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/orders/product/Product.vue';
import { mapGetters } from 'vuex'
export default {
    name: "Cart",
    computed: {        
        ...mapGetters([
            'cart', 'hasProducts', 'total', 'qtyProducts'
        ]),     
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
        
    },   
}
</script>