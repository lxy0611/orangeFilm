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
import './directive/rgbaster'
import vueResource from 'vue-resource'
import focus from './directive/focus'
import VueRouter from 'vue-router'
import './assets/css/swiper-3.4.2.min.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(vueResource)

Vue.use(VueRouter)
Vue.use(focus)
/*var routes = [
	{ path: '/:server/:page', component: movielist },
	{ path: '*', redirect:'/in_theaters/0'}
]
var router = new VueRouter({
  routes
})*/


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
