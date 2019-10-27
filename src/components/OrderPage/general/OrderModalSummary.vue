<template>
  <Fragment>
    <div class="row text-content mb-3">
      <div class="col-3">Product</div>
      <div class="col-3">ORI SHINZ {{orderType}}</div>
      <div class="col-3">Weight / drum</div>
      <div class="col-3 text-right">2.7 KG</div>
    </div>
    <div class="row text-content mb-3">
      <div class="col-3">Order Type</div>
      <div class="col-3">{{ cardTitle }}</div>
      <div class="col-1">Quantity</div>
      <div class="col-5 text-right">
        <pre class="text-white mb-0 text-content text-orange"> -  <span class="text-white">2</span>  +  drum(s)</pre>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: 'OrderModalSummary',
  props: [
    'orderType',
    'cardTitle',
    'regionType'
  ],
  components: {
    Fragment
  }
}
</script>

