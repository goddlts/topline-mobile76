<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="$router.push('/')"
      @input="handleSuggestion"
    />
    <!-- 搜索建议 -->
    <van-cell-group>
      <van-cell
        v-for="item in suggestionList"
        :key="item"
        :title="item"
        icon="search" />
    </van-cell-group>
  </div>
</template>

<script>
import _ from 'lodash'
import { getSuggestion } from '@/api/search'
export default {
  data () {
    return {
      value: '',
      // 存储搜索建议的列表
      suggestionList: []
    }
  },
  methods: {
    onSearch () {
      console.log('xxx')
    },
    // 用户在文本输入内容的时候，获取搜索建议
    handleSuggestion: _.debounce(async function () {
      if (this.value.trim() === '') {
        this.suggestionList = []
        return
      }
      try {
        const data = await getSuggestion(this.value)
        this.suggestionList = data.options
      } catch (err) {
        console.log(err)
      }
    }, 500)
  }
}
</script>

<style>

</style>