<template>
  <nav>
    <div id="logo"><img src="~@/assets/images/newassets/orishine-logo.png" alt="orishine"></div>
    <div id="navbar">
      <div id="links">
        <ul>
          <li><img src="~@/assets/images/icons/burger.svg" alt="burger"></li>
          <li><img src="~@/assets/images/flag-en.png" alt="flag"></li>
          <li><span class="Order">Order</span></li>
        </ul>
      </div>
      <div id="icons">
        <ul>
          <li><img src="~@/assets/images/newassets/fb.png" alt="fb"></li>
          <li><img src="~@/assets/images/newassets/ig.png" alt="ig"></li>
          <li><button type="button" class="Rectangle btn">Order Now</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  padding: 60px
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
}

#navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#navbar ul {
  padding: 0px;
  margin: 0px;
}

#navbar ul li{
  display: inline;
  text-decoration: none;
  margin: 0px 20px;
}

#navbar #links ul li:first-child{
  margin-left: 0px
}
#navbar #icons ul li:last-child{
  margin-right: 0px
}
#logo{
  position: absolute;
  top: 68px;
  margin: 0 auto;
  width: calc(100% - 120px);
}
</style>
