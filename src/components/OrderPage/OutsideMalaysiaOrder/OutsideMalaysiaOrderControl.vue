<template>
  <div class="row text-left justify-content-center" style="margin: 100px 100px 50px 100px !important">           
    <!-- Loose Order -->
    <div class="col-sm-4 d-flex flex-column">
      <p class="orange-title">Loose Order</p>
      <div class="row mb-3 control-order-text">
        <div class="col-sm-3 text-white">Quantity</div>
        <pre class="col-sm-4 text-white mb-0 control-order-text"> -  <span class="text-orange">2</span>  +</pre>
        <div class="col-sm-2 text-orange">drum(s)</div>
      </div>
      <div class="row pl-3">
        <button class="btn btn-loose-order" @click="showOrderModal('loose')" data-toggle="modal" :data-target="'#'+cardTitle+'-loose-outside-modal'">
          Order Now
        </button>
      </div>
    </div>

    <!-- Bulk Order -->
    <div class="col-sm-4 orange-title">
      <p>
        Bulk Order | <span class="font-italic">Best Price!</span>
      </p>
      <div class="row mb-3 control-order-text">
        <div class="col-sm-3 text-white">Quantity</div>
        <pre class="col-sm-4 text-white mb-0 control-order-text"> -  <span class="text-orange">2</span>  +</pre>
        <div class="col-sm-2 text-orange">drum(s)</div>
      </div>
      <button @click="showOrderModal('bulk')" class="btn btn-bulk-order" data-toggle="modal" :data-target="'#'+cardTitle+'-bulk-outside-modal'">
        Bulk Order Now
      </button>
    </div>

    <!-- Notes -->
    <div class="col-sm-4 notes-order">
      Note:
      <ul class="pl-3">
        <li>Maximum Quantity of Loose Order is 4 drums.</li>
        <li>Minimum Quantity for Bulk Order is 1 carton (1 carton = 6 drums).</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutMalayOrderControl',
  props: [
    'cardTitle'
  ],
  methods: {
    showOrderModal(type) {
      console.log('here')
      this.$emit('show-modal', type)
    }
  }
}
</script>

<style scoped>
.orange-title {
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffca65;
}
.control-order-text {
   font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal
}
.text-orange {
  color: #ffca65 !important;
}
.btn-loose-order {
  width: 12.5rem; 
  border-radius: 5px;
  border: solid 1px #ffca65;
  background-color: black;  
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffca65;
}
.btn-bulk-order {
  width: 12.5rem;  
  border-radius: 5px;
  border: solid 1px #ffca65;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  border-radius: 5px;
  background-color: #ffca65;
  color: black;
}
.notes-order {
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
</style>