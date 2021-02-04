import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http-common'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null, 
    cart: JSON.parse(localStorage.getItem('cart')) || {},
    priceTotalCart: null
  },
  plugins: [createPersistedState()],
  getters: {
    loggedIn(state) {
      return state.token
    },
  },
  mutations: {
    destroyToken(state) {
      state.token = null
    },
    retrieveToken(state, token) {
      state.token = token
    },
    updateCart(state, cart) {
      state.cart = cart
    }
  },
  actions: {
    destroyToken(context) {
      http.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
      if(context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          http.post('/logout')
          .then(response => {
            localStorage.removeItem('access_token')
            context.commit('destroyToken')
            resolve(response)
          })
          .catch(error => {         
            localStorage.removeItem('access_token')
            context.commit('destroyToken')
            reject(error)
          })
        }) 
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        http.post('/login', {
          email: credentials.email,
          password: credentials.password
        })
        .then(response => {
          if(response.data.status == "401") {
            reject(response.data)
            return;
          }          
          const token = response.data.token
          localStorage.setItem('access_token', token)
          context.commit('retrieveToken', token)
          resolve(response)
        })
        .catch(error => {         
          console.log(error)
          reject(error)
        })
      })      
    },
    priceTotalCart(context , product){
      context.commit('push', product)
    },
    removeProductCart(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {}
      delete cart[product]
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)
    },
    addProductCart(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {} 
      cart[product.id] = product
      cart[product.id].cant = cart[product.id].cant ? parseInt(cart[product.id].cant++) : "1"
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)
    }
  },
  modules: {
  }
})
