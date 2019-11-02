<template>
  <Fragment>
    <div class="row text-content mb-3">
      <div class="col-3">Selected Region</div>
      <div class="col-3">{{ getRegionType }}</div>
      <div class="col-3">Price</div>
      <div class="col-3 text-right">{{ productPrice }} RM</div>
    </div>
    <div class="row text-content mb-3">
      <div class="col-3 ml-auto">Delivery Charges</div>
      <div class="col-3 text-right">{{ deliveryPrice }}</div>
    </div>
    <div class="row text-content mb-4">
      <div class="col-3 ml-auto total">Total Price</div>
      <div class="col-3 text-right total text-orange">{{ totalPrice }} RM</div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: 'OrderModalPriceTotal',
  props: ['orderType', 'regionType', 'cardTitle'],
  components: {
    Fragment
  },
  computed: {
    deliveryPrice () {
      return this.$store.state.formOrder.deliveryPrice ? this.$store.state.formOrder.deliveryPrice + ' RM' : 'Free of Charge'
    },
    totalPrice () {
      return this.$store.getters['formOrder/getTotalPrice']
    },
    productPrice () {
      return this.$store.state.formOrder.productPrice
    },
    getRegionType () {
      let area
      if (this.regionType === 'west') {
        area = 'West '
      } else if (this.regionType === 'east') {
        area = 'East '
      } else {
        area = 'Outside '
      }
      return area + ' Malaysia'
    }
  }
}
</script>

<style scoped>
  .total {
    font-size: 1.75rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .text-orange {
    color: #ffca65 !important;
  }
</style>
