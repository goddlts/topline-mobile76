<template>
  <!-- v-model="show" 实际上是以下代码
    :value="show"
    @input="show = $event"
   -->
  <van-dialog
    :value="value"
    @input="$emit('input', $event)"
    :showConfirmButton="false"
    closeOnClickOverlay
  >
    Hello World
  </van-dialog>
</template>

<script>
export default {
  name: 'MoreAction',
  props: ['value']
}
</script>

<style>

</style>