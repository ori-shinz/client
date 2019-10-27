<template>
  <div class="home">
    <NavBar></NavBar>

    <section id="banner">
      <div class="container pb-5" style="padding-top: 280px;">
        <Banner></Banner>
      </div>
    </section>

    <section id="freeSample">
      <FreeSample></FreeSample>
    </section>

    <section id="gallery">
      <div class="container pb-5" style="margin-top: -180px;">
        <Gallery></Gallery>
      </div>
    </section>

    <section id="customer">
      <div class="container pb-5">
        <Customer></Customer>
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
import Banner from '@/components/Homepage/Banner.vue'
import FreeSample from '@/components/AutomotiveProfessional/FreeSample'
import Gallery from '@/components/Homepage/Gallery.vue'
import Customer from '@/components/Homepage/Customer.vue'
import BottomCard from '@/components/general/BottomCard'
import BottomCarShine from '@/components/AutomotiveProfessional/BottomCarShine'
import Footer from '@/components/general/Footer'

export default {
  name: 'home',
  components: {
    NavBar,
    Banner,
    FreeSample,
    Gallery,
    Customer,
    BottomCard,
    Footer,
    BottomCarShine
  }
}
</script>

<style scoped>
.home {
  background-image: url('~@/assets/images/backgrounds/bg-homepage.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
#free-sample {
  background-color: black;
}

</style>
