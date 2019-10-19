<template>
  <div style="background-color: black">
    <MainBoard />
    <!-- free sample component -->
    <section id="free-sample">
      <FreeSample />
    </section>
    <!-- why choose us component -->
    <section id="why-us">
      <div class="container">
        <!-- why choose us -->
        <ChooseUs />
        <!-- key benefits -->
        <KeyBenefits />
      </div>
    </section>
    <!-- bottom sample component -->
    <section id="bottom">
      <div class="container pb-5">
        <div class="row mask mb-5">
          <div class="col-sm-8 text-left pl-5 pt-3 pb-2">
            <p class="free-title text-orange">Become Our Agent / Distributor / OEM</p>
            <p class="free-text text-white">Be your own Boss</p>
          </div>
          <div class="col-sm-4 request-btn justify-content-center">
            <button class="Join-Now btn-orange">Join Now</button>
          </div>
        </div>
        <BottomCarShine />
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import MainBoard from '@/components/AutomotiveProfessional/MainBoard'
import FreeSample from '@/components/AutomotiveProfessional/FreeSample'
import ChooseUs from '@/components/AutomotiveProfessional/ChooseUs'
import BottomCarShine from '@/components/AutomotiveProfessional/BottomCarShine'
import Footer from '@/components/general/Footer'
import KeyBenefits from '@/components/AutomotiveProfessional/KeyBenefits'

export default {
  name: 'AutomotiveProf',
  components: {
    MainBoard,
    FreeSample,
    ChooseUs,
    KeyBenefits,
    BottomCarShine,
    Footer
  }
};
</script>

<style>
.mask {
  border-radius: 30px;
  border: solid 1px #ffca65 !important;
  background-color: rgba(245, 130, 32, 0.2);
}
.free-title {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f58220;
}
.free-text {
  font-size: 20px;
}
.Join-Now {
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.request-btn {
  display: flex;
  align-items: center;
}
.btn-orange {
  width: 220px;
  height: 40px;
  border-radius: 5px;
  border-color: #f58220;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to left, #f58220, #f58220);
}
.btn-orange-lg {
  width: 255px;
  height: 70px;
  border-radius: 5px;
  border-color: #f58220;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  background-image: linear-gradient(to left, #f58220, #f58220);
}
.text-orange {
  color: #f58220;
}
</style>

<style scoped>
#main-board {
  background-image: url('~@/assets/images/backgrounds/bg-automotive-professional.jpg');
  background-size: 100% 105%;
}
#free-sample {
  background-color: black;
}
.now-text {
  width: 82px;
  height: 25px;
  color: #ffffff;
}
#why-us {
  background-image: url('~@/assets/images/newassets/group-13-copy.png');
  background-repeat: no-repeat;
}
</style>
