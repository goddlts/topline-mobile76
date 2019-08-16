<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="文章详情"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="article" v-if="article">
      <!-- 文章标题 -->
      <h2 class="article-title">{{ article.title }}</h2>
      <!-- 作者信息 -->
      <auth-info :article="article"></auth-info>
      <!-- 文章内容 -->
      <div class="article-content" v-html="article.content">
      </div>
      <!-- 点赞和取消 -->
      <more-action :article="article"></more-action>

      <!-- 评论列表 -->
      <comment-list></comment-list>
    </div>
  </div>
</template>

<script>
import AuthInfo from './components/AuthInfo'
import MoreAction from './components/MoreAction'
import CommentList from './components/CommentList'
import { getArticle } from '@/api/article'

export default {
  name: 'Article',
  components: {
    AuthInfo,
    MoreAction,
    CommentList
  },
  props: ['id'],
  data () {
    return {
      article: null
    }
  },
  created () {
    this.loadArticle()
  },
  methods: {
    async loadArticle () {
      try {
        const data = await getArticle(this.id)
        this.article = data
      } catch (err) {
        this.$toast.fail('获取文章失败' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  margin-top: 92px;
  padding: 0px 20px;
  .article-title {
    font-size: 40px;
    font-weight: bold;
  }
  .article-content {
    font-size: 26px;
  }
}
</style>
