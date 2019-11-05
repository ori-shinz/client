<template>
  <div class="col-sm-12 mask p-5 col-md-6 text-left flex-column card-mini-limit">
    <p class="orange-title" v-html="title"></p>
    <p class="text-white white-card-content" v-html="content"></p>
    <button type="button" class="btn-orange text-white" v-html="buttonText" @click="$emit('triggerroute', buttonText)"></button>
  </div>
</template>

<script>
export default {
  name: 'BottomCard',
  props: {
    title: String,
    content: String,
    buttonText: String
  }
}
</script>

<style scoped>
@import '~@/assets/styles/orange-card.css'

</style>
