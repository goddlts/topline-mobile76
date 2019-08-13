<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="$router.push('/')"
    />
    <!-- 搜索建议 -->
    <van-cell-group>
      <van-cell title="单元格" icon="search" />
      <van-cell title="单元格" icon="search" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {
      console.log('xxx')
    }
  }
}
</script>

<style>

</style>