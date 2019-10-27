<template>
  <div class="row justify-content-center my-5 mx-3">
    <div class="col-lg-3 region-select">
      <img src="~@/assets/images/newassets/gold-topview.png" alt="gold-topview" class="img-fluid">
    </div>
    <div class="col-lg-5 region-list text-left d-flex flex-column justify-content-center">
      <img src="~@/assets/images/newassets/gold-logo.png" style="max-width:264px !important" height="auto" alt="eco-logo" class="mb-2">
      <img src="~@/assets/images/newassets/text-gold.png" style="max-width:500px !important" height="auto" class="mb-2"  alt="text-eco">
      <p class="top-view-text">*On Average</p>
      <p class="top-view-text"> Weight / Drum : 2.7 KG </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoldTopViewImage'
}
</script>

<style scoped>
.top-view-text {
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
</style>
