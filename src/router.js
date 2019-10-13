import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Index.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Router)

const router = new Router({
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


router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

