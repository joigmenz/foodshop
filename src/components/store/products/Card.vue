<template>
    <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <a href="#">
            <img class="hover:grow hover:shadow-lg" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80">
            <div class="pt-3 flex items-center justify-between">
                <p class="">{{ name }}</p>                
            </div>
            <p class="pt-1 text-gray-900">{{ price }} €</p>
        </a>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        'name', 'price'
    ]
}
</script>