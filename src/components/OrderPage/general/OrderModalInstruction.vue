<template>
  <div class="row mb-2 instruction-text text-left">
    <div class="col-6">
      Order Instruction:
      <ol style="padding-left: 1.25rem">
        <li>
          Please bank-in the Total Price to the following Bank
          Account.
        </li>
        <li>
          Upload your bank-in slip using the following “Upload
          Bank-in Slip” field.
        </li>
        <li>Fill in other required fields.</li>
        <li>Click “Submit” to complete your Order.</li>
      </ol>
    </div>
    <div class="col-6">
      <p>
        Bank: CIMB Bank Berhad
      </p>
      <p>
        Name: Diamond King (M) Sdn. Bhd.
      </p>
      <p>
        Account Number: 8006574415
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderModalInstruction'
};
</script>

<style scoped>
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