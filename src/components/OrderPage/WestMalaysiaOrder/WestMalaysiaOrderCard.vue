<template>
  <div class="pricing-detail-card mx-3 mb-10 py-4">
    <EcoTopViewImage v-if="cardTitle==='eco'"/>
    <GoldTopViewImage v-if="cardTitle==='gold'"/>
    <WestMalaysiaOrderControl />
  </div>
</template>

<script>
import EcoTopViewImage from '@/components/OrderPage/general/EcoTopViewImage'
import GoldTopViewImage from '@/components/OrderPage/general/GoldTopViewImage'
import WestMalaysiaOrderControl from '@/components/OrderPage/WestMalaysiaOrder/WestMalaysiaOrderControl'

export default {
  name: 'WestMalaysiaOrderCard',
  props: [
    'cardTitle'
  ],
  components: {
    EcoTopViewImage,
    GoldTopViewImage,
    WestMalaysiaOrderControl
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
