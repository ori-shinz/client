import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/automotive',
      name: 'automotive',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "automotive" */ './views/AutomotiveProf.vue')
    },
    {
      path: '/productdetail',
      name: 'productdetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "productdetail" */ './views/ProductDetail.vue')
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "order" */ './views/OrderPage.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "aboutus" */ './views/AboutUs.vue')
    },
    {
      path: '/agent',
      name: 'agent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "aboutus" */ './views/AgentDistributor.vue')
    }
  ]
})
