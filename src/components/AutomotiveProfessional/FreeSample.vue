<template>
  <div class="container mbc-lg-200">
    <div class="row border mask">
      <div class="col-sm-9 text-left pl-5 pt-3 pb-2">
        <h5 class="free-title"><span class="text-orange">Get</span> 
        <span class="text-fire"> FREE </span> <span class="text-orange">Sample</span></h5>
        <p class="free-text text-white">If you want to see the result of how great is our product, you can request free sample before you even buying.</p>
      </div>
      <div class="col-sm-3 request-btn">
        <button class="Join-Now btn-orange">
          Request Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FreeSample'
}
</script>

<style scoped>
.text-fire {
  color: #f53020;
}
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
.btn-orange-lg {
  width: 255px;
  height: 70px;
  border-radius: 5px;
  border-color: #f58220;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  background-image: linear-gradient(to left, #f58220, #f58220);
}
.text-orange {
  color: #f58220;
}
</style>