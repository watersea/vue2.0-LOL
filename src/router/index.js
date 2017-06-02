import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	linkActiveClass:'active',
  hashbang:false,
  routes: [
    {
      path: '/main',
      name: 'main',
      component:require('@/components/main'),
      children:[
      		{
      			path: 'index',
			      name: 'index',
			      component:require('../views/main/index')
      		},
      		{
      			path: 'order',
			      name: 'order',
			      component:require('../views/main/order')
      		},
      		{
      			path: 'mine',
			      name: 'mine',
			      component:require('../views/main/mine')
      		}
      ]
    },
    {
    	path: '/channel',
      name: 'channel',
      component:require('@/components/channel')
    },
    {
    	path: '/restaurant',
      name: 'restaurant',
      component:require('@/components/restaurant')
    },
    {
    	path: '/search',
      name: 'search',
      component:require('@/components/search')
    },
    {
    	path: '/city',
      name: 'city',
      component:require('@/components/city')
    },
    {
    	path:'*',redirect:'/main/index'
    }
    
  ]
})
