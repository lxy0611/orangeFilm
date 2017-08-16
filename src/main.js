// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueScroll from 'vue-scroll'


Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(VueScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
