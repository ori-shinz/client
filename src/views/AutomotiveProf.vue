<template>
  <div>
    <section id="main-board">
      <div class="container pb-5">
        <!-- Snow wash shampoo text -->
        <div class="row justify-content-center mb-5">
          <div class="col-sm-9 col-12 margin-sementara">
            <h1 class="text-white text-center moto">
              Snow Wash Shampoo for Automotive Professional Use
            </h1>
          </div>
        </div>

        <!-- Bucket Image -->
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <img src="~@/assets/images/bucket_eco_withtext.png" class="bucket">
          </div>
          <div class="col-sm-6">
            <img src="~@/assets/images/bucket_gold_withtext.png" class="bucket">
          </div>
        </div>
      </div>
    </section>
    <section id="free-sample">
      <div class="container">
        <div class="row border border-warning rounded pt-2 bmw">
          <div class="col-sm-8 text-left pl-5 pt-3 pb-2">
            <h5 class="free-title"><span class="text-orange">Get</span> 
            <span class="text-fire"> FREE </span> <span class="text-orange">Sample</span></h5>
            <p class="free-text text-white">If you want to see the result of how great is our product, you can request free sample before you even buying.</p>
          </div>
          <div class="col-sm-4 request-btn">
            <button class="btn-orange">
              Request Now
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AutomotiveProf'
}
</script>

<style scoped>
  #main-board {
    background-image: url('~@/assets/images/backgrounds/bg-automotive-professional.jpg');
  }
  #free-sample {
    background-color: black;
  }
  .moto {
    font-size: 60px;
  }
  .free-title {
    font-size: 40px;
  }
  .free-text {
    font-size: 20px;
  }
  .btn-orange {
    width: 220px;
    height: 40px;
    border-radius: 5px;
    border-color: #f58220;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to left, #f58220, #f58220);
  }
  .text-orange {
    color: #f58220;
  }
  .text-fire {
    color: #f53020;
  }
  .margin-sementara {
    margin-top: 67px;
  }
  .bucket {
    max-width: 100%;
    max-height: auto;
  }
  .bmw {
    /* width: 1240px;
    height: 186px;
    opacity: 0.2;
    -webkit-filter: blur(1px);
    filter: blur(1px); */
    background-color: rgba(255,255,0,0.3);
  }
  .request-btn {
    display: flex;
    align-items: center;
  }
</style>
