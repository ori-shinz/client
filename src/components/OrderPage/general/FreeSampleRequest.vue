<template>
  <Fragment>
    <div class="row justify-content-center">
      <p>Select Sample you want to request</p>
    </div>
    <div class="row  mb-3 justify-content-center">
      <div class="col-3 p-2 bg-black mr-4">
        <img src="~@/assets/images/package-sample-eco.png" class="img-fluid" alt="package-sample-eco">
      </div>
      <div class="col-3 p-2 bg-black">
        <img src="~@/assets/images/package-sample-gold.png" class="img-fluid" alt="package-sample-gold">
      </div>
    </div>
    <div class="row  mb-3 justify-content-center text-orange-sample">
      <div class="col-3 p-2 text-center">
        ORI-SHINZ ECO
      </div>
      <div class="col-3 p-2 text-center">
        ORI-SHINZ GOLD
      </div>
    </div>
    <div class="row justify-content-center">  
      <table class="table text-content col-md-6 table-borderless">
        <tbody>
          <tr>
            <td>Select Region</td>
            <td class="text-right">
              <span class="region-btn" @click="changeRegion('west')" :class="active('west')">West Malaysia</span>
               | 
              <span class="region-btn" @click="changeRegion('east')" :class="active('east')">East Malaysia</span>
            </td>
          </tr>
          <tr>
            <td>Delivery Charges</td>
            <td class="text-right">RM {{ deliveryPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: 'FreeSampleRequest',
  components: {
    Fragment
  },
  computed: {
    region () {
      return this.$store.state.formOrder.region
    },
    deliveryPrice () {
      if(!!this.$store.state.formOrder.deliveryPrice) {
        return this.$store.state.formOrder.deliveryPrice + '.00'
      } else {
        return ''
      }
    }
  },
  methods: {
    changeRegion(value) {
      let deliveryPrice = 0
      value === 'west' ? deliveryPrice = 9 : deliveryPrice = 12
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'region',
        value
      })
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'deliveryPrice',
        value: deliveryPrice
      })
    },
    active (reg) {
      return this.region === reg ? 'text-orange' : null
    }
  }
}
</script>

<style scoped>
.bg-black {
  background-color: rgba(0, 0, 0, 0.25);
}
.text-content {
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
.region-btn:hover {
  color: #ffca65;
  cursor: pointer;
}
.borderless {
  border: 0 !important;
}
.text-orange-sample {
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ffca65;
}
.text-orange {
  color: #ffca65;
}
</style>