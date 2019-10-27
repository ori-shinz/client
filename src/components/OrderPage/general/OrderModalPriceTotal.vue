<template>
  <Fragment>
    <div class="row text-content mb-3">
      <div class="col-3">Selected Region</div>
      <div class="col-3">{{regionType}}</div>
      <div class="col-3">Price</div>
      <div class="col-3 text-right">450 RM</div>
    </div>
    <div class="row text-content mb-3">
      <!-- <div class="col-3"></div>
      <div class="col-3"></div> -->
      <div class="col-3 ml-auto">Delivery Charges</div>
      <div class="col-3 text-right">Free of Charge</div>
    </div>
    <div class="row text-content mb-4">
      <!-- <div class="col-3"></div>
      <div class="col-3"></div> -->
      <div class="col-3 ml-auto total">Total Price</div>
      <div class="col-3 text-right total text-orange">450 RM</div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  name: "OrderModalPriceTotal",
  props: ["orderType", "regionType", "cardTitle"],
  components: {
    Fragment
  }
};
</script>

<style scoped>
  .total {
    font-size: 1.75rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .text-orange {
    color: #ffca65 !important;
  }
</style>