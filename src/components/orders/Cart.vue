<template>
    <div id="cart">
        <a class="flex relative pl-3 no-underline hover:text-black" href="#">
            <button @click="open()" class="flex items-center font-bold focus:outline-none fill-current hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                    <circle cx="10.5" cy="18.5" r="1.5" />
                    <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>  
                CART
                <img class="ml-1 opacity-75" src="assets/icons/arrow-down.svg" width="12px" height="12px" />                        
            </button>       
            
            <div class="absolute w-72 bg-gray-200 top-8 right-0 shadow" v-show="isOpen">
                <div class="flex flex-col p-2">
                    <div class="relative flex flex-col gap-1 bg-white py-2">
                        <div class="flex">
                            <img class="" src="/img/ekam-essencia.jpg" width="48px">
                            <div class="flex flex-col justify-between m-1">
                                <div class="flex flex-col">
                                    <a href="#" class="text-sm">Ekam Essència 2018</a>  
                                    <p class="text-left text-xs font-bold">Price: 44.99€</p>
                                </div>                                
                                <span class="text-left text-xs">Cuantity: 1</span>
                            </div>
                        </div>
                        <button class="absolute top-2 right-3 hover:text-gray-400">X</button>
                    </div>
                    <div class="flex justify-between px-2 pt-2">
                        <p>Total:</p>
                        <button class="bg-blue-500 p-2 rounded-sm text-sm text-white font-semibold">VIEW CART</button>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "Cart",
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>