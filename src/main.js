import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
// 设置 REM 的基准值
import 'amfe-flexible'
import '@/filters'

import '@/styles/index.less'
import VeeValidate, { Validator } from 'vee-validate'
// 导入中文的文件
import zhCN from 'vee-validate/dist/locale/zh_CN'
// 导入判断登录的插件
import CheckLogin from '@/utils/CheckLogin'

// 注册插件，调用了CheckLogin的install方法
Vue.use(CheckLogin)
// 表单验证插件
Vue.use(VeeValidate)
// 配置语言
Validator.localize('zh_cn', zhCN)

Vue.use(Vant)
Vue.use(Lazyload)

Vue.prototype.$sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
