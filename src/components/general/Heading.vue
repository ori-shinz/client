<template>
  <div class="row justify-content-center mb-5">
    <div class="col-sm-9 col-12">
      <h1 class="text-white text-center moto">
        <slot></slot>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style scoped>
  .moto {
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