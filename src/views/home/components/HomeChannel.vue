<template>
  <van-popup
    :value="value"
    @input="$emit('input', $event)"
    position="bottom"
    :style="{ height: '90%' }"
  >
    HelloWorld
  </van-popup>
</template>

<script>
export default {
  name: 'HomeChannel',
  props: ['value']
  // data () {
  //   return {
  //     show: true
  //   }
  // }
}
</script>

<style>

</style>