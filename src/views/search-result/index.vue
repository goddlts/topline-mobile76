<template>
  <div>
    <van-nav-bar
      title="搜索结果"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="article in list"
        :key="article.art_id.toString()"
        :title="article.title"
      />
    </van-list>
  </div>
</template>

<script>
import { getSearchResults } from '@/api/search'
export default {
  name: 'SearchResult',
  props: ['q'],
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      // 分页数据
      page: 1,
      perPage: 10,
      // 总共多少页
      pageCount: 0
    };
  },

  methods: {
    async onLoad() {
      await this.$sleep(500)

      try {
        const data = await getSearchResults({
          page: this.page,
          perPage: this.perPage,
          q: this.q
        })
        this.list.push(...data.results)
        this.loading = false
        // 总页数
        this.pageCount = Math.ceil(data.total_count / this.perPage)
        if (this.page >= this.pageCount) {
          // 判断是否是最后一页
          this.finished = true
        }
        this.page++
      } catch (err) {
        this.$toast.fail('加载数据失败' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-list {
  margin-top: 92px;
}
</style>
