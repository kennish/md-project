import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Home from '@/views/home/Home'
import Order from '@/views/order/Order'
import Discover from '@/views/discover/Discover'
import About from '@/views/about/About'
import LoginLayout from '@/views/login/LoginLayout'
import Login from '@/views/login/Login'
import Registration from '@/views/login/Registration'

import Food from '@/views/food/Food'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/discover',
          component: Discover
        },
        {
          path: '/order',
          component: Order,
          meta: {
            login: true
          }
        },
        {
          path: '/about',
          name: 'About',
          component: About,
          meta: {
            login: true
          }
        }
      ]
    },
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '',
          component: Login
        },
        {
          path: '/login/Registration',
          component: Registration
        }
      ]
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    }
  ]
})

export default router;

/* router.beforeEach(function (to, from, next) {
  if (to.matched.some((item) => item.meta.login)) {
    let info = router.app.$local.fetch('user')
    if(info.token) { // 已登录
      next()
    } else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else{
    next()
  }
}) */
