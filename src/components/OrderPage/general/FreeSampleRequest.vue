<i18n>
{
  "en": {
    "title": "Select Sample you want to request",
    "Select Region": "Select Region",
    "West Malaysia": "West Malaysia",
    "East Malaysia": "East Malaysia",
    "Delivery Charges": "Delivery Charges"
  },
  "my": {
    "title": "Pilih Sampel Anda",
    "Select Region": "Pilih Kawasan",
    "West Malaysia": "Semenanjung Malaysia ",
    "East Malaysia": "Sabah & Sarawak ",
    "Delivery Charges": "Caj Penghantaran"
  },
  "cn": {
    "title": "选择您申请的样本",
    "Select Region": "选定地区",
    "West Malaysia": "西马",
    "East Malaysia": "东马 (沙巴 & 砂拉越)",
    "Delivery Charges": "运输费"
  }
}
</i18n>

<template>
  <Fragment>
    <div class="row justify-content-center">
      <p>{{ $t('title') }}</p>
    </div>
    <div class="row mb-3 justify-content-center">
      <div class="col-3 p-2 bg-black mr-4">
        <img
          src="~@/assets/images/package-sample-eco.png"
          class="img-fluid"
          alt="package-sample-eco"
        />
      </div>
      <div class="col-3 p-2 bg-black">
        <img
          src="~@/assets/images/package-sample-gold.png"
          class="img-fluid"
          alt="package-sample-gold"
        />
      </div>
    </div>
    <div class="row mb-3 justify-content-center text-orange-sample">
      <div class="col-3 p-2 text-center">
        <input id="radio1" type="radio" name="radio" @click="changeProductType('eco')" checked/>
        <label for="radio1">
          <span>
            <span></span>
          </span>ORI-SHINZ ECO
        </label>
      </div>
      <div class="col-3 p-2 text-center">
        <input id="radio2" type="radio" name="radio" @click="changeProductType('gold')" />
        <label for="radio2">
          <span>
            <span></span>
          </span>ORI-SHINZ GOLD
        </label>
      </div>
    </div>
    <div class="row justify-content-center">
      <table class="table text-content col-md-6 table-borderless">
        <tbody>
          <tr>
            <td>{{ $t('Select Region') }}</td>
            <td class="text-right">
              <span
                class="region-btn"
                @click="changeRegion('west')"
                :class="active('west')"
              >{{ $t('West Malaysia') }}</span>
              |
              <span
                class="region-btn"
                @click="changeRegion('east')"
                :class="active('east')"
              >{{ ('East Malaysia') }}</span>
            </td>
          </tr>
          <tr>
            <td>{{ $t('Delivery Charges') }}</td>
            <td class="text-right">RM {{ deliveryPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import computedCreator from '@/helpers/computedCreator'

export default {
  name: 'FreeSampleRequest',
  components: {
    Fragment
  },
  computed: {
    region () {
      return this.$store.state.formOrder.region
    },
    deliveryPrice () {
      if (this.$store.state.formOrder.deliveryPrice) {
        return this.$store.state.formOrder.deliveryPrice + '.00'
      } else {
        return ''
      }
    },
    ...computedCreator('formOrder', [
      'productType'
    ])
  },
  methods: {
    changeRegion (value) {
      let deliveryPrice = 0
      value === 'west' ? (deliveryPrice = 9) : (deliveryPrice = 12)
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'region',
        value
      })
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'deliveryPrice',
        value: deliveryPrice
      })
    },
    active (reg) {
      return this.region === reg ? 'text-orange' : null
    },
    changeProductType (value) {
      this.$store.commit('formOrder/SET_GENERAL_STATE', {
        field: 'productType',
        value
      })
    }
  },
  created() {
    this.changeProductType('eco')
    this.changeRegion('west')
  }
}
</script>

<style scoped>
.bg-black {
  background-color: rgba(0, 0, 0, 0.25);
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
.region-btn:hover {
  color: #ffca65;
  cursor: pointer;
}
.borderless {
  border: 0 !important;
}
.text-orange-sample {
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ffca65;
}
.text-orange {
  color: #ffca65;
}

input[type="radio"]:not(old) {
  width: 2em;
  margin: 0;
  padding: 0;
  font-size: 1em;
  opacity: 0;
}

input[type="radio"]:not(old) + label {
  display: inline-block;
  margin-left: -2em;
  line-height: 1.5em;
}

input[type="radio"]:not(old) + label > span {
  display: inline-block;
  width: 0.875em;
  height: 0.875em;
  margin: 0.25em 0.5em 0.25em 0.25em;
  border: 0.0625em solid rgb(192, 192, 192);
  border-radius: 0.25em;
  background: rgb(224, 224, 224);
  background-image: -moz-linear-gradient(
    rgb(240, 240, 240),
    rgb(224, 224, 224)
  );
  background-image: -ms-linear-gradient(rgb(240, 240, 240), rgb(224, 224, 224));
  background-image: -o-linear-gradient(rgb(240, 240, 240), rgb(224, 224, 224));
  background-image: -webkit-linear-gradient(
    rgb(240, 240, 240),
    rgb(224, 224, 224)
  );
  background-image: linear-gradient(rgb(240, 240, 240), rgb(224, 224, 224));
  vertical-align: bottom;
}

input[type="radio"]:not(old):checked + label > span {
  background-image: -moz-linear-gradient(
    rgb(224, 224, 224),
    rgb(240, 240, 240)
  );
  background-image: -ms-linear-gradient(rgb(224, 224, 224), rgb(240, 240, 240));
  background-image: -o-linear-gradient(rgb(224, 224, 224), rgb(240, 240, 240));
  background-image: -webkit-linear-gradient(
    rgb(224, 224, 224),
    rgb(240, 240, 240)
  );
  background-image: linear-gradient(rgb(224, 224, 224), rgb(240, 240, 240));
}

input[type="radio"]:not(old):checked + label > span > span {
  display: block;
  width: 0.5em;
  height: 0.5em;
  margin: 0.125em;
  border: 0.0625em solid #ffca65;
  border-radius: 0.125em;
  background: #ffca65;
  background-image: #ffca65;
  background-image: #ffca65;
  background-image: #ffca65;
  background-image: #ffca65;
  background-image: #ffca65;
}
</style>
