import Vue from 'vue'
import Vuex from 'vuex'
import countStore from './modules/count'
import numberStore from './modules/number'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    countStore,
    numberStore
  }
})
