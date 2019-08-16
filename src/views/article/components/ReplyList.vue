<template>
  <van-popup
    v-if="$store.state.currentComment"
    :value="$store.state.showReplyList"
    position="bottom"
    :style="{ height: '80%' }"
    @click-overlay="$store.commit('setShowReplyList', false)"
  >
    <!-- @click-overlay="" 点击遮罩层的时候执行，把showReplyList设置为false -->

    <!-- 头 -->
    <van-nav-bar
      :title="$store.state.currentComment.reply_count + '条评论'"
    />
    <!-- 当前的评论信息 -->
    <van-cell
    >
      <!-- 作者名字 -->
      <div slot="title">
        {{ $store.state.currentComment.aut_name }} &nbsp; <van-tag>楼主</van-tag>
      </div>
      <!-- 头像 -->
      <div slot="icon">
        <img class="avatar" :src="$store.state.currentComment.aut_photo" alt="">
      </div>
      <!-- 右边的按钮 -->
      <div slot="default">
        <van-button type="default" icon="star-o" size="mini">赞</van-button>
      </div>
      <!-- 评论内容 -->
      <div slot="label">
        <p>{{ $store.state.currentComment.content }}</p>
        <span>{{ $store.state.currentComment.pubdate | fmtDate }}</span> &nbsp; <span>回复 {{ $store.state.currentComment.reply_count }}</span>
      </div>
    </van-cell>
    <!-- 评论列表 -->
    <h6>全部回复</h6>
    <comment-list :isArticle="false" :id="$store.state.currentComment.com_id.toString()"></comment-list>
    <!-- 发布评论 -->
    <send-comment :id="$store.state.currentComment.com_id.toString()" :artId="id"></send-comment>
  </van-popup>
</template>

<script>
import CommentList from './CommentList'
import SendComment from './SendComment'
export default {
  name: 'ReplyList',
  // 文章的id
  props: ['id'],
  components: {
    CommentList,
    SendComment
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