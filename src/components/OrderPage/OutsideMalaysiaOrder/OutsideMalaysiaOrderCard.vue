<template>
  <div class="pricing-detail-card mx-3 mb-10 py-4">
    <EcoTopViewImage v-if="cardTitle==='eco'"/>
    <GoldTopViewImage v-if="cardTitle==='gold'"/>
    <OutsideMalaysiaOrderControl :card-title="cardTitle" @show-modal="showModal"/>
    <OrderModal :card-title="cardTitle" :order-type="orderType" :region-type="'outside'"/>
  </div>
</template>

<script>
import OrderModal from '@/components/OrderPage/general/OrderModal'
import EcoTopViewImage from '@/components/OrderPage/general/EcoTopViewImage'
import GoldTopViewImage from '@/components/OrderPage/general/GoldTopViewImage'
import OutsideMalaysiaOrderControl from '@/components/OrderPage/OutsideMalaysiaOrder/OutsideMalaysiaOrderControl'

export default {
  name: 'OutsideMalaysiaOrderCard',
  props: [
    'cardTitle'
  ],
  components: {
    OrderModal,
    EcoTopViewImage,
    GoldTopViewImage,
    OutsideMalaysiaOrderControl
  },
  data () {
    return {
      orderType: ''
    }
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
