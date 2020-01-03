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
    component: () => import('../views/About.vue')
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

export default router
