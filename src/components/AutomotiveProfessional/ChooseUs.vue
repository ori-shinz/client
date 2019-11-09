<template>
  <div class="row">
    <div class="col-sm-12 text-left pl-5 pt-3 pb-2 text-white mx-auto text-center mbc-lg-112">
      <h2 class="why-choose">Why Choose ORI-SHINZ ?</h2>
    </div>
    <div class="col-sm-10 mx-auto mbc-lg-112">
      <img
        :src="image1"
        alt="top-notch-quality"
        class="why-choose-img"
      />
    </div>
    <div class="col-sm-10 mx-auto mbc-lg-112">
      <img
        :src="image2"
        alt="top-notch-quality"
        class="why-choose-img"
      />
    </div>
    <div class="col-sm-10 mx-auto mbc-lg-112">
      <img
        :src="image3"
        alt="top-notch-quality"
        class="why-choose-img"
      />
    </div>
  </div>
</template>

<script>
import image1en from '@/assets/images/combined/USP1-en.png'
import image2en from '@/assets/images/combined/USP2-en.png'
import image3en from '@/assets/images/combined/USP3-en.png'
import image1my from '@/assets/images/combined/USP1-my.png'
import image2my from '@/assets/images/combined/USP2-my.png'
import image3my from '@/assets/images/combined/USP3-my.png'
import image1cn from '@/assets/images/combined/USP1-cn.png'
import image2cn from '@/assets/images/combined/USP2-cn.png'
import image3cn from '@/assets/images/combined/USP3-cn.png'

export default {
  name: 'ChooseUs',
  data () {
    return {
      image1: image1en,
      image2: image2en,
      image3: image3en
    }
  },
  watch: {
    '$route' (pre, post) {
      const locale = this.$i18n.locale
      switch (locale) {
        case 'en': {
          this.image1 = image1en
          this.image2 = image2en
          this.image3 = image3en
          break
        }
        case 'my': {
          this.image1 = image1my
          this.image2 = image2my
          this.image3 = image3my
          break
        }
        case 'cn': {
          this.image1 = image1cn
          this.image2 = image2cn
          this.image3 = image3cn
          break
        }
      }
    }
  },
  created () {
    const locale = this.$i18n.locale
    switch (locale) {
      case 'en': {
        this.image1 = image1en
        this.image2 = image2en
        this.image3 = image3en
        break
      }
      case 'my': {
        this.image1 = image1my
        this.image2 = image2my
        this.image3 = image3my
        break
      }
      case 'cn': {
        this.image1 = image1cn
        this.image2 = image2cn
        this.image3 = image3cn
        break
      }
    }
  }
}
</script>

<style scoped>
  .why-choose {
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    font-size: 60px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #e7e7e7;
  }
  .why-choose-img {
    max-width: 100%;
    height: auto;
  }
</style>
