<i18n>
{
  "en": {
    "Order Confirmation": "Order Confirmation",
    "Order Request": "Order Request",
    "Order Details": "Order Details",
    "Free Sample Confirmation": "Free Sample Confirmation",
    "Free Sample Requirements": "Free Sample Requirements"
  },
  "my": {
    "Order Confirmation": "Pengesahan Pesanan",
    "Order Request": "Permintaan Pesanan",
    "Order Details": "Butiran Pesanan",
    "Free Sample Confirmation": "Pengesahan Sampel Percuma",
    "Free Sample Requirements": "Butiran Untuk Sampel Percuma"
  },
  "cn": {
    "Order Confirmation": "订单确认",
    "Order Request": "订单请求",
    "Order Details": "订单详情",
    "Free Sample Confirmation": "免费样品确认",
    "Free Sample Requirements": "免费样品申请资料"
  }
}
</i18n>

<template>
  <div
    class="modal fade bg-brown"
    :id="cardTitle+'-'+orderType+'-'+ regionType+ '-modal'"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="md-contain modal-dialog mx-auto filter-none" role="document">
      <div class="modal-content md-bg text-white">
        <button
          type="button"
          class="close-btn text-warning ml-auto mr-4 mt-4 p-2 btn-circle border-warning"
          data-dismiss="modal"
        >X</button>
        <div class="modal-header border-0 justify-content-center">

          <!-- CHANGE WITH PROPS -->
          <h5 class="md-title mb-3">{{ $t(titleModal) }}</h5>

        </div>
        <div class="modal-body md-content bg-brown d-flex flex-column align-items-start mx-5">

          <!-- TEXT WARNA KUNING -->
          <h5 class="text-orange title mb-4 pl-3">{{ $t(descModal) }}</h5>

          <div class="container text-left text-content">

            <!-- Order Summarys -->
            <OrderModalSummary v-if="regionType != 'sample'" :card-title="cardTitle" :order-type="orderType" :region-type="regionType" />

            <!-- Total Price must be paid in Malaysia only -->
            <OrderModalPriceTotal v-if="regionType != 'outside' && regionType != 'sample'" :card-title="cardTitle" :order-type="orderType" :region-type="regionType" />

            <!-- Free Sample -->
            <FreeSampleRequest v-if="regionType == 'sample'" />

            <!-- Transfer Instruction inside Malaysia only -->
            <OrderModalInstruction v-if="regionType != 'outside'" />

            <!-- Form Customer -->
            <OrderModalForm :note="note" :isfree="isfree" />

          </div>
        </div>
        <div class="modal-footer border-0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderModalForm from '@/components/OrderPage/general/OrderModalForm'
import OrderModalPriceTotal from '@/components/OrderPage/general/OrderModalPriceTotal'
import OrderModalInstruction from '@/components/OrderPage/general/OrderModalInstruction'
import OrderModalSummary from '@/components/OrderPage/general/OrderModalSummary'
import FreeSampleRequest from '@/components/OrderPage/general/FreeSampleRequest'

export default {
  name: 'OrderModal',
  props: ['cardTitle', 'orderType', 'regionType', 'titleModal', 'descModal', 'note', 'isfree'],
  components: {
    OrderModalForm,
    OrderModalPriceTotal,
    OrderModalSummary,
    OrderModalInstruction,
    FreeSampleRequest
  },
  methods: {
    changeModalTitle () {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'title',
        value: `${this.cardTitle}-${this.orderType}-${this.regionType}`
      })
    },
    changeRegionType () {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'region',
        value: `${this.regionType}`
      })
    },
    changeProductType () {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'productType',
        value: `${this.cardTitle}`
      })
    },
    changeOrderType () {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'orderType',
        value: `${this.orderType}`
      })
    }
  },
  mounted () {
    this.changeModalTitle()
    this.changeOrderType()
    if (this.regionType !== 'sample') {
      this.changeRegionType()
    }
    if (this.cardTitle !== 'try') {
      this.changeProductType()
    }
  },
  watch: {
    orderType: function (newVal, oldVal) {
      this.changeModalTitle()
      this.changeOrderType()
      if (this.regionType !== 'sample') {
        this.changeRegionType()
      }
      if (this.cardTitle !== 'try') {
        this.changeProductType()
      }
    }
  }
}
</script>

<style scoped>
.bg-brown {
  background-color: rgba(48, 22, 0, 0.78) !important;
}
.md-content {
  background-color: rgba(245, 130, 32, 0.2) !important;
  padding: 2rem;
  border-radius: 30px;
}
.md-content h5 {
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: 1.85rem;
}
.text-content {
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
.btn-circle {
  width: 2.5rem;
  height: 2.5rem;
  padding: 5px 0px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.42857;
}
.close-btn {
  background-color: black;
}
.btn-circle.btn-xl {
  width: 3rem;
  height: 3rem;
  padding: 6px 10px;
  border-radius: 35px;
  font-size: 24px;
  font-style: bold;
  line-height: 1.33;
}
.text-orange {
  color: #ffca65;
}
.md-bg {
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.8);
  border: solid 1px #ffca65;
  background-color: black;
}
.md-title {
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 3.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #e7e7e7;
}
.md-contain {
  max-width: 80%;
}
@media screen and (min-width: 1440px) {
  .modal-contain {
    max-width: 1150px !important;
  }
}
</style>
