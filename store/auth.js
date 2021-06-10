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
  login ({ commit }, data) {
    return api.auth.login(data)
      .then(response => {
        console.log('auth', response)
        // commit('set_user', response.data.data.user)
        // setAuthToken(response.data.data.access_token)
        setAuthToken(response.data.token)
        cookies.set('token', response.data.token)
        return response
      })
  }
}
