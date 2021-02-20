<template>
<div class="max-w-screen-lg grid md:grid-cols-5">  
            <div class="flex flex-row-reverse md:col-span-3 p-2 border-r">
                <img :src="picture" />                
            </div>            
            <div class="md:col-span-2 flex flex-col text-left px-8">
                <h1 class="text-2xl font-bold">{{ name }}</h1>
                <p class="text-xl text-gray-500">{{ category }}</p>
                <div class="flex flex-col py-3">
                    <div class="flex justify-between text-base">
                        <span>Price</span>
                        <span>{{ price }} €</span>
                    </div>                    
                    <div class="flex justify-between">
                        <span>IVA (21%)</span>
                        <span>{{ (price * 0.21).toFixed(2) }} €</span>
                    </div>
                    <span class="border-b-2 my-2"></span>
                    <div class="flex justify-between text-xl">
                        <span>Total</span>
                        <span>{{ (price * 1.21).toFixed(2) }} €</span>
                    </div>
                </div>
                <div class="flex items-end justify-between">
                    <div class="flex items-center custom-number-input h-10 w-38">
                        <div class="flex flex-row h-7 rounded-lg relative bg-transparent mt-1 w-28">
                            Qty: 
                            <button @click="qtyDecrement()" class="ml-2 bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span class="m-auto text-sm">−</span>
                            </button>
                            <span type="number" class="flex justify-center outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-sm hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="qty">{{ qty }}</span>
                            <button @click="qtyIncrement()" class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer">
                                <span class="m-auto text-sm">+</span>
                            </button>                            
                        </div>                        
                    </div>  
                    <button 
                        @click="addToCart()"
                        class="bg-red-500 hover:bg-red-600 rounded-sm text-sm text-white font-bold p-2 mt-4">
                        {{ $t('add-to-cart') }}
                    </button>
                </div>                
            </div>
        </div>
</template>

<script>
export default {
    name: "Index",
    props: [
        'id', 'picture', 'name', 'slug', 'category', 'price'
    ],
    data() {
        return {
            qty: 1
        }
    },
    methods: {
        qtyIncrement() {
            this.qty++
        },
        qtyDecrement() {
            this.qty-- 
        },
        addToCart() {
            const { id, picture, name, category, price, qty } = this
            this.$store.dispatch('addToCart',
                { id, picture, name, category, price, qty } 
            )
        }
    }
}
</script>