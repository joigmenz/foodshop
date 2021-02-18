<template>
    <div id="navbar" class="w-full z-30 top-0 py-2 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between px-6">

            <div class="flex flex-col w-auto">
                <a class="flex items-center tracking-wide no-underline hover:no-underline text-gray-800 text-xl gap-1 pt-2" href="/">
                    <img src="assets/icons/wine.svg" width="36" height="36" />
                    wineshop.com
                </a>
                <nav class="flex items-center text-lg gap-2 uppercase my-2 font-serif">
                    <router-link class="inline-block no-underline hover:text-black hover:underline" to="/">{{ $t('store') }}</router-link> 
                    <span class="text-gray-500">|</span>
                    <router-link class="inline-block no-underline hover:text-black hover:underline" :to="`/${this.$i18n.locale}/products/categories/red-wine`">{{ $t('red-wine') }}</router-link> 
                    <span class="text-gray-500">|</span>
                    <router-link class="inline-block no-underline hover:text-black hover:underline" :to="`/${this.$i18n.locale}/products/categories/white-wine`">{{ $t('white.wine') }}</router-link>
                    <span class="text-gray-500">|</span>
                    <router-link class="inline-block no-underline hover:text-black hover:underline" :to="`/${this.$i18n.locale}/products/categories/rose-wine`">{{ $t('rose-wine') }}</router-link>
                    <span class="text-gray-500">|</span>
                    <router-link class="inline-block no-underline hover:text-black hover:underline" :to="`/${this.$i18n.locale}/products/categories/champagne`">{{ $t('champagne') }}</router-link>
                </nav>
            </div>

            <div class="flex flex-col w-auto">
                <router-link class="flex justify-end tracking-wide no-underline hover:no-underline text-gray-800 text-sm font-serif uppercase gap-1 pt-2" :to="`/${this.$i18n.locale}/about`">
                    <img src="assets/icons/email.svg" width="20" height="24" />
                    {{ $t('suggestion') }}
                </router-link>
                <div class="flex items-center content-end gap-2 uppercase my-2">
                    
                    <Cart/>
                    
                    <router-link 
                        v-if="!isAuthenticated"
                        class="flex no-underline hover:text-black" :to="`/${this.$i18n.locale}/sign-in`">
                        <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle fill="none" cx="12" cy="7" r="3" />
                            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                        </svg>
                        {{ $t('sign-in') }}
                    </router-link> 

                    <router-link 
                        v-if="isAuthenticated"
                        class="flex no-underline hover:text-black" :to="`/${this.$i18n.locale}/logout`">
                        <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle fill="none" cx="12" cy="7" r="3" />
                            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                        </svg>
                        {{ $t('logout') }}
                    </router-link>

                    <img @click="setLocale('es')" :class="this.$i18n.locale == 'es' ? '' : 'opacity-50'" class="w-6 cursor-pointer" src="/assets/icons/spain.svg" alt="Spain">
                    <img @click="setLocale('en')" :class="this.$i18n.locale == 'en' ? '' : 'opacity-50'" class="w-6 cursor-pointer" src="/assets/icons/united-kingdom.svg" alt="Spain">
                </div>
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
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        setLocale(lang){
            this.$i18n.locale = lang
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