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
            <td>65.00</td>
            <td>130.00</td>
            <td>195.00</td>
            <td>26.00</td>
          </tr>
          <tr>
            <td>11.00</td>
            <td>21.00</td>
            <td>28.50</td>
            <td>32.00</td>
          </tr>
          <tr>
            <td class="pr-0">
              <button class="btn-loose-order">
                Order
              </button>
            </td>
            <td class="pr-0">
              <button class="btn-loose-order">
                Order
              </button>
            </td>
            <td class="pr-0">
              <button class="btn-loose-order">
                Order
              </button>
            </td>
            <td class="pr-0">
              <button class="btn-loose-order">
                Order
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- <div class="col-sm-6 orange-title">
        <p>
          Bulk Order | <span class="font-italic">Best Price!</span>
        </p>
        <div class="row mb-3 control-order-text">
          <div class="col-sm-3 text-white">Quantity</div>
          <pre class="col-sm-4 text-white mb-0 control-order-text"> -  <span class="text-orange">2</span>  +</pre>
          <div class="col-sm-2 text-orange">drum(s)</div>
        </div>
        <button class="btn btn-bulk-order">
            Bulk Order Now
          </button>
      </div> -->
      <!-- Notes -->
      <!-- <div class="col-sm-4 notes-order">
        Note:
        <ul class="pl-3">
          <li>Maximum Quantity of Loose Order is 4 drums.</li>
          <li>Minimum Quantity for Bulk Order is 1 carton (1 carton = 6 drums).</li>
        </ul>
      </div> -->
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
            <pre class="text-white control-order-text "> - <span class="text-orange">2</span> + <span class="text-orange">carton(s)</span></pre>
            <p class="text-orange text-right">390.00</p>
            <p class="text-orange text-right">FREE OF CHARGE</p>
            <button class="btn btn-block btn-bulk-order">Bulk Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-sm-1">
        <!-- Just a Spacing since its not either around or between justify -_- -->
      </div>
      <div class="col-sm-4 notes-order">
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
  name: 'WestMalayOrderControl',
  components: {
    Fragment
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
</style>
