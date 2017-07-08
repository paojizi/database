import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Banner from '@/components/Home/Banner.vue'
import More from '@/components/Home/More.vue'
import Detail from '@/components/Home/Detail.vue'
import City from '@/components/Home/City.vue'
import Register from '@/components/Home/Register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component:Home},
    {path:'/home',component:Home,
    	children:[
    		{path:'banner',component:Banner},
    		{path:'detail/:id',component:Detail},
    		{path:'more',component:More},
    		{path:'city',component:City},
    		{path:'register',component:Register}
    	]
  }   
  ]
})
