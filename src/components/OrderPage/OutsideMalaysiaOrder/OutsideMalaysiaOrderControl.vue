<i18n>
{
  "en": {
    "Loose Order": "Loose Order",
    "Quantity": "Quantity",
    "drum(s)": "drum(s)",
    "Order Now": "Order Now",
    "Bulk Order": "Bulk Order",
    "Best Price!": "Best Price!",
    "Bulk Order Now": "Bulk Order Now",
    "Note :": "Note :",
    "Note1": "Maximum Quantity of Loose Order is 4 drums.",
    "Note2": "Minimum Quantity for Bulk Order is 1 carton (1 carton = 6 drums)."
  },
  "my": {
    "Loose Order": "Pesanan Kecil",
    "Quantity": "Kuantiti",
    "drum(s)": "dram",
    "Order Now": "Pesan Sekarang",
    "Bulk Order": "Pesanan Pukal",
    "Best Price!": "Harga Terbaik!",
    "Bulk Order Now": "Pesan Pukal Sekarang",
    "Note :": "Nota :",
    "Note1": "Kuantiti Maksimum Pesanan Kecil adalah 4 dram.",
    "Note2": "Kuantiti Minimum Pesanan Pukal adalah 1 karton (1 karton = 6 dram)."
  },
  "cn": {
    "Loose Order": "散订购",
    "Quantity": "数量",
    "drum(s)": "桶",
    "Order Now": "即刻订购",
    "Bulk Order": "批量订购",
    "Best Price!": "最佳价格！",
    "Bulk Order Now": "即刻批量订购",
    "Note :": "注意 ：",
    "Note1": "散订购的最大数量是4桶。",
    "Note2": "批量订购的最小数量是1箱 (1箱 = 6桶)。"
  }
}
</i18n>

<template>
  <div class="row text-left justify-content-center" style="margin: 100px 100px 50px 100px !important">
    <!-- Loose Order -->
    <div class="col-sm-4 d-flex flex-column">
      <p class="orange-title">{{ $t('Loose Order') }}</p>
      <div class="row mb-3 control-order-text">
        <div class="col-sm-3 text-white">{{ $t('Quantity') }}</div>
        <pre class="col-sm-4 text-white mb-0 control-order-text"> <span @click="changeOrderQuantity('dec', 'loose')" class="minplus">-</span>  <span class="text-orange">{{ looseQuantity }}</span>  <span @click="changeOrderQuantity('inc', 'loose')" class="minplus">+</span></pre>
        <div class="col-sm-2 text-orange">{{ $t('drum(s)') }}</div>
      </div>
      <div class="row pl-3">
        <button class="btn btn-loose-order" @click="showOrderModal('loose')" data-toggle="modal" :data-target="'#'+cardTitle+'-loose-outside-modal'">
          {{ $t('Order Now') }}
        </button>
      </div>
    </div>

    <!-- Bulk Order -->
    <div class="col-sm-4 orange-title">
      <p>
        {{ $t('Bulk Order') }} | <span class="font-italic">{{ $t('Best Price!') }}</span>
      </p>
      <div class="row control-order-text">
        <div class="col-lg-3 text-white pr-0">
          <p>{{ $t('Quantity') }}</p>
        </div>
        <!-- <div class="col-lg-1 text-white text-center">-</div>
        <div class="col-lg-2 text-center px-0">2</div>
        <div class="col-lg-1 text-center">+</div> -->
        <pre class="col-lg-5 text-center text-white mb-0 control-order-text"> <span @click="changeOrderQuantity('dec', 'bulk')" class="minplus">-</span>  <span class="text-orange">{{ bulkQuantity }}</span>  <span @click="changeOrderQuantity('inc', 'bulk')" class="minplus">+</span></pre>
        <div class="col-lg-2 text-orange px-0">{{ $t('drum(s)') }}</div>
      </div>
      <button @click="showOrderModal('bulk')" class="btn btn-bulk-order" data-toggle="modal" :data-target="'#'+cardTitle+'-bulk-outside-modal'">
        {{ $t('Bulk Order Now') }}
      </button>
    </div>

    <!-- Notes -->
    <div class="col-sm-4 notes-order">
      {{ $t('Note :') }}
      <ul class="pl-3">
        <li>{{ $t('Note1') }}</li>
        <li>{{ $t('Note2') }}</li>
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
    showOrderModal (type) {
      this.$emit('show-modal', type)
    },
    changeOrderQuantity (op, type) {
      let currentOrderQty, field
      if (type === 'bulk') {
        currentOrderQty = this.bulkQuantity
        field = this.cardTitle + 'BulkQuantity'
      } else {
        currentOrderQty = this.looseQuantity
        field = this.cardTitle + 'LooseQuantity'
      }
      if (op === 'dec') {
        if (currentOrderQty > 1) {
          currentOrderQty--
          this.$store.commit('formOrder/SET_GENERAL_STATE', {
            field,
            value: currentOrderQty
          })
        }
      } else if (op === 'inc') {
        if ((type === 'loose' && currentOrderQty < 4) || type === 'bulk') {
          currentOrderQty++
          this.$store.commit('formOrder/SET_GENERAL_STATE', {
            field,
            value: currentOrderQty
          })
        }
      }
    }
  },
  computed: {
    bulkQuantity () {
      if (this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoBulkQuantity
      } else if (this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldBulkQuantity
      } else {
        return ''
      }
    },
    looseQuantity () {
      if (this.cardTitle === 'eco') {
        return this.$store.state.formOrder.ecoLooseQuantity
      } else if (this.cardTitle === 'gold') {
        return this.$store.state.formOrder.goldLooseQuantity
      } else {
        return ''
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
