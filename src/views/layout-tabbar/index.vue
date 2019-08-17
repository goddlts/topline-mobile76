<template>
  <div>
    <router-view></router-view>
    <!-- tabbar -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">{{ user ? '我的' : '未登录' }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // user () {
    //   return this.$store.state.user
    // }
    ...mapState(['user'])
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
</style>
