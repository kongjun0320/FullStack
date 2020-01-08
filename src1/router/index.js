import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      auto: true
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cubeui',
    name: 'cubeui',
    component: () => import('../views/CubeUI.vue')
  },
  {
    path: '/comp',
    name: 'comp',
    component: () => import('../views/Comp.vue')
  },
  {
    path: '/vuexdemo',
    name: 'vuexDemo',
    component: () => import('../views/VuexDemo.vue')
  },
  {
    path: '/parent',
    component: () => import('../views/Parent.vue'),
    children: [
      {
        path: '',
        redirect: 'child1/1'
      },
      {
        path: 'child2',
        name: 'child2',
        props: true,
        beforeEnter: (to, from, next) => {
          console.log('beforeEnter')
          console.log(to)
          console.log(from)
          next()
        },
        component: () => import('../views/Child2.vue')
      },
      {
        path: 'child1/:id',
        name: 'child1',
        props: true,
        component: () => import('../views/Child1.vue')
        // components: {
        //   default: () => import('../views/Child1.vue'),
        //   heh: () => import('../views/NotFound.vue')
        // }
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
/**
 * 假设我们需要访问about页面 并且about页面是需要登录以后才能访问的
 */
router.beforeEach((to, from, next) => {
  // auto为true表示该页面需要登录权限才能访问的
  if (to.meta.auto) {
    let token = localStorage.getItem('token')
    // 代表登录过了
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.path } // 这个参数 表示登录成功以后 你需要跳转的页面的
      })
    }
  } else {
    next()
  }
})

export default router
