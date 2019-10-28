<template>
  <div class="aboutus">
    <NavBar></NavBar>

    <section id="title" class="mbc-lg-400">
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-12 boxcontent mb-5">
            <div class="header">
              Become Our Agent / Distributor / OEM <br> & Be Your Own Boss
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 boxcontent mb-5">
            <button type="button" class="Rectangle btn" @click="$router.push('/')">Join Now</button>
          </div>
        </div>
      </div>
    </section>

    <div id="backgoundplay">

      <section id="benefit" class="mbc-lg-200">
        <Benefit></Benefit>
      </section>

      <section id="form" class="mbc-lg-150">
        <FormAgent></FormAgent>
      </section>

      <section id="contact" class="mbc-lg-150 ">
        <Contact></Contact>
      </section>

      <section id="detail">
        <Detail></Detail>
      </section>

      <!-- FOOTER -->
      <section id="bottom">
        <div class="container pb-5">
          <BottomCarShine />
          <Footer />
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'
import Benefit from '@/components/AgentDistributor/Benefit.vue'
import FormAgent from '@/components/AgentDistributor/FormAgent.vue'
import Contact from '@/components/AgentDistributor/Contact.vue'
import Detail from '@/components/AgentDistributor/Detail.vue'
import BottomCarShine from '@/components/AutomotiveProfessional/BottomCarShine'
import Footer from '@/components/general/Footer'

export default {
  name: 'aboutus',
  components: {
    NavBar,
    Benefit,
    FormAgent,
    Contact,
    Detail,
    BottomCarShine,
    Footer
  }
}
</script>

<style scoped>
.header {
  width: 1118px;
  height: 152px;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.7);
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  color: #e7e7e7;
}

.aboutus {
  background-image: url('~@/assets/images/backgrounds/bg-agent.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}
#backgoundplay {
  background-image: url('~@/assets/images/newassets/group-13-copy.png');
  background-repeat: no-repeat;
}

.Rectangle {
  width: 220px;
  height: 40px;
  border-radius: 5px;
  background-image: linear-gradient(to left, #ffca65, #f58220);
  font-size: 20px;
  font-weight: bold;
  color: #0e1737;
}
</style>
