import axios from 'axios'

export default function () {
  // 设置请求拦截器
  axios.interceptors.request.use(config => {
    // 获取token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  })

  axios.interceptors.response.use((response) => {
    // Do something with response data
    return response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error)
  })

  // 设置响应拦截器
  // axios.interceptors.response.use((null, err) => {
  //   console.log(null);
  //   if (err.response.status === 401) {
  //     // 清空vuex 移除localstorage
  //     // 跳转login
  //   }
  //   return Promise.reject(err);
  // });
}
