<template>
  <div class="modal fade bg-brown" :id="cardTitle+'-'+orderType+'-outside-modal'" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="md-contain modal-dialog mx-auto filter-none" role="document" >
      <div class="modal-content md-bg text-white">
        <button type="button" class="close-btn text-warning ml-auto mr-4 mt-4 p-2 btn-circle  border-warning" data-dismiss="modal" >
          X
        </button>
        <div class="modal-header border-0 justify-content-center">
          <h5 class="md-title mb-3">Order Request</h5>
        </div>
        <div class="modal-body md-content bg-brown d-flex flex-column align-items-start mx-5">
          <h5 class="text-orange title mb-4 pl-3">Order Details</h5>
          <div class="container text-left">
            <div class="row text-content mb-3">
              <div class="col-3">Product</div>
              <div class="col-3">ORI SHINZ {{orderType}}</div>
              <div class="col-3">Weight / drum</div>
              <div class="col-3 text-right">2.7 KG</div>
            </div>
            <div class="row text-content mb-3">
              <div class="col-3">Order Type </div>
              <div class="col-3">{{ cardTitle }}</div>
              <div class="col-1">Quantity</div>
              <div class="col-5 text-right">
                <pre class="text-white mb-0 text-content text-orange"> -  <span class="text-white">2</span>  +  drum(s)</pre>
              </div>
            </div>
            <form>
              <div class="form-row">
                <div class="col-md-6 pr-3">
      <input type="text" class="form-control md-input" id="validationDefault01" placeholder="First name" value="Mark" required>
                </div>
                <div class="col-md-6 pl-3">
      <input type="text" class="form-control md-input" id="validationDefault01" placeholder="First name" value="Mark" required>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderModal',
  props: [
    'cardTitle',
    'orderType'
  ]
}
</script>

<style scoped>
.bg-brown {
  background-color: rgba(48, 22, 0, 0.78) !important;
}
.md-content {
  background-color:rgba(245, 130, 32, 0.2) !important;
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
.md-input {
  border: 0 !important;
  border-radius: 0;
  outline: 0 !important;
  background: transparent !important;
  border-bottom: 1px solid orange !important;
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