<template>
  <div>
    搜索结果
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: ['q'],
  created() {
    // console.log(this.$route.params.q)
    console.log(this.q)
  }
}
</script>

<style>

</style>