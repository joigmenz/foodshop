import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http-common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null, 
    cart: JSON.parse(localStorage.getItem('cart')) || {},
  },
  getters: {
    loggedIn: (state) => state.token,
    hasProducts: (state) => Object.keys(state.cart).length ? true : false,    
    qtyProducts: (state) => Object.values(state.cart).reduce((qty, product) => qty + product.cant, 0),
    cart: (state) => state.cart,
    total: (state) => {
      var amount = Object.values(state.cart).reduce((amount, product) => amount + (product.price * product.cant ), 0)
      return amount
    }
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
    },
    total(state, cart) {
      var amount = Object.values(cart).reduce((amount, product) => amount + (product.price * product.cant ), 0)
      state.total = amount.toFixed(2)
    },
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
    removeProductCart(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {}
      delete cart[product]
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)
      context.commit('total', cart)  
    },
    addProductCart(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {} 
      if(!cart[product.id]){
        product.cant = 1
      }else{
        product.cant = cart[product.id].cant + 1
      }
      cart[product.id] = product  
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)        
      context.commit('total', cart)   
    },
    qtyDecrementProduct(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {}
      cart[product.id].cant = (Number.parseInt(product.qty) > 1) ? Number.parseInt(product.qty) - 1 : 1
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)        
      context.commit('total', cart)   
    },
    qtyIncrementProduct(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {}
      cart[product.id].cant = (typeof Number.parseInt(product.qty)) ? Number.parseInt(product.qty) + 1 : 1
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)        
      context.commit('total', cart)   
    }
  },
  modules: {
  }
})
