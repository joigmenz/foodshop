<template>
    <div class="flex relative text-left border p-4">
        <div class="flex items-center justify-center w-16">
            <img class="ml-2" :src="picture" style="height: 76px;"/>
        </div>        
        <div class="flex flex-col flex-grow justify-between ml-2">
            <div class="flex flex-col mr-5">
                <h1 class="text-left text-lg w-48 truncate">{{ name }}</h1>
                <span class="text-left text-sm font-light text-gray-400 ">White Wine</span> 
            </div>
            <div class="flex items-end justify-between">
                <div class="flex items-end custom-number-input h-10 w-38">
                    <div class="flex flex-row h-6 rounded-lg relative bg-transparent mt-1 w-20">
                        <button @click="qtyDecrement()" class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span class="m-auto text-sm">−</span>
                        </button>
                        <input v-model="qty" type="number" class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-sm hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="qty"/>
                        <button @click="qtyIncrement()" class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-sm">+</span>
                        </button>                            
                    </div>
                    <span class="flex text-left text-base ml-2">x {{ (price).toFixed(2) }} €</span>
                </div>                                
                <span class="text-right font-bold text-lg">{{ (price * qty).toFixed(2) }} €</span>
            </div>
        </div>
        <button @click="remove" class="absolute top-2 right-3 hover:text-gray-400 text-2xl cursor-pointer">X</button>
    </div>
</template>

<style scoped>
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .custom-number-input input:focus {
        outline: none !important;
    }

    .custom-number-input button:focus {
        outline: none !important;
    }
</style>
  
<script>
export default {
    name: 'ProductShoppingCart',
    props: [
        'id', 'picture', 'name', 'price', 'qty'
    ],
    methods: {
        /* TODO: Utilizar el método qtyChange en vez de (qtyDecrement / qtyIncrement) 
         * pasándole como parámetro el valor a incrementar, así ahorramos líneas de código
         */
        qtyChange() {
            const { id, qty } = this;
            this.$store.dispatch('qtyChangeProduct', { id, qty });
        },        
        remove() {
            const { id, qty } = this;
            this.$store.dispatch('removeProductCart', id);
        },
        qtyDecrement() {
            const { id, qty } = this;
            this.$store.dispatch('qtyDecrementProduct', { id, qty });
        },
        qtyIncrement() {
            const { id, qty } = this;
            this.$store.dispatch('qtyIncrementProduct', { id, qty });
        }
    }
}
</script>