import axios from 'axios'

export default {
  namespaced: true,
  state: {
    enquiryType: 'Enquiry',
    contactPerson: '',
    companyName: '',
    countryCode: '+60',
    contactNumber: '',
    message: ''
  },
  mutations: {
    SET_GENERAL_STATE (state, payload) {
      state[payload.field] = payload.value
    },
    RESET_FORMS (state, payload) {
      state.enquiryType = 'Enquiry'
      state.contactPerson = ''
      state.companyName = ''
      state.countryCode = '+60'
      state.contactNumber = ''
      state.message = ''
    }
  },
  actions: {
    sendMail (context, payload) {
      axios({
        method: 'POST',
        url: 'https://us-central1-firefun-orishinz.cloudfunctions.net/contactRequest', // route asli sendMail tapi belom gw publish
        data: {
          ...context.state
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
