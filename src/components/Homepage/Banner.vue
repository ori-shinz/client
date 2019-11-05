<i18n>
{
  "en": {
    "title": "Shampo Wash Shampoo <br> for Automotive <br> Professional Use",
    "content": "Why Choose ORI-SHINZ? >>"
  },
  "my": {
    "title": "Syampu Snow Wash <br> untuk Penggunaan <br> Profesional Automotif",
    "content": "Kenapa Pilih ORI-SHINZ? >>"
  },
  "cn": {
    "title": "雪花洗车粉 <br> 适于汽车专业使用",
    "content": "为何选择 ORI-SHINZ? >>"
  }
}
</i18n>

<template>
  <div class="row justify-content-center mb-5">
    <div class="col-sm-6">
      <img src="~@/assets/images/newassets/group-6.png" class="img-fluid">
    </div>
    <div class="col-sm-6 align-self-end">
      <h1 class="text-white text-left moto mb-4" v-html="$t('title')"></h1>
      <h1 class="why-choose text-left">
        <router-link :to="`/${$i18n.locale}/automotive-professional`">{{ $t('content') }}</router-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage'
}
</script>

<style scoped>
.banner {
  height: 600px;
  width: 600px;
  background-color: aqua;
}
.moto {
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 50px;
  font-weight: bold;
  color: #e7e7e7;
  margin: 0 auto;
}
.why-choose {
  font-size: 30px;
  font-weight: bold;
  color: #ffca65;
}
a {
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: #F1823B
}
a:hover {
  color: #ffca65;
}
</style>
