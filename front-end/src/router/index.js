import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Application from '@/components/Application'
import Questions from '@/components/Questions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Application',
      component: Application,
      children: [
        {
          path: 'questions',
          name: 'Questions',
          component: Questions,
        }  
      ]
    }
  ]
})
