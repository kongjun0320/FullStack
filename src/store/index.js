import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './modules/user'
import goodStore from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userStore,
    goodStore
  }
})
