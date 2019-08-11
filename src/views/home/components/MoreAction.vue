<template>
  <van-dialog
    v-model="show"
    title="标题"
    show-cancel-button
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