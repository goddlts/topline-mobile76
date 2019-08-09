import request from '@/utils/request'

/**
 * 获取频道列表
 * 匿名用户，获取默认的频道列表
 * 登录用户，获取自己配置的频道列表
 */
export const getChannels = () => {
  return request.get('/app/v1_0/user/channels')
}
