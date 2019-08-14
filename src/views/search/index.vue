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
    <van-cell-group v-show="suggestionList.length">
      <van-cell
        @click="onSearch(item)"
        v-for="item in suggestionList"
        :key="item"
        :title="item"
        icon="search" />
    </van-cell-group>

    <!-- 历史记录 -->
    <van-cell-group v-show="!suggestionList.length">
      <van-cell
        title="历史记录">
        <van-icon
          v-show="!showClose"
          @click="showClose = true"
          slot="right-icon"
          name="delete"
          style="line-height: inherit;"
        />
        <div v-show="showClose">
          <span @click="handleDeleteAll">全部删除</span>&nbsp;
          <span @click="showClose = false">完成</span>
        </div>
      </van-cell>
      <van-cell
        @click="handleDelete(index)"
        v-for="(item, index) in histories"
        :key="item"
        :title="item">
        <van-icon
          v-show="showClose"
          slot="right-icon"
          name="close"
          style="line-height: inherit;"
        />
      </van-cell>
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
      suggestionList: [],
      // 控制关闭按钮的显示和隐藏
      showClose: false,
      // 历史记录
      histories: JSON.parse(window.localStorage.getItem('history')) || []
    }
  },
  methods: {
    onSearch (value) {
      // value 搜索的关键字
      value = value || this.value
      // console.log('xxx')

      // 记录搜索历史
      if (!this.histories.includes(value)) {
        this.histories.push(value)
        // 如果登录，发送请求
        // 如果没有登录， 记录到本地存储
        window.localStorage.setItem('history', JSON.stringify(this.histories))
      }
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
    }, 500),
    // 删除所有历史记录
    handleDeleteAll () {
      this.histories = []
      window.localStorage.setItem('history', JSON.stringify(this.histories))
    },
    // 删除指定的历史记录
    handleDelete (index) {
      this.histories.splice(index, 1)
      window.localStorage.setItem('history', JSON.stringify(this.histories))
    }
  }
}
</script>

<style>

</style>