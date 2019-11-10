<i18n>
{
  "en": {
    "On Average": "On Average",
    "desc": "Weight / Drum : 2.5 KG"
  },
  "my": {
    "On Average": "Anggaran",
    "desc": "Berat / Dram : 2.5 KG"
  },
  "cn": {
    "On Average": "大约",
    "desc": "重量 / 桶 : 2.5 公斤"
  }
}
</i18n>

<template>
  <div class="row justify-content-center my-5 mx-3">
    <div class="col-lg-3 region-select">
      <img src="~@/assets/images/newassets/eco-topview.png" alt="eco-topview" class="img-fluid">
    </div>
    <div class="col-lg-5 region-list text-left d-flex flex-column justify-content-center">
      <img src="~@/assets/images/newassets/eco-logo.png" style="max-width:264px !important" height="auto" alt="eco-logo" class="mb-2">
      <img src="~@/assets/images/newassets/text-eco.png" style="max-width:500px !important" height="auto" class="mb-2"  alt="text-eco">
      <p class="top-view-text">*{{ $t('On Average') }}</p>
      <p class="top-view-text">{{ $t('desc') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcoTopViewImage'
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
