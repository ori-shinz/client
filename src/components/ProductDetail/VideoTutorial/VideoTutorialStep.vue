<template>
  <Fragment>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step1.svg" alt="step-1" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">Step 1</h3>
        <p
          class="step-text-md"
        >Add ORI-SHINZ ECO / GOLD into a pail of water as instructed below. Important usage instruction:</p>
        <TutorialTable />
        <p
          class="step-note"
        >Note: You may add more ORI-SHINZ ECO / GOLD for more foam. For other sizes of snow wash tank/machine, you may adjust the usage and dilution ratio of ORI-SHINZ ECO / GOLD that are suitable for you.</p>
      </div>
    </div>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step2.svg" alt="step-2" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">Step 2</h3>
        <p
          class="step-text-md"
        >Stir ORI-SHINZ ECO / GOLD and water mixture until ORI-SHINZ ECO / GOLD is fully dissolved in the water.</p>
        <p
          class="step-note"
        >Note: Please make sure that ORI-SHINZ ECO / GOLD is fully dissolved in the water to avoid blockage in the shampoo delivery pipe of snow wash tank/machine.</p>
        <p
          class="step-note"
        >Do not mix ORI-SHINZ ECO / GOLD with other shampoos/chemicals to avoid spoiling of ORI-SHINZ ECO / GOLD quality.</p>
      </div>
    </div>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step3.svg" alt="step-4" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">Step 3</h3>
        <p
          class="step-text-md"
        >Pour the fully dissolved mixture into snow wash tank and fill the tank with water until it is full.</p>
      </div>
    </div>
    <div class="row justify-content-center mbc-lg-80">
      <div class="col-sm-12 col-md-2">
        <img src="~@/assets/images/icons/step4.svg" alt="step-3" />
      </div>
      <div class="col-sm-12 col-md-7 d-flex flex-column text-left">
        <h3 class="step-title">Step 4</h3>
        <p class="step-text-md">Ready for use.</p>
      </div>
    </div>
    <div class="row justify-content-center mbc-lg-100 text-left">
      <div class="or-contain mx-auto">
          <p class="or-stir">
            <span class="content">OR:</span> <br/>
            STIR AND DISSOLVE A DRUM OF 2.5 KG ORI-SHINZ ECO / 2.7 KG ORI-SHINZ GOLD IN WATER. THEN, POUR INTO A 20-LITRE PLASTIC DRUM AND FILL THE DRUM WITH WATER UNTIL IT IS FULL. MIX 300ML TO 500ML MIXTURE WITH WATER FOR 60L – 80L SNOW WASH TANK.
          </p>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import TutorialTable from '@/components/ProductDetail/VideoTutorial/TutorialTable'

export default {
  name: 'VideoTutorialStep',
  components: {
    Fragment,
    TutorialTable
  }
}
</script>

<style scoped>
.step-title {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.step-text-md {
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}

.step-note {
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}

.or-contain {
  max-width: 936px;
}
.or-stir{
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}

.or-stir .content {
  font-size: 50px;
  color: #ffca65;
}
</style>
