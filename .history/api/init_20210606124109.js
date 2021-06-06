import axios from 'axios'
import { baseURL } from '~/config'
import cookies from 'js-cookie'
import { setAuthToken } from '~/utils/auth'
axios.defaults.baseURL = baseURL
// const token = this.$auth.$storage.getUniversal('token')
const token = cookies.get('access_token')
if (token) setAuthToken(token)
