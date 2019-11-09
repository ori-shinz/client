<i18n>
{
  "en": {
    "title": "Become Our Agent / Distributor / OEM",
    "desc": "Be your own Boss",
    "button": "Join Now"
  },
  "my": {
    "title": "Menjadi Agen / Pengedar Kami / OEM",
    "desc": "Jadilah Boss Anda Sendiri",
    "button": "Sertai Sekarang"
  },
  "cn": {
    "title": "成为我们的代理商 / 经销商 / OEM",
    "desc": "自己当老板",
    "button": "即刻加入"
  }
}
</i18n>

<template>
  <div class="row mask mb-5">
    <div class="col-sm-8 text-left pl-5 pt-3 pb-2">
      <p class="free-title text-orange">{{ $t('title') }}</p>
      <p class="free-text text-white">{{ $t('desc') }}</p>
    </div>
    <div class="col-sm-4 request-btn justify-content-center">
      <button class="Join-Now btn-orange" @click="$router.push(`/${$i18n.locale}/agent-distributor-oem`)">{{ $t('button') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBecomeAgent'
}
</script>

<style scoped>
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
</style>
