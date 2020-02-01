import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'layout',
    component:()=>import('../layout/Home'),
    children:[
      {
        path: '/index',
        component: () => import('../views/index')
      },
      {
        path: '/categroy',
        component: () => import('../views/categroy')
      },
      {
        path: '/cart',
        component: () => import('../views/cart')
      },
      {
        path: '/profile',
        component: () => import('../views/profile')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
