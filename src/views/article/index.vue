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
    <div class="article">
      <!-- 文章标题 -->
      <h2 class="article-title">这是文章的标题</h2>
      <!-- 作者信息 -->
      <auth-info></auth-info>
      <!-- 文章内容 -->
      <div class="article-content">
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
      </div>
      <!-- 点赞和取消 -->
      <more-action></more-action>
    </div>
  </div>
</template>

<script>
import AuthInfo from './components/AuthInfo'
import MoreAction from './components/MoreAction'

export default {
  name: 'Article',
  components: {
    AuthInfo,
    MoreAction
  },
  props: ['id']
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
