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
      <van-cell title="头像" is-link>
        <div slot="default">
          <img width="30" height="30" src="http://toutiao.meiduo.site/Fp2XB3DG7Dsye6hAcpg9ZI_yzcpV" alt="">
        </div>
      </van-cell>
      <van-cell title="昵称" is-link value="用户的名字" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="性别" is-link value="男" />
      <van-cell title="生日" is-link value="2000-1-1"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'UserProfile'
}
</script>

<style>

</style>