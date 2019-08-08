import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 设置 REM 的基准值
import 'amfe-flexible'

import '@/styles/index.less'
import VeeValidate, { Validator } from 'vee-validate'
// 导入中文的文件
import zhCN from 'vee-validate/dist/locale/zh_CN'

// 表单验证插件
Vue.use(VeeValidate)
// 配置语言
Validator.localize('zh_cn', zhCN)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
