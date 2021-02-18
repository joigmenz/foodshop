<template>
    <div class="max-w-screen-lg flex flex-col m-auto px-6 mt-8">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                {{ $t('shopping-cart') }} ({{ qtyProducts }})
            </a>
        </div>
        <div class="max-w-screen-lg grid md:grid-cols-5">  
            <div class="flex flex-col md:col-span-3 p-2 border-t gap-2">
                <ProductShoppingCart
                    v-for="(product, index) in cart"
                    :key="index"
                    v-bind:id="product.id"
                    v-bind:picture="product.picture"
                    v-bind:name="product.name"
                    v-bind:slug="product.slug"
                    v-bind:category="product.category"
                    v-bind:price="product.price"
                    v-bind:qty="product.qty"
                    >
                </ProductShoppingCart> 
                <div class="flex flex-col items-center text-gray-400 p-4" v-show="!hasProducts">
                    {{ $t('cart-empty') }}  
                    <a href="/" class="bg-red-600 hover:bg-red-700 rounded-sm text-lg text-white font-bold py-2 px-4 mt-4 w-1/2">
                        {{ $t('continue-shopping') }}
                    </a>
                </div>     
            </div>
            <Summary />
        </div>
    </div>     
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import ProductShoppingCart from '@/components/orders/summary/ProductShoppingCart.vue'
import Summary from '@/components/orders/summary/Summary.vue'

export default {
  name: 'Cart',
  computed: {
      ...mapGetters([
          'qtyProducts', 'cart', 'hasProducts'
      ]),
  },
  components: {
    Summary,
    ProductShoppingCart
  },
}
</script>
