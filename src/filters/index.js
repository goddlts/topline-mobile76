import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
// 汉化
dayjs.locale('zh-cn')

Vue.filter('fmtDate', (value) => {
  // console.log('dayjs', dayjs())
  // console.log('dayjs(value)', dayjs(value))
  // console.log('dayjs().to(dayjs(value))', dayjs().to(dayjs(value)))
  // console.log('dayjs().from(dayjs(value))', dayjs().from(dayjs(value)))
  return dayjs().to(dayjs(value))
})
