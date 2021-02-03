<template>
    <div id="navbar" class="w-full z-30 top-0 py-4 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6">

            <div class="">
                <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl gap-2" href="#">
                    <img src="assets/icons/store.svg" width="38" height="38" />
                    FOODSHOP
                </a>
            </div>

            <label for="menu-toggle" class="cursor-pointer md:hidden block">
                <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <div class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/">Home</router-link> |
                        <router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/about">About</router-link>
                    </div>
                </nav>
            </div>

            
            <div class="flex items-center" id="nav-content">
                
                <router-link 
                    v-if="!loggedIn"
                    class="flex no-underline hover:text-black" to="/sign-in">
                    <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3" />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                    Sign In 
                </router-link> 

                <router-link 
                    v-if="loggedIn"
                    class="flex no-underline hover:text-black" to="/logout">
                    <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3" />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                    Logout
                </router-link>

                <Cart/>
            </div>
        </div>        
    </div>
</template>

<script>
import Cart from "@/components/orders/Cart.vue";
export default {
    name: "Navbar",
    components: {
        Cart
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar a {
  font-weight: bold;
  color: #2c3e50;
}

#navbar a.router-link-exact-active {
  color: #42b983;
}
</style>