import Vue from 'vue'
import Vuex from 'vuex'

import { getUser, setUser } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录状态信息
    user: getUser(),
    // 控制replylist弹出层显示隐藏
    showReplyList: false,
    // 点击回复按钮的时候，记录当前评论对象
    currentComment: null
  },
  mutations: {
    setUser (state, data) {
      // 在store中记录，登录信息
      state.user = data
      // 存储到本地存储
      setUser(data)
    },
    setShowReplyList (state, value) {
      state.showReplyList = value
    },
    setCurrentComment (state, value) {
      state.currentComment = value
    }
  },
  actions: {

  }
})
