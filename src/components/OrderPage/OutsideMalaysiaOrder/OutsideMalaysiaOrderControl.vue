<template>
  <div class="row text-left justify-content-center" style="margin: 100px 100px 50px 100px !important">
    <!-- Loose Order -->
    <div class="col-sm-4 d-flex flex-column">
      <p class="orange-title">Loose Order</p>
      <div class="row mb-3 control-order-text">
        <div class="col-sm-3 text-white">Quantity</div>
        <pre class="col-sm-4 text-white mb-0 control-order-text"> <span @click="changeOrderQuantity('dec', 'loose')" class="minplus">-</span>  <span class="text-orange">{{ looseQuantity }}</span>  <span @click="changeOrderQuantity('inc', 'loose')" class="minplus">+</span></pre>
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
      <div class="row control-order-text">
        <div class="col-lg-3 text-white pr-0">
          <p>Quantity</p>
        </div>
        <!-- <div class="col-lg-1 text-white text-center">-</div>
        <div class="col-lg-2 text-center px-0">2</div>
        <div class="col-lg-1 text-center">+</div> -->
        <pre class="col-lg-5 text-center text-white mb-0 control-order-text"> <span @click="changeOrderQuantity('dec', 'bulk')" class="minplus">-</span>  <span class="text-orange">{{ bulkQuantity }}</span>  <span @click="changeOrderQuantity('inc', 'bulk')" class="minplus">+</span></pre>
        <div class="col-lg-2 text-orange px-0">drum(s)</div>
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
      this.$emit('show-modal', type)
    },
    changeOrderQuantity (op, type) {
      let currentOrderQty , field
      if(type === 'bulk') {
        currentOrderQty = this.bulkQuantity
        field = this.cardTitle + 'BulkQuantity'
      } else {
        currentOrderQty = this.looseQuantity
        field = this.cardTitle + 'LooseQuantity'
      }
      if(op === 'dec') {
        if(currentOrderQty >1 ) {
          currentOrderQty--
          this.$store.commit("formOrder/SET_GENERAL_STATE", {
            field,
            value: currentOrderQty
          })
        }
      } else if (op === 'inc'){
        if((type === 'loose' && currentOrderQty < 4) || type === 'bulk') {
          currentOrderQty++
          this.$store.commit("formOrder/SET_GENERAL_STATE", {
            field,
            value: currentOrderQty
          })
        }
      }
    } 
  },
  computed: {
    bulkQuantity () {
      if(this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoBulkQuantity
      } else if (this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldBulkQuantity
      }
    },
    looseQuantity () {
      if(this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoLooseQuantity
      } else if (this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldLooseQuantity
      }
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
.minplus:hover {
  cursor: pointer;
  color: #ffca65;
}
</style>
