import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Runoob from '@/components/runoob/Runoob'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Runoob',
      component: Runoob
    }
  ]
})
