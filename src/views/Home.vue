<i18n>
{
  "en": {
    "content": "Our commitment to quality defines us.<br><br>We have established since 1999 and have dedicated many years inventing and improving a unique and proprietary snow wash shampoo formula for Automotive Professional Use such as car wash centres, car detailers, second hand car dealers and car manufacturers.<br><br>In 1999, we made a humble beginning in the car wash products manufacturing arena. With our dedication, we have come out with a snow wash shampoo formula with top notch quality at competitive price, that made \"NOW EVERYCAR CAN SHINE\" possible today.<br><br>We tailor-make our products to Automotive Professionals' needs and distribute our products via various channels including OEM, authorised distributorship, car wash centres, car detailers, car care products and car accessories suppliers.<br><br>",
    "Enquiry & Contact": "Enquiry & Contact",
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
    "content": "Komitmen kami terhadap kualiti.<br><br>Kami telah ditubuhkan sejak tahun 1999 dan mendedikasikan bertahun-tahun mencipta dan membaikkan formula syampu snow wash yang unik dan eksklusif untuk Penggunaan Profesional Automotif seperti pusat cuci kereta, pengeteri kereta, pengedar kereta terpakai dan pengeluar kereta.<br><br>Pada tahun 1999, kami memulakan bidang pembuatan syampu cuci kereta. Dengan dedikasi kami, kami telah memperkenalkan syampu snow wash yang berkualiti handal pada harga yang kompetitif, menjadikan \"NOW EVERYCAR CAN SHINE\" mungkin hari ini.<br><br>Kami menyesuaikan produk kami mengikut keperluan Profesional Automotif dan mengedarkan produk kami melalui pelbagai saluran termasuk OEM, pengedar, pusat cuci kereta, pengeteri kereta, pembekal produk penjagaan kereta dan pembekal aksesori kereta.<br><br>",
    "Enquiry & Contact": "Pertanyaan & Perhubungan",
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
    "content": "我们对质量的承诺。<br><br>我们成立于1999年。我们多年来一直致力于发明和改进适于汽车专业如洗车中心，汽车细部设计中心，二手车经销商和汽车制造商使用独特专有的雪花洗车剂配方。<br><br>在1999年，我们开始加入了洗车产品制造领域。凭借我们不屈不饶的精神，我们成功推出了质量顶级和具竞争力价格的雪花洗车剂，创造了今天 \"NOW EVERYCAR CAN SHINE\" 的可能。<br><br>我们根据汽车专业的需求量身定制产品，并通过各种渠道分销我们的产品包括OEM，经销商，洗车中心，汽车保养中心，汽车护理产品供应商和汽车配件供应商。<br><br>",
    "Enquiry & Contact": "咨询 & 联系",
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
          <BottomCard
            :title="$t('bottomCardLeft.title')"
            :content="$t('bottomCardLeft.content')"
            :buttonText="$t('bottomCardLeft.buttonText')"
            @triggerroute="triggerroute"
          />
          <BottomCard
            :title="$t('bottomCardRight.title')"
            :content="$t('bottomCardRight.content')"
            :buttonText="$t('bottomCardRight.buttonText')"
            @triggerroute="triggerroute"
          />
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
  },
  methods: {
    triggerroute (page) {
      if (page === 'See Product Details') {
        this.$router.push(`/${this.$i18n.locale}/product-detail`)
      } else if (page === 'Join Now') {
        this.$router.push(`/${this.$i18n.locale}/agent-distributor-oem`)
      }
    }
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
