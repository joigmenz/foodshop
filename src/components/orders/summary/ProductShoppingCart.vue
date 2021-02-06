<template>
    <div class="flex relative text-left border p-4">
        <img class="ml-2" :src="picture" style="height: 92px">
        <div class="flex flex-col flex-grow justify-between ml-2">
        <div class="flex flex-col mr-5">
            <h1 class="text-left text-lg w-48 truncate">{{ name }}</h1> 
            <span class="text-left text-sm font-light text-gray-400 ">White Wine</span> 
            </div>   
                <div class="flex justify-between">
                    <div class="flex items-center ">
                        <input 
                            v-model="qty"
                            @change="qtyChange()" 
                            class="text-center w-12"
                            type="number" 
                            name="qty" 
                            min="1" 
                            max="99">
                        <span class="text-left text-base ml-2">x {{ (price).toFixed(2) }} €</span>
                    </div>                            
                    <span class="text-right font-bold text-lg">{{ (price * qty).toFixed(2) }} €</span>
                </div>  
            </div>
        <button @click="remove" class="absolute top-2 right-3 hover:text-gray-400 text-2xl cursor-pointer">X</button>
    </div> 
</template>

<script>
export default {
    name: 'ProductShoppingCart',
    props: [
        'id', 'picture', 'name', 'price', 'qty'
    ],
    methods: {
        qtyChange() {
            const { id, qty } = this 
            this.$store.dispatch('qtyChangeProduct', { id, qty });
        },        
        remove() {
            const { id } = this
            this.$store.dispatch('removeProductCart', id)
        }
    }
}
</script>