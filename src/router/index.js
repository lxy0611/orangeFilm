import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/views/index'
import DetailPage from '@/views/detailPage'
import SearchPage from '@/views/SearchPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    { path: '/detail/:id', component: DetailPage },
 	{ path: '/searchpage', component: SearchPage },
  ]
})
