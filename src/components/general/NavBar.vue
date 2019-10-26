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
              <img src="~@/assets/images/flag-en.png" alt="flag">
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" type="button" @click="changeLanguage('english')">
                <img src="~@/assets/images/flag-en.png" alt="flag"> English
              </button>
              <button class="dropdown-item" type="button" @click="changeLanguage('malaysia')">
                <img src="~@/assets/images/flag-cn.png" alt="flag"> Bahasa Malaysia
              </button>
              <button class="dropdown-item" type="button" @click="changeLanguage('china')">
                <img src="~@/assets/images/flag-my.png" alt="flag"> 简体
              </button>
            </div>
          </div>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/order" class="Order">Order</router-link>
        </li> -->
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
          <a class="nav-link" href="https://www.facebook.com/ORISHINZsnowwashshampoo/" target="_blank"><img src="~@/assets/images/icons/fb.svg" alt="fb"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/orishinzsnowwashshampoo/?hl=id" target="_blank"><img src="~@/assets/images/icons/ig.svg" alt="ig"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)"><button type="button" class="Rectangle btn" @click="$router.push('/order')">Order Now</button></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import SideBar from '@/components/general/SideBar.vue'
export default {
  name: 'NavBar',
  components: {
    SideBar
  },
  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '400px'
    },
    changeLanguage (country) {
      console.log(country)
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

.Order {
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
