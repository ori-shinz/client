<template>
  <Fragment>
    <div class="row text-left" style="margin: 100px 100px 50px 100px !important">
      <!-- Loose Order -->
      <p class="orange-title col-12">Loose Order</p>
      <div class="col-sm-4 col-md-5 control-order-text text-white">
        <p>Quantity</p>
        <p>Price</p>
        <p>Delivery Charges</p>
      </div>
      <div class="col-sm-6">
        <table class="table text-right control-order-text text-orange borderless">
          <tr>
            <td>1 drum</td>
            <td>2 drum</td>
            <td>3 drum</td>
            <td>4 drum</td>
          </tr>
          <tr>
            <td>{{ tablePrice(1) }}.00</td>
            <td>{{ tablePrice(2) }}.00</td>
            <td>{{ tablePrice(3) }}.00</td>
            <td>{{ tablePrice(4) }}.00</td>
          </tr>
          <tr>
            <td>11.00</td>
            <td>21.00</td>
            <td>28.50</td>
            <td>32.00</td>
          </tr>
          <tr>
            <td class="pr-0">
              <button class="btn-loose-order" @click="looseOrderModal(11.00, tablePrice(1), 1)" data-toggle="modal" :data-target="'#'+cardTitle+'-loose-'+regionType+'-modal'">
                Order
              </button>
            </td>
            <td class="pr-0">
              <button class="btn-loose-order" @click="looseOrderModal(21.00, tablePrice(2), 2)" data-toggle="modal" :data-target="'#'+cardTitle+'-loose-'+regionType+'-modal'">
                Order
              </button>
            </td>
            <td class="pr-0">
              <button class="btn-loose-order" @click="looseOrderModal(28.50, tablePrice(3), 3)" data-toggle="modal" :data-target="'#'+cardTitle+'-loose-'+regionType+'-modal'">
                Order
              </button>
            </td>
            <td class="pr-0">
              <button class="btn-loose-order" @click="looseOrderModal(32.00, tablePrice(4), 4)" data-toggle="modal" :data-target="'#'+cardTitle+'-loose-'+regionType+'-modal'">
                Order
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- Notes -->
    </div>
    <div class="row text-left" style="margin: 0px 100px 50px 100px !important">

      <!-- Bulk Order -->
      <div class="col-sm-6 orange-title">
        <p>
          Bulk Order | <span class="font-italic">Best Price!</span>
        </p>
        <div class="row">
          <div class="col-sm-4 col-md-7 control-order-text text-white">
            <p>Quantity</p>
            <p>Price</p>
            <p>Delivery Charges</p>
          </div>
          <div class="col-sm-8 col-md-5 control-order-text text-right">
            <pre class="text-white control-order-text "> <span @click="changeOrderQuantity('dec')" class="minplus">-</span> <span class="text-orange">{{ bulkQuantity }}</span> <span @click="changeOrderQuantity('inc')" class="minplus">+</span> <span class="text-orange">carton(s)</span></pre>
            <p class="text-orange text-right">{{ orderPrice }}.00</p>
            <p class="text-orange text-right">FREE OF CHARGE</p>
            <button class="btn btn-block btn-bulk-order" @click="bulkOrderModal"  data-toggle="modal" :data-target="'#'+cardTitle+'-bulk-'+regionType+'-modal'">Bulk Order Now</button>
          </div>
        </div>
      </div>

      <div class="col-sm-4 offset-sm-1 notes-order">
        <p>Notes :</p>
        <ul>
          <li>All Prices are in Ringgit Malaysia (RM).</li>
          <li>Maximum Quantity of Loose Order is 4 drums.</li>
          <li>Minimum Quantity for Bulk Order is 1 carton <br />(1 carton = 6 drums).</li>
          <li>Orders will normally be delivered within 10 Working Days (West Malaysia) and 14 Working Days (East Malaysia) upon receipt of payment. Working Days exclude Fridays and Public Holidays in Malaysia.</li>
        </ul>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: 'MalayOrderControl',
  props: [
    'cardTitle',
    'regionType'
  ],
  components: {
    Fragment
  },
  computed: {
    loosePrice () {
      if (this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoLoosePrice
      } else if (this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldLoosePrice
      }
    },
    bulkPrice () {
      if (this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoBulkPrice
      } else if (this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldBulkPrice
      }
    },
    bulkQuantity () {
      if (this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoBulkQuantity
      } else if (this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldBulkQuantity
      }
    },
    orderPrice () {
      return this.bulkPrice * this.bulkQuantity
    }
  },
  methods: {
    showOrderModal (type) {
      this.$emit('show-modal', type)
    },
    tablePrice (qty) {
      return this.loosePrice * qty
    },
    setDeliveryPrice (price) {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'deliveryPrice',
        value: price
      })
    },
    setProductPrice (price) {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'productPrice',
        value: price
      })
    },
    setLooseQuantity (qty) {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: this.cardTitle + 'LooseQuantity',
        value: qty
      })
    },
    looseOrderModal (price, loosePrice, qty) {
      this.setDeliveryPrice(price)
      this.setProductPrice(loosePrice)
      this.setLooseQuantity(qty)
      this.showOrderModal('loose')
    },
    bulkOrderModal () {
      this.setProductPrice(this.orderPrice)
      this.setDeliveryPrice(0)
      this.showOrderModal('bulk')
    },
    changeOrderQuantity (op) {
      let currentOrderQty = this.bulkQuantity
      let field
      if (this.cardTitle === 'eco') {
        field = 'ecoBulkQuantity'
      } else {
        field = 'goldBulkQuantity'
      }
      if (op === 'dec') {
        if (currentOrderQty > 1) {
          currentOrderQty--
        }
      } else if (op === 'inc') {
        currentOrderQty++
      }
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field,
        value: currentOrderQty
      })
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
  width: 100px !important;
  border-radius: 5px;
  border: solid 1px #ffca65 !important;
  background-color: black;
  color: #ffca65;
}
.btn-bulk-order {
  border-radius: 5px;
  border: solid 1px #ffca65;
  font-size: 20px;
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
.borderless td, .borderless th {
  border: none;
  padding-top: 0;
}
.minplus:hover {
  cursor: pointer;
  color: #ffca65;
}
</style>
