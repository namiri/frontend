import axios from 'axios'
export default {
  auth: {
    // me: () => axios.get('auth/me'),
    login: data => axios.post('/login', data),
    getInfo: data => axios.get('/megaroute/getUserFormData')
  }
}
