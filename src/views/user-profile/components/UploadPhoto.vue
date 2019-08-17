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

import { uploadPhoto } from '@/api/user'
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
    async handleUpload () {
      // 1. 提示用户是否上传
      this.$dialog.confirm({
        message: '是否确认该图片作为头像'
      }).then(async () => {
        // 正在上传的提示
        const toast = this.$toast.loading({
          duration: 0,       // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: 'spinner',
          message: '正在上传...'
        })
        // on confirm
        // 2. 上传
        try {
          const data = await uploadPhoto('photo', this.$refs.file.files[0])
          // 当上传成功之后，要获取最新上传图片的路径，更新父组件中的头像
          this.$emit('upload-success', data.photo)
          this.$toast.success('上传成功')
        } catch (err) {
          this.$toast.fail('上传失败' + err)
        }
        toast.clear()
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