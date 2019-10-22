<template>
  <section id="main-board">
    <Navbar />
    <div class="container pb-5">
      <!-- Snow wash shampoo text -->
      <Heading>Snow Wash Shampoo for Automotive Professional Use</Heading>

      <!-- Bucket Image -->
      <DoubleBucket :bucket-img="bucketImg"/>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/general/NavBar'
import Heading from '@/components/general/Heading'
import DoubleBucket from '@/components/general/DoubleBucket'

export default {
  name: 'MainBoard',
  props: [
    'bucketImg'
  ],
  components: {
    Navbar, Heading, DoubleBucket
  }
}
</script>

<style>

</style>