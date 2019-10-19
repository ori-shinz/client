<template>
  <div id="app">
    <!-- <router-link to="/automotive">
      page 2
    </router-link> -->
    <router-view/>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
}

@media screen and (min-width: 1440px) {
  .container {
    max-width: 1240px !important;
  }
}

/* custom margin bottom */
.mbc-lg-200 {
  margin-bottom: 200px;
}
.mbc-lg-150 {
  margin-bottom: 200px;
}
.mbc-lg-112 {
  margin-bottom: 200px;
}
</style>
