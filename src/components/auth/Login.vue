<template>
    <div class="bg-grey-lighter min-h-screen flex flex-col">
        <form
            action="#"
            @submit.prevent="login" 
            class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Login</h1>                    <input 
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" 
                    v-model="email"/>

                <input 
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password"
                    v-model="password" />
                <p class="text-red-500 mb-4" v-bind:show="error">{{ error }}</p>
                
                <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                    >Log In</button>       
            </div>

            <div class="text-grey-dark mt-6">
                Don't have an account?
                <router-link class="no-underline text-blue font-bold" to="/sign-up">
                    Sign up
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        login: function() {
            const { email, password } = this
            this.$store.dispatch('AUTH_REQUEST', { email, password }).then(() => {
                this.$router.push('/')
            }).catch(error => {
                this.error = error.message
                console.log(error)
            });
        }
    }
}
</script>