<i18n>
{
  "en": {
    "bottomCardLeft": {
      "title": "Key Benefits for Automotive Professional",
      "content": "Save More Costs & Get More Business",
      "buttonText": "See Product Details"
    },
    "bottomCardRight": {
      "title": "Become Our Agent /Distributor / OEM",
      "content": "Be Your Own Boss",
      "buttonText": "Join Now"
    }
  },
  "my": {
    "bottomCardLeft": {
      "title": "Faedah Utama kepada Profesional Automotif",
      "content": "Menjimatkan Lebih Kos & Mendapatkan Lebih Banyak Pelanggan",
      "buttonText": "Lihat Butiran Produk"
    },
    "bottomCardRight": {
      "title": "Menjadi Agen / Pengedar Kami / OEM",
      "content": "Jadilah Boss Anda Sendiri <br><br>",
      "buttonText": "Sertai Sekarang"
    }
  },
  "cn": {
    "bottomCardLeft": {
      "title": "汽车专业可享有 <br> 的主要优点",
      "content": "节省更多成本 & 获得更多生意",
      "buttonText": "查看产品详情"
    },
    "bottomCardRight": {
      "title": "成为我们的代理商 / <br> 经销商 / OEM",
      "content": "自己当老板",
      "buttonText": "即刻加入"
    }
  }
}
</i18n>

<template>
  <div style="background-color: black">
    <MainBoard :bucket-img="bucketImg"/>
    <!-- free sample component -->
    <section id="free-sample">
      <FreeSample />
    </section>
    <!-- why choose us component -->
    <div class="bg-wrapper">
      <div class="container">
        <section id="key-benefit">
          <div class="container mbc-lg-200">
            <!-- why choose us -->
            <!-- key benefits -->
            <KeyBenefits />
          </div>
        </section>

        <section id="video-tutorial">
          <VideoTutorialPlayer />
          <VideoTutorialStep />
        </section>
      </div>
    </div>
    <!-- bottom sample component -->
    <section id="bottom">
      <div class="container pb-5">
        <div class="row mb-5 d-flex justify-content-between">
          <BottomCard
            :title="$t('bottomCardLeft.title')"
            :content="$t('bottomCardLeft.content')"
            :buttonText="$t('bottomCardLeft.buttonText')"
          />
          <BottomCard
            :title="$t('bottomCardRight.title')"
            :content="$t('bottomCardRight.content')"
            :buttonText="$t('bottomCardRight.buttonText')"
          />
        </div>
        <BottomCarShine />
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import MainBoard from '@/components/general/MainBoard'
import FreeSample from '@/components/AutomotiveProfessional/FreeSample'
import BottomCarShine from '@/components/AutomotiveProfessional/BottomCarShine'
import VideoTutorialPlayer from '@/components/ProductDetail/VideoTutorial/VideoTutorialPlayer'
import VideoTutorialStep from '@/components/ProductDetail/VideoTutorial/VideoTutorialStep'
import BottomCard from '@/components/general/BottomCard'
import Footer from '@/components/general/Footer'
import KeyBenefits from '@/components/AutomotiveProfessional/KeyBenefits'

export default {
  name: 'ProductDetail',
  data () {
    return {
      bucketImg: 'text'
    }
  },
  components: {
    MainBoard,
    FreeSample,
    KeyBenefits,
    VideoTutorialPlayer,
    VideoTutorialStep,
    BottomCard,
    BottomCarShine,
    Footer
  }
}
</script>

<style scoped>
#main-board {
  background-image: url('~@/assets/images/backgrounds/bg-automotive-professional.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
#free-sample {
  background-color: black;
}
.bg-wrapper {
  background-image: url('~@/assets/images/newassets/group-13-copy.png')
}
</style>
