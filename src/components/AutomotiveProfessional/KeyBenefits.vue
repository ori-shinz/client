<template>
  <Fragment>
    <Heading>ORI-SHINZ Key Benefits</Heading>
    <!-- key list component -->
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-saves-costs.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">Saves Costs</p>
        <ul>
          <li class="benefit-content">In Powder form, saves shipping costs</li>
          <li class="benefit-content">Easy to ship with Global reach</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-perfect-shine.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">Perfect Shine</p>
        <ul>
          <li
            class="benefit-content"
          >Natural Shine results on car’s body, windscreen, rims, headlights, mirrors & windows</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-ultra-clean.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">Ultra Clean</p>
        <ul>
          <li
            class="benefit-content"
          >Easily removes toughest dirt, road grime, tar, grease, bugs & bird droppings</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-gentle-on-hands.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">Gentle on Hands & Car Paint</p>
        <ul>
          <li class="benefit-content">Protects car paint</li>
        </ul>
      </div>
    </div>
    <div class="row mb-5 justify-content-center">
      <div class="col-sm-3 text-left mb-5">
        <img
          src="~@/assets/images/icons/benefit-no-water-spot.svg"
          alt="benefit-saves-costs"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-7 text-left text-white">
        <p class="benefit-title">No Water Spots</p>
        <ul>
          <li class="benefit-content">Leaves no water spots on car</li>
        </ul>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Heading from '@/components/general/Heading'

export default {
  name: 'KeyBenefits',
  components: {
    Fragment,
    Heading
  }
}
</script>

<style scoped>
.benefit-title {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.benefit-content {
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
ul li::before {
  content: '\2022';
  color: #ffca65;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
