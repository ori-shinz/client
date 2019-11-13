import axios from 'axios'

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
    orderType: '',
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
    orderProduct ({ state }, payload) {
      console.log('YOU ARE ORDERING')
      const { title, contactPerson, companyAddress, companyName, countryCode, deliveryAddress, email, contact, information } = state
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
      let quantity, singlePrice
      if (state.orderType === 'loose') {
        if (state.productType === 'eco') {
          quantity = state.ecoLooseQuantity
          singlePrice = state.ecoLoosePrice
        } else if (state.productType === 'gold') {
          quantity = state.goldLooseQuantity
          singlePrice = state.goldLoosePrice
        }
      } else if (state.orderType === 'bulk') {
        if (state.productType === 'eco') {
          quantity = state.ecoBulkQuantity
          singlePrice = state.ecoBulkPrice
        } else if (state.productType === 'gold') {
          quantity = state.goldBulkQuantity
          singlePrice = state.goldBulkPrice
        }
      }

      if (title === 'try-free-sample') {
        formData = {
          ...formData,
          region: state.region,
          productType: state.productType,
          deliveryPrice: state.deliveryPrice,
          tankSize: state.tankSize
        }
      } else if (title.includes('west') || title.includes('east')) {
        formData = {
          ...formData,
          orderType: state.orderType,
          productType: state.productType,
          deliveryPrice: state.deliveryPrice,
          quantity,
          singlePrice,
          region: state.region,
          productPrice: state.productPrice,
          totalPrice: state.deliveryPrice + state.productPrice
        }
      } else if (title.includes('outside')) {
        formData = {
          ...formData,
          orderType: state.orderType,
          productType: state.productType,
          quantity,
          region: state.region
        }
      }
      axios({
        method: 'POST',
        url: 'https://us-central1-firefun-orishinz.cloudfunctions.net/helloWorld', // route asli sendMail tapi belom gw publish
        data: {
          ...formData
        }
      })
        .then(({ data }) => {
          console.log(data, '<<')
        })
        .catch(err => {
          console.log(err, '>><<')
        })
    }
  }
}
