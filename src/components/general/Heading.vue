<template>
  <div class="row justify-content-center mb-5">
    <div class="col-sm-12 col-12 d-flex justify-content-center">
      <h1 class="text-white moto d-flex justify-content-center" v-html="message"></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    message: String
  }
}
</script>

<style scoped>
.moto {
  width: 100%;
  margin: 0 auto;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 60px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #e7e7e7;
}
</style>
