import axios from 'axios'
import { baseURL } from '~/config'
import { setAuthToken } from '~/utils/auth'
axios.defaults.baseURL = baseURL
// const token = cookies.get('x-access-token')
// if (token) setAuthToken(token) resetAuthToken
// else resetAuthToken()
setAuthToken();