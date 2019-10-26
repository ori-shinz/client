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
          <BottomCard />
          <BottomCard />
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
  background-image: url('~@/assets/images/backgrounds/bg-automotive-professional.jpg');
  background-size: 100% 105%;
}
#free-sample {
  background-color: black;
}
.bg-wrapper {
  background-image: url('~@/assets/images/newassets/group-13-copy.png')
}
</style>
