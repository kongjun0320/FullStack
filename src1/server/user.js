import axios from 'axios'
export default {
  loginHandle (user) {
    // return new Promise((resolve) => {
    //   resolve({ code: 1, token: 'ji' })
    // })
    return axios.post('/api/login', user)
  }
}
