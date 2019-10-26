<template>
  <div id="app">
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
  margin-bottom: 150px;
}
.mbc-lg-112 {
  margin-bottom: 112px;
}
.mbc-lg-100 {
  margin-bottom: 100px;
}
.mbc-lg-80 {
  margin-bottom: 80px;
}
.mb-10 {
  margin-bottom: 6rem !important;
}
</style>
