<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="黑马头条"
    />
    <!-- 频道列表 -->
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
