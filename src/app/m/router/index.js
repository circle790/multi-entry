import Vue from 'vue'
import Router from 'vue-router'

const First = () => import('../pages/First.vue')
const Second = () => import('../pages/Second.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
