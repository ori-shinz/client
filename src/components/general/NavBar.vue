<i18n>
{
  "en": {
    "Order Now": "Order Now",
    "Automotive Professional": "Automotive Professional",
    "About Us": "About Us",
    "Product Detail": "Product Detail",
    "Enquiry & Contact": "Enquiry & Contact",
    "Agent/ Distributor/ Oem": "Agent/ Distributor/ Oem",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    "Order": "Order"
  },
  "my": {
    "Order Now": "Pesan Sekarang",
    "Automotive Professional": "Profesional Automotif",
    "About Us": "Mengenai Kami",
    "Product Detail": "Butiran Produk",
    "Enquiry & Contact": "Pertanyaan & Perhubungan",
    "Agent/ Distributor/ Oem": "Agen / Pengedar / OEM",
    "Privacy Policy": "Dasar Privasi",
    "Terms of Service": "Syarat Perkhidmatan",
    "Order": "Pesanan"
  },
  "cn": {
    "Order Now": "即刻订购",
    "Automotive Professional": "汽车专业",
    "About Us": "关于我们",
    "Product Detail": "产品详情",
    "Enquiry & Contact": "咨询 & 联系",
    "Agent/ Distributor/ Oem": "代理商 / 经销商 / OEM",
    "Privacy Policy": "隐私政策",
    "Terms of Service": "服务条款",
    "Order": "订购"
  }
}
</i18n>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <!-- SIDE BAR / ROUTING -->
    <SideBar></SideBar>

    <!-- DIV LEFT -->
    <div class="collapse navbar-collapse" id="nav-left" style="flex-basis: 100%">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">
            <img src="~@/assets/images/icons/burger.svg" alt="burger" @click="openNav()">
          </a>
        </li>
        <!-- DROPDOWN -->
        <li class="nav-item" style="margin-right: 20px">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown">
              <img :src="flagActive" alt="flag">
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" type="button" @click="changeLocale('en')">
                <img :src="flags.en" alt="flag-en"> English
              </button>
              <button class="dropdown-item" type="button" @click="changeLocale('my')">
                <img :src="flags.my" alt="flag-my"> Bahasa Malaysia
              </button>
              <button class="dropdown-item" type="button" @click="changeLocale('cn')">
                <img :src="flags.cn" alt="flag-cn"> 简体
              </button>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <span class="page-name">{{ $t(page) }}</span>
        </li>
      </ul>
    </div>

    <!-- DIV LOGO -->
    <router-link to="/" class="navbar-brand mx-auto">
      <div id="logo"><img src="~@/assets/images/newassets/orishine-logo.png" alt="orishine"></div>
    </router-link>

    <!-- DIV RIGHT -->
    <div class="collapse navbar-collapse" id="nav-right" style="flex-basis: 100%">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://www.facebook.com/ORISHINZsnowwashshampoo/" target="_blank"><img src="~@/assets/images/icons/fb.svg" alt="fb" style="border-radius: 7px"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/orishinzsnowwashshampoo/?hl=id" target="_blank"><img src="~@/assets/images/icons/ig.svg" alt="ig" style="border-radius: 14px"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">
            <button type="button" class="Rectangle btn" @click="$router.push('/order')">
              {{ $t('Order Now') }}
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import SideBar from '@/components/general/SideBar.vue'
import enFlag from '@/assets/images/flag-en.png'
import myFlag from '@/assets/images/flag-my.png'
import cnFlag from '@/assets/images/flag-cn.png'

import i18n from '@/i18n'

export default {
  name: 'NavBar',
  components: {
    SideBar
  },
  data () {
    return {
      page: '',
      flagActive: enFlag,
      flags: {
        en: enFlag,
        my: myFlag,
        cn: cnFlag
      }
    }
  },
  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '400px'
    },
    changeLocale (locale) {
      i18n.locale = locale
      switch (locale) {
        case 'en': this.flagActive = this.flags.en; break
        case 'my': this.flagActive = this.flags.my; break
        case 'cn': this.flagActive = this.flags.cn; break
        default: this.flagActive = this.flags.en; break
      }

      let routeName = this.$route.path.slice(4)
      // console.log(routeName)
      this.$router.push(`/${locale}/${routeName}`)
    }
  },
  created () {
    this.page = this.$route.name

    switch (i18n.locale) {
      case 'en': this.flagActive = this.flags.en; break
      case 'my': this.flagActive = this.flags.my; break
      case 'cn': this.flagActive = this.flags.cn; break
      default: this.flagActive = this.flags.en; break
    }
  }
}
</script>

<style scoped>
nav {
  padding: 60px
}
.navbar-light .navbar-nav .nav-link{
  padding-right: 25px;
}
.nav-item{
  display: flex;
  align-items: center;
}
.page-name {
  font-family: GoogleSans;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
}
.Rectangle {
  width: 220px;
  height: 40px;
  border-radius: 5px;
  background-image: linear-gradient(to left, #ffca65, #f58220);
  font-size: 20px;
  font-weight: bold;
  color: #0e1737;
}
.dropdown-menu {
  border-radius: 5px;
  border: solid 1px #ffca65;
  background-color: black;
}
.dropdown-item {
  color: #ffffff;
}
.dropdown-item:hover {
  background-color: #f58220;
}
</style>
