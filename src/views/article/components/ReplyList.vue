<template>
  <van-popup
    v-model="show"
    position="bottom"
    :style="{ height: '80%' }"
  >
    <!-- 头 -->
    <van-nav-bar
      title="0条评论"
    />
    <!-- 当前的评论信息 -->
    <van-cell
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
    <!-- 评论列表 -->
    <!-- 发布评论 -->
  </van-popup>
</template>

<script>
export default {
  name: 'ReplyList',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>

</style>