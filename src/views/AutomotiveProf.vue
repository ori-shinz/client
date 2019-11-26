<template>
  <div style="background-color: black">
    <MainBoard :bucket-img="bucketImg"/>
    <!-- free sample component -->
    <section id="free-sample">
      <FreeSample :note="true" />
    </section>
    <!-- why choose us component -->
    <section id="why-us">
      <div class="container">
        <!-- why choose us -->
        <ChooseUs />
        <!-- key benefits -->
        <KeyBenefits />
      </div>
    </section>
    <!-- bottom sample component -->
    <section id="bottom">
      <div class="container pb-3">
        <CardBecomeAgent />
        <BottomCarShine />
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import MainBoard from '@/components/general/MainBoard'
import FreeSample from '@/components/AutomotiveProfessional/FreeSample'
import ChooseUs from '@/components/AutomotiveProfessional/ChooseUs'
import BottomCarShine from '@/components/AutomotiveProfessional/BottomCarShine'
import CardBecomeAgent from '@/components/AutomotiveProfessional/CardBecomeAgent'
import Footer from '@/components/general/Footer'
import KeyBenefits from '@/components/AutomotiveProfessional/KeyBenefits'

export default {
  name: 'AutomotiveProf',
  data () {
    return {
      bucketImg: 'text'
    }
  },
  components: {
    MainBoard,
    FreeSample,
    ChooseUs,
    KeyBenefits,
    CardBecomeAgent,
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
.now-text {
  width: 82px;
  height: 25px;
  color: #ffffff;
}
#why-us {
  background-image: url('~@/assets/images/newassets/group-13-copy.png');
  background-repeat: no-repeat;
}
</style>
