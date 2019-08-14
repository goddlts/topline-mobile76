<template>
  <div class="more-action">
    <van-button
      icon="star-o"
      round
      :loading="false"
      type="default"
    >点赞</van-button>

    <van-button
      icon="delete"
      round
      :loading="false"
      type="default"
    >不喜欢</van-button>
  </div>
</template>

<script>
export default {
  name: 'MoreAction'
}
</script>

<style lang="less" scoped>
.more-action {
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
