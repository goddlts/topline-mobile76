<template>
  <div>
    <!-- 未登录 显示 -->
    <un-login v-if="!user"></un-login>
    <!-- 登录显示用户信息 -->
    <div v-else>
      <user-info></user-info>
      <van-cell-group>
        <van-grid clickable>
          <van-grid-item icon="star" text="我的收藏"/>
          <van-grid-item icon="chat" text="我的评论"/>
          <van-grid-item icon="like" text="我的点赞"/>
          <van-grid-item icon="browsing-history" text="浏览历史"/>
        </van-grid>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="消息通知" is-link />
        <van-cell title="用户反馈" is-link />
        <van-cell title="小智同学" is-link />
        <van-cell title="系统设置" is-link to="/settings" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import UnLogin from './components/UnLogin'
import UserInfo from './components/UserInfo'
import { mapState } from 'vuex'
export default {
  name: 'My',
  components: {
    UnLogin,
    UserInfo
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>

</style>
