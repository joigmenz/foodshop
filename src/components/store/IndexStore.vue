<template>
    <div class="bg-white py-8 mt-2">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                        Store
                    </a>
                </div>
            </nav>   

            <CardProduct />
        </div>
    </div>
</template>

<script>
import CardProduct from "@/components/store/products/Card.vue";
export default {
    name: "IndexStore",
    components: {
        CardProduct
    }
}
</script>