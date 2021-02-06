<template>
    <div class="max-w-screen-lg flex flex-col m-auto px-6 mt-8">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                SHOPPING CART ({{ qtyProducts }})
            </a>
        </div>
        <div class="max-w-screen-lg grid md:grid-cols-5">  
            <div class="flex flex-col md:col-span-3 border p-2 gap-2">
                <ProductShoppingCart
                    v-for="(product, index) in cart"
                    :key="index"
                    v-bind:id="product.id"
                    v-bind:picture="product.picture"
                    v-bind:name="product.name"
                    v-bind:price="product.price"
                    v-bind:qty="product.cant"
                    >
                </ProductShoppingCart>

                                                 
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
          'qtyProducts', 'cart'
      ]),
  },
  components: {
    Summary,
    ProductShoppingCart
  },
}
</script>
