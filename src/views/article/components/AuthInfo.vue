<template>
  <div class="auth-info">
    <div class="base-info">
      <img class="avatar" src="https://img.yzcdn.cn/vant/logo.png" alt="">
      <div>
        <p>黑马程序员</p>
        <p>3天前</p>
      </div>
    </div>
    <div>
      <van-button
        type="danger"
        :loading="false"
      >关注</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthInfo'
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
