import api from '~/api'
import cookies from 'js-cookie'
import { setAuthToken } from '~/utils/auth'

export const state = () => ({
  user: null
})
export const mutations = {
  set_user (store, data) {
    store.user = data
  },
  reset_user (store) {
    store.user = null
  }
}
export const actions = {
  // fetch ({ commit }) {
  //   return api.auth.me()
  //     .then(response => {
  //       commit('set_user', response.data.result)
  //       return response
  //     })
  //     .catch(error => {
  //       commit('reset_user')
  //       return error
  //     })
  // },
  login ({ commit }, data) {
    return api.auth.login(data)
      .then(response => {
        console.log('auth', response)
        commit('set_user', response.data.data.user)
        setAuthToken(response.data.data.token)
        cookies.set('x-access-token', response.data.data.access_token)
        return response
      })
  }
  // reset ({ commit }) {
  //   commit('reset_user')
  //   return Promise.resolve()
  // }
}
