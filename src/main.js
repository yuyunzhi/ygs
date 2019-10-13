import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Nprogress from 'nprogress'
import './registerServiceWorker'
import '@/styles/base.scss'
Nprogress.configure({ showSpinner: false })

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()
Vue.store = store
Vue.nprogress = Vue.prototype.$nprogress = Nprogress


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
