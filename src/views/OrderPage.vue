<i18n>
{
  "en": {
    "Pricing Details": "Pricing Details",
    "Please Select Region:": "Please Select Region:",
    "West Malaysia": "West Malaysia",
    "East Malaysia": "East Malaysia",
    "Outside Malaysia": "Outside Malaysia"
  },
  "my": {
    "Pricing Details": "Butiran Harga",
    "Please Select Region:": "Sila Pilih Kawasan:",
    "West Malaysia": "Semenanjung Malaysia ",
    "East Malaysia": "Sabah & Sarawak ",
    "Outside Malaysia": "Luar Malaysia"
  },
  "cn": {
    "Pricing Details": "价格细节",
    "Please Select Region:": "请选择地区:",
    "West Malaysia": "西马",
    "East Malaysia": "东马 (沙巴 & 砂拉越)",
    "Outside Malaysia": "马来西亚以外"
  }
}
</i18n>

<template>
  <div style="background-color: black">
    <MainBoard :bucket-img="bucketImg"/>
    <div class="bg-wrapper">
      <section id="choosing-benefits">
        <ChoosingBenefits />
      </section>
      <section id="pricing-details">
        <div class="container-fluid">

          <Heading>{{ $t('Pricing Details') }}</Heading>

          <!-- Select Region to Show Detail Price -->
          <div class="row mb-10 pricing-detail-card mx-3 py-4 justify-content-center">
            <div class="col-sm-3 region-select">{{ $t('Please Select Region:') }}</div>
            <div class="col-sm-6 region-list text-left">
              <span class="region-item pr-2" @click="changeRegion('westMalaysia')" :class="region === 'westMalaysia' ? 'text-orange' : null">
                {{ $t('West Malaysia') }}
              </span> |
              <span class="region-item px-2" @click="changeRegion('eastMalaysia')" :class="region === 'eastMalaysia' ? 'text-orange' : null">
                {{ $t('East Malaysia') }}
              </span> |
              <span class="region-item px-2" @click="changeRegion('outsideMalaysia')" :class="region === 'outsideMalaysia' ? 'text-orange' : null">
                {{ $t('Outside Malaysia') }}
              </span>
            </div>
          </div>

          <!-- West Malaysia Detail Pricing -->
          <Fragment >
            <div v-if="region === 'westMalaysia'">
              <!-- <WestMalaysiaOrderCard :card-title="'eco'"/>
              <WestMalaysiaOrderCard :card-title="'gold'"/> -->
              <MalaysiaOrderCard :card-title="'eco'" :region-type="'west'"/>
              <MalaysiaOrderCard :card-title="'gold'" :region-type="'west'" />
            </div>
            <div v-else-if="region === 'eastMalaysia'">
              <!-- <WestMalaysiaOrderCard :card-title="'eco'"/>
              <WestMalaysiaOrderCard :card-title="'gold'"/> -->
              <MalaysiaOrderCard :card-title="'eco'" :region-type="'east'"/>
              <MalaysiaOrderCard :card-title="'gold'" :region-type="'east'" />
            </div>
            <div v-else-if="region === 'outsideMalaysia'">
              <OutsideMalaysiaOrderCard :card-title="'eco'"/>
              <OutsideMalaysiaOrderCard :card-title="'gold'"/>
            </div>
          </Fragment>

          <!-- Outside Malaysia Detail Pricing -->
          <Fragment >

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
import OutsideMalaysiaOrderCard from '@/components/OrderPage/OutsideMalaysiaOrder/OutsideMalaysiaOrderCard'
import MalaysiaOrderCard from '../components/OrderPage/MalaysiaOrder/MalaysiaOrderCard'
import Heading from '@/components/general/Heading'
import CardBecomeAgent from '@/components/AutomotiveProfessional/CardBecomeAgent'
import Footer from '@/components/general/Footer'

export default {
  name: 'OrderPage',
  data () {
    return {
      bucketImg: 'no-text',
      region: 'westMalaysia'
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
    MalaysiaOrderCard,
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
.text-orange {
  color: #ffca65;
}
#main-board {
  background-image: url('~@/assets/images/backgrounds/bg-automotive-professional.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
#free-sample {
  background-color: black;
}
.bg-wrapper {
  background-image: url('~@/assets/images/newassets/group-13-copy.png')
}
</style>
