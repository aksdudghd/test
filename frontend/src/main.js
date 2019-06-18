import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/css/transition.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
