import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// make route using lang, default: en
router.beforeEach((to, from, next) => {
  let lang = to.params.lang
  if (!lang) {
    lang = 'en'
  }
  i18n.locale = lang
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
