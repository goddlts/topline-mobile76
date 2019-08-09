import request from '@/utils/request'

/**
 * 获取文章数据
 */
export const getArticles = ({
  channelId,
  timestamp,
  withTop = 1
}) => {
  return request.get('/app/v1_1/articles', {
    params: {
      channel_id: channelId,
      timestamp: timestamp,
      with_top: withTop
    }
  })
}
