<i18n>
{
  "en": {
    "titleForm": "Speak to Us Now & Be Your Own Boss.",
    "Full Name": "Full Name",
    "Email Address": "Email Address",
    "Company Name": "Company Name",
    "Contact Number": "Contact Number",
    "label": {
      "text1": "I hereby confirm that I have read and understand the",
      "text2": "Privacy Policy",
      "text3": "and the",
      "text4": "Terms of Service",
      "text5": "and I agree and consent to the",
      "text6": "Privacy Policy",
      "text7": "and the",
      "text8": "Terms of Service"
    },
    "Submit": "Submit"
  },
  "my": {
    "titleForm": "Hubungi Kami Sekarang & Jadilah Boss Anda Sendiri",
    "Full Name": "Nama Penuh",
    "Email Address": "Alamat Email",
    "Company Name": "Nama Syarikat (jika berkenaan)",
    "Contact Number": "Nombor Telefon",
    "label": {
      "text1": "Saya dengan ini mengesahkan bahawa saya telah membaca dan memahami",
      "text2": "Dasar Privasi",
      "text3": "dan",
      "text4": "Syarat Perkhidmatan",
      "text5": "Saya menerima dan bersetuju untuk terikat dengan",
      "text6": "Dasar Privasi",
      "text7": "dan",
      "text8": "Syarat Perkhidmatan"
    },
    "Submit": "Hantar"
  },
  "cn": {
    "titleForm": "现在联络我们 & 自己当老板",
    "Full Name": "全名",
    "Email Address": "电子邮件地址",
    "Company Name": "公司名字 (如适用)",
    "Contact Number": "联系电话号码",
    "label": {
      "text1": "我在此确认已阅读并理解本",
      "text2": "隐私政策",
      "text3": "和本",
      "text4": "服务条款",
      "text5": "我同意并接受本",
      "text6": "隐私政策",
      "text7": "和本",
      "text8": "服务条款"
    },
    "Submit": "提交"
  }
}
</i18n>

<template>
  <div>
    <div class="container form-agent">
      <div class="row">
        <div class="col my-5">
          <div class="free-title">{{ $t('titleForm') }}</div>
        </div>
      </div>
      <div class="row justify-content-center">
        <form class="text-white text-content px-5" style="width: 100%">
          <div class="form-row mb-4">
            <div class="col-md-6 pr-3">
              <input
                type="text"
                class="form-control md-input"
                v-model.lazy="contactPerson"
                :placeholder="$t('Full Name')"
                required
              />
            </div>
            <div class="col-md-6 pl-3">
              <input
                type="text"
                class="form-control md-input"
                v-model.lazy="email"
                :placeholder="$t('Email Address')"
                required
              />
            </div>
          </div>
          <div class="form-row mb-4">
            <div class="col-md-6 pr-3">
              <input
                type="email"
                class="form-control md-input"
                v-model.lazy="companyName"
                :placeholder="$t('Company Name')"
                required
              />
            </div>
            <div class="col-md-1 align-items-center d-flex justify-content-end">
              <label class="form-check-label">+</label>
            </div>
            <div class="col-md-1 align-items-end d-flex justify-content-end">
              <input
                type="number"
                v-model.lazy="countryCode"
                class="form-control md-input"
                placeholder="62"
                required
              />
            </div>
            <div class="col-md-5 pl-3">
              <input
                type="text"
                class="form-control md-input"
                v-model.lazy="contactPerson"
                :placeholder="$t('Contact Number')"
                required
              />
            </div>
          </div>
          <div class="form-row mb-4">
            <div class="col-11 mx-auto text-center disclaimer-text pl-3">
              <div class="form-check">
                <input class="form-check-input bg-brown" type="checkbox" value="true" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  {{ $t('label.text1') }}
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
          <div class="form-row mb-2">
            <button class="btn btn-lg btn-orange form-submit col-4 mx-auto">
              {{ $t('Submit') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import computedCreator from '@/helpers/computedCreator.js'

export default {
  name: 'FormAgent',
  computed: {
    ...computedCreator('formOrder', [
      'contactPerson',
      'companyName',
      'email',
      'contact',
      'countryCode',
      'consent'
    ])
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

.form-agent {
  width: 950px;
  height: 438px;
  border-radius: 30px;
  background-color: rgba(245, 130, 32, 0.2);
  margin: 0 auto;
}
.free-title {
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #ffca65;
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
  margin-top: .1rem !important;
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
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
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
input, textarea {
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
  background: rgba(245,130,32,1);
  background: -moz-linear-gradient(left, rgba(245,130,32,1) 0%, rgba(255,202,101,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(245,130,32,1)), color-stop(100%, rgba(255,202,101,1)));
  background: -webkit-linear-gradient(left, rgba(245,130,32,1) 0%, rgba(255,202,101,1) 100%);
  background: -o-linear-gradient(left, rgba(245,130,32,1) 0%, rgba(255,202,101,1) 100%);
  background: -ms-linear-gradient(left, rgba(245,130,32,1) 0%, rgba(255,202,101,1) 100%);
  background: linear-gradient(to right, rgba(245,130,32,1) 0%, rgba(255,202,101,1) 100%);
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
</style>
