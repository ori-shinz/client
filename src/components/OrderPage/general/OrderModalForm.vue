<i18n>
{
  "en": {
    "Contact Person": "Contact Person",
    "Company Name": "Company Name",
    "Email Address": "Email Address",
    "Contact Number": "Contact Number",
    "Delivery Address": "Delivery Address",
    "Company Address": "Company Address",
    "Additional": "Additional Information for Your Order (if any)",
    "After": "After submitting this Order Request, we will contact you and provide you information on pricing and payment instruction to complete your Order.",
    "Hereby": "I hereby confirm that I have read and understand the Privacy Policy and the Terms of Service and I agree and consent to the Privacy Policy and the Terms of Service.",
    "Submit": "Submit",
    "Notes:": "Notes:",
    "note1": "Incomplete information will not be entertained.",
    "note2": "Free Samples may be discontinued at any time without prior notice.",
    "note3": "Every company or individual is only entitled to make one-time Free Sample request.",
    "label": {
      "text1": "I hereby confirm that I have read and understand the",
      "text2": "Privacy Policy",
      "text3": "and the",
      "text4": "Terms of Service",
      "text5": "and I agree and consent to the",
      "text6": "Privacy Policy",
      "text7": "and the",
      "text8": "Terms of Service"
    }
  },
  "my": {
    "Contact Person": "Orang untuk Dihubungi",
    "Company Name": "Nama Syarikat",
    "Email Address": "Alamat Emel",
    "Contact Number": "Nombor Telefon",
    "Delivery Address": "Alamat Penghantaran",
    "Company Address": "Alamat Syarikat",
    "Additional": "Butiran Tambahan untuk Permintaan Sampel Anda (jika ada)",
    "After": "Selepas mengemukakan Permintaan Pesanan ini, kami akan menghubungi anda dan memberi anda maklumat harga produk dan arahan pembayaran untuk melengkapkan Pesanan anda.",
    "Hereby": "Saya dengan ini mengesahkan bahawa saya telah membaca dan memahami Dasar Privasi dan Syarat Perkhidmatan. Saya menerima dan bersetuju untuk terikat dengan Dasar Privasi dan Syarat Perkhidmatan.",
    "Submit": "Hantar",
    "Notes:": "Notes:",
    "note1": "Butiran yang tidak lengkap tidak akan dilayan.",
    "note2": "Sampel Percuma akan dihentikan pada bila-bila masa tanpa notis terdahulu.",
    "note3": "Permintaan sampel percuma adalah terhad untuk setiap syarikat atau individu sahaja.",
    "label": {
      "text1": "Saya dengan ini mengesahkan bahawa saya telah membaca dan memahami",
      "text2": "Dasar Privasi",
      "text3": "dan",
      "text4": "Syarat Perkhidmatan",
      "text5": "Saya menerima dan bersetuju untuk terikat dengan",
      "text6": "Dasar Privasi",
      "text7": "dan",
      "text8": "Syarat Perkhidmatan"
    }
  },
  "cn": {
    "Contact Person": "联系人",
    "Company Name": "公司名字",
    "Email Address": "电子邮件地址",
    "Contact Number": "联系电话号码",
    "Delivery Address": "邮寄地址",
    "Company Address": "公司地址",
    "Additional": "您样品申请的其他信息 (如有)",
    "After": "在提交此订单请求后，我们将与您联系并向您提供有关产品价格和付款说明的信息，以完成您的订单。",
    "Hereby": "我在此确认已阅读并理解本隐私政策和本服务条款。我同意并接受本隐私政策和本服务条款。",
    "Submit": "提交",
    "Notes:": "注意:",
    "note1": "不完整的信息将不予受理。",
    "note2": "我们保留随时终止免费样本的权利，恕不另行通知。",
    "note3": "每个公司或个人仅有权进行一次性免费样品申请。",
    "label": {
      "text1": "我在此确认已阅读并理解本",
      "text2": "隐私政策",
      "text3": "和本",
      "text4": "服务条款",
      "text5": "我同意并接受本",
      "text6": "隐私政策",
      "text7": "和本",
      "text8": "服务条款"
    }
  }
}
</i18n>

<template>
  <form class="text-white text-content" @submit.prevent="sendMail">
    <!-- Tank Size Input FreeSample Only -->

    <div class="form-row mb-2" v-if="title === 'try-free-sample'">
      <div class="dropdown col-12">
        <button
          id="dLabel"
          class="dropdown-select text-content"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ selectSize }}
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dLabel" v-if="note">
          <li
            @click="changeState({
            field: 'tankSize',
            value: 100
          })"
          >100 L</li>
          <li
            @click="changeState({
            field: 'tankSize',
            value: 0
          })"
          >Others Sizes of Snow Wash Tank/Machine</li>
        </ul>
        <ul class="dropdown-menu" aria-labelledby="dLabel" v-if="!note">
          <li
            @click="changeState({
            field: 'tankSize',
            value: 60
          })"
          >60 L</li>
          <li
            @click="changeState({
            field: 'tankSize',
            value: 70
          })"
          >70 L</li>
          <li
            @click="changeState({
            field: 'tankSize',
            value: 80
          })"
          >80 L</li>
          <li
            @click="changeState({
            field: 'tankSize',
            value: 200
          })"
          >200 L</li>
        </ul>
      </div>
    </div>
    <div class="form-row mb-2">
      <div class="col-md-6 ">
        <input
          type="text"
          v-model.lazy="contactPerson"
          class="form-control md-input"
          :placeholder="$t('Contact Person')"
          required
        />
      </div>
      <div class="col-md-6">
        <input
          type="text"
          v-model.lazy="companyName"
          class="form-control md-input"
          :placeholder="$t('Company Name')"
          required
        />
      </div>
    </div>
    <div class="form-row mb-2">
      <div class="col-md-6">
        <input
          type="email"
          v-model.lazy="email"
          class="form-control md-input"
          :placeholder="$t('Email Address')"
          required
        />
      </div>
      <div class="col-md-1 align-items-end d-flex justify-content-end">
        <input
          type="number"
          v-model.lazy="countryCode"
          class="form-control md-input"
          placeholder="+62"
          required
        />
      </div>
      <div class="col-md-5">
        <input
          type="text"
          v-model.lazy="contact"
          class="form-control md-input"
          :placeholder="$t('Contact Number')"
          required
        />
      </div>
    </div>
    <div class="form-row mb-2">
      <div class="col-md-6 px-2">
        <textarea
          class="form-control md-input"
          v-model.lazy="deliveryAddress"
          rows="4"
          :placeholder="$t('Delivery Address')"
        ></textarea>
      </div>
      <div class="col-6 px-2">
        <textarea
          class="form-control md-input"
          rows="4"
          v-model.lazy="companyAddress"
          :placeholder="$t('Company Address')"
        ></textarea>
      </div>
    </div>
    <div class="form-row mb-4">
      <div class="col-md-12">
        <input
          type="text"
          class="form-control md-input"
          :placeholder="$t('Additional')"
          v-model.lazy="information"
        />
      </div>
    </div>
    <div class="form-row mb-5">
      <div class="col-11 mx-auto text-center disclaimer-text pl-3">
        <div class="form-check">
          <input class="form-check-input bg-brown" type="checkbox" id="defaultCheck1" required />
          <label class="form-check-label" for="defaultCheck1">
            <router-link :to="`/${$i18n.locale}/privacy-policy`">{{ $t('label.text2') }}</router-link>
              {{ $t('label.text3') }}
              <router-link :to="`/${$i18n.locale}/terms-of-service`">{{ $t('label.text4') }}</router-link>.
              {{ $t('label.text5') }}
              <router-link :to="`/${$i18n.locale}/privacy-policy`">{{ $t('label.text6') }}</router-link>
              {{ $t('label.text7') }}
              <router-link :to="`/${$i18n.locale}/terms-of-service`">{{ $t('label.text8') }}</router-link>.
          </label>
        </div>
      </div>
    </div>
    <div class="form-row mb-5">
      <button class="btn btn-lg btn-orange form-submit col-4 mx-auto">{{ $t('Submit') }}</button>
    </div>
    <div class="form-row mb-4 disclaimer-text text-left" v-if="note">
      <p class="col-12">{{ $t('Notes:') }}</p>
      <ul>
        <li>{{ $t('note1') }}</li>
        <li>{{ $t('note2') }}</li>
        <li>{{ $t('note3') }}</li>
      </ul>
    </div>
  </form>
</template>

<script>
import computedCreator from '@/helpers/computedCreator.js'
export default {
  name: 'OrderModalForm',
  props: ['isFree', 'note'],
  methods: {
    changeState (payload) {
      this.$store.commit('formOrder/SET_GENERAL_STATE', payload)
    },
    sendMail () {
      console.log('im here guys')
      this.$store.dispatch('formOrder/orderProduct')
    }
  },
  computed: {
    ...computedCreator('formOrder', [
      'contactPerson',
      'companyName',
      'email',
      'tankSize',
      'contact',
      'countryCode',
      'deliveryAddress',
      'companyAddress',
      'information',
      'consent'
    ]),
    title () {
      return this.$store.state.formOrder.title
    },
    selectSize () {
      if (this.note) {
        return 'Select Size of Your Snow Wash Tank'
      } else {
        return this.tankSize
      }
    }
  },
  mounted () {
    // $(".dropdown-menu li").on("click", function() {
    //   var getValue = $(this).text();
    //   $(".dropdown-select").text(getValue);
    // });
  }
}
</script>

<style scoped>
a {
  color: #ffca65;
}

a:hover {
  color: white;
}

.md-input {
  border: 0 !important;
  padding-left: 0;
  color: #e7e7e7;
  border-radius: 0 !important;
  outline: 0 !important;
  background: transparent !important;
  border-bottom: 1px solid orange !important;
}
.form-check-input {
  margin-top: 0.1rem !important;
}
.form-submit {
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #0e1737;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
  opacity: 1; /* Firefox */
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
}
input,
textarea {
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e7e7e7;
}
.btn-orange {
  border-radius: 5px;
  background: rgba(245, 130, 32, 1);
  background: -moz-linear-gradient(
    left,
    rgba(245, 130, 32, 1) 0%,
    rgba(255, 202, 101, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(245, 130, 32, 1)),
    color-stop(100%, rgba(255, 202, 101, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(245, 130, 32, 1) 0%,
    rgba(255, 202, 101, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(245, 130, 32, 1) 0%,
    rgba(255, 202, 101, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(245, 130, 32, 1) 0%,
    rgba(255, 202, 101, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(245, 130, 32, 1) 0%,
    rgba(255, 202, 101, 1) 100%
  );
}
.md-input {
  border: 0 !important;
  padding-left: 0;
  color: #e7e7e7;
  border-radius: 0 !important;
  outline: 0 !important;
  background: transparent !important;
  border-bottom: 1px solid orange !important;
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
.disclaimer-text {
  font-size: 1rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #e7e7e7;
}
#dLabel {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px orange;
  text-align: left;
  padding: 7.5px;
  color: #ccc;
  letter-spacing: 0.7px;
  margin-top: 25px;
}
.caret {
  float: right;
  margin-top: 9px;
  display: block;
}
.dropdown {
  width: 100%;
  border: 0;
}
.dropdown-menu {
  width: 100%;
  padding: 0;
  margin-right: 0.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.dropdown-select {
  background-color: #311905;
  border: none;
}
.dropdown button:hover,
.dropdown button:focus {
  border: none;
  outline: 0;
}
.dropdown.open button#dLabel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
  border-bottom: none;
}
.dropdown.open ul {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
  border: solid 1px #666;
  border-top: none;
  height: 200px;
  overflow-y: scroll;
}
.dropdown-menu li {
  line-height: 1.5;
  letter-spacing: 0.7px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  padding: 7.5px 15px;
  border-top: solid 1px orange;
}
.dropdown-menu li:hover {
  background-color: #ccc;
}
button#dLabel {
  padding: 0.25rem 0 !important;
}
</style>
