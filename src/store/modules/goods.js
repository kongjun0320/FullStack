import goodServer from '../../server/good'
export default {
  namespaced: true,
  state: {
    goodList: [],
    name: 'kobe'
  },
  mutations: {
    setGoodList (state, data) {
      state.goodList = data
    }
  },
  getters: {
    gettersTest: state => state.name + 's'
  },
  actions: {
    getGoodListAction ({ commit }) {
      goodServer.getGoodsInfo().then(res => {
        const data = res
        commit('setGoodList', data)
      })
    }
  }
}
