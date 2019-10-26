<template>
  <div class="pricing-detail-card mx-3 mb-10 py-4">
    <EcoTopViewImage v-if="cardTitle==='eco'"/>
    <GoldTopViewImage v-if="cardTitle==='gold'"/>
    <OutsideMalaysiaOrderControl />
  </div>
</template>

<script>
import EcoTopViewImage from '@/components/OrderPage/general/EcoTopViewImage'
import GoldTopViewImage from '@/components/OrderPage/general/GoldTopViewImage'
import OutsideMalaysiaOrderControl from '@/components/OrderPage/OutsideMalaysiaOrder/OutsideMalaysiaOrderControl'

export default {
  name: 'OutsideMalaysiaOrderCard',
  props: [
    'cardTitle'
  ],
  components: {
    EcoTopViewImage,
    GoldTopViewImage,
    OutsideMalaysiaOrderControl
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
