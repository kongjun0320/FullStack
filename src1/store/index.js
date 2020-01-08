import Vue from 'vue'
import Vuex from 'vuex'
import countStore from './modules/count'
import numberStore from './modules/number'
import loginStore from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    countStore,
    numberStore,
    loginStore
  }
})
