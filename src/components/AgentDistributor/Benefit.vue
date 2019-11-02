<i18n>
{
  "en": {
    "header": "Benefits for Agent / Distributor / OEM",
    "title1": "Make More Money",
    "content1": "Grab a chance to make more money",
    "title2": "Little Effort",
    "content2": "ORI-SHINZ does the talking",
    "title3": "Trusted Brand",
    "content3": "You want to represent a trusted brand like ORI-SHINZ"
  },
  "my": {
    "header": "Manfaat menjadi Agen / Pengedar / OEM",
    "title1": "Keuntungan Lumayan",
    "content1": "Ambil kesempatan mendapatkan keuntungan lumayan",
    "title2": "Usaha Sedikit",
    "content2": "ORI-SHINZ menampilkan kehandalan sendiri",
    "title3": "Jenama Dipercayai",
    "content3": "Anda mahu mewakili jenama yang dipercayai seperti ORI-SHINZ"
  },
  "cn": {
    "header": "成为代理商 / 经销商 / OEM 的好处",
    "title1": "赚钱的好机会",
    "content1": "争取一个赚钱 的好机会",
    "title2": "小小的努力",
    "content2": "ORI-SHINZ 展现 自己的优势",
    "title3": "值得信赖的品牌",
    "content3": "您想要代表像ORI-SHINZ 这样值得信赖的品牌"
  }
}
</i18n>

<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-sm-12 boxcontent mb-5">
        <div class="header">
          {{ $t('header') }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 mb-5 d-flex justify-content-center flex-column">
        <img src="~@/assets/images/icons/benefit-gentle-on-hands.svg" class="img-fluid mb-5">
        <div class="free-title">{{ $t('title1') }}</div>
        <div class="free-content">{{ $t('content1') }}</div>
      </div>
      <div class="col-sm-4">
        <img src="~@/assets/images/icons/benefit-no-water-spot.svg" class="img-fluid mb-5">
        <div class="free-title">{{ $t('title2') }}</div>
        <div class="free-content">{{ $t('content2') }}</div>
      </div>
      <div class="col-sm-4">
        <img src="~@/assets/images/icons/benefit-perfect-shine.svg" class="img-fluid mb-5">
        <div class="free-title">{{ $t('title3') }}</div>
        <div class="free-content">{{ $t('content3') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  width: 1118px;
  height: 152px;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.7);
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  color: #e7e7e7;
}

.free-title {
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: #ffca65;
}

.free-content {
  height: 96px;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  color: #e7e7e7;
}
</style>
