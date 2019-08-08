import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 设置 REM 的基准值
import 'amfe-flexible'

import '@/styles/index.less'
import VeeValidate from 'vee-validate'

// 表单验证插件
Vue.use(VeeValidate)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
