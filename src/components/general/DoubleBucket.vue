<template>
  <div class="row justify-content-center mb-5">
    <div class="col-sm-6">
      <img :src="ecoImg" class="img-fluid">
    </div>
    <div class="col-sm-6">
      <img :src="goldImg" class="img-fluid">
    </div>
  </div>
</template>

<script>
import ecoImgText from '@/assets/images/bucket_eco_withtext.png'
import goldImgText from '@/assets/images/bucket_gold_withtext.png'
import ecoImg from '@/assets/images/eco-bucket.png'
import goldImg from '@/assets/images/gold-bucket.png'

export default {
  name: 'DoubleBucket',
  props: [
    'bucketImg'
  ],
  data () {
    return {
      ecoImg: '',
      goldImg: ''
    }
  },
  methods: {
    getImg () {
      if (this.bucketImg === 'text') {
        this.ecoImg = ecoImgText
        this.goldImg = goldImgText
      } else {
        this.ecoImg = ecoImg
        this.goldImg = goldImg
      }
    }
  },
  created () {
    this.getImg()
  }
}
</script>

<style>

</style>
