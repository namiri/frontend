import api from '~/api'
import cookies from 'js-cookie'
import { setAuthToken } from '~/utils/auth'

export const state = () => ({
  user: null,
  loggedIn: false,
  genders: null,
  grades: null,
  majors: null,
  cities: null,
  userId: null
})
export const mutations = {
  set_user (store, data) {
    store.user = data
    store.userId = data.id
  },
  set_city (store, data) {
    store.cities = data
    // console.log('sscity', store.cities)

    // store.inf.majors = data.majors
    // store.inf.grades = data.grades
    // store.inf.genders = data.genders
  },
  // reset_user (store, data) {
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
        commit('set_user', response.data.data.user)
        setAuthToken(response.data.data.access_token)
        commit('set_Login')
        setAuthToken(response.data.data.access_token)
        cookies.set('token', response.data.token)
        return response
      })
  },
  getInfo ({ commit }, data) {
    return api.auth.getInfo()
      .then(response => {
        // console.log('city', response.data.data.cities)
        commit('set_city', response.data.data.cities)
        return response
      })
  },
  edit ({ commit }, data) {
    return api.auth.getInfo()
      .then(response => {
        // console.log('city', response.data.data.cities)
      })
  }
}
