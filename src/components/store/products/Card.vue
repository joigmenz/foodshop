<template>
    <div class="flex p-4">
        <a href="#" class="flex flex-col w-full">
            <img class="hover:grow hover:shadow-lg self-center flex-grow md:w-3/6 " :src="picture">
            <p class="text-center">{{ name }}</p>  
            <div class="pt-3 flex justify-between">
                <p class="pt-1 font-bold text-gray-900">{{ price }} €</p>              
                <button class="bg-red-500 px-2 rounded-sm text-xs text-white font-semibold">ADD CARD</button>
            </div>            
        </a>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        'picture', 'name', 'price'
    ]
}
</script>