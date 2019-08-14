<template>
  <div class="auth-info">
    <div class="base-info">
      <img class="avatar" :src="article.aut_photo" alt="">
      <div>
        <p>{{ article.aut_name }}</p>
        <p>{{ article.pubdate | fmtDate }}</p>
      </div>
    </div>
    <div>
      <van-button
        @click="handleFollow"
        :type="article.is_followed ? 'default' : 'danger'"
        :loading="false"
      >{{ article.is_followed ? '已' : '' }}关注</van-button>
    </div>
  </div>
</template>

<script>
import { followUser, unFollowUser } from '@/api/user'

export default {
  name: 'AuthInfo',
  props: ['article'],
  methods: {
    async handleFollow () {
      // 判断用户是否登录，如果未登录的话提示
      if (!this.$checkLogin()) {
        return
      }
      try {
        // 判断当前是否关注
        if (this.article.is_followed) {
          // 如果已关注 unFollowUser，is_followed = false
          await unFollowUser(this.article.aut_id)
          this.article.is_followed = false
        } else {
          // 如果未关注 followUser，is_followed = true
          await followUser(this.article.aut_id)
          this.article.is_followed = true
        }
      } catch (err) {
        this.$toast.fail('操作失败' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.auth-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  .base-info {
    display: flex;
    align-items: center;
  }
  .avatar {
    margin-right: 10px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
}
</style>
