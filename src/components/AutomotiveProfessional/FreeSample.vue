<i18n>
{
  "en": {
    "Get": "Get",
    "FREE": "FREE",
    "Sample": "Sample",
    "Content": "If you want to see the result of how great is our product, you can request free sample before you even buying.",
    "buttonText": "Request Now"
  },
  "my": {
    "Get": "Dapatkan Sampel ",
    "FREE": "PERCUMA",
    "Sample": " ",
    "Content": "Sekiranya anda ingin melihat kehandalan produk kami, anda boleh meminta sampel percuma sebelum membeli.",
    "buttonText": "Dapatkan Sekarang"
  },
  "cn": {
    "Get": "获取免费样品",
    "FREE": " ",
    "Sample": " ",
    "Content": "如果您想查看我们的产品有多优秀，您可以在购买产品之前申请免费样品。",
    "buttonText": "即刻申请"
  }
}
</i18n>

<template>
  <div class="container pb-5">
    <div class="row border mask">
      <div class="col-sm-9 text-left pl-5 pt-3 pb-2">
        <h5 class="free-title"><span class="text-orange">{{ $t('Get') }}</span>
        <span class="text-fire"> {{ $t('FREE') }} </span> <span class="text-orange">{{ $t('Sample') }}</span></h5>
        <p class="free-text text-white">
          {{ $t('Content') }}
        </p>
      </div>
      <div class="col-sm-3 request-btn">
        <button class="Join-Now btn-orange" data-toggle="modal" :data-target="'#try-free-sample-modal'">
          {{ $t('buttonText') }}
        </button>
      </div>
    </div>
    <OrderModal card-title="try" order-type="free" region-type="sample" title-modal="Free Sample Confirmation" desc-modal="Free Sample Requirements" :note="note" :isfree="isfree" />
  </div>
</template>

<script>
import OrderModal from '@/components/OrderPage/general/OrderModal'
export default {
  name: 'FreeSample',
  props: ['note', 'isfree'],
  components: {
    OrderModal
  }
}
</script>

<style scoped>
.text-fire {
  color: #f53020;
}
.mask {
  border-radius: 30px;
  border: solid 1px #ffca65 !important;
  background-color: rgba(245, 130, 32, 0.2);
}
.free-title {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f58220;
}
.free-text {
  font-size: 20px;
}
.Join-Now {
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.request-btn {
  display: flex;
  align-items: center;
}
.btn-orange {
  width: 220px;
  height: 40px;
  border-radius: 5px;
  border-color: #f58220;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to left, #f58220, #f58220);
}
.btn-orange-lg {
  width: 255px;
  height: 70px;
  border-radius: 5px;
  border-color: #f58220;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  background-image: linear-gradient(to left, #f58220, #f58220);
}
.text-orange {
  color: #f58220;
}
</style>
