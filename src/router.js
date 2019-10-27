import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/automotive-professional',
      name: 'Automotive Professional',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "automotive-professional" */ './views/AutomotiveProf.vue')
    },
    {
      path: '/product-detail',
      name: 'Product Detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "product-detail" */ './views/ProductDetail.vue')
    },
    {
      path: '/order',
      name: 'Order',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "order" */ './views/OrderPage.vue')
    },
    {
      path: '/agent-distributor-oem',
      name: 'Agent/ Distributor/ Oem',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "agent-distributor-oem" */ './views/AgentDistributor.vue')
    },
    {
      path: '/about-us',
      name: 'About Us',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about-us" */ './views/AboutUs.vue')
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "privacy-policy" */ './views/PrivacyPolicy.vue')
    },
    {
      path: '/terms-of-service',
      name: 'Terms of Service',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "terms-of-service" */ './views/TermsOfService.vue')
    }
  ]
})
