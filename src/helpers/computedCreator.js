import store from '@/store'

function computedCreator (origin, fields) {
  const computed = {}
  fields.forEach(field => {
    computed[field] = {
      get: function () {
        return store.state[origin][field]
      },
      set: function (value) {
        store.commit(origin + '/SET_GENERAL_STATE', {
          field,
          value
        })
      }
    }
  })
  return computed
}

export default computedCreator
