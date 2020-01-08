import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import './mock'

Vue.config.productionTip = false

// 路由全局守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  // console.log(to)
  // console.log(from)
  next()
})
router.beforeResolve((to, from, next) => {
  next()
})
router.afterEach((to, from, next) => {

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
