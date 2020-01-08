const state = {
  count: 1
}
const mutations = {
  increment1 (state) {
    state.count++
  }
}
const actions = {
  increment: ({ commit }) => {
    commit('increment')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
