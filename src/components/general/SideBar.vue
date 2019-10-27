<template>
  <div id="mySidenav" class="sidenav">
    <div>
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <router-link to="/">Main Page</router-link>
      <router-link to="/automotive-professional">Automotive Professional</router-link>
      <router-link to="/product-detail">Product Details</router-link>
      <router-link to="/order">Order</router-link>
      <router-link to="/agent-distributor-oem">Agent/ Distributor/ OEM</router-link>
      <router-link to="/about-us">About Us</router-link>
      <router-link to="/">Enquiry & Contact</router-link>
    </div>
    <div>
      <router-link to="/privacy-policy">Privacy Policy</router-link>
      <router-link to="/terms-of-service">Terms of Service</router-link>
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
