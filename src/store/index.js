import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http-common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null
  },
  getters: {
    loggedIn(state) {
      return state.token
    }
  },
  mutations: {
    destroyToken(state) {
      state.token = null
    },
    retrieveToken(state, token) {
      state.token = token
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
    }
  },
  modules: {
  }
})
