import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http-common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    retrieveToken(context, credentials) {
      http.post('/login', {
        email: credentials.email,
        password: credentials.password
      })
      .then(response => {
        const token = response.data.token
        console.log(response)
        localStorage.setItem('access_token', token)
        //context.commit('retrieveToken')
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
