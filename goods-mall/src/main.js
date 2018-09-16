import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import 'swiper/dist/css/swiper.css'
import 'style/base/reset.css'
import 'style/base/base.css'
import 'style/iconfont/iconfont.js'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
