import Vue from 'vue'
import Vuex from 'vuex'

import { getUser, setUser } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录状态信息
    user: getUser()
  },
  mutations: {
    setUser (state, data) {
      // 在store中记录，登录信息
      state.user = data
      // 存储到本地存储
      setUser(data)
    }
  },
  actions: {

  }
})
