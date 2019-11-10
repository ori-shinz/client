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
    orderProduct ({ state }) {
      console.log('YOU ARE ORDERING')
      const { title, contactPerson, companyAddress, companyName, countryCode, deliveryAddress, email, contact, information} = state
      let formData = {
        contactPerson,
        companyAddress,
        companyName,
        countryCode,
        deliveryAddress,
        email,
        contact,
        information
      }
      if(title === 'try-free-sample') {
        formData = {
          ...formData,
          region: state.region,
          productType: state.productType,
          deliveryPrice: state.deliveryPrice,
          tankSize: state.tankSize
        }
        console.log(formData)
      }
      // console.log(state.title)
      // console.log(state.deliveryPrice, ' DELIVERY PRICE')
      // console.log(state.tankSize, 'your tank size')
      // console.log(state.productType, 'product that you order')
      // console.log(state.contactPerson)
      // console.log(state.companyAddress)
      // console.log(state.companyName)
      // console.log(state.countryCode)
      // console.log(state.deliveryAddress)
      // console.log(state.email)
      // console.log(state.contact)
      // console.log(state.information)
    } 
  }
}
