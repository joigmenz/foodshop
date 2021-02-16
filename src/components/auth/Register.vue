<template>
    <form
        id="sign-up"
        @submit.prevent="signUp"
        action="#"
        method="post" 
        class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <a class="flex items-center justify-center mb-8 tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-2xl gap-1 pt-2" href="/">
                    <img src="assets/icons/wine.svg" width="36" height="36" />
                    wineshop.com
                </a>   
                <input 
                    id="name"
                    v-model="name"
                    type="text"
                    class="block bg-gray-50 border border-grey-light w-full p-3 rounded mb-1"
                    name="name"
                    placeholder="Full Name" />
                    <p class="text-left text-red-400 mb-4" v-bind:show="errors.name">{{ errors.name }}</p>
                <input 
                    id="email"
                    v-model="email"
                    type="text"
                    class="block bg-gray-50 border border-grey-light w-full p-3 rounded mb-1"
                    name="email"
                    placeholder="Email" />
                    <p class="text-left text-red-400 mb-4" v-bind:show="errors.email">{{ errors.email }}</p>
                <input 
                    id="password"
                    v-model="password"
                    type="password"
                    class="block bg-gray-50 border border-grey-light w-full p-3 rounded mb-1"
                    name="password"
                    placeholder="Password" />
                    <p class="text-left text-red-400 mb-4" v-bind:show="errors.password">{{ errors.password }}</p>
                <input 
                    type="password"
                    v-model="confirm_password"
                    class="block bg-gray-50 border border-grey-light w-full p-3 rounded mb-1"
                    name="confirm_password"
                    placeholder="Confirm Password" />
                    <p class="text-left text-red-400 mb-4" v-bind:show="errors.confirm_password">{{ errors.confirm_password }}</p>
                <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1 font-bold"
                    >
                    Sign Up
                </button>

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <a class="no-underline font-semibold text-grey-dark" href="#">
                        Terms of Service
                    </a> and 
                    <a class="no-underline font-semibold text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div class="text-grey-dark mt-6">
                Have an account?
                <router-link class="no-underline font-bold text-blue" to="/sign-in">
                    Sign In
                </router-link>
            </div>
        </div>
    </form>
</template>

<script>
import http from "../../http-common";

export default {
    name: "Register",
    data() {
        return {
            errors: {},
            name: null,
            email: null,
            password: null,
            confirm_password: null
        }
    },
    methods: {
        signUp: function () {

            this.errors = {};

            if (this.password != this.confirm_password) {
                this.errors['confirm_password'] = 'The password does not match'
            }
            
            if (!this.errors.length) {
                const user = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                http
                .post("/users", user)
                .then(response => {
                    if(response.data.errors) {
                        this.errors = {}
                        response.data.errors.forEach(data => {
                            this.errors[data.path] = data.message
                        });
                        return
                    }
                    this.$router.push('/sign-in')
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>