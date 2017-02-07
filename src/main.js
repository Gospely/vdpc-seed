import Vue from 'vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'

import App from './App'

Vue.use(ElementUI)

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

app.$mount('#app')
