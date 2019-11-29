<i18n>
{
  "en": {
    "Order Instruction:": "Order Instructions:",
    "Instruction1": "Please bank-in the Total Price to the following Bank Account.",
    "Instruction2": "Upload your bank-in slip using the following “Upload Bank-in Slip” field.",
    "Instruction3": "Fill in other required fields.",
    "Instruction4": "Click “Submit” to complete your Order.",
    "Bank": "Bank: CIMB Bank Berhad",
    "Name": "Name: Diamond King (M) Sdn. Bhd.",
    "Account": "Account Number: 8006574415"
  },
  "my": {
    "Order Instruction:": "Cara Membuat Permintaan Sampel:",
    "Instruction1": "Sila masukkan Caj Pengangkutan ke dalam Akaun Bank berikut.",
    "Instruction2": "Muat naik slip bank anda dengan menggunakan medan “Muat Naik Slip Bank“ berikut.",
    "Instruction3": "Masukan butiran-butiran lain yang diperlukan pada medan-medan tersedia.",
    "Instruction4": "Klik “Hantar” untuk melengkapkan Permintaan Sampel anda.",
    "Bank": "Bank: CIMB Bank Berhad",
    "Name": "Nama Penerima: Diamond King (M) Sdn. Bhd.",
    "Account": "Nombor Akaun: 8006574415"
  },
  "cn": {
    "Order Instruction:": "样品申请说明:",
    "Instruction1": "请将运输费金额存入以下银行帐户。",
    "Instruction2": "使用以下 “上传银行存款单据”上传您的银行存款单据。",
    "Instruction3": "填写其他必填字段。",
    "Instruction4": "单击 “提交” 以完成您的样品申请。",
    "Bank": "银行: CIMB Bank Berhad",
    "Name": "户名: Diamond King (M) Sdn. Bhd.",
    "Account": "户号: 8006574415"
  }
}
</i18n>

<template>
  <div class="row instruction-text text-left">
    <div class="col-6">
      {{ $t('Order Instruction:') }}
      <ol style="padding-left: 1.25rem">
        <li>{{ $t('Instruction1') }}</li>
        <!-- <li>{{ $t('Instruction2') }}</li> -->
        <li>{{ $t('Instruction3') }}</li>
        <li>{{ $t('Instruction4') }}</li>
      </ol>
    </div>
    <div class="col-6">
      <p>{{ $t('Bank') }}</p>
      <p>{{ $t('Name') }}</p>
      <p>{{ $t('Account') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderModalInstruction'
}
</script>

<style scoped>
p {
  margin-bottom: 0px;
}

.instruction-text {
  font-size: 1rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #e7e7e7;
}
</style>
