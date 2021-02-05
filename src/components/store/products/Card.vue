<template>
    <div class="flex shadow border p-4">
        <a href="#" class="flex flex-col justify-between w-full">
            <div class="flex flex-shrink-0">
                <img class="object-contain h-48 w-full" :src="picture">
            </div>
            <div class="flex flex-col">
                <h1 class="text-center">{{ name }}</h1>  
                <p class="text-sm font-bold">Wine White</p>
                <div class="pt-3 flex justify-between">
                    <p class="pt-1 font-bold text-gray-900">{{ price.toFixed(2) }} €</p>              
                    <button 
                        @click="push"
                        class="bg-red-500 px-2 rounded-sm text-xs text-white font-semibold">
                        ADD CARD
                    </button>
                </div>   
            </div>                     
        </a>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        'id', 'picture', 'name', 'price'
    ],
    methods: {
        push() {
            const { id, picture, name, price } = this
            const product = {
                id,
                picture,
                name,
                price
            }
            this.$store.dispatch('addProductCart', product)
        }
    }
}
</script>