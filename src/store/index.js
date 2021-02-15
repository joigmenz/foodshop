import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http-common'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _token: localStorage.getItem('access_token') || '',
    status: '',
    token: http.defaults.headers.common.Authorization ? true : false, 
    cart: JSON.parse(localStorage.getItem('cart')) || {},
    products: [],
  },
  getters: {
    isAuthenticated: state => !!state._token,
    authStatus: state => state.status,
    products: (state) => state.products,
    hasProducts: (state) => Object.keys(state.cart).length ? true : false,    
    qtyProducts: (state) => Object.values(state.cart).reduce((qty, product) => qty + product.qty, 0),
    cart: (state) => state.cart,
    total: (state) => {
      var amount = Object.values(state.cart).reduce((amount, product) => amount + (product.price * product.qty ), 0)
      return amount
    }
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = 'loading'
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = 'success',
      state._token = token
    },
    AUTH_ERROR: (state) => {
      state.status = 'error'
    },
    AUTH_LOGOUT: (state) => {
      localStorage.removeItem('access_token')
      state._token = ''
      state.status = ''
    },
    updateCart(state, cart) {
      state.cart = cart
    },
    total(state, cart) {
      var amount = Object.values(cart).reduce((amount, product) => amount + (product.price * product.qty ), 0)
      state.total = amount.toFixed(2)
    },
    setProducts: (state, data) => state.products = data,
  },
  actions: {
    AUTH_REQUEST: ({ commit, dispatch }, credentials) => {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        http.post('/login', credentials)
          .then(response => {
            if(response.data.status == "401") {
              reject(response.data)
              return;
            }   
            localStorage.setItem('access_token', response.data.token)
            commit('AUTH_SUCCESS', response.data.token)
            resolve(response)
          })
          .catch(error => {
            commit('AUTH_ERROR', error)
            localStorage.removeItem('access_token')
            reject(error)
          })
      });
    },
    AUTH_LOGOUT: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('access_token')
        resolve()
      })
    },    
    fetchProductData(context, url) {
      return new Promise((resolve, reject) => {
        http.get(url)
          .then(response => {
            const data = response.data
            context.commit('setProducts', data)
            resolve(response)
          })
          .catch(error => {
            context.commit('setProducts', [])
            reject(error)
          })
      })
    },
    CHECKOUT: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const products = JSON.parse(localStorage.getItem('cart'))
        http.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("access_token")
        http.post('/checkout', {
          products
        }).then(response => {
          console.log(response.data)
        }).catch(error => {
          commit('AUTH_LOGOUT')
          router.push('/sign-in')
          reject(error)
        })
      });
    },
    fetchProduct(context, url) {
      return new Promise((resolve, reject) => {
        http.get(url)
          .then(response => {
            const data = response.data
            resolve(data)
          })
          .catch(error => {       
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
        product.qty = 1
      }else{
        product.qty = cart[product.id].qty + 1
      }
      cart[product.id] = product  
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)        
      context.commit('total', cart)   
    },
    qtyDecrementProduct(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {}
      cart[product.id].qty = (Number.parseInt(product.qty) > 1) ? Number.parseInt(product.qty) - 1 : 1
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)        
      context.commit('total', cart)   
    },
    qtyIncrementProduct(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {}
      cart[product.id].qty = (typeof Number.parseInt(product.qty)) ? Number.parseInt(product.qty) + 1 : 1
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)        
      context.commit('total', cart)   
    },
    addToCart(context, product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || {} 
      if(!cart[product.id]){
        product.qty = 1
      }else{
        product.qty = cart[product.id].qty + 1
      }
      cart[product.id] = product  
      localStorage.setItem('cart', JSON.stringify(cart))
      context.commit('updateCart', cart)        
      context.commit('total', cart)   
    }
  },
  modules: {
  }
})
