import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	linkActiveClass:'active',
  hashbang:false,
  routes: [
    {
      path:'/',
      component: require('@/components/main'),
      children:[
        {
          path:'/main/message' ,
          component: require('../views/main/message'),
        },
        {
          path:'/main/text2' ,
          component: require('../views/main/text2'),
        },
        {
          path:'/main/discover' ,
          component: require('../views/main/discover'),
        },
        {
          path:'/main/mine' ,
          component: require('../views/main/mine'),
        },
        {
          path:"*",redirect:'/main/message'
        }
      ]
    }
  ]
})
