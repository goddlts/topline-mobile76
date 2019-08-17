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
      <van-cell title="头像" is-link @click="showUpload=true">
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

    <!-- 弹出上传头像 -->
    <upload-photo @upload-success="hanldeSuccess" v-model="showUpload"></upload-photo>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
import UploadPhoto from './components/UploadPhoto'
export default {
  name: 'UserProfile',
  components: {
    UploadPhoto
  },
  data () {
    return {
      currentUser: {},
      // 控制upload弹出层的显示隐藏
      showUpload: false
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
    },
    // 当图片上传成功的时候会执行
    hanldeSuccess (photo) {
      this.currentUser.photo = photo
    }
  }
}
</script>

<style>

</style>