export default {
  install (Vue, options) {
    // 判断是否登录
    Vue.prototype.$checkLogin = function () {
      // 判断用户是否登录
      if (this.$store.state.user) {
        return true
      }
      // 如果未登录提示对话框
      this.$dialog.confirm({
        title: '登录提示',
        message: '该操作需要登录，确认登录么？'
      }).then(() => {
        // on confirm
        this.$router.push({
          name: 'login',
          query: {
            // 在url上记录下来，跳转之前的地址
            redirect: this.$route.fullPath
          }
        })
      }).catch(() => {
        // on cancel
      })
      return false
    }    
  }
}