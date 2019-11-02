<template>
  <div class="row mask mb-5">
    <div class="col-sm-8 text-left pl-5 pt-3 pb-2">
      <p class="free-title text-orange">Become Our Agent / Distributor / OEM</p>
      <p class="free-text text-white">Be your own Boss</p>
    </div>
    <div class="col-sm-4 request-btn justify-content-center">
      <button class="Join-Now btn-orange">Join Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBecomeAgent'
}
</script>

<style scoped>
  .mask {
  border-radius: 30px;
  border: solid 1px #ffca65 !important;
  background-color: rgba(245, 130, 32, 0.2);
}
.free-title {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f58220;
}
.free-text {
  font-size: 20px;
}
.Join-Now {
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.request-btn {
  display: flex;
  align-items: center;
}
.btn-orange {
  width: 220px;
  height: 40px;
  border-radius: 5px;
  border-color: #f58220;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to left, #f58220, #f58220);
}
</style>
