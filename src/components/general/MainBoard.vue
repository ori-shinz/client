<i18n>
{
  "en": {
    "heading": "Snow Wash Shampoo for <br> Automotive Professional Use"
  },
  "my": {
    "heading": "Syampu Snow Wash untuk <br> Penggunaan Profesional Automotif"
  },
  "cn": {
    "heading": "雪花洗车粉 <br> 适于汽车专业使用"
  }
}
</i18n>

<template>
  <section id="main-board">
    <Navbar />
    <div class="container pb-3">
      <!-- Snow wash shampoo text -->
      <Heading :message="$t('heading')"></Heading>

      <!-- Bucket Image -->
      <DoubleBucket :bucket-img="bucketImg"/>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/general/NavBar'
import Heading from '@/components/general/Heading'
import DoubleBucket from '@/components/general/DoubleBucket'

export default {
  name: 'MainBoard',
  props: [
    'bucketImg'
  ],
  components: {
    Navbar, Heading, DoubleBucket
  }
}
</script>

<style>

</style>
