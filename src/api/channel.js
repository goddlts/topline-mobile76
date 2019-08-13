import request from '@/utils/request'

/**
 * 获取频道列表
 * 匿名用户，获取默认的频道列表
 * 登录用户，获取自己配置的频道列表
 */
export const getChannels = () => {
  return request.get('/app/v1_0/user/channels')
}

/**
 * 获取所有的频道
 */
export const getAllChannels = () => {
  return request.get('/app/v1_0/channels')
}

/**
 * 删除用户的频道
 * @param {*} 频道的id
 */
export const deleteUserChannel = (id) => {
  return request.delete(`/app/v1_0/user/channels/${id}`)
}

/**
 * 重置用户的频道
 * channels ==> [{id:1, seq: 0}]
 * @param {*} channels 
 */
export const resetUserChannels = (channels) => {
  return request.put('/app/v1_0/user/channels', {
    channels
  })
}
