import axios from 'axios'
export function setAuthToken (token) {
  axios.defaults.headers.common['access_token'] = 'Bearer' + token
  // axios.defaults.headers.common['token'] = token
  axios.defaults.headers.common['Content-Type'] = 'application/json'
}

export function resetAuthToken () {
  delete axios.defaults.headers.common['token']
}
