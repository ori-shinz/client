<i18n>
{
  "en": {
    "header": "Get in Touch with Us",
    "manufacture": "Manufactured in Malaysia by: <br>Diamond King (M) Sdn. Bhd. (472537-M)"
  },
  "my": {
    "header": "Hubungi Kami",
    "manufacture": "Dikilangkan di Malaysia oleh: <br>Diamond King (M) Sdn. Bhd. (472537-M)"
  },
  "cn": {
    "header": "与我们联系",
    "manufacture": "马来西亚生产厂家： <br>Diamond King (M) Sdn. Bhd. (472537-M)"
  }
}
</i18n>

<template>
  <div class="aboutus">
    <NavBar></NavBar>

    <section id="title" class="mbc-lg-100">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-12 boxcontent mb-5">
            <div class="header">
              {{ $t('header') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="form" class="mbc-lg-200">
      <FormEnquiry></FormEnquiry>
    </section>

    <section id="contact" class="mbc-lg-100">
      <Contact></Contact>
    </section>

    <section id="manufacture">
      <div class="container mb-5">
        <div class="row">
          <div class="col-sm-12">
            <img src="~@/assets/images/orishine-logo.svg" class="img-fluid mb-5" style="width: 413px; height: 86px;">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="free-content" v-html="$t('manufacture')"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <section id="bottom">
      <div class="container pb-5">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'
import FormEnquiry from '@/components/EnquiryContact/FormEnquiry.vue'
import Contact from '@/components/AgentDistributor/Contact.vue'
import Footer from '@/components/general/Footer'

export default {
  name: 'aboutus',
  components: {
    NavBar,
    FormEnquiry,
    Contact,
    Footer
  }
}
</script>

<style scoped>
.header {
  width: 1118px;
  height: 152px;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.7);
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  color: #e7e7e7;
}

.aboutus {
  background-image: url('~@/assets/images/backgrounds/bg-enquiry.png');
  background-size: 100%;
  background-repeat: no-repeat;
}

.free-content {
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  color: #e7e7e7;
}
</style>
