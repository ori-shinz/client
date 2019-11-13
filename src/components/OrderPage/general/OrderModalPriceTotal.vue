<i18n>
{
  "en": {
    "Selected Region": "Selected Region",
    "Price": "Price",
    "Delivery Charges": "Delivery Charges",
    "Total Price": "Total Price",
    "Free of Charge": "Free of Charge",
    "West Malaysia": "West Malaysia",
    "East Malaysia": "East Malaysia",
    "Outside Malaysia": "Outside Malaysia"
  },
  "my": {
    "Selected Region": "Kawasan Yang Dipilih",
    "Price": "Harga",
    "Delivery Charges": "Caj Penghantaran",
    "Total Price": "Jumlah Harga",
    "Free of Charge": "Percuma",
    "West Malaysia": "Semenanjung Malaysia ",
    "East Malaysia": "Sabah & Sarawak ",
    "Outside Malaysia": "Luar Malaysia"
  },
  "cn": {
    "Selected Region": "选定地区",
    "Price": "价格",
    "Delivery Charges": "运输费",
    "Total Price": "总价格",
    "Free of Charge": "免费",
    "West Malaysia": "西马",
    "East Malaysia": "东马 (沙巴 & 砂拉越)",
    "Outside Malaysia": "马来西亚以外"
  }
}
</i18n>

<template>
  <Fragment>
    <div class="row text-content mb-3">
      <div class="col-3">{{ $t('Selected Region') }}</div>
      <div class="col-3">{{ $t(getRegionType) }}</div>
      <div class="col-3">{{ $t('Price') }}</div>
      <div class="col-3 text-right">{{ productPrice }} RM</div>
    </div>
    <div class="row text-content mb-3">
      <div class="col-3 ml-auto">{{ $t('Delivery Charges') }}</div>
      <div class="col-3 text-right">{{ deliveryPrice }}</div>
    </div>
    <div class="row text-content mb-4">
      <div class="col-3 ml-auto total">{{ $t('Total Price') }}</div>
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
      return this.$store.state.formOrder.deliveryPrice ? this.$store.state.formOrder.deliveryPrice + ' RM' : this.$t('Free of Charge')
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
      return area + 'Malaysia'
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
