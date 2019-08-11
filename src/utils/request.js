import axios from 'axios'
import store from '@/store'
import JSONbig from 'json-bigint'

// 1 创建axios实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// allows changes to the response data to be made before
request.defaults.transformResponse = [function (data) {
  try {
    // data 数据可能不是标准的 JSON 格式字符串，否则会导致 JSONbig.parse(data) 转换失败报错
    return JSONbig.parse(data)
  } catch (err) {
    // 无法转换的数据直接原样返回
    return data
  }
}]

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 判断用户是否登录
  // 用户用户登录，设置token
  if (store.state.user) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  // 2 修改返回的数据结构 -- 响应拦截器

  return response.data.data || response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
});

export default request
