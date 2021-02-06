<template>
    <div class="md:col-span-2 flex flex-col text-left px-8">
                <div class="bg-gray-200 rounded p-4 mb-2">
                    <h1 class="uppercase text-base font-bold text-green-700">Want Free Shipping?</h1>
                    <p>Free shipping on orders over {{ shippingPrice.toFixed(2) }} Euros.</p>
                </div>
                <h1 class="text-lg font-bold px-4">ORDER SUMMARY</h1>
                <span class="border-b-2 my-2"></span>
                <div class="flex flex-col px-4">
                    <div class="flex justify-between">
                        <span>Subtotal</span>
                        <span>{{ total.toFixed(2) }} €</span>
                    </div>                    
                    <div class="flex justify-between text-sm">
                        <span>IVA (21%)</span>
                        <span>{{ (total * 0.21).toFixed(2) }} €</span>
                    </div>
                    <div class="flex justify-between text-sm" :class="[ haShippingFree ? 'line-through' : '' ]">
                        <span>Shipping</span>
                        <span>{{ shippingPrice.toFixed(2) }} €</span>
                    </div>
                </div>
                <span class="border-b-2 my-2"></span>
                <div class="flex flex-col px-4">
                    <div class="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{{ ((total * 1.21) + shippingTax).toFixed(2) }} €</span>
                    </div>
                </div>
                <button class="bg-red-500 hover:bg-red-600 rounded-sm text-lg text-white font-bold p-2 mt-4">
                    CHECK OUT
                </button>
            </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'Summary',
  computed: {
      ...mapGetters([
          'qtyProducts', 'total'
      ]),
      haShippingFree() {
          return (this.total > this.shippingPrice) ? true : false
      },
      shippingTax() {
          return (this.total > this.shippingPrice) ? 0 : this.shippingPrice
      }
  },
  data() {
      return {
          shippingPrice: 23.00
      }
  },
  components: {
  }
}
</script>