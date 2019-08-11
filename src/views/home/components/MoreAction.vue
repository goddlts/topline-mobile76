<template>
  <!-- v-model="show" 实际上是以下代码
    :value="show"
    @input="show = $event"
   -->
  <van-dialog
    :value="show"
    @input="show = $event"
    :showConfirmButton="false"
    closeOnClickOverlay
  >
    Hello World
  </van-dialog>
</template>

<script>
export default {
  name: 'MoreAction',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>

</style>