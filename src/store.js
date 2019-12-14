import Vue from 'vue'
import Vuex from 'vuex'
import formOrder from './modules/formOrder'
import formEnquiry from './modules/formEnquiry'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    formOrder,
    formEnquiry
  }
})
