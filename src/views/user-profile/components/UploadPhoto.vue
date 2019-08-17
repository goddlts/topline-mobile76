<template>
  <van-dialog
    :value="value"
    @input="$emit('input', $event)"
    :showConfirmButton="false"
    closeOnClickOverlay
  >
    <van-cell-group>
      <van-cell title="从相册选择图片" @click="handleSelectPhoto" />
      <input type="file" @change="handlePreview" ref="file" style="display: none">
      <van-cell title="拍照" />
      <van-cell title="取消" @click="$emit('input', false)" />
    </van-cell-group>
  </van-dialog>
</template>

<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'

Vue.use(ImagePreview)
export default {
  name: 'UploadPhoto',
  props: ['value'],
  data () {
    return {
    }
  },
  methods: {
    // 点击从相册选择图片，弹出选择文件的对话框
    handleSelectPhoto () {
      // 让file点一下，弹出选择文件
      this.$refs.file.click()
    },
    // 当file中选择了文件
    handlePreview () {
      // 1. 隐藏当前对话框
      this.$emit('input', false)
      // 2. 预览图片
      ImagePreview({
        images: [
          URL.createObjectURL(this.$refs.file.files[0])
        ],
        showIndex: false,
        onClose: this.handleUpload
      })
    },
    // 处理文件上传
    handleUpload () {
      // 1. 提示用户是否上传
      this.$dialog.confirm({
        message: '是否确认该图片作为头像'
      }).then(() => {
        // on confirm
        // 2. 上传
      }).catch(() => {
        // on cancel
      });
    }
  }
}
</script>

<style lang="less" scoped>
.van-cell__title {
  text-align: center;
}
</style>