<i18n>
{
  "en": {
    "qrcode": "WeChat QR Code"
  },
  "my": {
    "qrcode": "Kod QR WeChat"
  },
  "cn": {
    "qrcode": "微信二维码"
  }
}
</i18n>

<template>
  <div class="pb-5 mx-5">
    <div class="row">
      <div class="col-sm-3 mb-5">
        <img src="~@/assets/images/icons/cont1.svg" class="img-fluid mb-5">
        <div class="free-content">
          <a href="https://wa.me/60124744888">+60 12 4744 888</a><br>
          <a href="https://wa.me/60138678626">+60 13 8678 626</a>
        </div>
      </div>
      <div class="col-sm-3">
        <img src="~@/assets/images/icons/cont2.svg" class="img-fluid mb-5">
        <div class="free-content">
          <a href="tel:60-4-4582-888">+60 4 4582 888</a>
        </div>
      </div>
      <div class="col-sm-3">
        <img src="~@/assets/images/icons/cont3.svg" class="img-fluid mb-5">
        <div class="free-content">
          <a href="mailto:enquiry@orishinz.com?Subject=Hello" target="_top">enquiry@orishinz.com</a>
        </div>
      </div>
      <div class="col-sm-3">
        <img src="~@/assets/images/icons/cont4.png" class="img-fluid mb-5">
        <div class="free-content">{{ $t('qrcode') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  color: #ffca65;
}

a:hover {
  color: white;
  cursor: pointer;
}

.free-content {
  width: 270px;
  height: 32px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  color: #ffca65;
}
</style>
