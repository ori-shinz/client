<i18n>
{
  "en": {
    "title": "What Our Customers Say"
  },
  "my": {
    "title": "Apa yang Pelanggan-pelanggan Kami Cerita"
  },
  "cn": {
    "title": "我們客戶的评语"
  }
}
</i18n>

<template>
  <div>
    <div class="row justify-content-center moto mb-5">
      <div class="col-sm-12">
        <span>{{ $t('title') }}</span>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-12">
        <VueperSlides :infinite="false" :bullets="false" class="no-shadow" :visible-slides="3" :slide-ratio="1/4" slideMultiple autoplay>
          <v-icon slot="arrowLeft" large style="color: #ffca65"> ◀︎ </v-icon>
          <v-icon slot="arrowRight" large style="color: #ffca65"> ▶︎ </v-icon>
          <VueperSlide v-for="(slide, index) in slides" :key="index" :title="slide.link" :content="slide.content"></VueperSlide>
        </VueperSlides>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Customer',
  components: {
    VueperSlides,
    VueperSlide
  },
  data () {
    return {
      slides: [{
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Omar</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Cz</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Sam</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Omar</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Cz</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Sam</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Omar</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Cz</p>'
      }, {
        link: '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>',
        content: '<p style="color: white">Sam</p>'
      }]
    }
  }
}
</script>

<style scoped>
.moto {
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: #e7e7e7;
}
iframe {
  width: 360px;
  height: 190px;
}
.box {
  border-radius: 10px;
  border: solid 1px #ffca65;
  background-color: black;
}
</style>
