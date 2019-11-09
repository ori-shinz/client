export default {
  namespaced: true,
  state: {
    title: '',
    tankSize: 'Select your tank size',
    contactPerson: '',
    companyName: '',
    email: '',
    contact: '',
    countryCode: '+60',
    deliveryAddress: '',
    companyAddress: '',
    information: '',
    region: '',
    deliveryPrice: 0,
    productType: '',
    ecoBulkQuantity: 1,
    goldBulkQuantity: 1,
    ecoLooseQuantity: 1,
    goldLooseQuantity: 1,
    ecoLoosePrice: 65, // this is just constant state to set price
    ecoBulkPrice: 390, // this is just constant state to set price
    goldLoosePrice: 75, // this is just constant state to set price
    goldBulkPrice: 450, // this is just constant state to set price
    productPrice: 0, // price all qty * base price
    consent: false
  },
  mutations: {
    SET_GENERAL_STATE (state, payload) {
      state[payload.field] = payload.value
      console.log(state)
    },
    RESET_ORDERS (state) {
      state.deliveryPrice = 0
      state.goldBulkQuantity = 1
      state.ecoBulkQuantity = 1
      state.looseQuantity = 1
      state.productPrice = 0
      state.totalPrice = 0
    }
  },
  getters: {
    getTotalPrice: state => {
      return state.deliveryPrice + state.productPrice
    }
  },
  actions: {

  }
}
