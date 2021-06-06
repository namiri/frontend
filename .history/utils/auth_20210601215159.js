import axios from 'axios'
export function setAuthToken (token) {
  axios.defaults.headers.common['access_token'] = token
  axios.defaults.headers.common['access_token'] = token
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+TOKEN
}
}

export function resetAuthToken () {
  delete axios.defaults.headers.common['access_token']
}
