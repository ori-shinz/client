<template>
  <div class="aboutus">
    <NavBar></NavBar>

    <section id="title">
      <div class="container my-5">
        <div class="row my-5">
          <div class="col-sm-12 my-5">
            <Heading>Powered By ORI-SHINZ.<br>For Your Business To Shine.</Heading>
          </div>
        </div>
      </div>
    </section>

    <section id="content">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-12 boxcontent mb-5">
            <div class="content" v-html="content"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mb-5">
            <h1 class="why-choose text-left">Enquiry & Contact</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
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
import NavBar from '@/components/general/NavBar.vue'
import Heading from '@/components/general/Heading'
import BottomCard from '@/components/general/BottomCard'
import BottomCarShine from '@/components/AutomotiveProfessional/BottomCarShine'
import Footer from '@/components/general/Footer'

export default {
  name: 'aboutus',
  components: {
    NavBar,
    Heading,
    BottomCard,
    Footer,
    BottomCarShine
  },
  data () {
    return {
      content: `Our commitment to quality defines us.<br><br>
We have established since 1999 and have dedicated many years inventing and improving a unique and proprietary snow wash shampoo formula for Automotive Professional Use such as car wash centres, car detailers, second hand car dealers and car manufacturers.<br><br>
In 1999, we made a humble beginning in the car wash products manufacturing arena. With our dedication, we have come out with a snow wash shampoo formula with top notch quality at competitive price, that made "NOW EVERYCAR CAN SHINE" possible today.<br><br>
We tailor-make our products to Automotive Professionals' needs and distribute our products via various channels including OEM, authorised distributorship, car wash centres, car detailers, car care products and car accessories suppliers.<br><br>`
    }
  }
}
</script>

<style scoped>
.aboutus {
  background-image: url('~@/assets/images/backgrounds/bg-about.png');
  background-size: 100%;
  background-repeat: no-repeat;
}

.boxcontent {
  width: 1080px;
  height: 480px;
  font-size: 25px;
  font-weight: 500;
  text-align: justify;
  color: #e7e7e7;
}

#free-sample {
  background-color: black;
}
.content {
  margin: 0 auto;
  width: 1080px;
  height: 480px;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #e7e7e7;
}
.why-choose {
  margin: 0 auto;
  width: 1080px;
  height: 40px;
  font-size: 30px;
  font-weight: bold;
  color: #ffca65;
}
</style>
