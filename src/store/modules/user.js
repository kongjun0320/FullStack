import user from '../../server/user'

const state = {
  isLogin: false
}
const mutations = {
  setIsLogin (state, b) {
    state.isLogin = b
  }
}
const actions = {
  loginAction ({ commit }, userData) {
    // return 123
    // 模拟登录
    return user.loginHandle(userData).then(res => {
      const { code, token } = res.data
      if (code) {
        commit('setIsLogin', true)
        localStorage.setItem('token', token)
        return {
          code,
          token
        }
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
