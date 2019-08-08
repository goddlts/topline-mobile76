<template>
  <div class="login-wrap">
    <!-- 导航头 -->
    <van-nav-bar
      title="登录"
    />
    <!-- 表单内容 -->
    <van-cell-group>
      <!-- veevaldate验证插件
        1. 指令 验证规则 v-validate
        2. 必须要有name属性
        3. 错误信息 errors.first('name属性的值')
       -->
      <van-field
        name="mobile"
        v-validate="'required|digits:11'"
        v-model="user.mobile"
        label="手机号"
        placeholder="请输入手机号"
        clearable
        left-icon="contact"
        :error-message="errors.first('mobile')"
      />
      <van-field
        name="code"
        v-validate="'required|digits:6'"
        :error-message="errors.first('code')"
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
  created () {
    // 自定义错误信息
    const dict = {
      custom: {
        mobile: {
          required: '手机号不能为空',
          digits: '手机号必须为11位数字'
        },
        code: {
          required: '验证码不能为空',
          digits: '验证码必须为6位数字'
        }
      }
    };

    // or use the instance method
    this.$validator.localize('zh_cn', dict);
  },
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
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
