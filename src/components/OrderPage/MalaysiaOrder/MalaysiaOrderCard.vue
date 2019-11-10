<template>
  <div class="pricing-detail-card mx-3 mb-10 py-4">
    <EcoTopViewImage v-if="cardTitle==='eco'"/>
    <GoldTopViewImage v-if="cardTitle==='gold'"/>
    <MalaysiaOrderControl :card-title="cardTitle" @show-modal="showModal" :region-type="regionType"/>
    <OrderModal :card-title="cardTitle" :order-type="orderType" :region-type="regionType" title-modal="Order Confirmation" desc-modal="Order Details" />
  </div>
</template>

<script>
import EcoTopViewImage from '@/components/OrderPage/general/EcoTopViewImage'
import GoldTopViewImage from '@/components/OrderPage/general/GoldTopViewImage'
import MalaysiaOrderControl from '@/components/OrderPage/MalaysiaOrder/MalaysiaOrderControl'
import OrderModal from '@/components/OrderPage/general/OrderModal'

export default {
  name: 'MalaysiaOrderCard',
  data () {
    return {
      orderType: ''
    }
  },
  props: [
    'cardTitle',
    'regionType'
  ],
  components: {
    EcoTopViewImage,
    GoldTopViewImage,
    MalaysiaOrderControl,
    OrderModal
  },
  methods: {
    showModal (type) {
      this.orderType = type
    }
  },
  created () {
    this.$store.commit('formOrder/RESET_ORDERS')
  }
}
</script>

<style scoped>
.pricing-detail-card {
  border-radius: 10px;
  border: solid 1px #ffca65;
  background-color: var(--black);
}
</style>
