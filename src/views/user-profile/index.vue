<template>
  <div>
    <van-nav-bar
      title="个人信息"
      right-text="保存"
      left-arrow
      @click-left="$router.back()"
    />
      <!-- @click-right="btnSave" -->
    <van-cell-group>
      <van-cell title="头像" is-link>
        <div slot="default">
          <img width="30" height="30" :src="currentUser.photo" alt="">
        </div>
      </van-cell>
      <van-cell title="昵称" is-link :value="currentUser.name" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="性别" is-link :value="currentUser.gender ? '女' : '男'" />
      <van-cell title="生日" is-link :value="currentUser.birthday"/>
    </van-cell-group>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
export default {
  name: 'UserProfile',
  data () {
    return {
      currentUser: {}
    }
  },
  created () {
    this.loadUserProfile()
  },
  methods: {
    async loadUserProfile () {
      try {
        const data = await getUserProfile()
        this.currentUser = data
      } catch (err) {
        this.$toast.fail('获取用户资料失败' + err)
      }
    }
  }
}
</script>

<style>

</style>