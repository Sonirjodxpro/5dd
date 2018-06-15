import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index'
import Home from '../page/Home'
import Search from '../page/Search'
import SearchIndex from '../page/SearchIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Index,
      children:[
        {
          path:'/',
          component:Home
        }
      ]
    },
    {
      path:'/search',
      component:Search,
      children:[
        {
          path:'index',
          component:SearchIndex
        }
      ]
    }
  ]
})
