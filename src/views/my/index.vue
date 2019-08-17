<template>
  <div>
    <!-- 未登录 显示 -->
    <un-login v-if="!user"></un-login>
    <!-- 登录显示用户信息 -->
    <user-info v-else></user-info>
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
