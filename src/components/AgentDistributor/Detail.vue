<i18n>
{
  "en": {
    "title": "Key Benefits for Automotive Professional",
    "content": "Save More Costs & Get More Business",
    "buttonText": "See Product Details"
  },
  "my": {
    "title": "Faedah Utama kepada Profesional Automotif",
    "content": "Menjimatkan Lebih Kos & Mendapatkan Lebih Banyak Pelanggan",
    "buttonText": "Lihat Butiran Produk"
  },
  "cn": {
    "title": "汽车专业可享有的主要优点",
    "content": "节省更多成本 & 获得更多生意",
    "buttonText": "查看产品详情"
  }
}
</i18n>

<template>
  <div class="container my-5">
    <div class="row border mask">
      <div class="col-sm-9 text-left pl-5 py-3 free-content">
        <div class="free-title">{{ $t('title') }}</div>
        <p class="free-text">{{ $t('content') }}</p>
      </div>
      <div class="col-sm-3 request-btn">
        <button class="Join-Now btn-orange" @click="$router.push(`/${$i18n.locale}/product-details`)">
          {{ $t('buttonText') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<style scoped>
.mask {
  width: 1240px;
  height: 186px;
  border-radius: 30px;
  border: solid 1px #ffca65;
  background-color: black;
  background-color: rgba(245, 130, 32, 0.2);
}
.free-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
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
  width: 362px;
  height: 25px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}

.request-btn {
  display: flex;
  align-items: center;
}

</style>
