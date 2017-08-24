// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './directive/rem'
import './directive/jquery-3.1.1'
import './directive/adaptive-backgrounds'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import './assets/css/swiper-3.4.2.min.css'
import Navigation from 'vue-navigation'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(Navigation, {router})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
