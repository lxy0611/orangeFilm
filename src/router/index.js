import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/views/home'
import Index from '@/views/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Index',
      component: Index,
      children: [
      	{
      		path: '/home',
      		name: 'Home',
      		component: Home,
      	}
      ]
    }
  ]
})
