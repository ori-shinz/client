<template>
  <div class="container mbc-lg-150">
    <div class="row justify-content-around">
      <div class="col-sm-12 col-md-5 text-left flex-column">
        <p class="choosing-title">
          Why Choose ORI-SHINZ?
        </p>
        <ul>
          <li class="choosing-list">Top Notch Quality at Competitive Price</li>
          <li class="choosing-list">Saves Shipping Costs & Global Reach</li>
          <li class="choosing-list">100% Original Foam</li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-5 text-left flex-column">
        <p class="choosing-title">
          ORI-SHINZ Key Benefits
        </p>
        <ul>
          <li class="choosing-list">Saves Costs</li>
          <li class="choosing-list">Perfect Shine</li>
          <li class="choosing-list">Ultra Clean</li>
          <li class="choosing-list">Gentle on Hands & Car Paint</li>
          <li class="choosing-list">No Water Spots</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoosingBenefits'
}
</script>

<style scoped>
.choosing-title {
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.choosing-list {
  font-size: 24px;
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