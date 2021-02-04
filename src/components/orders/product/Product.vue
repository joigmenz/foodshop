<template>
    <div class="relative flex flex-col gap-1 bg-white py-2">
        <div class="flex">
            <img class="ml-2" :src="picture" style="height: 76px">
            <div class="flex flex-col justify-between m-1">
                <div class="flex flex-col mr-5">
                    <p class="text-left text-sm w-48 truncate">{{ name }}</p>  
                    <p class="text-left text-xs font-bold">Price: {{ price }}€</p>
                </div>                                
                <span class="text-left text-xs">Cuantity: 1</span>
            </div>
        </div>
        <div 
            @click="remove"
            class="absolute top-2 right-3 hover:text-gray-400 text-sm"
            >X
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: [
        'id', 'picture', 'name', 'price'
    ],
    methods: {       
        remove() {
            const { id } = this
            this.$store.dispatch('removeProductCart', id)
        }
    }
}
</script>