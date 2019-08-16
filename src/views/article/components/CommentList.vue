<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell
      v-for="comment in comments"
      :key="comment.com_id.toString()"
      :title="comment.aut_name"
    >
      <!-- 头像 -->
      <div slot="icon">
        <img class="avatar" :src="comment.aut_photo" alt="">
      </div>
      <!-- 右边的按钮 -->
      <div slot="default">
        <van-button type="default" icon="star-o" size="mini">赞</van-button>
      </div>
      <!-- 评论内容 -->
      <div slot="label">
        <p>{{ comment.content }}</p>
        <span>{{ comment.pubdate | fmtDate }}</span> &nbsp; <span>回复 {{ comment.reply_count }}</span>
      </div>
    </van-cell>
  </van-list>
</template>

<script>
import { getComments } from '@/api/comment'
export default {
  name: 'CommentList',
  // 接收外部调用传递的参数 isArticle true 获取文章评论，false 获取评论的评论
  // id 文章的id 或者 评论的id
  props: ['isArticle', 'id'],
  data() {
    return {
      comments: [],
      loading: false,
      finished: false,
      // 记录最后一条评论的id
      offset: null
    }
  },

  methods: {
    async onLoad() {
      const data = await getComments({
        isArticle: this.isArticle,
        source: this.id,
        offset: this.offset
      })
      // 获取评论列表，获取最后一条数据的id
      this.comments.push(...data.results)
      this.offset = data.last_id
      
      this.loading = false
      // 判断是否所有数据都已经加载
      if (data.results.length === 0) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
}
</style>