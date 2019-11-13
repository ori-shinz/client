<i18n>
{
  "en": {
    "Product": "Product",
    "Weight / drum": "Weight / drum",
    "KG": "KG",
    "Order Type": "Order Type",
    "Quantity": "Quantity",
    "Loose Order": "Loose Order",
    "Bulk Order": "Bulk Order"
  },
  "my": {
    "Product": "Produk",
    "Weight / drum": "Berat / Dram ",
    "KG": "KG",
    "Order Type": "Jenis Pesanan",
    "Quantity": "Kuantiti",
    "Loose Order": "Pesanan Kecil",
    "Bulk Order": "Pesanan Pukal"
  },
  "cn": {
    "Product": "产品",
    "Weight / drum": "重量 / 桶",
    "KG": "公斤",
    "Order Type": "订单类型",
    "Quantity": "数量",
    "Loose Order": "散订购",
    "Bulk Order": "批量订购"
  }
}
</i18n>

<template>
  <Fragment>
    <div class="row text-content mb-3">
      <div class="col-3">{{ $t('Product') }}</div>
      <div class="col-3">{{ productName }}</div>
      <div class="col-3">{{ $t('Weight / drum') }}</div>
      <div class="col-3 text-right">2.7 {{ $t('KG') }}</div>
    </div>
    <div class="row text-content mb-3">
      <div class="col-3">{{ $t('Order Type') }}</div>
      <div class="col-3">{{ $t(getOrderType) }}</div>
      <div class="col-3">{{ $t('Quantity') }}</div>
      <div class="col-3 text-right">
        <span @click="changeOrderQuantity('dec', orderType)" class="minplus px-3">-</span>  <span class="text-orange">{{ quantity }}</span>  <span @click="changeOrderQuantity('inc', orderType)" class="minplus pl-3">+</span>
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
  },
  data () {
    return {
      deliPrice: [11, 21, 28.5, 32]
    }
  },
  computed: {
    quantity () {
      if (this.orderType === 'loose' && this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoLooseQuantity
      } else if (this.orderType === 'bulk' && this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoBulkQuantity
      } else if (this.orderType === 'bulk' && this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldBulkQuantity
      } else if (this.orderType === 'loose' && this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldLooseQuantity
      } else {
        return ''
      }
    },
    basePrice () {
      if (this.cardTitle === 'eco') {
        if (this.orderType === 'bulk') {
          return this.$store.state.formOrder.ecoBulkPrice
        } else if (this.orderType === 'loose') {
          return this.$store.state.formOrder.ecoLoosePrice
        } else {
          return ''
        }
      } else if (this.cardTitle === 'gold') {
        if (this.orderType === 'bulk') {
          return this.$store.state.formOrder.goldBulkPrice
        } else if (this.orderType === 'loose') {
          return this.$store.state.formOrder.goldLoosePrice
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
    productName () {
      return 'ORI-SHINZ ' + this.cardTitle.toUpperCase()
    },
    getOrderType () {
      return this.orderType.charAt(0).toUpperCase() + this.orderType.slice(1) + ' Order'
    }
  },
  methods: {
    changeOrderQuantity (op, type) {
      let currentOrderQty = this.quantity
      let field
      if (type === 'bulk') {
        field = this.cardTitle + 'BulkQuantity'
      } else {
        field = this.cardTitle + 'LooseQuantity'
      }
      if (op === 'dec') {
        if (currentOrderQty > 1) {
          currentOrderQty--
          this.$store.commit('formOrder/SET_GENERAL_STATE', {
            field,
            value: currentOrderQty
          })
          this.setProductPrice()
        }
      } else if (op === 'inc') {
        if ((type === 'loose' && currentOrderQty < 4) || type === 'bulk') {
          currentOrderQty++
          this.$store.commit('formOrder/SET_GENERAL_STATE', {
            field,
            value: currentOrderQty
          })
          this.setProductPrice()
        }
      }

      // change delivery price if order loose qty
      if (field.includes('LooseQuantity')) {
        let price = this.deliPrice[currentOrderQty - 1]
        this.setDeliveryPrice(price)
      }
    },
    setProductPrice () {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'productPrice',
        value: this.basePrice * this.quantity
      })
    },
    setDeliveryPrice (price) {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'deliveryPrice',
        value: price
      })
    }
  }
}
</script>

<style scoped>
.minplus:hover {
  cursor: pointer;
  color: #ffca65;
}
.minplus {
  font-size: 1.5rem;
}
</style>
