import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Home from '@/views/home/Home'
import Order from '@/views/order/Order'
import Discover from '@/views/discover/Discover'
import About from '@/views/about/About'
import Login from '@/views/login/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
          meta: {
            id: 'Home',
            index: 0
          }
        },
        {
          path: '/order',
          component: Order,
          meta: {
            id: 'Order',
            index: 1
          }
        },
        {
          path: '/discover',
          component: Discover,
          meta: {
            id: 'Discover',
            index: 2
          }
        },
        {
          path: '/about',
          name: About,
          component: About,
          meta: {
            id: 'About',
            index: 3
          }
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router;

// router.beforeEach(function (to, from, next) {
//   console.log(to)
//   console.log(from)
//   next()
// })
