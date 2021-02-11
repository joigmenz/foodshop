<template>
    <div class="bg-withe hover:shadow relative flex flex-col rounded-md gap-1 bg-white py-2">
        <div class="flex">
            <img class="ml-2" :src="picture" style="height: 56px">
            <div class="flex flex-col justify-between ml-2">
                <div class="flex flex-col mr-5">                    
                    <router-link :to="{ path: '/product/' + id }"  class="text-left text-sm w-48 truncate">{{ name }}</router-link> 
                    <span class="text-left text-xs font-light text-gray-400 ">Wine White</span> 
                </div>   
                <div class="flex justify-between">
                    <span class="text-left text-xs">({{ cant }}) x {{ price.toFixed(2) }} €</span>
                    <span class="text-right text-sm">{{ (cant * price).toFixed(2) }} €</span>
                </div>  
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
        'id', 'picture', 'name', 'price', 'cant'
    ],
    methods: {       
        remove() {
            const { id } = this
            this.$store.dispatch('removeProductCart', id)
        }
    }
}
</script>