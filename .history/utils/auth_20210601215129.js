import axios from 'axios'
export function setAuthToken (token) {
  axios.defaults.headers.common['access_token'] = token
}

export function resetAuthToken () {
  delete axios.defaults.headers.common['access_token']
}
