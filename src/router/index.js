import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/views/index'
import InfoPage from '@/views/InfoPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/infoPage',
      name: 'InfoPage',
      component: InfoPage,
    }
  ]
})
