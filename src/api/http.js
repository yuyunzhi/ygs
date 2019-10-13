import Vue from 'vue'
import Axios from 'axios'

// 配置axios
Axios.defaults.timeout = 5000

// 请求拦截器
Axios.interceptors.request.use(
  config => {
    const store = Vue.store
    const accessToken = store.getters.accessToken || ''
    config.baseURL = config.baseURL || '/api/controlpanel'
    config.headers = {
      Authorization: `Bearer ${accessToken}`.trim()
    }

    Vue.nprogress.start()

    return config
  },
  error => {
    Vue.nprogress.done()
    return error
  }
)

// 相应拦截器
Axios.interceptors.response.use(
  response => {
    Vue.nprogress.done()

    return response.data
  },
  error => {
    Vue.nprogress.done()

    const res = error.response || {}
    const data = res.data || {}
    const code = data.code || 404
    const message = data.desc || '请求出错啦^o^'

    Vue.message.error(message)

    return { code, message }
  }
)

export default Axios
