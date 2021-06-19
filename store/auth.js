import api from '~/api'
import cookies from 'js-cookie'
import { setAuthToken } from '~/utils/auth'

export const state = () => ({
  user: null,
  loggedIn: false
})
export const mutations = {
  // set_user (store, data) {
  set_user (store) {
    store.user = { id: 1, email: 'gggg' }
  },
  // reset_user (store) {
  //   store.user = null
  // },
  set_Login (store) {
    store.loggedIn = true
  }
}
export const actions = {
  login ({ commit }, data) {
    return api.auth.login(data)
      .then(response => {
        // console.log('auth', response)
        commit('set_user')
        setAuthToken(response.data.data.access_token)
        commit('set_Login')
        setAuthToken(response.data.token)
        cookies.set('token', response.data.token)
        return response
      })
  }
}
