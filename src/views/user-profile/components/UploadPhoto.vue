<template>
  <van-dialog
    v-model="show"
    :showConfirmButton="false"
    closeOnClickOverlay
  >
    <van-cell-group>
      <van-cell title="从相册选择图片" />
      <van-cell title="拍照" />
      <van-cell title="取消" />
    </van-cell-group>
  </van-dialog>
</template>

<script>
export default {
  name: 'UploadPhoto',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style lang="less" scoped>
.van-cell__title {
  text-align: center;
}
</style>