<template>
  <div class="login-wrap">
    <!-- 导航头 -->
    <van-nav-bar
      title="登录"
    />
    <!-- 表单内容 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        label="手机号"
        placeholder="请输入手机号"
        clearable
        left-icon="contact"
        :error-message="mobileErrorMsg"
      />
      <van-field
        v-model="user.code"
        label="验证码"
        placeholder="请输入验证码"
        clearable
        left-icon="like-o"
      >
        <van-button slot="button" size="small" type="default">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <!-- 登录按钮 -->
    <div class="login-btn">
      <van-button @click="handleLogin" class="btn" type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      mobileErrorMsg: ''
    }
  },
  methods: {
    async handleLogin () {
      // 验证表单的输入
      if (this.user.mobile.trim().length === 0) {
        this.mobileErrorMsg = '请输入手机号码'
        return
      } else {
        this.mobileErrorMsg = ''
      }

      try {
        const data = await login(this.user)
        // 记录登录状态
        // 1. 把登录状态记录到 localStorage
        // window.localStorage.setItem('user', JSON.stringify(data))
        // 2. 把登录状态记录到 vuex，store中

        // 提交 mutation,记录到state中
        this.$store.commit('setUser', data)
        // 跳转到首页
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log('登录失败' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  padding: 20px;
  .btn {
    width: 100%;
  }
}
</style>
