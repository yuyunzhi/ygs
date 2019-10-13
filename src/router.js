import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/industry',
      name: 'industry',
      component: ()=>import('@/views/Industry.vue')
    },
  ]
})
