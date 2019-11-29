<i18n>
{
  "en": {
    "mainPage": "Main Page",
    "automotiveProfessional": "Automotive Professional",
    "productDetails": "Product Details",
    "order": "Order",
    "agentDistributorOEM": "Agent / Distributor / OEM",
    "aboutUs": "About Us",
    "enquiryContact": "Enquiry & Contact",
    "privacyPolicy": "Privacy Policy",
    "termsofService": "Terms of Service"
  },
  "my": {
    "mainPage": "Laman Utama",
    "automotiveProfessional": "Profesional Automotif",
    "productDetails": "Butiran Produk",
    "order": "Pesanan",
    "agentDistributorOEM": "Agen / Pengedar / OEM",
    "aboutUs": "Mengenai Kami",
    "enquiryContact": "Pertanyaan & Perhubungan",
    "privacyPolicy": "Dasar Privasi",
    "termsofService": "Syarat Perkhidmatan"
  },
  "cn": {
    "mainPage": "首页",
    "automotiveProfessional": "汽车专业",
    "productDetails": "产品详情",
    "order": "订购",
    "agentDistributorOEM": "代理商 / 经销商 / OEM",
    "aboutUs": "关于我们",
    "enquiryContact": "咨询 & 联系",
    "privacyPolicy": "隐私政策",
    "termsofService": "服务条款"
  }
}
</i18n>

<template>
  <div id="mySidenav" class="sidenav">
    <div>
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <router-link :to="`/${$i18n.locale}`">{{ $t('mainPage') }}</router-link>
      <router-link :to="`/${$i18n.locale}/automotive-professional`">{{ $t('automotiveProfessional') }}</router-link>
      <router-link :to="`/${$i18n.locale}/product-details`">{{ $t('productDetails') }}</router-link>
      <router-link :to="`/${$i18n.locale}/order`">{{ $t('order') }}</router-link>
      <router-link :to="`/${$i18n.locale}/agent-distributor-oem`">{{ $t('agentDistributorOEM') }}</router-link>
      <router-link :to="`/${$i18n.locale}/about-us`">{{ $t('aboutUs') }}</router-link>
      <router-link :to="`/${$i18n.locale}/enquiry-and-contact`">{{ $t('enquiryContact') }}</router-link>
    </div>
    <div>
      <router-link :to="`/${$i18n.locale}/privacy-policy`">{{ $t('privacyPolicy') }}</router-link>
      <router-link :to="`/${$i18n.locale}/terms-of-service`">{{ $t('termsofService') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
    }
  }
}
</script>

<style scoped>
.sidenav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
/* The navigation menu links */
.sidenav a {
  padding-bottom: 30px;
  padding-left: 60px;
  text-align: left;
  text-decoration: none;
  font-size: 20px;
  color: #e7e7e7;
  display: block;
  transition: 0.3s;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #ffca65;
}
/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #ffca65;
}
/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
