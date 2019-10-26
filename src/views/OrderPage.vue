<template>
  <div style="background-color: black">
    <MainBoard :bucket-img="bucketImg"/>
    <div class="bg-wrapper">
      <section id="choosing-benefits">
        <ChoosingBenefits />
      </section>
      <section id="pricing-details">
        <div class="container-fluid">
          <Heading>Pricing Details</Heading>
          <div class="row mb-10 pricing-detail-card mx-3 py-4 justify-content-center">
            <div class="col-sm-3 region-select">Please Select Region:</div>
            <div class="col-sm-6 region-list text-left">
              <span class="region-item pr-2" @click="changeRegion('westMalaysia')">
                West Malaysia
              </span> |
              <span class="region-item px-2" @click="changeRegion('eastMalaysia')">
                East Malaysia
              </span> |
              <span class="region-item px-2" @click="changeRegion('outsideMalaysia')">
                Outside Malaysia
              </span>
            </div>
          </div>
          <!-- West Malaysia Detail Pricing -->
          <Fragment v-if="region === 'westMalaysia'">
            <WestMalaysiaOrderCard :card-title="'eco'"/>
            <WestMalaysiaOrderCard :card-title="'gold'"/>
          </Fragment>
          <!-- Outside Malaysia Detail Pricing -->
          <Fragment v-if="region === 'outsideMalaysia'">
            <OutsideMalaysiaOrderCard :card-title="'eco'"/>
            <OutsideMalaysiaOrderCard :card-title="'gold'"/>
          </Fragment>
        </div>
      </section>
      <!-- bottom sample component -->
      <section id="bottom">
        <div class="container pb-5">
          <CardBecomeAgent />
          <Footer />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MainBoard from '@/components/general/MainBoard'
import ChoosingBenefits from '@/components/OrderPage/ChoosingBenefits'
import { Fragment } from 'vue-fragment'
import WestMalaysiaOrderCard from '@/components/OrderPage/WestMalaysiaOrder/WestMalaysiaOrderCard'
import OutsideMalaysiaOrderCard from '@/components/OrderPage/OutsideMalaysiaOrder/OutsideMalaysiaOrderCard'
import Heading from '@/components/general/Heading'
import CardBecomeAgent from '@/components/AutomotiveProfessional/CardBecomeAgent'
import Footer from '@/components/general/Footer'

export default {
  name: 'OrderPage',
  data () {
    return {
      bucketImg: 'no-text',
      region: ''
    }
  },
  methods: {
    changeRegion (region) {
      this.region = region
    }
  },
  components: {
    MainBoard,
    OutsideMalaysiaOrderCard,
    WestMalaysiaOrderCard,
    ChoosingBenefits,
    Fragment,
    Heading,
    CardBecomeAgent,
    Footer
  }
}
</script>

<style>
.region-select {
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
.region-item {
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.region-item:hover {
  color: #ffca65;
  cursor: pointer;
}
.region-list {
  font-size: 25px;
  font-weight: bold;
  color: #e7e7e7;
}
</style>
<style scoped>
#main-board {
  background-image: url('~@/assets/images/backgrounds/bg-automotive-professional.jpg');
  background-size: 100% 105%;
}
#free-sample {
  background-color: black;
}
.bg-wrapper {
  background-image: url('~@/assets/images/newassets/group-13-copy.png')
}
</style>
